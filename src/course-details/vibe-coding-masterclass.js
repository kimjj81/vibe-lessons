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
    description: [
      {
        ko: '이 강좌는 생성형 AI를 “코드를 대신 써 주는 도구”로만 보지 않습니다. 오히려 작은 서비스를 빠르게 설계하고 구현하고 검증하는 작업 시스템으로 다루는 방법을 설명합니다. 초급자가 흔히 놓치는 것은 프롬프트 문장보다도 작업 순서, 문서 구조, 검증 기준입니다.',
        en: 'This course does not treat generative AI as a tool that simply writes code for you. Instead, it explains how to use it as part of a working system for designing, building, and validating a small product quickly. Beginners often struggle more with sequence, documentation, and validation than with prompt wording.',
      },
      {
        ko: '수강생은 아이디어를 MVP 수준으로 압축하고, PRD와 AGENTS 문서로 작업 맥락을 분리하고, 과한 기술 선택을 피하면서도 실제로 배포 가능한 구조를 잡는 흐름을 배우게 됩니다. 핵심은 “멋진 한 번의 프롬프트”가 아니라 재사용 가능한 개인 작업 루프를 만드는 것입니다.',
        en: 'You learn how to compress an idea into MVP scope, separate context through PRDs and AGENTS files, avoid overbuilt stack choices, and still end up with a structure that can be deployed. The real target is not one magical prompt, but a reusable personal working loop.',
      },
      {
        ko: '강의를 마치면 문서화, 스택 선정, 아키텍처 스케치, 검증 계획, 배포 전 점검까지 하나의 흐름으로 설명하고 반복할 수 있어야 합니다. 제공되는 예제 자료도 큰 코드베이스보다 템플릿과 구조 예시에 집중되어 있어, 바로 자기 프로젝트에 변형 적용하기 좋습니다.',
        en: 'By the end, you should be able to explain and repeat a full flow that covers documentation, stack choice, architecture sketching, verification planning, and pre-launch review. The example assets focus on templates and structural examples rather than a giant codebase, making them easy to adapt into your own project.',
      },
    ],
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
      body: [
        {
          ko: '많은 입문자는 바이브 코딩을 “AI에게 코드를 시키는 방법” 정도로 이해합니다. 하지만 실제로 생산성을 만드는 것은 코드 생성 그 자체보다, 어떤 목표를 세웠는지, 어떤 제약을 정의했는지, 언제 검증할지를 미리 정해 두는 작업입니다. 그래서 이 챕터는 코드보다 먼저 목표와 원칙을 이야기합니다.',
          en: 'Many beginners treat vibe coding as little more than telling an AI to write code. In practice, the real productivity comes from defining the goal, setting constraints, and deciding when verification happens. That is why this chapter talks about targets and principles before code.',
        },
        {
          ko: '비전은 “무엇을 만들 것인가”를 정하고, 철학은 “어떤 방식으로 만들 것인가”를 정하며, 결과물은 “무엇이 남아야 작업이 끝난 것인가”를 정합니다. 이 세 가지가 없으면 AI는 빠르게 움직일 수는 있어도, 방향이 흔들리기 쉽습니다. 반대로 세 가지가 선명하면 프롬프트가 조금 서툴러도 전체 흐름은 안정됩니다.',
          en: 'Vision decides what you are building, principles decide how you will build it, and deliverables decide what must exist for the work to count as done. Without those three anchors, AI can move fast but drift badly. With them, even an imperfect prompt can still live inside a stable workflow.',
        },
        {
          ko: '강의에서는 가드레일이 있는 작업 루프를 소개합니다. 목표를 잡고, AI에게 맥락을 주고, 작은 단위로 구현하고, 사람이 검증하고, 배포 후 다시 반복하는 구조입니다. 중요한 점은 AI가 모든 결정을 대신하는 것이 아니라, 사람이 기준을 쥐고 AI는 속도를 높이는 역할을 맡는다는 것입니다.',
          en: 'The course introduces a guardrailed working loop: define the target, pass context to the AI, implement in small units, verify with human judgment, and then iterate again after launch. The key idea is not that AI makes all decisions, but that humans keep the decision framework while AI increases speed.',
        },
      ],
      table: {
        caption: {
          ko: '바이브 코딩 루프를 구성하는 세 가지 기둥',
          en: 'The three pillars behind the vibe-coding loop',
        },
        headers: [
          { ko: '기둥', en: 'Pillar' },
          { ko: '핵심 질문', en: 'Core question' },
          { ko: '없으면 생기는 문제', en: 'What goes wrong without it' },
        ],
        rows: [
          [
            { ko: '비전', en: 'Vision' },
            { ko: '우리는 무엇을 증명하려는가?', en: 'What are we trying to prove?' },
            { ko: '기능은 늘어나는데 MVP 목적은 흐려짐', en: 'Features expand while the MVP purpose becomes vague' },
          ],
          [
            { ko: '철학', en: 'Principles' },
            { ko: '어떤 방식으로 빠르게 움직일 것인가?', en: 'How will we move quickly without losing control?' },
            { ko: '프롬프트와 작업 방식이 매번 흔들림', en: 'The prompting style and execution rhythm become inconsistent' },
          ],
          [
            { ko: '결과물', en: 'Deliverables' },
            { ko: '작업이 끝났다고 말할 근거는 무엇인가?', en: 'What proves the work is actually done?' },
            { ko: '코드는 생겼지만 문서·검증·출시 기준이 없음', en: 'Code exists, but documentation and release criteria do not' },
          ],
        ],
      },
      takeaways: [
        {
          ko: '좋은 바이브 코딩은 좋은 프롬프트보다 좋은 작업 구조에서 시작됩니다.',
          en: 'Good vibe coding starts with a good work structure before it starts with a good prompt.',
        },
        {
          ko: '비전, 철학, 결과물을 먼저 정하면 AI가 훨씬 덜 흔들립니다.',
          en: 'When vision, principles, and deliverables are defined first, the AI drifts far less.',
        },
        {
          ko: '가드레일은 속도를 늦추는 장치가 아니라 잘못된 방향으로 빨라지는 것을 막는 장치입니다.',
          en: 'Guardrails do not slow you down; they stop you from going fast in the wrong direction.',
        },
      ],
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
          title: {
            ko: '바이브 코딩 루프 다이어그램',
            en: 'Vibe coding loop diagram',
          },
          description: {
            ko: '목표 설정 → AI 지시 → 코드 생성 → 검증 → 배포/반복으로 이어지는 5단계 루프를 한 장에 정리한 도식입니다.',
            en: 'A one-page diagram of the five-step loop from target setting to AI direction, code generation, verification, and deploy/repeat.',
          },
          type: {
            ko: '다이어그램',
            en: 'Diagram',
          },
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
      body: [
        {
          ko: '초급자가 AI와 협업할 때 가장 자주 겪는 문제는 “같은 얘기를 계속 다시 해야 한다”는 것입니다. 대부분은 문서 역할을 분리하지 않았기 때문에 생깁니다. AGENTS.md는 작업 규칙과 제약 조건을 담아야 하고, PRD는 제품이 무엇을 해야 하는지와 왜 필요한지를 담아야 합니다.',
          en: 'One of the most common beginner frustrations is having to repeat the same context to the AI over and over. Most of that happens because document roles were never separated. AGENTS.md should carry operating rules and constraints, while the PRD should explain what the product must do and why it matters.',
        },
        {
          ko: 'AGENTS 문서에는 스타일, 작업 범위, 금지 사항, 검증 기준처럼 “어떻게 일할 것인가”가 들어갑니다. 반대로 PRD에는 사용자 문제, 성공 기준, 핵심 흐름, 범위, 우선순위처럼 “무엇을 만들 것인가”가 들어갑니다. 두 문서를 섞으면 AI는 규칙과 요구사항을 같은 층위의 정보로 읽어 혼동하기 쉽습니다.',
          en: 'An AGENTS file holds information about how work should be done: style, scope limits, forbidden operations, and verification rules. A PRD holds what should be built: the user problem, success criteria, scope, flows, and priorities. If you mix the two, the AI reads rules and requirements as if they belonged to the same layer.',
        },
        {
          ko: '이 챕터에서는 초급자도 바로 쓸 수 있는 문서 템플릿 구조를 소개합니다. 중요한 것은 문서를 길게 쓰는 것이 아니라, 이후의 구현과 검증을 흔들리지 않게 만드는 최소 구조를 갖추는 것입니다. 문서는 AI를 위한 설명이면서 동시에 나중에 스스로를 위한 체크포인트이기도 합니다.',
          en: 'The chapter introduces document templates that even beginners can reuse immediately. The goal is not to write long documents for their own sake, but to create the minimum stable structure that keeps implementation and verification aligned later. The documentation is for the AI, but it is also a checkpoint system for the human builder.',
        },
      ],
      table: {
        caption: {
          ko: 'AGENTS와 PRD를 분리해 써야 하는 이유',
          en: 'Why AGENTS and PRDs should stay separate',
        },
        headers: [
          { ko: '문서', en: 'Document' },
          { ko: '답하는 질문', en: 'Question it answers' },
          { ko: '대표 내용', en: 'Typical contents' },
          { ko: '혼동되면 생기는 문제', en: 'Failure mode when mixed' },
        ],
        rows: [
          [
            { ko: 'AGENTS.md', en: 'AGENTS.md' },
            { ko: '어떻게 일할 것인가?', en: 'How should the work be done?' },
            { ko: '작업 규칙, 검증 기준, 금지 사항, 스타일', en: 'Rules, verification, prohibitions, style' },
            { ko: 'AI가 요구사항보다 규칙을 우선하거나 반대로 무시함', en: 'The AI may over-prioritize rules or ignore them in favor of product work' },
          ],
          [
            { ko: 'PRD', en: 'PRD' },
            { ko: '무엇을 왜 만들 것인가?', en: 'What are we building and why?' },
            { ko: '문제 정의, 성공 기준, 핵심 흐름, 범위', en: 'Problem, success criteria, core flow, scope' },
            { ko: '기능은 많아지는데 의도와 우선순위가 흐려짐', en: 'Features expand while intent and priorities blur' },
          ],
        ],
      },
      takeaways: [
        {
          ko: 'AGENTS는 작업 규칙, PRD는 제품 요구를 담습니다.',
          en: 'AGENTS is for operating rules, PRD is for product requirements.',
        },
        {
          ko: '문서 역할이 분리되면 AI는 더 적은 설명으로 더 안정적으로 움직입니다.',
          en: 'Once document roles are separated, the AI moves more reliably with less repeated explanation.',
        },
        {
          ko: '좋은 문서는 구현 전에 쓰는 부담이 아니라 구현을 덜 흔들리게 만드는 도구입니다.',
          en: 'Good documentation is not overhead before implementation; it is what makes implementation less fragile.',
        },
      ],
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
          title: {
            ko: 'AGENTS.example(.ko).md 운영 규칙 템플릿',
            en: 'AGENTS.example(.md) operating-rules template',
          },
          description: {
            ko: 'AI가 어떤 규칙 아래에서 일해야 하는지, 무엇을 금지하고 어떻게 검증할지 적는 샘플 문서입니다.',
            en: 'A sample document for defining how the AI should work, what is disallowed, and how outputs should be verified.',
          },
          href: {
            ko: '/example/vibe-coding-masterclass/AGENTS.example.ko.md',
            en: '/example/vibe-coding-masterclass/AGENTS.example.md',
          },
          type: {
            ko: '템플릿',
            en: 'Template',
          },
        },
        {
          title: {
            ko: 'PRD-template(.ko).md 요구사항 템플릿',
            en: 'PRD-template(.md) requirements template',
          },
          description: {
            ko: '문제 정의, 성공 기준, 핵심 흐름, 범위를 짧게 정리해 AI와 사람 모두가 같은 목표를 보게 만드는 기본 PRD입니다.',
            en: 'A lightweight PRD for defining the problem, success criteria, core flow, and scope so both humans and AI point at the same target.',
          },
          href: {
            ko: '/example/vibe-coding-masterclass/PRD-template.ko.md',
            en: '/example/vibe-coding-masterclass/PRD-template.md',
          },
          type: {
            ko: '템플릿',
            en: 'Template',
          },
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
      body: [
        {
          ko: '초급자가 MVP에서 가장 많이 저지르는 실수 중 하나는, 아직 검증하지도 않은 아이디어에 너무 많은 기술을 붙이는 것입니다. 인증, 실시간 처리, 마이크로서비스, 복잡한 인프라가 필요해 보일 수 있지만, 실제로는 제품이 증명해야 할 핵심 가설 하나만 먼저 통과하면 되는 경우가 많습니다. 그래서 이 챕터는 “무엇이 멋진가”보다 “무엇이 충분한가”를 묻습니다.',
          en: 'One of the most common beginner mistakes in MVP work is attaching too much technology to an idea that has not even been validated yet. Auth, real-time systems, microservices, and complex infrastructure may look impressive, but most MVPs only need to prove one thing first. This chapter asks not what is impressive, but what is sufficient.',
        },
        {
          ko: '강의에서는 프로젝트 형태에 따라 프런트엔드, 백엔드, 인프라 후보를 좁히는 법을 보여 줍니다. 랜딩 페이지 중심인지, 대시보드형인지, 콘텐츠 중심인지, 자동화 중심인지에 따라 최소 조합이 달라집니다. 같은 Next.js라도 어떤 문제를 풀기 위해 쓰는지에 따라 비용과 복잡도가 완전히 달라질 수 있습니다.',
          en: 'The lecture shows how to narrow frontend, backend, and infrastructure choices based on project shape. A landing page, dashboard MVP, content-heavy product, and automation-first service all lead to different minimal stacks. Even when the same framework appears, the cost and complexity change depending on the actual problem it is solving.',
        },
        {
          ko: '비용 판단도 단순 월 요금 비교가 아닙니다. 클라우드 서비스는 개발 속도를 사는 것이고, Self-hosted는 운영 책임을 사는 것입니다. 초급자에게 중요한 것은 월 10달러 차이보다, 그 기술 선택 때문에 구현과 검증 속도가 얼마나 느려지는지까지 함께 보는 시야입니다.',
          en: 'Cost decisions are not just about comparing monthly bills. Managed cloud services often buy you speed, while self-hosted options buy you responsibility. For beginners, the more important question is not whether a tool is ten dollars cheaper, but whether it slows down implementation and validation at the stage where speed matters most.',
        },
      ],
      table: {
        caption: {
          ko: '프로젝트 유형별 최소 스택 판단 프레임워크',
          en: 'A minimum-stack decision framework by project shape',
        },
        headers: [
          { ko: '프로젝트 형태', en: 'Project shape' },
          { ko: '우선 프런트엔드', en: 'Preferred frontend' },
          { ko: '우선 백엔드 / 데이터', en: 'Preferred backend / data' },
          { ko: '이 조합이 맞는 이유', en: 'Why this combination fits' },
        ],
        rows: [
          [
            { ko: '랜딩 페이지 + 폼', en: 'Landing page + form' },
            { ko: 'Astro 또는 Next.js', en: 'Astro or Next.js' },
            { ko: '폼 백엔드 / 서버리스', en: 'Form backend / serverless' },
            { ko: '빠른 출시와 낮은 구성 복잡도가 중요함', en: 'Fast launch and low structural complexity matter most' },
          ],
          [
            { ko: '대시보드 MVP', en: 'Dashboard MVP' },
            { ko: 'Next.js', en: 'Next.js' },
            { ko: 'Supabase', en: 'Supabase' },
            { ko: '인증과 데이터 작업을 빠르게 연결하기 좋음', en: 'Useful when auth and data operations must connect quickly' },
          ],
          [
            { ko: '콘텐츠 중심 서비스', en: 'Content-centered service' },
            { ko: 'Next.js 또는 Astro', en: 'Next.js or Astro' },
            { ko: 'Headless CMS', en: 'Headless CMS' },
            { ko: '편집 흐름과 콘텐츠 재사용이 중요함', en: 'Editing workflow and content reuse matter more than custom backend logic' },
          ],
          [
            { ko: '자동화 중심 제품', en: 'Automation-heavy product' },
            { ko: 'React 또는 Next.js', en: 'React or Next.js' },
            { ko: 'Worker / queue / database', en: 'Worker / queue / database' },
            { ko: '페이지 수보다 비동기 작업이 핵심 가치임', en: 'Async task flow matters more than the number of pages' },
          ],
        ],
      },
      takeaways: [
        {
          ko: 'MVP 스택은 멋있어 보이는 조합이 아니라 핵심 가설을 가장 빨리 검증하는 조합이어야 합니다.',
          en: 'An MVP stack should validate the core hypothesis quickly, not merely look sophisticated.',
        },
        {
          ko: '비용은 월 요금뿐 아니라 구현 속도와 운영 부담까지 합쳐서 봐야 합니다.',
          en: 'Cost should include speed of implementation and operational burden, not just monthly price.',
        },
        {
          ko: '초기 단계에서 기술을 덜 고르는 것이 오히려 더 좋은 기술 선택일 때가 많습니다.',
          en: 'At the MVP stage, choosing less technology is often the better technical decision.',
        },
      ],
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
          title: {
            ko: 'stack-decision-matrix(.ko).md 스택 결정표',
            en: 'stack-decision-matrix(.md) stack decision matrix',
          },
          description: {
            ko: '프로젝트 형태별로 프런트엔드와 백엔드 후보를 좁혀 보는 표입니다. “무엇이 충분한가”를 판단하는 출발점으로 씁니다.',
            en: 'A matrix for narrowing frontend and backend options by project shape. It serves as a starting point for deciding what is sufficient.',
          },
          href: {
            ko: '/example/vibe-coding-masterclass/stack-decision-matrix.ko.md',
            en: '/example/vibe-coding-masterclass/stack-decision-matrix.md',
          },
          type: {
            ko: '의사결정표',
            en: 'Decision matrix',
          },
        },
        {
          title: {
            ko: '프로젝트 유형별 최소 스택 판단표',
            en: 'Minimum-stack guide by project shape',
          },
          description: {
            ko: '랜딩 페이지, 대시보드, 콘텐츠 서비스, 자동화 제품처럼 프로젝트 유형에 따라 어떤 스택이 과하지 않은지 판단하는 기준입니다.',
            en: 'A compact guide for deciding which stack is minimal enough for landing pages, dashboards, content products, and automation-heavy tools.',
          },
          type: {
            ko: '프레임워크',
            en: 'Framework',
          },
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
      body: [
        {
          ko: '초급자에게 가장 위험한 아키텍처는 “복잡한 아키텍처”가 아니라 “설명할 수 없는 아키텍처”입니다. AI와 협업할 때도 마찬가지입니다. 화면, API, 데이터 계층이 어디서 나뉘는지 명확하지 않으면 구현 단위가 흐려지고, 테스트 기준도 함께 흐려집니다. 그래서 이 챕터는 3-tier 구조를 예시로 삼아 경계를 명확하게 잡는 법을 설명합니다.',
          en: 'For beginners, the most dangerous architecture is not the most complex one, but the one that cannot be explained clearly. The same is true when working with AI. If screen, API, and data boundaries are vague, implementation slices blur and tests become harder to define. This chapter uses a three-tier MVP example to make those boundaries concrete.',
        },
        {
          ko: '식당 주문 MVP 예제에서는 고객용 UI, API routes 또는 server actions, 그리고 주문·테이블·메뉴 데이터를 관리하는 백엔드를 분리해서 봅니다. 이렇게 나누면 사용자가 겪는 흐름과 시스템 내부 로직을 같은 문장에 섞지 않을 수 있고, AI에게도 한 번에 하나의 책임만 설명하기 쉬워집니다.',
          en: 'The restaurant-ordering example separates the customer-facing UI, API routes or server actions, and the backend that manages orders, tables, and menu data. This keeps user-facing flows from being mixed with internal logic, and makes it much easier to explain one responsibility at a time to the AI.',
        },
        {
          ko: '또한 강의는 구현 단위를 어떻게 자를지를 함께 다룹니다. 한 번에 “주문 시스템 전체를 만들어 줘”라고 요청하는 대신, 메뉴 조회, 주문 생성, 상태 변경, 관리자 대시보드처럼 작은 단위로 쪼개야 AI의 결과도 읽기 쉬워지고 실패 시 수정도 쉬워집니다. 작은 작업 단위는 곧 더 나은 검증 단위이기도 합니다.',
          en: 'The lecture also explains how to slice implementation work. Instead of asking for the whole ordering system at once, it is more effective to break the work into menu retrieval, order creation, status updates, and admin views. Smaller work units make AI output easier to inspect and make failures easier to fix. Small build slices also create better test slices.',
        },
      ],
      table: {
        caption: {
          ko: '식당 주문 MVP 예제로 보는 3-tier 책임 분리',
          en: 'A three-tier responsibility split using the restaurant-ordering MVP',
        },
        headers: [
          { ko: '계층', en: 'Layer' },
          { ko: '무엇을 담당하는가', en: 'What it owns' },
          { ko: '예시 기능', en: 'Example features' },
          { ko: 'AI와 협업할 때 잘게 자르는 단위', en: 'Good slice when working with AI' },
        ],
        rows: [
          [
            { ko: '화면 계층', en: 'Screen layer' },
            { ko: '사용자 경험과 입력 흐름', en: 'User experience and input flow' },
            { ko: '메뉴 보기, 장바구니, 주문 화면', en: 'Menu display, cart, checkout view' },
            { ko: '페이지 단위 또는 UI 컴포넌트 단위', en: 'Page-level or component-level slices' },
          ],
          [
            { ko: 'API 계층', en: 'API layer' },
            { ko: '검증, 상태 전환, 서버 로직', en: 'Validation, state transitions, server logic' },
            { ko: '주문 생성, 상태 변경, 관리자 액션', en: 'Order creation, status update, admin actions' },
            { ko: '엔드포인트 단위 또는 액션 단위', en: 'Endpoint-level or action-level slices' },
          ],
          [
            { ko: '데이터 계층', en: 'Data layer' },
            { ko: '영속 데이터와 읽기/쓰기 규칙', en: 'Persistent data and read/write rules' },
            { ko: 'orders, tables, menu, auth', en: 'orders, tables, menu, auth' },
            { ko: '스키마 단위 또는 쿼리 단위', en: 'Schema-level or query-level slices' },
          ],
        ],
      },
      takeaways: [
        {
          ko: '좋은 MVP 아키텍처는 화려한 구조보다 설명 가능한 구조에 가깝습니다.',
          en: 'A good MVP architecture is closer to an explainable structure than an impressive one.',
        },
        {
          ko: '작은 구현 단위는 좋은 AI 협업 단위이자 좋은 검증 단위입니다.',
          en: 'Small implementation slices are both good AI collaboration units and good test units.',
        },
        {
          ko: '계층을 나누는 기준이 명확할수록 수정과 배포가 쉬워집니다.',
          en: 'The clearer the layer boundaries, the easier changes and release work become.',
        },
      ],
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
          title: {
            ko: 'mvp-architecture-example(.ko).md 3-tier 아키텍처 예시',
            en: 'mvp-architecture-example(.md) three-tier architecture example',
          },
          description: {
            ko: '고객 UI, API 계층, 데이터 계층을 어떻게 나누면 설명과 구현, 검증이 쉬워지는지 보여 주는 예시 문서입니다.',
            en: 'A worked example showing how to split customer UI, API logic, and the data layer so implementation and review stay understandable.',
          },
          href: {
            ko: '/example/vibe-coding-masterclass/mvp-architecture-example.ko.md',
            en: '/example/vibe-coding-masterclass/mvp-architecture-example.md',
          },
          type: {
            ko: '예시 문서',
            en: 'Example doc',
          },
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
      body: [
        {
          ko: '많은 초급자는 “화면이 뜨고 API가 응답하면 끝났다”고 생각합니다. 하지만 실제 배포 직전에는 최소한 어떤 흐름이 실제 사용자 기준으로 통과해야 하는지, 어떤 비밀값과 권한 설정이 안전한지, 문제가 생기면 어디서 바로 롤백할지까지 함께 확인해야 합니다. 이 챕터는 그런 출시 직전 판단 기준을 다룹니다.',
          en: 'Many beginners assume the work is done once the screen renders and the API responds. In reality, just before launch you still need to confirm which end-to-end flows work for real users, whether secrets and permissions are safe, and how you would roll back quickly if something goes wrong. This chapter focuses on that release threshold.',
        },
        {
          ko: '검증은 단순히 테스트 툴을 돌리는 행위가 아닙니다. 가장 중요한 사용자 시나리오를 정하고, 사람이 직접 한 번 더 통과시켜 보고, 실패했을 때 어디가 깨졌는지 추적할 수 있는 로그와 메모를 남기는 것이 함께 필요합니다. 특히 AI가 만든 코드일수록 “겉으로는 되는 것 같지만 조건이 하나 빠진” 상태가 자주 나오기 때문에 직접 확인이 중요합니다.',
          en: 'Verification is not only about running tools. You also need to identify the highest-value user flow, pass it manually at least once, and leave enough logs and notes to trace failure when it breaks. This matters even more with AI-generated code, which often looks correct on the surface while still missing a critical edge case.',
        },
        {
          ko: '보안 체크는 거대한 보안 감사를 의미하지 않습니다. MVP 단계에서는 비밀값 노출 방지, 권한 경계, 입력 검증, 외부 API 사용 방식처럼 가장 큰 사고를 만드는 지점부터 줄여 가면 됩니다. 강의는 이 체크리스트를 작고 실용적으로 유지하는 법을 설명합니다.',
          en: 'A security check does not mean a massive security audit. At the MVP stage, it is enough to reduce the biggest risks first: exposed secrets, weak permission boundaries, missing input validation, and unsafe external API usage. The lecture shows how to keep that checklist small and practical.',
        },
      ],
      table: {
        caption: {
          ko: '배포 직전 최소 확인표',
          en: 'A minimum pre-launch review table',
        },
        headers: [
          { ko: '확인 영역', en: 'Checkpoint' },
          { ko: '직접 확인할 것', en: 'What to verify directly' },
          { ko: '문제가 보이면 의심할 곳', en: 'Where to look first if it fails' },
        ],
        rows: [
          [
            { ko: '핵심 사용자 흐름', en: 'Core user flow' },
            { ko: '대표 시나리오가 처음부터 끝까지 통과하는가?', en: 'Does the main scenario complete end to end?' },
            { ko: 'API 연결, 상태 전환, 입력 검증', en: 'API boundaries, state changes, input validation' },
          ],
          [
            { ko: '비밀값과 권한', en: 'Secrets and permissions' },
            { ko: '환경 변수, 관리자 권한, 배포 설정이 안전한가?', en: 'Are env vars, admin paths, and deployment settings safe?' },
            { ko: '배포 환경 설정, auth 규칙, 클라이언트 노출 변수', en: 'Deployment config, auth rules, client-exposed values' },
          ],
          [
            { ko: '릴리즈 대응', en: 'Release response' },
            { ko: '문제 발생 시 로그와 롤백 경로가 있는가?', en: 'Do you have logs and a rollback path?' },
            { ko: '배포 로그, 모니터링, 이전 버전 복구 경로', en: 'Deploy logs, monitoring, previous version recovery path' },
          ],
        ],
      },
      takeaways: [
        {
          ko: '동작하는 MVP와 내놓을 수 있는 MVP는 다릅니다.',
          en: 'A working MVP and a launchable MVP are not the same thing.',
        },
        {
          ko: 'AI가 만든 결과일수록 핵심 흐름은 사람이 직접 통과시켜 봐야 합니다.',
          en: 'The more AI-generated the code is, the more important it is to manually verify the core flow.',
        },
        {
          ko: '출시 전 체크리스트는 크지 않아도 되지만 반드시 존재해야 합니다.',
          en: 'A pre-launch checklist does not need to be large, but it must exist.',
        },
      ],
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
          title: {
            ko: '배포 전 검증/보안 체크리스트 초안',
            en: 'Pre-launch verification and security checklist draft',
          },
          description: {
            ko: '핵심 사용자 흐름, 비밀값, 권한 경계, 로그와 롤백 경로를 어떤 순서로 확인할지 정리한 출시 직전 메모입니다.',
            en: 'A release-time note covering core user flows, secrets, permission boundaries, logs, and rollback paths in the right review order.',
          },
          type: {
            ko: '체크리스트',
            en: 'Checklist',
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
  evidence: [
    {
      type: 'diagram',
      title: {
        ko: '가드레일 기반 바이브 코딩 루프',
        en: 'Guardrailed vibe-coding loop',
      },
      description: {
        ko: '슬라이드의 원형 다이어그램을 overview에서도 읽을 수 있도록 텍스트 다이어그램으로 정리했습니다.',
        en: 'A text version of the circular slide diagram so the core loop remains visible in the overview.',
      },
      language: 'text',
      code: `Set target
   ↓
Direct the AI
   ↓
Generate code
   ↓
Verify & test
   ↓
Deploy & repeat
   ↺`,
    },
    {
      type: 'diagram',
      title: {
        ko: 'AGENTS와 PRD의 역할 분리',
        en: 'AGENTS vs PRD split',
      },
      description: {
        ko: '문서 역할을 섞지 않기 위한 최소 구조를 한눈에 보여 줍니다.',
        en: 'Shows the minimum separation needed so operating rules and product requirements do not get mixed.',
      },
      language: 'text',
      code: `AGENTS.md → how the work is done
PRD       → what is built and why

Rules / guardrails stay here
Scope / success criteria stay there`,
    },
    {
      type: 'diagram',
      title: {
        ko: '식당 주문 MVP 3-tier 구조',
        en: 'Restaurant-ordering MVP 3-tier structure',
      },
      description: {
        ko: '슬라이드와 예제 문서에서 반복해서 사용하는 MVP 구조 예시입니다.',
        en: 'The MVP architecture example repeated across the slide deck and supporting docs.',
      },
      language: 'text',
      code: `Customer UI (Next.js / React)
  -> API routes / server actions
  -> Supabase (orders, tables, menu)
  -> Admin dashboard / operations view`,
    },
  ],
};
