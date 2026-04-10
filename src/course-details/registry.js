import { cmsArchitectureDetail } from './cms-architecture';
import { cusdisDetail } from './cusdis';
import { vibeCodingMasterclassDetail } from './vibe-coding-masterclass';
import { semverGithubReleaseLlmHomepageAutomationDetail } from './semver-github-release-llm-homepage-automation';

export const courseDetailRegistry = [
  vibeCodingMasterclassDetail,
  cusdisDetail,
  cmsArchitectureDetail,
  semverGithubReleaseLlmHomepageAutomationDetail,
];

export function getCourseDetailBySlug(courseSlug) {
  return courseDetailRegistry.find((detail) => detail.slug === courseSlug);
}
