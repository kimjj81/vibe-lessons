import { useLocale } from '../../i18n/LocaleContext';
import { CusdisSlide, StepList } from './CusdisShared';

export default function Slide01_CusdisIntro() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'course 01',
      title: 'Cusdis + n8n 자동화 강의',
      subtitle: '댓글을 받고, 스팸을 걸러내고, 자동 답글까지 연결하는 실전 운영 플로우',
      promiseTitle: '이번 강의에서 만들 것',
      promiseItems: [
        'Cusdis Cloud로 댓글 시스템 시작하기',
        'n8n webhook으로 새 댓글 이벤트 받기',
        'Gemini로 스팸 여부와 답글 초안 판단하기',
        '일정 시간 대기 후 approve + reply 자동화하기',
      ],
      resultTitle: '강의 결과물',
      resultItems: [
        '한글/영문 프롬프트 예시',
        '실무형 JavaScript 후처리 코드',
        'Cloudflare Tunnel 기반 self-host 노출 방식',
        '운영 전환 시 꼭 체크할 publish / production URL 감각',
      ],
    },
    en: {
      kicker: 'course 01',
      title: 'Cusdis + n8n automation',
      subtitle: 'A practical workflow for receiving comments, filtering spam, and posting a delayed auto-reply',
      promiseTitle: 'What this course builds',
      promiseItems: [
        'Start with Cusdis Cloud as the comment layer',
        'Receive new comment events through an n8n webhook',
        'Use Gemini to classify spam and draft a reply',
        'Wait a bit, then approve and reply automatically',
      ],
      resultTitle: 'What you leave with',
      resultItems: [
        'Bilingual prompt examples',
        'Production-minded JavaScript post-processing',
        'A Cloudflare Tunnel exposure path for self-hosted n8n',
        'A clear sense of publish vs production URL behavior',
      ],
    },
  };
  const t = copy[locale];

  return (
    <CusdisSlide
      slideNumber={1}
      kicker={t.kicker}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="cusdis-hero-layout">
        <div>
          <div className="cusdis-panel-label">{t.promiseTitle}</div>
          <StepList items={t.promiseItems} />
        </div>
        <div>
          <div className="cusdis-panel-label">{t.resultTitle}</div>
          <StepList items={t.resultItems} />
        </div>
      </div>
    </CusdisSlide>
  );
}
