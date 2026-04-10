import { useLocale } from '../../i18n/LocaleContext';
import { BulletList, SectionCard, SemverSlide } from './SemverReleaseShared';

function StageBox({ title, detail, color }) {
  return (
    <div
      style={{
        padding: '14px 16px',
        borderRadius: '18px',
        background: `${color}14`,
        border: `1px solid ${color}44`,
        textAlign: 'center',
      }}
    >
      <div style={{ color, fontWeight: 800, fontSize: '0.82rem', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {title}
      </div>
      <div style={{ color: '#ecfeff', fontSize: '0.82rem', lineHeight: 1.45 }}>{detail}</div>
    </div>
  );
}

export default function Slide07_WhyDraftReleaseFirst() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'draft',
      title: 'Why Draft Release First',
      subtitle: 'draft release는 공개 전 staging area입니다. asset, notes, publish를 한 번에 섞지 않게 만드는 안전 구간입니다.',
      stages: [
        ['Create', 'draft release만 생성', '#67e8f9'],
        ['Prepare', 'asset / notes / title 정리', '#38bdf8'],
        ['Polish', '선택적 LLM 후처리', '#22d3ee'],
        ['Publish', 'final public release로 승격', '#84cc16'],
      ],
      reasonsTitle: '왜 publish를 늦추는가',
      reasons: [
        '미완성 release body와 asset이 사용자에게 노출되는 것을 막습니다.',
        'generated notes와 LLM polishing 실패를 publish 이전에 차단할 수 있습니다.',
        'recovery는 manual path로만 열어 두고, 기본 경로는 더 안전하게 만들 수 있습니다.',
      ],
      cautionTitle: 'Recovery 원칙',
      caution: '이미 publish된 release는 기본적으로 다시 건드리지 않고, 꼭 필요할 때만 workflow_dispatch + explicit flag로 재실행합니다.',
    },
    en: {
      kicker: 'draft',
      title: 'Why Draft Release First',
      subtitle: 'A draft release is the staging area before public visibility. It keeps assets, notes, and final publish from collapsing into one unsafe step.',
      stages: [
        ['Create', 'Create the draft only', '#67e8f9'],
        ['Prepare', 'Prepare assets / notes / title', '#38bdf8'],
        ['Polish', 'Optional LLM post-processing', '#22d3ee'],
        ['Publish', 'Promote to final public release', '#84cc16'],
      ],
      reasonsTitle: 'Why delay publish',
      reasons: [
        'It prevents incomplete release notes or assets from becoming public too early.',
        'It lets you fail on generated notes or polishing before publication.',
        'It keeps recovery as an explicit manual path instead of making mutation the default.',
      ],
      cautionTitle: 'Recovery rule',
      caution: 'Do not mutate already-published releases by default. Only reopen that path through workflow_dispatch plus an explicit recovery flag.',
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={7} subtitle={t.subtitle} title={t.title}>
      <div style={{ display: 'grid', gap: '18px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
          {t.stages.map((stage, index) => (
            <div key={stage[0]} style={{ display: 'grid', gap: '10px' }}>
              <StageBox color={stage[2]} detail={stage[1]} title={stage[0]} />
              {index < t.stages.length - 1 ? <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '1.15rem' }}>↓</div> : null}
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '18px' }}>
          <SectionCard color="#67e8f9" title={t.reasonsTitle}>
            <BulletList accent="#67e8f9" items={t.reasons} textColor="#e0f2fe" />
          </SectionCard>
          <SectionCard color="#facc15" title={t.cautionTitle}>
            <p style={{ color: '#fef3c7', fontSize: '0.88rem', lineHeight: 1.55 }}>{t.caution}</p>
          </SectionCard>
        </div>
      </div>
    </SemverSlide>
  );
}
