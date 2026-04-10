import { vibeCodingCourse } from './vibeCodingCourse';
import { cusdisCourse } from './cusdisCourse';
import { cmsCourse } from './cmsCourse';
import { semverReleaseAutomationCourse } from './semverReleaseAutomationCourse';

export const courseRegistry = [vibeCodingCourse, cusdisCourse, cmsCourse, semverReleaseAutomationCourse];

export function getCourseBySlug(courseSlug) {
  return courseRegistry.find((course) => course.slug === courseSlug);
}
