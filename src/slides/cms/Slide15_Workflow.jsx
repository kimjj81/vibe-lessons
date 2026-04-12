import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide15_Workflow() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '콘텐츠 워크플로',
      subtitle: 'Draft → Review → Publish → Rollback',
      explain: '글을 쓰는 사람과 승인하는 사람이 다를 수 있습니다. 워크플로는 작성·검토·발행 과정을 일정하게 관리하는 장치입니다.',
      stages: [
        { name: 'Draft', color: '#6366f1', actor: 'Publisher', desc: '초안 작성. 아직 미공개.' },
        { name: 'Review', color: '#f59e0b', actor: 'Publisher → Admin', desc: '검토 요청. 승인 대기 중.' },
        { name: 'Published', color: '#22c55e', actor: 'Admin', desc: '발행 승인. 사용자에게 공개.' },
        { name: 'Rollback', color: '#ef4444', actor: 'Admin', desc: 'published_revision_id를 이전 버전으로 변경. 트랜잭션 + 감사로그 필수.' },
      ],
      commentQueue: { title: '댓글 승인 큐', desc: 'Comment.status = pending → approved/rejected/spam. XSS·스팸 방어를 위해 승인 큐를 거칩니다.' },
      authNote: '관리자 UI는 세션 + CSRF 토큰, 공개 API·모바일은 OAuth 2.0 또는 짧은 만료 JWT를 함께 사용하는 패턴이 가장 일반적입니다.',
    },
    en: {
      title: 'Content Workflow',
      subtitle: 'Draft → Review → Publish → Rollback',
      explain: 'Authors and approvers can be different people. A workflow manages the create-review-publish process consistently.',
      stages: [
        { name: 'Draft', color: '#6366f1', actor: 'Publisher', desc: 'Draft created. Not yet public.' },
        { name: 'Review', color: '#f59e0b', actor: 'Publisher → Admin', desc: 'Review requested. Awaiting approval.' },
        { name: 'Published', color: '#22c55e', actor: 'Admin', desc: 'Approved. Visible to users.' },
        { name: 'Rollback', color: '#ef4444', actor: 'Admin', desc: 'Update published_revision_id to past version. Transaction + audit log required.' },
      ],
      commentQueue: { title: 'Comment Approval Queue', desc: 'Comment.status: pending → approved/rejected/spam. Moderation queue protects against XSS and spam.' },
      authNote: 'Admin UI: session + CSRF token. Public API / mobile: OAuth 2.0 or short-lived JWT is the most common pattern.',
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={16}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }} data-prevent-swipe="" data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '12px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '16px', fontSize: '1rem' }}>
          {t.subtitle}
        </p>
        <p style={{ color: '#f0f9ff', fontSize: '0.88rem', lineHeight: 1.6, textAlign: 'center', marginBottom: '28px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.explain}
        </p>

        {/* 4 stage cards in horizontal flow */}
        <div style={{ display: 'flex', alignItems: 'stretch', gap: '8px', marginBottom: '24px' }}>
          {t.stages.map((s, i) => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
              <div className="card" style={{ borderColor: `${s.color}44`, padding: '14px 16px', flex: 1 }}>
                <div style={{ fontWeight: 700, color: s.color, fontSize: '0.95rem', marginBottom: '6px' }}>{s.name}</div>
                <div style={{ fontSize: '0.7rem', color: '#7dd3fc', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.actor}</div>
                <div style={{ color: '#f0f9ff', fontSize: '0.78rem', lineHeight: 1.4 }}>{s.desc}</div>
              </div>
              {i < t.stages.length - 1 && (
                <span style={{ color: '#7dd3fc', fontSize: '1.2rem', fontWeight: 700, flexShrink: 0 }}>→</span>
              )}
            </div>
          ))}
        </div>

        {/* Comment queue card */}
        <div className="card" style={{ borderColor: '#22d3ee44', padding: '16px 20px', marginBottom: '16px' }}>
          <div style={{ fontWeight: 700, color: '#22d3ee', fontSize: '0.9rem', marginBottom: '8px' }}>{t.commentQueue.title}</div>
          <div style={{ color: '#f0f9ff', fontSize: '0.84rem', lineHeight: 1.5 }}>{t.commentQueue.desc}</div>
        </div>

        {/* Auth note */}
        <div style={{
          padding: '16px 24px', borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.12))',
          border: '1px solid rgba(99,102,241,0.3)',
          textAlign: 'center',
        }}>
          <span style={{ color: '#f0f9ff', fontSize: '0.88rem', fontWeight: 600, lineHeight: 1.6 }}>
            {t.authNote}
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
}
