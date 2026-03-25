import SlideWrapper from '../components/SlideWrapper';
import GradientText from '../components/GradientText';
import { useLocale } from '../i18n/LocaleContext';

export default function Slide02_Philosophy() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '비전, 철학, 결과물',
      subtitle: '바이브 코딩이 지향하는 세 가지 핵심 축',
      cards: [
        {
          icon: '🎯',
          tag: 'Target',
          tagClass: 'tag-purple',
          title: '목표',
          items: [
            '4시간 내 완성 가능한 MVP',
            '배포 가능한 실제 서비스',
            '유지보수 가능한 코드베이스',
            '확장 가능한 아키텍처',
          ],
        },
        {
          icon: '🧭',
          tag: 'Philosophy',
          tagClass: 'tag-blue',
          title: '철학',
          items: [
            'AI는 도구, 판단은 인간',
            '가드레일 먼저, 속도 나중',
            '검증된 패턴 재사용',
            '최소주의 기술 스택',
          ],
        },
        {
          icon: '📦',
          tag: 'Output',
          tagClass: 'tag-cyan',
          title: '결과물',
          items: [
            '작동하는 프로덕트',
            '문서화된 아키텍처',
            'AGENTS.md + CLAUDE.md',
            '배포 파이프라인',
          ],
        },
      ],
    },
    en: {
      title: 'Vision, principles, deliverables',
      subtitle: 'The three pillars behind a strong vibe-coding workflow',
      cards: [
        {
          icon: '🎯',
          tag: 'Target',
          tagClass: 'tag-purple',
          title: 'Target',
          items: [
            'An MVP you can finish in four hours',
            'A service you can actually deploy',
            'A codebase you can maintain later',
            'An architecture you can grow from',
          ],
        },
        {
          icon: '🧭',
          tag: 'Philosophy',
          tagClass: 'tag-blue',
          title: 'Principles',
          items: [
            'AI is a tool, humans make the call',
            'Guardrails first, speed second',
            'Reuse proven patterns',
            'Keep the stack deliberately small',
          ],
        },
        {
          icon: '📦',
          tag: 'Output',
          tagClass: 'tag-cyan',
          title: 'Deliverables',
          items: [
            'A working product',
            'A documented architecture',
            'AGENTS.md + CLAUDE.md',
            'A deployment pipeline',
          ],
        },
      ],
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={2}>
      <div style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '48px', fontSize: '1.1rem' }}>
          {t.subtitle}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {t.cards.map((card) => (
            <div key={card.tag} className="card card-hover" style={{ transition: 'all 0.3s ease' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{card.icon}</div>
              <span className={`tag ${card.tagClass}`} style={{ marginBottom: '12px', display: 'inline-block' }}>
                {card.tag}
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px', color: '#f1f5f9' }}>
                {card.title}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {card.items.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    <span style={{ color: '#7c3aed', marginTop: '2px' }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
