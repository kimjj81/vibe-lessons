export const cmsArchitectureDetail = {
  slug: 'cms-architecture',
  hero: {
    title: {
      ko: 'CMS & 콘텐츠 인프라 강좌 소개',
      en: 'CMS & Content Infrastructure Overview',
    },
    subtitle: {
      ko: 'Monolithic, Headless, SaaS Embed, Self-hosted를 서비스 운영 관점에서 비교합니다.',
      en: 'Compare Monolithic, Headless, SaaS Embed, and Self-hosted choices through a real service-ops lens.',
    },
    summary: {
      ko: '콘텐츠를 어디서 관리하고, 어떤 기능을 외부 서비스에 위임하며, 캐시와 권한은 어떻게 설계해야 하는지 입문자 눈높이로 정리한 구조 설계 강의입니다.',
      en: 'A structural design course for beginners on where content lives, which features to outsource, and how cache and permissions shape the system.',
    },
    deliverable: {
      ko: '결과물: 내 서비스에 맞는 CMS 구조 선택표, 데이터 모델 초안, 캐시/권한 운영 체크리스트',
      en: 'Deliverable: a CMS decision matrix, an initial content model, and cache/permission operating checklists for your product.',
    },
  },
  audience: [
    {
      ko: '콘텐츠 중심 서비스를 만들려는데 WordPress, Headless CMS, 자체 구축 중 무엇을 택할지 고민하는 입문 개발자',
      en: 'Beginner developers deciding between WordPress, headless CMS products, and custom builds.',
    },
    {
      ko: '마케팅 페이지, 블로그, 문서, 댓글, 검색, 분석을 한 서비스 안에서 어떻게 배치할지 알고 싶은 기획자/엔지니어',
      en: 'Product builders who want to understand how blog, docs, comments, search, and analytics fit together.',
    },
    {
      ko: '백엔드보다 먼저 시스템 의사결정 기준을 잡고 싶은 초급자',
      en: 'Early learners who need architecture decision criteria before writing implementation code.',
    },
  ],
  prerequisites: [
    {
      ko: '웹 서비스가 프런트엔드, 백엔드, 데이터베이스로 나뉜다는 정도의 기본 감각이 있으면 충분합니다.',
      en: 'Basic awareness that a web service consists of frontend, backend, and database is enough.',
    },
    {
      ko: 'REST API, 캐시, 역할 기반 권한 같은 용어를 처음 들어도 괜찮습니다. 강의 안에서 함께 정의합니다.',
      en: 'You do not need prior confidence with terms like REST API, cache, or RBAC; the course defines them as it goes.',
    },
  ],
  learningOutcomes: [
    {
      ko: 'Monolithic, Headless, SaaS Embed, Self-hosted를 “누가 무엇을 책임지는가” 관점에서 비교할 수 있습니다.',
      en: 'Compare Monolithic, Headless, SaaS Embed, and Self-hosted through the lens of responsibility boundaries.',
    },
    {
      ko: '콘텐츠 모델, 리비전, 권한, 감사로그, 캐시 무효화를 하나의 설계 문제로 묶어 볼 수 있습니다.',
      en: 'See content models, revisions, permissions, audit logs, and cache invalidation as one connected design problem.',
    },
    {
      ko: '서비스 상황별로 어떤 조합이 유리한지 선택 프레임워크를 만들 수 있습니다.',
      en: 'Build a practical selection framework for different service contexts.',
    },
    {
      ko: '실무 구현 전 단계에서 데이터 모델과 운영 체크리스트 초안을 작성할 수 있습니다.',
      en: 'Draft a first-pass data model and ops checklist before implementation begins.',
    },
  ],
  estimatedTime: {
    ko: '약 2시간 20분',
    en: 'About 2h 20m',
  },
  difficulty: {
    ko: '입문-중급 설계',
    en: 'Beginner to intermediate design',
  },
  tools: [
    {
      ko: '아키텍처 다이어그램 도구 또는 문서 편집기',
      en: 'Any architecture diagramming tool or document editor',
    },
    {
      ko: 'CMS 후보 제품 페이지',
      en: 'CMS product comparison pages',
    },
    {
      ko: 'ERD 또는 데이터 모델 메모 도구',
      en: 'An ERD or data modeling note-taking tool',
    },
  ],
  studyGuide: [
    {
      ko: '이 강좌는 슬라이드를 보기 전에 예제 README와 아키텍처 비교 문서를 함께 열어 두면 훨씬 이해가 쉽습니다.',
      en: 'Open the example README and comparison notes before the slides; they make the lecture easier to map.',
    },
    {
      ko: '본인 서비스가 있다면 댓글, 검색, 분석, 권한 중 무엇을 직접 운영하고 싶은지 먼저 적어 놓고 들으면 결정 기준이 선명해집니다.',
      en: 'If you already have a product idea, list which of comments, search, analytics, and permissions you want to own directly before starting.',
    },
  ],
  chapters: [
    {
      title: {
        ko: '아키텍처 분류 기준 잡기',
        en: 'Establish the architecture lenses',
      },
      summary: {
        ko: 'Monolithic vs Headless, SaaS vs Self-hosted를 각각 다른 축으로 보고 혼동을 줄입니다.',
        en: 'Separate Monolithic vs Headless from SaaS vs Self-hosted so the comparison becomes easier to reason about.',
      },
      duration: {
        ko: '25분',
        en: '25m',
      },
      learn: [
        {
          ko: '왜 구조 축과 운영 축을 분리해서 봐야 하는지',
          en: 'Why structure and operating model need different comparison axes',
        },
        {
          ko: '서비스 초기에 가장 먼저 물어야 할 질문',
          en: 'The first questions to ask when designing a content stack',
        },
      ],
      artifacts: [
        {
          ko: '아키텍처 비교표',
          en: 'Architecture comparison table',
        },
      ],
    },
    {
      title: {
        ko: '대표 패턴과 제품군 읽기',
        en: 'Read the core patterns and product groups',
      },
      summary: {
        ko: '각 패턴의 장단점뿐 아니라 어떤 조직 조건에서 먼저 후보가 되는지도 함께 봅니다.',
        en: 'Go beyond pros and cons and learn when each pattern should become a first candidate.',
      },
      duration: {
        ko: '35분',
        en: '35m',
      },
      learn: [
        {
          ko: 'Monolithic과 Headless의 현실적인 차이',
          en: 'The practical difference between Monolithic and Headless CMS',
        },
        {
          ko: 'SaaS Embed와 Self-hosted를 기능 단위로 판단하는 법',
          en: 'How to judge SaaS Embed vs Self-hosted feature by feature',
        },
      ],
      artifacts: [
        {
          ko: '제품군 후보 리스트',
          en: 'Pattern/product shortlist',
        },
      ],
    },
    {
      title: {
        ko: '의사결정 프레임워크와 조합 레시피',
        en: 'Decision framework and combination recipes',
      },
      summary: {
        ko: '팀 규모, 데이터 민감도, 운영 역량, 비용 구조에 따라 어떤 조합을 추천할지 정리합니다.',
        en: 'Choose practical stack combinations based on team size, data sensitivity, ops strength, and cost shape.',
      },
      duration: {
        ko: '30분',
        en: '30m',
      },
      learn: [
        {
          ko: '규제 도메인과 스타트업 초기 단계의 선택 차이',
          en: 'How regulated domains differ from startup-phase decisions',
        },
        {
          ko: '비용 단위와 락인 위험을 함께 보는 방법',
          en: 'How to evaluate cost units and lock-in risk together',
        },
      ],
      artifacts: [
        {
          ko: '서비스별 선택 매트릭스',
          en: 'Service-specific decision matrix',
        },
      ],
    },
    {
      title: {
        ko: '실무 구현 핵심: 데이터 모델, 권한, 캐시',
        en: 'Implementation essentials: data, permissions, cache',
      },
      summary: {
        ko: '리비전, RBAC, 감사로그, 캐시 무효화 흐름을 실제 구현 단위로 묶어 봅니다.',
        en: 'Connect revisions, RBAC, audit logs, and cache invalidation as implementation-level concerns.',
      },
      duration: {
        ko: '35분',
        en: '35m',
      },
      learn: [
        {
          ko: 'CMS 데이터 모델의 핵심 엔티티',
          en: 'The core entities inside a CMS data model',
        },
        {
          ko: '발행 후 화면이 언제 바뀌는지 설명하는 방법',
          en: 'How to explain when the screen actually updates after publish',
        },
        {
          ko: '역할 기반 권한을 제품 운영에 맞게 설계하는 법',
          en: 'How to design RBAC around real product operations',
        },
      ],
      artifacts: [
        {
          ko: '데이터 모델 JSON 초안',
          en: 'Draft content model JSON',
        },
        {
          ko: 'RBAC 정책 예시',
          en: 'RBAC policy example',
        },
        {
          ko: '캐시 무효화 흐름 문서',
          en: 'Cache invalidation flow notes',
        },
      ],
    },
    {
      title: {
        ko: '운영·보안·확장 전략',
        en: 'Ops, security, and scale strategy',
      },
      summary: {
        ko: '댓글 승인 큐, 대용량 업로드, 장애 복구, 관측성을 어떤 순서로 붙이면 좋은지 정리합니다.',
        en: 'Review how moderation queues, large uploads, disaster recovery, and observability fit into the operating model.',
      },
      duration: {
        ko: '15분',
        en: '15m',
      },
      learn: [
        {
          ko: '보안과 운영 전략이 왜 설계 초기에 나와야 하는지',
          en: 'Why security and ops need to appear early in design work',
        },
        {
          ko: '확장 시점에 병목이 어디서 나타나는지',
          en: 'Where bottlenecks usually emerge as the system scales',
        },
      ],
      artifacts: [
        {
          ko: '구현 체크리스트',
          en: 'Implementation checklist',
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
        ko: '/example/cms-architecture/README.ko.md',
        en: '/example/cms-architecture/README.md',
      },
      type: {
        ko: '문서',
        en: 'Document',
      },
      description: {
        ko: '강의 전체 예제 파일과 읽는 순서를 정리한 문서입니다.',
        en: 'An index of the example files and the recommended reading order.',
      },
    },
    {
      label: {
        ko: '아키텍처 비교 문서',
        en: 'Architecture comparison notes',
      },
      href: {
        ko: '/example/cms-architecture/architecture-comparison.ko.md',
        en: '/example/cms-architecture/architecture-comparison.md',
      },
      type: {
        ko: '리서치 노트',
        en: 'Research notes',
      },
      description: {
        ko: '패턴별 선택 기준을 빠르게 다시 보는 요약본입니다.',
        en: 'A compact summary of the pattern-level decision criteria.',
      },
    },
    {
      label: {
        ko: '콘텐츠 모델 예시',
        en: 'Content model example',
      },
      href: {
        ko: '/example/cms-architecture/cms-content-model.json',
        en: '/example/cms-architecture/cms-content-model.json',
      },
      type: {
        ko: '데이터 모델',
        en: 'Data model',
      },
      description: {
        ko: '콘텐츠, 리비전, 권한, 감사로그를 어떻게 묶는지 보여주는 초안입니다.',
        en: 'A draft model showing how content, revisions, permissions, and audit logs fit together.',
      },
    },
    {
      label: {
        ko: '캐시 무효화 흐름',
        en: 'Cache invalidation flow',
      },
      href: {
        ko: '/example/cms-architecture/cache-invalidation-flow.ko.md',
        en: '/example/cms-architecture/cache-invalidation-flow.md',
      },
      type: {
        ko: '운영 문서',
        en: 'Ops notes',
      },
      description: {
        ko: 'publish 이후 어떤 캐시가 어떻게 갱신되는지 설명합니다.',
        en: 'Explains which caches update after publish and in what order.',
      },
    },
    {
      label: {
        ko: 'RBAC 정책 예시',
        en: 'RBAC policy example',
      },
      href: {
        ko: '/example/cms-architecture/rbac-policy-example.json',
        en: '/example/cms-architecture/rbac-policy-example.json',
      },
      type: {
        ko: '권한 정책',
        en: 'Permission policy',
      },
      description: {
        ko: '역할 기반 권한을 간단한 JSON 규칙으로 표현한 예시입니다.',
        en: 'A compact JSON example of role-based permissions.',
      },
    },
    {
      label: {
        ko: '구현 체크리스트',
        en: 'Implementation checklist',
      },
      href: {
        ko: '/example/cms-architecture/implementation-checklist.ko.md',
        en: '/example/cms-architecture/implementation-checklist.md',
      },
      type: {
        ko: '체크리스트',
        en: 'Checklist',
      },
      description: {
        ko: '실무 구현 전에 반드시 확인할 항목만 추린 목록입니다.',
        en: 'A concise list of what to verify before building the system.',
      },
    },
  ],
  faq: [
    {
      question: {
        ko: '이 강좌는 제품 비교 강의인가요, 구현 강의인가요?',
        en: 'Is this a product-comparison course or an implementation course?',
      },
      answer: {
        ko: '둘 다를 연결합니다. 제품/패턴 비교에서 끝나지 않고, 데이터 모델과 운영 체크리스트까지 내려와서 설계가 코드 직전 상태가 되도록 돕습니다.',
        en: 'It bridges both. You start with pattern/product comparison and end with data and ops artifacts that are close to implementation.',
      },
    },
    {
      question: {
        ko: '초급자에게 너무 추상적이지 않나요?',
        en: 'Is this too abstract for beginners?',
      },
      answer: {
        ko: '그래서 용어 정의, 비유, 선택 질문, JSON 예시를 함께 넣었습니다. 강의가 끝나면 “어떤 구조를 왜 택하는가”를 말로 설명할 수 있게 만드는 데 초점을 둡니다.',
        en: 'That is why the course includes glossary-style definitions, analogies, decision prompts, and JSON examples. The goal is to make the architecture explainable in plain language.',
      },
    },
    {
      question: {
        ko: '정답 스택이 있나요?',
        en: 'Is there a single correct stack?',
      },
      answer: {
        ko: '없습니다. 팀 역량, 데이터 민감도, 비용 구조, 속도 요구가 다르면 최적 선택도 달라집니다. 이 강좌는 그 판단 기준을 만드는 쪽에 가깝습니다.',
        en: 'No. Team strength, data sensitivity, cost shape, and speed requirements all change the answer. This course is about building the decision rule.',
      },
    },
  ],
};
