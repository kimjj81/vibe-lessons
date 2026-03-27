import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide07_SaaSVsSelfHost() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: 'SaaS(Cloud) vs Self-hosted',
      subtitle: 'CMS를 어떻게 운영할 것인가',
      context: '이 비교는 Monolithic vs Headless와는 다른 축입니다. Monolithic, Headless CMS 모두 SaaS(클라우드) 또는 Self-hosted(직접 설치) 방식으로 운영할 수 있습니다. Cloud 벤더(AWS, GCP, Azure)도 이런 오픈소스 CMS를 자신들의 인프라에 배포하는 도구를 제공합니다.',
      criteriaTitle: '판단 기준',
      criteria: [
        { step: '1순위', title: '운영 인력 & 데이터 주권', questions: ['개발자 또는 서버 관리자가 있는가?', '데이터를 내가 직접 보유·통제해야 하는가?'] },
        { step: '2순위', title: '사용량에 따른 비용', questions: ['사용량이 늘어날 때 SaaS 요금이 얼마나 오르는가?', '인프라+운영 인력 비용과 SaaS 비용 중 어느 쪽이 저렴한가?'] },
      ],
      selfhost: {
        label: 'Self-hosted',
        condition: '개발자/서버 관리자가 있을 때',
        pros: ['데이터 완전 통제', '장기적으로 사용량 비용 없음', '커스터마이징 자유'],
        cons: ['배포·업데이트·보안 패치 직접 담당', '운영 인력 비용 발생', '스케일링·백업 직접 설계'],
      },
      saas: {
        label: 'SaaS / Cloud',
        condition: '운영 인력이 없을 때',
        pros: ['인프라 관리 불필요', '즉시 시작 가능', '업데이트·보안·백업 자동'],
        cons: ['사용량·좌석·대역폭 기반 월정액', '데이터가 벤더 서버에 저장', '성장 시 비용 급증 가능'],
      },
      prosLabel: '장점',
      consLabel: '단점',
      insight: '운영 인력이 없다면 월 비용을 내는 SaaS/Cloud가 오히려 총비용이 저렴합니다. 개발자를 고용하거나 담당자가 서버 관리를 배우는 비용이 SaaS 월정액보다 훨씬 클 수 있습니다.',
    },
    en: {
      title: 'SaaS (Cloud) vs Self-hosted',
      subtitle: 'How will you operate your CMS?',
      context: 'This is a different axis from Monolithic vs Headless. Both Monolithic and Headless CMS can be operated as SaaS (cloud) or Self-hosted (self-installed). Cloud vendors (AWS, GCP, Azure) also provide tools to deploy these open-source CMS products on their infrastructure.',
      criteriaTitle: 'Decision Criteria',
      criteria: [
        { step: 'Priority 1', title: 'Ops Staff & Data Sovereignty', questions: ['Do you have developers or server administrators?', 'Do you need to own and control your data directly?'] },
        { step: 'Priority 2', title: 'Usage-based Cost', questions: ['How much will SaaS pricing increase as usage grows?', 'Which is cheaper: infra + ops staff, or SaaS monthly fees?'] },
      ],
      selfhost: {
        label: 'Self-hosted',
        condition: 'When you have devs / server admins',
        pros: ['Full data control', 'No usage-based fees long-term', 'Full customization freedom'],
        cons: ['You own deployment, updates, security patches', 'Ops staff cost required', 'You design scaling and backup'],
      },
      saas: {
        label: 'SaaS / Cloud',
        condition: 'When you have no ops staff',
        pros: ['No infrastructure management', 'Start immediately', 'Updates, security, backup automated'],
        cons: ['Monthly fees based on usage/seats/bandwidth', 'Data stored on vendor servers', 'Costs can spike at scale'],
      },
      prosLabel: 'Pros',
      consLabel: 'Cons',
      insight: 'Without dedicated ops staff, paying monthly for SaaS/Cloud is often cheaper overall. Hiring a developer or learning server management typically costs far more than a SaaS subscription.',
    },
  };
  const t = copy[locale];

  const comparisons = [
    { data: t.selfhost, color: '#8b5cf6' },
    { data: t.saas, color: '#0ea5e9' },
  ];

  return (
    <SlideWrapper slideNumber={8}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }} data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '12px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '24px', fontSize: '1rem' }}>
          {t.subtitle}
        </p>

        {/* Context */}
        <p style={{ color: '#f0f9ff', fontSize: '0.9rem', lineHeight: 1.6, textAlign: 'center', marginBottom: '24px', maxWidth: '900px', margin: '0 auto 24px' }}>
          {t.context}
        </p>

        {/* Criteria */}
        <div className="card" style={{ borderColor: 'rgba(99,102,241,0.3)', padding: '18px 22px', marginBottom: '24px' }}>
          <div style={{ fontWeight: 800, color: '#f0f9ff', fontSize: '1rem', marginBottom: '14px' }}>{t.criteriaTitle}</div>
          <div style={{ display: 'grid', gap: '14px' }}>
            {t.criteria.map((c) => (
              <div key={c.step} style={{ padding: '14px 16px', borderRadius: '14px', background: 'rgba(15,23,42,0.45)', border: '1px solid rgba(99,102,241,0.18)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="tag tag-blue" style={{ fontSize: '0.7rem' }}>{c.step}</span>
                <span style={{ fontWeight: 700, color: '#f0f9ff', fontSize: '0.95rem' }}>{c.title}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {c.questions.map((q, i) => (
                  <div key={i} style={{ color: '#7dd3fc', fontSize: '0.82rem', lineHeight: 1.4, paddingLeft: '8px', borderLeft: '2px solid rgba(99,102,241,0.3)' }}>
                    {q}
                  </div>
                ))}
              </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison cards */}
        <div className="card" style={{ borderColor: 'rgba(125, 211, 252, 0.18)', padding: '24px 28px', marginBottom: '24px' }}>
          <div className="cms-vs-grid">
            {comparisons.map(({ data, color }, index) => (
              <div key={data.label} className="card" style={{ borderColor: `${color}44`, background: 'rgba(2, 6, 23, 0.52)', padding: '20px', order: index === 0 ? 1 : 3 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}` }} />
                <h3 style={{ fontWeight: 700, color, fontSize: '1.05rem' }}>{data.label}</h3>
              </div>
              <div style={{ color: '#7dd3fc', fontSize: '0.82rem', marginBottom: '14px', fontStyle: 'italic' }}>
                {data.condition}
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontWeight: 600, color: '#22c55e', fontSize: '0.8rem', marginBottom: '6px' }}>{t.prosLabel}</div>
                {data.pros.map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', marginBottom: '4px' }}>
                    <span style={{ color: '#22c55e', fontWeight: 700, flexShrink: 0, fontSize: '0.82rem' }}>+</span>
                    <span style={{ color: '#f0f9ff', fontSize: '0.82rem', lineHeight: 1.4 }}>{p}</span>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ fontWeight: 600, color: '#ef4444', fontSize: '0.8rem', marginBottom: '6px' }}>{t.consLabel}</div>
                {data.cons.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', marginBottom: '4px' }}>
                    <span style={{ color: '#ef4444', fontWeight: 700, flexShrink: 0, fontSize: '0.82rem' }}>-</span>
                    <span style={{ color: '#f0f9ff', fontSize: '0.82rem', lineHeight: 1.4 }}>{c}</span>
                  </div>
                ))}
              </div>
              </div>
            ))}

            <div className="cms-vs-badge" style={{ order: 2 }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.16)',
                background: 'radial-gradient(circle at 30% 30%, rgba(14,165,233,0.32), rgba(15,23,42,0.9))',
                color: '#f8fafc',
                fontSize: '1.15rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '0.08em',
              }}>
                VS
              </div>
            </div>
          </div>
        </div>

        {/* Insight */}
        <div style={{
          padding: '16px 24px', borderRadius: '12px',
          background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)',
        }}>
          <span style={{ color: '#f59e0b', fontSize: '0.95rem', lineHeight: 1.6 }}>
            {t.insight}
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
}
