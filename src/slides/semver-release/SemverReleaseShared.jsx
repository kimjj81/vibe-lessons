import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

const SemverModalContext = createContext(null);

function overlayStyle() {
  return {
    position: 'fixed',
    inset: 0,
    background: 'rgba(2, 6, 23, 0.78)',
    backdropFilter: 'blur(8px)',
    display: 'grid',
    placeItems: 'center',
    padding: '28px',
    zIndex: 9999,
  };
}

function dialogStyle() {
  return {
    width: 'min(980px, 100%)',
    maxHeight: 'min(78vh, 900px)',
    background: 'linear-gradient(180deg, rgba(15,23,42,0.98), rgba(8,47,73,0.94))',
    border: '1px solid rgba(125, 211, 252, 0.2)',
    borderRadius: '24px',
    boxShadow: '0 28px 80px rgba(0, 0, 0, 0.45)',
    display: 'grid',
    gridTemplateRows: 'auto minmax(0, 1fr)',
    overflow: 'hidden',
  };
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function applyHighlightRules(content, rules) {
  let html = escapeHtml(content);

  for (const { pattern, replacer } of rules) {
    html = html.replace(pattern, replacer);
  }

  return html;
}

function highlightCode(content, language = '') {
  const normalized = language.toLowerCase();

  const sharedStringRule = {
    pattern: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g,
    replacer: '<span style="color:#f9a8d4;">$1</span>',
  };
  const sharedNumberRule = {
    pattern: /\b(\d+(?:\.\d+)?)\b/g,
    replacer: '<span style="color:#fca5a5;">$1</span>',
  };

  if (normalized === 'yaml' || normalized === 'yml') {
    return applyHighlightRules(content, [
      { pattern: /(^|\n)(\s*#.*?)(?=\n|$)/g, replacer: '$1<span style="color:#94a3b8;">$2</span>' },
      { pattern: /(^|\n)(\s*)([\w.-]+:)/g, replacer: '$1$2<span style="color:#67e8f9;">$3</span>' },
      { pattern: /(\$\{\{[^}]+\}\})/g, replacer: '<span style="color:#c4b5fd;">$1</span>' },
      sharedStringRule,
      sharedNumberRule,
      { pattern: /\b(true|false|null)\b/g, replacer: '<span style="color:#fde68a;">$1</span>' },
    ]);
  }

  if (normalized === 'javascript' || normalized === 'js') {
    return applyHighlightRules(content, [
      { pattern: /(\/\/.*?$)/gm, replacer: '<span style="color:#94a3b8;">$1</span>' },
      {
        pattern: /\b(import|from|const|let|var|async|await|return|throw|if|else|try|catch|new|function)\b/g,
        replacer: '<span style="color:#67e8f9;">$1</span>',
      },
      { pattern: /\b(fetch|JSON|stringify|trim|join|writeFile|console|log)\b/g, replacer: '<span style="color:#c4b5fd;">$1</span>' },
      { pattern: /(\$\{[^}]+\})/g, replacer: '<span style="color:#fde68a;">$1</span>' },
      sharedStringRule,
      sharedNumberRule,
      { pattern: /\b(true|false|null|undefined)\b/g, replacer: '<span style="color:#fde68a;">$1</span>' },
    ]);
  }

  if (normalized === 'bash' || normalized === 'shell' || normalized === 'sh') {
    return applyHighlightRules(content, [
      { pattern: /(^|\n)(\s*#.*?)(?=\n|$)/g, replacer: '$1<span style="color:#94a3b8;">$2</span>' },
      { pattern: /\b(git|gh|curl|jq|node|npm|echo|set)\b/g, replacer: '<span style="color:#67e8f9;">$1</span>' },
      { pattern: /(\$\{[^}]+\}|\$[A-Z_][A-Z0-9_]*)/g, replacer: '<span style="color:#c4b5fd;">$1</span>' },
      sharedStringRule,
      sharedNumberRule,
    ]);
  }

  return escapeHtml(content);
}

function Modal({ modal, onClose }) {
  const { locale } = useLocale();
  const [copied, setCopied] = useState(false);

  const highlightedCode = useMemo(
    () => highlightCode(modal.content, modal.language),
    [modal.content, modal.language],
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(modal.content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div data-ui-modal="open" onClick={onClose} role="presentation" style={overlayStyle()}>
      <div
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        style={dialogStyle()}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '24px 26px 18px',
            borderBottom: '1px solid rgba(125, 211, 252, 0.15)',
          }}
        >
          <div>
            <div
              style={{
                color: '#67e8f9',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              {modal.kicker || (locale === 'ko' ? '전체 보기' : 'Full view')}
            </div>
            <h3 style={{ color: '#ecfeff', fontSize: '1.3rem', fontWeight: 800, marginBottom: modal.description ? '8px' : 0 }}>
              {modal.title}
            </h3>
            {modal.description ? (
              <p style={{ color: '#a5f3fc', fontSize: '0.92rem', lineHeight: 1.5, maxWidth: '720px' }}>
                {modal.description}
              </p>
            ) : null}
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button
              onClick={handleCopy}
              style={{
                border: '1px solid rgba(94, 234, 212, 0.24)',
                background: 'rgba(6, 78, 59, 0.48)',
                color: '#d1fae5',
                borderRadius: '999px',
                padding: '10px 16px',
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              type="button"
            >
              {copied ? (locale === 'ko' ? '복사됨' : 'Copied') : (locale === 'ko' ? '클립보드 복사' : 'Copy code')}
            </button>
            <button
              onClick={onClose}
              style={{
                border: '1px solid rgba(125, 211, 252, 0.24)',
                background: 'rgba(15, 23, 42, 0.65)',
                color: '#ecfeff',
                borderRadius: '999px',
                padding: '10px 16px',
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              type="button"
            >
              {locale === 'ko' ? '닫기' : 'Close'}
            </button>
          </div>
        </div>
        <div
          style={{
            overflow: 'auto',
            padding: '22px 26px 26px',
            minHeight: 0,
          }}
        >
          {modal.language ? (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '999px',
                border: '1px solid rgba(125, 211, 252, 0.18)',
                color: '#a5f3fc',
                fontSize: '0.8rem',
                marginBottom: '16px',
              }}
            >
              {modal.language}
            </div>
          ) : null}
          <div
            style={{
              background: 'rgba(2, 6, 23, 0.7)',
              border: '1px solid rgba(125, 211, 252, 0.12)',
              borderRadius: '18px',
              maxHeight: 'min(58vh, 640px)',
              overflow: 'auto',
              minHeight: 0,
            }}
          >
            <pre
              style={{
                margin: 0,
                minWidth: 'max-content',
                padding: '18px 20px',
                whiteSpace: 'pre',
                wordBreak: 'normal',
                fontFamily: '"Space Grotesk", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                fontSize: '0.86rem',
                lineHeight: 1.6,
                color: '#dbeafe',
              }}
            >
              <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SemverSlide({ slideNumber, kicker, title, subtitle, sources = [], children }) {
  const [activeModal, setActiveModal] = useState(null);
  const modalApi = useMemo(
    () => ({
      openModal: (modal) => setActiveModal(modal),
      closeModal: () => setActiveModal(null),
    }),
    [],
  );

  return (
    <SemverModalContext.Provider value={modalApi}>
      <SlideWrapper slideNumber={slideNumber} style={{ padding: '72px 80px 96px' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '1120px',
            zIndex: 1,
            display: 'grid',
            gap: '18px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div className="tag tag-cyan" style={{ marginBottom: '14px' }}>
              {kicker}
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)', fontWeight: 800, marginBottom: '12px' }}>
              <GradientText>{title}</GradientText>
            </h2>
            {subtitle ? (
              <p style={{ color: '#99f6e4', fontSize: '1rem', lineHeight: 1.55, maxWidth: '860px', margin: '0 auto' }}>
                {subtitle}
              </p>
            ) : null}
          </div>

          <div
            data-prevent-swipe=""
            data-slide-scroll-region="true"
            style={{
              overflow: 'auto',
              padding: '6px 4px 18px',
            }}
          >
            {children}
          </div>

          {sources.length > 0 ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              {sources.map((source) => (
                <a
                  href={source.href}
                  key={source.href}
                  rel="noopener noreferrer"
                  style={{
                    color: '#a5f3fc',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(165, 243, 252, 0.35)',
                  }}
                  target="_blank"
                >
                  {source.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        {activeModal && typeof document !== 'undefined'
          ? createPortal(<Modal modal={activeModal} onClose={() => setActiveModal(null)} />, document.body)
          : null}
      </SlideWrapper>
    </SemverModalContext.Provider>
  );
}

export function useSemverModal() {
  return useContext(SemverModalContext);
}

export function SectionCard({ title, color = '#67e8f9', children, style = {} }) {
  return (
    <div
      className="card"
      style={{
        borderColor: `${color}44`,
        background: 'rgba(2, 6, 23, 0.46)',
        padding: '18px 20px',
        ...style,
      }}
    >
      {title ? (
        <h3 style={{ color, fontSize: '1rem', fontWeight: 800, marginBottom: '12px' }}>
          {title}
        </h3>
      ) : null}
      {children}
    </div>
  );
}

export function BulletList({ items, accent = '#67e8f9', textColor = '#e6fffb' }) {
  return (
    <div style={{ display: 'grid', gap: '10px' }}>
      {items.map((item) => (
        <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
          <span style={{ color: accent, marginTop: '2px', flexShrink: 0 }}>▸</span>
          <span style={{ color: textColor, fontSize: '0.88rem', lineHeight: 1.55 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function StatChip({ label, value, color = '#67e8f9' }) {
  return (
    <div
      style={{
        padding: '12px 14px',
        borderRadius: '16px',
        border: `1px solid ${color}33`,
        background: 'rgba(15, 23, 42, 0.58)',
        textAlign: 'center',
      }}
    >
      <div style={{ color, fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
        {label}
      </div>
      <div style={{ color: '#ecfeff', fontSize: '0.92rem', fontWeight: 700 }}>{value}</div>
    </div>
  );
}

export function TableBlock({ headers, rows, leadWidth = '22%' }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={header}
                style={{
                  padding: '10px 12px',
                  textAlign: 'left',
                  color: '#67e8f9',
                  fontWeight: 800,
                  borderBottom: '1px solid rgba(125, 211, 252, 0.18)',
                  background: 'rgba(15, 23, 42, 0.52)',
                  width: index === 0 ? leadWidth : undefined,
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
                <td
                  key={`${row[0]}-${index}`}
                  style={{
                    padding: '10px 12px',
                    color: index === 0 ? '#ecfeff' : '#d1fae5',
                    fontWeight: index === 0 ? 700 : 500,
                    lineHeight: 1.45,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    verticalAlign: 'top',
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function OpenModalButton({ modal, label }) {
  const modalApi = useSemverModal();

  return (
    <button
      onClick={() => modalApi?.openModal(modal)}
      style={{
        border: '1px solid rgba(103, 232, 249, 0.28)',
        background: 'rgba(6, 182, 212, 0.12)',
        color: '#cffafe',
        borderRadius: '999px',
        padding: '10px 14px',
        fontWeight: 700,
        cursor: 'pointer',
        fontSize: '0.84rem',
      }}
      type="button"
    >
      {label}
    </button>
  );
}

export function CodeExcerptCard({ title, excerpt, modal, language, notes = [] }) {
  const { locale } = useLocale();

  return (
    <SectionCard color="#67e8f9" title={title}>
      <div
        style={{
          display: 'grid',
          gap: '12px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 10px',
            borderRadius: '999px',
            background: 'rgba(15, 23, 42, 0.58)',
            border: '1px solid rgba(103, 232, 249, 0.18)',
            color: '#99f6e4',
            width: 'fit-content',
            fontSize: '0.78rem',
            fontWeight: 700,
          }}
        >
          {language}
        </div>
        <pre
          style={{
            margin: 0,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontFamily: '"Space Grotesk", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            fontSize: '0.8rem',
            lineHeight: 1.55,
            color: '#dbeafe',
            background: 'rgba(2, 6, 23, 0.76)',
            border: '1px solid rgba(103, 232, 249, 0.12)',
            borderRadius: '18px',
            padding: '16px 18px',
          }}
        >
          <code>{excerpt}</code>
        </pre>
        {notes.length ? <BulletList accent="#99f6e4" items={notes} textColor="#d1fae5" /> : null}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <OpenModalButton label={locale === 'ko' ? '전체 코드 보기' : 'Open full code'} modal={modal} />
        </div>
      </div>
    </SectionCard>
  );
}

export const codeSamples = {
  releaseWorkflow: `name: Release

on:
  push:
    tags:
      - "v*"
  workflow_dispatch:
    inputs:
      tag_name:
        description: "Release tag to build and publish"
        required: true
        type: string
      reuse_published_release:
        description: "Allow manual recovery by reusing an already-published release"
        required: false
        default: false
        type: boolean

jobs:
  tag_gate:
    runs-on: ubuntu-latest
    outputs:
      is_release: \${{ steps.check_tag.outputs.is_release }}
      is_prerelease: \${{ steps.check_tag.outputs.is_prerelease }}
    steps:
      - name: Classify release tag
        id: check_tag
        env:
          TAG_NAME: \${{ inputs.tag_name || github.ref_name }}
        run: |
          tag="\${TAG_NAME}"
          if [[ "\$tag" =~ ^v[0-9]+\\.[0-9]+\\.[0-9]+$ ]]; then
            echo "is_release=true" >> "\$GITHUB_OUTPUT"
            echo "is_prerelease=false" >> "\$GITHUB_OUTPUT"
          elif [[ "\$tag" =~ ^v[0-9]+\\.[0-9]+\\.[0-9]+-beta(\\.[0-9]+)?$ ]]; then
            echo "is_release=true" >> "\$GITHUB_OUTPUT"
            echo "is_prerelease=true" >> "\$GITHUB_OUTPUT"
          elif [[ "\$tag" =~ ^v[0-9]+\\.[0-9]+\\.[0-9]+-rc([0-9]+|\\.[0-9]+)?$ ]]; then
            echo "is_release=true" >> "\$GITHUB_OUTPUT"
            echo "is_prerelease=true" >> "\$GITHUB_OUTPUT"
          else
            echo "is_release=false" >> "\$GITHUB_OUTPUT"
            echo "is_prerelease=false" >> "\$GITHUB_OUTPUT"
          fi

  prepare_release:
    needs: tag_gate
    if: needs.tag_gate.outputs.is_release == 'true'
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - name: Ensure draft release exists
        env:
          GH_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          TAG_NAME: \${{ inputs.tag_name || github.ref_name }}
          IS_PRERELEASE: \${{ needs.tag_gate.outputs.is_prerelease }}
        run: |
          set -euo pipefail

          if gh release view "\$TAG_NAME" >/dev/null 2>&1; then
            echo "Release already exists: \$TAG_NAME"
            exit 1
          fi

          args=(
            --draft
            --verify-tag
            --title "MyApp \${TAG_NAME}"
            --generate-notes
          )

          if [[ "\$IS_PRERELEASE" == "true" ]]; then
            args+=(--prerelease)
          fi

          gh release create "\$TAG_NAME" "\${args[@]}"

  publish_release:
    needs: [tag_gate, prepare_release]
    if: needs.tag_gate.outputs.is_release == 'true'
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - name: Publish draft release
        env:
          GH_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          TAG_NAME: \${{ inputs.tag_name || github.ref_name }}
          IS_PRERELEASE: \${{ needs.tag_gate.outputs.is_prerelease }}
        run: |
          if [[ "\$IS_PRERELEASE" == "true" ]]; then
            gh release edit "\$TAG_NAME" --draft=false --prerelease
          else
            gh release edit "\$TAG_NAME" --draft=false
          fi`,
  generatedNotesStep: `- name: Regenerate release notes
  env:
    GH_TOKEN: \${{ secrets.GITHUB_TOKEN }}
    GH_REPO: \${{ github.repository }}
    TAG_NAME: \${{ inputs.tag_name || github.ref_name }}
  run: |
    set -euo pipefail

    generated_notes="\$(gh api \\
      --method POST \\
      -H 'Accept: application/vnd.github+json' \\
      "repos/\${GH_REPO}/releases/generate-notes" \\
      -f tag_name="\${TAG_NAME}")"

    generated_title="\$(jq -r '.name' <<<"\$generated_notes")"
    notes_file="\$(mktemp)"
    {
      echo "Installer assets, updater metadata, checksums, and attestations are attached below."
      echo
      jq -r '.body' <<<"\$generated_notes"
    } > "\$notes_file"

    gh release edit "\$TAG_NAME" \\
      --title "\$generated_title" \\
      --notes-file "\$notes_file"`,
  llmPolishScript: `import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const GITHUB_API = "https://api.github.com";
const OPENAI_API = "https://api.openai.com/v1/responses";
const GITHUB_API_VERSION = "2026-03-10";

function requiredEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(\`Missing required environment variable: \${name}\`);
  return value;
}

async function gh(pathname, { method = "GET", token, body } = {}) {
  const response = await fetch(\`\${GITHUB_API}\${pathname}\`, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: \`Bearer \${token}\`,
      "X-GitHub-Api-Version": GITHUB_API_VERSION,
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(\`GitHub API failed: \${response.status} \${response.statusText}\`);
  }

  return response.json();
}

async function polishWithLlm({ apiKey, model, tagName, generatedTitle, generatedBody }) {
  const prompt = [
    "You are preparing release notes for end users.",
    "Rewrite the input into concise Markdown.",
    "Rules:",
    "- Keep factual accuracy.",
    "- Start with a one-paragraph summary.",
    "- Then use sections: Highlights, Fixes, Notes.",
    "- Do not invent features that are not present.",
    "- Keep version number exactly as given.",
    "",
    \`Version: \${tagName}\`,
    \`Title: \${generatedTitle}\`,
    "",
    "Raw release notes:",
    generatedBody,
  ].join("\\n");

  const response = await fetch(OPENAI_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${apiKey}\`,
    },
    body: JSON.stringify({
      model,
      input: prompt,
    }),
  });

  if (!response.ok) {
    throw new Error(\`OpenAI API failed: \${response.status} \${response.statusText}\`);
  }

  const data = await response.json();
  const text = data.output_text?.trim();
  if (!text) {
    throw new Error("LLM returned empty output_text");
  }
  return text;
}

async function main() {
  const repo = requiredEnv("GITHUB_REPOSITORY");
  const tagName = requiredEnv("TAG_NAME");
  const githubToken = requiredEnv("GITHUB_TOKEN");
  const openaiApiKey = requiredEnv("OPENAI_API_KEY");
  const openaiModel = requiredEnv("OPENAI_MODEL");

  const release = await gh(\`/repos/\${repo}/releases/tags/\${encodeURIComponent(tagName)}\`, {
    token: githubToken,
  });

  const generated = await gh(\`/repos/\${repo}/releases/generate-notes\`, {
    method: "POST",
    token: githubToken,
    body: { tag_name: tagName },
  });

  const polishedBody = await polishWithLlm({
    apiKey: openaiApiKey,
    model: openaiModel,
    tagName,
    generatedTitle: generated.name || release.name || tagName,
    generatedBody: generated.body || "",
  });

  await gh(\`/repos/\${repo}/releases/\${release.id}\`, {
    method: "PATCH",
    token: githubToken,
    body: {
      name: generated.name || release.name || tagName,
      body: polishedBody,
      draft: release.draft,
      prerelease: release.prerelease,
    },
  });

  const previewPath = path.join(os.tmpdir(), \`\${tagName}-release-notes.md\`);
  await fs.writeFile(previewPath, polishedBody, "utf8");
  console.log(\`Updated release notes for \${repo}@\${tagName}\`);
  console.log(\`Preview saved at \${previewPath}\`);
}

await main();`,
  llmPrompt: `You are rewriting GitHub-generated release notes for end users.

Your task:
- Rewrite the input into concise, factual Markdown release notes.

Rules:
- Do not invent features, fixes, or breaking changes.
- Preserve version numbers, links, PR numbers, and identifiers when present.
- Keep the meaning of the original notes.
- Prefer user-facing language over internal implementation detail.
- If the input does not support a claim, do not add it.
- Output Markdown only.

Required structure:
1. One short summary paragraph
2. ## Highlights
3. ## Fixes
4. ## Notes

Tone:
- Clear and practical
- Not overly promotional
- Suitable for a public product release page

Version: <TAG_NAME>
Title: <TITLE> <TAG_NAME>

Raw GitHub-generated notes:
<PASTE GENERATED NOTES HERE>`,
  sourceDispatchWorkflow: `name: Dispatch studiojin-home release notes

on:
  release:
    types:
      - published
  workflow_dispatch:
    inputs:
      tag_name:
        description: "Published stable release tag to sync"
        required: true
        type: string

jobs:
  dispatch_release_notes:
    if: github.event_name != 'release' || github.event.release.prerelease == false
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - name: Resolve published stable release tag
        id: resolve_tag
        env:
          EVENT_NAME: \${{ github.event_name }}
          GH_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          GH_REPO: \${{ github.repository }}
          INPUT_TAG_NAME: \${{ inputs.tag_name }}
          RELEASE_TAG_NAME: \${{ github.event.release.tag_name }}
        run: |
          set -euo pipefail

          if [[ "\$EVENT_NAME" == "release" ]]; then
            echo "tag_name=\${RELEASE_TAG_NAME}" >> "\$GITHUB_OUTPUT"
            exit 0
          fi

          tag="\${INPUT_TAG_NAME}"
          release_json="\$(curl -fsSL \\
            -H 'Accept: application/vnd.github+json' \\
            -H "Authorization: Bearer \${GH_TOKEN}" \\
            -H 'X-GitHub-Api-Version: 2026-03-10' \\
            "https://api.github.com/repos/\${GH_REPO}/releases/tags/\${tag}")"

          draft="\$(jq -r '.draft' <<<"\$release_json")"
          prerelease="\$(jq -r '.prerelease' <<<"\$release_json")"
          published_at="\$(jq -r '.published_at' <<<"\$release_json")"

          if [[ "\$draft" != "false" || "\$prerelease" != "false" || "\$published_at" == "null" ]]; then
            echo "Manual sync only supports published stable releases" >&2
            exit 1
          fi

          echo "tag_name=\${tag}" >> "\$GITHUB_OUTPUT"

      - name: Dispatch homepage workflow
        env:
          BLOG_REPO_DISPATCH_TOKEN: \${{ secrets.BLOG_REPO_DISPATCH_TOKEN }}
          TAG_NAME: \${{ steps.resolve_tag.outputs.tag_name }}
        run: |
          curl -fsSL \\
            -X POST \\
            -H 'Accept: application/vnd.github+json' \\
            -H "Authorization: Bearer \${BLOG_REPO_DISPATCH_TOKEN}" \\
            -H 'X-GitHub-Api-Version: 2026-03-10' \\
            "https://api.github.com/repos/kimjj81/studiojin-home/actions/workflows/import-syncwatcher-release-notes.yml/dispatches" \\
            -d @- <<EOF
          {"ref":"main","inputs":{"source_repo":"studiojin-dev/SyncWatcher","tag_name":"\${TAG_NAME}"}}
          EOF`,
  homepageImportWorkflow: `name: Import SyncWatcher release notes

on:
  workflow_dispatch:
    inputs:
      source_repo:
        description: "Source repository slug"
        required: true
        type: string
      tag_name:
        description: "Published stable release tag"
        required: true
        type: string

jobs:
  import_release_notes:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - name: Checkout main
        uses: actions/checkout@v5
        with:
          ref: main

      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: 22.12.0
          cache: npm

      - name: Import release notes
        env:
          SOURCE_REPO: \${{ inputs.source_repo }}
          TAG_NAME: \${{ inputs.tag_name }}
        run: node scripts/import-syncwatcher-release-notes.mjs

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Commit imported release notes
        env:
          TAG_NAME: \${{ inputs.tag_name }}
        run: |
          set -euo pipefail
          if [[ -z "\$(git status --short -- src/content/syncwatcher-release-notes)" ]]; then
            echo "No release note changes to commit."
            exit 0
          fi
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add src/content/syncwatcher-release-notes
          git commit -m "chore: import SyncWatcher release notes for \${TAG_NAME}"
          git push origin HEAD:main`,
  importScript: `import fs from "node:fs/promises";
import path from "node:path";

const OUTPUT_DIR = path.join(process.cwd(), "src/content/product-release-notes");

function requiredEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(\`Missing required environment variable: \${name}\`);
  return value;
}

function yamlString(value) {
  return JSON.stringify(String(value));
}

async function fetchRelease(sourceRepo, tagName) {
  const response = await fetch(
    \`https://api.github.com/repos/\${sourceRepo}/releases/tags/\${encodeURIComponent(tagName)}\`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2026-03-10",
      },
    },
  );

  if (!response.ok) {
    throw new Error(\`GitHub release lookup failed for \${sourceRepo}@\${tagName}\`);
  }

  return response.json();
}

async function main() {
  const sourceRepo = requiredEnv("SOURCE_REPO");
  const tagName = requiredEnv("TAG_NAME");
  const release = await fetchRelease(sourceRepo, tagName);

  if (release.draft || release.prerelease || !release.published_at) {
    throw new Error("Only published stable releases can be imported.");
  }

  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const markdown = [
    "---",
    \`title: \${yamlString(release.name || release.tag_name)}\`,
    \`tag: \${yamlString(release.tag_name)}\`,
    \`publishedAt: \${yamlString(release.published_at)}\`,
    \`releaseUrl: \${yamlString(release.html_url)}\`,
    "---",
    "",
    (release.body || "").trim() || "_No release notes were provided for this release._",
    "",
  ].join("\\n");

  await fs.writeFile(path.join(OUTPUT_DIR, \`\${release.tag_name}.md\`), markdown, "utf8");
}

await main();`,
  verificationCommands: `# 1) 새 stable tag 로 릴리스 발행
git tag v1.4.8
git push origin v1.4.8

# 2) source repo release workflow 모니터링
gh run list --workflow Release --limit 5
gh run watch <SOURCE_RUN_ID>

# 3) release 상태 확인
gh release view v1.4.8 --repo org-name/repo-name

# 4) 필요하면 manual replay
gh workflow run "Dispatch release notes" \\
  --repo org-name/repo-name \\
  -f tag_name=v1.4.8

# 5) homepage workflow 모니터링
gh run list --workflow "Import release notes" --repo org-name/homepage-repo-name --limit 5
gh run watch <HOMEPAGE_RUN_ID> --repo org-name/homepage-repo-name`,
};
