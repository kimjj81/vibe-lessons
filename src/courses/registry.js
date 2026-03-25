import { vibeCodingCourse } from './vibeCodingCourse';
import { cusdisCourse } from './cusdisCourse';

export const courseRegistry = [vibeCodingCourse, cusdisCourse];

export function getCourseBySlug(courseSlug) {
  return courseRegistry.find((course) => course.slug === courseSlug);
}
