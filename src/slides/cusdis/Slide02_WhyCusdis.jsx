import { useLocale } from '../../i18n/LocaleContext';
import { CusdisSlide, StepList } from './CusdisShared';

export default function Slide02_WhyCusdis() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'why cusdis',
      title: '왜 처음엔 Cusdis가 편한가',
      subtitle: '가볍고 무료로 시작하기 정말 좋은 도구예요. 블로그 댓글 자동화를 처음 시작하는 분들께 강력 추천합니다!',
      featuresTitle: 'Cusdis의 매력 포인트',
      features: [
        '개인정보 걱정 없는 오픈소스 Disqus 대안',
        '단 5KB의 가벼운 SDK로 빠른 로딩 속도',
        '한국어와 다크모드를 기본으로 지원',
        '자동화의 핵심, Webhook 과 승인 링크 기본 제공',
      ],
      pricingTitle: '무료로 시작하는 Cloud 플랜',
      pricingItems: [
        '무료 플랜: 사이트 1개 등록 가능',
        '월 100건의 승인된 댓글 지원',
        '월 10건의 퀵 승인 링크 제공',
        '규모가 커지면 유료나 Self-host로 전환하세요!',
      ],
      selfHostTitle: '언제 Self-host로 갈아타야 할까요?',
      selfHostBody: '트래픽이 많아지거나 운영 데이터를 직접 관리하고 싶어질 때가 바로 그 시점입니다. 그때까진 우선 편하게 시작해 보세요!',
    },
    en: {
      kicker: 'why cusdis',
      title: 'Why Cusdis is easy to start with',
      subtitle: 'It is lightweight, privacy-first, and easy to set up.\nThis makes it a perfect first step for blog comment automation.',
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
    >
      <div className="cusdis-balanced-layout">
        {/* 왼쪽: 핵심 포인트 리스트 */}
        <div>
          <div className="cusdis-panel-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {t.featuresTitle}
            <a
              className="cusdis-source-link"
              href="https://cusdis.com/"
              rel="noopener noreferrer"
              style={{ fontWeight: 400 }}
              target="_blank"
            >
              cusdis.com ↗
            </a>
          </div>
          <StepList items={t.features} />
        </div>
        {/* 오른쪽: Cloud 조건 + SelfHost 시점 */}
        <div className="cusdis-editorial-stack">
          <div className="cusdis-callout">
            <div className="cusdis-panel-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {t.pricingTitle}
              <a
                className="cusdis-source-link"
                href="https://cusdis.com/#pricing"
                rel="noopener noreferrer"
                style={{ fontWeight: 400 }}
                target="_blank"
              >
                pricing ↗
              </a>
            </div>
            <StepList items={t.pricingItems} />
          </div>
          <div className="cusdis-callout">
            <div className="cusdis-panel-label">{t.selfHostTitle}</div>
            <p>{t.selfHostBody}</p>
          </div>
        </div>
      </div>
    </CusdisSlide>
  );
}
