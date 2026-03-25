import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CusdisSlide, MediaCard } from './CusdisShared';

export default function Slide07_WorkflowWebhook() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'n8n workflow · 1 / 6',
      title: 'n8n 워크플로우 만들기',
      subtitle: '워크플로우의 마중물 역할을 하는 Webhook 노드입니다.\nn8n이 신호를 받을 준비를 하는 첫 번째 관문이죠!',
      captions: {
        create: '1. 새 워크플로우 만들기 클릭!',
        node: '2. Webhook 노드를 추가해 주세요.',
        detail: '3. Webhook URL과 POST 방식을 설정합니다.',
      },
      notes: [
        'Webhook은 외부(Cusdis)에서 이벤트가 생겼을 때, 우리 서버의 API를 호출해 소식을 전해주는 방식이에요. 댓글이 달리면 n8n이 바로 알 수 있게 해줍니다.',
        "Webhook 노드는 'Test'와 'Production' URL이 각각 다르니 설정 시 꼭 확인해 주세요!",
        "실제 운영 환경에 적용하려면 워크플로우를 반드시 'Activate(활성화)' 해야 Production URL이 동작합니다.",
        "Cusdis는 `POST` 방식으로 데이터를 보내니, 노드의 메서드도 똑같이 `POST`로 맞춰주세요.",
      ],
    },
    en: {
      kicker: 'n8n workflow · 1 / 6',
      title: 'Webhook Node — the first node in the workflow',
      subtitle: 'The Webhook node starts the entire automation flow.\nIt is the entry point that listens for incoming signals from Cusdis.',
      captions: {
        create: '1. Entry point for creating a workflow',
        node: '2. Adding the Webhook node',
        detail: '3. Webhook URL and POST settings',
      },
      notes: [
        'The Webhook node exposes different test and production URLs',
        'The test URL only stays active after `Listen for test event`, and the docs say it stays live for 120 seconds',
        'The production URL is registered only after the workflow is published / activated',
        'Cusdis sends a `POST`, so the method should also be `POST`',
      ],
    },
  };
  const t = copy[locale];

  return (
    <CusdisSlide
      slideNumber={7}
      kicker={t.kicker}
      title={t.title}
      subtitle={t.subtitle}
      sources={[
        { label: 'n8n Webhook docs', href: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/' },
        { label: 'Workflow development', href: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/workflow-development/' },
      ]}
    >
      <div className="cusdis-callout">
        <ul className="cusdis-bullet-list tight">
          {t.notes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="cusdis-image-wall">
        <MediaCard src={cusdisAssets.n8nHome} alt={t.captions.create} title={t.captions.create} />
        <MediaCard src={cusdisAssets.createWebhook} alt={t.captions.node} title={t.captions.node} />
        <MediaCard src={cusdisAssets.webhookDetail} alt={t.captions.detail} title={t.captions.detail} />
      </div>
    </CusdisSlide>
  );
}
