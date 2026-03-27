import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide03_ArchitecturePatterns() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '아키텍처 패턴 비교',
      subtitle: '4가지 패턴을 한 번에 훑고, 언제 먼저 후보로 떠올릴지 정리합니다',
      patterns: [
        {
          name: 'Monolithic',
          color: '#6366f1',
          summary: '콘텐츠 관리와 프레젠테이션(HTML 생성)을 한 시스템이 함께 담당',
          fit: '웹사이트 중심 운영에 적합',
        },
        {
          name: 'Headless',
          color: '#0ea5e9',
          summary: '콘텐츠는 API로 관리하고 프레젠테이션은 별도 프런트엔드가 담당',
          fit: '멀티채널 확장에 유리',
        },
        {
          name: 'Hybrid',
          color: '#8b5cf6',
          summary: '일부는 기존 CMS, 일부는 별도 프런트엔드로 단계적으로 분리',
          fit: '전환 리스크를 나눌 때 유리',
        },
        {
          name: 'Embed',
          color: '#22d3ee',
          summary: '댓글·검색·분석 같은 기능을 독립 서비스로 붙이는 방식',
          fit: '특정 기능만 빠르게 도입할 때 유리',
        },
      ],
      tableHeaders: ['비교 항목', 'Monolithic', 'Headless', 'Hybrid', 'Embed'],
      tableRows: [
        ['프레젠테이션(HTML 생성)', 'CMS가 직접 HTML 생성', '별도 프런트엔드가 HTML 생성', '경로/화면별로 나누어 생성', '기능별 내부 서비스가 응답'],
        ['핵심 장점', '구축 단순, 백오피스 일체형', '멀티채널 확장, 프런트 자유도', '점진적 분리, 위험 분산', '기능 도입 속도, 선택적 분리'],
        ['캐시 전략', 'HTML·정적 자산 CDN', 'API + ISR/Edge 캐시', '경로별 캐시 전략 분리', '기능별 캐시·큐 운영'],
        ['먼저 떠올릴 상황', '웹사이트가 핵심 채널일 때', '웹·앱·API를 함께 운영할 때', '기존 CMS를 유지하며 일부만 개선할 때', '댓글/검색/분석만 빠르게 붙일 때'],
      ],
      readingTipTitle: '이 표를 읽는 법',
      readingTip: '먼저 HTML을 누가 만드는지 보고, 다음으로 캐시 전략과 운영 복잡도를 비교하시면 빠르게 후보를 좁힐 수 있습니다.',
    },
    en: {
      title: 'Architecture Pattern Comparison',
      subtitle: 'Scan the four patterns at once and see when each should be your first candidate',
      patterns: [
        {
          name: 'Monolithic',
          color: '#6366f1',
          summary: 'One system handles both content management and presentation (HTML generation).',
          fit: 'Strong fit for website-first operations',
        },
        {
          name: 'Headless',
          color: '#0ea5e9',
          summary: 'Content is managed through APIs while presentation is built in a separate frontend.',
          fit: 'Strong fit for multi-channel delivery',
        },
        {
          name: 'Hybrid',
          color: '#8b5cf6',
          summary: 'Keep some pages in the existing CMS while moving selected areas to a separate frontend.',
          fit: 'Useful when migration risk must be spread out',
        },
        {
          name: 'Embed',
          color: '#22d3ee',
          summary: 'Delegate features like comments, search, or analytics to separate services.',
          fit: 'Useful when only a specific feature must be added quickly',
        },
      ],
      tableHeaders: ['Aspect', 'Monolithic', 'Headless', 'Hybrid', 'Embed'],
      tableRows: [
        ['Presentation (HTML generation)', 'CMS generates HTML directly', 'Separate frontend generates HTML', 'Generation split by route or surface', 'Internal services answer feature requests'],
        ['Key advantage', 'Simple build, integrated backoffice', 'Multi-channel expansion, frontend freedom', 'Gradual separation, lower migration risk', 'Fast feature adoption, selective separation'],
        ['Cache strategy', 'HTML/static asset CDN', 'API + ISR/Edge cache', 'Per-route cache split', 'Per-feature cache and queue operations'],
        ['When to consider first', 'When the website is the main channel', 'When web, app, and API must move together', 'When you want to improve only part of an existing CMS', 'When comments/search/analytics need a fast add-on'],
      ],
      readingTipTitle: 'How to read this table',
      readingTip: 'Start by checking who generates HTML, then compare cache strategy and operating complexity to narrow the candidates quickly.',
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={3}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1120px', zIndex: 1 }} data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 800, textAlign: 'center', marginBottom: '12px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '24px', fontSize: '1rem' }}>
          {t.subtitle}
        </p>

        <div className="cms-pattern-summary-grid" style={{ marginBottom: '18px' }}>
          {t.patterns.map((pattern) => (
            <div
              key={pattern.name}
              className="card"
              style={{
                borderColor: `${pattern.color}44`,
                background: 'rgba(2, 6, 23, 0.55)',
                padding: '18px 18px 16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: pattern.color, boxShadow: `0 0 8px ${pattern.color}` }} />
                <h3 style={{ color: pattern.color, fontSize: '1rem', fontWeight: 800 }}>{pattern.name}</h3>
              </div>
              <p style={{ color: '#e2e8f0', fontSize: '0.84rem', lineHeight: 1.5, marginBottom: '10px' }}>
                {pattern.summary}
              </p>
              <div style={{ color: '#7dd3fc', fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {pattern.fit}
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ borderColor: 'rgba(125, 211, 252, 0.18)', padding: '18px 22px', marginBottom: '18px' }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="cms-pattern-table">
              <thead>
                <tr>
                  {t.tableHeaders.map((header, index) => (
                    <th key={header} className={index === 0 ? 'cms-pattern-table-lead' : undefined}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.tableRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${index}`} className={index === 0 ? 'cms-pattern-table-lead' : undefined}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="card"
          style={{
            borderColor: 'rgba(99, 102, 241, 0.25)',
            background: 'linear-gradient(135deg, rgba(14,165,233,0.12), rgba(139,92,246,0.12))',
            padding: '18px 22px',
          }}
        >
          <div style={{ color: '#f0f9ff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
            {t.readingTipTitle}
          </div>
          <p style={{ color: '#dbeafe', fontSize: '0.92rem', lineHeight: 1.55 }}>
            {t.readingTip}
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
