import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide17_Implementation() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '핵심 구현 패턴',
      subtitle: '어떤 순간에 어떤 시스템이 움직이는가',
      restTitle: 'REST API 주요 엔드포인트',
      groups: [
        { label: '공개 읽기', color: '#22c55e', endpoints: ['GET /api/content?type=Article&status=published', 'GET /api/content/:id'] },
        { label: '작성/수정 (인증 필요)', color: '#0ea5e9', endpoints: ['POST /api/content (draft 생성)', 'PATCH /api/content/:id (draft 수정)', 'POST /api/content/:id/submit (review 요청)'] },
        { label: '발행/롤백 (권한 필요)', color: '#8b5cf6', endpoints: ['POST /api/content/:id/publish', 'POST /api/content/:id/rollback { revisionId }'] },
        { label: '미디어', color: '#f59e0b', endpoints: ['POST /api/media/presign (presigned URL 발급)', 'POST /api/media/complete (메타데이터 확정)'] },
      ],
      publishTitle: '발행 트랜잭션 5단계',
      publishSteps: [
        'content 행에 FOR UPDATE 잠금 (상태 확인)',
        '새 revision 생성 (snapshot jsonb)',
        "content.status = 'published', published_revision_id 업데이트",
        'audit_log에 발행 기록',
        '캐시 무효화 이벤트 적재 (Outbox 패턴 권장)',
      ],
      mediaTitle: 'Presigned URL 미디어 업로드 흐름',
      mediaSteps: ['Browser → POST /api/media/presign', 'API → {uploadUrl, key} 반환', 'Browser → S3에 직접 PUT', 'Browser → POST /api/media/complete', 'API → MEDIA row 생성'],
    },
    en: {
      title: 'Core Implementation Patterns',
      subtitle: 'What system moves at what moment',
      restTitle: 'REST API Key Endpoints',
      groups: [
        { label: 'Public Read', color: '#22c55e', endpoints: ['GET /api/content?type=Article&status=published', 'GET /api/content/:id'] },
        { label: 'Create/Edit (Auth required)', color: '#0ea5e9', endpoints: ['POST /api/content (create draft)', 'PATCH /api/content/:id (edit draft)', 'POST /api/content/:id/submit (request review)'] },
        { label: 'Publish/Rollback (Permission required)', color: '#8b5cf6', endpoints: ['POST /api/content/:id/publish', 'POST /api/content/:id/rollback { revisionId }'] },
        { label: 'Media', color: '#f59e0b', endpoints: ['POST /api/media/presign (issue presigned URL)', 'POST /api/media/complete (confirm metadata)'] },
      ],
      publishTitle: 'Publish Transaction — 5 Steps',
      publishSteps: [
        'Lock content row with FOR UPDATE (check status)',
        'Create new revision (snapshot jsonb)',
        "Set content.status = 'published', update published_revision_id",
        'Record publish event in audit_log',
        'Enqueue cache invalidation event (Outbox pattern recommended)',
      ],
      mediaTitle: 'Presigned URL Media Upload Flow',
      mediaSteps: ['Browser → POST /api/media/presign', 'API → returns {uploadUrl, key}', 'Browser → PUT directly to S3', 'Browser → POST /api/media/complete', 'API → creates MEDIA row'],
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={18}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }} data-prevent-swipe="" data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '12px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '24px', fontSize: '1rem' }}>
          {t.subtitle}
        </p>

        {/* REST API groups 2x2 */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontWeight: 700, color: '#f0f9ff', fontSize: '0.9rem', marginBottom: '12px' }}>{t.restTitle}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {t.groups.map((g) => (
              <div key={g.label} className="card" style={{ borderColor: `${g.color}44`, padding: '12px 16px' }}>
                <div style={{ fontWeight: 700, color: g.color, fontSize: '0.82rem', marginBottom: '8px' }}>{g.label}</div>
                {g.endpoints.map((ep) => (
                  <div key={ep} style={{
                    fontSize: '0.72rem', padding: '4px 8px', marginBottom: '4px', borderRadius: '6px',
                    background: `${g.color}12`, color: '#f0f9ff', fontFamily: 'monospace', lineHeight: 1.4,
                  }}>{ep}</div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Publish flow + Media flow side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          {/* Publish transaction */}
          <div className="card" style={{ borderColor: '#6366f144', padding: '14px 18px' }}>
            <div style={{ fontWeight: 700, color: '#6366f1', fontSize: '0.85rem', marginBottom: '12px' }}>{t.publishTitle}</div>
            {t.publishSteps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'flex-start' }}>
                <span style={{
                  flexShrink: 0, width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#6366f122', color: '#6366f1', fontSize: '0.72rem', fontWeight: 800, border: '1px solid #6366f144',
                }}>{i + 1}</span>
                <span style={{ color: '#f0f9ff', fontSize: '0.78rem', lineHeight: 1.4 }}>{step}</span>
              </div>
            ))}
          </div>

          {/* Media flow */}
          <div className="card" style={{ borderColor: '#f59e0b44', padding: '14px 18px' }}>
            <div style={{ fontWeight: 700, color: '#f59e0b', fontSize: '0.85rem', marginBottom: '12px' }}>{t.mediaTitle}</div>
            {t.mediaSteps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'flex-start' }}>
                <span style={{
                  flexShrink: 0, width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#f59e0b22', color: '#f59e0b', fontSize: '0.72rem', fontWeight: 800, border: '1px solid #f59e0b44',
                }}>{i + 1}</span>
                <span style={{ color: '#f0f9ff', fontSize: '0.78rem', lineHeight: 1.4, fontFamily: 'monospace' }}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
