import { useLocale } from '../../i18n/LocaleContext';
import { BulletList, CodeExcerptCard, SectionCard, SemverSlide, codeSamples } from './SemverReleaseShared';

const excerpt = `generated_notes="$(gh api \\
  --method POST \\
  -H 'Accept: application/vnd.github+json' \\
  "repos/\${GH_REPO}/releases/generate-notes" \\
  -f tag_name="\${TAG_NAME}")"

generated_title="$(jq -r '.name' <<<"\$generated_notes")"
gh release edit "\$TAG_NAME" \\
  --title "\$generated_title" \\
  --notes-file "\$notes_file"`;

export default function Slide09_GeneratedNotesAsBaseline() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'notes',
      title: 'Generated Notes As Baseline',
      subtitle: 'AI를 쓰더라도 release의 출처는 먼저 GitHub에 두는 편이 더 안전합니다.',
      strengthsTitle: 'generated notes를 기본값으로 두는 이유',
      strengths: [
        'GitHub가 compare 범위, PR 제목, contributor 문맥을 이미 알고 있습니다.',
        '외부 LLM 없이도 일관된 초안을 만들 수 있어 실패 지점이 줄어듭니다.',
        '최종 release body가 GitHub에 저장되므로 homepage sync가 단순해집니다.',
      ],
      limitsTitle: '그래도 남는 제한',
      limits: [
        '문장이 개발자 중심으로 보일 수 있습니다.',
        '섹션 구조와 톤이 릴리스마다 들쑥날쑥할 수 있습니다.',
      ],
      modalTitle: 'Generated notes step 전체 예시',
      modalDescription: 'GitHub generated notes를 다시 계산하고 release body에 반영하는 YAML step 예시입니다.',
    },
    en: {
      kicker: 'notes',
      title: 'Generated Notes As Baseline',
      subtitle: 'Even when AI is involved later, it is safer to keep GitHub as the first source of release truth.',
      strengthsTitle: 'Why generated notes stay the baseline',
      strengths: [
        'GitHub already knows the compare range, PR titles, and contributor context.',
        'It reduces failure points because you can produce a solid draft without an external LLM.',
        'The final release body lives inside GitHub, which keeps homepage sync simple.',
      ],
      limitsTitle: 'Limits that still remain',
      limits: [
        'The tone can remain more developer-facing than user-facing.',
        'Section structure and wording can vary from one release to the next.',
      ],
      modalTitle: 'Full generated-notes step example',
      modalDescription: 'A YAML step example for regenerating GitHub generated notes and writing them back into the release body.',
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={9} subtitle={t.subtitle} title={t.title}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '18px' }}>
        <div style={{ display: 'grid', gap: '18px' }}>
          <SectionCard color="#84cc16" title={t.strengthsTitle}>
            <BulletList accent="#84cc16" items={t.strengths} textColor="#ecfccb" />
          </SectionCard>
          <SectionCard color="#f59e0b" title={t.limitsTitle}>
            <BulletList accent="#f59e0b" items={t.limits} textColor="#fef3c7" />
          </SectionCard>
        </div>
        <CodeExcerptCard
          excerpt={excerpt}
          language="YAML"
          modal={{
            content: codeSamples.generatedNotesStep,
            description: t.modalDescription,
            kicker: 'generated notes',
            language: 'YAML',
            title: t.modalTitle,
          }}
          title={locale === 'ko' ? '핵심 step 발췌' : 'Key step excerpt'}
        />
      </div>
    </SemverSlide>
  );
}
