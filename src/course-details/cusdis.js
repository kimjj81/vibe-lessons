import workflowOverview from '../assets/cusdis/SCR-20260325-workflow-overview.png';
import geminiSetting from '../assets/cusdis/SCR-20260325-gemini-setting.png';
import requestApprove from '../assets/cusdis/SCR-20260325-request-approve.png';

export const cusdisDetail = {
  slug: 'cusdis',
  hero: {
    title: {
      ko: 'Cusdis 자동화 강좌 소개',
      en: 'Cusdis Automation Overview',
    },
    subtitle: {
      ko: 'n8n과 Gemini를 이용해 댓글 승인, 스팸 필터링, 답글 자동화를 끝까지 연결합니다.',
      en: 'Build an end-to-end comment moderation flow with n8n, Gemini, and Cusdis.',
    },
    summary: {
      ko: '블로그 댓글 운영을 자동화하고 싶은 초급자를 위한 실전 수업입니다. webhook 연결부터 AI 분석, 조건 분기, 승인 API 호출, 운영 체크리스트까지 한 번의 워크플로우로 엮습니다.',
      en: 'A practical beginner-friendly course for automating blog comment operations, from webhook wiring and AI moderation to conditional routing, approval APIs, and ops checklists.',
    },
    deliverable: {
      ko: '결과물: 댓글이 들어오면 AI가 분석하고, 정상 댓글만 지연 후 자동 승인/답글하는 운영 워크플로우',
      en: 'Deliverable: a production-minded workflow that analyzes, delays, approves, and replies to safe comments automatically.',
    },
  },
  audience: [
    {
      ko: '댓글 운영을 매번 수동으로 처리하고 있어 자동화의 첫 사례가 필요한 개발자 또는 1인 제작자',
      en: 'Solo builders or developers who currently moderate comments manually and need a first automation project.',
    },
    {
      ko: 'n8n, webhook, API 개념을 실전 예제로 익히고 싶은 입문자',
      en: 'Beginners who want to learn n8n, webhooks, and APIs through a concrete workflow.',
    },
    {
      ko: 'AI를 단순 챗봇이 아니라 운영 자동화의 판단 엔진으로 써 보고 싶은 수강생',
      en: 'Learners who want to use AI as a decision engine inside operational automation rather than just a chatbot.',
    },
  ],
  prerequisites: [
    {
      ko: 'HTTP 요청과 JSON이 무엇인지 대략 알고 있으면 충분합니다.',
      en: 'Basic familiarity with HTTP requests and JSON is enough.',
    },
    {
      ko: 'n8n 계정 또는 self-hosted n8n 환경 중 하나를 준비하면 실습이 수월합니다.',
      en: 'Having either an n8n Cloud account or a self-hosted n8n instance makes practice easier.',
    },
    {
      ko: 'Cusdis 사이트 설정 화면에 접근할 수 있으면 그대로 따라 하기 좋습니다.',
      en: 'Access to a Cusdis site settings screen helps you follow the workflow end to end.',
    },
  ],
  learningOutcomes: [
    {
      ko: 'Cusdis webhook을 n8n에 연결해 댓글 이벤트를 자동화 흐름의 시작점으로 사용할 수 있습니다.',
      en: 'Wire Cusdis webhooks into n8n so comment events become the trigger for automation.',
    },
    {
      ko: 'Gemini가 반드시 JSON 계약으로 답하도록 프롬프트를 설계하고 후처리 코드를 붙일 수 있습니다.',
      en: 'Design prompts that force Gemini into a JSON contract and post-process the output safely.',
    },
    {
      ko: '정상 댓글만 통과시키는 분기, 랜덤 지연, 승인 API 호출을 하나의 워크플로우로 묶을 수 있습니다.',
      en: 'Combine clean-comment branching, random delay, and approval API calls into one workflow.',
    },
    {
      ko: '실제 운영을 위한 배포 전 체크리스트와 실패 시 복구 포인트를 정리할 수 있습니다.',
      en: 'Prepare a deployment checklist and identify recovery points needed for live operations.',
    },
  ],
  estimatedTime: {
    ko: '약 1시간 40분',
    en: 'About 1h 40m',
  },
  difficulty: {
    ko: '입문-초중급',
    en: 'Beginner to early intermediate',
  },
  tools: [
    {
      ko: 'Cusdis',
      en: 'Cusdis',
    },
    {
      ko: 'n8n Cloud 또는 self-hosted n8n',
      en: 'n8n Cloud or self-hosted n8n',
    },
    {
      ko: 'Gemini API',
      en: 'Gemini API',
    },
    {
      ko: 'Cloudflare Tunnel (self-hosted 선택 시)',
      en: 'Cloudflare Tunnel when self-hosting',
    },
  ],
  studyGuide: [
    {
      ko: '처음 보는 수강생이라면 강좌 소개를 먼저 읽고 예제 README를 열어 전체 결과물을 본 뒤 슬라이드로 들어가는 순서를 추천합니다.',
      en: 'If this is your first pass, read the overview, open the example README to see the end state, then move into the slide deck.',
    },
    {
      ko: '실습할 때는 webhook 샘플과 JSON 계약 문서를 옆에 두고 따라오면 흐름이 훨씬 빨리 잡힙니다.',
      en: 'Keep the webhook sample and JSON contract beside you while practicing; they anchor the whole flow.',
    },
  ],
  chapters: [
    {
      title: {
        ko: '환경 구성과 전체 흐름 이해',
        en: 'Setup and understand the full flow',
      },
      summary: {
        ko: 'Cusdis, n8n, Cloudflare Tunnel의 역할을 분리해 보고 자동화가 어떤 경로로 움직이는지 먼저 잡습니다.',
        en: 'Clarify the roles of Cusdis, n8n, and Cloudflare Tunnel before touching the workflow details.',
      },
      duration: {
        ko: '20분',
        en: '20m',
      },
      learn: [
        {
          ko: 'Cusdis가 왜 입문 자동화 사례로 좋은지',
          en: 'Why Cusdis is a strong first automation target',
        },
        {
          ko: 'n8n Cloud와 self-hosted의 현실적인 선택 기준',
          en: 'A realistic decision rule for n8n Cloud vs self-hosted',
        },
        {
          ko: 'Webhook을 받기 위한 공개 주소 구성',
          en: 'How to expose a public URL for incoming webhooks',
        },
      ],
      artifacts: [
        {
          ko: '전체 시스템 흐름도',
          en: 'End-to-end system flow',
        },
        {
          ko: 'self-hosted 공개 주소 체크리스트',
          en: 'Self-hosted public URL checklist',
        },
      ],
    },
    {
      title: {
        ko: 'Webhook과 트리거 만들기',
        en: 'Create the webhook trigger',
      },
      summary: {
        ko: 'Cusdis에서 댓글 이벤트를 보내고, n8n Webhook 노드가 그 이벤트를 받는 첫 관문을 완성합니다.',
        en: 'Connect Cusdis comment events to the first Webhook node in n8n.',
      },
      duration: {
        ko: '15분',
        en: '15m',
      },
      learn: [
        {
          ko: 'Cusdis Site settings에서 webhook URL 연결하기',
          en: 'Connect the webhook URL from Cusdis site settings',
        },
        {
          ko: 'n8n Webhook 노드의 입력 구조 읽기',
          en: 'Read the input shape of the n8n Webhook node',
        },
      ],
      artifacts: [
        {
          ko: '샘플 comment webhook payload',
          en: 'Sample comment webhook payload',
        },
      ],
    },
    {
      title: {
        ko: 'Gemini 분석과 JS 후처리',
        en: 'Gemini analysis and JS normalization',
      },
      summary: {
        ko: 'AI가 항상 같은 형식으로 결과를 반환하도록 JSON 계약을 강제하고, 실패 가능성을 고려한 후처리 코드를 붙입니다.',
        en: 'Force the AI into a strict JSON contract and normalize it with defensive JavaScript.',
      },
      duration: {
        ko: '30분',
        en: '30m',
      },
      learn: [
        {
          ko: 'Gemini 프롬프트를 JSON 스키마처럼 설계하는 법',
          en: 'How to shape a Gemini prompt like a JSON schema',
        },
        {
          ko: 'AI 응답이 깨졌을 때도 흐름이 멈추지 않게 처리하는 법',
          en: 'How to avoid a broken workflow when AI output is malformed',
        },
      ],
      artifacts: [
        {
          ko: 'Gemini moderation prompt',
          en: 'Gemini moderation prompt',
        },
        {
          ko: 'normalize-gemini-output.js',
          en: 'normalize-gemini-output.js',
        },
      ],
    },
    {
      title: {
        ko: '조건 분기와 승인 API 호출',
        en: 'Conditional routing and approval API',
      },
      summary: {
        ko: '정상 댓글만 다음 단계로 보내고, 사람이 쓴 것처럼 보이는 지연 후 승인/답글 요청을 전송합니다.',
        en: 'Route only safe comments forward, wait for a natural delay, then send approval and reply requests.',
      },
      duration: {
        ko: '25분',
        en: '25m',
      },
      learn: [
        {
          ko: 'If 노드로 NORMAL 결과만 통과시키는 법',
          en: 'Use the If node to pass only NORMAL comments',
        },
        {
          ko: 'Wait 노드로 사람 같은 운영 리듬 만들기',
          en: 'Create a human-like moderation rhythm with the Wait node',
        },
        {
          ko: 'HTTP Request 노드로 승인/답글 API 호출하기',
          en: 'Call the approval/reply API through the HTTP Request node',
        },
      ],
      artifacts: [
        {
          ko: '승인 요청 body 예시',
          en: 'Approval request body example',
        },
        {
          ko: '운영 배포 체크리스트',
          en: 'Operations deployment checklist',
        },
      ],
    },
    {
      title: {
        ko: '운영 점검과 확장 아이디어',
        en: 'Ops review and extension ideas',
      },
      summary: {
        ko: '워크플로우를 공개 환경에 둘 때 필요한 실패 대응 포인트와 다음 단계 자동화 아이디어를 정리합니다.',
        en: 'Review the failure points, rollout checks, and next automation ideas needed for production.',
      },
      duration: {
        ko: '10분',
        en: '10m',
      },
      learn: [
        {
          ko: '실패 시 어떤 노드에서 디버깅해야 하는지',
          en: 'Where to debug first when the workflow fails',
        },
        {
          ko: '향후 슬랙 알림, 저장소 적재, 운영 리포트로 확장하는 방법',
          en: 'How to extend the flow into Slack alerts, archival, or moderation reports',
        },
      ],
      artifacts: [
        {
          ko: '운영 리스크 메모',
          en: 'Operations risk memo',
        },
      ],
    },
  ],
  practiceAssets: [
    {
      label: {
        ko: '예제 README',
        en: 'Example README',
      },
      href: {
        ko: '/example/cusdis/README.ko.md',
        en: '/example/cusdis/README.md',
      },
      type: {
        ko: '문서',
        en: 'Document',
      },
      description: {
        ko: '실습 순서와 파일 역할을 한 장에 정리한 출발점 문서입니다.',
        en: 'Start here for the practice flow and a quick map of the example files.',
      },
    },
    {
      label: {
        ko: 'Webhook payload 샘플',
        en: 'Webhook payload sample',
      },
      href: {
        ko: '/example/cusdis/sample-comment-webhook.json',
        en: '/example/cusdis/sample-comment-webhook.json',
      },
      type: {
        ko: 'JSON',
        en: 'JSON',
      },
      description: {
        ko: 'Cusdis가 보내는 댓글 이벤트 구조를 바로 확인할 수 있습니다.',
        en: 'Inspect the incoming comment event shape sent by Cusdis.',
      },
    },
    {
      label: {
        ko: 'Gemini 프롬프트 계약',
        en: 'Gemini prompt contract',
      },
      href: {
        ko: '/example/cusdis/gemini-moderation-prompt.ko.md',
        en: '/example/cusdis/gemini-moderation-prompt.md',
      },
      type: {
        ko: '프롬프트',
        en: 'Prompt',
      },
      description: {
        ko: 'JSON 반환 형식을 강제하는 프롬프트 템플릿입니다.',
        en: 'A prompt template that forces structured JSON output.',
      },
    },
    {
      label: {
        ko: 'JS 후처리 코드',
        en: 'JS normalization code',
      },
      href: {
        ko: '/example/cusdis/normalize-gemini-output.js',
        en: '/example/cusdis/normalize-gemini-output.js',
      },
      type: {
        ko: '소스코드',
        en: 'Source',
      },
      description: {
        ko: 'AI 응답 실패를 흡수하는 defensive parsing 예제입니다.',
        en: 'A defensive parsing example that absorbs malformed AI responses.',
      },
    },
    {
      label: {
        ko: '승인 요청 본문 예시',
        en: 'Approval request body',
      },
      href: {
        ko: '/example/cusdis/approve-comment-request.json',
        en: '/example/cusdis/approve-comment-request.json',
      },
      type: {
        ko: 'API 예제',
        en: 'API example',
      },
      description: {
        ko: 'Cusdis 승인/답글 API에 보내는 body 예시입니다.',
        en: 'An example request body for comment approval and reply posting.',
      },
    },
    {
      label: {
        ko: '운영 체크리스트',
        en: 'Ops checklist',
      },
      href: {
        ko: '/example/cusdis/ops-checklist.ko.md',
        en: '/example/cusdis/ops-checklist.md',
      },
      type: {
        ko: '체크리스트',
        en: 'Checklist',
      },
      description: {
        ko: '배포 전후로 확인할 항목을 정리했습니다.',
        en: 'A deployment-time checklist for stable operations.',
      },
    },
  ],
  faq: [
    {
      question: {
        ko: '코드를 많이 몰라도 따라갈 수 있나요?',
        en: 'Can I follow this without being strong in code yet?',
      },
      answer: {
        ko: '가능합니다. 핵심은 webhook, JSON, 조건 분기라는 세 가지 개념을 실제 흐름에서 보는 것입니다. 자바스크립트 예제도 길지 않고 목적이 분명합니다.',
        en: 'Yes. The main goal is to see webhooks, JSON, and branching in a real flow. The JavaScript examples stay short and purpose-driven.',
      },
    },
    {
      question: {
        ko: 'n8n Cloud 없이도 실습할 수 있나요?',
        en: 'Can I practice without n8n Cloud?',
      },
      answer: {
        ko: '가능합니다. self-hosted n8n과 Cloudflare Tunnel 조합으로도 전체 흐름을 재현할 수 있으며, 강의 안에서 그 경로를 함께 설명합니다.',
        en: 'Yes. A self-hosted n8n instance plus Cloudflare Tunnel is enough to reproduce the full workflow, and the course covers that path.',
      },
    },
    {
      question: {
        ko: '자동 승인이라 위험하지 않나요?',
        en: 'Is auto-approval too risky?',
      },
      answer: {
        ko: '그래서 이 강의는 JSON 계약, 분기 조건, 랜덤 지연, 운영 체크리스트를 함께 다룹니다. 무조건 승인보다 안전한 운영 루프를 설계하는 것이 목표입니다.',
        en: 'That is exactly why the course includes JSON contracts, branching rules, random delay, and an ops checklist. The goal is a safer moderation loop, not blind auto-approval.',
      },
    },
  ],
  evidence: [
    {
      type: 'image',
      title: {
        ko: '전체 워크플로우 구조',
        en: 'Full workflow structure',
      },
      description: {
        ko: '댓글 이벤트에서 승인 요청까지 이어지는 흐름을 시각적으로 확인할 수 있습니다.',
        en: 'See the moderation flow from comment event to final approval request.',
      },
      src: workflowOverview,
    },
    {
      type: 'image',
      title: {
        ko: 'Gemini 노드 설정 예시',
        en: 'Gemini node setup',
      },
      description: {
        ko: 'AI를 단순 호출이 아니라 구조화된 판정기로 사용하는 설정 예시입니다.',
        en: 'A concrete example of configuring AI as a structured moderation step, not a vague chat call.',
      },
      src: geminiSetting,
    },
    {
      type: 'image',
      title: {
        ko: '승인 API 요청 예시',
        en: 'Approval API request',
      },
      description: {
        ko: '실제 운영 직전 단계에서 어떤 요청을 보내는지 확인할 수 있습니다.',
        en: 'Inspect the request shape used in the final production-facing step.',
      },
      src: requestApprove,
    },
    {
      type: 'code',
      title: {
        ko: 'JSON 계약 예시',
        en: 'JSON contract example',
      },
      description: {
        ko: 'AI가 반드시 반환해야 하는 최소 응답 형식을 강의에서 설명합니다.',
        en: 'This is the minimum response contract the AI is asked to produce.',
      },
      language: 'json',
      code: `{
  "classification": "NORMAL | SPAM | REVIEW",
  "reason": "short explanation",
  "replyDraft": "human-sounding reply draft"
}`,
    },
  ],
};
