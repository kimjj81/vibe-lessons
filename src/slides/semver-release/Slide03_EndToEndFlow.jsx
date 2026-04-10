import { useLocale } from '../../i18n/LocaleContext';
import { SemverSlide } from './SemverReleaseShared';

function FlowNode({ title, desc, color }) {
  return (
    <div
      style={{
        padding: '14px 16px',
        borderRadius: '18px',
        border: `1px solid ${color}55`,
        background: `${color}14`,
        textAlign: 'center',
      }}
    >
      <div style={{ color, fontWeight: 800, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
        {title}
      </div>
      <div style={{ color: '#ecfeff', fontSize: '0.82rem', lineHeight: 1.45 }}>{desc}</div>
    </div>
  );
}

export default function Slide03_EndToEndFlow() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'flow',
      title: 'End-to-End Flow',
      subtitle: '발표 초반에 전체 지도를 먼저 고정하면, 뒤의 YAML과 스크립트는 각 단계 책임으로 읽히게 됩니다.',
      steps: [
        ['Tag', 'SemVer 태그 푸시', '#5eead4'],
        ['Gate', 'stable / beta / rc 판별', '#67e8f9'],
        ['Draft', 'draft release 생성', '#38bdf8'],
        ['Notes', 'generated notes와 선택적 polishing', '#22d3ee'],
        ['Publish', 'stable release 공개', '#84cc16'],
        ['Dispatch', 'homepage workflow 호출', '#a3e635'],
        ['Import', 'Astro content import + build', '#facc15'],
      ],
      takeaway: '핵심: source repo는 release를 완성하고, homepage repo는 published stable release만 소비합니다.',
    },
    en: {
      kicker: 'flow',
      title: 'End-to-End Flow',
      subtitle: 'If the map is fixed early, the YAML and scripts later are easier to read as stage responsibilities instead of random snippets.',
      steps: [
        ['Tag', 'Push a SemVer tag', '#5eead4'],
        ['Gate', 'Classify stable / beta / rc', '#67e8f9'],
        ['Draft', 'Create the draft release', '#38bdf8'],
        ['Notes', 'Generated notes and optional polishing', '#22d3ee'],
        ['Publish', 'Publish the stable release', '#84cc16'],
        ['Dispatch', 'Trigger the homepage workflow', '#a3e635'],
        ['Import', 'Import into Astro content and build', '#facc15'],
      ],
      takeaway: 'Core rule: the source repo completes the release, and the homepage repo consumes published stable state only.',
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={3} subtitle={t.subtitle} title={t.title}>
      <div style={{ display: 'grid', gap: '18px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', alignItems: 'center' }}>
          {t.steps.map((step, index) => (
            <div key={step[0]} style={{ display: 'grid', gap: '10px', alignItems: 'center' }}>
              <FlowNode color={step[2]} desc={step[1]} title={step[0]} />
              {index < t.steps.length - 1 ? (
                <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '1.2rem' }}>→</div>
              ) : null}
            </div>
          ))}
        </div>
        <div
          style={{
            padding: '16px 18px',
            borderRadius: '16px',
            background: 'rgba(8, 47, 73, 0.4)',
            border: '1px solid rgba(94, 234, 212, 0.16)',
            color: '#d1fae5',
            fontSize: '0.9rem',
            lineHeight: 1.55,
            textAlign: 'center',
          }}
        >
          {t.takeaway}
        </div>
      </div>
    </SemverSlide>
  );
}
