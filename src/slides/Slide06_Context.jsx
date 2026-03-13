import SlideWrapper from '../components/SlideWrapper';
import GradientText from '../components/GradientText';

const agentsContent = [
  '프로젝트 개요 & 목표',
  '기술 스택 명세',
  '아키텍처 패턴',
  '코딩 컨벤션',
  'API 엔드포인트 목록',
  '금지 패턴 & 제약사항',
  '테스트 전략',
];

const claudeContent = [
  '전역 작업 스타일',
  '응답 언어 & 톤',
  '커밋 메시지 형식',
  'Oh-my-claudecode 설정',
  '보안 정책',
  '개인 선호도',
  'MCP 서버 설정',
];

export default function Slide06_Context() {
  return (
    <SlideWrapper slideNumber={6}>
      <div style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>컨텍스트 분리 전략</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '48px', fontSize: '1.1rem' }}>
          두 파일의 역할 분리로 AI 지시사항을 체계적으로 관리
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {/* AGENTS.md */}
          <div className="card" style={{ borderColor: 'rgba(124,58,237,0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📋</div>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.2rem', color: '#c4b5fd' }}>AGENTS.md</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>프로젝트 스코프 컨텍스트</div>
              </div>
            </div>
            <div style={{ background: 'rgba(124,58,237,0.1)', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', fontSize: '0.85rem', color: '#c4b5fd', fontFamily: 'Space Grotesk' }}>
              📁 /project-root/AGENTS.md
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {agentsContent.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>
                  <span style={{ color: '#7c3aed' }}>▸</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CLAUDE.md */}
          <div className="card" style={{ borderColor: 'rgba(6,182,212,0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(6,182,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>⚙️</div>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.2rem', color: '#67e8f9' }}>CLAUDE.md</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>전역 사용자 설정</div>
              </div>
            </div>
            <div style={{ background: 'rgba(6,182,212,0.1)', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', fontSize: '0.85rem', color: '#67e8f9', fontFamily: 'Space Grotesk' }}>
              📁 ~/.claude/CLAUDE.md
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {claudeContent.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>
                  <span style={{ color: '#06b6d4' }}>▸</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '24px', textAlign: 'center', padding: '12px', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', color: '#94a3b8', fontSize: '0.9rem' }}>
          💡 AGENTS.md는 프로젝트마다 다르고, CLAUDE.md는 모든 프로젝트에 공통 적용됩니다
        </div>
      </div>
    </SlideWrapper>
  );
}
