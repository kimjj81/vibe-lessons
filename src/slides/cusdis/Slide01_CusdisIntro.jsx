import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';

export default function Slide01_CusdisIntro() {
  return (
    <SlideWrapper slideNumber={1}>
      <div
        style={{
          position: 'absolute',
          inset: '8% 12%',
          borderRadius: '36px',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'linear-gradient(140deg, rgba(249,115,22,0.14), rgba(251,113,133,0.08) 40%, rgba(20,12,8,0.12) 100%)',
          boxShadow: '0 40px 120px rgba(20,12,8,0.35)',
        }}
      />

      <div className="cusdis-slide-layout" style={{ width: '100%', maxWidth: '1120px', zIndex: 1, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '32px', alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '62vh' }}>
          <div>
            <div className="tag tag-blue" style={{ marginBottom: '20px' }}>
              Placeholder lecture
            </div>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.4rem)', lineHeight: 0.96, letterSpacing: '-0.04em', marginBottom: '20px' }}>
              <GradientText>Cusdis</GradientText>
              <br />
              <span style={{ color: 'var(--text-main)' }}>for indie blogs</span>
            </h1>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,247,237,0.82)', maxWidth: '48ch' }}>
              정적 블로그에 가벼운 댓글 시스템을 붙이고 싶을 때, Cusdis를 어떤 상황에서 선택해야 하는지,
              설치와 운영 포인트를 어떻게 설명할지 정리할 예정입니다.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            {['Embed', 'Self-host option', 'Moderation', 'Privacy-first'].map((item) => (
              <span key={item} className="tag tag-cyan">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Planned outline
            </div>
            <div style={{ display: 'grid', gap: '14px' }}>
              {[
                '왜 Cusdis인가: Disqus 대안으로서의 포지션',
                '정적 사이트에 붙이는 최소 통합 흐름',
                '관리자 승인, 스팸 대응, 프라이버시 메모',
                '다음 강의에서 실제 블로그 예제로 마무리',
              ].map((item, index) => (
                <div key={item} style={{ display: 'grid', gridTemplateColumns: '34px 1fr', gap: '12px', alignItems: 'start' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '999px', border: '1px solid rgba(251,146,60,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fdba74', fontWeight: 700 }}>
                    {index + 1}
                  </div>
                  <div style={{ color: 'var(--text-main)', lineHeight: 1.5 }}>{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '28px', paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,247,237,0.7)', fontSize: '0.95rem' }}>
            이 강의는 현재 슬롯만 준비되어 있습니다. 구조 개편 후 바로 내용을 채워 넣을 수 있도록 경로와 템플릿을 먼저 확보했습니다.
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
