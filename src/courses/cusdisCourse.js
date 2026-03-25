import Slide01_CusdisIntro from '../slides/cusdis/Slide01_CusdisIntro';

export const cusdisCourse = {
  slug: 'cusdis',
  title: 'Cusdis',
  subtitle: '블로그 댓글을 얹는 가장 작은 운영형 코멘트 시스템',
  description: '정적 블로그나 개인 사이트에 가볍게 댓글을 붙이고 싶을 때, Cusdis를 어떤 기준으로 선택하고 어떻게 붙일지 설명할 예정인 강의입니다.',
  status: 'coming-soon',
  statusLabel: 'Coming soon',
  theme: {
    '--grad-start': '#f97316',
    '--grad-mid': '#ea580c',
    '--grad-end': '#fb7185',
    '--bg-dark': '#140c08',
    '--bg-card': 'rgba(255, 244, 237, 0.08)',
    '--bg-card-hover': 'rgba(255, 244, 237, 0.14)',
    '--text-main': '#fff7ed',
    '--text-muted': '#fdba74',
    '--border': 'rgba(251, 146, 60, 0.18)',
    '--shadow': '0 32px 80px rgba(20, 12, 8, 0.45)',
  },
  slides: [Slide01_CusdisIntro],
};
