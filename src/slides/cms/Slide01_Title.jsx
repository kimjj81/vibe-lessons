import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide01_Title() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      badge: '2026 웹 인프라 가이드',
      titleTop: 'CMS &',
      titleBottom: '콘텐츠 인프라',
      description: '웹 서비스를 설계할 때\n콘텐츠를 어디서 관리하고 어떻게 전달할지 결정하는 4가지 접근',
      tags: ['Monolithic CMS', 'Headless CMS', 'SaaS Embed', '운영 전략'],
      hint: '← → 방향키 또는 스와이프로 탐색',
    },
    en: {
      badge: '2026 Web Infrastructure Guide',
      titleTop: 'CMS &',
      titleBottom: 'Content Infrastructure',
      description: 'When designing a web service,\nfour approaches to decide how to manage and deliver content',
      tags: ['Monolithic CMS', 'Headless CMS', 'SaaS Embed', 'Ops Strategy'],
      hint: 'Use ← → keys or swipe to navigate',
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={1}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-20%', left: '-10%',
          width: '60%', height: '60%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', right: '-10%',
          width: '60%', height: '60%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)',
        }} />
      </div>

      <div style={{ textAlign: 'center', zIndex: 1, maxWidth: '900px' }}>
        <div className="tag tag-blue" style={{ marginBottom: '24px' }}>
          {t.badge}
        </div>

        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
          <GradientText>{t.titleTop}</GradientText>
          <br />
          <span style={{ color: '#f0f9ff' }}>{t.titleBottom}</span>
        </h1>

        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: '#7dd3fc', marginBottom: '48px', lineHeight: 1.6 }}>
          {t.description.split('\n')[0]}<br />{t.description.split('\n')[1]}
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {t.tags.map((tag) => (
            <span key={tag} className="tag tag-blue">{tag}</span>
          ))}
        </div>

        <div style={{ marginTop: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#475569', fontSize: '0.875rem' }}>
          <span>{t.hint}</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
