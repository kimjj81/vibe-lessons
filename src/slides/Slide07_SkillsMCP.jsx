import SlideWrapper from '../components/SlideWrapper';
import GradientText from '../components/GradientText';

const rows = [
  { aspect: '위치', skills: '~/.claude/commands/', mcp: 'MCP 서버 (별도 프로세스)' },
  { aspect: '언어', skills: 'Markdown + 프롬프트', mcp: 'TypeScript / Python' },
  { aspect: '실행', skills: 'Claude 내부', mcp: '외부 프로세스 호출' },
  { aspect: '상태', skills: '무상태', mcp: '상태 유지 가능' },
  { aspect: '도구', skills: '기본 Claude 도구', mcp: '커스텀 도구 정의' },
  { aspect: '통합', skills: '단순 워크플로우', mcp: '외부 API/DB 연동' },
  { aspect: '난이도', skills: '⭐ 쉬움', mcp: '⭐⭐⭐ 복잡함' },
];

export default function Slide07_SkillsMCP() {
  return (
    <SlideWrapper slideNumber={7}>
      <div style={{ width: '100%', maxWidth: '1000px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>Skills vs MCP 매트릭스</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '40px', fontSize: '1.1rem' }}>
          언제 무엇을 선택해야 하는가
        </p>

        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.5fr', background: 'rgba(124,58,237,0.15)', padding: '16px 24px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontWeight: 700, color: '#94a3b8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>항목</div>
            <div style={{ fontWeight: 700, color: '#c4b5fd', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              💡 Skills (슬래시 커맨드)
            </div>
            <div style={{ fontWeight: 700, color: '#67e8f9', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🔌 MCP 서버
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={row.aspect} style={{
              display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.5fr',
              padding: '14px 24px',
              borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
            }}>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 600 }}>{row.aspect}</div>
              <div style={{ color: '#e2e8f0', fontSize: '0.9rem', fontFamily: row.aspect === '언어' || row.aspect === '위치' ? 'Space Grotesk' : 'inherit' }}>
                {row.skills}
              </div>
              <div style={{ color: '#e2e8f0', fontSize: '0.9rem', fontFamily: row.aspect === '언어' || row.aspect === '위치' ? 'Space Grotesk' : 'inherit' }}>
                {row.mcp}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="card" style={{ borderColor: 'rgba(124,58,237,0.3)', padding: '16px 20px' }}>
            <span style={{ color: '#c4b5fd', fontWeight: 700 }}>✅ Skills 사용 시: </span>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>반복적인 Claude 워크플로우 자동화, 빠른 프로토타이핑</span>
          </div>
          <div className="card" style={{ borderColor: 'rgba(6,182,212,0.3)', padding: '16px 20px' }}>
            <span style={{ color: '#67e8f9', fontWeight: 700 }}>✅ MCP 사용 시: </span>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>외부 API 연동, 데이터베이스 직접 접근, 커스텀 도구 필요 시</span>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
