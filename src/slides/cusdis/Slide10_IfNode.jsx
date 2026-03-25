import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CusdisSlide, MediaCard } from './CusdisShared';

export default function Slide10_IfNode() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'n8n workflow · 4 / 6',
      title: 'If 노드 — 정상 댓글만 통과시키기',
      subtitle: 'Code 노드가 `ai_result` 값을 설정하면 If 노드가 NORMAL인 경우만 다음 단계로 흘려보낸다. SPAM이나 ERROR는 자동 차단된다.',
      caption: 'If 노드에서 NORMAL 조건 분기',
      conditionTitle: '설정 조건',
      conditionCode: '{{ $json.ai_result }}  ==  NORMAL',
      notes: [
        '타입: Expression, 값: `{{ $json.ai_result }}`',
        '비교: `is equal to` / 값: `NORMAL`',
        'SPAM 또는 ERROR는 true 분기를 통과하지 못해 댓글 처리가 중단된다',
        '나중에 SPAM 경로에 Slack 알림 등을 붙이기도 쉽다',
      ],
    },
    en: {
      kicker: 'n8n workflow · 4 / 6',
      title: 'If Node — only normal comments pass through',
      subtitle: 'The Code node sets `ai_result`. The If node gates the rest of the flow so only NORMAL comments proceed. SPAM and ERROR are silently stopped.',
      caption: 'If node branching on NORMAL',
      conditionTitle: 'Condition setup',
      conditionCode: '{{ $json.ai_result }}  ==  NORMAL',
      notes: [
        'Type: Expression, value: `{{ $json.ai_result }}`',
        'Operator: `is equal to`, target value: `NORMAL`',
        'SPAM or ERROR results never reach the true branch — the workflow just stops',
        'You can easily attach a Slack alert or logging step to the false branch later',
      ],
    },
  };
  const t = copy[locale];

  return (
    <CusdisSlide
      slideNumber={10}
      kicker={t.kicker}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="cusdis-balanced-layout">
        <MediaCard src={cusdisAssets.ifNode} alt={t.caption} title={t.caption} />
        <div className="cusdis-editorial-stack">
          <div className="cusdis-code-card">
            <div className="cusdis-code-title"><span>{t.conditionTitle}</span></div>
            <pre>{t.conditionCode}</pre>
          </div>
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
