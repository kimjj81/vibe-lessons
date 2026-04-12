import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide11_ArchPatterns() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: 'Hybrid와 단계적 전환',
      subtitle: '실무에서는 구조를 한 번에 바꾸기보다 섞어서 운영하는 경우가 많습니다',
      intro: '2~3페이지에서 본 비교는 개념 축을 이해하기 위한 요약입니다. 실제 서비스에서는 모든 화면과 기능을 한 번에 바꾸지 않고, 필요한 부분부터 단계적으로 분리하는 경우가 많습니다.',
      cards: [
        {
          title: 'Hybrid',
          color: '#8b5cf6',
          points: [
            '기본 페이지는 기존 CMS가 계속 담당합니다.',
            '검색, 캠페인, 고성능 랜딩 페이지처럼 요구가 높은 일부 화면만 별도 프런트엔드로 분리합니다.',
          ],
        },
        {
          title: '점진적 전환',
          color: '#0ea5e9',
          points: [
            '기존 시스템을 유지한 채 위험이 큰 영역부터 조금씩 교체할 수 있습니다.',
            '운영팀과 개발팀이 동시에 적응할 시간을 확보할 수 있습니다.',
          ],
        },
        {
          title: '기능 회수',
          color: '#22d3ee',
          points: [
            '처음에는 SaaS Embed로 빠르게 시작하고, 나중에 비용·보안 이슈가 커지면 Self-hosted로 회수할 수 있습니다.',
            '즉, 구조 선택은 고정된 답이라기보다 성장 단계에 따라 달라지는 전략입니다.',
          ],
        },
      ],
      summary: '중요한 것은 처음부터 완벽한 구조를 고르는 것보다, 나중에 분리하거나 회수할 수 있게 경계를 설계해 두는 것입니다.',
    },
    en: {
      title: 'Hybrid and Gradual Transition',
      subtitle: 'In practice, teams often mix structures and migrate step by step',
      intro: 'The comparison on slides 2 and 3 is meant to explain the conceptual axes. In real services, teams rarely switch everything at once. They usually separate only the parts that need it first.',
      cards: [
        {
          title: 'Hybrid',
          color: '#8b5cf6',
          points: [
            'The existing CMS keeps serving the basic pages.',
            'Only demanding surfaces such as search, campaign pages, or high-performance landing pages move to a separate frontend.',
          ],
        },
        {
          title: 'Gradual migration',
          color: '#0ea5e9',
          points: [
            'You can keep the current system while replacing high-risk areas step by step.',
            'This gives both operators and developers time to adapt.',
          ],
        },
        {
          title: 'Feature reclaim',
          color: '#22d3ee',
          points: [
            'A team may start quickly with SaaS Embed, then later reclaim the feature into Self-hosted infrastructure when cost or security pressure grows.',
            'In other words, the structure is a strategy that changes with the growth stage.',
          ],
        },
      ],
      summary: 'The key is not choosing a perfect structure on day one, but drawing boundaries so that separation or reclaim is possible later.',
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={12}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }} data-prevent-swipe="" data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '12px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '18px', fontSize: '1rem' }}>
          {t.subtitle}
        </p>
        <p style={{ color: '#f0f9ff', fontSize: '0.9rem', lineHeight: 1.6, textAlign: 'center', marginBottom: '24px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.intro}
        </p>

        <div className="cms-risk-list" style={{ marginBottom: '28px' }}>
          {t.cards.map((card) => (
            <div key={card.title} className="card" style={{ borderColor: `${card.color}44`, padding: '20px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: card.color, boxShadow: `0 0 8px ${card.color}` }} />
                <h3 style={{ fontWeight: 700, color: card.color, fontSize: '1rem' }}>{card.title}</h3>
              </div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {card.points.map((point) => (
                  <div key={point} style={{ color: '#f0f9ff', fontSize: '0.86rem', lineHeight: 1.55, paddingLeft: '10px', borderLeft: `2px solid ${card.color}55` }}>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          padding: '18px 26px',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(139,92,246,0.1))',
          border: '1px solid rgba(99,102,241,0.25)',
          textAlign: 'center',
        }}>
          <span style={{ color: '#f0f9ff', fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.6 }}>
            {t.summary}
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
}
