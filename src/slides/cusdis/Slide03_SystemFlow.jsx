import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CusdisSlide, MediaCard } from './CusdisShared';

const workflowNodes = [
  { key: 'webhook', color: '#fb7185' },
  { key: 'gemini', color: '#38bdf8' },
  { key: 'code', color: '#67e8f9' },
  { key: 'if', color: '#22c55e' },
  { key: 'wait', color: '#f59e0b' },
  { key: 'request', color: '#a78bfa' },
];

export default function Slide03_SystemFlow() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'system flow',
      title: '전체 자동화 아키텍처',
      subtitle: '전체적인 흐름을 먼저 파악해 볼까요?\nWebhook과 n8n, 그리고 AI가 어떻게 맞물려 돌아가는지 확인해 보세요.',
      description: '댓글이 달리면 Cusdis가 설정된 Webhook URL로 신호를 보냅니다. n8n은 이 신호를 받아 AI로 분석하고, 적절한 처리를 마친 뒤 다시 Cusdis로 결과를 전달하는 구조예요. 이 강력한 자동화 로직을 하나씩 완성해 봅시다!',
      cusdisLabel: 'Cusdis\n댓글',
      workflowLabel: 'n8n Workflow',
      labels: {
        webhook: 'Webhook\n노드',
        gemini: 'Gemini\n분석',
        code: 'Code\n정리',
        if: 'If\n판별',
        wait: 'Wait\n지연',
        request: 'HTTP\nRequest',
      },
      noteTitle: '이것만은 꼭 기억하세요!',
      notes: [
        { text: '`approve_link`를 API 경로로 변환해 승인 요청에 재사용합니다.', tag: 'Gemini 노드' },
        { text: 'LLM은 `NORMAL`/`SPAM` 여부와 답글 초안을 JSON으로 알려줍니다.', tag: 'Gemini 노드' },
        { text: '바로 답하지 않고 조금 기다렸다 보내야 기계 같지 않고 자연스러워요.', tag: 'Wait 노드' },
      ],
    },
    en: {
      kicker: 'system flow',
      title: 'End-to-end automation architecture',
      subtitle: 'Automation using webhook mechanisms and n8n workflows',
      description: 'When a comment is posted, Cusdis sends an event to the configured webhook API URL.\nWe show how to set up a webhook in n8n to receive these events and build a workflow for automated processing.',
      cusdisLabel: 'Cusdis\ncomment',
      workflowLabel: 'n8n Workflow',
      labels: {
        webhook: 'Webhook\nnode',
        gemini: 'Gemini\nanalysis',
        code: 'Code\ncleanup',
        if: 'If\nbranch',
        wait: 'Wait\ndelay',
        request: 'HTTP\nRequest',
      },
      noteTitle: 'Key points',
      notes: [
        { text: 'Convert `approve_link` into an API endpoint before calling it', tag: 'Gemini node' },
        { text: 'The LLM returns `NORMAL` or `SPAM` plus a reply draft as JSON', tag: 'Gemini node' },
        { text: 'Waiting before replying makes the behavior feel less robotic', tag: 'Wait node' },
      ],
    },
  };
  const t = copy[locale];

  return (
    <CusdisSlide
      slideNumber={3}
      kicker={t.kicker}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="cusdis-stack">

        {/* Flow diagram */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginTop: '12px' }}>
          {/* Cusdis side */}
          <div
            className="cusdis-flow-node"
            style={{
              borderColor: '#f97316aa',
              boxShadow: '0 0 28px #f9731622',
              whiteSpace: 'pre-line',
              textAlign: 'center',
              minWidth: 80,
              minHeight: 56,
              fontSize: '0.82rem',
            }}
          >
            {t.cusdisLabel}
          </div>
          <div className="cusdis-flow-arrow">→</div>
          {/* n8n workflow section */}
          <div className="cusdis-flow-section" style={{ flex: 1, minWidth: 0 }}>
            <span className="cusdis-flow-section-label">{t.workflowLabel}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              {workflowNodes.map((node, index) => (
                <div key={node.key} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div
                    className="cusdis-flow-node"
                    style={{
                      borderColor: `${node.color}99`,
                      boxShadow: `0 0 20px ${node.color}1a`,
                      whiteSpace: 'pre-line',
                      textAlign: 'center',
                      minWidth: 72,
                      minHeight: 52,
                      fontSize: '0.78rem',
                    }}
                  >
                    {t.labels[node.key]}
                  </div>
                  {index < workflowNodes.length - 1 ? (
                    <div className="cusdis-flow-arrow" style={{ fontSize: '0.9rem' }}>→</div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <MediaCard
            src={cusdisAssets.workflowOverview}
            alt={locale === 'ko' ? '완성된 워크플로' : 'Complete workflow'}
            title={locale === 'ko' ? '완성된 워크플로' : 'Complete workflow'}
          />
        </div>

        <p className="cusdis-slide-subtitle" style={{ maxWidth: 'none', textAlign: 'left', marginTop: '24px' }}>
          {t.description}
        </p>

        {/* Notes with node tags */}
        <div className="cusdis-callout">
          <div className="cusdis-panel-label">{t.noteTitle}</div>
          <ul className="cusdis-bullet-list">
            {t.notes.map((note) => (
              <li key={note.text}>
                {note.text}
                <span className="cusdis-note-tag">{note.tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CusdisSlide>
  );
}
