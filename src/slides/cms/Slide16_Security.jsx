import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide16_Security() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '보안 체크리스트',
      subtitle: 'CMS는 입력·권한·스크립트·미디어 등 공격 표면이 넓습니다',
      intro: '보안 체크리스트는 외워야 할 목록이 아닙니다. "입력값이 위험한가?", "권한이 너무 넓지 않은가?", "외부 스크립트를 믿어도 되는가?"를 점검하는 질문표입니다.',
      terms: [
        { label: 'XSS', desc: '악성 스크립트가 다른 사용자 브라우저에서 실행되는 문제' },
        { label: 'CSRF', desc: '로그인된 사용자가 원하지 않는 요청을 보내게 만드는 문제' },
        { label: 'CSP', desc: '어떤 스크립트를 실행해도 되는지 브라우저에 규칙을 주는 장치' },
        { label: 'SRI', desc: '외부 파일이 원래 파일과 같은지 해시로 확인하는 장치' },
      ],
      checkHeaders: ['영역', '체크항목', '수준'],
      checks: [
        { area: '인증', check: '비밀번호 해시, MFA(옵션), 로그인 시도 제한', level: 'critical' },
        { area: '인가 (RBAC)', check: 'scope(own/any), 관리자 기능 분리', level: 'critical' },
        { area: 'XSS', check: '출력 인코딩, HTML Sanitization, 에디터 허용 태그 제한', level: 'critical' },
        { area: 'CSRF', check: '상태 변경 요청에 CSRF 토큰/Origin 검사', level: 'high' },
        { area: 'CSP', check: 'script-src를 nonce/hash 기반으로 엄격화, 인라인 차단', level: 'high' },
        { area: 'SRI', check: '외부 스크립트에 integrity 속성 적용', level: 'high' },
        { area: '비밀 관리', check: 'DB/토큰 키를 Secret Manager로 분리, 코드에 비밀 금지', level: 'critical' },
        { area: '감사로그', check: '발행·롤백·권한 변경은 반드시 AuditLog 기록', level: 'high' },
      ],
    },
    en: {
      title: 'Security Checklist',
      subtitle: 'CMS has a wide attack surface: user input, permissions, scripts, media',
      intro: 'The checklist is not a memorization list. It is a question checklist: "Is this input dangerous?", "Are permissions too broad?", "Can I trust this external script?"',
      terms: [
        { label: 'XSS', desc: 'Malicious scripts executing in another user\'s browser' },
        { label: 'CSRF', desc: 'Tricking a logged-in user into sending unwanted requests' },
        { label: 'CSP', desc: 'Rules telling the browser which scripts are allowed to run' },
        { label: 'SRI', desc: 'Hash-based verification that external files haven\'t been tampered with' },
      ],
      checkHeaders: ['Area', 'Check', 'Level'],
      checks: [
        { area: 'Authentication', check: 'Password hashing, MFA (optional), login attempt limiting', level: 'critical' },
        { area: 'Authorization (RBAC)', check: 'scope (own/any), admin function separation', level: 'critical' },
        { area: 'XSS', check: 'Output encoding, HTML Sanitization, editor allowed-tag restriction', level: 'critical' },
        { area: 'CSRF', check: 'CSRF token / Origin check on state-changing requests', level: 'high' },
        { area: 'CSP', check: 'Strict script-src with nonce/hash, block inline scripts', level: 'high' },
        { area: 'SRI', check: 'Apply integrity attribute to external scripts', level: 'high' },
        { area: 'Secret Mgmt', check: 'Separate DB/token keys via Secret Manager, no secrets in code', level: 'critical' },
        { area: 'Audit Log', check: 'Always log publish, rollback, and permission changes', level: 'high' },
      ],
    },
  };
  const t = copy[locale];

  const levelStyle = (level) => ({
    display: 'inline-block', padding: '2px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700,
    background: level === 'critical' ? 'rgba(239,68,68,0.18)' : 'rgba(245,158,11,0.18)',
    color: level === 'critical' ? '#f87171' : '#fbbf24',
    border: `1px solid ${level === 'critical' ? 'rgba(239,68,68,0.35)' : 'rgba(245,158,11,0.35)'}`,
  });

  return (
    <SlideWrapper slideNumber={17}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }} data-prevent-swipe="" data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '12px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '16px', fontSize: '1rem' }}>
          {t.subtitle}
        </p>
        <p style={{ color: '#f0f9ff', fontSize: '0.85rem', lineHeight: 1.6, textAlign: 'center', marginBottom: '24px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.intro}
        </p>

        {/* 4 term cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '24px' }}>
          {t.terms.map((term) => (
            <div key={term.label} className="card" style={{ padding: '12px 16px' }}>
              <div style={{ fontWeight: 700, color: '#0ea5e9', fontSize: '0.9rem', marginBottom: '4px' }}>{term.label}</div>
              <div style={{ color: '#f0f9ff', fontSize: '0.78rem', lineHeight: 1.4 }}>{term.desc}</div>
            </div>
          ))}
        </div>

        {/* Checklist table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem' }}>
            <thead>
              <tr>
                {t.checkHeaders.map((h, i) => (
                  <th key={h} style={{
                    padding: '10px 12px', textAlign: 'left', fontWeight: 700,
                    color: '#7dd3fc',
                    borderBottom: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.04)',
                    width: i === 1 ? '60%' : i === 2 ? '80px' : 'auto',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.checks.map((row, ri) => (
                <tr key={ri}>
                  <td style={{ padding: '8px 12px', fontWeight: 600, color: '#f0f9ff', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{row.area}</td>
                  <td style={{ padding: '8px 12px', color: '#f0f9ff', lineHeight: 1.4, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{row.check}</td>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={levelStyle(row.level)}>{row.level}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SlideWrapper>
  );
}
