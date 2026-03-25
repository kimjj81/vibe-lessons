import Slide01_Title from '../slides/vibe-coding/Slide01_Title';
import Slide02_Philosophy from '../slides/vibe-coding/Slide02_Philosophy';
import Slide03_Roadmap from '../slides/vibe-coding/Slide03_Roadmap';
import Slide04_VibeCodingLoop from '../slides/vibe-coding/Slide04_VibeCodingLoop';
import Slide05_DevEnv from '../slides/vibe-coding/Slide05_DevEnv';
import Slide06_Context from '../slides/vibe-coding/Slide06_Context';
import Slide07_SkillsMCP from '../slides/vibe-coding/Slide07_SkillsMCP';
import Slide08_TechTree from '../slides/vibe-coding/Slide08_TechTree';
import Slide09_CloudCost from '../slides/vibe-coding/Slide09_CloudCost';
import Slide10_Architecture from '../slides/vibe-coding/Slide10_Architecture';
import Slide11_Security from '../slides/vibe-coding/Slide11_Security';

export const vibeCodingCourse = {
  slug: 'vibe-coding-masterclass',
  title: {
    ko: '바이브 코딩 실전 마스터클래스',
    en: 'Vibe Coding MVP Masterclass',
  },
  subtitle: {
    ko: '아이디어에서 MVP 배포까지 4시간 설계 루프',
    en: 'A 4-hour loop from idea to a shipped MVP',
  },
  description: {
    ko: 'Claude Code 중심의 실전 MVP 제작 흐름을 압축한 메인 강의입니다. 개발 환경, 컨텍스트 분리, 배포 판단까지 한 번에 훑습니다.',
    en: 'The core lecture distills a practical MVP workflow around Claude Code, covering environment setup, context separation, and deployment decisions in one run.',
  },
  status: 'live',
  statusLabel: {
    ko: '지금 시청 가능',
    en: 'Available now',
  },
  theme: {
    '--grad-start': '#7c3aed',
    '--grad-mid': '#2563eb',
    '--grad-end': '#06b6d4',
    '--bg-dark': '#0a0a1a',
    '--bg-card': 'rgba(255, 255, 255, 0.06)',
    '--bg-card-hover': 'rgba(255, 255, 255, 0.1)',
    '--text-main': '#f1f5f9',
    '--text-muted': '#94a3b8',
    '--border': 'rgba(255, 255, 255, 0.1)',
    '--shadow': '0 4px 32px rgba(0, 0, 0, 0.4)',
  },
  slides: [
    Slide01_Title,
    Slide02_Philosophy,
    Slide03_Roadmap,
    Slide04_VibeCodingLoop,
    Slide05_DevEnv,
    Slide06_Context,
    Slide07_SkillsMCP,
    Slide08_TechTree,
    Slide09_CloudCost,
    Slide10_Architecture,
    Slide11_Security,
  ],
};
