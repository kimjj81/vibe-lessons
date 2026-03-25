import SlideWrapper from '../components/SlideWrapper';
import GradientText from '../components/GradientText';
import { useLocale } from '../i18n/LocaleContext';

export default function Slide11_Security() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '프로덕션 보안 체크리스트',
      subtitle: '배포 전 반드시 확인해야 할 보안 사항',
      sections: [
        {
          title: '인증 & 접근제어',
          icon: '🔐',
          color: '#7c3aed',
          items: [
            { text: 'JWT 토큰 만료 시간 설정', done: true },
            { text: 'Row Level Security (RLS) 활성화', done: true },
            { text: 'API 키 환경변수 처리', done: true },
            { text: 'CORS 화이트리스트 설정', done: true },
            { text: 'Rate Limiting 구현', done: false },
          ],
        },
        {
          title: '데이터 보호',
          icon: '🛡️',
          color: '#2563eb',
          items: [
            { text: 'HTTPS 강제 적용', done: true },
            { text: '민감 데이터 암호화 저장', done: true },
            { text: 'SQL Injection 방지 (ORM 사용)', done: true },
            { text: 'XSS 방지 (입력 검증)', done: false },
            { text: 'CSRF 토큰 적용', done: false },
          ],
        },
        {
          title: '운영 보안',
          icon: '🔍',
          color: '#06b6d4',
          items: [
            { text: '에러 로그 모니터링', done: true },
            { text: '의존성 취약점 스캔', done: false },
            { text: '정기적 보안 감사', done: false },
            { text: '백업 & 복구 계획', done: true },
            { text: '인시던트 대응 절차', done: false },
          ],
        },
      ],
      closingTitle: '바이브 코딩으로 MVP를 완성하셨습니다!',
      closingBody: '보안 체크리스트를 완료하고 프로덕션에 자신있게 배포하세요',
    },
    en: {
      title: 'Production security checklist',
      subtitle: 'What to verify before you call the deployment real',
      sections: [
        {
          title: 'Auth & access control',
          icon: '🔐',
          color: '#7c3aed',
          items: [
            { text: 'Set JWT expiration windows', done: true },
            { text: 'Enable Row Level Security (RLS)', done: true },
            { text: 'Move API keys into environment variables', done: true },
            { text: 'Restrict CORS with an allowlist', done: true },
            { text: 'Add rate limiting', done: false },
          ],
        },
        {
          title: 'Data protection',
          icon: '🛡️',
          color: '#2563eb',
          items: [
            { text: 'Force HTTPS', done: true },
            { text: 'Encrypt sensitive data at rest', done: true },
            { text: 'Prevent SQL injection via ORM patterns', done: true },
            { text: 'Block XSS with input validation', done: false },
            { text: 'Add CSRF protection', done: false },
          ],
        },
        {
          title: 'Operational security',
          icon: '🔍',
          color: '#06b6d4',
          items: [
            { text: 'Monitor error logs', done: true },
            { text: 'Scan dependencies for vulnerabilities', done: false },
            { text: 'Run recurring security reviews', done: false },
            { text: 'Prepare backup and recovery plans', done: true },
            { text: 'Define incident response steps', done: false },
          ],
        },
      ],
      closingTitle: 'You now have an MVP built through vibe coding.',
      closingBody: 'Finish the security checklist and ship with a lot more confidence.',
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={11}>
      <div style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '40px', fontSize: '1.1rem' }}>
          {t.subtitle}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {t.sections.map((section) => (
            <div key={section.title} className="card" style={{ borderColor: `${section.color}44` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '1.5rem' }}>{section.icon}</span>
                <h3 style={{ fontWeight: 700, color: section.color, fontSize: '1rem' }}>{section.title}</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {section.items.map((item) => (
                  <li key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{
                      flexShrink: 0, width: '18px', height: '18px', borderRadius: '4px',
                      background: item.done ? `${section.color}33` : 'transparent',
                      border: `2px solid ${item.done ? section.color : '#475569'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '10px', color: section.color, marginTop: '1px',
                    }}>
                      {item.done ? '✓' : ''}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: item.done ? '#e2e8f0' : '#64748b', lineHeight: 1.4 }}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', textAlign: 'center', padding: '20px 32px', background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.15))', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🎉</div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#f1f5f9', marginBottom: '6px' }}>
            {t.closingTitle}
          </div>
          <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            {t.closingBody}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
