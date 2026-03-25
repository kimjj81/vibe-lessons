import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CusdisSlide, MediaCard } from './CusdisShared';

export default function Slide06_CusdisWebhook() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'cusdis webhook',
      title: 'Cusdis에서 n8n 연결하기',
      subtitle: "이제 Cusdis와 n8n을 연결할 차례입니다!\n댓글이 달렸을 때 n8n이 바로 알 수 있도록 '연락처(Webhook URL)'를 알려주러 가봅시다.",
      checklistTitle: '이것만 하면 끝!',
      caption: 'Cusdis 사이트 설정의 Webhook 입력창',
      steps: [
        "Site settings에서 Webhook 스위치를 'ON' 하세요!",
        'n8n에서 복사한 Webhook URL을 빈칸에 쏙 넣어줍니다.',
        '테스트 중엔 Test URL을, 정말로 운영하실 땐 Production URL로 바꾸는 것 잊지 마세요!',
      ],
      notes: [
        'Webhook 데이터에는 승인을 위한 전용 링크(`approve_link`)가 들어있어요.\n이 링크를 n8n 워크플로우에서 사용하여, 승인에 사용 할 것입니다.',
        '주의! Cusdis 승인 페이지 링크는 31일 후 만료되니 참고하세요.',
      ],
    },
    en: {
      kicker: 'cusdis webhook',
      title: 'Connect the webhook in Cusdis Site settings',
      subtitle: "Connect your comment system to your automation engine.\nLet's set up the webhook URL so n8n knows when a new comment arrives.",
      checklistTitle: 'Checklist',
      caption: 'Webhook field inside Cusdis Site settings',
      steps: [
        'Turn on the Webhook switch in Site settings',
        'Paste the URL from the n8n Webhook node',
        'Use the test URL while debugging, then switch Cusdis to the production URL later',
      ],
      notes: [
        'The Cusdis webhook payload includes an `approve_link`.\nWe will use this link in the n8n workflow to handle approvals.',
        'Note: Cusdis approval page links expire after 31 days.',
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
