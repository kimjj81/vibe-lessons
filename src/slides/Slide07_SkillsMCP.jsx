import SlideWrapper from '../components/SlideWrapper';
import GradientText from '../components/GradientText';
import { useLocale } from '../i18n/LocaleContext';

export default function Slide07_SkillsMCP() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: 'Skills vs MCP 매트릭스',
      subtitle: '언제 무엇을 선택해야 하는가',
      aspectLabel: '항목',
      skillsLabel: '💡 Skills (슬래시 커맨드)',
      mcpLabel: '🔌 MCP 서버',
      rows: [
        { aspect: '위치', skills: '~/.claude/commands/', mcp: 'MCP 서버 (별도 프로세스)' },
        { aspect: '언어', skills: 'Markdown + 프롬프트', mcp: 'TypeScript / Python' },
        { aspect: '실행', skills: 'Claude 내부', mcp: '외부 프로세스 호출' },
        { aspect: '상태', skills: '무상태', mcp: '상태 유지 가능' },
        { aspect: '도구', skills: '기본 Claude 도구', mcp: '커스텀 도구 정의' },
        { aspect: '통합', skills: '단순 워크플로우', mcp: '외부 API/DB 연동' },
        { aspect: '난이도', skills: '⭐ 쉬움', mcp: '⭐⭐⭐ 복잡함' },
      ],
      skillsTipLabel: '✅ Skills 사용 시:',
      skillsTipBody: '반복적인 Claude 워크플로우 자동화, 빠른 프로토타이핑',
      mcpTipLabel: '✅ MCP 사용 시:',
      mcpTipBody: '외부 API 연동, 데이터베이스 직접 접근, 커스텀 도구 필요 시',
    },
    en: {
      title: 'Skills vs MCP matrix',
      subtitle: 'When to choose which tool',
      aspectLabel: 'Aspect',
      skillsLabel: '💡 Skills (slash commands)',
      mcpLabel: '🔌 MCP servers',
      rows: [
        { aspect: 'Location', skills: '~/.claude/commands/', mcp: 'MCP server (separate process)' },
        { aspect: 'Language', skills: 'Markdown + prompts', mcp: 'TypeScript / Python' },
        { aspect: 'Execution', skills: 'Inside Claude', mcp: 'Calls an external process' },
        { aspect: 'State', skills: 'Stateless', mcp: 'Can maintain state' },
        { aspect: 'Tools', skills: 'Built-in Claude tools', mcp: 'Custom tool definitions' },
        { aspect: 'Integration', skills: 'Simple workflow automation', mcp: 'External API / DB integration' },
        { aspect: 'Complexity', skills: '⭐ Easy', mcp: '⭐⭐⭐ More complex' },
      ],
      skillsTipLabel: '✅ Use Skills when:',
      skillsTipBody: 'You want repeatable Claude workflows and fast prototyping',
      mcpTipLabel: '✅ Use MCP when:',
      mcpTipBody: 'You need external APIs, direct DB access, or custom tools',
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={7}>
      <div style={{ width: '100%', maxWidth: '1000px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '40px', fontSize: '1.1rem' }}>
          {t.subtitle}
        </p>

        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.5fr', background: 'rgba(124,58,237,0.15)', padding: '16px 24px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontWeight: 700, color: '#94a3b8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.aspectLabel}</div>
            <div style={{ fontWeight: 700, color: '#c4b5fd', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {t.skillsLabel}
            </div>
            <div style={{ fontWeight: 700, color: '#67e8f9', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {t.mcpLabel}
            </div>
          </div>

          {t.rows.map((row, i) => (
            <div key={row.aspect} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr 1.5fr',
              padding: '14px 24px',
              borderBottom: i < t.rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
            }}>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 600 }}>{row.aspect}</div>
              <div style={{ color: '#e2e8f0', fontSize: '0.9rem', fontFamily: row.aspect === 'Language' || row.aspect === 'Location' || row.aspect === '언어' || row.aspect === '위치' ? 'Space Grotesk' : 'inherit' }}>
                {row.skills}
              </div>
              <div style={{ color: '#e2e8f0', fontSize: '0.9rem', fontFamily: row.aspect === 'Language' || row.aspect === 'Location' || row.aspect === '언어' || row.aspect === '위치' ? 'Space Grotesk' : 'inherit' }}>
                {row.mcp}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="card" style={{ borderColor: 'rgba(124,58,237,0.3)', padding: '16px 20px' }}>
            <span style={{ color: '#c4b5fd', fontWeight: 700 }}>{t.skillsTipLabel} </span>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{t.skillsTipBody}</span>
          </div>
          <div className="card" style={{ borderColor: 'rgba(6,182,212,0.3)', padding: '16px 20px' }}>
            <span style={{ color: '#67e8f9', fontWeight: 700 }}>{t.mcpTipLabel} </span>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{t.mcpTipBody}</span>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
