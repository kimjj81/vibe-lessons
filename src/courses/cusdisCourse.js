import Slide01_CusdisIntro from '../slides/cusdis/Slide01_CusdisIntro';
import Slide02_WhyCusdis from '../slides/cusdis/Slide02_WhyCusdis';
import Slide03_SystemFlow from '../slides/cusdis/Slide03_SystemFlow';
import Slide04_N8nHosting from '../slides/cusdis/Slide04_N8nHosting';
import Slide05_CloudflareTunnel from '../slides/cusdis/Slide05_CloudflareTunnel';
import Slide06_CusdisWebhook from '../slides/cusdis/Slide06_CusdisWebhook';
import Slide07_WorkflowWebhook from '../slides/cusdis/Slide07_WorkflowWebhook';
import Slide08_GeminiAnalysis from '../slides/cusdis/Slide08_GeminiAnalysis';
import Slide09_CodeIf from '../slides/cusdis/Slide09_CodeIf';
import Slide10_IfNode from '../slides/cusdis/Slide10_IfNode';
import Slide11_WaitNode from '../slides/cusdis/Slide11_WaitNode';
import Slide12_HttpRequestPublish from '../slides/cusdis/Slide12_HttpRequestPublish';
import Slide13_Outro from '../slides/cusdis/Slide13_Outro';

export const cusdisCourse = {
  slug: 'cusdis',
  title: {
    ko: 'Cusdis + n8n 댓글 자동화',
    en: 'Cusdis + n8n comment automation',
  },
  subtitle: {
    ko: '스팸 필터링과 자동 답글까지 이어지는 운영형 댓글 파이프라인',
    en: 'An operational comment pipeline with spam filtering and delayed auto-replies',
  },
  description: {
    ko: 'Cusdis webhook, n8n 워크플로, Gemini 분류, approve / reply 자동화를 한 강의 안에서 끝까지 연결합니다.',
    en: 'A complete walkthrough of Cusdis webhooks, n8n workflows, Gemini classification, and automated approve / reply handling.',
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
    Slide10_IfNode,
    Slide11_WaitNode,
    Slide12_HttpRequestPublish,
    Slide13_Outro,
  ],
};
