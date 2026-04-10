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
      ko: '콘텐츠를 어디서 관리하고, 어떤 기능을 외부 서비스에 위임하며, 캐시와 권한은 어떻게 설계해야 하는지 입문자 눈높이로 정리한 구조 설계 강의입니다. Monolithic, Headless, SaaS Embed, Self-hosted를 비교하는 데서 멈추지 않고 데이터 모델과 운영 체크리스트까지 내려옵니다.',
      en: 'A structural design course for beginners on where content lives, which features to outsource, and how cache and permissions shape the system. It goes beyond pattern comparison and carries the discussion down into data models and operating checklists.',
    },
    description: [
      {
        ko: '많은 초급자는 CMS를 “어떤 제품을 쓰면 되는가”의 문제로만 이해합니다. 하지만 실제 서비스에서는 어떤 시스템이 HTML을 만들고, 어떤 시스템이 콘텐츠를 보관하고, 누가 권한을 관리하고, 누가 장애와 비용을 책임지는지가 함께 결정되어야 합니다. 이 강좌는 그 책임 경계를 한 번에 정리하는 데 초점을 둡니다.',
        en: 'Many beginners think of CMS decisions as a simple product-picking exercise. In real services, you also need to decide which system generates HTML, which system stores content, who owns permissions, and who absorbs operational cost and failure. This course focuses on making those boundaries visible.',
      },
      {
        ko: '강의는 Monolithic, Headless, SaaS Embed, Self-hosted를 각각 따로 설명하는 데서 끝나지 않고, 그것들이 실제 서비스에서 어떻게 섞여 쓰이는지까지 다룹니다. 따라서 “정답 제품”을 외우기보다 “우리 조직에는 어떤 책임 분배가 맞는가”를 판단하는 기준을 배우게 됩니다.',
        en: 'The lecture does not stop at explaining Monolithic, Headless, SaaS Embed, and Self-hosted in isolation. It also covers how they combine inside real systems. Instead of memorizing a single correct product, you learn how to choose the right ownership split for your organization.',
      },
      {
        ko: '최종적으로는 구조 비교표, 제품군 후보, 데이터 모델 초안, RBAC 메모, 캐시 무효화 흐름, 구현 체크리스트처럼 구현 직전에 바로 사용할 수 있는 설계 산출물을 만들 수 있도록 구성되어 있습니다.',
        en: 'By the end, the course is designed to leave you with implementation-near artifacts such as comparison tables, product shortlists, content model drafts, RBAC notes, cache invalidation flows, and implementation checklists.',
      },
    ],
    deliverable: {
      ko: '결과물: 내 서비스에 맞는 CMS 구조 선택표, 최소 콘텐츠 모델 초안, 역할/권한 메모, 캐시 무효화 흐름 문서, 구현 전 운영 체크리스트',
      en: 'Deliverable: a CMS decision matrix, a minimum content model, role/permission notes, a cache invalidation flow note, and implementation checklists for your product.',
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
    {
      ko: '자신의 서비스 아이디어가 하나쯤 있으면 비교 기준을 실제 문제에 적용해 보기에 좋습니다.',
      en: 'It helps to have a product idea of your own so you can apply the framework to a real scenario while learning.',
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
    {
      ko: '이 강좌는 정답을 외우는 과목이 아니라 질문을 정리하는 과목에 가깝기 때문에, 챕터마다 “누가 무엇을 책임지는가”를 메모해 두는 것이 좋습니다.',
      en: 'This course is closer to a question-building exercise than a memorization exercise, so it helps to keep writing down who owns what as you move through each chapter.',
    },
  ],
  chapters: [
    {
      title: {
        ko: '아키텍처 분류 기준 잡기',
        en: 'Establish the architecture lenses',
      },
      summary: {
        ko: 'Monolithic vs Headless, SaaS vs Self-hosted를 각각 다른 비교 축으로 보고 혼동을 줄입니다. 구조의 차이와 운영 방식의 차이를 나눠 보면 책임 경계가 훨씬 선명해집니다.',
        en: 'Separate Monolithic vs Headless from SaaS vs Self-hosted so the comparison becomes easier to reason about. Once structure and operating model are split apart, responsibility boundaries become much clearer.',
      },
      body: [
        {
          ko: '왜 구조 축과 운영 축을 분리해서 봐야 할까요? 같은 Headless CMS를 써도 SaaS 제품을 선택할 수 있고, 오픈소스 제품을 직접 설치할 수도 있기 때문입니다. 반대로 Monolithic CMS도 벤더가 운영해 주는 호스팅형을 쓸 수 있고, 우리 서버에 직접 올릴 수도 있습니다. 이 두 질문을 한 번에 섞으면 제품 이름만 남고 책임 경계가 사라집니다.',
          en: 'Why do structure and operating model need to be separated? Because the same Headless CMS idea can be delivered as a hosted SaaS product or as software you self-host. The same is true for Monolithic CMS products. If you mix those questions together, only product names remain and the real ownership boundaries disappear.',
        },
        {
          ko: '구조 축은 “누가 HTML을 만들고 누가 콘텐츠를 관리하는가”를 묻습니다. Monolithic CMS는 콘텐츠 관리와 프레젠테이션을 한 시스템이 함께 맡습니다. Headless CMS는 콘텐츠를 API로 제공하고, 프런트엔드가 별도로 화면을 만듭니다. 따라서 구조 축은 주로 프런트엔드 자유도, 멀티채널 확장, 캐시 설계 난이도와 연결됩니다.',
          en: 'The structure axis asks who generates HTML and who manages content. A Monolithic CMS keeps content management and presentation in one system. A Headless CMS exposes content through APIs while a separate frontend renders the user experience. This axis mostly affects frontend freedom, multi-channel expansion, and cache strategy.',
        },
        {
          ko: '운영 축은 “이 기능을 누가 운영하고 장애와 비용을 책임지는가”를 묻습니다. SaaS Embed는 댓글, 검색, 분석, 인증 같은 기능을 외부 서비스에 위임하고 스크립트나 SDK로 붙입니다. Self-hosted는 오픈소스 도구나 별도 서비스를 직접 배포하고 업데이트, 백업, 보안 패치, 관측성까지 책임집니다. 따라서 운영 축은 데이터 주권, 인프라 인력, 월 비용 구조와 더 직접적으로 연결됩니다.',
          en: 'The operating axis asks who runs the feature and who absorbs the cost and failure. SaaS Embed delegates features like comments, search, analytics, or auth to an external provider through scripts or SDKs. Self-hosted tools put deployment, upgrades, backups, security patches, and observability back onto your team. This axis is tightly tied to data sovereignty, staffing, and cost shape.',
        },
        {
          ko: '서비스 초기에 가장 먼저 던져야 할 질문도 이 두 축을 기준으로 나뉩니다. “우리는 웹사이트가 핵심 채널인가, 앱과 API까지 동시에 운영해야 하는가?”는 구조 질문입니다. “우리는 이 기능의 장애를 직접 감당할 수 있는가, 아니면 월 비용을 내더라도 외부에 맡기는 것이 나은가?”는 운영 질문입니다. 초급자에게 중요한 것은 제품 이름보다 이 질문을 먼저 쓰는 습관입니다.',
          en: 'The first design questions also split cleanly along these axes. “Is the website our main surface, or do we need web, app, and API together?” is a structure question. “Can we own outages and upgrades for this feature, or should we pay monthly to delegate them?” is an operating question. For beginners, the habit of writing these questions first matters more than memorizing product names.',
        },
      ],
      table: {
        caption: {
          ko: '구조 축과 운영 축을 구분해서 볼 때의 핵심 질문',
          en: 'Key questions when you separate structure from operating model',
        },
        headers: [
          { ko: '비교 축', en: 'Axis' },
          { ko: '핵심 질문', en: 'Core question' },
          { ko: '대표 선택지', en: 'Typical choices' },
          { ko: '주로 영향받는 것', en: 'What it mostly affects' },
        ],
        rows: [
          [
            { ko: '구조 축', en: 'Structure axis' },
            { ko: 'HTML 생성과 콘텐츠 관리를 누가 맡는가?', en: 'Who owns HTML generation and content management?' },
            { ko: 'Monolithic / Headless', en: 'Monolithic / Headless' },
            { ko: '프런트엔드 자유도, 멀티채널, 캐시 설계', en: 'Frontend freedom, multi-channel delivery, cache strategy' },
          ],
          [
            { ko: '운영 축', en: 'Operating axis' },
            { ko: '장애, 업데이트, 비용, 데이터 통제를 누가 책임지는가?', en: 'Who owns outages, upgrades, cost, and data control?' },
            { ko: 'SaaS Embed / Self-hosted', en: 'SaaS Embed / Self-hosted' },
            { ko: '운영 인력, 데이터 주권, 월 비용, 보안 책임', en: 'Ops staffing, data sovereignty, monthly cost, security ownership' },
          ],
        ],
      },
      takeaways: [
        {
          ko: 'Monolithic vs Headless는 구조 질문이고, SaaS vs Self-hosted는 운영 책임 질문입니다.',
          en: 'Monolithic vs Headless is a structure question, while SaaS vs Self-hosted is an operating-ownership question.',
        },
        {
          ko: '제품 이름보다 먼저 “누가 HTML을 만들고 누가 장애를 책임지는가”를 적어야 합니다.',
          en: 'Before naming products, write down who renders HTML and who owns failure.',
        },
        {
          ko: '초기 설계가 쉬워지는 가장 빠른 방법은 두 축을 섞지 않는 것입니다.',
          en: 'The fastest way to make early architecture clearer is to stop mixing the two axes.',
        },
      ],
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
          title: {
            ko: '구조 축 / 운영 축 비교표와 핵심 질문 목록',
            en: 'Architecture-axis comparison table and key questions list',
          },
          description: {
            ko: 'Monolithic/Headless와 SaaS/Self-hosted를 다른 질문으로 봐야 하는 이유를 정리한 비교표입니다.',
            en: 'A comparison table showing why Monolithic/Headless and SaaS/Self-hosted must be treated as different questions.',
          },
          href: {
            ko: '/example/cms-architecture/architecture-comparison.ko.md',
            en: '/example/cms-architecture/architecture-comparison.md',
          },
          type: {
            ko: '비교표',
            en: 'Comparison table',
          },
        },
      ],
    },
    {
      title: {
        ko: '대표 패턴과 제품군 읽기',
        en: 'Read the core patterns and product groups',
      },
      summary: {
        ko: '각 패턴의 장단점뿐 아니라 어떤 조직 조건에서 먼저 후보가 되는지도 함께 봅니다. 제품 기능보다 팀 역량, 채널 수, 데이터 통제권 같은 현실 조건과 연결해서 읽는 법을 다룹니다.',
        en: 'Go beyond pros and cons and learn when each pattern should become a first candidate. The chapter ties those patterns to practical constraints like team strength, number of channels, and data control requirements.',
      },
      body: [
        {
          ko: 'Monolithic CMS는 웹사이트 자체가 핵심 채널일 때 강력합니다. 편집기와 프런트엔드 테마가 한 시스템 안에 있기 때문에, 비개발자도 글을 수정하고 바로 화면 결과를 확인하기 쉽습니다. WordPress, Drupal, TYPO3 같은 제품이 대표적이며, 마케팅 페이지나 블로그처럼 웹 표면이 중심일 때 특히 빠르게 출발할 수 있습니다.',
          en: 'A Monolithic CMS is strongest when the website itself is the main product surface. Because the editor and presentation theme live together, non-developers can change content and immediately understand the visual result. WordPress, Drupal, and TYPO3 are common examples, especially useful when blogs or marketing surfaces dominate the service.',
        },
        {
          ko: 'Headless CMS는 여러 채널이 같은 콘텐츠를 소비해야 할 때 유리합니다. 웹, 앱, 문서, 사내 도구가 모두 같은 콘텐츠를 써야 한다면 API 중심 구조가 훨씬 유연합니다. 대신 프런트엔드가 분리되는 만큼 publish 이후 어떤 캐시가 갱신되어야 하는지, 어떤 경로가 다시 생성되어야 하는지까지 설계해야 합니다. 자유도는 커지지만 운영 난이도도 함께 올라갑니다.',
          en: 'A Headless CMS works best when multiple channels consume the same content. If web, mobile, docs, and internal tools all need the same source of truth, an API-centric structure is more flexible. The tradeoff is that you must explicitly design post-publish cache invalidation, route regeneration, and frontend integration. Freedom goes up, but so does operational complexity.',
        },
        {
          ko: 'SaaS Embed는 댓글, 검색, 분석, 인증처럼 서비스의 일부 기능만 빠르게 붙이고 싶을 때 적합합니다. 처음부터 모든 기능을 직접 만들지 않아도 되므로 속도가 빠르고 초기 리스크가 낮습니다. 다만 스크립트 로딩, 외부 서비스 장애, 사용량 기반 과금, 정책 변경 같은 외부 의존 리스크를 같이 받아들여야 합니다.',
          en: 'SaaS Embed is a strong option when you need comments, search, analytics, or auth quickly without building them yourself. This lowers early delivery risk and shortens time to value. The tradeoff is vendor dependency: script loading, provider outages, usage-based pricing, and policy changes become part of your architecture whether you planned for them or not.',
        },
        {
          ko: 'Self-hosted 도구는 데이터 통제권과 커스터마이징 측면에서 매력적입니다. 그러나 오픈소스를 직접 배포한다는 것은 설치만 끝나는 일이 아니라, 패치, 백업, 장애 대응, 로그 수집, 업그레이드 경로까지 함께 갖는다는 뜻입니다. 따라서 Self-hosted는 기술 자유의 다른 이름이기도 하지만, 동시에 운영 책임의 증가를 뜻합니다.',
          en: 'Self-hosted tools are attractive when you need stronger data control and deeper customization. But self-hosting never stops at installation. It includes patching, backup, outage response, log collection, and upgrade planning. In other words, self-hosting means more technical freedom and more operational responsibility at the same time.',
        },
        {
          ko: '이 챕터의 핵심은 “어떤 제품이 최고인가”가 아니라 “어떤 조건에서 무엇이 먼저 후보가 되는가”를 읽는 법입니다. 예를 들어 운영 인력이 거의 없고 웹사이트가 핵심 채널이면 Monolithic + SaaS 조합이 자연스럽고, 멀티채널과 데이터 통제가 동시에 중요하면 Headless + Self-hosted가 더 먼저 후보가 됩니다.',
          en: 'The main lesson of this chapter is not which product is universally best, but how to recognize which pattern becomes a first candidate under specific conditions. A website-first team with minimal ops staff often lands on Monolithic + SaaS. A multi-channel, data-sensitive organization may naturally move toward Headless + Self-hosted.',
        },
      ],
      table: {
        caption: {
          ko: '대표 제품·운영 형태·비용 감각 비교표 (공식 페이지 기준, 2026-04 스냅샷)',
          en: 'Representative products, operating model, and pricing comparison (official-page snapshot, April 2026)',
        },
        headers: [
          { ko: '제품', en: 'Product' },
          { ko: '분류', en: 'Category' },
          { ko: '라이선스 / 배포 성격', en: 'License / distribution model' },
          { ko: '운영 형태', en: 'Operating model' },
          { ko: '시작 비용 감각', en: 'Starting cost shape' },
          { ko: '먼저 떠오르는 상황', en: 'When it becomes a first candidate' },
        ],
        rows: [
          [
            { ko: 'WordPress', en: 'WordPress' },
            { ko: 'Monolithic CMS', en: 'Monolithic CMS' },
            { ko: 'GPLv2+ 오픈소스, WordPress.com 관리형 호스팅도 존재', en: 'GPLv2+ open source, with WordPress.com as a managed-hosting option' },
            { ko: 'Self-hosted 또는 WordPress.com managed hosting', en: 'Self-hosted or WordPress.com managed hosting' },
            { ko: '소프트웨어 자체는 무료, WordPress.com은 free부터 시작하며 상위 플랜으로 확장', en: 'Software is free; WordPress.com starts with a free plan and scales into paid tiers' },
            { ko: '웹사이트/블로그가 핵심 채널이고 편집 속도가 가장 중요할 때', en: 'When the website or blog is the main channel and editorial speed matters most' },
          ],
          [
            { ko: 'Drupal', en: 'Drupal' },
            { ko: 'Monolithic CMS', en: 'Monolithic CMS' },
            { ko: 'GPLv2+ 오픈소스', en: 'GPLv2+ open source' },
            { ko: '주로 self-hosted, 파트너/벤더 호스팅은 별도', en: 'Primarily self-hosted, with partner hosting sold separately' },
            { ko: '소프트웨어 자체는 무료, 실제 비용은 호스팅·구축·운영에서 발생', en: 'Software is free; real cost comes from hosting, implementation, and operations' },
            { ko: '복잡한 권한/콘텐츠 구조가 필요하지만 여전히 웹 중심일 때', en: 'When the site is still web-centric but needs richer content and permission structure' },
          ],
          [
            { ko: 'TYPO3', en: 'TYPO3' },
            { ko: 'Monolithic CMS', en: 'Monolithic CMS' },
            { ko: 'GPLv2+ 오픈소스, 공식 ELTS는 상용 옵션', en: 'GPLv2+ open source, with commercial ELTS as an optional add-on' },
            { ko: '주로 self-hosted', en: 'Primarily self-hosted' },
            { ko: '소프트웨어 자체는 무료, v12 ELTS는 공식 기준 연 €3,200부터', en: 'Software is free; official v12 ELTS starts at €3,200/year' },
            { ko: '장기 지원, 엔터프라이즈 운영, 디지털 주권을 중요하게 볼 때', en: 'When long-term support, enterprise operations, and digital sovereignty matter' },
          ],
          [
            { ko: 'Contentful', en: 'Contentful' },
            { ko: 'Headless CMS (SaaS)', en: 'Headless CMS (SaaS)' },
            { ko: '벤더 관리형 SaaS', en: 'Vendor-managed SaaS' },
            { ko: 'Contentful Cloud', en: 'Contentful Cloud' },
            { ko: 'Free $0 / Lite $300월 / Premium custom', en: 'Free $0 / Lite $300 per month / Premium custom' },
            { ko: '멀티채널 콘텐츠 운영과 엔터프라이즈 거버넌스가 중요할 때', en: 'When multi-channel content delivery and enterprise governance matter' },
          ],
          [
            { ko: 'Sanity', en: 'Sanity' },
            { ko: 'Headless CMS (SaaS)', en: 'Headless CMS (SaaS)' },
            { ko: '벤더 관리형 SaaS', en: 'Vendor-managed SaaS' },
            { ko: 'Sanity hosted content platform', en: 'Sanity hosted content platform' },
            { ko: 'Free $0 / Growth 좌석당 $15월 / Enterprise custom', en: 'Free $0 / Growth $15 per seat-month / Enterprise custom' },
            { ko: '편집 협업, 실시간 미리보기, 구조화 콘텐츠가 필요할 때', en: 'When editorial collaboration, live preview, and structured content matter' },
          ],
          [
            { ko: 'Strapi', en: 'Strapi' },
            { ko: 'Headless CMS (open core)', en: 'Headless CMS (open core)' },
            { ko: 'Community Edition는 오픈소스, 상위 기능은 Growth/Enterprise', en: 'Community Edition is open source; advanced features live in Growth / Enterprise' },
            { ko: 'Self-hosted Community 또는 Strapi Cloud + CMS license', en: 'Self-hosted Community or Strapi Cloud plus CMS license' },
            { ko: 'Cloud Essential $15/project월부터, self-host Community는 무료지만 공식 지원 없음', en: 'Cloud Essential starts at $15 per project-month; self-hosted Community is free but has no official support' },
            { ko: 'API 중심 구조가 필요하고 self-host와 managed hosting 사이를 유연하게 고르고 싶을 때', en: 'When you want API-first structure with flexibility between self-hosting and managed hosting' },
          ],
          [
            { ko: 'Payload', en: 'Payload' },
            { ko: 'Headless CMS / app framework', en: 'Headless CMS / app framework' },
            { ko: '오픈소스 self-host 중심, 개인용 Personal free tier 공개', en: 'Open-source and self-host-first, with a public free Personal tier for individuals' },
            { ko: '주로 self-hosted, managed cloud는 별도 제공/판매', en: 'Primarily self-hosted, with managed cloud sold separately' },
            { ko: '개인용 Personal free forever, 팀/Pro는 사용자 수 기준 상위 티어', en: 'Personal is free forever; Team and Pro tiers expand admin-user capacity' },
            { ko: '코드 중심 구성과 Next.js 통합을 강하게 원할 때', en: 'When you want a strongly code-first setup with tight Next.js integration' },
          ],
          [
            { ko: 'Directus', en: 'Directus' },
            { ko: 'Headless CMS / data platform', en: 'Headless CMS / data platform' },
            { ko: 'self-host 무료 사용 가능, 대형 프로덕션은 상용 라이선스 조건 존재', en: 'Free to self-host in many cases, with commercial-license conditions for large production use' },
            { ko: 'Self-hosted 또는 Directus Cloud Professional/Enterprise', en: 'Self-hosted or Directus Cloud Professional / Enterprise' },
            { ko: 'Self-host는 총재정 $5M 미만이면 무료, Cloud Professional은 $99월부터', en: 'Self-host is free under the $5M-finances rule; Cloud Professional starts at $99/month' },
            { ko: '콘텐츠뿐 아니라 내부 데이터 운영 도구로도 함께 쓰고 싶을 때', en: 'When you want a backend that can serve both content and internal data operations' },
          ],
        ],
      },
      takeaways: [
        {
          ko: '패턴을 외우기보다 어떤 조직 조건에서 먼저 후보가 되는지를 읽어야 합니다.',
          en: 'You should learn when a pattern becomes a first candidate, not just memorize the pattern names.',
        },
        {
          ko: 'Headless는 자유도를 주지만, publish 이후 동작을 더 많이 설계해야 합니다.',
          en: 'Headless gives flexibility, but it also forces you to design more of the post-publish flow yourself.',
        },
        {
          ko: 'Self-hosted는 설치보다 운영 이후 비용과 책임이 더 큰 결정입니다.',
          en: 'Self-hosting is less about installation and more about the long-term operating burden it creates.',
        },
      ],
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
          title: {
            ko: 'architecture-comparison(.ko).md 패턴 비교 메모',
            en: 'architecture-comparison(.md) pattern comparison notes',
          },
          description: {
            ko: 'Monolithic, Headless, SaaS Embed, Self-hosted가 어떤 상황에서 먼저 후보가 되는지 빠르게 다시 볼 수 있는 메모입니다.',
            en: 'A compact note for revisiting when Monolithic, Headless, SaaS Embed, and Self-hosted should become first candidates.',
          },
          href: {
            ko: '/example/cms-architecture/architecture-comparison.ko.md',
            en: '/example/cms-architecture/architecture-comparison.md',
          },
          type: {
            ko: '리서치 노트',
            en: 'Research note',
          },
        },
        {
          title: {
            ko: '대표 제품·운영 형태·비용 감각 비교표',
            en: 'Product, operating-model, and cost comparison table',
          },
          description: {
            ko: '제품 이름보다 운영 형태와 비용 구조를 함께 읽는 연습을 위한 비교표입니다.',
            en: 'A practical comparison table for reading products together with their operating model and cost shape.',
          },
          type: {
            ko: '비교표',
            en: 'Comparison table',
          },
        },
      ],
    },
    {
      title: {
        ko: '의사결정 프레임워크와 조합 레시피',
        en: 'Decision framework and combination recipes',
      },
      summary: {
        ko: '팀 규모, 데이터 민감도, 운영 역량, 비용 구조에 따라 어떤 조합을 추천할지 정리합니다. 현실의 서비스는 순수한 한 가지 패턴보다 혼합 구성이 더 많기 때문에 기능별 책임 분리가 핵심이 됩니다.',
        en: 'Choose practical stack combinations based on team size, data sensitivity, ops strength, and cost shape. Real services often end up hybrid, so the key is to decide responsibility boundaries feature by feature.',
      },
      body: [
        {
          ko: '현실의 서비스는 대개 “순수한 Monolithic”이나 “순수한 Headless”로 오래 유지되지 않습니다. 웹사이트 본문은 Monolithic CMS로 빠르게 운영하면서, 검색이나 댓글은 SaaS로 붙이고, 나중에 특정 영역만 Headless로 분리하는 식의 혼합 구성이 더 흔합니다. 따라서 중요한 것은 구조 이름보다도 기능별 책임 분리 원칙을 먼저 세우는 일입니다.',
          en: 'Real systems rarely stay purely Monolithic or purely Headless for long. A common pattern is to run website content quickly through a Monolithic CMS, attach search or comments through SaaS, and later split specific areas into a Headless frontend. The key is to decide responsibility boundaries feature by feature rather than obsess over a single architectural label.',
        },
        {
          ko: '팀 규모가 작고 운영 인력이 거의 없다면, 외부 SaaS를 적절히 이용하는 편이 총비용 관점에서 더 유리할 수 있습니다. 반대로 규제 요구가 강하거나 고객 데이터 통제가 핵심 가치라면, 월 비용이 더 들더라도 Self-hosted 또는 데이터 주권이 강한 구성을 우선해야 합니다. 이 판단은 기술 선호가 아니라 사업 조건의 문제입니다.',
          en: 'If the team is small and has almost no operating staff, using external SaaS tools may be cheaper overall. If regulation is strict or data control is a product requirement, self-hosted or sovereignty-first options move up in priority even if they cost more to maintain. This is a business-condition decision, not a matter of engineering taste.',
        },
        {
          ko: '이 챕터에서는 규제 도메인, 초기 스타트업, 장기 락인 최소화 전략처럼 성격이 다른 상황을 비교합니다. 예를 들어 초기 스타트업은 출시 속도와 운영 단순성이 우선이므로 SaaS와 호스팅형 CMS가 먼저 후보가 되기 쉽습니다. 반면 장기적으로 특정 벤더에 종속되기 싫다면 오픈소스 중심의 Self-hosted 또는 하이브리드 전환 전략을 고려해야 합니다.',
          en: 'This chapter compares very different contexts such as regulated domains, early startups, and long-term lock-in minimization. Startups usually prioritize speed and operational simplicity, which pushes hosted CMS and SaaS higher. Teams trying to avoid long-term vendor dependence should look harder at open-source, self-hosted, or gradual hybrid transitions.',
        },
        {
          ko: '강의의 핵심은 “우리 서비스의 모든 기능을 같은 방식으로 운영해야 하는가?”라는 질문입니다. 많은 경우 댓글, 검색, 분석, 문서, 운영 대시보드는 서로 다른 책임 구조를 가져도 괜찮습니다. 오히려 기능별로 다른 기준을 적용하는 편이 더 현실적인 경우가 많습니다.',
          en: 'One core question in this chapter is whether every feature in your product needs to be operated in the same way. In many services, comments, search, analytics, docs, and internal tools can all use different ownership models. In practice, a mixed responsibility model is often more realistic than a single uniform rule.',
        },
      ],
      table: {
        caption: {
          ko: '조직 조건에 따라 먼저 검토할 조합',
          en: 'Which combinations to review first under different organizational conditions',
        },
        headers: [
          { ko: '상황', en: 'Context' },
          { ko: '우선 조합', en: 'First combination to review' },
          { ko: '왜 이 조합이 먼저인가', en: 'Why it comes first' },
          { ko: '주의할 점', en: 'Main caution' },
        ],
        rows: [
          [
            { ko: '개발·운영 인력이 매우 적은 초기 팀', en: 'Very small team with little ops capacity' },
            { ko: 'Monolithic + SaaS', en: 'Monolithic + SaaS' },
            { ko: '편집 속도와 운영 단순성이 가장 중요하기 때문', en: 'Because editing speed and operational simplicity matter most' },
            { ko: '성장 시 사용량 기반 비용과 벤더 의존이 커질 수 있음', en: 'Usage-based pricing and vendor dependence can grow later' },
          ],
          [
            { ko: '멀티채널 제품과 빠른 프런트엔드 반복', en: 'Multi-channel product with frequent frontend iteration' },
            { ko: 'Headless + SaaS 또는 Headless + Hybrid', en: 'Headless + SaaS or Headless + Hybrid' },
            { ko: '콘텐츠 재사용성과 채널 분리가 중요하기 때문', en: 'Because content reuse and channel separation are important' },
            { ko: '캐시 무효화와 프런트엔드 운영 복잡도가 올라감', en: 'Cache invalidation and frontend ops complexity increase' },
          ],
          [
            { ko: '규제·데이터 민감도가 높은 도메인', en: 'Highly regulated or data-sensitive domain' },
            { ko: 'Headless + Self-hosted 또는 Hybrid + Self-hosted', en: 'Headless + Self-hosted or Hybrid + Self-hosted' },
            { ko: '데이터 통제권과 감사 가능성이 더 중요하기 때문', en: 'Because data control and auditability matter more' },
            { ko: '운영 인력과 보안 패치 체계가 반드시 필요함', en: 'You must have a real operating and patching model' },
          ],
          [
            { ko: '장기 락인 최소화를 우선하는 팀', en: 'Team prioritizing low long-term lock-in' },
            { ko: '오픈소스 중심 Hybrid 또는 Self-hosted', en: 'Open-source-first Hybrid or Self-hosted' },
            { ko: '교체 가능성과 기능 회수 전략을 만들기 쉬움', en: 'It is easier to preserve replacement paths and feature reclaim options' },
            { ko: '초기 속도는 SaaS 중심 구성보다 느릴 수 있음', en: 'Initial delivery may be slower than a SaaS-heavy approach' },
          ],
        ],
      },
      takeaways: [
        {
          ko: '실무에서는 혼합 구성이 기본값에 가깝습니다.',
          en: 'In practice, hybrid ownership is closer to the default than pure architecture.',
        },
        {
          ko: '팀 역량과 데이터 민감도는 기술 취향보다 더 강한 결정 요인입니다.',
          en: 'Team capacity and data sensitivity are stronger decision drivers than technical taste.',
        },
        {
          ko: '기능별로 다른 책임 구조를 허용해야 총비용과 리스크가 줄어듭니다.',
          en: 'Allowing different ownership models by feature often reduces both cost and risk.',
        },
      ],
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
          title: {
            ko: '서비스별 선택 매트릭스와 조합 레시피',
            en: 'Service-specific decision matrix and combination recipes',
          },
          description: {
            ko: '초기 스타트업, 규제 도메인, 락인 최소화 같은 상황별로 어떤 조합을 먼저 검토할지 정리한 판단 프레임워크입니다.',
            en: 'A decision framework for deciding which combinations to review first in startups, regulated domains, and low-lock-in strategies.',
          },
          type: {
            ko: '의사결정표',
            en: 'Decision matrix',
          },
        },
      ],
    },
    {
      title: {
        ko: '실무 구현 핵심: 데이터 모델, 권한, 캐시',
        en: 'Implementation essentials: data, permissions, cache',
      },
      summary: {
        ko: '리비전, RBAC, 감사로그, 캐시 무효화 흐름을 실제 구현 단위로 묶어 봅니다. 설계를 코드 직전 단계까지 내려와 “발행 후 화면이 언제 바뀌는가” 같은 질문에 답할 수 있게 만드는 챕터입니다.',
        en: 'Connect revisions, RBAC, audit logs, and cache invalidation as implementation-level concerns. The chapter brings architecture down close enough to implementation that you can answer questions like when published changes actually become visible.',
      },
      body: [
        {
          ko: 'CMS 설계가 추상적으로 느껴지는 가장 큰 이유는 콘텐츠 모델, 권한, 캐시를 서로 다른 주제로 따로 보기 때문입니다. 하지만 실제 서비스에서는 글 하나를 수정하는 순간에도 draft와 revision이 생기고, 누가 publish할 수 있는지 RBAC 규칙이 적용되며, publish 이후에는 캐시 무효화와 검색 인덱싱 같은 후속 작업이 이어집니다. 즉 이 요소들은 하나의 작업 흐름 안에 함께 들어 있습니다.',
          en: 'CMS architecture often feels abstract because people study the content model, permissions, and caching as separate topics. In real systems, they move together. Editing a post creates drafts and revisions, RBAC decides who may publish, and publish triggers cache invalidation and search updates. These are not separate lessons; they are one workflow.',
        },
        {
          ko: '데이터 모델을 설계할 때는 단순히 Article, Category 같은 엔티티만 적어서는 부족합니다. Revision, AuditLog, Role, Permission, Media 같은 운영 엔티티도 함께 정의해야 합니다. 그래야 “누가 무엇을 언제 바꿨는가”, “문제가 생겼을 때 어디로 되돌릴 수 있는가”, “대용량 미디어 업로드는 어떻게 처리할 것인가” 같은 질문에 답할 수 있습니다.',
          en: 'When designing the data model, it is not enough to list only content entities like Article or Category. You also need operational entities such as Revision, AuditLog, Role, Permission, and Media. Without them, you cannot answer who changed what, how to roll back safely, or how large uploads should be managed.',
        },
        {
          ko: '캐시 무효화는 특히 초급자가 놓치기 쉬운 주제입니다. Headless 구조에서는 CMS에서 publish를 눌렀다고 해서 사용자 화면이 즉시 바뀌지 않을 수 있습니다. 어떤 페이지가 ISR인지, 어떤 CDN 캐시를 비워야 하는지, 검색 인덱스는 언제 갱신하는지까지 함께 적어 두어야 실제 운영에서 혼란이 줄어듭니다.',
          en: 'Cache invalidation is another topic beginners often underestimate. In a Headless setup, pressing publish inside the CMS does not always mean the user sees the change immediately. You must define which pages regenerate, which caches are invalidated, and when search indexes update. Writing that flow down reduces real production confusion.',
        },
        {
          ko: '권한 설계도 단순히 “관리자만 모든 권한”으로 끝나지 않습니다. 초안 작성, 리뷰 요청, 발행, 롤백, 미디어 업로드, 댓글 승인 같은 행동을 어떤 역할이 수행할 수 있는지 분리해야 합니다. 그래야 운영자가 안전하게 일하고, 실수나 권한 남용이 생겼을 때 원인을 추적할 수 있습니다.',
          en: 'Permission design cannot stop at “admins can do everything.” Drafting, submitting for review, publishing, rollback, media upload, and comment moderation often need different permission boundaries. That separation keeps operations safer and makes mistakes or abuse easier to trace later.',
        },
      ],
      table: {
        caption: {
          ko: '구현 직전 단계에서 반드시 연결해 봐야 하는 설계 요소',
          en: 'Design elements that must be connected before implementation',
        },
        headers: [
          { ko: '설계 요소', en: 'Design element' },
          { ko: '핵심 질문', en: 'Key question' },
          { ko: '예시 엔티티 / 규칙', en: 'Example entities / rules' },
          { ko: '운영에 미치는 영향', en: 'Operational impact' },
        ],
        rows: [
          [
            { ko: '콘텐츠 모델', en: 'Content model' },
            { ko: '무엇을 저장하고 어떤 관계를 갖는가?', en: 'What is stored and how does it relate?' },
            { ko: 'Article, Category, Tag, Media', en: 'Article, Category, Tag, Media' },
            { ko: '편집 흐름과 API 형태가 결정됨', en: 'Shapes editor behavior and API responses' },
          ],
          [
            { ko: '리비전 / 롤백', en: 'Revision / rollback' },
            { ko: '어느 시점으로 되돌릴 수 있는가?', en: 'Which point can you safely roll back to?' },
            { ko: 'Revision, version number, rollback action', en: 'Revision, version number, rollback action' },
            { ko: '실수 복구와 감사 대응이 쉬워짐', en: 'Makes recovery and audit response easier' },
          ],
          [
            { ko: 'RBAC', en: 'RBAC' },
            { ko: '누가 draft / review / publish를 할 수 있는가?', en: 'Who may draft, review, and publish?' },
            { ko: 'Role, Permission, policy JSON', en: 'Role, Permission, policy JSON' },
            { ko: '권한 남용과 운영 실수를 줄임', en: 'Reduces abuse and operational mistakes' },
          ],
          [
            { ko: '캐시 무효화', en: 'Cache invalidation' },
            { ko: 'publish 이후 화면은 언제 바뀌는가?', en: 'When does the screen update after publish?' },
            { ko: 'revalidate path, purge CDN, refresh search', en: 'revalidate path, purge CDN, refresh search' },
            { ko: '운영 혼란과 stale 콘텐츠를 줄임', en: 'Reduces stale content and release confusion' },
          ],
        ],
      },
      takeaways: [
        {
          ko: '콘텐츠 모델, 권한, 캐시는 따로 배우는 것이 아니라 함께 설계해야 합니다.',
          en: 'Content modeling, permissions, and caching must be designed together.',
        },
        {
          ko: 'publish 이후 동작을 문서로 적어 두지 않으면 실제 운영에서 가장 먼저 혼란이 납니다.',
          en: 'If you do not document post-publish behavior, production confusion appears very quickly.',
        },
        {
          ko: '운영 엔티티까지 포함해야 데이터 모델이 실제 제품 구조가 됩니다.',
          en: 'A data model becomes real product architecture only when it includes operational entities too.',
        },
      ],
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
          title: {
            ko: 'cms-content-model.json 데이터 모델 초안',
            en: 'cms-content-model.json draft content model',
          },
          description: {
            ko: 'CONTENT, REVISION, MEDIA, COMMENT 등 핵심 엔티티가 어떤 관계로 묶이는지 보여 주는 JSON 예시입니다.',
            en: 'A JSON example showing how CONTENT, REVISION, MEDIA, COMMENT, and related entities fit together.',
          },
          href: {
            ko: '/example/cms-architecture/cms-content-model.json',
            en: '/example/cms-architecture/cms-content-model.json',
          },
          type: {
            ko: '데이터 모델',
            en: 'Data model',
          },
        },
        {
          title: {
            ko: 'rbac-policy-example.json 권한 정책 예시',
            en: 'rbac-policy-example.json RBAC policy example',
          },
          description: {
            ko: '작성, 리뷰, 발행, 롤백 같은 행동을 역할별로 어떻게 나누는지 보여 주는 권한 정책 예시입니다.',
            en: 'A role-policy example showing how drafting, review, publishing, and rollback may be separated in practice.',
          },
          href: {
            ko: '/example/cms-architecture/rbac-policy-example.json',
            en: '/example/cms-architecture/rbac-policy-example.json',
          },
          type: {
            ko: '권한 정책',
            en: 'Permission policy',
          },
        },
        {
          title: {
            ko: 'cache-invalidation-flow(.ko).md 발행 후 처리 흐름',
            en: 'cache-invalidation-flow(.md) post-publish flow notes',
          },
          description: {
            ko: 'publish 이후 webhook, CDN invalidation, revalidation이 어떤 순서로 이어지는지 설명하는 운영 문서입니다.',
            en: 'An operations note explaining the order of webhook, CDN invalidation, and revalidation after publish.',
          },
          href: {
            ko: '/example/cms-architecture/cache-invalidation-flow.ko.md',
            en: '/example/cms-architecture/cache-invalidation-flow.md',
          },
          type: {
            ko: '운영 문서',
            en: 'Ops note',
          },
        },
      ],
    },
    {
      title: {
        ko: '운영·보안·확장 전략',
        en: 'Ops, security, and scale strategy',
      },
      summary: {
        ko: '댓글 승인 큐, 대용량 업로드, 장애 복구, 관측성을 어떤 순서로 붙이면 좋은지 정리합니다. CMS가 단순 편집기가 아니라 입력, 권한, 미디어, 외부 스크립트가 얽힌 시스템이라는 점을 운영 관점에서 마무리합니다.',
        en: 'Review how moderation queues, large uploads, disaster recovery, and observability fit into the operating model. The chapter closes by treating a CMS as an operational system with input, permissions, media, and external scripts, not just an editor UI.',
      },
      body: [
        {
          ko: '초급자는 아키텍처를 그릴 때 기능이 동작하는 순간까지만 생각하고 끝내기 쉽습니다. 하지만 운영 단계에서는 댓글 승인 큐, 업로드 실패, 검색 인덱싱 지연, 캐시 일관성 문제, 외부 스크립트 장애가 실제 사용자 경험에 직접 영향을 줍니다. 따라서 운영 전략은 “나중에 붙이는 부가 요소”가 아니라 설계의 일부여야 합니다.',
          en: 'Beginners often stop thinking once the feature works once in development. In operations, moderation queues, upload failures, search indexing lag, cache consistency issues, and external script outages affect the user experience directly. Operational strategy is therefore not an afterthought; it is part of the architecture itself.',
        },
        {
          ko: '대용량 미디어 업로드는 좋은 예입니다. 텍스트 콘텐츠 저장과 같은 방식으로 큰 파일을 처리하면 서버 부하와 실패 복구가 어려워집니다. 그래서 presigned URL, 비동기 처리, 업로드 완료 확인 같은 패턴이 등장합니다. 이 강좌는 왜 그런 분리가 필요한지와, 그것이 CMS 운영의 일부라는 점을 설명합니다.',
          en: 'Large media uploads are a good example. If you treat file uploads the same way as small text saves, you quickly hit server load and recovery issues. That is why patterns such as presigned URLs, asynchronous completion, and upload confirmation exist. The course explains not just how they work, but why they belong inside CMS operations thinking.',
        },
        {
          ko: '보안도 마찬가지입니다. CMS는 관리자 화면, 사용자 입력, 외부 스크립트, 미디어, 권한 체계가 겹치는 시스템이기 때문에 XSS, CSRF, 외부 스크립트 공급망 리스크, 잘못된 권한 부여가 모두 현실적인 문제입니다. 보안 항목을 설계 초기에 적어 두면 나중에 기능을 붙일수록 위험이 커지는 상황을 피할 수 있습니다.',
          en: 'The same applies to security. A CMS combines admin interfaces, user input, external scripts, media handling, and permission boundaries, so XSS, CSRF, supply-chain risk, and misconfigured roles are all realistic concerns. Writing those checks early keeps risk from compounding as more features are added.',
        },
        {
          ko: '결국 운영·보안·확장 전략은 “어떤 기능을 만들 것인가”보다 “문제가 생겼을 때 어떻게 버틸 것인가”를 다룹니다. 이 챕터는 설계 초기에 작은 체크리스트를 만들어 두는 것이 왜 큰 장애를 줄이는지 설명하며, 실무 구현 전에 반드시 남겨야 할 메모의 종류를 정리해 줍니다.',
          en: 'In the end, operations, security, and scale strategy are less about feature building and more about resilience. This chapter explains why a small checklist written early prevents bigger failures later, and it identifies the implementation notes that should exist before the system goes live.',
        },
      ],
      table: {
        caption: {
          ko: '운영·보안·확장을 설계 초기에 적어 두어야 하는 이유',
          en: 'Why ops, security, and scale need to be written down early',
        },
        headers: [
          { ko: '영역', en: 'Area' },
          { ko: '초기 설계 질문', en: 'Early design question' },
          { ko: '미리 정해 둘 항목', en: 'What to decide up front' },
          { ko: '늦게 다루면 생기는 문제', en: 'What goes wrong if delayed' },
        ],
        rows: [
          [
            { ko: '운영', en: 'Operations' },
            { ko: '댓글 승인, 검색, 캐시, 로그는 누가 보고 조치하는가?', en: 'Who watches and reacts to moderation, search, cache, and logs?' },
            { ko: '알림 경로, 운영 대시보드, 실패 복구 순서', en: 'Alert path, ops dashboard, failure recovery order' },
            { ko: '장애가 나도 어디서부터 확인할지 모르게 됨', en: 'Failures happen without a clear first debugging path' },
          ],
          [
            { ko: '보안', en: 'Security' },
            { ko: '입력·권한·외부 스크립트를 어떻게 제한할 것인가?', en: 'How will input, roles, and external scripts be constrained?' },
            { ko: 'RBAC, CSP, 입력 검증, 미디어 업로드 규칙', en: 'RBAC, CSP, input validation, media upload rules' },
            { ko: '기능이 늘수록 공격 표면이 빠르게 확장됨', en: 'The attack surface grows quickly as features are added' },
          ],
          [
            { ko: '확장성', en: 'Scalability' },
            { ko: '트래픽과 데이터가 늘면 어디가 먼저 병목이 되는가?', en: 'Where will the first bottleneck appear as traffic grows?' },
            { ko: '캐시 계층, 인덱싱 주기, 업로드 분리 전략', en: 'Cache layer, indexing cadence, upload separation strategy' },
            { ko: '성장 후 구조를 다시 뜯어고쳐야 할 가능성이 커짐', en: 'Growth forces expensive redesign later' },
          ],
        ],
      },
      takeaways: [
        {
          ko: '운영과 보안은 설계의 마지막 장식이 아니라 구조의 일부입니다.',
          en: 'Operations and security are part of the structure, not the finishing touches.',
        },
        {
          ko: '체크리스트를 미리 적는 행위가 실제 장애 비용을 크게 줄입니다.',
          en: 'Writing checklists early materially reduces failure cost later.',
        },
        {
          ko: '확장 전략은 “대규모 시스템”의 문제가 아니라 초기에 방향을 잡는 문제입니다.',
          en: 'Scale strategy is not only a large-system concern; it is an early direction-setting concern.',
        },
      ],
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
          title: {
            ko: 'implementation-checklist(.ko).md 구현 체크리스트',
            en: 'implementation-checklist(.md) implementation checklist',
          },
          description: {
            ko: '패턴 결정, 콘텐츠 엔티티 정의, 권한 규칙, publish 후 처리, 미디어/댓글 실패 대응까지 구현 직전 점검 항목을 모은 문서입니다.',
            en: 'A pre-build checklist covering pattern choice, content entities, permission rules, post-publish handling, and failure paths for media and comments.',
          },
          href: {
            ko: '/example/cms-architecture/implementation-checklist.ko.md',
            en: '/example/cms-architecture/implementation-checklist.md',
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
        ko: '둘 다를 연결합니다. 제품/패턴 비교에서 끝나지 않고, 데이터 모델과 운영 체크리스트까지 내려와서 설계가 코드 직전 상태가 되도록 돕습니다. 비교와 구현 사이의 빈칸을 메우는 강의라고 보는 편이 맞습니다.',
        en: 'It bridges both. You start with pattern/product comparison and end with data and ops artifacts that are close to implementation. It is best understood as a course that fills the gap between comparison and build-ready design.',
      },
    },
    {
      question: {
        ko: '초급자에게 너무 추상적이지 않나요?',
        en: 'Is this too abstract for beginners?',
      },
      answer: {
        ko: '그래서 용어 정의, 선택 질문, JSON 예시, 운영 체크리스트를 함께 넣었습니다. 강의가 끝나면 “어떤 구조를 왜 택하는가”를 말로 설명할 수 있게 만드는 데 초점을 둡니다.',
        en: 'That is why the course includes glossary-style definitions, decision prompts, JSON examples, and operating checklists. The goal is to make the architecture explainable in plain language.',
      },
    },
    {
      question: {
        ko: '정답 스택이 있나요?',
        en: 'Is there a single correct stack?',
      },
      answer: {
        ko: '없습니다. 팀 역량, 데이터 민감도, 비용 구조, 속도 요구가 다르면 최적 선택도 달라집니다. 이 강좌는 정답을 주기보다, 어떤 질문을 해야 하는지와 어떤 책임을 어디에 둘지 정하는 기준을 만드는 쪽에 가깝습니다.',
        en: 'No. Team strength, data sensitivity, cost shape, and speed requirements all change the answer. This course is less about a single answer and more about building the decision rule and ownership map.',
      },
    },
  ],
  evidence: [
    {
      type: 'diagram',
      title: {
        ko: 'CMS 구조 비교 축 다이어그램',
        en: 'CMS comparison-axes diagram',
      },
      description: {
        ko: 'Monolithic/Headless와 SaaS/Self-hosted를 다른 질문으로 봐야 하는 이유를 상세강의자료에서도 유지합니다.',
        en: 'Keeps the slide’s main lesson visible in the Lecture Guide: Monolithic/Headless and SaaS/Self-hosted answer different questions.',
      },
      language: 'text',
      code: `[CMS+Theme] -> HTML -> Browser
vs
[CMS] -> API(JSON) -> [Frontend] -> HTML -> Browser

[Frontend] -> SDK/Script -> [SaaS Provider]
vs
[Frontend] -> API -> [Self-hosted Service]`,
    },
    {
      type: 'diagram',
      title: {
        ko: 'CMS 데이터 모델 핵심 엔티티',
        en: 'Core CMS data-model entities',
      },
      description: {
        ko: '슬라이드의 ERD 다이어그램을 상세강의자료에서 읽기 쉬운 텍스트 구조로 재구성했습니다.',
        en: 'A text reconstruction of the ERD-style slide so the main entities remain readable in the Lecture Guide.',
      },
      language: 'text',
      code: `USER 1:N CONTENT
CONTENT 1:N REVISION
CONTENT 1:N COMMENT

Also design:
ROLE / PERMISSION / USER_ROLE / MEDIA / AUDIT_LOG`,
    },
    {
      type: 'diagram',
      title: {
        ko: '발행 후 캐시 무효화 흐름',
        en: 'Publish-to-cache-invalidation flow',
      },
      description: {
        ko: 'publish 이후 화면이 실제로 언제 갱신되는지 보여 주는 핵심 운영 흐름입니다.',
        en: 'The core operating flow that explains when a published change actually becomes visible.',
      },
      language: 'text',
      code: `Editor publishes content
  -> CMS fires webhook
  -> Revalidation worker receives it
  -> CDN invalidation
  -> Next.js revalidateTag / page regeneration
  -> User receives fresh HTML/JSON`,
    },
  ],
};
