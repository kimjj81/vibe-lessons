import { useLocale } from '../../i18n/LocaleContext';
import { CusdisSlide } from './CusdisShared';

export default function Slide02_WhyCusdis() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'why cusdis',
      title: '왜 처음엔 Cusdis가 편한가',
      subtitle: '작고 가볍고, 무료로 시작하기 쉬운 댓글 시스템이라 블로그 코멘트 자동화의 출발점으로 좋다.',
      featuresTitle: '핵심 포인트',
      features: [
        'Privacy-first, open-source Disqus 대안',
        '임베드 SDK가 약 5KB gzip이라 무겁지 않음',
        'built-in i18n과 dark mode 지원',
        'Webhook과 Quick Approve 링크를 기본 제공',
      ],
      pricingTitle: 'Cloud 시작 조건',
      pricingItems: [
        '무료 Cloud: 사이트 1개',
        '월 100 approved comments',
        '월 10 quick approve',
        '커지면 유료 전환 또는 self-host 고려',
      ],
      selfHostTitle: 'self-host를 생각하는 시점',
      selfHostBody: '트래픽이 커지거나 데이터/운영 제어권을 더 갖고 싶어질 때 self-host가 자연스러운 다음 단계가 된다.',
    },
    en: {
      kicker: 'why cusdis',
      title: 'Why Cusdis is easy to start with',
      subtitle: 'It is lightweight, privacy-first, and cheap to prove with, which makes it a strong first step for blog comment automation.',
      featuresTitle: 'Core notes',
      features: [
        'A privacy-first, open-source alternative to Disqus',
        'The embed SDK is about 5KB gzipped',
        'Built-in i18n and dark mode support',
        'Webhook events and Quick Approve links out of the box',
      ],
      pricingTitle: 'Cloud starting point',
      pricingItems: [
        'Free Cloud includes one site',
        '100 approved comments per month',
        '10 quick approves per month',
        'Move to paid or self-host as volume grows',
      ],
      selfHostTitle: 'When self-host starts making sense',
      selfHostBody: 'Once traffic grows or you want more control over operations and data, self-hosting becomes the natural next move.',
    },
  };
  const t = copy[locale];

  return (
    <CusdisSlide
      slideNumber={2}
      kicker={t.kicker}
      title={t.title}
      subtitle={t.subtitle}
      sources={[
        { label: 'Cusdis home', href: 'https://cusdis.com/' },
        { label: 'Cusdis pricing', href: 'https://cusdis.com/#pricing' },
      ]}
    >
      <div className="cusdis-feature-band">
        {t.features.map((item, index) => (
          <div className="cusdis-feature-card" key={item}>
            <div className="cusdis-feature-index">{`${String(index + 1).padStart(2, '0')} ${t.featuresTitle}`}</div>
            <div className="cusdis-feature-body">{item}</div>
          </div>
        ))}
      </div>
      <div className="cusdis-balanced-layout">
        <div className="cusdis-glass-card">
          <div className="cusdis-panel-label">{t.pricingTitle}</div>
          <ul className="cusdis-bullet-list">
            {t.pricingItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="cusdis-callout">
          <div className="cusdis-panel-label">{t.selfHostTitle}</div>
          <p>{t.selfHostBody}</p>
        </div>
      </div>
    </CusdisSlide>
  );
}
