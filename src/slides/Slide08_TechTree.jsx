import SlideWrapper from '../components/SlideWrapper';
import GradientText from '../components/GradientText';

export default function Slide08_TechTree() {
  return (
    <SlideWrapper slideNumber={8}>
      <div style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>기술 스택 결정 트리</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '40px', fontSize: '1.1rem' }}>
          프로젝트 유형별 최적의 기술 선택 가이드
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
          {/* Root */}
          <NodeBox label="🚀 새 프로젝트" color="#7c3aed" />
          <Connector />

          {/* Level 1 */}
          <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start', position: 'relative', width: '100%', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <NodeBox label="🌐 웹 서비스" color="#2563eb" small />
              <Connector />
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <NodeBox label="📊 데이터 중심" color="#1d4ed8" small />
                  <Connector />
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <StackBox name="Next.js" desc="SSR" color="#0ea5e9" />
                    <StackBox name="SvelteKit" desc="경량" color="#ff6b35" />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <NodeBox label="🎨 인터렉티브" color="#1d4ed8" small />
                  <Connector />
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <StackBox name="React+Vite" desc="SPA" color="#61dafb" />
                    <StackBox name="Astro" desc="정적" color="#ff5d01" />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <NodeBox label="📱 앱/모바일" color="#0891b2" small />
              <Connector />
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <NodeBox label="크로스플랫폼" color="#0e7490" small />
                  <Connector />
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <StackBox name="React Native" desc="모바일" color="#61dafb" />
                    <StackBox name="Expo" desc="빠른 빌드" color="#000020" />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <NodeBox label="데스크탑" color="#0e7490" small />
                  <Connector />
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <StackBox name="Tauri" desc="경량" color="#ffc131" />
                    <StackBox name="Electron" desc="범용" color="#9feaf9" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px', padding: '12px 24px', background: 'rgba(124,58,237,0.1)', borderRadius: '8px', border: '1px solid rgba(124,58,237,0.2)', color: '#c4b5fd', fontSize: '0.85rem' }}>
            💡 MVP에서는 Next.js 또는 React+Vite가 가장 AI 친화적 (문서 풍부, 학습 데이터 많음)
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

function NodeBox({ label, color, small }) {
  return (
    <div style={{
      padding: small ? '8px 16px' : '12px 24px',
      background: `${color}22`,
      border: `1px solid ${color}66`,
      borderRadius: '8px',
      color: '#f1f5f9',
      fontWeight: 700,
      fontSize: small ? '0.85rem' : '1rem',
      whiteSpace: 'nowrap',
    }}>
      {label}
    </div>
  );
}

function Connector() {
  return <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.15)' }} />;
}

function StackBox({ name, desc, color }) {
  return (
    <div style={{
      padding: '8px 12px',
      background: 'rgba(255,255,255,0.05)',
      border: `1px solid ${color}44`,
      borderRadius: '8px',
      textAlign: 'center',
    }}>
      <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#f1f5f9' }}>{name}</div>
      <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '2px' }}>{desc}</div>
    </div>
  );
}
