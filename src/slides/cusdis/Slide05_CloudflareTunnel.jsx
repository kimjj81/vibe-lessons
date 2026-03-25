import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CusdisSlide, MediaCard, StepList } from './CusdisShared';

export default function Slide05_CloudflareTunnel() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'public https',
      title: 'Self-hosted n8n에 공개 HTTPS 도메인 만들기',
      subtitle: 'Cusdis webhook은 공개 HTTPS URL이 필요하다. n8n이 내 PC나 사설 서버에 있다면 외부에서 접근 가능한 URL을 만들어야 한다.',
      skipLabel: '이 슬라이드를 건너뛰어도 됩니다',
      skipBody: 'n8n Cloud를 사용하거나, 이미 공개 HTTPS 도메인이 있는 서버에서 n8n을 운영 중이라면 이 설정은 필요 없다. 다음 슬라이드로 넘어가면 된다.',
      whyTitle: '왜 공개 URL이 필요한가',
      whyBody: '내 PC나 사내 서버는 보통 인터넷에서 직접 접근할 수 없는 사설 네트워크에 있다. Cusdis 서버가 n8n에 webhook을 보내려면 인터넷에서 접근 가능한 공개 HTTPS 주소가 필요하다.',
      cloudflareTitle: '왜 Cloudflare Tunnel인가',
      cloudflareBody: '도메인을 이미 Cloudflare로 관리하고 있다면 별도 서버 없이 Tunnel 하나로 내부 n8n을 안전하게 외부에 노출할 수 있다. ngrok과 달리 URL이 고정되고 무료다.',
      stepsTitle: '설정 방법',
      steps: [
        'Cloudflare Networks > Connectors에서 터널 상태를 확인',
        'Route를 연결해서 외부 도메인과 n8n 인스턴스를 매핑',
        'Webhook이 HTTPS로 들어올 수 있게 도메인 공개 경로를 안정화',
      ],
      captions: ['터널 상태와 Routes 위치', '터널 세부 설정 화면', '호스트네임/경로 매핑 확인'],
    },
    en: {
      kicker: 'public https',
      title: 'Giving self-hosted n8n a public HTTPS domain',
      subtitle: 'Cusdis webhooks need a reachable HTTPS URL. If your n8n runs on a home PC or private server, you need to expose it to the internet.',
      skipLabel: 'You can skip this slide',
      skipBody: 'If you use n8n Cloud, or your n8n is already running on a public server with HTTPS, skip this page and move on.',
      whyTitle: 'Why a public URL is required',
      whyBody: 'Home PCs and internal servers are typically on a private network that the internet cannot reach directly. For Cusdis to deliver webhooks to your n8n instance, it needs a public HTTPS address.',
      cloudflareTitle: 'Why Cloudflare Tunnel',
      cloudflareBody: 'If your domain is already managed by Cloudflare, one Tunnel is all you need to expose an internal service safely — no extra server required. Unlike ngrok, the URL is stable and free.',
      stepsTitle: 'Setup steps',
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
    >
      <div className="cusdis-stack">
        {/* Skip 배너 */}
        <div className="cusdis-skip-banner">
          <strong>{t.skipLabel}:</strong> {t.skipBody}
        </div>

        <div className="cusdis-balanced-layout">
          {/* 왜 필요한가 + 왜 Cloudflare인가 */}
          <div className="cusdis-editorial-stack">
            <div className="cusdis-callout">
              <div className="cusdis-panel-label">{t.whyTitle}</div>
              <p>{t.whyBody}</p>
            </div>
            <div className="cusdis-callout">
              <div className="cusdis-panel-label">{t.cloudflareTitle}</div>
              <p>{t.cloudflareBody}</p>
            </div>
          </div>

          {/* 설정 단계 */}
          <div>
            <div className="cusdis-panel-label">{t.stepsTitle}</div>
            <StepList items={t.steps} />
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <a
                className="cusdis-source-link"
                href="https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Webhook URL config ↗
              </a>
              <a
                className="cusdis-source-link"
                href="https://docs.n8n.io/hosting/securing/set-up-ssl/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Set up SSL ↗
              </a>
            </div>
          </div>
        </div>

        {/* 스크린샷 */}
        <div className="cusdis-gallery-band">
          <MediaCard src={cusdisAssets.cloudflare1} alt={t.captions[0]} title={t.captions[0]} />
          <MediaCard src={cusdisAssets.cloudflare2} alt={t.captions[1]} title={t.captions[1]} />
          <MediaCard src={cusdisAssets.cloudflare3} alt={t.captions[2]} title={t.captions[2]} />
        </div>
      </div>
    </CusdisSlide>
  );
}
