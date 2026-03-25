import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CodeCard, CusdisSlide, MediaCard } from './CusdisShared';

const waitExpression = '{{ Math.floor(Math.random() * (60 - 10 + 1)) + 10 }}';

export default function Slide11_WaitNode() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'n8n workflow · 5 / 6',
      title: 'Wait 노드 — 랜덤 지연으로 자연스러운 타이밍',
      subtitle: '바로 답글을 달면 너무 기계적으로 보일 수 있다. 10분~1시간 사이 랜덤 지연을 주면 사람이 직접 답변하는 것처럼 느껴진다.',
      caption: 'Wait 노드에서 랜덤 지연 설정',
      waitTitle: 'Wait Amount expression',
      notes: [
        '`Amount (Seconds)` 필드에 Expression 모드로 입력한다',
        '`Math.floor(Math.random() * (60 - 10 + 1)) + 10` → 10~60분 랜덤',
        '단위는 Minutes 로 설정해야 초 단위로 계산되지 않는다',
        '댓글이 많은 블로그라면 지연 범위를 더 늘려도 좋다',
      ],
    },
    en: {
      kicker: 'n8n workflow · 5 / 6',
      title: 'Wait Node — random delay for a natural feel',
      subtitle: 'Replying instantly feels robotic. A random delay between 10 and 60 minutes makes the response feel like it came from a real person.',
      caption: 'Random delay in the Wait node',
      waitTitle: 'Wait Amount expression',
      notes: [
        'Enter the expression in the `Amount (Seconds)` field using Expression mode',
        '`Math.floor(Math.random() * (60 - 10 + 1)) + 10` → 10 to 60 minutes randomly',
        'Set the unit to Minutes, not Seconds',
        'For high-volume blogs, you can widen the range further',
      ],
    },
  };
  const t = copy[locale];

  return (
    <CusdisSlide
      slideNumber={11}
      kicker={t.kicker}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="cusdis-balanced-layout">
        <MediaCard src={cusdisAssets.waitNode} alt={t.caption} title={t.caption} />
        <div className="cusdis-editorial-stack">
          <CodeCard title={t.waitTitle} code={waitExpression} />
          <div className="cusdis-callout">
            <ul className="cusdis-bullet-list tight">
              {t.notes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CusdisSlide>
  );
}
