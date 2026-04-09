import CourseOverviewPage from '../react-pages/CourseOverviewPage';
import { LocaleProvider } from '../i18n/LocaleContext';

export default function CourseOverviewIsland({ course, detail, initialLocale = 'ko', initialPathname = '/' }) {
  return (
    <LocaleProvider initialLocale={initialLocale} initialPathname={initialPathname}>
      <CourseOverviewPage course={course} detail={detail} />
    </LocaleProvider>
  );
}
