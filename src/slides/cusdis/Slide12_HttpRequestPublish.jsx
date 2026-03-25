import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CodeCard, CusdisSlide, MediaCard } from './CusdisShared';

const bodyExpression = '{"replyContent":"{{ $json.ai_reply }}"}';

export default function Slide12_HttpRequestPublish() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'n8n workflow · 6 / 6',
      title: 'HTTP Request 노드 + Publish — approve / reply 전송 및 배포',
      subtitle: '마지막 두 단계다. HTTP Request로 댓글 승인과 답글을 보내고, workflow를 Publish해야 production URL이 실제로 작동한다.',
      requestCaption: 'HTTP Request로 approve + reply 전송',
      publishCaption: 'Workflow publish / activate',
      bodyTitle: 'HTTP Request JSON body',
      notes: [
        'URL: `{{ $json.ai_api_link }}` (Code 노드에서 변환된 API 경로)',
        'Method: `POST`, Body Content Type: `JSON`, Send Body: On',
        '`replyContent` 키에 `{{ $json.ai_reply }}` 값을 넣는다',
        'workflow를 Publish / Activate 하지 않으면 production URL이 살아나지 않는다',
      ],
    },
    en: {
      kicker: 'n8n workflow · 6 / 6',
      title: 'HTTP Request Node + Publish — send approve / reply and deploy',
      subtitle: 'Two final steps. The HTTP Request node sends the approval and reply, then publishing the workflow brings the production URL online.',
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
