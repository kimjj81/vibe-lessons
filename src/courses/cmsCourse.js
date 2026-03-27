import Slide01_Title from '../slides/cms/Slide01_Title';
import Slide02_Architecture from '../slides/cms/Slide02_Architecture';
import Slide03_ArchitecturePatterns from '../slides/cms/Slide03_ArchitecturePatterns';
import Slide03_Monolithic from '../slides/cms/Slide03_Monolithic';
import Slide04_MonolithicProducts from '../slides/cms/Slide04_MonolithicProducts';
import Slide05_Headless from '../slides/cms/Slide05_Headless';
import Slide06_HeadlessProducts from '../slides/cms/Slide06_HeadlessProducts';
import Slide07_SaaSVsSelfHost from '../slides/cms/Slide07_SaaSVsSelfHost';
import Slide08_SaaSEmbed from '../slides/cms/Slide08_SaaSEmbed';
import Slide09_DecisionFramework from '../slides/cms/Slide09_DecisionFramework';
import Slide10_Recipes from '../slides/cms/Slide10_Recipes';
import Slide11_ArchPatterns from '../slides/cms/Slide11_ArchPatterns';
import Slide12_CacheInvalidation from '../slides/cms/Slide12_CacheInvalidation';
import Slide13_DataModel from '../slides/cms/Slide13_DataModel';
import Slide14_RBAC from '../slides/cms/Slide14_RBAC';
import Slide15_Workflow from '../slides/cms/Slide15_Workflow';
import Slide16_Security from '../slides/cms/Slide16_Security';
import Slide17_Implementation from '../slides/cms/Slide17_Implementation';
import Slide18_MediaUploadDetail from '../slides/cms/Slide18_MediaUploadDetail';
import Slide18_Operations from '../slides/cms/Slide18_Operations';

export const cmsCourse = {
  slug: 'cms-architecture',
  title: { ko: 'CMS & 콘텐츠 인프라', en: 'CMS & Content Infrastructure' },
  subtitle: { ko: '4가지 접근으로 이해하는 콘텐츠 관리', en: '4 approaches to content management' },
  description: { ko: 'Monolithic, Headless, SaaS Embed 구조를 비교하고 실무 선택 기준을 정리합니다.', en: 'Compare Monolithic, Headless, and SaaS Embed architectures and understand how to choose.' },
  status: 'live',
  theme: {
    '--grad-start': '#0ea5e9',
    '--grad-mid': '#6366f1',
    '--grad-end': '#8b5cf6',
    '--bg-dark': '#080818',
    '--bg-card': 'rgba(255, 255, 255, 0.06)',
    '--bg-card-hover': 'rgba(255, 255, 255, 0.1)',
    '--text-main': '#f0f9ff',
    '--text-muted': '#7dd3fc',
    '--border': 'rgba(255, 255, 255, 0.1)',
    '--shadow': '0 4px 32px rgba(0, 0, 0, 0.4)',
  },
  slides: [Slide01_Title, Slide02_Architecture, Slide03_ArchitecturePatterns, Slide03_Monolithic, Slide04_MonolithicProducts, Slide05_Headless, Slide06_HeadlessProducts, Slide07_SaaSVsSelfHost, Slide08_SaaSEmbed, Slide09_DecisionFramework, Slide10_Recipes, Slide11_ArchPatterns, Slide12_CacheInvalidation, Slide13_DataModel, Slide14_RBAC, Slide15_Workflow, Slide16_Security, Slide17_Implementation, Slide18_MediaUploadDetail, Slide18_Operations],
};
