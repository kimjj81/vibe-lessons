import SlideWrapper from '../components/SlideWrapper';
import GradientText from '../components/GradientText';

export default function Slide01_Title() {
  return (
    <SlideWrapper slideNumber={1}>
      {/* Glow effects */}
      <div style={{
        position: 'absolute', top: '-20%', left: '-10%',
        width: '60%', height: '60%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', right: '-10%',
        width: '60%', height: '60%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', zIndex: 1, maxWidth: '900px' }}>
        <div className="tag tag-purple" style={{ marginBottom: '24px' }}>
          2026 실전 마스터클래스
        </div>

        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
          <GradientText>바이브 코딩</GradientText>
          <br />
          <span style={{ color: '#f1f5f9' }}>MVP 마스터클래스</span>
        </h1>

        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: '#94a3b8', marginBottom: '48px', lineHeight: 1.6 }}>
          아이디어 → 배포 가능한 MVP를<br />4시간 안에 완성하는 실전 가이드
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Claude Code', 'Vibe Coding', 'MVP 전략', '실전 배포'].map(tag => (
            <span key={tag} className="tag tag-blue">{tag}</span>
          ))}
        </div>

        <div style={{ marginTop: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#475569', fontSize: '0.875rem' }}>
          <span>← →  방향키 또는 스와이프로 탐색</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
