import SlideWrapper from '../components/SlideWrapper';
import GradientText from '../components/GradientText';

export default function Slide10_Architecture() {
  return (
    <SlideWrapper slideNumber={10}>
      <div style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>식당 주문 MVP 아키텍처</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '40px', fontSize: '1.1rem' }}>
          실전 예제: 3-Tier 레스토랑 주문 시스템
        </p>

        <div style={{ display: 'flex', alignItems: 'stretch', gap: '0', position: 'relative' }}>
          {/* Frontend */}
          <TierBox
            icon="📱"
            title="Frontend"
            subtitle="Next.js / React"
            color="#7c3aed"
            items={[
              '메뉴 탐색 페이지',
              '장바구니 UI',
              '주문 상태 실시간 업데이트',
              '결제 플로우',
            ]}
          />

          <Arrow />

          {/* Middleware */}
          <TierBox
            icon="⚡"
            title="Middleware"
            subtitle="Next.js API Routes"
            color="#2563eb"
            items={[
              '주문 생성 API',
              '결제 검증 (Stripe)',
              '인증 미들웨어',
              '실시간 알림 (SSE)',
            ]}
          />

          <Arrow />

          {/* Backend */}
          <TierBox
            icon="🗄️"
            title="Backend"
            subtitle="Supabase"
            color="#06b6d4"
            items={[
              'PostgreSQL DB',
              'Row Level Security',
              'Auth (JWT)',
              'Storage (이미지)',
            ]}
          />
        </div>

        <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
          {[
            { label: '배포', value: 'Vercel', icon: '🚀' },
            { label: '인증', value: 'Supabase Auth', icon: '🔐' },
            { label: '결제', value: 'Stripe', icon: '💳' },
            { label: '모니터링', value: 'Vercel Analytics', icon: '📊' },
          ].map(item => (
            <div key={item.label} className="card" style={{ padding: '12px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.3rem', marginBottom: '4px' }}>{item.icon}</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f1f5f9', marginTop: '2px' }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

function TierBox({ icon, title, subtitle, color, items }) {
  return (
    <div className="card" style={{ flex: 1, borderColor: `${color}44`, padding: '24px' }}>
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{icon}</div>
        <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#f1f5f9' }}>{title}</div>
        <div style={{ fontSize: '0.82rem', color: color, fontFamily: 'Space Grotesk', marginTop: '2px' }}>{subtitle}</div>
      </div>
      <div style={{ width: '100%', height: '1px', background: `${color}33`, marginBottom: '16px' }} />
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {items.map(item => (
          <li key={item} style={{ display: 'flex', gap: '8px', fontSize: '0.85rem', color: '#94a3b8' }}>
            <span style={{ color: color, flexShrink: 0 }}>▸</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Arrow() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '0 8px', flexShrink: 0 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#475569', fontSize: '0.7rem' }}>
        <span style={{ fontSize: '1.2rem', color: '#334155' }}>⟷</span>
        <span>REST/JSON</span>
      </div>
    </div>
  );
}
