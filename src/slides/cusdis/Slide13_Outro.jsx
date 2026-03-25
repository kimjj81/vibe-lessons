import { useLocale } from '../../i18n/LocaleContext';
import { CusdisSlide } from './CusdisShared';

export default function Slide13_Outro() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'wrap-up',
      title: '운영 메모와 다음 액션',
      subtitle: '여기까지 끝나면 댓글 승인 자동화의 기본 루프는 완성이다. 이제 실제 블로그에 붙여 운영 감각을 다듬으면 된다.',
      opsTitle: '운영 체크리스트',
      notes: [
        '처음에는 Cusdis Cloud로 검증하고, 규모가 커지면 유료 플랜이나 self-host를 검토',
        '자동 답글은 편리하지만, 브랜드 보이스와 오탐 비율을 주기적으로 점검',
        'Gemini prompt는 블로그 성격에 맞춰 계속 미세 조정하는 편이 좋다',
      ],
      ask: '유익한 정보였나요? 다음에 필요한 강좌가 있다면 support@studiojin.dev 로 연락주세요.',
      follow: '다음 채널도 함께 둘러보세요',
    },
    en: {
      kicker: 'wrap-up',
      title: 'Operating notes and next moves',
      subtitle: 'At this point the core moderation loop is working. The next step is to plug it into a real blog and tune it through live operations.',
      opsTitle: 'Ops checklist',
      notes: [
        'Validate on Cusdis Cloud first, then move to paid or self-hosting only when the volume justifies it',
        'Auto-replies are convenient, but you should still review voice consistency and false positives regularly',
        'Keep refining the Gemini prompt so it matches the tone of the blog over time',
      ],
      ask: 'Was this useful? If there is another lecture you want next, email support@studiojin.dev.',
      follow: 'Follow along here as well',
    },
  };
  const t = copy[locale];
  const links = [
    { label: 'Substack', href: 'https://substack.com/@studiojin' },
    { label: 'X / Twitter', href: 'https://twitter.com/studiojin_dev' },
    { label: 'GitHub', href: 'https://github.com/studiojin-dev' },
    { label: 'RSS', href: 'https://studiojin.dev/rss.xml' },
  ];

  return (
    <CusdisSlide
      slideNumber={13}
      kicker={t.kicker}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="cusdis-stack">
        <div className="cusdis-callout">
          <div className="cusdis-panel-label">{t.opsTitle}</div>
          <ul className="cusdis-bullet-list">
            {t.notes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="cusdis-callout">
          <p>{t.ask}</p>
        </div>
        <div>
          <p className="cusdis-inline-note">{t.follow}</p>
          <div className="cusdis-link-list">
            {links.map((link) => (
              <a href={link.href} key={link.href} rel="noopener noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </CusdisSlide>
  );
}
