import CourseDeck from './CourseDeck';
import { getCourseBySlug } from '../courses/registry';
import { LocaleProvider } from '../i18n/LocaleContext';

export default function CourseDeckIsland({ courseSlug, initialLocale = 'ko', initialPathname = '/' }) {
  const course = getCourseBySlug(courseSlug);

  if (!course) {
    throw new Error(`Unknown course slug: ${courseSlug}`);
  }

  return (
    <LocaleProvider initialLocale={initialLocale} initialPathname={initialPathname}>
      <CourseDeck course={course} />
    </LocaleProvider>
  );
}
