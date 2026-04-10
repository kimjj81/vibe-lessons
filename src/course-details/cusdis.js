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
      ko: '블로그 댓글 운영을 자동화하고 싶은 초급자를 위한 실전 수업입니다. webhook 연결부터 n8n 트리거, Gemini 판정, 조건 분기, 승인 API 호출, 운영 체크리스트까지 전체 루프를 하나의 워크플로우로 엮으며, 자동화에서 가장 중요한 입력 계약과 실패 대응까지 함께 다룹니다.',
      en: 'A practical beginner-friendly course for automating blog comment operations, covering the whole loop from webhook wiring and n8n triggers to Gemini classification, conditional routing, approval APIs, and operations checklists. It also emphasizes input contracts and failure handling, which are often the hardest parts for beginners.',
    },
    description: [
      {
        ko: '이 강좌는 댓글이 들어온 뒤 webhook으로 이벤트를 받고, n8n에서 워크플로우를 시작하고, Gemini로 내용을 판정한 뒤, 정상 댓글만 승인과 답글 단계로 넘기는 전체 흐름을 처음부터 끝까지 연결합니다. 핵심은 노드 사용법 자체보다 입력 계약과 운영 안전성을 함께 이해하는 것입니다.',
        en: 'This course follows the full path from incoming comment event to webhook delivery, n8n workflow trigger, Gemini classification, and final approval or reply. The core lesson is not just how to use the nodes, but how to make the input contract and operating behavior reliable.',
      },
      {
        ko: 'AI 자동화에서 가장 많이 발생하는 문제는 모델 연결 자체보다, 출력 형식이 흔들리거나 운영 기준이 불명확한 상태에서 자동화가 실행되는 것입니다. 그래서 강의는 JSON 계약, 후처리 코드, 분기 조건, 지연 처리, fallback 운영을 함께 다룹니다.',
        en: 'The most common failures in AI automation do not come from model setup alone. They come from unstable output formats and unclear operating rules. That is why the course treats JSON contracts, normalization code, branching logic, delay handling, and fallback operations as one connected topic.',
      },
      {
        ko: '수강을 마치면 실제 댓글 운영에 적용 가능한 워크플로우뿐 아니라, 어떤 지점에서 사람이 개입해야 하고 어떤 지점에서 자동화를 믿어도 되는지 판단하는 기준까지 갖게 됩니다.',
        en: 'By the end, you should not only have a workable moderation flow, but also a better sense of where human intervention is still necessary and where automation can be trusted.',
      },
    ],
    deliverable: {
      ko: '결과물: 댓글이 들어오면 AI가 분석하고, 정상 댓글만 지연 후 자동 승인/답글하는 운영 워크플로우, JSON 판정 계약, 후처리 코드, 승인 요청 예시, 배포 전 운영 체크리스트',
      en: 'Deliverable: a production-minded workflow that analyzes, delays, approves, and replies to safe comments automatically, plus a JSON moderation contract, normalization code, approval request examples, and rollout checklists.',
    },
  },
  audience: [
    {
      ko: '댓글 운영을 매번 수동으로 처리하고 있어 자동화의 첫 사례가 필요한 개발자 또는 1인 제작자',
      en: 'Solo builders or developers who currently moderate comments manually and need a first automation project.',
    },
    {
      ko: 'n8n, webhook, API, JSON 개념을 실전 예제로 익히고 싶은 입문자',
      en: 'Beginners who want to learn n8n, webhooks, APIs, and JSON through a concrete workflow.',
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
    {
      ko: 'AI가 항상 완벽하게 답하지 않는다는 전제를 받아들이고, 출력 계약을 강제하는 방식에 익숙해질 준비가 되어 있으면 좋습니다.',
      en: 'It helps if you are ready to treat AI output as unreliable by default and learn how to enforce a stricter output contract.',
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
      en: 'If this is your first pass, read the Lecture Guide, open the example README to see the end state, then move into the slide deck.',
    },
    {
      ko: '실습할 때는 webhook 샘플과 JSON 계약 문서를 옆에 두고 따라오면 흐름이 훨씬 빨리 잡힙니다.',
      en: 'Keep the webhook sample and JSON contract beside you while practicing; they anchor the whole flow.',
    },
    {
      ko: '처음에는 완벽한 자동 승인보다 입력 구조와 분기 흐름을 안정시키는 데 집중하는 것이 좋습니다.',
      en: 'At first, focus on stabilizing the incoming payload and branching rules rather than chasing a fully polished auto-approval flow.',
    },
  ],
  chapters: [
    {
      title: {
        ko: '환경 구성과 전체 흐름 이해',
        en: 'Setup and understand the full flow',
      },
      summary: {
        ko: 'Cusdis, n8n, Cloudflare Tunnel이 각각 어떤 책임을 지는지 먼저 분리해서 보고 자동화가 전체적으로 어떤 경로를 따라 움직이는지 파악합니다. 도구의 역할이 보이면 이후 노드 설정이 훨씬 덜 복잡해집니다.',
        en: 'Clarify the roles of Cusdis, n8n, and Cloudflare Tunnel before touching the workflow details. Once those boundaries are visible, the later node-level setup becomes much easier to reason about.',
      },
      body: [
        {
          ko: '처음 자동화를 만들 때 가장 헷갈리는 것은 도구가 많다는 사실이 아니라, 각 도구가 어떤 역할을 하는지 구분되지 않는다는 점입니다. Cusdis는 댓글 이벤트를 발생시키는 원천이고, n8n은 그 이벤트를 받아 흐름을 실행하는 엔진이며, Cloudflare Tunnel은 self-hosted 환경에서 외부 신호를 받을 수 있게 해 주는 공개 경로 역할을 합니다.',
          en: 'When building your first automation, the real confusion does not come from having many tools. It comes from not knowing what each tool is responsible for. Cusdis emits the comment event, n8n executes the workflow, and Cloudflare Tunnel exposes a public route when you self-host the workflow engine.',
        },
        {
          ko: '이 챕터는 전체 흐름을 먼저 잡는 데 집중합니다. 댓글이 들어오면 어떤 신호가 어디로 이동하고, 어느 시점에서 AI가 개입하며, 어느 지점에서 최종 승인 요청이 발생하는지를 큰 그림으로 이해해야 이후 노드 설정이 쉬워집니다. 구조를 모르면 세부 설정이 많아질수록 더 막히기 쉽습니다.',
          en: 'This chapter is about building the end-to-end map first. You need to understand where the signal travels, when the AI becomes part of the flow, and where the final approval request happens before the node-level work becomes manageable. Without that map, more detailed settings usually create more confusion, not less.',
        },
        {
          ko: '또한 n8n Cloud와 self-hosted를 어떻게 선택할지도 여기서 다룹니다. 초급자에게는 보통 n8n Cloud가 더 빠른 출발점이지만, self-hosted는 더 많은 통제권을 줍니다. 다만 통제권은 곧 공개 주소, 업데이트, 보안 패치, 운영 책임을 함께 가진다는 뜻이기도 합니다.',
          en: 'The chapter also explains the difference between n8n Cloud and self-hosted setups. For beginners, n8n Cloud is usually the faster starting point. Self-hosting offers more control, but that control comes with responsibility for public access, updates, security patches, and operations.',
        },
      ],
      table: {
        caption: {
          ko: '전체 자동화 흐름에서 각 도구가 맡는 역할',
          en: 'What each tool owns in the automation flow',
        },
        headers: [
          { ko: '도구', en: 'Tool' },
          { ko: '주된 역할', en: 'Primary role' },
          { ko: '없으면 막히는 지점', en: 'What breaks without it' },
        ],
        rows: [
          [
            { ko: 'Cusdis', en: 'Cusdis' },
            { ko: '댓글 이벤트를 발생시키고 운영 대상 데이터를 제공', en: 'Emits the comment event and provides the source data' },
            { ko: '자동화의 입력 자체가 생기지 않음', en: 'The automation never receives the source event' },
          ],
          [
            { ko: 'n8n', en: 'n8n' },
            { ko: '이벤트를 받아 조건 분기와 후속 액션을 실행', en: 'Receives the event and runs branching plus follow-up actions' },
            { ko: '판정, 지연, 승인 요청이 연결되지 않음', en: 'Classification, delay, and approval steps never connect' },
          ],
          [
            { ko: 'Cloudflare Tunnel', en: 'Cloudflare Tunnel' },
            { ko: 'self-hosted n8n을 외부 webhook이 도달 가능한 주소로 공개', en: 'Exposes a self-hosted n8n instance through a reachable HTTPS route' },
            { ko: '외부 webhook이 로컬/사설망에 도달하지 못함', en: 'External webhooks cannot reach a local or private instance' },
          ],
        ],
      },
      takeaways: [
        {
          ko: '전체 흐름을 먼저 잡아야 세부 노드 설정이 쉬워집니다.',
          en: 'It is easier to configure nodes once the full flow is visible.',
        },
        {
          ko: 'n8n Cloud는 빠른 시작점이고, self-hosted는 더 큰 통제권과 책임을 줍니다.',
          en: 'n8n Cloud gives a faster start, while self-hosting gives more control and more responsibility.',
        },
        {
          ko: '도구 수가 문제가 아니라 책임 구분이 흐린 것이 문제입니다.',
          en: 'The problem is not the number of tools, but unclear ownership between them.',
        },
      ],
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
          ko: 'Webhook을 받기 위한 공개 주소 구성이 왜 필요한지',
          en: 'Why you need a public URL before incoming webhooks can work',
        },
      ],
      artifacts: [
        {
          title: {
            ko: '전체 시스템 흐름도와 워크플로우 이미지',
            en: 'End-to-end system flow and workflow image',
          },
          description: {
            ko: '댓글 이벤트가 Cusdis에서 n8n으로 들어오고, AI 판정과 승인 요청으로 이어지는 전체 구조를 한눈에 보여 줍니다.',
            en: 'Shows the full path from Cusdis event to n8n, AI classification, and the final approval request.',
          },
          type: {
            ko: '다이어그램',
            en: 'Diagram',
          },
        },
        {
          title: {
            ko: 'self-hosted 공개 주소 체크리스트',
            en: 'Self-hosted public URL checklist',
          },
          description: {
            ko: 'self-hosted n8n이 외부 webhook을 받기 위해 HTTPS 주소를 확보하는 순서를 정리한 메모입니다.',
            en: 'A short checklist for exposing a self-hosted n8n instance through an HTTPS URL that can receive webhooks.',
          },
          href: {
            ko: '/example/cusdis/ops-checklist.ko.md',
            en: '/example/cusdis/ops-checklist.md',
          },
          type: {
            ko: '체크리스트',
            en: 'Checklist',
          },
        },
      ],
    },
    {
      title: {
        ko: 'Webhook과 트리거 만들기',
        en: 'Create the webhook trigger',
      },
      summary: {
        ko: 'Cusdis에서 댓글 이벤트를 보내고, n8n Webhook 노드가 그 이벤트를 받는 첫 관문을 완성합니다. 자동화에서 가장 먼저 봐야 할 것은 입력 구조라는 점을 실제 예제로 익히는 단계입니다.',
        en: 'Connect Cusdis comment events to the first Webhook node in n8n. This chapter reinforces the rule that the incoming payload is the first thing you must understand in any automation flow.',
      },
      body: [
        {
          ko: '자동화에서 입력은 가장 먼저 이해해야 하는 시스템 계약입니다. 댓글 이벤트가 어떤 필드를 포함하는지, site ID는 어디에 들어 있는지, 본문과 작성자 정보는 어떤 형태인지 모르고 다음 단계를 만들면, AI 판정이나 승인 API가 뒤에서 계속 어긋나게 됩니다. 그래서 이 챕터는 단순 연결보다 payload 읽기에 더 큰 비중을 둡니다.',
          en: 'In automation work, the input payload is your first system contract. If you do not know which fields exist, where the site ID lives, or how the author and body are represented, the later AI and approval steps will keep drifting. That is why this chapter puts more emphasis on reading the payload than on clicking through setup screens.',
        },
        {
          ko: 'Cusdis Site settings에서 webhook URL을 등록하는 행위는 단순 설정이 아니라 “댓글 시스템과 자동화 엔진 사이에 연결을 연다”는 의미를 가집니다. 이후 n8n Webhook 노드는 그 연결의 첫 수신 지점이 됩니다. 따라서 입력 테스트는 정상 댓글과 스팸성 댓글 두 경우 모두 최소 한 번씩 해 보는 것이 좋습니다.',
          en: 'Registering the webhook URL in Cusdis Site settings is not just a configuration step. It opens a contract between the comment system and the automation engine. The n8n Webhook node becomes the first receiver on that contract. That is why you should test with at least one normal comment and one spam-like comment early.',
        },
        {
          ko: '이 챕터를 잘 이해하면 이후 단계가 훨씬 단순해집니다. AI 판정, 분기, 승인 로직은 모두 결국 이 입력 구조를 기준으로 움직이기 때문입니다. 입력이 흔들리면 뒤쪽 모든 노드가 흔들립니다.',
          en: 'Once this chapter is clear, the later steps become much simpler. AI classification, branching, and approval all depend on the input shape defined here. If the input contract is unstable, every later node becomes unstable too.',
        },
      ],
      table: {
        caption: {
          ko: 'Webhook 단계에서 먼저 확인해야 할 항목',
          en: 'What to verify first at the webhook stage',
        },
        headers: [
          { ko: '확인 항목', en: 'Checkpoint' },
          { ko: '왜 중요한가', en: 'Why it matters' },
          { ko: '다음 단계에 미치는 영향', en: 'What it affects downstream' },
        ],
        rows: [
          [
            { ko: 'site 식별자', en: 'Site identifier' },
            { ko: '어느 사이트의 댓글인지 구분해야 함', en: 'You must know which site the comment belongs to' },
            { ko: '승인 API 대상과 인증값 연결', en: 'Links the approval API to the correct target and credentials' },
          ],
          [
            { ko: 'comment 본문과 메타데이터', en: 'Comment body and metadata' },
            { ko: 'AI 판정과 답글 초안의 입력이 됨', en: 'Feeds AI classification and reply drafting' },
            { ko: '판정 정확도와 후처리 안정성', en: 'Affects model quality and normalization logic' },
          ],
          [
            { ko: 'HTTPS 도달 가능 여부', en: 'HTTPS reachability' },
            { ko: '외부 webhook이 실제로 도달해야 함', en: 'External webhooks must actually reach the endpoint' },
            { ko: '자동화 자체가 시작되느냐 여부', en: 'Determines whether the workflow starts at all' },
          ],
        ],
      },
      takeaways: [
        {
          ko: 'Webhook 단계는 단순 연결이 아니라 입력 계약을 읽는 단계입니다.',
          en: 'The webhook step is about reading the input contract, not only connecting services.',
        },
        {
          ko: '정상 사례와 비정상 사례를 둘 다 초기에 넣어 봐야 이후 분기가 안정됩니다.',
          en: 'Testing both safe and suspicious comments early makes later branching more stable.',
        },
        {
          ko: '입력을 잘 이해하면 뒤쪽 AI와 API 노드가 훨씬 쉬워집니다.',
          en: 'A well-understood input makes the later AI and API stages much easier.',
        },
      ],
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
          title: {
            ko: 'sample-comment-webhook.json 입력 예시',
            en: 'sample-comment-webhook.json input example',
          },
          description: {
            ko: 'Cusdis가 보내는 댓글 이벤트의 실제 필드 구조를 보여 줍니다. 이후 AI 판정과 승인 요청은 모두 이 입력을 기준으로 동작합니다.',
            en: 'Shows the real field structure of a comment event emitted by Cusdis. Every downstream AI and approval step depends on this input shape.',
          },
          href: {
            ko: '/example/cusdis/sample-comment-webhook.json',
            en: '/example/cusdis/sample-comment-webhook.json',
          },
          type: {
            ko: 'JSON 예시',
            en: 'JSON example',
          },
        },
      ],
    },
    {
      title: {
        ko: 'Gemini 분석과 JS 후처리',
        en: 'Gemini analysis and JS normalization',
      },
      summary: {
        ko: 'AI가 항상 같은 형식으로 결과를 반환하도록 JSON 계약을 강제하고, 실패 가능성을 고려한 후처리 코드를 붙입니다. 모델을 연결하는 것보다 모델 출력을 기계가 소비할 수 있는 데이터로 바꾸는 데 초점을 맞춥니다.',
        en: 'Force the AI into a strict JSON contract and normalize it with defensive JavaScript. The focus is less on connecting the model and more on turning model output into machine-consumable data.',
      },
      body: [
        {
          ko: '생성형 AI를 자동화 안에 넣을 때 가장 위험한 순간은 “모델이 대충 자연어로 답했는데도 다음 단계가 계속 진행되는 상태”입니다. 사람에게는 그럴듯한 답변이더라도, 기계에게는 JSON 계약이 더 중요합니다. 이 챕터는 분류 결과와 이유, 답글 초안을 항상 같은 구조로 돌려주게 만드는 이유를 설명합니다.',
          en: 'The most dangerous moment in AI automation is when the model replies with plausible natural language and the workflow continues anyway. Humans may tolerate that ambiguity, but machines need a stable JSON contract. This chapter explains why classification, reason, and reply draft must always return in the same shape.',
        },
        {
          ko: '프롬프트는 단순 요청문이 아니라 계약서처럼 써야 합니다. 어떤 필드가 반드시 있어야 하는지, 어떤 값만 허용되는지, 길이는 어느 정도인지, 확신이 없을 때는 어떤 상태를 반환해야 하는지를 함께 적어야 합니다. 그래야 AI가 애매한 경우에도 REVIEW 같은 중간 상태로 빠질 수 있고, 운영 리스크를 줄일 수 있습니다.',
          en: 'The prompt must behave more like a contract than a casual request. You need to say which fields are required, which values are allowed, how long the output may be, and what to return when confidence is low. That lets the model fall back to a REVIEW state instead of pretending certainty when it should not.',
        },
        {
          ko: '하지만 계약을 적어 두는 것만으로는 부족합니다. 실제 운영에서는 모델 출력이 깨지거나 일부 필드가 누락될 수 있기 때문에, JavaScript 후처리 코드로 파싱 실패를 흡수하고 기본값을 부여하는 방어 코드가 필요합니다. 이 강의는 그 방어 계층이 왜 필수인지 보여 줍니다.',
          en: 'Even that contract is not enough on its own. In production, model output can still be malformed or partially missing. That is why defensive JavaScript is required to absorb parsing failures and assign safe defaults. The course treats that normalization layer as mandatory, not optional.',
        },
      ],
      table: {
        caption: {
          ko: 'Gemini JSON 계약 예시',
          en: 'An example Gemini JSON contract',
        },
        headers: [
          { ko: '필드', en: 'Field' },
          { ko: '허용값 / 형태', en: 'Allowed values / shape' },
          { ko: '왜 필요한가', en: 'Why it is needed' },
        ],
        rows: [
          [
            { ko: 'classification', en: 'classification' },
            { ko: 'NORMAL / SPAM / REVIEW', en: 'NORMAL / SPAM / REVIEW' },
            { ko: '분기 노드가 안전하게 다음 단계 여부를 판단', en: 'Lets the branch node decide the next step safely' },
          ],
          [
            { ko: 'reason', en: 'reason' },
            { ko: '짧은 설명 문자열', en: 'Short explanation string' },
            { ko: '운영자가 판정 근거를 추적할 수 있음', en: 'Gives operators a traceable reason for the decision' },
          ],
          [
            { ko: 'replyDraft', en: 'replyDraft' },
            { ko: '짧고 자연스러운 답글 초안', en: 'Short, natural reply draft' },
            { ko: '승인 단계에서 즉시 사용할 수 있는 출력이 됨', en: 'Provides output that can be used directly in the approval step' },
          ],
        ],
      },
      takeaways: [
        {
          ko: 'AI 자동화에서는 자연어보다 계약된 구조가 더 중요합니다.',
          en: 'In AI automation, contract-shaped structure matters more than pretty prose.',
        },
        {
          ko: '프롬프트만 믿지 말고 후처리 코드로 실패를 흡수해야 합니다.',
          en: 'Do not trust the prompt alone; absorb failure with normalization code.',
        },
        {
          ko: 'REVIEW 같은 중간 상태를 두면 운영 안전성이 크게 높아집니다.',
          en: 'Adding an intermediate REVIEW state makes operations much safer.',
        },
      ],
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
          title: {
            ko: 'gemini-moderation-prompt(.ko).md JSON 계약 템플릿',
            en: 'gemini-moderation-prompt(.md) JSON contract template',
          },
          description: {
            ko: 'classification, reason, replyDraft를 어떤 제약으로 반환하게 할지 정의한 프롬프트 문서입니다.',
            en: 'Defines how the model should return classification, reason, and replyDraft under a strict JSON contract.',
          },
          href: {
            ko: '/example/cusdis/gemini-moderation-prompt.ko.md',
            en: '/example/cusdis/gemini-moderation-prompt.md',
          },
          type: {
            ko: '프롬프트',
            en: 'Prompt',
          },
        },
        {
          title: {
            ko: 'normalize-gemini-output.js 후처리 예시',
            en: 'normalize-gemini-output.js normalization example',
          },
          description: {
            ko: '모델 응답이 깨졌을 때 파싱 실패를 흡수하고 안전한 기본값으로 정리하는 방어 코드 예시입니다.',
            en: 'A defensive normalization example that absorbs malformed model output and applies safe defaults.',
          },
          href: {
            ko: '/example/cusdis/normalize-gemini-output.js',
            en: '/example/cusdis/normalize-gemini-output.js',
          },
          type: {
            ko: '소스코드',
            en: 'Source',
          },
        },
      ],
    },
    {
      title: {
        ko: '조건 분기와 승인 API 호출',
        en: 'Conditional routing and approval API',
      },
      summary: {
        ko: '정상 댓글만 다음 단계로 보내고, 사람이 쓴 것처럼 보이는 지연 후 승인/답글 요청을 전송합니다. 자동화의 속도와 운영 리듬, 안전성을 한 번에 맞추는 핵심 챕터입니다.',
        en: 'Route only safe comments forward, wait for a natural delay, then send approval and reply requests. This is the chapter where speed, safety, and human-like operating rhythm meet in one workflow.',
      },
      body: [
        {
          ko: '자동화가 실제 운영처럼 느껴지려면, “맞는 댓글만 다음 단계로 보내는 것”과 “너무 기계적으로 보이지 않게 처리하는 것”이 동시에 필요합니다. If 노드는 이 흐름에서 가장 중요한 안전 장치입니다. Gemini가 NORMAL로 분류한 경우만 다음 단계로 보내고, SPAM이나 REVIEW는 다른 경로로 분리함으로써 자동화가 무분별하게 실행되는 것을 막습니다.',
          en: 'For automation to feel production-ready, two things must happen together: only the right comments move forward, and the flow should not behave in a visibly robotic way. The If node is the primary safety gate here. Only NORMAL comments continue, while SPAM and REVIEW can be routed elsewhere.',
        },
        {
          ko: 'Wait 노드는 단순한 꾸밈이 아닙니다. 댓글이 달리자마자 즉시 답글이 달리면 사용자에게 기계적인 반응으로 보일 수 있고, 운영자 입장에서도 자동화가 너무 공격적으로 느껴질 수 있습니다. 짧은 랜덤 지연은 기술적으로는 사소해 보여도, 운영 경험 측면에서는 중요한 차이를 만듭니다.',
          en: 'The Wait node is not just cosmetic. If a reply appears instantly after a comment arrives, the system can feel robotic to users and overly aggressive to operators. A short random delay may look minor technically, but it changes the perceived moderation rhythm in a meaningful way.',
        },
        {
          ko: '마지막으로 HTTP Request 노드는 실제 행동을 발생시키는 지점입니다. 여기서는 승인 요청과 답글 본문이 정확한 구조로 전송되어야 하고, 어느 사이트를 대상으로 하는지와 인증 정보가 올바른지도 확인되어야 합니다. 이 단계는 워크플로우가 “판단”에서 “실행”으로 넘어가는 구간이기 때문에 가장 신중해야 합니다.',
          en: 'Finally, the HTTP Request node is where the workflow stops reasoning and starts acting. The approval payload and reply body must be shaped correctly, pointed at the right site, and backed by the correct credentials. Because this is the transition from decision to action, it is the most sensitive point in the system.',
        },
      ],
      table: {
        caption: {
          ko: '승인 단계로 가기 전 흐름 제어 표',
          en: 'Flow-control stages before the approval request',
        },
        headers: [
          { ko: '단계', en: 'Stage' },
          { ko: '무엇을 하는가', en: 'What it does' },
          { ko: '운영상 의미', en: 'Operational meaning' },
        ],
        rows: [
          [
            { ko: 'If', en: 'If' },
            { ko: 'NORMAL 댓글만 다음 단계로 통과시킴', en: 'Lets only NORMAL comments move forward' },
            { ko: '위험한 자동 승인을 막는 첫 안전장치', en: 'Acts as the primary safety gate against unsafe approval' },
          ],
          [
            { ko: 'Wait', en: 'Wait' },
            { ko: '랜덤 지연으로 응답 타이밍을 늦춤', en: 'Adds a randomized delay before the reply is sent' },
            { ko: '기계적인 반응을 줄이고 운영 리듬을 완화함', en: 'Reduces robotic timing and softens the operating rhythm' },
          ],
          [
            { ko: 'HTTP Request', en: 'HTTP Request' },
            { ko: '승인과 답글 요청을 실제 API로 전송', en: 'Sends the approval and reply request to the live API' },
            { ko: '자동화의 판단을 실제 서비스 행동으로 바꿈', en: 'Turns workflow judgment into real service behavior' },
          ],
        ],
      },
      takeaways: [
        {
          ko: 'If 노드는 안전, Wait 노드는 운영 리듬, HTTP Request는 실행 책임을 맡습니다.',
          en: 'If protects safety, Wait shapes rhythm, and HTTP Request carries execution responsibility.',
        },
        {
          ko: '자동화는 빠르기만 해서는 안 되고, 사람이 보기에도 납득 가능한 리듬을 가져야 합니다.',
          en: 'Automation should not only be fast; it should also feel operationally believable to humans.',
        },
        {
          ko: '승인 요청 단계는 가장 실제 서비스에 가까운 구간이므로 입력 검증이 가장 중요합니다.',
          en: 'The approval step is closest to real production behavior, so input correctness matters the most there.',
        },
      ],
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
          title: {
            ko: 'approve-comment-request.json 승인 요청 예시',
            en: 'approve-comment-request.json approval request example',
          },
          description: {
            ko: '승인 API로 어떤 body를 보내는지, 사이트 식별자와 replyDraft가 어떻게 묶이는지 확인할 수 있는 요청 예시입니다.',
            en: 'Shows the exact approval request body, including how the site identity and replyDraft are packaged for the API call.',
          },
          href: {
            ko: '/example/cusdis/approve-comment-request.json',
            en: '/example/cusdis/approve-comment-request.json',
          },
          type: {
            ko: 'API 예시',
            en: 'API example',
          },
        },
        {
          title: {
            ko: '랜덤 지연 표현식과 운영 배포 체크리스트',
            en: 'Random-delay expression and deployment checklist',
          },
          description: {
            ko: '사람처럼 보이는 응답 타이밍을 만들기 위한 Wait 표현식 아이디어와, 실제 활성화 전 확인할 운영 점검 항목을 함께 묶은 산출물입니다.',
            en: 'Pairs the random-delay idea used in the Wait node with the rollout checks you should complete before activating the workflow.',
          },
          href: {
            ko: '/example/cusdis/ops-checklist.ko.md',
            en: '/example/cusdis/ops-checklist.md',
          },
          type: {
            ko: '체크리스트',
            en: 'Checklist',
          },
        },
      ],
    },
    {
      title: {
        ko: '운영 점검과 확장 아이디어',
        en: 'Ops review and extension ideas',
      },
      summary: {
        ko: '워크플로우를 공개 환경에 둘 때 필요한 실패 대응 포인트와 다음 단계 자동화 아이디어를 정리합니다. 자동화를 완성하는 것보다 안전하게 운영하는 법을 배우는 마무리 단계입니다.',
        en: 'Review the failure points, rollout checks, and next automation ideas needed for production. The closing emphasis is not just on finishing the workflow, but on operating it safely.',
      },
      body: [
        {
          ko: '자동화는 한 번 돌아간다고 끝이 아닙니다. 공개 환경에 올리는 순간부터는 오탐, 미탐, 자격 증명 만료, webhook 장애, 모델 응답 이상, API 호출 실패 같은 현실적인 문제가 생길 수 있습니다. 따라서 마지막 챕터는 “더 멋진 자동화”보다 “문제 생겼을 때 어떻게 버틸 것인가”에 초점을 둡니다.',
          en: 'Automation does not end once it works one time. In a real environment, you must expect false positives, false negatives, expired credentials, webhook failures, malformed model output, and broken API calls. That is why the final chapter focuses less on making the workflow more impressive and more on making it survivable.',
        },
        {
          ko: '운영자의 관점에서 가장 중요한 것은 fallback입니다. 문제가 생겼을 때 워크플로우를 끄고 수동 승인으로 되돌릴 수 있는가, JSON 파싱 실패 로그를 별도로 모을 수 있는가, 처음 며칠간은 사람이 직접 승인 결과를 눈으로 확인하는가 같은 질문이 중요합니다. 이런 운영 질문은 자동화 자체만큼 중요합니다.',
          en: 'From the operator’s perspective, fallback is the most important concept. Can you turn the workflow off and return to manual moderation? Do you collect parsing failures separately? Will a human inspect the first few approvals by hand? These questions are just as important as the automation logic itself.',
        },
        {
          ko: '확장 아이디어도 이 기반 위에서 나옵니다. 슬랙 알림, 댓글 아카이빙, 운영 리포트, 모더레이션 대시보드 같은 기능은 멋져 보이지만, 먼저 안전한 기본 루프가 있어야 의미가 있습니다. 이 강의는 확장을 “다음 단계”로 소개하되, 기초 운영 루프를 먼저 안정화하라고 권합니다.',
          en: 'Extensions grow out of this stable base. Slack alerts, comment archives, moderation reports, and dashboards all sound attractive, but they only matter once the core loop is safe and understandable. The course introduces those as next moves, not as day-one requirements.',
        },
      ],
      table: {
        caption: {
          ko: '운영 단계에서 자주 보는 리스크와 대응',
          en: 'Common production risks and the right first response',
        },
        headers: [
          { ko: '리스크', en: 'Risk' },
          { ko: '처음 볼 곳', en: 'First place to inspect' },
          { ko: '권장 fallback', en: 'Recommended fallback' },
        ],
        rows: [
          [
            { ko: 'Gemini 출력 파싱 실패', en: 'Gemini output parse failure' },
            { ko: 'Code 노드 로그와 raw output', en: 'Code node logs and raw model output' },
            { ko: 'REVIEW 처리 또는 수동 승인으로 전환', en: 'Route to REVIEW or fall back to manual approval' },
          ],
          [
            { ko: '승인 API 호출 실패', en: 'Approval API call failure' },
            { ko: 'HTTP Request 응답 코드와 인증값', en: 'HTTP Request response codes and credentials' },
            { ko: '워크플로우 일시 중지 후 수동 처리', en: 'Pause the workflow and handle comments manually' },
          ],
          [
            { ko: '오탐 / 미탐 증가', en: 'Rise in false positives or false negatives' },
            { ko: '분류 결과 샘플과 프롬프트 계약', en: 'Classification samples and the prompt contract' },
            { ko: '프롬프트 수정 전까지 REVIEW 비율 확대', en: 'Increase REVIEW routing until the prompt is tuned' },
          ],
        ],
      },
      takeaways: [
        {
          ko: '좋은 자동화는 fallback 경로를 가진 자동화입니다.',
          en: 'Good automation always has a fallback path.',
        },
        {
          ko: '처음 며칠의 수동 검토가 장기적인 운영 안정성을 높입니다.',
          en: 'A few days of manual review early on improves long-term reliability.',
        },
        {
          ko: '확장 기능은 기본 루프가 안정된 뒤에 붙여야 의미가 있습니다.',
          en: 'Extensions only matter after the core moderation loop is stable.',
        },
      ],
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
          title: {
            ko: 'ops-checklist(.ko).md 운영 체크리스트와 fallback 메모',
            en: 'ops-checklist(.md) operations checklist and fallback memo',
          },
          description: {
            ko: '배포 전후 점검 항목, JSON 파싱 실패 대응, 수동 승인 전환 같은 운영 fallback을 정리한 문서입니다.',
            en: 'Documents pre/post-rollout checks plus fallback procedures such as parse-failure handling and manual moderation rollback.',
          },
          href: {
            ko: '/example/cusdis/ops-checklist.ko.md',
            en: '/example/cusdis/ops-checklist.md',
          },
          type: {
            ko: '운영 문서',
            en: 'Ops note',
          },
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
        ko: '가능합니다. 핵심은 webhook, JSON, 조건 분기라는 세 가지 개념을 실제 흐름에서 보는 것입니다. 자바스크립트 예제도 길지 않고 목적이 분명해서 초급자도 구조를 이해하기 좋습니다.',
        en: 'Yes. The main goal is to see webhooks, JSON, and branching in a real flow. The JavaScript examples stay short and purpose-driven, so beginners can focus on the structure rather than language complexity.',
      },
    },
    {
      question: {
        ko: 'n8n Cloud 없이도 실습할 수 있나요?',
        en: 'Can I practice without n8n Cloud?',
      },
      answer: {
        ko: '가능합니다. self-hosted n8n과 Cloudflare Tunnel 조합으로도 전체 흐름을 재현할 수 있으며, 강의 안에서 그 경로를 함께 설명합니다. 초급자에게는 왜 Cloud가 빠르고 self-host가 더 많은 책임을 요구하는지도 비교해 줍니다.',
        en: 'Yes. A self-hosted n8n instance plus Cloudflare Tunnel is enough to reproduce the full workflow, and the course covers that path. It also explains why Cloud is faster to start with while self-hosting shifts more responsibility to you.',
      },
    },
    {
      question: {
        ko: '자동 승인이라 위험하지 않나요?',
        en: 'Is auto-approval too risky?',
      },
      answer: {
        ko: '그래서 이 강의는 JSON 계약, 분기 조건, 랜덤 지연, 운영 체크리스트를 함께 다룹니다. 무조건 승인하는 것이 아니라, 안전한 댓글만 통과시키고 문제 발생 시 수동 운영으로 되돌릴 수 있는 루프를 설계하는 것이 목표입니다.',
        en: 'That is exactly why the course includes JSON contracts, branching rules, random delay, and an ops checklist. The goal is not blind approval, but a moderation loop that filters aggressively and still leaves you a manual fallback path.',
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
