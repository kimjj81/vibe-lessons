import { useLocale } from '../../i18n/LocaleContext';
import { CodeExcerptCard, OpenModalButton, SectionCard, SemverSlide, codeSamples } from './SemverReleaseShared';

const workflowExcerpt = `jobs:
  import_release_notes:
    steps:
      - Checkout main
      - Setup Node.js
      - Import release notes
      - Install dependencies
      - Build site
      - Commit imported release notes`;

const scriptExcerpt = `const release = await fetchRelease(sourceRepo, tagName);

if (release.draft || release.prerelease || !release.published_at) {
  throw new Error("Only published stable releases can be imported.");
}

const markdown = [
  "---",
  \`title: \${yamlString(release.name || release.tag_name)}\`,
  \`tag: \${yamlString(release.tag_name)}\`,
  \`publishedAt: \${yamlString(release.published_at)}\`,
  "---",
  "",
  (release.body || "").trim(),
].join("\\n");`;

export default function Slide14_HomepageImportWorkflowAndScript() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'import',
      title: 'Homepage Import Workflow and Script',
      subtitle: 'homepage repo는 release를 읽어 Astro content를 만들고, build와 commit을 자기 workflow 안에서 끝냅니다.',
      workflowTitle: 'workflow 핵심 순서',
      workflowNotes: [
        'import -> build -> conditional commit 순서를 유지합니다.',
        '빌드가 실패하면 release notes import도 공개 사이트 반영으로 이어지지 않습니다.',
      ],
      promptTitle: 'import script 핵심',
      promptBody: '스크립트는 published stable release만 허용하고, release body를 markdown frontmatter + 본문으로 변환합니다.',
      modalWorkflowTitle: 'Homepage import workflow 전체 YAML',
      modalWorkflowDescription: 'checkout, import, build, conditional commit까지 포함한 homepage repo workflow 예시입니다.',
      modalScriptTitle: 'Import script 전체 JavaScript',
      modalScriptDescription: 'release를 조회해 Astro content markdown으로 바꾸는 전체 import script 예시입니다.',
    },
    en: {
      kicker: 'import',
      title: 'Homepage Import Workflow and Script',
      subtitle: 'The homepage repo reads the release, generates Astro content, and completes build plus commit inside its own workflow.',
      workflowTitle: 'Core workflow order',
      workflowNotes: [
        'Keep the order as import -> build -> conditional commit.',
        'If build fails, release-note import should not silently become live on the site.',
      ],
      promptTitle: 'Core import script logic',
      promptBody: 'The script allows published stable releases only and converts the release body into frontmatter plus markdown content.',
      modalWorkflowTitle: 'Full homepage import workflow YAML',
      modalWorkflowDescription: 'A homepage workflow example covering checkout, import, build, and conditional commit.',
      modalScriptTitle: 'Full import script JavaScript',
      modalScriptDescription: 'A full import-script example that fetches a release and turns it into Astro content markdown.',
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={14} subtitle={t.subtitle} title={t.title}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
        <CodeExcerptCard
          excerpt={workflowExcerpt}
          language="YAML"
          modal={{
            content: codeSamples.homepageImportWorkflow,
            description: t.modalWorkflowDescription,
            kicker: 'workflow',
            language: 'YAML',
            title: t.modalWorkflowTitle,
          }}
          notes={t.workflowNotes}
          title={t.workflowTitle}
        />
        <SectionCard color="#84cc16" title={t.promptTitle}>
          <p style={{ color: '#ecfccb', fontSize: '0.88rem', lineHeight: 1.55, marginBottom: '14px' }}>{t.promptBody}</p>
          <pre
            style={{
              margin: 0,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              fontFamily: '"Space Grotesk", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              fontSize: '0.8rem',
              lineHeight: 1.55,
              color: '#ecfeff',
              background: 'rgba(2, 6, 23, 0.72)',
              borderRadius: '16px',
              border: '1px solid rgba(132, 204, 22, 0.15)',
              padding: '16px 18px',
              marginBottom: '14px',
            }}
          >
            <code>{scriptExcerpt}</code>
          </pre>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <OpenModalButton
              label={locale === 'ko' ? '전체 스크립트 보기' : 'Open full script'}
              modal={{
                content: codeSamples.importScript,
                description: t.modalScriptDescription,
                kicker: 'script',
                language: 'JavaScript',
                title: t.modalScriptTitle,
              }}
            />
          </div>
        </SectionCard>
      </div>
    </SemverSlide>
  );
}
