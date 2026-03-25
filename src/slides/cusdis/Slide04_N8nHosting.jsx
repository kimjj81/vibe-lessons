import { useLocale } from '../../i18n/LocaleContext';
import { CusdisSlide, StepList } from './CusdisShared';

export default function Slide04_N8nHosting() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'n8n hosting',
      title: 'n8n 클라우드 vs 셀프 호스팅',
      subtitle: 'n8n을 어디에 설치할지 고민되시나요?\n처음에는 Cloud가 가장 편하고, 나중에 숙련되면 직접 운영하는 셀프 호스팅(Docker)으로 넘어가시는 걸 추천드려요.',
      cloudTitle: '빠르고 편한 n8n Cloud',
      cloudItems: [
        '도메인이나 보안(HTTPS) 설정을 고민할 필요가 없어요.',
        '복잡한 설치 대신 워크플로우를 만드는 데만 집중할 수 있습니다.',
        '외부 서비스와의 연결이 매우 단순하고 깔끔합니다.',
      ],
      selfHostTitle: '내가 직접 관리하는 Docker 실습',
      selfHostItems: [
        'n8n이 공식적으로 권장하는 운영 방식이라 믿음직해요!',
        '업그레이드부터 데이터 보안까지 모든 제어권을 갖게 됩니다.',
        '외부에서 접속 가능하도록 HTTPS URL을 직접 만들어줘야 합니다.',
      ],
      envTitle: '셀프 호스팅 시 꼭 챙겨야 할 환경 변수',
      envBody: 'WEBHOOK_URL=https://your-domain.com/\nN8N_PROXY_HOPS=1',
      envNote: "'your-domain.com' 자리에 여러분의 n8n 도메인을 넣어주세요.",
      note: '처음에는 n8n Cloud로 가볍게 시작해서 감을 익히고, 나중에 자신감이 붙었을 때 셀프 호스팅으로 옮기셔도 충분합니다!',
    },
    en: {
      kicker: 'n8n hosting',
      title: 'n8n Cloud vs self-host',
      subtitle: 'If speed matters most, n8n Cloud is the smoother path.\nSelf-hosting with Docker Compose means you own the exposure, upgrades, and security decisions.',
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
