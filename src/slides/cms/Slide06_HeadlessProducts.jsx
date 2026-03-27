import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide06_HeadlessProducts() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: 'Headless CMS 대표 제품',
      subtitle: 'SaaS형과 Self-host형 비교',
      products: [
        { name: 'Contentful', site: 'https://www.contentful.com/', type: 'SaaS', color: '#0ea5e9', pricing: 'Free/Lite/Premium 플랜', exportInfo: 'API/CLI export 지원 (space import/export)', note: '대표적인 SaaS형 Headless CMS' },
        { name: 'Sanity', site: 'https://www.sanity.io/', type: 'SaaS + 오픈소스 Studio', color: '#6366f1', pricing: '$15/seat/month (Growth)', exportInfo: 'CLI/Export API로 데이터 export 가능', note: 'Studio(편집기)는 오픈소스, 데이터는 Sanity 클라우드' },
        { name: 'Strapi', site: 'https://strapi.io/', type: 'Self-host + Cloud', color: '#8b5cf6', pricing: 'Self-hosted Growth $45/month', exportInfo: 'CLI export/import/transfer 공식 지원', note: '가장 인기 있는 오픈소스 Headless CMS' },
        { name: 'Directus', site: 'https://directus.io/', type: 'DB 위에 얹는 Headless', color: '#22d3ee', pricing: '연 소득 < $5M이면 self-host 무료 (BSL 1.1)', exportInfo: 'CSV/JSON/XML/YAML export 지원', note: '기존 DB를 그대로 CMS화 가능한 독특한 구조' },
        { name: 'Payload', site: 'https://payloadcms.com/', type: '앱 내장형 (MIT)', color: '#a78bfa', pricing: '완전 무료·오픈소스·self-host', exportInfo: 'Next.js native CMS로 앱 내부에 설치', note: '앱과 CMS를 한 코드베이스로 관리' },
      ],
    },
    en: {
      title: 'Headless CMS Products',
      subtitle: 'SaaS vs Self-hosted comparison',
      products: [
        { name: 'Contentful', site: 'https://www.contentful.com/', type: 'SaaS', color: '#0ea5e9', pricing: 'Free / Lite / Premium plans', exportInfo: 'API/CLI export (space import/export)', note: 'Leading SaaS Headless CMS' },
        { name: 'Sanity', site: 'https://www.sanity.io/', type: 'SaaS + Open-source Studio', color: '#6366f1', pricing: '$15/seat/month (Growth)', exportInfo: 'CLI/Export API for data export', note: 'Studio (editor) is open-source, data on Sanity cloud' },
        { name: 'Strapi', site: 'https://strapi.io/', type: 'Self-host + Cloud', color: '#8b5cf6', pricing: 'Self-hosted Growth $45/month', exportInfo: 'Official CLI export/import/transfer', note: 'Most popular open-source Headless CMS' },
        { name: 'Directus', site: 'https://directus.io/', type: 'Headless on top of DB', color: '#22d3ee', pricing: 'Self-host free if revenue < $5M (BSL 1.1)', exportInfo: 'CSV/JSON/XML/YAML export', note: 'Unique: turns any existing DB into a CMS' },
        { name: 'Payload', site: 'https://payloadcms.com/', type: 'App-embedded (MIT)', color: '#a78bfa', pricing: 'Fully free, open-source, self-host', exportInfo: 'Next.js native CMS installed inside app', note: 'Manage app and CMS in one codebase' },
      ],
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={7}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }} data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '40px', fontSize: '1.1rem' }}>
          {t.subtitle}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {t.products.map((p) => (
            <div key={p.name} className="card" style={{ borderColor: `${p.color}44` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <a
                  href={p.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 700, color: '#f0f9ff', fontSize: '1.05rem', textDecoration: 'none' }}
                >
                  {p.name}
                </a>
                <span className="tag" style={{ fontSize: '0.65rem', background: `${p.color}33`, color: p.color, border: `1px solid ${p.color}66` }}>{p.type}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '10px' }}>
                <div style={{ fontSize: '0.85rem', color: '#f0f9ff' }}>
                  <span style={{ color: p.color, fontWeight: 600 }}>Pricing: </span>{p.pricing}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#f0f9ff' }}>
                  <span style={{ color: p.color, fontWeight: 600 }}>Export: </span>{p.exportInfo}
                </div>
              </div>
              <div style={{ color: '#7dd3fc', fontSize: '0.82rem', lineHeight: 1.5 }}>
                {p.note}
              </div>
              <a
                href={p.site}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', marginTop: '10px', color: '#93c5fd', fontSize: '0.76rem', textDecoration: 'none' }}
              >
                {locale === 'ko' ? '공식 사이트 ↗' : 'Official site ↗'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
