import Slide01_Title from '../slides/Slide01_Title';
import Slide02_Philosophy from '../slides/Slide02_Philosophy';
import Slide03_Roadmap from '../slides/Slide03_Roadmap';
import Slide04_VibeCodingLoop from '../slides/Slide04_VibeCodingLoop';
import Slide05_DevEnv from '../slides/Slide05_DevEnv';
import Slide06_Context from '../slides/Slide06_Context';
import Slide07_SkillsMCP from '../slides/Slide07_SkillsMCP';
import Slide08_TechTree from '../slides/Slide08_TechTree';
import Slide09_CloudCost from '../slides/Slide09_CloudCost';
import Slide10_Architecture from '../slides/Slide10_Architecture';
import Slide11_Security from '../slides/Slide11_Security';
import { cusdisCourse } from './cusdisCourse';

const vibeCodingCourse = {
  slug: 'vibe-coding-masterclass',
  title: '바이브 코딩 실전 마스터클래스',
  subtitle: '아이디어에서 MVP 배포까지 4시간 설계 루프',
  description: 'Claude Code 중심의 실전 MVP 제작 흐름을 압축한 메인 강의입니다. 개발 환경, 컨텍스트 분리, 배포 판단까지 한 번에 훑습니다.',
  status: 'live',
  statusLabel: 'Available now',
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

export const courseRegistry = [vibeCodingCourse, cusdisCourse];

export function getCourseBySlug(courseSlug) {
  return courseRegistry.find((course) => course.slug === courseSlug);
}
