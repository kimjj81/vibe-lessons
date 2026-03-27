import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide10_Recipes() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '실무 조합 레시피',
      subtitle: '상황별 권장 스택',
      recipes: [
        {
          title: '개발·IT 운영 인력이 부족한 조직',
          tags: ['마케팅/브랜드 사이트', '운영 인력 부족'],
          stack: 'SaaS/Cloud형 Monolithic CMS',
          detail: '페이지 제작과 운영을 빠르게 시작하고, 서버 관리·보안 패치·업데이트는 벤더가 맡는 구성이 현실적입니다.',
          color: '#0ea5e9',
        },
        {
          title: '규제·데이터 민감도 높은 도메인',
          tags: ['금융', '의료', 'B2B SaaS'],
          stack: 'Headless(또는 Monolithic) + Self-hosted 분석/관측',
          detail: '외부 데이터 전송 최소화. PostHog, Sentry self-host 배포로 내부망 운영',
          color: '#8b5cf6',
        },
        {
          title: '장기 락인 최소화 전략',
          tags: ['스타트업', '확장 단계'],
          stack: '교체 가능성을 처음부터 설계',
          detail: '콘텐츠 정기 export 파이프라인 구축 (CLI backup) · SaaS Embed는 CSP/SRI로 격리 · 비용 단위(MAU/이벤트/요청/레코드) 먼저 확정',
          color: '#22d3ee',
        },
      ],
      summary: '결국 어떤 구조를 선택하든, 핵심은 팀의 역량과 통제 범위에 맞는 책임 배분입니다.',
    },
    en: {
      title: 'Practical Recipes',
      subtitle: 'Recommended stacks by situation',
      recipes: [
        {
          title: 'Teams with limited dev and IT ops staff',
          tags: ['Marketing / Brand sites', 'Limited ops capacity'],
          stack: 'SaaS/Cloud Monolithic CMS',
          detail: 'A practical setup where page building starts fast, while the vendor handles server ops, security patches, and updates.',
          color: '#0ea5e9',
        },
        {
          title: 'High regulation / data sensitivity domains',
          tags: ['Finance', 'Healthcare', 'B2B SaaS'],
          stack: 'Headless (or Monolithic) + self-hosted analytics/observability',
          detail: 'Minimize external data transmission. Run PostHog, Sentry self-hosted on internal network',
          color: '#8b5cf6',
        },
        {
          title: 'Long-term lock-in minimization',
          tags: ['Startups', 'Growth stage'],
          stack: 'Design for replaceability from day one',
          detail: 'Regular content export pipeline (CLI backup) · Isolate SaaS Embed with CSP/SRI · Confirm billing units (MAU/events/requests/records) upfront',
          color: '#22d3ee',
        },
      ],
      summary: 'Whatever structure you choose, the key is aligning responsibility distribution with your team\'s capabilities and control scope.',
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={11}>
      <div style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '40px', fontSize: '1.1rem' }}>
          {t.subtitle}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }}>
          {t.recipes.map((r) => (
            <div key={r.title} className="card" style={{ borderColor: `${r.color}44`, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontWeight: 700, color: r.color, fontSize: '1rem', marginBottom: '12px', lineHeight: 1.4 }}>
                {r.title}
              </h3>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
                {r.tags.map((tag) => (
                  <span key={tag} className="tag" style={{ fontSize: '0.65rem', background: `${r.color}22`, color: r.color, border: `1px solid ${r.color}44` }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{
                padding: '10px 14px', borderRadius: '8px',
                background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)',
                marginBottom: '12px',
              }}>
                <div style={{ fontWeight: 600, color: '#f0f9ff', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  {r.stack}
                </div>
              </div>

              <p style={{ color: '#7dd3fc', fontSize: '0.82rem', lineHeight: 1.5, flex: 1 }}>
                {r.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={{
          padding: '20px 28px', borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(139,92,246,0.1))',
          border: '1px solid rgba(99,102,241,0.25)',
          textAlign: 'center',
        }}>
          <span style={{ color: '#f0f9ff', fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.6 }}>
            {t.summary}
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
}
