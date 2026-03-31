import { cmsArchitectureDetail } from './cms-architecture';
import { cusdisDetail } from './cusdis';
import { vibeCodingMasterclassDetail } from './vibe-coding-masterclass';

export const courseDetailRegistry = [
  vibeCodingMasterclassDetail,
  cusdisDetail,
  cmsArchitectureDetail,
];

export function getCourseDetailBySlug(courseSlug) {
  return courseDetailRegistry.find((detail) => detail.slug === courseSlug);
}
