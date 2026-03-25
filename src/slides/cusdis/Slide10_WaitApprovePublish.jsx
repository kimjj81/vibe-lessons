import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CodeCard, CusdisSlide, MediaCard } from './CusdisShared';

const waitExpression = '{{ Math.floor(Math.random() * (60 - 10 + 1)) + 10 }}';
const bodyExpression = '{"replyContent":"{{ $json.ai_reply }}"}';

export default function Slide10_WaitApprovePublish() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'wait + request + publish',
      title: '기다렸다가 approve / reply를 보내고, 마지막에 publish 한다',
      subtitle: '바로 답글을 달면 너무 기계적으로 보일 수 있어서 약간의 랜덤 지연을 준 뒤 HTTP Request로 승인과 답글을 처리한다.',
      waitCaption: 'Wait 노드에서 랜덤 지연 설정',
      requestCaption: 'HTTP Request로 approve + reply 전송',
      publishCaption: 'Workflow publish / activate',
      waitTitle: 'Wait Amount expression',
      bodyTitle: 'HTTP Request JSON body',
      notes: [
        '10분에서 1시간 사이 랜덤 지연으로 반응 타이밍을 자연스럽게 만든다',
        'HTTP Request는 `POST`, `Send Body = On`, `JSON` 방식으로 보낸다',
        'workflow를 publish 하지 않으면 production URL이 실제로 동작하지 않는다',
      ],
    },
    en: {
      kicker: 'wait + request + publish',
      title: 'Wait, then approve / reply, and finally publish the workflow',
      subtitle: 'Replying instantly can feel robotic, so the workflow waits for a random interval before it sends the approval and reply request.',
      waitCaption: 'Random delay in the Wait node',
      requestCaption: 'Approve + reply via HTTP Request',
      publishCaption: 'Publish / activate the workflow',
      waitTitle: 'Wait Amount expression',
      bodyTitle: 'HTTP Request JSON body',
      notes: [
        'Use a random delay between 10 minutes and 1 hour so the timing feels human',
        'Send the HTTP Request as `POST` with the JSON body enabled',
        'If you never publish the workflow, the production URL will never go live',
      ],
    },
  };
  const t = copy[locale];

  return (
    <CusdisSlide
      slideNumber={10}
      kicker={t.kicker}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="cusdis-asymmetric-layout">
        <div className="cusdis-editorial-stack">
          <div className="cusdis-callout">
            <ul className="cusdis-bullet-list tight">
              {t.notes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <CodeCard title={t.waitTitle} code={waitExpression} />
          <CodeCard title={t.bodyTitle} code={bodyExpression} />
        </div>
        <div className="cusdis-editorial-stack">
          <MediaCard src={cusdisAssets.waitNode} alt={t.waitCaption} title={t.waitCaption} />
          <MediaCard src={cusdisAssets.requestApprove} alt={t.requestCaption} title={t.requestCaption} />
          <MediaCard src={cusdisAssets.publishWorkflow} alt={t.publishCaption} title={t.publishCaption} />
        </div>
      </div>
    </CusdisSlide>
  );
}
