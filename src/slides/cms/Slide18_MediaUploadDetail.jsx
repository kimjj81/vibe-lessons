import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide18_MediaUploadDetail() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '대용량 업로드는 왜 분리하는가',
      subtitle: 'Presigned URL 패턴을 조금 더 자세히 보면',
      intro: '작은 텍스트 요청은 애플리케이션 서버가 직접 처리해도 부담이 크지 않습니다. 하지만 동영상 같은 큰 파일을 웹서버가 직접 받기 시작하면 네트워크 대역폭, 동시 연결, 임시 저장 공간이 모두 웹서버에 몰리면서 연쇄적인 장애로 이어질 수 있습니다.',
      compare: [
        {
          title: '작은 텍스트 요청',
          color: '#22c55e',
          points: [
            '본문 길이가 상대적으로 짧고 처리 시간이 짧습니다.',
            '웹서버가 직접 받아도 CPU·메모리·네트워크 부담이 제한적입니다.',
          ],
        },
        {
          title: '큰 미디어 업로드',
          color: '#f59e0b',
          points: [
            '파일이 커질수록 업로드 시간이 길어지고, 연결이 오래 점유됩니다.',
            '웹서버가 직접 받으면 다른 요청 처리까지 느려질 수 있어 별도 경로로 분리하는 편이 안전합니다.',
          ],
        },
      ],
      flowTitle: '권장 구조: Browser → CloudFront → S3',
      flowSteps: [
        'Browser → POST /api/media/presign',
        'API → 짧은 수명의 업로드 권한과 key 반환',
        'Browser(JS) → CloudFront 업로드 엔드포인트로 직접 PUT/POST',
        'CloudFront → S3 origin으로 전달',
        'Browser → POST /api/media/complete',
        'API → MEDIA row 생성 + 메타데이터 기록',
      ],
      asyncTitle: '중요한 구현 포인트',
      asyncDesc: '여기서 "Browser → S3에 직접 PUT"은 HTML form submit으로 페이지 전체를 넘기는 방식이 아니라, 브라우저의 JavaScript 코드가 fetch/XHR로 비동기 업로드를 수행한다는 뜻입니다. 그래서 진행률 표시, 실패 재시도, 업로드 완료 후 메타데이터 등록을 분리해서 처리할 수 있습니다.',
    },
    en: {
      title: 'Why large uploads are separated',
      subtitle: 'A closer look at the Presigned URL pattern',
      intro: 'Small text requests are usually fine for the application server to handle directly. Large files such as video are different. If the web server receives them directly, bandwidth, concurrent connections, and temporary storage pressure can all pile onto the app tier and trigger cascading failures.',
      compare: [
        {
          title: 'Small text requests',
          color: '#22c55e',
          points: [
            'Payloads are relatively small and processing time is short.',
            'Even when the app server handles them directly, CPU, memory, and network cost stays limited.',
          ],
        },
        {
          title: 'Large media uploads',
          color: '#f59e0b',
          points: [
            'As files grow, upload time grows and connections stay occupied longer.',
            'If the web server receives them directly, other requests can slow down too, so a separate path is usually safer.',
          ],
        },
      ],
      flowTitle: 'Recommended path: Browser → CloudFront → S3',
      flowSteps: [
        'Browser → POST /api/media/presign',
        'API → returns short-lived upload permission and key',
        'Browser(JS) → direct PUT/POST to the CloudFront upload endpoint',
        'CloudFront → forwards to the S3 origin',
        'Browser → POST /api/media/complete',
        'API → creates MEDIA row + stores metadata',
      ],
      asyncTitle: 'Important implementation point',
      asyncDesc: 'Here, "Browser → direct PUT to S3" does not mean a full-page HTML form submit. It means JavaScript in the browser performs an asynchronous upload with fetch/XHR. That makes it possible to show upload progress, retry failures, and register metadata after the file upload finishes.',
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={19}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }} data-prevent-swipe="" data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '12px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '18px', fontSize: '1rem' }}>
          {t.subtitle}
        </p>
        <p style={{ color: '#f0f9ff', fontSize: '0.88rem', lineHeight: 1.6, textAlign: 'center', marginBottom: '24px', maxWidth: '920px', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.intro}
        </p>

        <div className="cms-split-grid" style={{ marginBottom: '22px' }}>
          <div className="card" style={{ borderColor: 'rgba(125, 211, 252, 0.18)', padding: '18px 20px' }}>
            <div style={{ display: 'grid', gap: '14px' }}>
              {t.compare.map((item) => (
                <div key={item.title} style={{ padding: '14px 16px', borderRadius: '14px', background: 'rgba(2, 6, 23, 0.42)', border: `1px solid ${item.color}44` }}>
                  <div style={{ fontWeight: 700, color: item.color, fontSize: '0.96rem', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ display: 'grid', gap: '8px' }}>
                    {item.points.map((point) => (
                      <div key={point} style={{ color: '#f0f9ff', fontSize: '0.82rem', lineHeight: 1.5, paddingLeft: '10px', borderLeft: `2px solid ${item.color}55` }}>
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ borderColor: 'rgba(14,165,233,0.22)', padding: '18px 20px' }}>
            <div style={{ fontWeight: 800, color: '#f0f9ff', fontSize: '1rem', marginBottom: '14px' }}>{t.flowTitle}</div>
            <div style={{ display: 'grid', gap: '10px' }}>
              {t.flowSteps.map((step, index) => (
                <div key={step} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{
                    flexShrink: 0,
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(14,165,233,0.14)',
                    color: '#38bdf8',
                    border: '1px solid rgba(14,165,233,0.28)',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                  }}>
                    {index + 1}
                  </span>
                  <span style={{ color: '#e2e8f0', fontSize: '0.8rem', lineHeight: 1.5, fontFamily: 'Space Grotesk, monospace' }}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          padding: '18px 24px',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(14,165,233,0.08))',
          border: '1px solid rgba(245,158,11,0.25)',
        }}>
          <div style={{ fontWeight: 800, color: '#f59e0b', fontSize: '0.95rem', marginBottom: '8px' }}>{t.asyncTitle}</div>
          <p style={{ color: '#f0f9ff', fontSize: '0.85rem', lineHeight: 1.6 }}>
            {t.asyncDesc}
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
