import SlideWrapper from '../components/SlideWrapper';
import GradientText from '../components/GradientText';
import { useLocale } from '../i18n/LocaleContext';

export default function Slide04_VibeCodingLoop() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      titleTop: '가드레일',
      titleBottom: '바이브 코딩 루프',
      subtitle: '5단계 순환 프로세스로 AI와 협업하여 지속적으로 개선하는 개발 방법론',
      guardrailTitle: '🛡️ 가드레일이란?',
      guardrailBody: 'AGENTS.md와 CLAUDE.md를 통해 AI의 행동 범위를 제한하고 프로젝트 컨텍스트를 유지하는 안전장치',
      steps: [
        { icon: '🎯', title: '목표 설정', desc: 'PRD & 요구사항\n명확히 정의', angle: 0, color: '#7c3aed' },
        { icon: '🤖', title: 'AI 지시', desc: 'Claude Code에\n컨텍스트 전달', angle: 72, color: '#5b21b6' },
        { icon: '⚙️', title: '코드 생성', desc: 'AI가 코드 작성\n& 수정 제안', angle: 144, color: '#2563eb' },
        { icon: '✅', title: '검증 & 테스트', desc: '가드레일로\n품질 확인', angle: 216, color: '#0891b2' },
        { icon: '🚀', title: '배포 & 반복', desc: '빠른 배포 후\n피드백 수집', angle: 288, color: '#06b6d4' },
      ],
    },
    en: {
      titleTop: 'Guardrailed',
      titleBottom: 'vibe-coding loop',
      subtitle: 'A five-step feedback loop for collaborating with AI and improving the product continuously',
      guardrailTitle: '🛡️ What is a guardrail?',
      guardrailBody: 'AGENTS.md and CLAUDE.md constrain how the AI behaves and keep the project context stable while you iterate.',
      steps: [
        { icon: '🎯', title: 'Set the target', desc: 'Define the PRD\nand requirements', angle: 0, color: '#7c3aed' },
        { icon: '🤖', title: 'Direct the AI', desc: 'Pass context into\nClaude Code', angle: 72, color: '#5b21b6' },
        { icon: '⚙️', title: 'Generate code', desc: 'Let the AI write\nand revise', angle: 144, color: '#2563eb' },
        { icon: '✅', title: 'Verify & test', desc: 'Use guardrails to\ncheck quality', angle: 216, color: '#0891b2' },
        { icon: '🚀', title: 'Deploy & repeat', desc: 'Ship quickly and\ncollect feedback', angle: 288, color: '#06b6d4' },
      ],
    },
  };
  const t = copy[locale];
  const radius = 180;
  const cx = 300;
  const cy = 300;

  return (
    <SlideWrapper slideNumber={4}>
      <div style={{ width: '100%', maxWidth: '1100px', zIndex: 1, display: 'flex', alignItems: 'center', gap: '60px' }}>
        <div style={{ flex: '0 0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
            <GradientText>{t.titleTop}</GradientText>
            <br />
            <span style={{ color: '#f1f5f9' }}>{t.titleBottom}</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.8, marginBottom: '24px', maxWidth: '320px' }}>
            {t.subtitle}
          </p>
          <div className="card" style={{ padding: '16px 20px', maxWidth: '320px' }}>
            <div style={{ color: '#c4b5fd', fontWeight: 700, marginBottom: '8px' }}>{t.guardrailTitle}</div>
            <div style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
              {t.guardrailBody}
            </div>
          </div>
        </div>

        {/* Circle diagram */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <svg width="600" height="600" viewBox="0 0 600 600" style={{ maxWidth: '100%', maxHeight: '60vh' }}>
            {/* Center */}
            <circle cx={cx} cy={cy} r="60" fill="rgba(124,58,237,0.15)" stroke="rgba(124,58,237,0.4)" strokeWidth="1.5" />
            <text x={cx} y={cy - 8} textAnchor="middle" fill="#c4b5fd" fontSize="14" fontWeight="700">Vibe</text>
            <text x={cx} y={cy + 10} textAnchor="middle" fill="#c4b5fd" fontSize="14" fontWeight="700">Coding</text>
            <text x={cx} y={cy + 26} textAnchor="middle" fill="#94a3b8" fontSize="10">Loop</text>

            {/* Connection lines */}
            {t.steps.map((_, i) => {
              const a = ((i * 72) - 90) * Math.PI / 180;
              const next_a = (((i + 1) * 72) - 90) * Math.PI / 180;
              const x1 = cx + (radius - 5) * Math.cos(a);
              const y1 = cy + (radius - 5) * Math.sin(a);
              const x2 = cx + (radius - 5) * Math.cos(next_a);
              const y2 = cy + (radius - 5) * Math.sin(next_a);
              return (
                <path key={i}
                  d={`M ${x1} ${y1} A ${radius - 5} ${radius - 5} 0 0 1 ${x2} ${y2}`}
                  fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="40" strokeLinecap="round"
                />
              );
            })}

            {/* Orbit ring */}
            <circle cx={cx} cy={cy} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 6" />

            {/* Step nodes */}
            {t.steps.map((step, i) => {
              const a = (i * 72 - 90) * Math.PI / 180;
              const x = cx + radius * Math.cos(a);
              const y = cy + radius * Math.sin(a);
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="42" fill={`${step.color}22`} stroke={step.color} strokeWidth="1.5" />
                  <text x={x} y={y - 8} textAnchor="middle" fontSize="20">{step.icon}</text>
                  <text x={x} y={y + 10} textAnchor="middle" fill="#f1f5f9" fontSize="10" fontWeight="700">{step.title}</text>
                </g>
              );
            })}

            {/* Arrow indicators */}
            {t.steps.map((step, i) => {
              const a = ((i * 72 + 36) - 90) * Math.PI / 180;
              const x = cx + (radius + 20) * Math.cos(a);
              const y = cy + (radius + 20) * Math.sin(a);
              return (
                <text key={i} x={x} y={y} textAnchor="middle" fill={step.color} fontSize="14" opacity="0.6">→</text>
              );
            })}
          </svg>
        </div>
      </div>
    </SlideWrapper>
  );
}
