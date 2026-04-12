import { useEffect, useState } from 'react';
import LocaleToggle from '../components/LocaleToggle';
import MarkdownContent from '../components/slide/MarkdownContent';
import { useLocale } from '../i18n/LocaleContext';
import { buildLocalizedPath } from '../i18n/localeRouting';
import { pickLocalized } from '../i18n/localize';
import { toGitHubExampleAssetHref } from '../utils/exampleLinks';

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

function localizeItems(items = [], locale) {
  return items.map((item) => pickLocalized(item, locale));
}

function resolveMediaSrc(src) {
  if (!src) return '';
  if (typeof src === 'string') return src;
  if (typeof src === 'object' && 'src' in src) return src.src;
  return '';
}

function isPreviewableHref(href = '') {
  return typeof href === 'string' && href.startsWith('/example/');
}

function inferPreviewLanguage(href = '') {
  if (href.endsWith('.json')) return 'json';
  if (href.endsWith('.js')) return 'javascript';
  if (href.endsWith('.md')) return 'markdown';
  return 'text';
}

function countLines(content = '') {
  return content.replace(/\r\n/g, '\n').split('\n').length;
}

function isInlineExample(content = '') {
  return countLines(content) <= 10;
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
        parts.push(<span key={`${keyPrefix}-linktext-${tokenIndex++}`}>{token}</span>);
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

      const toCells = (row) =>
        row
          .split('|')
          .map((cell) => cell.trim())
          .filter((cell, cellIndex, array) => !(cell === '' && (cellIndex === 0 || cellIndex === array.length - 1)));

      const headers = toCells(tableLines[0]);
      const rows = tableLines.slice(1).map(toCells);
      blocks.push({ type: 'table', headers, rows });
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
    const renderId = `overview-mermaid-${mermaidRenderSequence++}`;

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
    return <div className="overview-diagram" dangerouslySetInnerHTML={{ __html: state.svg }} />;
  }

  if (state.status === 'error') {
    return (
      <div className="overview-diagram">
        <p className="overview-card-copy">Mermaid render failed: {state.error}</p>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="overview-diagram">
      <p className="overview-card-copy">Rendering Mermaid diagram...</p>
    </div>
  );
}

function MarkdownPreview({ content }) {
  return <MarkdownContent className="overview-markdown" content={content} />;
}

function localizeTable(table, locale) {
  if (!table?.headers?.length || !table?.rows?.length) return null;

  return {
    caption: table.caption ? pickLocalized(table.caption, locale) : null,
    headers: localizeItems(table.headers, locale),
    rows: table.rows.map((row) => localizeItems(row, locale)),
  };
}

function OverviewList({ items, locale, className = 'overview-list' }) {
  const localized = localizeItems(items, locale);
  if (!localized.length) return null;

  return (
    <ul className={className}>
      {localized.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  );
}

function OverviewParagraphs({ items, locale, className = 'overview-prose' }) {
  const localized = localizeItems(items, locale);
  if (!localized.length) return null;

  return (
    <div className={className}>
      {localized.map((item, index) => (
        <p key={`${item.slice(0, 24)}-${index}`}>{item}</p>
      ))}
    </div>
  );
}

function OverviewTable({ table, locale }) {
  const localized = localizeTable(table, locale);
  if (!localized) return null;

  return (
    <div className="overview-table-wrap">
      <table className="overview-table">
        {localized.caption ? <caption>{localized.caption}</caption> : null}
        <thead>
          <tr>
            {localized.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {localized.rows.map((row, rowIndex) => (
            <tr key={`${rowIndex}-${row[0] ?? 'row'}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ExamplePreviewBody({ content, href }) {
  if (href.endsWith('.md')) {
    return <MarkdownPreview content={content} />;
  }

  return (
    <pre className="overview-code-block">
      <code className={`language-${inferPreviewLanguage(href)}`}>{content}</code>
    </pre>
  );
}

function PreviewableExampleCard({ description, href, locale, onOpenExample, openLabel, title, type }) {
  const [state, setState] = useState({ status: 'idle', content: '', error: '' });
  const copy = {
    loading: {
      ko: '예시 미리보기를 불러오는 중입니다...',
      en: 'Loading the example preview...',
    },
    error: {
      ko: '예시 미리보기를 불러오지 못했습니다.',
      en: 'Could not load the example preview.',
    },
  };

  useEffect(() => {
    let cancelled = false;
    setState({ status: 'loading', content: '', error: '' });

    fetch(href)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.text();
      })
      .then((content) => {
        if (!cancelled) {
          setState({ status: 'ready', content, error: '' });
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setState({ status: 'error', content: '', error: error.message });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [href]);

  const shouldInline = state.status === 'ready' && isInlineExample(state.content);

  return (
    <>
      {description ? <p className="overview-card-copy">{description}</p> : null}
      {state.status === 'loading' ? <p className="overview-card-copy">{copy.loading[locale]}</p> : null}
      {state.status === 'error' ? (
        <p className="overview-card-copy">
          {copy.error[locale]} {state.error}
        </p>
      ) : null}
      {shouldInline ? (
        <div
          style={{
            marginTop: '10px',
            padding: '12px',
            borderRadius: '14px',
            border: '1px solid rgba(148, 163, 184, 0.14)',
            background: 'rgba(2, 6, 23, 0.45)',
          }}
        >
          <ExamplePreviewBody content={state.content} href={href} />
        </div>
      ) : null}
      {state.status === 'ready' && !shouldInline ? (
        <button
          className="catalog-link overview-artifact-link overview-inline-button"
          onClick={() => onOpenExample(title, href, type)}
          type="button"
        >
          {openLabel}
        </button>
      ) : null}
    </>
  );
}

function OverviewArtifacts({ items = [], locale, openLabel, onOpenExample }) {
  if (!items.length) return null;

  const areDetailed = items.some((item) => item && typeof item === 'object' && !('ko' in item || 'en' in item));
  if (!areDetailed) {
    return <OverviewList items={items} locale={locale} className="overview-list overview-list-tight" />;
  }

  return (
    <div className="overview-artifact-list">
      {items.map((item, index) => {
        const title = pickLocalized(item.title, locale);
        const description = pickLocalized(item.description, locale);
        const type = pickLocalized(item.type, locale);
        const rawHref = pickLocalized(item.href, locale);
        const href = toGitHubExampleAssetHref(rawHref);

        return (
          <article key={`${title}-${index}`} className="overview-artifact-item">
            <div className="overview-artifact-head">
              <h4>{title}</h4>
              {type ? <span className="catalog-pill">{type}</span> : null}
            </div>
            {rawHref && isPreviewableHref(rawHref) ? (
              <PreviewableExampleCard
                description={description}
                href={rawHref}
                locale={locale}
                onOpenExample={onOpenExample}
                openLabel={openLabel}
                title={title}
                type={type}
              />
            ) : href ? (
              <>
                {description ? <p className="overview-card-copy">{description}</p> : null}
                <a
                  className="catalog-link overview-artifact-link overview-inline-button"
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {openLabel}
                </a>
              </>
            ) : description ? (
              <p className="overview-card-copy">{description}</p>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

function PracticeAssetItem({ asset, locale, onOpenExample, openLabel }) {
  const href = pickLocalized(asset.href, locale);
  const title = pickLocalized(asset.label, locale);
  const type = pickLocalized(asset.type, locale);
  const description = pickLocalized(asset.description, locale);
  const externalHref = toGitHubExampleAssetHref(href);

  return (
    <article className="overview-asset-item">
      <div className="overview-asset-head">
        <h3>{title}</h3>
        <span className="catalog-pill">{type}</span>
      </div>
      {isPreviewableHref(href) ? (
        <PreviewableExampleCard
          description={description}
          href={href}
          locale={locale}
          onOpenExample={onOpenExample}
          openLabel={openLabel}
          title={title}
          type={type}
        />
      ) : (
        <>
          {description ? <p className="overview-card-copy">{description}</p> : null}
          {externalHref ? (
            <a
              className="catalog-link overview-artifact-link overview-inline-button"
              href={externalHref}
              rel="noreferrer"
              target="_blank"
            >
              {openLabel}
            </a>
          ) : null}
        </>
      )}
    </article>
  );
}

function OverviewDiagram({ code, title }) {
  return (
    <div className="overview-diagram" aria-label={title}>
      <pre>{code}</pre>
    </div>
  );
}

function ExampleModal({ example, locale, onClose }) {
  const [state, setState] = useState({ status: 'idle', content: '', error: '' });

  useEffect(() => {
    if (!example?.href) return undefined;
    let cancelled = false;
    setState({ status: 'loading', content: '', error: '' });

    fetch(example.href)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.text();
      })
      .then((content) => {
        if (!cancelled) {
          setState({ status: 'ready', content, error: '' });
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setState({ status: 'error', content: '', error: error.message });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [example?.href]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const modalCopy = {
    kicker: {
      ko: 'Inline Preview',
      en: 'Inline Preview',
    },
    close: {
      ko: '닫기',
      en: 'Close',
    },
    loading: {
      ko: '예시 내용을 불러오는 중입니다...',
      en: 'Loading the example content...',
    },
    error: {
      ko: '예시 내용을 불러오지 못했습니다.',
      en: 'Could not load the example content.',
    },
  };

  return (
    <div className="overview-modal-backdrop" data-ui-modal="open" role="presentation" onClick={onClose}>
      <div
        aria-modal="true"
        className="overview-modal-dialog"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="overview-modal-header">
          <div className="overview-modal-copy">
            <span className="overview-modal-kicker">{modalCopy.kicker[locale]}</span>
            <h3 className="overview-modal-title">{example.title}</h3>
            {example.type ? <p className="overview-card-copy">{example.type}</p> : null}
          </div>
          <button className="overview-modal-close" type="button" onClick={onClose}>
            {modalCopy.close[locale]}
          </button>
        </div>
        <div className="overview-modal-frame">
          {state.status === 'loading' ? <p className="overview-card-copy">{modalCopy.loading[locale]}</p> : null}
          {state.status === 'error' ? (
            <p className="overview-card-copy">
              {modalCopy.error[locale]} {state.error}
            </p>
          ) : null}
          {state.status === 'ready' ? <ExamplePreviewBody content={state.content} href={example.href} /> : null}
        </div>
      </div>
    </div>
  );
}

function OverviewSection({ title, children }) {
  return (
    <section className="overview-section">
      <div className="overview-section-head">
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function CourseOverviewPage({ course, detail }) {
  const { locale } = useLocale();
  const catalogPath = buildLocalizedPath(locale, '/');
  const deckPath = buildLocalizedPath(locale, `/courses/${course.slug}`);
  const [activeExample, setActiveExample] = useState(null);
  const heroMeta = [
    {
      label: locale === 'ko' ? '난이도' : 'Difficulty',
      value: pickLocalized(detail.difficulty, locale),
    },
    {
      label: locale === 'ko' ? '예상 시간' : 'Estimated time',
      value: pickLocalized(detail.estimatedTime, locale),
    },
    {
      label: locale === 'ko' ? '구성' : 'Format',
      value: locale === 'ko' ? `${course.slides.length}장 슬라이드` : `${course.slides.length}-slide deck`,
    },
  ];
  const overviewCopy = {
    eyebrow: {
      ko: '상세강의자료',
      en: 'Lecture Guide',
    },
    backToCatalog: {
      ko: '강의 목록',
      en: 'Lecture index',
    },
    goToSlides: {
      ko: '슬라이드 보기',
      en: 'Open slides',
    },
    audience: {
      ko: '추천 수강생',
      en: 'Who this is for',
    },
    prerequisites: {
      ko: '사전 준비',
      en: 'Prerequisites',
    },
    outcomes: {
      ko: '수강 후 할 수 있는 것',
      en: 'What you will be able to do',
    },
    chapters: {
      ko: '챕터 목차',
      en: 'Chapter guide',
    },
    learn: {
      ko: '배우는 것',
      en: 'You will learn',
    },
    artifacts: {
      ko: '핵심 산출물',
      en: 'Key artifacts',
    },
    openArtifact: {
      ko: '예시 열기',
      en: 'Open example',
    },
    assets: {
      ko: '실습 자료',
      en: 'Practice assets',
    },
    tools: {
      ko: '필요 도구',
      en: 'Tools',
    },
    studyGuide: {
      ko: '추천 학습 순서',
      en: 'Recommended study path',
    },
    faq: {
      ko: 'FAQ',
      en: 'FAQ',
    },
    evidence: {
      ko: '실전성 증거',
      en: 'Hands-on evidence',
    },
  };

  const openInlineExample = (title, href, type = '') => {
    if (!isPreviewableHref(href)) {
      window.open(toGitHubExampleAssetHref(href), '_blank', 'noopener,noreferrer');
      return;
    }

    setActiveExample({ title, href, type });
  };

  return (
    <main className="overview-shell" style={course.theme}>
      <div className="catalog-noise" />

      <div className="overview-toolbar">
        <a className="deck-back-link deck-back-link-ghost" href={catalogPath}>
          {overviewCopy.backToCatalog[locale]}
        </a>
        <LocaleToggle />
      </div>

      <section className="overview-hero">
        <span className="catalog-eyebrow">{overviewCopy.eyebrow[locale]}</span>
        <div className="overview-hero-copy">
          <h1 className="overview-title">{pickLocalized(detail.hero.title, locale)}</h1>
          <p className="overview-subtitle">{pickLocalized(detail.hero.subtitle, locale)}</p>
        </div>
        <p className="overview-summary">{pickLocalized(detail.hero.summary, locale)}</p>
        <OverviewParagraphs items={detail.hero.description} locale={locale} />
        <p className="overview-deliverable">{pickLocalized(detail.hero.deliverable, locale)}</p>
        <dl className="overview-meta-list">
          {heroMeta.map((item) => (
            <div key={item.label} className="overview-meta-row">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
        <div className="overview-hero-actions">
          <a className="catalog-link overview-link-primary" href={deckPath}>
            {overviewCopy.goToSlides[locale]}
          </a>
        </div>
      </section>

      <section className="overview-layout">
        <OverviewSection title={overviewCopy.audience[locale]}>
          <OverviewList items={detail.audience} locale={locale} />
        </OverviewSection>

        <OverviewSection title={overviewCopy.prerequisites[locale]}>
          <OverviewList items={detail.prerequisites} locale={locale} />
        </OverviewSection>

        <OverviewSection title={overviewCopy.outcomes[locale]}>
          <OverviewList items={detail.learningOutcomes} locale={locale} />
        </OverviewSection>

        <OverviewSection title={overviewCopy.tools[locale]}>
          <OverviewList items={detail.tools} locale={locale} />
        </OverviewSection>

        <OverviewSection title={overviewCopy.studyGuide[locale]}>
          <OverviewList items={detail.studyGuide} locale={locale} />
        </OverviewSection>

        <OverviewSection title={overviewCopy.chapters[locale]}>
          <div className="overview-chapter-list">
            {detail.chapters.map((chapter, index) => (
              <article key={pickLocalized(chapter.title, locale)} className="overview-chapter-item">
                <div className="overview-chapter-head">
                  <span className="catalog-detail-index">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{pickLocalized(chapter.title, locale)}</h3>
                <p className="overview-card-copy">{pickLocalized(chapter.summary, locale)}</p>
                <OverviewParagraphs items={chapter.body} locale={locale} />
                <OverviewTable table={chapter.table} locale={locale} />
                <div className="overview-chapter-details">
                  <div className="overview-detail-block">
                    <span className="overview-subcard-label">{overviewCopy.learn[locale]}</span>
                    <OverviewList items={chapter.learn} locale={locale} className="overview-list overview-list-tight" />
                  </div>
                  <div className="overview-detail-block">
                    <span className="overview-subcard-label">{overviewCopy.artifacts[locale]}</span>
                    <OverviewArtifacts
                      items={chapter.artifacts}
                      locale={locale}
                      onOpenExample={openInlineExample}
                      openLabel={overviewCopy.openArtifact[locale]}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </OverviewSection>

        {detail.evidence?.length ? (
          <OverviewSection title={overviewCopy.evidence[locale]}>
            <div className="overview-evidence-list">
              {detail.evidence.map((item) => (
                <article key={pickLocalized(item.title, locale)} className="overview-evidence-item">
                  <div className="overview-evidence-head">
                    <h3>{pickLocalized(item.title, locale)}</h3>
                    <p className="overview-card-copy">{pickLocalized(item.description, locale)}</p>
                  </div>
                  {item.type === 'image' ? (
                    <img alt={pickLocalized(item.title, locale)} className="overview-evidence-image" src={resolveMediaSrc(item.src)} />
                  ) : item.type === 'diagram' ? (
                    <OverviewDiagram code={item.code} title={pickLocalized(item.title, locale)} />
                  ) : (
                    <pre className="overview-code-block">
                      <code>{item.code}</code>
                    </pre>
                  )}
                </article>
              ))}
            </div>
          </OverviewSection>
        ) : null}

        <OverviewSection title={overviewCopy.assets[locale]}>
          <div className="overview-assets-list">
            {detail.practiceAssets.map((asset) => (
              <PracticeAssetItem
                asset={asset}
                key={pickLocalized(asset.href, locale)}
                locale={locale}
                onOpenExample={openInlineExample}
                openLabel={overviewCopy.openArtifact[locale]}
              />
            ))}
          </div>
        </OverviewSection>

        <OverviewSection title={overviewCopy.faq[locale]}>
          <div className="overview-faq-list">
            {detail.faq.map((entry) => (
              <article key={pickLocalized(entry.question, locale)} className="overview-faq-item">
                <h3>{pickLocalized(entry.question, locale)}</h3>
                <p>{pickLocalized(entry.answer, locale)}</p>
              </article>
            ))}
          </div>
        </OverviewSection>
      </section>

      {activeExample ? <ExampleModal example={activeExample} locale={locale} onClose={() => setActiveExample(null)} /> : null}
    </main>
  );
}
