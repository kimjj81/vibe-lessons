import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide03_Monolithic() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: 'Monolithic CMS',
      subtitle: '콘텐츠 관리와 프레젠테이션이 결합된 전통 구조',
      what: '콘텐츠 백오피스(관리 화면)와 프레젠테이션(템플릿/테마)이 한 시스템 안에 결합된 구조. 프론트엔드와 백엔드가 본질적으로 결합(coupled)되어 있어, 테마·플러그인 생태계를 통해 기능을 확장합니다.',
      strengthsLabel: '강점',
      strengths: [
        '비개발자(마케터/운영자)가 직접 페이지·콘텐츠를 빠르게 관리 가능',
        '테마·플러그인 생태계로 기능 확장이 빠름 (SEO, 분석, eCommerce 등)',
        '웹사이트 중심 채널에서 빠른 구축·운영에 최적화',
      ],
      weaknessesLabel: '약점',
      weaknesses: [
        '시스템이 커질수록 플러그인·테마 의존도 증가, 업데이트·보안 패치·성능 튜닝이 운영 부담',
        '프론트엔드 기술 스택 선택의 자유가 제한적 (테마 엔진에 종속)',
        '멀티 채널(앱, 음성, IoT 등) 대응이 어렵고, API 우선 설계가 불리',
      ],
      whenLabel: '최적 시나리오',
      when: '웹사이트가 주요 채널이고, 운영 주체가 비개발자이며, 빠른 제작·운영이 우선순위일 때',
    },
    en: {
      title: 'Monolithic CMS',
      subtitle: 'Traditional structure with content management and presentation coupled',
      what: 'A structure where the content backoffice (admin UI) and presentation (templates/themes) are coupled in one system. Frontend and backend are essentially bound together, with functionality extended through themes and plugins.',
      strengthsLabel: 'Strengths',
      strengths: [
        'Non-developers (marketers/operators) can directly manage pages and content quickly',
        'Fast feature expansion through theme/plugin ecosystems (SEO, analytics, eCommerce)',
        'Optimized for quick website-centric builds and operations',
      ],
      weaknessesLabel: 'Weaknesses',
      weaknesses: [
        'As the system grows, plugin/theme dependencies increase; updates, security patches, and performance tuning become operational burdens',
        'Limited freedom in choosing frontend technology (bound to template engine)',
        'Hard to handle multi-channel (app, voice, IoT); API-first design is constrained',
      ],
      whenLabel: 'Best scenario',
      when: 'When website is the primary channel, operators are non-developers, and fast build/operation is top priority',
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={4}>
      <div style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '40px', fontSize: '1.1rem' }}>
          {t.subtitle}
        </p>

        {/* What section */}
        <div className="card" style={{ marginBottom: '24px', borderColor: 'rgba(99,102,241,0.3)' }}>
          <p style={{ color: '#f0f9ff', fontSize: '1rem', lineHeight: 1.7 }}>
            {t.what}
          </p>
        </div>

        {/* Strengths & Weaknesses */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
          <div className="card" style={{ borderColor: 'rgba(34,197,94,0.3)' }}>
            <h3 style={{ fontWeight: 700, color: '#22c55e', fontSize: '1rem', marginBottom: '16px' }}>
              {t.strengthsLabel}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {t.strengths.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#22c55e', fontWeight: 700, flexShrink: 0 }}>+</span>
                  <span style={{ color: '#f0f9ff', fontSize: '0.9rem', lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ borderColor: 'rgba(239,68,68,0.3)' }}>
            <h3 style={{ fontWeight: 700, color: '#ef4444', fontSize: '1rem', marginBottom: '16px' }}>
              {t.weaknessesLabel}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {t.weaknesses.map((w, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#ef4444', fontWeight: 700, flexShrink: 0 }}>-</span>
                  <span style={{ color: '#f0f9ff', fontSize: '0.9rem', lineHeight: 1.5 }}>{w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* When to use */}
        <div style={{
          padding: '16px 24px', borderRadius: '12px',
          background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.25)',
        }}>
          <span style={{ fontWeight: 700, color: '#0ea5e9', marginRight: '8px' }}>{t.whenLabel}:</span>
          <span style={{ color: '#f0f9ff', fontSize: '0.95rem' }}>{t.when}</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
