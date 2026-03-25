import { useLocale } from '../../i18n/LocaleContext';
import { CusdisSlide } from './CusdisShared';

export default function Slide04_N8nHosting() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'n8n hosting',
      title: 'n8n은 Cloud가 가장 편하고, self-host는 내가 제어한다',
      subtitle: '빠르게 끝내고 싶으면 Cloud가 편하다. 다만 Docker Compose로 직접 운영하면 webhook 공개 방식과 운영 노하우를 같이 챙겨야 한다.',
      cloudTitle: 'Cloud를 고르면',
      cloudItems: [
        '도메인/HTTPS 고민이 크게 줄어든다',
        '설치보다 워크플로 작성에 집중할 수 있다',
        '외부 webhook 연동이 더 단순하다',
      ],
      selfHostTitle: 'Docker Compose로 올리면',
      selfHostItems: [
        'n8n 공식 문서도 self-host에 Docker를 권장한다',
        '서버, 업그레이드, 보안, 저장소를 직접 챙겨야 한다',
        'Webhook을 위해 외부 HTTPS URL을 안정적으로 노출해야 한다',
      ],
      envTitle: 'self-host에서 바로 기억할 환경값',
      envBody: 'WEBHOOK_URL=https://n8n.example.com/\nN8N_PROXY_HOPS=1',
      note: '경험이 적다면 n8n Cloud를 먼저 쓰고, 운영 감각이 생긴 뒤 self-host로 옮겨도 늦지 않다.',
    },
    en: {
      kicker: 'n8n hosting',
      title: 'n8n Cloud is easier, self-host gives you control',
      subtitle: 'If speed matters most, n8n Cloud is the smoother path. If you self-host with Docker Compose, you also take on exposure, upgrades, and security decisions.',
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
      envBody: 'WEBHOOK_URL=https://n8n.example.com/\nN8N_PROXY_HOPS=1',
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
      sources={[
        { label: 'n8n Docker docs', href: 'https://docs.n8n.io/hosting/installation/docker/' },
        { label: 'Webhook URL config', href: 'https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url/' },
      ]}
    >
      <div className="cusdis-grid-2">
        <div className="cusdis-glass-card">
          <div className="cusdis-panel-label">{t.cloudTitle}</div>
          <ul className="cusdis-bullet-list">
            {t.cloudItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="cusdis-glass-card">
          <div className="cusdis-panel-label">{t.selfHostTitle}</div>
          <ul className="cusdis-bullet-list">
            {t.selfHostItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="cusdis-grid-2">
        <div className="cusdis-code-card">
          <div className="cusdis-code-title">{t.envTitle}</div>
          <pre>{t.envBody}</pre>
        </div>
        <div className="cusdis-callout">
          <p>{t.note}</p>
        </div>
      </div>
    </CusdisSlide>
  );
}
