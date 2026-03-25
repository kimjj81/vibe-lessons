import { useLocale } from '../../i18n/LocaleContext';
import { CusdisSlide, StepList } from './CusdisShared';

export default function Slide04_N8nHosting() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'n8n hosting',
      title: 'n8n 클라우드 vs 셀프 호스팅',
      subtitle: 'n8n은 Cloud가 가장 편하고, self-host는 내가 제어한다. 빠르게 끝내고 싶으면 Cloud가 편하다. Docker Compose로 직접 운영하면 webhook 공개 방식과 도메인 연결 등 설정 할게 많다.',
      cloudTitle: 'Cloud를 고르면',
      cloudItems: [
        '도메인/HTTPS 고민이 크게 줄어든다',
        '설치보다 워크플로 작성에 집중할 수 있다',
        '외부 webhook 연동이 더 단순하다',
      ],
      selfHostTitle: '직접 설치하면 Docker compose',
      selfHostItems: [
        'n8n 공식 문서도 self-host에 Docker를 권장한다',
        '서버, 업그레이드, 보안, 저장소를 직접 챙겨야 한다',
        'Webhook을 위해 외부 HTTPS URL을 안정적으로 노출해야 한다',
      ],
      envTitle: 'self-host에서 바로 기억할 환경값',
      envBody: 'WEBHOOK_URL=https://your-domain.com/\nN8N_PROXY_HOPS=1',
      envNote: "'your-domain.com' 자리에 자신이 운영하는 n8n의 도메인을 입력한다.",
      note: '경험이 적다면 n8n Cloud를 먼저 쓰고, 운영 감각이 생긴 뒤 self-host로 옮겨도 늦지 않다.',
    },
    en: {
      kicker: 'n8n hosting',
      title: 'n8n Cloud vs self-host',
      subtitle: 'If speed matters most, n8n Cloud is the smoother path. Self-hosting with Docker Compose means you own the exposure, upgrades, and security decisions.',
      cloudTitle: 'If you choose Cloud',
      cloudItems: [
        'Domain and HTTPS setup mostly disappears',
        'You can focus on the workflow instead of installation',
        'External webhook integrations stay simpler',
      ],
      selfHostTitle: 'If you choose Docker Compose',
      selfHostItems: [
        'n8n officially recommends Docker for self-hosting',
        'You own upgrades, security, storage, and recovery',
        'You still need a stable public HTTPS URL for webhooks',
      ],
      envTitle: 'Environment values to remember',
      envBody: 'WEBHOOK_URL=https://your-domain.com/\nN8N_PROXY_HOPS=1',
      envNote: "Replace 'your-domain.com' with the domain your n8n instance is running on.",
      note: 'If you are new to operations, start on n8n Cloud and move to self-hosting after the workflow has proven itself.',
    },
  };
  const t = copy[locale];

  return (
    <CusdisSlide
      slideNumber={4}
      kicker={t.kicker}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="cusdis-stack">
        {/* Cloud vs Docker — VS 패널 */}
        <div className="cusdis-vs-layout">
          <div className="cusdis-vs-panel cusdis-vs-cloud">
            <div className="cusdis-panel-label">{t.cloudTitle}</div>
            <StepList items={t.cloudItems} />
          </div>
          <div className="cusdis-vs-divider">
            <div className="cusdis-vs-badge">VS</div>
          </div>
          <div className="cusdis-vs-panel cusdis-vs-docker">
            <div className="cusdis-panel-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {t.selfHostTitle}
              <a
                className="cusdis-source-link"
                href="https://docs.n8n.io/hosting/installation/docker/"
                rel="noopener noreferrer"
                style={{ fontWeight: 400 }}
                target="_blank"
              >
                Docker docs ↗
              </a>
            </div>
            <StepList items={t.selfHostItems} />
          </div>
        </div>

        {/* 환경변수 + 메모 */}
        <div className="cusdis-balanced-layout">
          <div className="cusdis-code-card">
            <div className="cusdis-code-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {t.envTitle}
              <a
                className="cusdis-source-link"
                href="https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url/"
                rel="noopener noreferrer"
                style={{ fontWeight: 400 }}
                target="_blank"
              >
                docs ↗
              </a>
            </div>
            <pre>{t.envBody}</pre>
            <p className="cusdis-inline-note">{t.envNote}</p>
          </div>
          <div className="cusdis-callout">
            <p>{t.note}</p>
          </div>
        </div>
      </div>
    </CusdisSlide>
  );
}
