import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CusdisSlide, MediaCard } from './CusdisShared';

export default function Slide05_CloudflareTunnel() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'cloudflare tunnel',
      title: 'Cloudflare Tunnel로 self-hosted n8n 노출하기',
      subtitle: '도메인이 이미 있다면 ngrok 대신 Cloudflare Tunnel이 운영상 더 편한 경우가 많다.',
      steps: [
        'Cloudflare Networks > Connectors에서 터널 상태를 확인',
        'Route를 연결해서 외부 도메인과 n8n 인스턴스를 매핑',
        'Webhook이 HTTPS로 들어올 수 있게 도메인 공개 경로를 안정화',
      ],
      captions: ['터널 상태와 Routes 위치', '터널 세부 설정 화면', '호스트네임/경로 매핑 확인'],
    },
    en: {
      kicker: 'cloudflare tunnel',
      title: 'Expose self-hosted n8n with Cloudflare Tunnel',
      subtitle: 'If you already own a domain, Cloudflare Tunnel can feel more stable than a temporary tunnel like ngrok.',
      steps: [
        'Check tunnel status under Cloudflare Networks > Connectors',
        'Attach a route so your domain resolves to the n8n instance',
        'Stabilize the public HTTPS path so webhooks can reach it reliably',
      ],
      captions: ['Tunnel list and routes', 'Tunnel detail screen', 'Hostname / route mapping'],
    },
  };
  const t = copy[locale];

  return (
    <CusdisSlide
      slideNumber={5}
      kicker={t.kicker}
      title={t.title}
      subtitle={t.subtitle}
      sources={[
        { label: 'Webhook URL config', href: 'https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url/' },
        { label: 'Set up SSL', href: 'https://docs.n8n.io/hosting/securing/set-up-ssl/' },
      ]}
    >
      <div className="cusdis-grid-2">
        <div className="cusdis-glass-card">
          <div className="cusdis-panel-label">Cloudflare</div>
          <ul className="cusdis-bullet-list">
            {t.steps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="cusdis-image-grid-3">
          <MediaCard src={cusdisAssets.cloudflare1} alt={t.captions[0]} caption={t.captions[0]} />
          <MediaCard src={cusdisAssets.cloudflare2} alt={t.captions[1]} caption={t.captions[1]} />
          <MediaCard src={cusdisAssets.cloudflare3} alt={t.captions[2]} caption={t.captions[2]} />
        </div>
      </div>
    </CusdisSlide>
  );
}
