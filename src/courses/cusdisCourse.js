import Slide01_CusdisIntro from '../slides/cusdis/Slide01_CusdisIntro';
import Slide02_WhyCusdis from '../slides/cusdis/Slide02_WhyCusdis';
import Slide03_SystemFlow from '../slides/cusdis/Slide03_SystemFlow';
import Slide04_N8nHosting from '../slides/cusdis/Slide04_N8nHosting';
import Slide05_CloudflareTunnel from '../slides/cusdis/Slide05_CloudflareTunnel';
import Slide06_CusdisWebhook from '../slides/cusdis/Slide06_CusdisWebhook';
import Slide07_WorkflowWebhook from '../slides/cusdis/Slide07_WorkflowWebhook';
import Slide08_GeminiAnalysis from '../slides/cusdis/Slide08_GeminiAnalysis';
import Slide09_CodeIf from '../slides/cusdis/Slide09_CodeIf';
import Slide11_WaitNode from '../slides/cusdis/Slide11_WaitNode';
import Slide12_HttpRequestPublish from '../slides/cusdis/Slide12_HttpRequestPublish';
import Slide13_Outro from '../slides/cusdis/Slide13_Outro';

export const cusdisCourse = {
  slug: 'cusdis',
  title: {
    ko: 'Cusdis 자동화',
    en: 'Cusdis Automation',
  },
  subtitle: {
    ko: 'n8n과 AI로 완성하는 스팸 필터링 & 댓글 자동 승인',
    en: 'Spam filtering and auto-approval with n8n',
  },
  description: {
    ko: '댓글 서비스인 Cusdis를 n8n으로 자동화해 볼까요? 매번 직접 승인해야 했던 번거로움을 해결하고, AI(Gemini)로 스팸을 골라내어 자동으로 관리하는 실전 워크플로우를 처음부터 끝까지 함께 만들어봅니다.',
    en: 'Cusdis is a tool for adding comments to your website. In this course, we\'ll learn how to improve operational efficiency by implementing automated approvals and spam handling using n8n and Gemini AI. We\'ll connect everything from webhooks to automated replies in one complete workflow.',
  },
  status: 'live',
  statusLabel: {
    ko: '지금 시청 가능',
    en: 'Available now',
  },
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
  slides: [
    Slide01_CusdisIntro,
    Slide02_WhyCusdis,
    Slide03_SystemFlow,
    Slide04_N8nHosting,
    Slide05_CloudflareTunnel,
    Slide06_CusdisWebhook,
    Slide07_WorkflowWebhook,
    Slide08_GeminiAnalysis,
    Slide09_CodeIf,
    Slide11_WaitNode,
    Slide12_HttpRequestPublish,
    Slide13_Outro,
  ],
};
