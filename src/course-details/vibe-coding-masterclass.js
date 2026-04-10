export const vibeCodingMasterclassDetail = {
  slug: 'vibe-coding-masterclass',
  hero: {
    title: {
      ko: '바이브 코딩 실전 마스터클래스 소개',
      en: 'Vibe Coding MVP Masterclass Overview',
    },
    subtitle: {
      ko: '아이디어를 MVP로 압축해 배포하기까지의 4시간 루프를 초급자 기준으로 설명합니다.',
      en: 'A beginner-oriented walkthrough of the four-hour loop from idea to shipped MVP.',
    },
    summary: {
      ko: 'Claude Code를 출발점으로 삼아, 아이디어를 MVP로 압축하고 문서화와 스택 선정, 아키텍처 설계, 검증과 배포 전 점검까지 하나의 반복 가능한 작업 루프로 연결하는 실전 강의입니다. 초급자가 프롬프트보다 먼저 무엇을 정리해야 하는지에 초점을 맞춥니다.',
      en: 'Using Claude Code as the starting point, this course turns an idea into an MVP through a reusable loop covering documentation, stack choice, architecture, verification, and pre-launch review. It focuses on what beginners must define before prompting the AI.',
    },
    deliverable: {
      ko: '결과물: AI와 협업해 MVP를 설계·구현·검증하는 개인 작업 루프, PRD/AGENTS 템플릿, 스택 결정 메모, MVP 아키텍처 초안, 배포 전 검증 체크리스트',
      en: 'Deliverable: a personal working loop for designing, building, and verifying an MVP with AI, plus reusable PRD/AGENTS templates, stack notes, an MVP architecture sketch, and a launch checklist.',
    },
  },
  audience: [
    {
      ko: 'AI 코딩 도구를 써 보긴 했지만 프로젝트 전체 흐름으로 연결하지 못한 입문 개발자',
      en: 'Beginner developers who have tried AI coding tools but have not yet turned them into a full project workflow.',
    },
    {
      ko: '혼자 빠르게 MVP를 만들어 검증하고 싶은 대학생, 1인 창업가, 제품 실험가',
      en: 'Students, solo founders, and product experimenters who want to validate MVPs quickly.',
    },
    {
      ko: '프롬프트보다 작업 체계, 문서, 검증 루프가 더 중요하다는 감각을 익히고 싶은 수강생',
      en: 'Learners who want to understand that workflow, documentation, and verification matter more than clever prompts alone.',
    },
  ],
  prerequisites: [
    {
      ko: 'HTML, CSS, 자바스크립트 또는 React 같은 프런트엔드 기초가 있으면 가장 좋습니다.',
      en: 'A basic grounding in HTML, CSS, JavaScript, or React helps most.',
    },
    {
      ko: 'AI 코딩 도구를 처음 써도 괜찮지만, 파일과 폴더 개념은 익숙해야 합니다.',
      en: 'It is fine if AI coding tools are new to you, but basic file/folder literacy is assumed.',
    },
    {
      ko: '배포 플랫폼과 문서 편집기를 처음 접해도 괜찮지만, 최소한 어떤 역할을 하는지는 알고 있으면 이해가 더 쉽습니다.',
      en: 'It is fine if deployment platforms and doc editors are new to you, but knowing their role at a high level will make the flow easier to follow.',
    },
  ],
  learningOutcomes: [
    {
      ko: 'PRD와 AGENTS 문서를 이용해 AI에게 흔들리지 않는 작업 컨텍스트를 줄 수 있습니다.',
      en: 'Use PRDs and AGENTS files to give AI a stable working context.',
    },
    {
      ko: '작은 MVP를 위한 기술 스택과 클라우드 비용을 실제 목표 기준으로 좁혀 선택할 수 있습니다.',
      en: 'Choose a pragmatic tech stack and cloud cost envelope based on what the MVP actually needs to prove.',
    },
    {
      ko: 'MVP 구현, UI/UX 정리, 테스트, 배포를 하나의 반복 루프로 묶을 수 있습니다.',
      en: 'Connect implementation, UI/UX polish, testing, and deployment into one iterative loop.',
    },
    {
      ko: '배포 직전 보안 점검 항목과 직접 확인해야 할 핵심 시나리오를 최소한의 체크리스트로 정리할 수 있습니다.',
      en: 'Reduce pre-launch security review and critical manual checks into a compact working checklist.',
    },
  ],
  estimatedTime: {
    ko: '약 1시간 30분',
    en: 'About 1h 30m',
  },
  difficulty: {
    ko: '입문-초중급',
    en: 'Beginner to early intermediate',
  },
  tools: [
    {
      ko: 'Claude Code 또는 유사한 AI 코딩 도구',
      en: 'Claude Code or a similar AI coding tool',
    },
    {
      ko: '문서 편집기',
      en: 'A document editor',
    },
    {
      ko: 'Next.js 또는 React 기반 MVP 스택',
      en: 'A Next.js or React-based MVP stack',
    },
    {
      ko: '배포 플랫폼(Vercel, Cloudflare, Netlify 등)',
      en: 'A deployment platform such as Vercel, Cloudflare, or Netlify',
    },
  ],
  studyGuide: [
    {
      ko: '강의를 보기 전 PRD 템플릿과 AGENTS 예시를 먼저 읽으면 슬라이드의 의도가 훨씬 또렷해집니다.',
      en: 'Read the PRD template and AGENTS example first; the slides become far easier to interpret.',
    },
    {
      ko: '실습은 아이디어 선정 → 문서화 → 스택 결정 → 아키텍처 → 검증 순서로 그대로 따라가는 것이 좋습니다.',
      en: 'For practice, follow the same sequence as the course: idea, documentation, stack choice, architecture, verification.',
    },
    {
      ko: '처음부터 완성도 높은 제품을 만들려 하지 말고, 작은 범위를 끝까지 배포 가능한 수준으로 닫아 보는 경험에 집중하는 것이 좋습니다.',
      en: 'Do not aim for a perfect product on the first pass; focus on closing a small scope all the way to something you could realistically launch.',
    },
  ],
  chapters: [
    {
      title: {
        ko: '철학과 작업 루프 이해',
        en: 'Understand the philosophy and working loop',
      },
      summary: {
        ko: '바이브 코딩을 단순한 코드 생성 기법이 아니라 목표, 원칙, 결과물을 먼저 정의한 뒤 반복 가능한 방식으로 작업하는 시스템으로 설명합니다. 사람이 기준을 세우고 AI는 그 기준 아래에서 속도를 높인다는 관점을 잡는 챕터입니다.',
        en: 'Frame vibe coding as a working system built around goals, principles, and deliverables rather than a code-generation trick. This chapter establishes the idea that humans set the rules and AI accelerates within them.',
      },
      learn: [
        {
          ko: '비전, 철학, 결과물을 먼저 정의해야 하는 이유',
          en: 'Why vision, principles, and deliverables must be defined before prompting the AI',
        },
        {
          ko: '가드레일이 있는 작업 루프가 왜 더 재현 가능하고 안전한지',
          en: 'Why a guardrailed AI loop is more repeatable and safer',
        },
      ],
      artifacts: [
        {
          ko: '바이브 코딩 루프 다이어그램',
          en: 'Vibe coding loop diagram',
        },
      ],
    },
    {
      title: {
        ko: '문서와 컨텍스트 준비',
        en: 'Prepare the docs and context',
      },
      summary: {
        ko: 'AGENTS.md와 PRD가 각각 어떤 역할을 맡아야 AI가 운영 규칙과 제품 요구를 혼동하지 않는지 설명합니다. 초급자도 바로 가져다 쓸 수 있는 문서 구조와 작성 순서를 함께 다룹니다.',
        en: 'Explain how AGENTS.md and PRDs divide responsibilities so the AI does not confuse operating rules with product requirements. The chapter also walks through a document structure beginners can reuse immediately.',
      },
      learn: [
        {
          ko: '운영 규칙 문서와 제품 요구 문서를 분리하는 법',
          en: 'How to separate operating rules from product requirements',
        },
        {
          ko: '입문자도 바로 쓸 수 있는 문서 템플릿 구성과 작성 순서',
          en: 'A reusable document template structure and writing order for beginners',
        },
      ],
      artifacts: [
        {
          ko: 'AGENTS 예시',
          en: 'AGENTS example',
        },
        {
          ko: 'PRD 템플릿',
          en: 'PRD template',
        },
      ],
    },
    {
      title: {
        ko: '기술 스택과 비용 결정',
        en: 'Choose the stack and cost envelope',
      },
      summary: {
        ko: '프로젝트가 반드시 증명해야 하는 한 가지를 기준으로 프런트엔드, 백엔드, 인프라를 좁혀 선택하고 MVP 비용 범위를 현실적으로 계산합니다. 과한 기술 선택을 피하는 판단 기준을 주는 챕터입니다.',
        en: 'Choose the frontend, backend, and infrastructure based on the one thing the project must prove, then estimate a realistic MVP cost envelope. This chapter focuses on avoiding beginner over-engineering.',
      },
      learn: [
        {
          ko: 'Skills vs MCP, 스택 결정 트리, 클라우드 비용 매트릭스를 읽는 법',
          en: 'How to read the Skills vs MCP matrix, stack decision tree, and cloud cost matrix',
        },
        {
          ko: '입문자 MVP에서 과한 기술 선택을 피하고 후보군을 줄이는 법',
          en: 'How to avoid over-engineering an MVP and narrow the candidate stack',
        },
      ],
      artifacts: [
        {
          ko: '스택 결정표',
          en: 'Stack decision matrix',
        },
      ],
    },
    {
      title: {
        ko: 'MVP 아키텍처와 구현 흐름',
        en: 'MVP architecture and build flow',
      },
      summary: {
        ko: '식당 주문 MVP 예제를 바탕으로 화면, API, 데이터 계층을 어떻게 나누면 AI와 사람이 모두 이해하기 쉬운 구조가 되는지 설명합니다. 구현 단위를 어떻게 자르면 검증과 수정이 쉬워지는지도 함께 다룹니다.',
        en: 'Use a restaurant-ordering MVP to explain how screen, API, and data layers can be split into a structure that is easy for both humans and AI to reason about. The chapter also shows how to slice implementation units for easier validation and iteration.',
      },
      learn: [
        {
          ko: '화면, API, 데이터 계층을 어디서 나누면 설명과 검증이 쉬워지는지',
          en: 'Where to split screen, API, and data layers so explanation and testing stay simple',
        },
        {
          ko: 'AI와 협업할 때 구현 단위를 얼마나 잘게 자를지',
          en: 'How small your implementation units should be when working with AI',
        },
      ],
      artifacts: [
        {
          ko: 'MVP 아키텍처 예시',
          en: 'MVP architecture example',
        },
      ],
    },
    {
      title: {
        ko: '검증, 보안, 배포',
        en: 'Verification, security, and launch',
      },
      summary: {
        ko: 'E2E 확인과 보안 체크를 통해 “동작하는 MVP”를 “내놓을 수 있는 MVP”로 바꾸는 마무리 단계입니다. 무엇을 먼저 테스트하고 어떤 리스크를 직접 점검해야 하는지 정리합니다.',
        en: 'Turn a working MVP into a launchable one through verification and security checks. The chapter closes the loop by showing what to test first and which risks still need direct human review.',
      },
      learn: [
        {
          ko: '무엇을 먼저 테스트해야 하고 어떤 시나리오를 직접 확인해야 하는지',
          en: 'What to test first and which scenarios still need direct human verification',
        },
        {
          ko: '배포 전 최소 보안 체크리스트와 출시 기준 정리',
          en: 'The minimum security checklist and launch criteria before deployment',
        },
      ],
      artifacts: [
        {
          ko: '보안 점검 메모',
          en: 'Security review notes',
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
        ko: '/example/vibe-coding-masterclass/README.ko.md',
        en: '/example/vibe-coding-masterclass/README.md',
      },
      type: {
        ko: '문서',
        en: 'Document',
      },
      description: {
        ko: '마스터클래스용 예제 파일과 권장 활용 순서를 정리했습니다.',
        en: 'A guide to the masterclass example files and how to use them.',
      },
    },
    {
      label: {
        ko: 'AGENTS 예시',
        en: 'AGENTS example',
      },
      href: {
        ko: '/example/vibe-coding-masterclass/AGENTS.example.ko.md',
        en: '/example/vibe-coding-masterclass/AGENTS.example.md',
      },
      type: {
        ko: '템플릿',
        en: 'Template',
      },
      description: {
        ko: '프로젝트 운영 규칙을 AI에게 전달하는 문서 샘플입니다.',
        en: 'A sample document for passing project operating rules to AI.',
      },
    },
    {
      label: {
        ko: 'PRD 템플릿',
        en: 'PRD template',
      },
      href: {
        ko: '/example/vibe-coding-masterclass/PRD-template.ko.md',
        en: '/example/vibe-coding-masterclass/PRD-template.md',
      },
      type: {
        ko: '문서 템플릿',
        en: 'Doc template',
      },
      description: {
        ko: '아이디어를 구현 가능한 요구사항으로 바꾸는 기본 템플릿입니다.',
        en: 'A compact template for turning an idea into implementation-ready requirements.',
      },
    },
    {
      label: {
        ko: '스택 결정표',
        en: 'Stack decision matrix',
      },
      href: {
        ko: '/example/vibe-coding-masterclass/stack-decision-matrix.ko.md',
        en: '/example/vibe-coding-masterclass/stack-decision-matrix.md',
      },
      type: {
        ko: '의사결정표',
        en: 'Decision matrix',
      },
      description: {
        ko: '프로젝트 유형에 따라 기술 선택을 좁혀 가는 표입니다.',
        en: 'A matrix for narrowing tech choices based on project shape.',
      },
    },
    {
      label: {
        ko: 'MVP 아키텍처 예시',
        en: 'MVP architecture example',
      },
      href: {
        ko: '/example/vibe-coding-masterclass/mvp-architecture-example.ko.md',
        en: '/example/vibe-coding-masterclass/mvp-architecture-example.md',
      },
      type: {
        ko: '아키텍처 문서',
        en: 'Architecture note',
      },
      description: {
        ko: '입문자용 3-tier MVP 구조를 글과 다이어그램으로 정리한 예시입니다.',
        en: 'A text-plus-diagram example of a beginner-friendly three-tier MVP.',
      },
    },
  ],
  faq: [
    {
      question: {
        ko: '이 강좌는 특정 AI 도구에만 묶여 있나요?',
        en: 'Is this course tied to one specific AI coding tool?',
      },
      answer: {
        ko: '출발점은 Claude Code지만, 핵심은 문서화와 검증 루프입니다. 따라서 다른 AI 코딩 환경에도 상당 부분 이식할 수 있습니다. 이 강좌가 전달하려는 것은 도구 이름보다 작업 구조입니다.',
        en: 'Claude Code is the starting point, but the real focus is documentation and verification loops. Most of the method transfers to other AI coding tools because the course is really about the working structure, not the vendor name.',
      },
    },
    {
      question: {
        ko: '초급자가 바로 MVP를 배포해도 되나요?',
        en: 'Should a beginner deploy an MVP right away?',
      },
      answer: {
        ko: '배포 자체보다 검증과 가드레일이 먼저입니다. 이 강좌는 빨리 만들되, 무엇을 점검해야 하는지 함께 주는 쪽에 초점을 둡니다. 작은 범위를 끝까지 닫아 보는 경험이 무작정 크게 만드는 것보다 더 중요합니다.',
        en: 'Verification and guardrails come before launch. The course is about shipping fast without skipping the checks that matter, and it argues for closing a small scope safely rather than building something larger too early.',
      },
    },
    {
      question: {
        ko: '예제 코드가 큰 프로젝트인가요?',
        en: 'Are the example assets a large project?',
      },
      answer: {
        ko: '아닙니다. 초급자에게 필요한 것은 거대한 코드베이스보다 “작게 시작하는 문서와 구조”이므로, 템플릿과 설계 예시에 집중합니다. 예제는 직접 복사해서 자기 프로젝트에 맞게 변형하기 쉽게 구성되어 있습니다.',
        en: 'No. Beginners benefit more from small reusable templates and structure than from a giant codebase, so the assets focus on those. They are intentionally sized so you can copy and adapt them into your own project quickly.',
      },
    },
  ],
};
