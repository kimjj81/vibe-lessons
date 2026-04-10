import { getCourseDetailBySlug } from '../course-details/registry';
import { getCourseBySlug } from '../courses/registry';
import { LocaleProvider } from '../i18n/LocaleContext';
import CourseOverviewPage from '../react-pages/CourseOverviewPage';

export default function CourseOverviewIsland({ courseSlug, initialLocale = 'ko', initialPathname = '/' }) {
  const course = getCourseBySlug(courseSlug);
  const detail = getCourseDetailBySlug(courseSlug);

  if (!course) {
    throw new Error(`Unknown course slug: ${courseSlug}`);
  }

  if (!detail) {
    throw new Error(`Unknown course detail slug: ${courseSlug}`);
  }

  return (
    <LocaleProvider initialLocale={initialLocale} initialPathname={initialPathname}>
      <CourseOverviewPage course={course} detail={detail} />
    </LocaleProvider>
  );
}
