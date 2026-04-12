import { semverFreeformSlides } from '../slides/semver-release-freeform/index.jsx';

export const semverReleaseAutomationCourse = {
  slug: 'semver-github-release-llm-homepage-automation',
  title: {
    ko: 'SemVer Release 자동화',
    en: 'SemVer Release Automation',
  },
  subtitle: {
    ko: 'GitHub Release에서 홈페이지 반영까지 잇는 실전 배포 파이프라인',
    en: 'A practical release pipeline from GitHub Release to homepage sync',
  },
  description: {
    ko: 'SemVer 태그 판별, draft release, generated notes, 선택적 LLM polishing, homepage sync, Astro import까지를 하나의 공개 릴리스 파이프라인으로 연결하는 강의입니다.',
    en: 'A hands-on course on connecting SemVer tags, draft releases, generated notes, optional LLM polishing, homepage sync, and Astro import into one public release pipeline.',
  },
  status: 'live',
  theme: {
    '--grad-start': '#06b6d4',
    '--grad-mid': '#14b8a6',
    '--grad-end': '#84cc16',
    '--bg-dark': '#061014',
    '--bg-card': 'rgba(236, 253, 245, 0.06)',
    '--bg-card-hover': 'rgba(236, 253, 245, 0.1)',
    '--text-main': '#ecfeff',
    '--text-muted': '#99f6e4',
    '--border': 'rgba(45, 212, 191, 0.18)',
    '--shadow': '0 32px 80px rgba(3, 11, 15, 0.46)',
  },
  reveal: {
    background: '#041116',
  },
  slides: semverFreeformSlides,
};
