import SlideWrapper from '../components/SlideWrapper';
import GradientText from '../components/GradientText';

const timeline = [
  { time: '0:00', duration: '30분', title: '환경 설정', desc: '개발 환경 구성\nAGENTS.md 작성', color: '#7c3aed' },
  { time: '0:30', duration: '45분', title: '아이디어 구체화', desc: 'PRD 작성\n기술 스택 결정', color: '#6d28d9' },
  { time: '1:15', duration: '60분', title: 'MVP 코어 구현', desc: '핵심 기능 개발\nDB 스키마', color: '#2563eb' },
  { time: '2:15', duration: '45분', title: 'UI/UX 완성', desc: '인터페이스 구현\n반응형 디자인', color: '#1d4ed8' },
  { time: '3:00', duration: '30분', title: '통합 테스트', desc: 'E2E 검증\n버그 수정', color: '#0891b2' },
  { time: '3:30', duration: '30분', title: '배포 & 검증', desc: '프로덕션 배포\n모니터링 설정', color: '#06b6d4' },
];

export default function Slide03_Roadmap() {
  return (
    <SlideWrapper slideNumber={3}>
      <div style={{ width: '100%', maxWidth: '1200px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>4시간 로드맵</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '48px', fontSize: '1.1rem' }}>
          체계적인 단계별 실행 계획
        </p>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', top: '32px', left: '5%', right: '5%', height: '2px',
            background: 'linear-gradient(90deg, #7c3aed, #2563eb, #06b6d4)',
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', position: 'relative' }}>
            {timeline.map((step, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Dot */}
                <div style={{
                  width: '16px', height: '16px', borderRadius: '50%',
                  background: step.color, border: '3px solid #0a0a1a',
                  boxShadow: `0 0 12px ${step.color}`,
                  marginBottom: '16px', zIndex: 1, flexShrink: 0,
                }} />

                <div className="card" style={{ width: '100%', padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.7rem', color: step.color, fontWeight: 700, fontFamily: 'Space Grotesk', marginBottom: '4px' }}>
                    {step.time}
                  </div>
                  <div className="tag" style={{ fontSize: '0.65rem', background: `${step.color}33`, color: step.color, border: `1px solid ${step.color}66`, marginBottom: '8px' }}>
                    {step.duration}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '8px', color: '#f1f5f9' }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5 }}>
                    {step.desc.split('\n').map((line, j) => <div key={j}>{line}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px', padding: '16px 32px', background: 'rgba(124,58,237,0.1)', borderRadius: '12px', border: '1px solid rgba(124,58,237,0.2)', display: 'inline-block', width: '100%' }}>
          <span style={{ color: '#c4b5fd', fontSize: '1rem' }}>
            💡 각 단계는 독립적으로 검증 가능 — AI와 함께 반복적으로 개선
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
}
