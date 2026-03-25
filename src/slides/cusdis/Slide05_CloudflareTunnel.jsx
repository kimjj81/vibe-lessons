import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CusdisSlide, MediaCard, StepList } from './CusdisShared';

export default function Slide05_CloudflareTunnel() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'public https',
      title: '셀프 호스팅 n8n에 도메인(공개 주소) 만들기',
      subtitle: "셀프 호스팅 n8n이 외부(Cusdis)의 신호를 받으려면 '공개 주소'가 필요합니다.\n터널링 기술을 이용해 안전하고 쉽게 만들어 볼까요?",
      skipLabel: '잠시만요! 이런 분들은 넘어가셔도 돼요',
      skipBody: 'n8n Cloud를 쓰시거나 이미 외부 주소가 있는 분들은 지금 바로 다음 단계로 고고!',
      whyTitle: '왜 공개 URL이 필요할까요?',
      whyBody: '여러분의 PC는 보통 사설 네트워크에 있어 외부에서 접근하기 어려워요. 특히 n8n은 보안과 원활한 통신을 위해 HTTPS가 사실상 필수입니다. Domain+HTTPS 설정을 가장 쉽고 확실하게 해결하는 방법 중 하나로 Cloudflare 사용을 강력 추천드려요!',
      cloudflareTitle: '왜 Cloudflare Tunnel 인가요?',
      cloudflareBody: '복잡한 서버 설정 없이도 내 PC의 n8n을 안전하게 공개할 수 있는 가장 세련된 방법이에요. 게다가 무료이면서 주소도 고정되니 정말 좋죠!',
      stepsTitle: '이렇게 설정해 보세요',
      steps: [
        'Cloudflare Networks > Connectors에서 터널을 생성합니다. "create tunnel"을 누르세요.',
        '도메인과 내 n8n 주소를 서로 매핑(Route)해 줍니다.\n도커에서 n8n을 실행했다면, n8n이 사용하는 포트를 입력해 주세요.',
        'Webhook 신호가 무사히 도착할 수 있도록 HTTPS 도메인 주소를 설정합니다.\nsubdomain 에 n8n을 입력하세요. 예를들어 내 도메인이 yourdomain.com 라면, n8n.yourdomain.com 로 설정이 됩니다.\nService type 은 http 로 설정하고, URL 에 n8n이 실행되고 있는 주소를 입력해 주세요.\n도커에서 n8n을 실행했고, PC의 ip 주소가 192.168.219.101, docker 의 포트가 5678 이라면 URL에 192.168.219.101:5678 로 입력하면 됩니다.',
      ],
      captions: ['터널 만들기', '터널 설정 룰 추가하기', '호스트네임 매핑 하기'],
    },
    en: {
      kicker: 'public https',
      title: 'Giving self-hosted n8n a public HTTPS domain',
      subtitle: 'Cusdis webhooks need a reachable HTTPS URL.\nExpose your n8n instance safely using modern tunneling technology.',
      skipLabel: 'You can skip this slide',
      skipBody: 'If you use n8n Cloud, or your n8n is already running on a public server with HTTPS, skip this page and move on.',
      whyTitle: 'Why a public URL is required',
      whyBody: 'Self-hosted instances are usually hidden behind local networks. Since n8n practically requires HTTPS for security and reliable communication, setting up a Domain+HTTPS path is critical. Using Cloudflare is one of the easiest and most reliable ways to achieve this.',
      cloudflareTitle: 'Why Cloudflare Tunnel',
      cloudflareBody: 'If your domain is already managed by Cloudflare, one Tunnel is all you need to expose an internal service safely — no extra server required. Unlike ngrok, the URL is stable and free.',
      stepsTitle: 'Setup steps',
      steps: [
        'Go to Cloudflare Networks > Connectors and click "Create a tunnel".',
        'Map your domain to your internal n8n address (Route).\nIf you are running n8n via Docker, specify the port it uses.',
        'Set up the HTTPS domain so webhooks land safely.\nEnter "n8n" in the subdomain field (e.g., n8n.yourdomain.com).\nSet Service Type to http and enter the address where n8n is running.\n(e.g., if your IP is 192.168.219.101 and the Docker port is 5678, enter 192.168.219.101:5678 in the URL field.)',
      ],
      captions: ['Creating a tunnel', 'Adding tunnel configuration rules', 'Mapping the hostname'],
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
