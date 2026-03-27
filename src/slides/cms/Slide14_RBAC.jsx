import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide14_RBAC() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '역할 기반 권한 (RBAC)',
      subtitle: '누가 무엇을 할 수 있는가',
      concepts: [
        { label: 'Role (역할)', color: '#0ea5e9', desc: '"이 사람은 누구인가?" — 관리자, 작성자, 일반 사용자' },
        { label: 'Permission (권한)', color: '#6366f1', desc: '"이 사람이 무엇을 할 수 있는가?" — 글 작성, 발행, 삭제' },
        { label: 'RBAC', color: '#8b5cf6', desc: '역할에 따라 권한을 묶어서 주는 방식' },
      ],
      colHeaders: ['리소스/행위', 'Guest', 'User', 'Author+Publisher', 'Admin'],
      rows: [
        ['Content 읽기(공개)', '✅', '✅', '✅', '✅'],
        ['Content 생성 (draft)', '❌', '옵션', '✅(own)', '✅(any)'],
        ['Content 수정', '❌', '❌', '✅(own)', '✅(any)'],
        ['Content 발행', '❌', '❌', '✅', '✅'],
        ['Content 롤백', '❌', '❌', '✅(권한부여)', '✅'],
        ['Comment 작성', '✅', '✅', '✅', '✅'],
        ['Comment 승인/삭제', '❌', '❌', '✅(권한부여)', '✅'],
        ['User/Role 관리', '❌', '❌', '❌', '✅'],
      ],
      note: '권한 세분화는 운영 안정성을 높이지만 복잡도도 증가합니다. 초기에는 own/any 구분만으로 시작하세요.',
    },
    en: {
      title: 'Role-Based Access Control (RBAC)',
      subtitle: 'Who can do what',
      concepts: [
        { label: 'Role', color: '#0ea5e9', desc: '"Who is this person?" — admin, author, regular user' },
        { label: 'Permission', color: '#6366f1', desc: '"What can this person do?" — create post, publish, delete' },
        { label: 'RBAC', color: '#8b5cf6', desc: 'Bundling permissions by role' },
      ],
      colHeaders: ['Resource/Action', 'Guest', 'User', 'Author+Publisher', 'Admin'],
      rows: [
        ['Content read (public)', '✅', '✅', '✅', '✅'],
        ['Content create (draft)', '❌', 'Optional', '✅(own)', '✅(any)'],
        ['Content edit', '❌', '❌', '✅(own)', '✅(any)'],
        ['Content publish', '❌', '❌', '✅', '✅'],
        ['Content rollback', '❌', '❌', '✅(granted)', '✅'],
        ['Comment create', '✅', '✅', '✅', '✅'],
        ['Comment approve/delete', '❌', '❌', '✅(granted)', '✅'],
        ['User/Role management', '❌', '❌', '❌', '✅'],
      ],
      note: 'Fine-grained permissions increase stability but also complexity. Start with just own/any distinction.',
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={15}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }} data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '12px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '24px', fontSize: '1rem' }}>
          {t.subtitle}
        </p>

        {/* 3 concept cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '24px' }}>
          {t.concepts.map((c) => (
            <div key={c.label} className="card" style={{ borderColor: `${c.color}44`, padding: '14px 18px' }}>
              <div style={{ fontWeight: 700, color: c.color, fontSize: '0.88rem', marginBottom: '6px' }}>{c.label}</div>
              <div style={{ color: '#f0f9ff', fontSize: '0.82rem', lineHeight: 1.4 }}>{c.desc}</div>
            </div>
          ))}
        </div>

        {/* Permission matrix table */}
        <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem' }}>
            <thead>
              <tr>
                {t.colHeaders.map((h, i) => (
                  <th key={h} style={{
                    padding: '10px 12px', textAlign: i === 0 ? 'left' : 'center', fontWeight: 700,
                    color: i === 0 ? '#7dd3fc' : '#f0f9ff',
                    borderBottom: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.04)',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{
                      padding: '8px 12px', lineHeight: 1.4,
                      textAlign: ci === 0 ? 'left' : 'center',
                      color: cell === '✅' ? '#22c55e' : cell === '❌' ? '#ef444499' : ci === 0 ? '#7dd3fc' : '#f0f9ff',
                      fontWeight: ci === 0 ? 600 : 400,
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div style={{
          padding: '16px 24px', borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.12))',
          border: '1px solid rgba(99,102,241,0.3)',
          textAlign: 'center',
        }}>
          <span style={{ color: '#f0f9ff', fontSize: '0.88rem', fontWeight: 600, lineHeight: 1.6 }}>
            {t.note}
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
}
