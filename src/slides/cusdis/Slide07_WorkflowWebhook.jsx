import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CusdisSlide, MediaCard } from './CusdisShared';

export default function Slide07_WorkflowWebhook() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'workflow + webhook',
      title: '워크플로 만들고 Webhook 노드부터 잡기',
      subtitle: '워크플로를 만든 다음 가장 먼저 webhook을 고정해야 Cusdis 쪽 연결과 테스트 루프가 안정적으로 돌아간다.',
      captions: {
        create: 'Workflow 생성 진입',
        overview: '완성된 노드 흐름 예시',
        node: 'Webhook 노드 추가',
        detail: 'Webhook URL과 POST 설정',
      },
      notes: [
        'Webhook 노드는 test URL과 production URL이 다르다',
        '`Listen for test event`를 눌러야 test URL이 살아 있고, 공식 문서 기준 120초 동안 유지된다',
        'production URL은 workflow를 publish/activate 해야 실제로 등록된다',
        'Cusdis는 `POST`로 보내므로 method도 `POST`로 맞춘다',
      ],
    },
    en: {
      kicker: 'workflow + webhook',
      title: 'Create the workflow, then lock in the Webhook node',
      subtitle: 'Once the workflow exists, the first stable anchor is the webhook. That is what lets Cusdis and your test loop connect cleanly.',
      captions: {
        create: 'Entry point for creating a workflow',
        overview: 'Finished node chain overview',
        node: 'Adding the Webhook node',
        detail: 'Webhook URL and POST settings',
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
      <div className="cusdis-image-grid-2">
        <MediaCard src={cusdisAssets.n8nHome} alt={t.captions.create} caption={t.captions.create} />
        <MediaCard src={cusdisAssets.workflowOverview} alt={t.captions.overview} caption={t.captions.overview} />
        <MediaCard src={cusdisAssets.createWebhook} alt={t.captions.node} caption={t.captions.node} />
        <MediaCard src={cusdisAssets.webhookDetail} alt={t.captions.detail} caption={t.captions.detail} />
      </div>
      <div className="cusdis-callout">
        <ul className="cusdis-bullet-list tight">
          {t.notes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </CusdisSlide>
  );
}
