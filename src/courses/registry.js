import { vibeCodingCourse } from './vibeCodingCourse';
import { cusdisCourse } from './cusdisCourse';
import { cmsCourse } from './cmsCourse';

export const courseRegistry = [vibeCodingCourse, cusdisCourse, cmsCourse];

export function getCourseBySlug(courseSlug) {
  return courseRegistry.find((course) => course.slug === courseSlug);
}
