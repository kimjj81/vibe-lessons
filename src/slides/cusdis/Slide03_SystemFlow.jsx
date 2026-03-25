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
      subtitle: 'webhook 매커니즘과 n8n workflow를 이용한 자동화',
      description: '댓글이 달리면 Cusdis는 설정된 webhook api url 에 이벤트를 전달한다.\nn8n에 댓글 이벤트를 받을 webhook 을 설정하고 이어서 처리를 자동화하는 workflow를 완성하는 법을 제시한다.',
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
      noteTitle: '핵심 포인트',
      notes: [
        { text: '`approve_link`를 API 경로로 변환해 승인 요청에 재사용', tag: 'Gemini 노드' },
        { text: 'LLM은 `NORMAL` / `SPAM`과 답글 초안을 JSON으로 반환', tag: 'Gemini 노드' },
        { text: '바로 답하지 않고 기다린 뒤 reply를 보내 인간적인 템포를 만든다', tag: 'Wait 노드' },
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
