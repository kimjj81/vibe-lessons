import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CodeCard, CusdisSlide, MediaCard } from './CusdisShared';

const bodyExpression = '{"replyContent":"{{ $json.ai_reply }}"}';

export default function Slide12_HttpRequestPublish() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'n8n workflow · 6 / 6',
      title: 'HTTP Request 노드 & 최종 배포',
      subtitle: '이제 하이라이트입니다!\n준비된 데이터를 전송해 댓글을 승인하고 답글까지 게시해 봅시다.\n마지막으로 워크플로우를 실제 운영 환경에 배포하는 것도 잊지 마세요.',
      requestCaption: 'HTTP Request로 승인+답글 전송하기',
      publishCaption: '워크플로우 운영(Publish) 시작!',
      bodyTitle: '전송할 데이터 형식 (JSON Body)',
      notes: [
        'URL: 앞선 Code 노드에서 정제한 전용 API 경로(`ai_api_link`)를 사용합니다.',
        "설정 값: `POST` / `JSON` / `Send Body ON`으로 맞춰주시면 됩니다.",
        '`replyContent` 라는 이름으로 AI가 만든 답글 내용을 실어 보냅니다.',
        "마지막 확인! 워크플로우를 'Publish' 하지 않으면 실제 댓글에 반응하지 않으니 꼭 켜주세요.",
      ],
    },
    en: {
      kicker: 'n8n workflow · 6 / 6',
      title: 'HTTP Request Node + Publish — send approve / reply and deploy',
      subtitle: 'The final payload is ready to go!\nSend the approval and reply, then publish your workflow for live operation.',
      requestCaption: 'Approve + reply via HTTP Request',
      publishCaption: 'Publish / activate the workflow',
      bodyTitle: 'HTTP Request JSON body',
      notes: [
        'URL: `{{ $json.ai_api_link }}` (the API path transformed by the Code node)',
        'Method: `POST`, Body Content Type: `JSON`, Send Body: On',
        'Set the `replyContent` key to `{{ $json.ai_reply }}`',
        'The production URL will not go live until you Publish / Activate the workflow',
      ],
    },
  };
  const t = copy[locale];

  return (
    <CusdisSlide
      slideNumber={12}
      kicker={t.kicker}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="cusdis-asymmetric-layout">
        <div className="cusdis-editorial-stack">
          <CodeCard title={t.bodyTitle} code={bodyExpression} />
          <div className="cusdis-callout">
            <ul className="cusdis-bullet-list tight">
              {t.notes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cusdis-editorial-stack">
          <MediaCard src={cusdisAssets.requestApprove} alt={t.requestCaption} title={t.requestCaption} />
          <MediaCard src={cusdisAssets.publishWorkflow} alt={t.publishCaption} title={t.publishCaption} />
        </div>
      </div>
    </CusdisSlide>
  );
}
