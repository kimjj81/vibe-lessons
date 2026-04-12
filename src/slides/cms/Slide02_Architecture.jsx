import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide02_Architecture() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '2가지 비교 축으로 보는 CMS 구조',
      subtitle: '먼저 구조를 어떻게 나누는지 보고, 그다음 누가 운영하는지 보면 혼동이 줄어듭니다',
      comparisons: [
        {
          title: 'Monolithic CMS vs Headless CMS',
          axis: '아키텍처 축: 콘텐츠 관리와 프레젠테이션(HTML 생성)을 어떻게 나누는가',
          left: {
            name: 'Monolithic CMS',
            color: '#6366f1',
            diagram: '[CMS+Theme] → HTML → Browser',
            desc: '콘텐츠 관리와 프레젠테이션(HTML 생성)을 한 시스템이 함께 담당합니다.',
            examplesLabel: '대표 예시',
            examples: 'WordPress, Drupal, TYPO3',
          },
          right: {
            name: 'Headless CMS',
            color: '#0ea5e9',
            diagram: '[CMS] → API(JSON) → [Frontend] → HTML → Browser',
            desc: '콘텐츠(데이터)는 API로 관리하고, 프레젠테이션(HTML 생성)은 별도 프런트엔드가 구현합니다.',
            examplesLabel: '대표 예시',
            examples: 'Contentful, Sanity, Strapi',
          },
        },
        {
          title: 'SaaS Embed vs Self-hosted',
          axis: '운영 축: 기능을 외부 SaaS에 맡길지, 직접 설치해서 운영할지',
          left: {
            name: 'SaaS Embed',
            color: '#8b5cf6',
            diagram: '[Frontend] → SDK/Script → [SaaS Provider] → 기능 제공',
            desc: '댓글, 검색, 분석 같은 기능을 외부 서비스에 맡기고 스크립트나 SDK로 연결합니다.',
            examplesLabel: '대표 예시',
            examples: 'Disqus, Algolia, Google Analytics',
          },
          right: {
            name: 'Self-hosted',
            color: '#22d3ee',
            diagram: '[Frontend] → API → [Self-hosted Service] → 기능 제공',
            desc: '오픈소스 도구나 별도 서비스를 우리 인프라에 설치하고 직접 운영합니다.',
            examplesLabel: '대표 예시',
            examples: 'Matomo, Meilisearch, Plausible',
          },
        },
      ],
      comboTitle: '두 축은 서로 독립적이므로 조합해서 생각할 수 있습니다',
      combos: [
        ['Monolithic + SaaS', 'WordPress 같은 CMS에 댓글·검색·분석 기능만 외부 SaaS로 붙이는 구조'],
        ['Monolithic + Self-hosted', 'Drupal·TYPO3를 우리 서버에 직접 설치하고 운영하는 구조'],
        ['Headless + SaaS', 'Contentful·Sanity와 Next.js/Astro를 조합해 빠르게 구축하는 구조'],
        ['Headless + Self-hosted', 'Strapi·Directus·Payload를 직접 운영해 데이터 통제권을 높이는 구조'],
      ],
      summary: '즉, Monolithic/Headless는 구조를 고르는 질문이고, SaaS/Self-hosted는 운영 책임을 어디에 둘지 정하는 질문입니다.',
    },
    en: {
      title: 'CMS Through Two Comparison Axes',
      subtitle: 'First look at how the structure is split, then look at who operates it',
      comparisons: [
        {
          title: 'Monolithic CMS vs Headless CMS',
          axis: 'Architecture axis: how content management and presentation (HTML generation) are split',
          left: {
            name: 'Monolithic CMS',
            color: '#6366f1',
            diagram: '[CMS+Theme] → HTML → Browser',
            desc: 'One system handles both content management and presentation (HTML generation).',
            examplesLabel: 'Examples',
            examples: 'WordPress, Drupal, TYPO3',
          },
          right: {
            name: 'Headless CMS',
            color: '#0ea5e9',
            diagram: '[CMS] → API(JSON) → [Frontend] → HTML → Browser',
            desc: 'Content is managed through APIs, while presentation (HTML generation) is implemented by a separate frontend.',
            examplesLabel: 'Examples',
            examples: 'Contentful, Sanity, Strapi',
          },
        },
        {
          title: 'SaaS Embed vs Self-hosted',
          axis: 'Operating axis: delegate a feature to an external SaaS or run it yourself',
          left: {
            name: 'SaaS Embed',
            color: '#8b5cf6',
            diagram: '[Frontend] → SDK/Script → [SaaS Provider] → Feature',
            desc: 'Delegate features like comments, search, or analytics to an external service via script or SDK.',
            examplesLabel: 'Examples',
            examples: 'Disqus, Algolia, Google Analytics',
          },
          right: {
            name: 'Self-hosted',
            color: '#22d3ee',
            diagram: '[Frontend] → API → [Self-hosted Service] → Feature',
            desc: 'Install open-source tools or services on your own infrastructure and operate them directly.',
            examplesLabel: 'Examples',
            examples: 'Matomo, Meilisearch, Plausible',
          },
        },
      ],
      comboTitle: 'The two axes are independent, so they can be combined in different ways',
      combos: [
        ['Monolithic + SaaS', 'A website-first CMS with comments, search, or analytics delegated to external SaaS tools'],
        ['Monolithic + Self-hosted', 'Drupal or TYPO3 installed and operated on your own infrastructure'],
        ['Headless + SaaS', 'Contentful or Sanity combined with Next.js or Astro for fast delivery'],
        ['Headless + Self-hosted', 'Strapi, Directus, or Payload operated directly for stronger data control'],
      ],
      summary: 'Monolithic vs Headless answers a structure question, while SaaS vs Self-hosted answers an operating-ownership question.',
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={2}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }} data-prevent-swipe="" data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(1.85rem, 3.8vw, 2.7rem)', fontWeight: 800, textAlign: 'center', marginBottom: '10px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '16px', fontSize: '0.94rem', lineHeight: 1.45 }}>
          {t.subtitle}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
          <div className="cms-axis-panel-grid">
          {t.comparisons.map((comparison) => (
            <div key={comparison.title} className="card" style={{ borderColor: 'rgba(125, 211, 252, 0.18)', padding: '18px 18px 16px' }}>
              <div style={{ marginBottom: '12px' }}>
                <h3 style={{ fontWeight: 800, color: '#f0f9ff', fontSize: '1.08rem', marginBottom: '6px', textAlign: 'center' }}>
                  {comparison.title}
                </h3>
                <p style={{ textAlign: 'center', color: '#7dd3fc', fontSize: '0.82rem', lineHeight: 1.4 }}>
                  {comparison.axis}
                </p>
              </div>

              <div className="cms-compact-vs-grid">
                {[comparison.left, comparison.right].map((item, index) => (
                  <div
                    key={item.name}
                    className="card"
                    style={{
                      borderColor: `${item.color}44`,
                      background: 'rgba(2, 6, 23, 0.52)',
                      padding: '14px 14px 12px',
                      order: index === 0 ? 1 : 3,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                      <h4 style={{ fontWeight: 700, color: item.color, fontSize: '0.98rem' }}>{item.name}</h4>
                    </div>

                    <div
                      style={{
                        padding: '9px 11px',
                        borderRadius: '10px',
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        fontFamily: 'Space Grotesk, monospace',
                        fontSize: '0.72rem',
                        color: '#f0f9ff',
                        marginBottom: '10px',
                        letterSpacing: '0.02em',
                        display: 'flex',
                        alignItems: 'center',
                        lineHeight: 1.4,
                      }}
                    >
                      {item.diagram}
                    </div>

                    <p style={{ color: '#bae6fd', fontSize: '0.78rem', lineHeight: 1.45 }}>
                      {item.desc}
                    </p>

                    <div
                      style={{
                        marginTop: '10px',
                        paddingTop: '8px',
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <div style={{ color: item.color, fontSize: '0.7rem', fontWeight: 700, marginBottom: '3px' }}>
                        {item.examplesLabel}
                      </div>
                      <div style={{ color: '#cbd5e1', fontSize: '0.74rem', lineHeight: 1.4 }}>
                        {item.examples}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="cms-vs-badge" style={{ order: 2 }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '999px',
                      border: '1px solid rgba(255,255,255,0.16)',
                      background: 'radial-gradient(circle at 30% 30%, rgba(14,165,233,0.32), rgba(15,23,42,0.9))',
                      color: '#f8fafc',
                      fontSize: '0.98rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      letterSpacing: '0.08em',
                    }}
                  >
                    VS
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>

          <div
            className="card"
            style={{
              borderColor: 'rgba(125, 211, 252, 0.18)',
              padding: '16px 18px',
              background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(99,102,241,0.08))',
            }}
          >
            <h3 style={{ fontWeight: 800, color: '#f0f9ff', fontSize: '1.05rem', marginBottom: '14px', textAlign: 'center' }}>
              {t.comboTitle}
            </h3>
            <div className="cms-axis-combos" style={{ marginBottom: '12px' }}>
              {t.combos.map(([name, desc]) => (
                <div
                  key={name}
                  className="card"
                  style={{
                    borderColor: 'rgba(255,255,255,0.08)',
                    background: 'rgba(2, 6, 23, 0.5)',
                    padding: '16px 18px',
                  }}
                >
                      <div style={{ color: '#7dd3fc', fontSize: '0.74rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '5px' }}>
                        {name}
                      </div>
                      <p style={{ color: '#e2e8f0', fontSize: '0.8rem', lineHeight: 1.45 }}>
                        {desc}
                      </p>
                    </div>
              ))}
            </div>
            <p style={{ color: '#dbeafe', fontSize: '0.86rem', lineHeight: 1.5, textAlign: 'center' }}>
              {t.summary}
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
