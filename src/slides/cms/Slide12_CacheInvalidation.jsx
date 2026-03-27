import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide12_CacheInvalidation() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '발행 → 캐시 무효화 흐름',
      subtitle: 'CMS에서 글을 발행한 뒤 화면이 언제 바뀌는가',
      explain: '"글을 고쳤는데 왜 바로 화면이 안 바뀌지?"의 답은 대부분 캐시입니다. DB를 고쳐도 CDN이나 프런트엔드가 예전 결과를 들고 있으면 화면은 바로 안 바뀝니다.',
      terms: [
        { label: '캐시 무효화 (invalidation)', desc: '저장된 옛날 결과를 버리는 것' },
        { label: '재생성 (regeneration)', desc: '최신 데이터로 페이지를 다시 만드는 것' },
        { label: '재검증 (revalidation)', desc: '다음 요청 시 캐시가 아직 유효한지 확인하는 것' },
      ],
      flow: [
        '편집자가 콘텐츠 발행',
        'CMS가 Webhook 발송',
        'Revalidation Worker가 수신',
        'CDN invalidation 요청 → 오래된 캐시 제거',
        'Next.js revalidateTag 호출',
        '다음 요청 시 최신 HTML/JSON 생성',
        '사용자가 최신 화면 수신',
      ],
      warning: 'CDN invalidation만 하면 앱 캐시가 남고, 앱 재검증만 하면 CDN이 남습니다. 두 가지를 함께 설계해야 합니다.',
    },
    en: {
      title: 'Publish → Cache Invalidation Flow',
      subtitle: 'When does the screen update after publishing in a CMS?',
      explain: '"Why doesn\'t the page update immediately after editing?" The answer is almost always the cache. Even if you fix the DB, the CDN or frontend may still serve old results.',
      terms: [
        { label: 'Cache Invalidation', desc: 'Discarding the stored old result' },
        { label: 'Regeneration', desc: 'Rebuilding the page with fresh data' },
        { label: 'Revalidation', desc: 'Checking whether the cache is still valid on the next request' },
      ],
      flow: [
        'Editor publishes content',
        'CMS fires Webhook',
        'Revalidation Worker receives it',
        'CDN invalidation request → old cache removed',
        'Next.js revalidateTag called',
        'Next request generates fresh HTML/JSON',
        'User receives up-to-date screen',
      ],
      warning: 'CDN invalidation alone leaves app cache stale; app revalidation alone leaves CDN stale. Both must be designed together.',
    },
  };
  const t = copy[locale];
  const flowColors = ['#0ea5e9', '#6366f1', '#8b5cf6', '#ef4444', '#f59e0b', '#22c55e', '#22d3ee'];

  return (
    <SlideWrapper slideNumber={13}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }} data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '12px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '20px', fontSize: '1rem' }}>
          {t.subtitle}
        </p>

        {/* Explain */}
        <p style={{ color: '#f0f9ff', fontSize: '0.88rem', lineHeight: 1.6, textAlign: 'center', marginBottom: '24px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.explain}
        </p>

        {/* 3 definition cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '24px' }}>
          {t.terms.map((term) => (
            <div key={term.label} className="card" style={{ padding: '14px 18px' }}>
              <div style={{ fontWeight: 700, color: '#0ea5e9', fontSize: '0.85rem', marginBottom: '6px' }}>{term.label}</div>
              <div style={{ color: '#f0f9ff', fontSize: '0.82rem', lineHeight: 1.4 }}>{term.desc}</div>
            </div>
          ))}
        </div>

        {/* 7-step flow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '24px', overflowX: 'auto', paddingBottom: '8px' }}>
          {t.flow.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
              <div style={{
                padding: '10px 12px', borderRadius: '10px', minWidth: '110px', textAlign: 'center',
                background: `${flowColors[i]}18`, border: `1px solid ${flowColors[i]}44`,
              }}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: flowColors[i], marginBottom: '4px' }}>{i + 1}</div>
                <div style={{ color: '#f0f9ff', fontSize: '0.72rem', lineHeight: 1.3 }}>{step}</div>
              </div>
              {i < t.flow.length - 1 && (
                <span style={{ color: '#7dd3fc', fontSize: '1rem', fontWeight: 700 }}>→</span>
              )}
            </div>
          ))}
        </div>

        {/* Warning box */}
        <div style={{
          padding: '16px 20px', borderRadius: '12px',
          background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
          textAlign: 'center',
        }}>
          <span style={{ color: '#fbbf24', fontWeight: 700, fontSize: '0.85rem', marginRight: '8px' }}>⚠</span>
          <span style={{ color: '#f0f9ff', fontSize: '0.88rem', lineHeight: 1.5 }}>{t.warning}</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
