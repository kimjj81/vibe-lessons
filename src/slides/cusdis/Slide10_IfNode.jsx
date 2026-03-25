import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CusdisSlide, MediaCard } from './CusdisShared';

export default function Slide10_IfNode() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'n8n workflow · 4 / 6',
      title: 'If 노드 — 정상 댓글만 쏙 골라내기',
      subtitle: 'AI의 판단을 믿고 성실히 일할 사람만 뽑는 단계예요.\n스팸은 여기서 가차 없이 걸러지고, 깨끗한 댓글만 다음 단계로 넘어갑니다.',
      caption: 'If 노드의 분기(Branch) 설정 화면',
      notes: [
        "Gemini의 판단 결과(`ai_result`)가 'NORMAL'인 경우만 추려냅니다.",
        '조건에 맞으면(True) 대기 및 답글 노드로 진행하고, 아니면(False) 조용히 멈춥니다.',
        "단순한 문자열 비교만으로도 강력한 필터링 시스템을 구축할 수 있어요.",
      ],
    },
    en: {
      kicker: 'n8n workflow · 4 / 6',
      title: 'If Node — filtering for normal comments',
      subtitle: 'The clean path only proceeds if Gemini says the message is "NORMAL".\nThis keeps spam from ever hitting your blog or causing delays in n8n.',
      caption: 'Configuring the If node branch conditions',
      notes: [
        "Check if `ai_result` exactly matches the string 'NORMAL'",
        'The workflow only continues to the Wait/Request nodes on the True path',
        'Simple logic prevents AI-generated spam from cluttering your blog',
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
        <div className="cusdis-callout">
          <ul className="cusdis-bullet-list">
            {t.notes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </CusdisSlide>
  );
}
