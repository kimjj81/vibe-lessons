import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CusdisSlide, MediaCard } from './CusdisShared';

export default function Slide06_CusdisWebhook() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'cusdis webhook',
      title: 'Cusdis Site settings에서 webhook 연결',
      subtitle: '새 댓글이 달릴 때마다 n8n이 이벤트를 받으려면 Cusdis webhook URL을 켜고 저장해야 한다.',
      checklistTitle: '체크리스트',
      caption: 'Cusdis Site settings의 Webhook 입력란',
      steps: [
        'Site settings에서 Webhook 스위치를 켠다',
        'n8n Webhook 노드의 URL을 붙여 넣는다',
        '테스트 중이면 test URL, 운영 전환 후에는 production URL로 바꾼다',
      ],
      notes: [
        'Cusdis webhook payload에는 `approve_link`가 포함된다',
        'Quick Approve / approval page 링크는 모바일 운영 흐름에 유용하다',
        'Cusdis의 approval page 링크는 31일이 지나면 만료된다',
      ],
    },
    en: {
      kicker: 'cusdis webhook',
      title: 'Connect the webhook in Cusdis Site settings',
      subtitle: 'For n8n to receive every new comment, you need to enable Cusdis webhooks and save the right endpoint URL.',
      checklistTitle: 'Checklist',
      caption: 'Webhook field inside Cusdis Site settings',
      steps: [
        'Turn on the Webhook switch in Site settings',
        'Paste the URL from the n8n Webhook node',
        'Use the test URL while debugging, then switch Cusdis to the production URL later',
      ],
      notes: [
        'The Cusdis webhook payload includes an `approve_link`',
        'Quick Approve / approval page links are great for lightweight mobile moderation',
        'Cusdis approval page links expire after 31 days',
      ],
    },
  };
  const t = copy[locale];

  return (
    <CusdisSlide
      slideNumber={6}
      kicker={t.kicker}
      title={t.title}
      subtitle={t.subtitle}
      sources={[
        { label: 'Cusdis home', href: 'https://cusdis.com/' },
        { label: 'Webhook changelog', href: 'https://blog.cusdis.com/changelog-v1.1.1/' },
        { label: 'Approval page changelog', href: 'https://blog.cusdis.com/changelog-v1.1.3/' },
      ]}
    >
      <div className="cusdis-asymmetric-layout">
        <MediaCard src={cusdisAssets.cusdisWebhook} alt={t.caption} title={t.caption} />
        <div className="cusdis-editorial-stack">
          <div className="cusdis-glass-card">
            <div className="cusdis-panel-label">{t.checklistTitle}</div>
            <ul className="cusdis-bullet-list">
              {t.steps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="cusdis-callout">
            <ul className="cusdis-bullet-list tight">
              {t.notes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CusdisSlide>
  );
}
