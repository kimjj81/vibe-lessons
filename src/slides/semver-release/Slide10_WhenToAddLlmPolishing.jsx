import { useLocale } from '../../i18n/LocaleContext';
import { SectionCard, SemverSlide } from './SemverReleaseShared';

function DecisionBox({ title, items, color }) {
  return (
    <SectionCard color={color} title={title}>
      <div style={{ display: 'grid', gap: '10px' }}>
        {items.map((item) => (
          <div key={item} style={{ color: '#e6fffb', fontSize: '0.86rem', lineHeight: 1.5, paddingLeft: '10px', borderLeft: `2px solid ${color}66` }}>
            {item}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default function Slide10_WhenToAddLlmPolishing() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'llm',
      title: 'When to Add LLM Polishing',
      subtitle: 'LLM은 기본값이 아니라 선택적 후처리입니다. 판단 기준은 문체보다 운영 철학에 가깝습니다.',
      useTitle: '이럴 때는 넣을 가치가 있음',
      useItems: [
        'release page를 사용자-facing 문체로 통일하고 싶을 때',
        '한국어/영어 등 다국어 톤을 일정하게 맞추고 싶을 때',
        'generated notes 품질이 충분히 안정적이지 않을 때',
      ],
      skipTitle: '이럴 때는 generated notes만으로 충분',
      skipItems: [
        '내부 도구 또는 개발자 대상 프로젝트일 때',
        '추가 API 비용과 실패 지점을 늘리고 싶지 않을 때',
        'PR 제목과 라벨 규율이 이미 잘 잡혀 있을 때',
      ],
      failTitle: '무조건 지켜야 할 failure policy',
      failItems: [
        'LLM이 새로운 사실을 만들면 안 됩니다.',
        '버전 문자열, 링크, PR 번호, 식별자는 보존되어야 합니다.',
        'polishing 실패 시 fallback 또는 중단 정책을 명시적으로 정해야 합니다.',
      ],
    },
    en: {
      kicker: 'llm',
      title: 'When to Add LLM Polishing',
      subtitle: 'LLM polishing is not the default. The decision is closer to operating philosophy than to prose preference.',
      useTitle: 'When it is worth adding',
      useItems: [
        'When you want a more user-facing and consistent release-page voice',
        'When you want multilingual tone to stay structurally aligned',
        'When generated notes alone are not stable enough in quality',
      ],
      skipTitle: 'When generated notes are enough',
      skipItems: [
        'When the product is internal or developer-facing',
        'When you do not want to add API cost or another failure point',
        'When PR titles and labels already produce strong generated notes',
      ],
      failTitle: 'Failure policy that must stay explicit',
      failItems: [
        'The LLM must never invent new facts.',
        'Version strings, links, PR numbers, and identifiers must stay intact.',
        'You must choose whether failure falls back or blocks publish before you automate.',
      ],
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={10} subtitle={t.subtitle} title={t.title}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
        <DecisionBox color="#5eead4" items={t.useItems} title={t.useTitle} />
        <DecisionBox color="#f59e0b" items={t.skipItems} title={t.skipTitle} />
        <DecisionBox color="#fb7185" items={t.failItems} title={t.failTitle} />
      </div>
    </SemverSlide>
  );
}
