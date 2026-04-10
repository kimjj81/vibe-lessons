import { useLocale } from '../../i18n/LocaleContext';
import { SemverSlide, TableBlock } from './SemverReleaseShared';

export default function Slide05_SecretsAndTokenBoundaries() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'tokens',
      title: 'Secrets and Token Boundaries',
      subtitle: '토큰 설명보다 더 중요한 것은 “어디까지 권한을 주지 않을 것인가”를 먼저 정하는 일입니다.',
      headers: ['항목', '쓰는 곳', '핵심 경계'],
      rows: [
        ['GITHUB_TOKEN', 'source repo / homepage repo 각자', '같은 저장소 안의 release 수정과 commit에만 사용'],
        ['BLOG_REPO_DISPATCH_TOKEN', 'source repo -> homepage repo dispatch', 'homepage repo 한정 + Actions write만 부여'],
        ['OPENAI_API_KEY', 'source repo polishing step', 'generated notes 후처리 전용, release truth를 대체하지 않음'],
        ['OPENAI_MODEL', 'repo variable 또는 input', '모델명 변경을 secret과 분리해 운영'],
      ],
      note: '필수 메시지: dispatch token은 cross-repo 실행 요청만 담당하고, homepage content 생성/commit은 homepage repo의 GITHUB_TOKEN이 맡아야 합니다.',
    },
    en: {
      kicker: 'tokens',
      title: 'Secrets and Token Boundaries',
      subtitle: 'More important than naming tokens is deciding what each one must not be allowed to do.',
      headers: ['Item', 'Used in', 'Boundary'],
      rows: [
        ['GITHUB_TOKEN', 'Within source repo / homepage repo', 'Use only for release edits or commits inside the same repository'],
        ['BLOG_REPO_DISPATCH_TOKEN', 'source repo -> homepage repo dispatch', 'Scope it to the homepage repo and Actions write only'],
        ['OPENAI_API_KEY', 'source repo polishing step', 'Only for post-processing generated notes, never as release truth'],
        ['OPENAI_MODEL', 'repo variable or workflow input', 'Keep model selection separate from secrets'],
      ],
      note: 'Required message: the dispatch token should request cross-repo execution only, while homepage content generation and commit should run on the homepage repo’s own GITHUB_TOKEN.',
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={5} subtitle={t.subtitle} title={t.title}>
      <div style={{ display: 'grid', gap: '18px' }}>
        <TableBlock headers={t.headers} rows={t.rows} />
        <div
          style={{
            padding: '16px 18px',
            borderRadius: '16px',
            background: 'rgba(6, 78, 59, 0.38)',
            border: '1px solid rgba(94, 234, 212, 0.14)',
            color: '#d1fae5',
            fontSize: '0.88rem',
            lineHeight: 1.55,
          }}
        >
          {t.note}
        </div>
      </div>
    </SemverSlide>
  );
}
