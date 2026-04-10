export const semverGithubReleaseLlmHomepageAutomationDetail = {
  slug: 'semver-github-release-llm-homepage-automation',
  hero: {
    title: {
      ko: 'SemVer 태그에서 GitHub Release와 홈페이지 반영까지',
      en: 'From SemVer Tags to GitHub Release and Homepage Sync',
    },
    subtitle: {
      ko: '상세강의자료: GitHub Release를 배포 기준으로 삼고 release notes를 Astro 홈페이지까지 자동 반영하는 실전 파이프라인을 설명합니다.',
      en: 'Lecture Guide: use GitHub Release as the deployment source of truth and carry release notes all the way into an Astro-powered homepage.',
    },
    summary: {
      ko: '이 강의는 태그를 푸시했을 때 release가 어떻게 draft로 생성되고, generated notes와 선택적 LLM polishing을 거쳐 publish되며, 그 결과가 별도 homepage 저장소의 Astro content로 안전하게 반영되는지를 end-to-end로 설명합니다. 단순 CI 예제가 아니라 공개 릴리스 운영 기준을 세우는 강의입니다.',
      en: 'This course explains the full path from pushing a tag to creating a draft release, regenerating notes, optionally polishing them with an LLM, publishing the release, and safely syncing the result into Astro content in a separate homepage repository. It is not just a CI example, but a practical guide to operating public releases.',
    },
    description: [
      {
        ko: '많은 팀이 배포 자동화와 홈페이지 반영을 따로 관리합니다. 그렇게 나누면 “어느 정보가 최신인가”가 빠르게 흐려집니다. 이 강의는 GitHub Release를 canonical source로 두고, homepage는 그 결과를 가져와 렌더링하는 소비자 역할만 맡게 하는 구조를 먼저 고정합니다.',
        en: 'Many teams separate deployment automation from homepage publishing. That separation often makes it unclear which source is actually current. This course fixes the boundary first: GitHub Release stays the canonical source, while the homepage behaves as a downstream consumer of that release record.',
      },
      {
        ko: '핵심은 자동화 그 자체보다 단계와 책임의 분리입니다. 태그 판별, draft release 생성, asset 및 notes 준비, publish, cross-repo dispatch, Astro import, build verification을 한 파이프라인으로 보면서도, 각 단계가 무엇을 책임지고 어디서 실패해야 하는지를 분명히 다룹니다.',
        en: 'The core lesson is not automation alone, but stage and responsibility separation. The course treats tag classification, draft release creation, asset and notes preparation, publish, cross-repo dispatch, Astro import, and build verification as one pipeline while still keeping each stage explicit about what it owns and where it should fail.',
      },
      {
        ko: '또한 generated notes만으로 충분한 경우와, LLM polishing을 넣을 가치가 있는 경우를 구분합니다. 즉 “무조건 AI를 넣는 법”이 아니라 운영상 안전한 기본 경로를 만들고, 그 위에 선택적 후처리를 더하는 판단 기준까지 함께 제공합니다.',
        en: 'The guide also separates the cases where generated notes are enough from the cases where LLM polishing adds real value. In other words, it does not teach “AI by default,” but how to build a safe baseline first and then add optional post-processing only when it is worth the operational cost.',
      },
    ],
    deliverable: {
      ko: '결과물: SemVer 기반 release workflow 설계안, generated notes와 LLM polishing 운영 규칙, homepage sync 구조, Astro import 스크립트 사고방식, end-to-end 검증 체크리스트',
      en: 'Deliverable: a SemVer-based release workflow design, operating rules for generated notes and LLM polishing, a homepage sync architecture, an Astro import strategy, and an end-to-end verification checklist.',
    },
  },
  audience: [
    {
      ko: 'GitHub Actions로 배포 자동화를 하고 있지만 public release 운영 기준은 아직 정리되지 않은 개발자',
      en: 'Developers who already automate deployments with GitHub Actions but have not yet made their public release process explicit.',
    },
    {
      ko: '앱 저장소와 홈페이지 저장소가 분리된 상태에서 release history를 제품 페이지까지 연결하고 싶은 개인 개발자와 작은 팀',
      en: 'Solo builders and small teams who keep the app repository separate from the homepage repository and want release history to show up on the product site.',
    },
    {
      ko: 'GitHub generated notes, LLM polishing, homepage sync를 어떤 순서와 책임 분리로 묶어야 하는지 배우고 싶은 수강생',
      en: 'Learners who want to understand how generated notes, LLM polishing, and homepage sync should be ordered and separated by responsibility.',
    },
  ],
  prerequisites: [
    {
      ko: 'Git, GitHub Actions, GitHub Release의 기본 개념을 알고 있으면 가장 좋습니다.',
      en: 'A basic familiarity with Git, GitHub Actions, and GitHub Releases is ideal.',
    },
    {
      ko: 'CLI 도구 사용과 환경 변수, secret, token 개념을 읽을 수 있어야 합니다.',
      en: 'You should be comfortable reading CLI commands, environment variables, secrets, and tokens.',
    },
    {
      ko: 'Astro를 깊게 알 필요는 없지만, 정적 사이트가 content 파일을 읽어 빌드된다는 감각은 있으면 이해가 빨라집니다.',
      en: 'You do not need deep Astro knowledge, but it helps to know how a static site consumes content files during build.',
    },
  ],
  learningOutcomes: [
    {
      ko: 'stable, beta, rc 태그를 release 정책 기준으로 분리할 수 있습니다.',
      en: 'Classify stable, beta, and rc tags according to a release policy instead of treating them all the same.',
    },
    {
      ko: 'draft release에서 notes 준비와 publish를 분리해 미완성 공개를 막는 구조를 설명할 수 있습니다.',
      en: 'Explain why draft release creation should be separated from note preparation and final publish.',
    },
    {
      ko: 'generated notes와 LLM polishing의 역할 차이와 실패 정책을 정할 수 있습니다.',
      en: 'Choose a failure policy and responsibility boundary between generated notes and LLM polishing.',
    },
    {
      ko: 'source repo와 homepage repo를 안전하게 연결하는 cross-repo sync 구조를 설계할 수 있습니다.',
      en: 'Design a safe cross-repo sync flow between a source repo and a homepage repo.',
    },
    {
      ko: 'release publish 이후 Astro import와 제품 페이지 반영까지 end-to-end로 검증할 수 있습니다.',
      en: 'Verify the flow end to end from release publish through Astro import and final product-page visibility.',
    },
  ],
  estimatedTime: {
    ko: '약 1시간 20분',
    en: 'About 1h 20m',
  },
  difficulty: {
    ko: '초중급',
    en: 'Early intermediate',
  },
  tools: [
    {
      ko: 'GitHub Actions와 GitHub CLI',
      en: 'GitHub Actions and GitHub CLI',
    },
    {
      ko: 'OpenAI API 또는 동등한 LLM API',
      en: 'The OpenAI API or an equivalent LLM API',
    },
    {
      ko: 'Astro 기반 홈페이지 저장소',
      en: 'An Astro-based homepage repository',
    },
    {
      ko: 'repository secret, variable, fine-grained PAT 관리 권한',
      en: 'Access to repository secrets, variables, and a fine-grained PAT',
    },
  ],
  studyGuide: [
    {
      ko: '먼저 전체 흐름과 검증 챕터를 읽고, 그 다음에 workflow와 import 스크립트 예시를 열어 보는 순서가 가장 빠릅니다.',
      en: 'The fastest path is to read the full-flow chapter and the verification chapter first, then open the workflow and import script examples.',
    },
    {
      ko: 'generated notes를 기본값으로 두는 이유와 LLM polishing을 옵션으로 두는 이유를 먼저 잡아 두면 나머지 판단이 훨씬 쉬워집니다.',
      en: 'Most later decisions become easier once you lock in why generated notes are the baseline and why LLM polishing stays optional.',
    },
    {
      ko: '실습은 source repo와 homepage repo 책임을 섞지 않는 데 집중하는 것이 좋습니다. 소스 저장소가 homepage 파일을 직접 수정하지 않게 두는 것이 핵심입니다.',
      en: 'When you practice, focus on not mixing source-repo and homepage-repo responsibilities. The key boundary is that the source repository never edits homepage files directly.',
    },
  ],
  chapters: [
    {
      title: {
        ko: '전체 흐름과 운영 전제',
        en: 'The full flow and the operating assumptions',
      },
      summary: {
        ko: '이 챕터는 SemVer 태그에서 GitHub Release publish, homepage dispatch, Astro import, 사이트 배포까지 이어지는 전체 파이프라인을 한 장의 운영 그림으로 정리합니다. 먼저 무엇이 기준 저장소이고, 어떤 시스템이 소비자 역할을 하는지부터 잠급니다.',
        en: 'This chapter turns the whole pipeline into one operating map: SemVer tag, GitHub Release publish, homepage dispatch, Astro import, and site deployment. It starts by fixing which repository is the source of truth and which systems are downstream consumers.',
      },
      body: [
        {
          ko: '릴리스 자동화는 단계가 많아서 복잡해 보이지만, 실제로는 “어디가 기준인가”만 먼저 정하면 상당수가 정리됩니다. 이 강의에서는 GitHub Release 자체를 공개 릴리스의 canonical source로 둡니다. 그 결과 앱 저장소, 문서, 제품 페이지가 서로 다른 텍스트를 들고 따로 움직이는 문제를 줄일 수 있습니다.',
          en: 'Release automation looks complex because it contains many steps, but most confusion disappears once you decide where the truth lives. In this course, GitHub Release itself becomes the canonical source for public release state. That sharply reduces the chance that the app repository, docs, and product page all drift apart.',
        },
        {
          ko: '그 다음으로 중요한 것은 homepage 저장소의 역할을 제한하는 것입니다. homepage는 source repo를 대신해 release를 만들거나 편집하지 않습니다. publish된 release를 읽어 와서 Astro content로 바꾸고, 자기 빌드와 커밋을 자기 토큰으로 끝내는 소비자 역할만 맡습니다. 이 책임 분리가 운영 안정성의 핵심입니다.',
          en: 'The second key step is to constrain what the homepage repository is allowed to do. It does not create or edit releases on behalf of the source repository. Instead, it reads the published release, transforms it into Astro content, and completes its own build and commit using its own token. That separation is one of the main stability wins in the design.',
        },
        {
          ko: '이 챕터에서는 전체 흐름을 먼저 고정해 두기 때문에, 뒤 챕터에서 나오는 secrets, generated notes, LLM polishing, dispatch token, import script가 모두 “어느 단계의 책임인가”로 다시 읽히게 됩니다. 즉 도구 설명보다 먼저 운영 경계를 잡는 챕터입니다.',
          en: 'By freezing the full flow first, every later piece—secrets, generated notes, LLM polishing, dispatch tokens, and import scripts—can be understood in terms of which stage owns it. This chapter is therefore less about tooling and more about drawing the operating boundary map before implementation details.',
        },
      ],
      table: {
        caption: {
          ko: '릴리스 파이프라인의 책임 분리',
          en: 'Responsibility split in the release pipeline',
        },
        headers: [
          { ko: '단계', en: 'Stage' },
          { ko: '주체', en: 'Owner' },
          { ko: '핵심 책임', en: 'Primary responsibility' },
        ],
        rows: [
          [
            { ko: '태그 분류와 release 생성', en: 'Tag classification and release creation' },
            { ko: 'source repo', en: 'Source repo' },
            { ko: 'SemVer 판별, draft release 생성, asset 및 notes 준비', en: 'SemVer classification, draft release creation, and asset / note preparation' },
          ],
          [
            { ko: 'release publish', en: 'Release publish' },
            { ko: 'source repo', en: 'Source repo' },
            { ko: 'draft를 최종 공개 release로 승격', en: 'Promote the draft into the final public release' },
          ],
          [
            { ko: 'homepage sync', en: 'Homepage sync' },
            { ko: 'homepage repo', en: 'Homepage repo' },
            { ko: 'published stable release를 읽어 content와 빌드를 갱신', en: 'Consume the published stable release and update content plus build output' },
          ],
        ],
      },
      learn: [
        {
          ko: 'GitHub Release를 canonical source로 두는 이유',
          en: 'Why GitHub Release is treated as the canonical source',
        },
        {
          ko: 'source repo와 homepage repo의 역할을 섞지 않아야 하는 이유',
          en: 'Why source-repo and homepage-repo roles should stay separate',
        },
      ],
      takeaways: [
        {
          ko: '릴리스 자동화는 스크립트보다 책임 경계가 먼저입니다.',
          en: 'Release automation starts with ownership boundaries before it starts with scripts.',
        },
        {
          ko: 'homepage는 기준 저장소가 아니라 결과를 소비하는 저장소로 남겨야 안전합니다.',
          en: 'The homepage is safer as a consumer of release state, not as a second source of truth.',
        },
      ],
      artifacts: [
        {
          title: {
            ko: '전체 릴리스 흐름 다이어그램',
            en: 'End-to-end release flow diagram',
          },
          description: {
            ko: 'SemVer 태그부터 Astro 배포까지의 흐름을 한 장에 압축한 텍스트 다이어그램입니다.',
            en: 'A compact text diagram showing the path from SemVer tag to Astro deployment.',
          },
          type: {
            ko: '다이어그램',
            en: 'Diagram',
          },
          href: {
            ko: '/example/semver-github-release-llm-homepage-automation/release-pipeline-map.ko.md',
            en: '/example/semver-github-release-llm-homepage-automation/release-pipeline-map.md',
          },
        },
      ],
    },
    {
      title: {
        ko: 'SemVer 태그 분류와 draft release 전략',
        en: 'SemVer tag classification and the draft-release strategy',
      },
      summary: {
        ko: 'stable, beta, rc 태그를 어떤 정규식과 정책으로 나누고, 왜 release를 바로 publish하지 않고 먼저 draft로 만드는지를 다룹니다. 실패를 어디서 멈춰야 하는지 운영 기준을 잡는 챕터입니다.',
        en: 'This chapter covers how stable, beta, and rc tags are classified and why releases are created as drafts before publication. It is where the pipeline’s failure policy becomes explicit.',
      },
      body: [
        {
          ko: 'SemVer 태그 자동화에서 가장 흔한 실수는 `v*`를 전부 같은 release로 취급하는 것입니다. 강의에서는 stable, beta, rc를 명시적으로 분리합니다. 이렇게 해야 prerelease 정책과 homepage sync 정책이 뒤에서 흔들리지 않습니다.',
          en: 'A common mistake in SemVer automation is treating every `v*` tag as the same kind of release. The course separates stable, beta, and rc explicitly so that prerelease policy and homepage-sync policy do not become ambiguous later.',
        },
        {
          ko: '또 하나의 핵심은 release를 처음부터 public 상태로 만들지 않는 것입니다. draft release는 일종의 staging area입니다. asset 업로드, generated notes 재생성, 선택적 LLM polishing, 최종 title/body 정리까지 끝난 뒤에만 publish하게 두면 미완성 공개를 줄일 수 있습니다.',
          en: 'The second key idea is that a release should not begin life as public. A draft release acts like a staging area. If you only publish after asset upload, generated-note regeneration, optional LLM polishing, and final title/body edits are complete, you avoid exposing half-finished release state to users.',
        },
        {
          ko: '이 챕터는 recovery 경로도 함께 다룹니다. 이미 publish된 release를 기본적으로 다시 건드리지 않되, 정말 필요한 경우에만 `workflow_dispatch`와 별도 flag로 재실행을 허용하는 식입니다. 즉 자동화는 편의성뿐 아니라 실수의 기본 경로를 줄이는 도구라는 관점을 강조합니다.',
          en: 'This chapter also includes the recovery path. The default rule is to avoid mutating already-published releases, with manual replay allowed only through `workflow_dispatch` plus an explicit flag. The larger lesson is that automation is not just for convenience; it is also a way to make the default path safer.',
        },
      ],
      table: {
        caption: {
          ko: '태그 종류별 release 처리 정책',
          en: 'Release policy by tag type',
        },
        headers: [
          { ko: '태그 타입', en: 'Tag type' },
          { ko: '예시', en: 'Example' },
          { ko: '기본 처리', en: 'Default handling' },
        ],
        rows: [
          [
            { ko: 'stable', en: 'stable' },
            { ko: '`v1.4.8`', en: '`v1.4.8`' },
            { ko: 'draft -> notes 정리 -> publish -> homepage sync', en: 'draft -> notes prep -> publish -> homepage sync' },
          ],
          [
            { ko: 'beta', en: 'beta' },
            { ko: '`v1.4.8-beta.1`', en: '`v1.4.8-beta.1`' },
            { ko: 'prerelease로 유지, homepage 공개 반영은 보통 제외', en: 'keep as prerelease; usually exclude from homepage publishing' },
          ],
          [
            { ko: 'rc', en: 'rc' },
            { ko: '`v1.4.8-rc1`', en: '`v1.4.8-rc1`' },
            { ko: 'prerelease로 유지, stable 검증 전 단계로 사용', en: 'keep as prerelease and use it as a final validation stage before stable' },
          ],
        ],
      },
      learn: [
        {
          ko: 'SemVer 태그를 release 정책으로 연결하는 법',
          en: 'How to turn SemVer tags into release policy',
        },
        {
          ko: 'draft release가 왜 staging area 역할을 하는지',
          en: 'Why a draft release behaves like a staging area',
        },
      ],
      takeaways: [
        {
          ko: '태그 분류를 느슨하게 두면 뒤 단계의 정책이 모두 흔들립니다.',
          en: 'If tag classification is loose, every later policy becomes unstable.',
        },
        {
          ko: 'draft release는 사용자에게 보이기 전 마지막 안전 구간입니다.',
          en: 'The draft release is the last safe zone before user-visible publication.',
        },
      ],
      artifacts: [
        {
          title: {
            ko: 'release workflow 설계 메모',
            en: 'Release workflow design memo',
          },
          description: {
            ko: 'SemVer 판별, draft release, recovery 조건을 정리한 실습 메모입니다.',
            en: 'A practice note covering SemVer classification, draft releases, and recovery conditions.',
          },
          type: {
            ko: '설계 메모',
            en: 'Design note',
          },
          href: {
            ko: '/example/semver-github-release-llm-homepage-automation/release-workflow-checklist.ko.md',
            en: '/example/semver-github-release-llm-homepage-automation/release-workflow-checklist.md',
          },
        },
      ],
    },
    {
      title: {
        ko: 'generated notes와 LLM polishing 전략',
        en: 'Generated notes and the LLM polishing strategy',
      },
      summary: {
        ko: 'GitHub generated notes를 기본 source로 삼고, LLM polishing은 선택적 후처리로 두는 이유를 설명합니다. AI를 어디에 넣어야 하고 어디까지 넣지 말아야 하는지를 릴리스 품질 관점에서 정리합니다.',
        en: 'This chapter explains why GitHub generated notes are the baseline source and LLM polishing remains optional post-processing. It is about deciding where AI belongs in a release pipeline and where it should stop.',
      },
      body: [
        {
          ko: '기본값은 generated notes입니다. 이유는 간단합니다. GitHub가 compare 범위, PR 제목, contributor 정보를 이미 release 문맥 안에서 알고 있기 때문입니다. 따라서 초안 생성의 기준은 GitHub에 두고, 외부 LLM은 그 내용을 더 읽기 쉽게 다듬는 역할에만 제한하는 것이 안전합니다.',
          en: 'Generated notes are the baseline because GitHub already understands the compare range, PR titles, and contributor context inside the release itself. The safe default is therefore to let GitHub produce the first draft and allow the external LLM to act only as a readability layer on top of that.',
        },
        {
          ko: '강의는 LLM을 “새 사실을 만드는 요약기”로 쓰지 않습니다. 오히려 구조화된 후처리기로 다룹니다. summary / highlights / fixes / notes 같은 섹션을 맞추되, 사실 추가 금지, 버전 문자열 보존, 링크와 식별자 보존을 강하게 요구합니다. 이렇게 해야 AI가 release의 사실 관계를 덮어쓰지 않습니다.',
          en: 'The course does not use the LLM as a summary engine that invents new facts. Instead, it is treated as a structured post-processor. It can normalize sections such as summary, highlights, fixes, and notes, but only under strict rules: no new claims, exact version retention, and preservation of links and identifiers.',
        },
        {
          ko: '또한 이 챕터는 실패 정책을 같이 묻습니다. polishing이 실패했을 때 generated notes 그대로 publish할지, publish 전에 전체를 멈출지 결정해야 합니다. 이 선택은 문체보다 운영 철학의 문제이므로, 강의에서는 “사용자-facing release page의 일관성이 얼마나 중요한가”를 기준 질문으로 제시합니다.',
          en: 'The chapter also asks for an explicit failure policy. If polishing fails, should the release still publish using raw generated notes, or should the whole pipeline stop before publication? That choice is less about prose quality and more about operating philosophy, so the course frames it around how strongly you care about consistency on the public release page.',
        },
      ],
      table: {
        caption: {
          ko: 'generated notes와 LLM polishing의 역할 차이',
          en: 'Role split between generated notes and LLM polishing',
        },
        headers: [
          { ko: '단계', en: 'Stage' },
          { ko: '강점', en: 'Strength' },
          { ko: '주의점', en: 'Main caution' },
        ],
        rows: [
          [
            { ko: 'GitHub generated notes', en: 'GitHub generated notes' },
            { ko: 'release 문맥을 직접 알고 있어 초안 source로 안정적', en: 'Stable as a source because it knows the release context directly' },
            { ko: '문체가 개발자 중심일 수 있음', en: 'The prose can remain developer-facing' },
          ],
          [
            { ko: 'LLM polishing', en: 'LLM polishing' },
            { ko: '가독성과 섹션 구조를 통일하기 좋음', en: 'Good for readability and section normalization' },
            { ko: '사실 추가와 운영 실패 지점이 생길 수 있음', en: 'Can introduce invented claims and an extra failure point if unmanaged' },
          ],
        ],
      },
      learn: [
        {
          ko: 'generated notes를 baseline으로 두는 이유',
          en: 'Why generated notes should remain the baseline',
        },
        {
          ko: 'LLM을 후처리기로 제한해야 하는 이유',
          en: 'Why the LLM should be constrained to post-processing',
        },
      ],
      takeaways: [
        {
          ko: '릴리스 파이프라인에서 AI는 출처가 아니라 후처리 계층으로 두는 것이 안전합니다.',
          en: 'In a release pipeline, AI is safer as a post-processing layer than as the source of truth.',
        },
        {
          ko: '프롬프트 제약은 문체를 위한 것이 아니라 사실 보존을 위한 것입니다.',
          en: 'Prompt constraints are not just for tone; they are primarily for factual preservation.',
        },
      ],
      artifacts: [
        {
          title: {
            ko: 'release notes polishing 프롬프트',
            en: 'Release-notes polishing prompt',
          },
          description: {
            ko: 'LLM에게 사실 추가 금지와 Markdown 구조를 강제하는 예시 프롬프트입니다.',
            en: 'A sample prompt that enforces Markdown structure and forbids invented claims.',
          },
          type: {
            ko: '프롬프트',
            en: 'Prompt',
          },
          href: {
            ko: '/example/semver-github-release-llm-homepage-automation/polish-release-notes-prompt.ko.md',
            en: '/example/semver-github-release-llm-homepage-automation/polish-release-notes-prompt.md',
          },
        },
      ],
    },
    {
      title: {
        ko: 'homepage sync와 Astro import 구조',
        en: 'Homepage sync and the Astro import structure',
      },
      summary: {
        ko: 'release body를 별도 homepage 저장소의 Astro content로 옮기는 방법을 다룹니다. source repo가 homepage 파일을 직접 수정하지 않도록 하는 cross-repo dispatch 구조가 왜 중요한지도 함께 설명합니다.',
        en: 'This chapter shows how a release body becomes Astro content in a separate homepage repository. It also explains why the source repository must not edit homepage files directly.',
      },
      body: [
        {
          ko: '사용자 입장에서는 GitHub Release 페이지보다 제품 홈페이지가 더 먼저 보일 수 있습니다. 그래서 release history를 GitHub 안에만 두지 않고 제품 페이지에서도 읽을 수 있게 만드는 것이 중요합니다. 하지만 앱 저장소가 homepage 저장소 파일을 직접 커밋하기 시작하면 권한과 책임이 빠르게 엉킵니다.',
          en: 'Users often encounter the product homepage before they ever see the GitHub Release page. That makes it valuable to surface release history on the product site as well. But once the app repository starts committing files directly into the homepage repository, ownership and permissions become tangled very quickly.',
        },
        {
          ko: '강의에서는 source repo가 homepage workflow만 깨우고, homepage repo가 자기 workflow 안에서 release를 조회해 Astro content 파일을 직접 생성하도록 둡니다. 즉 dispatch token은 “실행 요청”에만 쓰고, 실제 content 생성과 commit은 homepage의 `GITHUB_TOKEN`이 맡습니다. 이 구조가 권한 최소화의 핵심입니다.',
          en: 'The course therefore keeps the source repo limited to triggering the homepage workflow. The homepage repository then fetches the release, generates Astro content, and commits it inside its own workflow. The dispatch token is only used for requesting execution, while the actual content generation and commit rely on the homepage repo’s own `GITHUB_TOKEN`.',
        },
        {
          ko: '또한 import script는 published stable release만 허용하도록 둡니다. draft, prerelease, unpublished 상태를 강하게 막아 두면 제품 페이지가 실수로 내부 릴리스 기록을 노출하는 문제를 줄일 수 있습니다. 이 챕터는 cross-repo automation에서도 “무엇을 허용하지 않을 것인가”가 얼마나 중요한지 보여 줍니다.',
          en: 'The import script is also constrained to published stable releases only. By rejecting draft, prerelease, and unpublished states, the product page avoids leaking internal or incomplete release records. The chapter demonstrates that cross-repo automation is defined as much by what it forbids as by what it enables.',
        },
      ],
      table: {
        caption: {
          ko: 'cross-repo sync에서 지켜야 할 경계',
          en: 'Boundaries to keep in cross-repo sync',
        },
        headers: [
          { ko: '질문', en: 'Question' },
          { ko: '권장 답변', en: 'Recommended answer' },
          { ko: '이유', en: 'Why it matters' },
        ],
        rows: [
          [
            { ko: '누가 homepage content를 생성하는가?', en: 'Who generates homepage content?' },
            { ko: 'homepage repo', en: 'The homepage repo' },
            { ko: '자기 저장소 파일은 자기 workflow와 토큰으로 다루는 편이 안전함', en: 'It is safer when each repo manages its own files with its own workflow and token' },
          ],
          [
            { ko: '어떤 release만 import하는가?', en: 'Which releases are importable?' },
            { ko: 'published stable release만 허용', en: 'Published stable releases only' },
            { ko: '미완성 또는 내부 상태 노출을 막음', en: 'Prevents exposure of incomplete or internal release state' },
          ],
          [
            { ko: 'dispatch token의 범위는?', en: 'How broad should the dispatch token be?' },
            { ko: 'homepage repo 한정, workflow 실행 권한만', en: 'Limit it to the homepage repo and workflow execution only' },
            { ko: 'cross-repo 권한을 필요 이상으로 넓히지 않기 위해', en: 'To avoid granting broader cross-repo permissions than necessary' },
          ],
        ],
      },
      learn: [
        {
          ko: 'source repo와 homepage repo를 연결하는 안전한 방식',
          en: 'A safe way to connect a source repo and a homepage repo',
        },
        {
          ko: 'Astro content import 스크립트가 지켜야 할 최소 정책',
          en: 'The minimum policy constraints for an Astro content import script',
        },
      ],
      takeaways: [
        {
          ko: 'cross-repo automation은 편의성보다 권한 최소화가 먼저입니다.',
          en: 'Cross-repo automation should prioritize least privilege before convenience.',
        },
        {
          ko: 'homepage는 release를 복제하는 것이 아니라 published stable state를 재표현하는 쪽이 맞습니다.',
          en: 'The homepage should re-express published stable state, not clone every internal release state.',
        },
      ],
      artifacts: [
        {
          title: {
            ko: 'homepage import 체크리스트',
            en: 'Homepage import checklist',
          },
          description: {
            ko: 'dispatch, import, Astro build, no-op 재실행까지 확인하는 체크리스트입니다.',
            en: 'A checklist covering dispatch, import, Astro build, and no-op reruns.',
          },
          type: {
            ko: '체크리스트',
            en: 'Checklist',
          },
          href: {
            ko: '/example/semver-github-release-llm-homepage-automation/homepage-sync-checklist.ko.md',
            en: '/example/semver-github-release-llm-homepage-automation/homepage-sync-checklist.md',
          },
        },
      ],
    },
    {
      title: {
        ko: 'end-to-end 검증과 운영 체크리스트',
        en: 'End-to-end verification and the ops checklist',
      },
      summary: {
        ko: '이 챕터는 release workflow, release publish 상태, homepage import, Astro build, 제품 페이지 반영까지를 어떤 순서로 확인해야 하는지 정리합니다. 공개 릴리스 자동화의 마지막 기준을 만드는 챕터입니다.',
        en: 'This chapter shows the order for checking release workflow execution, release publish state, homepage import, Astro build success, and final product-page visibility. It defines the finish line for a public release pipeline.',
      },
      body: [
        {
          ko: '자동화는 “실행됐다”와 “검증됐다”가 다릅니다. GitHub Actions가 green이라고 해서 release body, homepage markdown, 제품 페이지가 모두 기대한 상태라는 뜻은 아닙니다. 그래서 이 챕터는 최소 네 층위의 검증을 명시합니다. 태그 판별, release 상태, homepage import, 사이트 렌더링입니다.',
          en: 'Automation execution is not the same as verification. A green GitHub Actions run does not automatically mean the release body, homepage markdown, and product page all ended up in the expected state. That is why the chapter explicitly defines at least four layers of checks: tag classification, release state, homepage import, and site rendering.',
        },
        {
          ko: '강의에서는 `gh run watch`, `gh release view`, import된 markdown 파일 확인, no-op 재실행까지 한 흐름으로 봅니다. 핵심은 사람이 마지막에 확인해야 하는 항목을 남겨 두는 것입니다. 특히 cross-repo sync에서는 “workflow가 돌았다”보다 “올바른 stable release 하나만 반영됐는가”가 더 중요합니다.',
          en: 'The course treats `gh run watch`, `gh release view`, inspection of the imported markdown file, and no-op reruns as one continuous workflow. The point is to preserve a small but explicit human verification layer. In cross-repo sync, it matters less that “a workflow ran” and more that “exactly the correct stable release was imported.”',
        },
        {
          ko: '이 챕터는 운영 체크리스트를 남기는 이유도 설명합니다. 릴리스 자동화는 시간이 지나면 당연한 것처럼 보이지만, 실제 장애는 대부분 “이전엔 왜 이렇게 했는지”를 잊었을 때 발생합니다. 체크리스트는 단순 문서가 아니라 재발 방지 장치입니다.',
          en: 'The chapter also explains why an ops checklist should survive after the pipeline works. Release automation can feel obvious once it is stable, but many regressions appear when people forget why a specific boundary or replay rule existed in the first place. The checklist acts as a lightweight anti-regression mechanism.',
        },
      ],
      table: {
        caption: {
          ko: '권장 end-to-end 검증 순서',
          en: 'Recommended end-to-end verification order',
        },
        headers: [
          { ko: '검증 층위', en: 'Verification layer' },
          { ko: '직접 확인할 것', en: 'What to inspect directly' },
          { ko: '성공 기준', en: 'Success signal' },
        ],
        rows: [
          [
            { ko: 'release workflow', en: 'Release workflow' },
            { ko: 'SemVer 분류, draft -> publish 흐름', en: 'SemVer classification and draft -> publish flow' },
            { ko: 'stable 태그만 intended path를 따라감', en: 'Only stable tags follow the intended public path' },
          ],
          [
            { ko: 'GitHub Release 상태', en: 'GitHub Release state' },
            { ko: 'title/body, draft=false, prerelease 여부', en: 'title/body, draft=false, prerelease state' },
            { ko: '최종 release body가 canonical source로 남음', en: 'The final release body remains as the canonical source' },
          ],
          [
            { ko: 'homepage import', en: 'Homepage import' },
            { ko: '생성된 markdown 경로와 commit 여부', en: 'Generated markdown path and commit state' },
            { ko: 'stable release 한 건이 의도한 위치에 반영됨', en: 'Exactly one stable release lands in the intended content path' },
          ],
          [
            { ko: '제품 페이지', en: 'Product page' },
            { ko: '최신 release 노출과 Astro build 결과', en: 'Latest release visibility and Astro build result' },
            { ko: '사용자가 실제로 최신 릴리스를 볼 수 있음', en: 'Users can actually see the latest release on the site' },
          ],
        ],
      },
      learn: [
        {
          ko: '실행 로그와 사용자-visible 결과를 구분해 검증하는 법',
          en: 'How to separate execution logs from user-visible verification',
        },
        {
          ko: 'no-op 재실행과 replay 검증이 왜 중요한지',
          en: 'Why no-op reruns and replay checks matter',
        },
      ],
      takeaways: [
        {
          ko: 'release automation의 종료 조건은 workflow 성공이 아니라 사용자-visible state의 일관성입니다.',
          en: 'The finish line for release automation is not workflow success alone, but consistent user-visible state.',
        },
        {
          ko: '운영 체크리스트는 귀찮은 문서가 아니라 회귀 방지 장치입니다.',
          en: 'An operations checklist is not busywork; it is a compact regression-prevention device.',
        },
      ],
      artifacts: [
        {
          title: {
            ko: 'end-to-end 검증 체크리스트',
            en: 'End-to-end verification checklist',
          },
          description: {
            ko: 'release view, dispatch, import, build, no-op 재실행까지 순서대로 확인하는 문서입니다.',
            en: 'A checklist for checking release view, dispatch, import, build, and no-op reruns in order.',
          },
          type: {
            ko: '검증 문서',
            en: 'Verification doc',
          },
          href: {
            ko: '/example/semver-github-release-llm-homepage-automation/homepage-sync-checklist.ko.md',
            en: '/example/semver-github-release-llm-homepage-automation/homepage-sync-checklist.md',
          },
        },
      ],
    },
  ],
  practiceAssets: [
    {
      label: {
        ko: '예제 파일 안내',
        en: 'Example asset guide',
      },
      href: {
        ko: '/example/semver-github-release-llm-homepage-automation/README.ko.md',
        en: '/example/semver-github-release-llm-homepage-automation/README.md',
      },
      type: {
        ko: 'README',
        en: 'README',
      },
      description: {
        ko: '실습 파일을 어떤 순서로 읽으면 좋은지 정리한 시작 문서입니다.',
        en: 'The starting document that explains the recommended order for reading the example assets.',
      },
    },
    {
      label: {
        ko: 'release workflow 체크리스트',
        en: 'Release workflow checklist',
      },
      href: {
        ko: '/example/semver-github-release-llm-homepage-automation/release-workflow-checklist.ko.md',
        en: '/example/semver-github-release-llm-homepage-automation/release-workflow-checklist.md',
      },
      type: {
        ko: '체크리스트',
        en: 'Checklist',
      },
      description: {
        ko: '태그 분류, draft release, recovery 조건을 실습 전에 점검하는 문서입니다.',
        en: 'A pre-build checklist for tag classification, draft release flow, and recovery policy.',
      },
    },
    {
      label: {
        ko: 'release notes polishing 프롬프트',
        en: 'Release-notes polishing prompt',
      },
      href: {
        ko: '/example/semver-github-release-llm-homepage-automation/polish-release-notes-prompt.ko.md',
        en: '/example/semver-github-release-llm-homepage-automation/polish-release-notes-prompt.md',
      },
      type: {
        ko: '프롬프트',
        en: 'Prompt',
      },
      description: {
        ko: 'generated notes를 사용자-facing release notes로 다듬을 때 쓰는 제약 중심 프롬프트입니다.',
        en: 'A constraint-focused prompt for turning generated notes into user-facing release notes.',
      },
    },
    {
      label: {
        ko: 'homepage sync 체크리스트',
        en: 'Homepage sync checklist',
      },
      href: {
        ko: '/example/semver-github-release-llm-homepage-automation/homepage-sync-checklist.ko.md',
        en: '/example/semver-github-release-llm-homepage-automation/homepage-sync-checklist.md',
      },
      type: {
        ko: '검증 문서',
        en: 'Verification doc',
      },
      description: {
        ko: 'dispatch부터 Astro build, no-op 재실행까지 end-to-end 검증 순서를 정리했습니다.',
        en: 'Covers dispatch, Astro build, and no-op reruns as one end-to-end verification flow.',
      },
    },
  ],
  faq: [
    {
      question: {
        ko: '이 강의는 GitHub Actions 문법 강의인가요, release 운영 강의인가요?',
        en: 'Is this mainly a GitHub Actions syntax course or a release-operations course?',
      },
      answer: {
        ko: '후자에 더 가깝습니다. GitHub Actions YAML을 다루긴 하지만, 핵심은 draft release 전략, generated notes와 LLM의 역할 분리, cross-repo sync, end-to-end 검증 같은 운영 원칙을 세우는 데 있습니다.',
        en: 'It is much closer to the latter. GitHub Actions YAML is part of the implementation, but the main value is in the operating rules: draft-release strategy, generated-notes vs LLM role split, cross-repo sync, and end-to-end verification.',
      },
    },
    {
      question: {
        ko: 'LLM polishing은 꼭 넣어야 하나요?',
        en: 'Do I need LLM polishing at all?',
      },
      answer: {
        ko: '아닙니다. 강의도 generated notes를 기본 경로로 두고, 사용자-facing 문장 통일이나 다국어 스타일 정리가 필요할 때만 옵션으로 넣습니다. 먼저 generated notes만으로 충분한지 판단하는 편이 더 실용적입니다.',
        en: 'No. The guide keeps generated notes as the default path and adds polishing only when you need a more consistent user-facing release page or multilingual tone control. In many cases, validating whether generated notes are already sufficient is the more practical first step.',
      },
    },
    {
      question: {
        ko: '왜 source repo가 homepage 파일을 직접 수정하면 안 되나요?',
        en: 'Why should the source repo avoid editing homepage files directly?',
      },
      answer: {
        ko: '권한, 실패 지점, 책임 추적이 한 번에 엉키기 때문입니다. homepage repo가 자기 토큰과 workflow로 자기 content를 생성하도록 두면 권한을 최소화할 수 있고, 어떤 저장소가 어떤 상태를 책임지는지도 더 선명해집니다.',
        en: 'Because it tangles permissions, failure modes, and ownership tracking in one place. Letting the homepage repo generate its own content with its own token and workflow keeps privilege narrow and makes repository responsibilities much clearer.',
      },
    },
  ],
  evidence: [
    {
      type: 'diagram',
      title: {
        ko: '전체 release -> homepage sync 흐름',
        en: 'Full release-to-homepage sync flow',
      },
      description: {
        ko: '태그 푸시부터 Astro 배포까지의 흐름을 텍스트로 요약한 다이어그램입니다.',
        en: 'A text diagram summarizing the path from tag push to Astro deployment.',
      },
      language: 'text',
      code: `git tag vX.Y.Z
  -> tag gate
  -> draft GitHub Release
  -> generated notes
  -> optional LLM polishing
  -> publish stable release
  -> workflow_dispatch to homepage repo
  -> Astro content import
  -> build and deploy`,
    },
    {
      type: 'diagram',
      title: {
        ko: 'source repo와 homepage repo의 경계',
        en: 'Boundary between source repo and homepage repo',
      },
      description: {
        ko: '누가 release를 쓰고 누가 content를 생성하는지 한눈에 보는 경계도입니다.',
        en: 'A boundary view showing who writes release state and who generates homepage content.',
      },
      language: 'text',
      code: `source repo
  owns: tag policy, release creation, publish, dispatch request

homepage repo
  owns: fetch published release, write Astro content, build, commit`,
    },
    {
      type: 'code',
      title: {
        ko: '검증 관점의 핵심 명령',
        en: 'Key verification commands',
      },
      description: {
        ko: 'release publish와 homepage import를 사람이 확인할 때 자주 쓰는 명령 묶음입니다.',
        en: 'A compact set of commands frequently used for manual verification of release publish and homepage import.',
      },
      language: 'bash',
      code: `gh run list --workflow Release --limit 5
gh run watch <SOURCE_RUN_ID>
gh release view <TAG_NAME> --repo <OWNER/REPO>
gh run list --workflow "Import release notes" --repo <OWNER/HOMEPAGE_REPO> --limit 5
gh run watch <HOMEPAGE_RUN_ID> --repo <OWNER/HOMEPAGE_REPO>`,
    },
  ],
};
