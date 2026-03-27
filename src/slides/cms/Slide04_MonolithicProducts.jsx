import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide04_MonolithicProducts() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: 'Monolithic CMS 대표 제품',
      subtitle: '라이선스·강점·운영 고려사항 비교',
      products: [
        { name: 'WordPress', site: 'https://wordpress.org/', license: 'GPL (오픈소스)', strength: '테마/플러그인 생태계 최대', note: '코드·콘텐츠 소유권, 마이그레이션 옵션 풍부' },
        { name: 'Drupal', site: 'https://www.drupal.org/', license: 'GPL (오픈소스)', strength: '구조화 콘텐츠·API-first 지원', note: '"No vendor lock-in" 명시, 업그레이드 전문성 필요' },
        { name: 'Joomla', site: 'https://www.joomla.org/', license: 'GPL (오픈소스)', strength: 'Extension/Template 기반 확장', note: '자체호스팅 중심, 운영 책임 팀에 귀속' },
        { name: 'TYPO3', site: 'https://typo3.org/', license: 'GPL (오픈소스)', strength: '멀티사이트/멀티언어 운영', note: '엔터프라이즈 지향, 협회/커뮤니티 거버넌스' },
        { name: 'Umbraco', site: 'https://umbraco.com/', license: 'MIT (코어 무료)', strength: '.NET 기반 ASP.NET Core CMS', note: '코어 무료, 매니지드/클라우드 부가 시 TCO 달라짐' },
        { name: 'Adobe Experience Manager', site: 'https://business.adobe.com/products/experience-manager/adobe-experience-manager.html', license: '상용 (엔터프라이즈)', strength: '대규모 조직의 WCM+DAM 통합', note: '상용 계약·전문 운영 역량 전제, 도입 문턱 높음' },
      ],
    },
    en: {
      title: 'Monolithic CMS Products',
      subtitle: 'License, strengths, and operational considerations',
      products: [
        { name: 'WordPress', site: 'https://wordpress.org/', license: 'GPL (open source)', strength: 'Largest theme/plugin ecosystem', note: 'Code/content ownership, rich migration options' },
        { name: 'Drupal', site: 'https://www.drupal.org/', license: 'GPL (open source)', strength: 'Structured content, API-first support', note: '"No vendor lock-in" stated, upgrade expertise needed' },
        { name: 'Joomla', site: 'https://www.joomla.org/', license: 'GPL (open source)', strength: 'Extension/Template-based expansion', note: 'Self-hosting focus, ops responsibility on team' },
        { name: 'TYPO3', site: 'https://typo3.org/', license: 'GPL (open source)', strength: 'Multi-site / multi-language ops', note: 'Enterprise-oriented, association/community governance' },
        { name: 'Umbraco', site: 'https://umbraco.com/', license: 'MIT (core free)', strength: '.NET-based ASP.NET Core CMS', note: 'Core free, TCO varies with managed/cloud add-ons' },
        { name: 'Adobe Experience Manager', site: 'https://business.adobe.com/products/experience-manager/adobe-experience-manager.html', license: 'Commercial (enterprise)', strength: 'Large-org WCM + DAM integration', note: 'Requires commercial contract + expert ops, high entry barrier' },
      ],
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={5}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }} data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '40px', fontSize: '1.1rem' }}>
          {t.subtitle}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {t.products.map((p) => (
            <div key={p.name} className="card" style={{ borderColor: 'rgba(99,102,241,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <a
                  href={p.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 700, color: '#f0f9ff', fontSize: '1.05rem', textDecoration: 'none' }}
                >
                  {p.name}
                </a>
                <span className="tag tag-blue" style={{ fontSize: '0.65rem' }}>{p.license}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                <span style={{ color: '#6366f1', fontWeight: 700, flexShrink: 0 }}>+</span>
                <span style={{ color: '#f0f9ff', fontSize: '0.88rem', lineHeight: 1.5 }}>{p.strength}</span>
              </div>
              <div style={{ color: '#7dd3fc', fontSize: '0.82rem', lineHeight: 1.5, paddingLeft: '18px' }}>
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
