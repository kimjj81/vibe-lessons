import { useLocale } from '../../i18n/LocaleContext';
import { CusdisSlide } from './CusdisShared';

const flowNodes = [
  { key: 'cusdis', color: '#f97316' },
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
      subtitle: 'Cusdis가 보낸 댓글 이벤트를 n8n에서 받아 AI 판별 후 approve / reply API로 다시 보내는 흐름이다.',
      labels: {
        cusdis: 'Cusdis comment',
        webhook: 'n8n Webhook',
        gemini: 'Gemini 분석',
        code: 'Code 정리',
        if: 'If 정상 댓글',
        wait: 'Wait 랜덤 지연',
        request: 'HTTP Request approve/reply',
      },
      noteTitle: '핵심 데이터 포인트',
      noteItems: [
        '`approve_link`를 API 링크로 변환해 승인 요청에 재사용',
        'LLM은 `NORMAL` 또는 `SPAM`과 답글 초안을 JSON으로 반환',
        '바로 답하지 않고 기다린 뒤 reply를 보내 인간적인 템포를 만든다',
      ],
    },
    en: {
      kicker: 'system flow',
      title: 'End-to-end automation architecture',
      subtitle: 'Cusdis emits the comment event, n8n receives it, AI judges it, and the workflow calls back into Cusdis to approve and reply.',
      labels: {
        cusdis: 'Cusdis comment',
        webhook: 'n8n Webhook',
        gemini: 'Gemini analysis',
        code: 'Code cleanup',
        if: 'If normal',
        wait: 'Wait with random delay',
        request: 'HTTP Request approve/reply',
      },
      noteTitle: 'Key data points',
      noteItems: [
        'Convert `approve_link` into an API endpoint before calling it',
        'The LLM returns `NORMAL` or `SPAM` plus a reply draft as JSON',
        'Waiting before replying makes the behavior feel less robotic',
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
        <div className="cusdis-flow-row">
          {flowNodes.map((node, index) => (
            <div className="cusdis-flow-item" key={node.key}>
              <div className="cusdis-flow-node" style={{ borderColor: `${node.color}88`, boxShadow: `0 0 28px ${node.color}22` }}>
                {t.labels[node.key]}
              </div>
              {index < flowNodes.length - 1 ? <div className="cusdis-flow-arrow">→</div> : null}
            </div>
          ))}
        </div>
        <div className="cusdis-glass-card">
          <div className="cusdis-panel-label">{t.noteTitle}</div>
          <ul className="cusdis-bullet-list">
            {t.noteItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </CusdisSlide>
  );
}
