import { useLocale } from '../../i18n/LocaleContext';
import { CusdisSlide, StepList } from './CusdisShared';

export default function Slide01_CusdisIntro() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'course 01',
      title: 'Cusdis + n8n 자동화 강의',
      subtitle: '댓글 관리의 번거로움을 해결해 보세요.\nAI로 스팸 필터링과 자동 답글까지 연결하는 실전 자동화 프로세스를 배워봅니다.',
      promiseTitle: '우리가 함께 만들 결과물',
      promiseItems: [
        'Cusdis Cloud로 가볍게 댓글 시스템 시작하기',
        'n8n Webhook으로 실시간 댓글 이벤트 받기',
        'Gemini AI로 스팸 판별 및 답글 초안 생성하기',
        '인간적인 템포의 대기 후 자동 승인 및 답글 게시',
      ],
      resultTitle: '이 강의를 통해 얻는 것들',
      resultItems: [
        '즉시 활용 가능한 한글/영문 AI 프롬프트 예시',
        '데이터를 정제하는 실무형 JavaScript 코드',
        'Cloudflare Tunnel을 활용한 안전한 외부 노출 방식',
        '운영 전환 시 필수 체크리스트 (Production URL 등)',
      ],
    },
    en: {
      kicker: 'course 01',
      title: 'Cusdis + n8n automation',
      subtitle: 'Learn the practical workflow for receiving comments and filtering spam.\nAutomate the entire process including drafting and posting replies.',
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
