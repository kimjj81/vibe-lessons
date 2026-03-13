import SlideWrapper from '../components/SlideWrapper';
import GradientText from '../components/GradientText';

const coreItems = [
  { icon: '🤖', name: 'Claude Code', desc: 'CLI AI 코딩 어시스턴트', tag: 'Core' },
  { icon: '📦', name: 'Node.js / npm', desc: '패키지 관리 & 빌드 도구', tag: 'Runtime' },
  { icon: '🌿', name: 'Git', desc: '버전 관리 & 히스토리', tag: 'VCS' },
  { icon: '🖥️', name: 'VS Code / Cursor', desc: '통합 개발 환경', tag: 'Editor' },
];

const claudeItems = [
  { icon: '📋', name: 'AGENTS.md', desc: '프로젝트 가이드라인 & AI 지시사항', tag: 'Context' },
  { icon: '⚙️', name: 'CLAUDE.md', desc: '전역 Claude 행동 설정', tag: 'Global' },
  { icon: '🔌', name: 'MCP 서버', desc: '도구 확장 & 외부 통합', tag: 'Extension' },
  { icon: '💡', name: 'Custom Skills', desc: '재사용 가능한 워크플로우', tag: 'Workflow' },
];

function EnvCard({ item, colorClass }) {
  return (
    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px' }}>
      <div style={{ fontSize: '1.8rem', flexShrink: 0 }}>{item.icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '1rem' }}>{item.name}</span>
          <span className={`tag ${colorClass}`} style={{ fontSize: '0.65rem' }}>{item.tag}</span>
        </div>
        <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{item.desc}</div>
      </div>
    </div>
  );
}

export default function Slide05_DevEnv() {
  return (
    <SlideWrapper slideNumber={5}>
      <div style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>최소주의 개발 환경</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '48px', fontSize: '1.1rem' }}>
          꼭 필요한 도구만, 최대한 단순하게
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', color: '#c4b5fd', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🏗️ Core Engine
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {coreItems.map(item => <EnvCard key={item.name} item={item} colorClass="tag-purple" />)}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', color: '#67e8f9', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🤖 Claude Code 생태계
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {claudeItems.map(item => <EnvCard key={item.name} item={item} colorClass="tag-cyan" />)}
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
