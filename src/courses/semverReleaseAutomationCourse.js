import Slide01_Title from '../slides/semver-release/Slide01_Title';
import Slide02_WhyThisPipelineExists from '../slides/semver-release/Slide02_WhyThisPipelineExists';
import Slide03_EndToEndFlow from '../slides/semver-release/Slide03_EndToEndFlow';
import Slide04_EnvironmentAndPrerequisites from '../slides/semver-release/Slide04_EnvironmentAndPrerequisites';
import Slide05_SecretsAndTokenBoundaries from '../slides/semver-release/Slide05_SecretsAndTokenBoundaries';
import Slide06_SemverTagClassification from '../slides/semver-release/Slide06_SemverTagClassification';
import Slide07_WhyDraftReleaseFirst from '../slides/semver-release/Slide07_WhyDraftReleaseFirst';
import Slide08_ReleaseWorkflowCoreYaml from '../slides/semver-release/Slide08_ReleaseWorkflowCoreYaml';
import Slide09_GeneratedNotesAsBaseline from '../slides/semver-release/Slide09_GeneratedNotesAsBaseline';
import Slide10_WhenToAddLlmPolishing from '../slides/semver-release/Slide10_WhenToAddLlmPolishing';
import Slide11_LlmPromptAndScriptBoundary from '../slides/semver-release/Slide11_LlmPromptAndScriptBoundary';
import Slide12_CrossRepoSyncArchitecture from '../slides/semver-release/Slide12_CrossRepoSyncArchitecture';
import Slide13_DispatchWorkflowInSourceRepo from '../slides/semver-release/Slide13_DispatchWorkflowInSourceRepo';
import Slide14_HomepageImportWorkflowAndScript from '../slides/semver-release/Slide14_HomepageImportWorkflowAndScript';
import Slide15_EndToEndVerification from '../slides/semver-release/Slide15_EndToEndVerification';
import Slide16_FinalChecklistAndTakeaways from '../slides/semver-release/Slide16_FinalChecklistAndTakeaways';

export const semverReleaseAutomationCourse = {
  slug: 'semver-github-release-llm-homepage-automation',
  title: {
    ko: 'SemVer Release 자동화',
    en: 'SemVer Release Automation',
  },
  subtitle: {
    ko: 'GitHub Release에서 홈페이지 반영까지 잇는 실전 배포 파이프라인',
    en: 'A practical release pipeline from GitHub Release to homepage sync',
  },
  description: {
    ko: 'SemVer 태그 판별, draft release, generated notes, 선택적 LLM polishing, homepage sync, Astro import까지를 하나의 공개 릴리스 파이프라인으로 연결하는 강의입니다.',
    en: 'A hands-on course on connecting SemVer tags, draft releases, generated notes, optional LLM polishing, homepage sync, and Astro import into one public release pipeline.',
  },
  status: 'live',
  theme: {
    '--grad-start': '#06b6d4',
    '--grad-mid': '#14b8a6',
    '--grad-end': '#84cc16',
    '--bg-dark': '#061014',
    '--bg-card': 'rgba(236, 253, 245, 0.06)',
    '--bg-card-hover': 'rgba(236, 253, 245, 0.1)',
    '--text-main': '#ecfeff',
    '--text-muted': '#99f6e4',
    '--border': 'rgba(45, 212, 191, 0.18)',
    '--shadow': '0 32px 80px rgba(3, 11, 15, 0.46)',
  },
  slides: [
    Slide01_Title,
    Slide02_WhyThisPipelineExists,
    Slide03_EndToEndFlow,
    Slide04_EnvironmentAndPrerequisites,
    Slide05_SecretsAndTokenBoundaries,
    Slide06_SemverTagClassification,
    Slide07_WhyDraftReleaseFirst,
    Slide08_ReleaseWorkflowCoreYaml,
    Slide09_GeneratedNotesAsBaseline,
    Slide10_WhenToAddLlmPolishing,
    Slide11_LlmPromptAndScriptBoundary,
    Slide12_CrossRepoSyncArchitecture,
    Slide13_DispatchWorkflowInSourceRepo,
    Slide14_HomepageImportWorkflowAndScript,
    Slide15_EndToEndVerification,
    Slide16_FinalChecklistAndTakeaways,
  ],
};
