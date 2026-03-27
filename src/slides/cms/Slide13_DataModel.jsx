import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide13_DataModel() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: 'CMS 데이터 모델',
      subtitle: '콘텐츠뿐만 아니라 권한·리비전·감사로그까지 설계해야 합니다',
      intro: 'CMS DB는 단순 글 저장소가 아닙니다. 누가 수정할 수 있는지, 언제 발행됐는지, 이전 버전으로 되돌릴 수 있는지까지 함께 설계합니다.',
      entities: [
        { name: 'USER', color: '#0ea5e9', fields: ['id (PK)', 'email', 'password_hash', 'status (active/disabled)', 'last_login_at'], note: '글·댓글·감사로그 모두와 연결' },
        { name: 'CONTENT', color: '#6366f1', fields: ['id (PK)', 'type (Article/Page/Block)', 'slug', 'status (draft/review/published/archived)', 'author_id (FK)', 'published_revision_id (FK)'], note: '리비전·태그·미디어까지 연결' },
        { name: 'REVISION', color: '#8b5cf6', fields: ['id (PK)', 'content_id (FK)', 'revision_no', 'editor_id (FK)', 'snapshot (jsonb)', 'change_note'], note: '예전 버전 전체를 통째로 저장한 복사본' },
        { name: 'COMMENT', color: '#22d3ee', fields: ['id (PK)', 'content_id (FK)', 'author_id (FK, nullable)', 'status (pending/approved/rejected/spam)', 'ip_hash'], note: '승인 큐를 거쳐 XSS·스팸 방어' },
      ],
      additional: 'ROLE, PERMISSION, USER_ROLE, MEDIA, TAXONOMY, AUDIT_LOG도 함께 설계합니다.',
      insight: 'Revision.snapshot을 jsonb로 두면 과거 스냅샷과 현재 스키마 차이를 흡수하고 트랜잭션으로 롤백할 수 있습니다.',
    },
    en: {
      title: 'CMS Data Model',
      subtitle: 'Design covers not just content but also roles, revisions, and audit logs',
      intro: 'A CMS DB is not a simple post storage. It must handle who can edit, when content was published, and whether rollback to a past version is possible.',
      entities: [
        { name: 'USER', color: '#0ea5e9', fields: ['id (PK)', 'email', 'password_hash', 'status (active/disabled)', 'last_login_at'], note: 'Connected to posts, comments, and audit logs' },
        { name: 'CONTENT', color: '#6366f1', fields: ['id (PK)', 'type (Article/Page/Block)', 'slug', 'status (draft/review/published/archived)', 'author_id (FK)', 'published_revision_id (FK)'], note: 'Linked to revisions, tags, and media' },
        { name: 'REVISION', color: '#8b5cf6', fields: ['id (PK)', 'content_id (FK)', 'revision_no', 'editor_id (FK)', 'snapshot (jsonb)', 'change_note'], note: 'A full snapshot copy of a past version' },
        { name: 'COMMENT', color: '#22d3ee', fields: ['id (PK)', 'content_id (FK)', 'author_id (FK, nullable)', 'status (pending/approved/rejected/spam)', 'ip_hash'], note: 'Goes through approval queue for XSS/spam defense' },
      ],
      additional: 'Also design: ROLE, PERMISSION, USER_ROLE, MEDIA, TAXONOMY, AUDIT_LOG',
      insight: 'Storing Revision.snapshot as jsonb absorbs schema drift between past and present, enabling transactional rollback.',
    },
  };
  const t = copy[locale];
  const relations = locale === 'ko'
    ? [
        { text: '1:N 작성', left: '30%', top: '28%' },
        { text: '1:N 리비전', left: '66%', top: '28%' },
        { text: '1:N 댓글', left: '49%', top: '64%' },
      ]
    : [
        { text: '1:N authors', left: '30%', top: '28%' },
        { text: '1:N revisions', left: '66%', top: '28%' },
        { text: '1:N comments', left: '49%', top: '64%' },
      ];

  return (
    <SlideWrapper slideNumber={14}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }} data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '12px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '16px', fontSize: '1rem' }}>
          {t.subtitle}
        </p>
        <p style={{ color: '#f0f9ff', fontSize: '0.88rem', lineHeight: 1.6, textAlign: 'center', marginBottom: '24px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.intro}
        </p>

        {/* ERD diagram */}
        <div className="card" style={{ borderColor: 'rgba(125, 211, 252, 0.18)', padding: '20px 24px', marginBottom: '20px' }}>
          <div style={{ position: 'relative', height: '430px' }}>
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            >
              <line x1="27" y1="22" x2="42" y2="30" stroke="rgba(14,165,233,0.45)" strokeWidth="1.2" />
              <line x1="58" y1="30" x2="73" y2="22" stroke="rgba(139,92,246,0.45)" strokeWidth="1.2" />
              <line x1="50" y1="44" x2="50" y2="68" stroke="rgba(34,211,238,0.45)" strokeWidth="1.2" />
            </svg>

            {relations.map((relation) => (
              <div
                key={relation.text}
                style={{
                  position: 'absolute',
                  left: relation.left,
                  top: relation.top,
                  transform: 'translate(-50%, -50%)',
                  padding: '4px 8px',
                  borderRadius: '999px',
                  background: 'rgba(15,23,42,0.92)',
                  border: '1px solid rgba(125, 211, 252, 0.18)',
                  color: '#bae6fd',
                  fontSize: '0.7rem',
                  fontFamily: 'monospace',
                }}
              >
                {relation.text}
              </div>
            ))}

            {[
              { ...t.entities[0], left: '2%', top: '6%', width: '28%' },
              { ...t.entities[1], left: '36%', top: '14%', width: '28%' },
              { ...t.entities[2], left: '70%', top: '6%', width: '28%' },
              { ...t.entities[3], left: '36%', top: '58%', width: '28%' },
            ].map((entity) => (
              <div
                key={entity.name}
                style={{
                  position: 'absolute',
                  left: entity.left,
                  top: entity.top,
                  width: entity.width,
                  padding: '14px 16px',
                  borderRadius: '16px',
                  border: `1px solid ${entity.color}44`,
                  background: 'rgba(2, 6, 23, 0.82)',
                  boxShadow: '0 18px 40px rgba(0,0,0,0.22)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: entity.color, boxShadow: `0 0 8px ${entity.color}` }} />
                  <span style={{ fontWeight: 700, color: entity.color, fontSize: '0.95rem', fontFamily: 'Space Grotesk, monospace' }}>{entity.name}</span>
                </div>
                <div style={{ display: 'grid', gap: '4px', marginBottom: '10px' }}>
                  {entity.fields.map((field) => (
                    <div key={field} style={{ color: '#e2e8f0', fontSize: '0.72rem', lineHeight: 1.35, fontFamily: 'monospace' }}>
                      {field}
                    </div>
                  ))}
                </div>
                <p style={{ color: '#7dd3fc', fontSize: '0.74rem', lineHeight: 1.4, margin: 0 }}>{entity.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional entities */}
        <p style={{ color: '#7dd3fc', fontSize: '0.82rem', textAlign: 'center', marginBottom: '14px' }}>
          {t.additional}
        </p>

        {/* Insight box */}
        <div style={{
          padding: '16px 24px', borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.12))',
          border: '1px solid rgba(99,102,241,0.3)',
          textAlign: 'center',
        }}>
          <span style={{ color: '#f0f9ff', fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.6 }}>
            {t.insight}
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
}
