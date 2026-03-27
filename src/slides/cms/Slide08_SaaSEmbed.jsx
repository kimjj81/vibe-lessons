import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide08_SaaSEmbed() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: 'SaaS Embed',
      subtitle: '기능을 외부 서비스로 위임하고 스크립트로 삽입',
      what: '댓글·검색·분석·인증 같은 기능을 외부 SaaS에 위임하고, JS/SDK를 통해 애플리케이션에 삽입하는 접근. "붙이는 속도"가 가장 빠르지만, 시간이 지날수록 보안·프라이버시·성능 통제 비용이 발생합니다.',
      products: [
        { category: '댓글', name: 'Disqus', detail: 'universal JS embed, 트래픽 기반 과금' },
        { category: '검색', name: 'Algolia', detail: 'search requests/records 단위 과금' },
        { category: '웹 분석', name: 'Google Analytics 4', detail: 'gtag.js 배포, 무료' },
        { category: '제품 분석', name: 'Amplitude / Mixpanel', detail: '이벤트 기반 추적, MAU 과금' },
        { category: '고객지원', name: 'Intercom', detail: '좌석 + usage-based 혼합 과금' },
        { category: '결제', name: 'Stripe', detail: '2.9% + $0.30 per charge' },
        { category: '인증', name: 'Auth0', detail: 'Free 25K MAU, 이후 MAU 기반 과금' },
        { category: '기능 플래그', name: 'LaunchDarkly', detail: 'Free 1K contexts/month' },
      ],
      risksLabel: 'SaaS Embed 사용 시 고려할 점',
      risksIntro: '아래 항목은 SaaS Embed를 붙일 때 함께 따라오는 운영 고려사항입니다.',
      risks: [
        { label: '보안', desc: '3rd-party JS 공급망 위험 — CSP·SRI로 완화', color: '#ef4444' },
        { label: '성능', desc: '외부 스크립트 로딩이 페이지 성능에 영향', color: '#f59e0b' },
        { label: '비용', desc: '성장 시 사용량(세션/이벤트/요청/레코드) 기반 비용이 비선형 증가', color: '#8b5cf6' },
      ],
    },
    en: {
      title: 'SaaS Embed',
      subtitle: 'Delegate features to external services, embed via script',
      what: 'Delegate features like comments, search, analytics, and auth to external SaaS, embedding them via JS/SDK. Fastest to integrate, but security, privacy, and performance control costs grow over time.',
      products: [
        { category: 'Comments', name: 'Disqus', detail: 'Universal JS embed, traffic-based billing' },
        { category: 'Search', name: 'Algolia', detail: 'Billed per search request/record' },
        { category: 'Web Analytics', name: 'Google Analytics 4', detail: 'gtag.js deployment, free' },
        { category: 'Product Analytics', name: 'Amplitude / Mixpanel', detail: 'Event-based tracking, MAU billing' },
        { category: 'Support', name: 'Intercom', detail: 'Seat + usage-based hybrid billing' },
        { category: 'Payments', name: 'Stripe', detail: '2.9% + $0.30 per charge' },
        { category: 'Auth', name: 'Auth0', detail: 'Free 25K MAU, then MAU-based billing' },
        { category: 'Feature Flags', name: 'LaunchDarkly', detail: 'Free 1K contexts/month' },
      ],
      risksLabel: 'What to watch when using SaaS Embed',
      risksIntro: 'These are the operating concerns that usually come with embedding third-party SaaS features.',
      risks: [
        { label: 'Security', desc: '3rd-party JS supply chain risk — mitigate with CSP/SRI', color: '#ef4444' },
        { label: 'Performance', desc: 'External script loading impacts page performance', color: '#f59e0b' },
        { label: 'Cost', desc: 'Usage-based costs (sessions/events/requests/records) scale non-linearly at growth', color: '#8b5cf6' },
      ],
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={9}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }} data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '12px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '20px', fontSize: '1rem' }}>
          {t.subtitle}
        </p>

        {/* What */}
        <p style={{ color: '#f0f9ff', fontSize: '0.9rem', lineHeight: 1.6, textAlign: 'center', marginBottom: '24px', maxWidth: '900px', margin: '0 auto 24px' }}>
          {t.what}
        </p>

        {/* Products 4x2 grid */}
        <div className="cms-products-grid" style={{ marginBottom: '24px' }}>
          {t.products.map((p) => (
            <div key={p.name} className="card" style={{ padding: '14px 16px' }}>
              <div style={{ fontSize: '1rem', color: '#0ea5e9', fontWeight: 700, marginBottom: '8px', lineHeight: 1.2 }}>
                {p.category}
              </div>
              <div style={{ fontWeight: 700, color: '#f0f9ff', fontSize: '0.84rem', marginBottom: '6px' }}>
                {p.name}
              </div>
              <div style={{ color: '#7dd3fc', fontSize: '0.78rem', lineHeight: 1.45 }}>
                {p.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Risks */}
        <div className="card" style={{ borderColor: 'rgba(125, 211, 252, 0.18)', padding: '18px 22px' }}>
          <div style={{ fontWeight: 800, color: '#f0f9ff', fontSize: '1rem', marginBottom: '8px' }}>
            {t.risksLabel}
          </div>
          <p style={{ color: '#7dd3fc', fontSize: '0.86rem', lineHeight: 1.55, marginBottom: '14px' }}>
            {t.risksIntro}
          </p>
          <div className="cms-risk-list">
            {t.risks.map((r) => (
              <div key={r.label} style={{ padding: '12px 14px', borderRadius: '14px', background: 'rgba(2, 6, 23, 0.42)', border: `1px solid ${r.color}44` }}>
                <div style={{ fontWeight: 700, color: r.color, fontSize: '0.92rem', marginBottom: '6px' }}>
                  {r.label}
                </div>
                <div style={{ color: '#f0f9ff', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  {r.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
