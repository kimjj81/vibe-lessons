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
      title: '대기, 승인, 그리고 최종 배포까지!',
      subtitle: '댓글에 바로 답글을 달면 너무 기계처럼 보일 수 있어요.\n약간의 랜덤 지연을 준 뒤, HTTP Request로 승인과 답글을 한꺼번에 처리해 봅시다.',
      waitCaption: 'Wait 노드에서 랜덤 지연 설정하기',
      requestCaption: 'HTTP Request로 승인+답글 보내기',
      publishCaption: '워크플로우 운영(Publish) 시작!',
      waitTitle: '랜덤 지연을 위한 수식 (Expression)',
      bodyTitle: '전송할 데이터 형식 (JSON Body)',
      notes: [
        '10분에서 1시간 사이 랜덤 지연으로 반응 타이밍을 자연스럽게 만들어요.',
        "HTTP Request는 `POST`, `Send Body = On`, `JSON` 방식으로 설정해 주세요.",
        "마지막 단계! 워크플로우를 'Publish' 해야 실제 운영 환경의 URL이 동작합니다.",
      ],
    },
    en: {
      kicker: 'wait + request + publish',
      title: 'Wait, then approve / reply, and finally publish the workflow',
      subtitle: 'Replying instantly can feel robotic.\nThe workflow waits for a random interval before it sends the approval and reply request.',
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
