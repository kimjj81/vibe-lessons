import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide09_DecisionFramework() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '의사결정 프레임워크',
      subtitle: '누가 무엇을 책임지는가',
      ownsLabel: '소유 범위',
      tradeoffLabel: '트레이드오프',
      whenLabel: '적합 시나리오',
      approaches: [
        { name: 'Monolithic CMS', color: '#6366f1', owns: '기능·운영·보안·성능 튜닝을 한 시스템에서', tradeoff: '커스터마이징이 쌓이면 복잡도 증가', when: '웹사이트 중심·비개발자 운영·빠른 제작' },
        { name: 'Headless CMS', color: '#0ea5e9', owns: '콘텐츠 모델링·권한·워크플로는 CMS, 프론트엔드 경험·성능·배포는 팀이', tradeoff: '프론트엔드 개발 역량 필요', when: '멀티채널·API 우선·프론트엔드 자유도 필요' },
        { name: 'SaaS Embed', color: '#8b5cf6', owns: '기능 영역을 벤더에 위임, 보안·프라이버시·성능 통제는 팀이', tradeoff: '3rd-party JS 보안·비용·성능 관리 필요', when: '빠른 기능 도입·소규모팀·초기 단계' },
        { name: 'Self-hosted', color: '#22d3ee', owns: '통제권·데이터 주권을 팀이, 배포·관측·백업·업데이트도 팀이', tradeoff: '운영 역량(DevOps) 필수', when: '데이터 규제·프라이버시·장기 비용 통제' },
      ],
      coreMessage: '선택은 좋은 제품 vs 나쁜 제품이 아닙니다. 팀이 통제하고 싶은 영역과 외주 주고 싶은 영역의 경계를 어디에 두느냐의 문제입니다.',
    },
    en: {
      title: 'Decision Framework',
      subtitle: 'Who is responsible for what',
      ownsLabel: 'Ownership',
      tradeoffLabel: 'Tradeoff',
      whenLabel: 'Best for',
      approaches: [
        { name: 'Monolithic CMS', color: '#6366f1', owns: 'Features, ops, security, performance tuning all in one system', tradeoff: 'Complexity grows as customizations accumulate', when: 'Website-centric, non-developer ops, fast build priority' },
        { name: 'Headless CMS', color: '#0ea5e9', owns: 'CMS handles content modeling, auth, workflows; team handles frontend, perf, deployment', tradeoff: 'Requires frontend development capability', when: 'Multi-channel, API-first, frontend freedom needed' },
        { name: 'SaaS Embed', color: '#8b5cf6', owns: 'Feature domain delegated to vendor; team owns security, privacy, performance control', tradeoff: '3rd-party JS security, cost, and perf management required', when: 'Fast feature adoption, small team, early stage' },
        { name: 'Self-hosted', color: '#22d3ee', owns: 'Team owns control and data sovereignty, plus deployment, observability, backup, updates', tradeoff: 'Requires DevOps capability', when: 'Data regulations, privacy requirements, long-term cost control' },
      ],
      coreMessage: 'The choice is not good product vs bad product. It is about where to draw the line between what your team wants to control and what to delegate.',
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={10}>
      <div style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '12px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '32px', fontSize: '1rem' }}>
          {t.subtitle}
        </p>

        <div className="cms-decision-table" style={{ marginBottom: '28px' }}>
          <div className="cms-decision-header">
            <div className="cms-decision-header-label">{locale === 'ko' ? '구조' : 'Approach'}</div>
            <div className="cms-decision-header-label">{t.ownsLabel}</div>
            <div className="cms-decision-header-label">{t.tradeoffLabel}</div>
            <div className="cms-decision-header-label">{t.whenLabel}</div>
          </div>
          {t.approaches.map((a) => (
            <div key={a.name} className="cms-decision-row">
              <div className="cms-decision-name" style={{ color: a.color }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: a.color, boxShadow: `0 0 8px ${a.color}` }} />
                <span>{a.name}</span>
              </div>
              <div className="cms-decision-cell" data-label={t.ownsLabel}>{a.owns}</div>
              <div className="cms-decision-cell" data-label={t.tradeoffLabel}>{a.tradeoff}</div>
              <div className="cms-decision-cell" data-label={t.whenLabel}>{a.when}</div>
            </div>
          ))}
        </div>

        {/* Core message */}
        <div style={{
          padding: '20px 28px', borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.12))',
          border: '1px solid rgba(99,102,241,0.3)',
          textAlign: 'center',
        }}>
          <span style={{ color: '#f0f9ff', fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.6 }}>
            {t.coreMessage}
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
}
