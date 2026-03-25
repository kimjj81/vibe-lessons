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
    ko: 'Cusdis 자동화',
    en: 'Cusdis Automation',
  },
  subtitle: {
    ko: 'n8n을 이용한 스팸 필터링 및 자동 승인 하기',
    en: 'Spam filtering and auto-approval with n8n',
  },
  description: {
    ko: 'Cusdis는 홈페이지에 댓글을 설치 할 수 있는 프로그램이다. 승인된 댓글만 노출하여 스팸 댓글을 관리할 수 있다. 그러나 꼭 승인을 해야 노출되는 단점도 있다. n8n 을 통해 승인 자동화와 스팸 처리를 도입하여 운영 효율화를 배워보자. Cusdis webhook, n8n 워크플로, Gemini 분류, approve / reply 자동화를 한 강의 안에서 끝까지 연결합니다.',
    en: 'Cusdis is a tool for adding comments to your website. It allows you to manage spam by showing only approved comments. However, it requires manual approval for every comment. In this course, we\'ll learn how to improve operational efficiency by implementing automated approvals and spam handling using n8n. We\'ll connect everything from Cusdis webhooks and n8n workflows to Gemini classification and automated approve / reply handling.',
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
