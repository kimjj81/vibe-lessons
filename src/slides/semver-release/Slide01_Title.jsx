import { useLocale } from '../../i18n/LocaleContext';
import { SemverSlide, StatChip } from './SemverReleaseShared';

export default function Slide01_Title() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'course 04',
      title: 'SemVer Release Automation',
      subtitle: 'SemVer 태그에서 GitHub Release와 Astro 홈페이지 반영까지.\n공개 릴리스를 안전하게 운영하는 end-to-end 파이프라인 강의입니다.',
      tags: [
        { label: 'Focus', value: 'GitHub Release as canonical source' },
        { label: 'Flow', value: 'Tag -> draft -> notes -> publish -> sync' },
        { label: 'Ops', value: 'Cross-repo boundary + verification' },
        { label: 'AI', value: 'Optional LLM polishing only' },
      ],
    },
    en: {
      kicker: 'course 04',
      title: 'SemVer Release Automation',
      subtitle: 'From SemVer tags to GitHub Release and Astro homepage sync.\nA practical course on operating a safe public-release pipeline end to end.',
      tags: [
        { label: 'Focus', value: 'GitHub Release as canonical source' },
        { label: 'Flow', value: 'Tag -> draft -> notes -> publish -> sync' },
        { label: 'Ops', value: 'Cross-repo boundary + verification' },
        { label: 'AI', value: 'Optional LLM polishing only' },
      ],
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={1} subtitle={t.subtitle} title={t.title}>
      <div style={{ maxWidth: '980px', margin: '0 auto', display: 'grid', gap: '22px' }}>
        <div
          style={{
            textAlign: 'center',
            padding: '24px 28px',
            borderRadius: '28px',
            background: 'radial-gradient(circle at top, rgba(20,184,166,0.16), rgba(8,47,73,0.2) 52%, rgba(2,6,23,0.72) 100%)',
            border: '1px solid rgba(94, 234, 212, 0.18)',
            color: '#ecfeff',
            fontSize: '1.05rem',
            lineHeight: 1.7,
          }}
        >
          {locale === 'ko'
            ? '핵심 질문: release의 기준 텍스트는 어디에 두고, homepage는 어떤 방식으로 그 결과만 소비하게 만들 것인가?'
            : 'Core question: where should release truth live, and how do you let the homepage consume only the final result?'}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
          {t.tags.map((tag) => (
            <StatChip color="#5eead4" key={tag.label} label={tag.label} value={tag.value} />
          ))}
        </div>
      </div>
    </SemverSlide>
  );
}
