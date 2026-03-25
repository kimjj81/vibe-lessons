import { useLocale } from '../../i18n/LocaleContext';
import { CusdisSlide } from './CusdisShared';

export default function Slide13_Outro() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'wrap-up',
      title: '마치며',
      subtitle: '축하합니다!\n이제 여러분의 블로그에 똑똑한 AI 관리자가 생겼어요.\n실제 운영하면서 조금씩 디테일을 다듬어 보세요.',
      opsTitle: '강의를 마치며, 꼭 체크해 보세요!',
      notes: [
        '처음에는 Cusdis Cloud 무료 플랜으로 가볍게 써보시고, 규모가 커지면 유료나 Self-host를 고려해 보세요.',
        'AI 자동 답글이 내 블로그의 색깔과 잘 맞는지, 가끔 엉뚱한 답을 하지는 않는지 주기적으로 살펴보는 게 좋습니다.',
        '블로그 성격에 따라 Gemini 프롬프트를 조금씩 수정하면 훨씬 더 개성 있는 답글을 얻을 수 있습니다.',
      ],
      ask: '오늘 강의 어떠셨나요? 도움 되셨다면 정말 기쁩니다. 혹시 추가로 듣고 싶은 다른 강의가 있다면 support@studiojin.dev 로 언제든 알려주세요!',
      follow: '더 많은 소식은 여기서 확인해 보세요',
    },
    en: {
      kicker: 'wrap-up',
      title: 'Operating notes and next moves',
      subtitle: 'Congratulations!\nYour blog now has a smart automation loop for comment moderation.',
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
