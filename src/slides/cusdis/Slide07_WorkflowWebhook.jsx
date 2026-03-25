import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CusdisSlide, MediaCard } from './CusdisShared';

export default function Slide07_WorkflowWebhook() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'n8n workflow · 1 / 6',
      title: 'n8n 워크플로 만들기',
      subtitle: 'Webhook 노드 — 워크플로의 첫 번째 노드.',
      captions: {
        create: '1. Workflow 생성 진입',
        node: '2. Webhook 노드 추가',
        detail: '3. Webhook URL과 POST 설정',
      },
      notes: [
        'Webhook 은 어떤 이벤트가 발생 했을 때, 내가 제어하는 서버의 API 를 호출해서 알려주는 것이다. 즉, cusdis 댓글이 달리면 내 n8n 에 알려줘서 처리 할 수 있도록 하는 매커니즘이다.',
        'Webhook 노드는 test URL과 production URL이 다르다',
        'production URL은 workflow를 publish/activate 해야 실제로 등록된다',
        'Cusdis는 `POST`로 보내므로 method도 `POST`로 맞춘다',
      ],
    },
    en: {
      kicker: 'n8n workflow · 1 / 6',
      title: 'Webhook Node — the first node in the workflow',
      subtitle: 'Once the workflow exists, the first stable anchor is the webhook. That is what lets Cusdis and your test loop connect cleanly.',
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
