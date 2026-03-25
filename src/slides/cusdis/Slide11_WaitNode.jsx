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
      subtitle: '댓글에 즉각적으로 반응하면 너무 기계처럼 보일 수 있어요.\n10분에서 1시간 사이의 랜덤 지연을 주면 사람이 직접 답하는 것 같은 자연스러운 느낌을 줍니다.',
      caption: 'Wait 노드에서 랜덤 지연 설정하기',
      waitTitle: '랜덤 지연을 위한 수식 (Expression)',
      notes: [
        "`Amount` 필드에서 'Expression' 모드를 선택한 뒤 수식을 입력해 주세요.",
        '입력된 수식은 10분에서 60분 사이의 랜덤한 값을 생성합니다.',
        "주의! 시간 단위(Unit)를 반드시 'Minutes'로 설정해야 합니다. 초(Seconds)로 하시면 너무 빨리 답하게 돼요!",
        '댓글 유입이 활발한 블로그라면 지연 시간 범위를 조금 더 넓게 잡아도 좋습니다.',
      ],
    },
    en: {
      kicker: 'n8n workflow · 5 / 6',
      title: 'Wait Node — random delay for a natural feel',
      subtitle: 'Replying instantly feels robotic.\nA random delay makes the response feel like it came from a real person.',
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
