import { useEffect, useState } from 'react';
import { highlightCode } from '../../lib/slide/highlight';

let mermaidModulePromise = null;
let mermaidRenderSequence = 0;

function loadMermaid() {
  if (!mermaidModulePromise) {
    mermaidModulePromise = import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs')
      .then((module) => {
        const mermaid = module.default ?? module;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'loose',
          theme: 'dark',
          fontFamily: 'Space Grotesk, ui-sans-serif, system-ui',
        });
        return mermaid;
      });
  }

  return mermaidModulePromise;
}

function renderInlineMarkdown(text, keyPrefix) {
  const parts = [];
  const pattern = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match;
  let tokenIndex = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<span key={`${keyPrefix}-text-${tokenIndex++}`}>{text.slice(lastIndex, match.index)}</span>);
    }

    const token = match[0];
    if (token.startsWith('`')) {
      parts.push(<code key={`${keyPrefix}-code-${tokenIndex++}`}>{token.slice(1, -1)}</code>);
    } else if (token.startsWith('**')) {
      parts.push(<strong key={`${keyPrefix}-strong-${tokenIndex++}`}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('[')) {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        parts.push(
          <a
            key={`${keyPrefix}-link-${tokenIndex++}`}
            href={linkMatch[2]}
            rel="noreferrer"
            target="_blank"
          >
            {linkMatch[1]}
          </a>,
        );
      } else {
        parts.push(<span key={`${keyPrefix}-fallback-${tokenIndex++}`}>{token}</span>);
      }
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(<span key={`${keyPrefix}-tail-${tokenIndex++}`}>{text.slice(lastIndex)}</span>);
  }

  return parts;
}

function parseMarkdown(content) {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.startsWith('```')) {
      const language = line.slice(3).trim() || 'text';
      index += 1;
      const codeLines = [];
      while (index < lines.length && !lines[index].startsWith('```')) {
        codeLines.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push({ type: 'code', language, content: codeLines.join('\n') });
      continue;
    }

    if (/^#{1,6}\s/.test(line)) {
      const level = line.match(/^#+/)[0].length;
      blocks.push({ type: 'heading', level, text: line.slice(level).trim() });
      index += 1;
      continue;
    }

    if (line.includes('|') && index + 1 < lines.length && /^\s*\|?[\s:-]+(\|[\s:-]+)+\|?\s*$/.test(lines[index + 1])) {
      const tableLines = [line];
      index += 2;
      while (index < lines.length && lines[index].includes('|') && lines[index].trim()) {
        tableLines.push(lines[index]);
        index += 1;
      }

      const toCells = (row) => row
        .split('|')
        .map((cell) => cell.trim())
        .filter((cell, cellIndex, array) => !(cell === '' && (cellIndex === 0 || cellIndex === array.length - 1)));

      blocks.push({
        type: 'table',
        headers: toCells(tableLines[0]),
        rows: tableLines.slice(1).map(toCells),
      });
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^[-*]\s+/, ''));
        index += 1;
      }
      blocks.push({ type: 'list', ordered: false, items });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s+/, ''));
        index += 1;
      }
      blocks.push({ type: 'list', ordered: true, items });
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^#{1,6}\s/.test(lines[index]) &&
      !lines[index].startsWith('```') &&
      !/^[-*]\s+/.test(lines[index]) &&
      !/^\d+\.\s+/.test(lines[index])
    ) {
      if (lines[index].includes('|') && index + 1 < lines.length && /^\s*\|?[\s:-]+(\|[\s:-]+)+\|?\s*$/.test(lines[index + 1])) {
        break;
      }
      paragraphLines.push(lines[index]);
      index += 1;
    }
    blocks.push({ type: 'paragraph', text: paragraphLines.join(' ') });
  }

  return blocks;
}

function MermaidBlock({ code }) {
  const [state, setState] = useState({ status: 'loading', svg: '', error: '' });

  useEffect(() => {
    let cancelled = false;
    const renderId = `markdown-mermaid-${mermaidRenderSequence++}`;

    setState({ status: 'loading', svg: '', error: '' });

    loadMermaid()
      .then(async (mermaid) => {
        const result = await mermaid.render(renderId, code);
        if (!cancelled) {
          setState({ status: 'ready', svg: result.svg, error: '' });
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setState({ status: 'error', svg: '', error: error.message });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [code]);

  if (state.status === 'ready') {
    return <div className="markdown-content-diagram" dangerouslySetInnerHTML={{ __html: state.svg }} />;
  }

  if (state.status === 'error') {
    return (
      <div className="markdown-content-diagram">
        <p>Mermaid render failed: {state.error}</p>
        <pre className="markdown-content-code">
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="markdown-content-diagram">
      <p>Rendering Mermaid diagram...</p>
    </div>
  );
}

export default function MarkdownContent({ className = '', content }) {
  const blocks = parseMarkdown(content);

  return (
    <div className={`markdown-content ${className}`.trim()}>
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          const Tag = `h${Math.min(block.level, 4)}`;
          return <Tag key={`block-${index}`}>{renderInlineMarkdown(block.text, `heading-${index}`)}</Tag>;
        }

        if (block.type === 'paragraph') {
          return <p key={`block-${index}`}>{renderInlineMarkdown(block.text, `paragraph-${index}`)}</p>;
        }

        if (block.type === 'list') {
          const ListTag = block.ordered ? 'ol' : 'ul';
          return (
            <ListTag key={`block-${index}`}>
              {block.items.map((item, itemIndex) => (
                <li key={`item-${index}-${itemIndex}`}>{renderInlineMarkdown(item, `list-${index}-${itemIndex}`)}</li>
              ))}
            </ListTag>
          );
        }

        if (block.type === 'table') {
          return (
            <div key={`block-${index}`} className="markdown-content-table-wrap">
              <table className="markdown-content-table">
                <thead>
                  <tr>
                    {block.headers.map((header, headerIndex) => (
                      <th key={`header-${index}-${headerIndex}`}>{renderInlineMarkdown(header, `table-header-${index}-${headerIndex}`)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, rowIndex) => (
                    <tr key={`row-${index}-${rowIndex}`}>
                      {row.map((cell, cellIndex) => (
                        <td key={`cell-${index}-${rowIndex}-${cellIndex}`}>{renderInlineMarkdown(cell, `table-cell-${index}-${rowIndex}-${cellIndex}`)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (block.language === 'mermaid') {
          return <MermaidBlock key={`block-${index}`} code={block.content} />;
        }

        return (
          <pre key={`block-${index}`} className="markdown-content-code">
            <code dangerouslySetInnerHTML={{ __html: highlightCode(block.content, block.language) }} />
          </pre>
        );
      })}
    </div>
  );
}
