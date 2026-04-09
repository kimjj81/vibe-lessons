import CourseDeck from './CourseDeck';
import { LocaleProvider } from '../i18n/LocaleContext';

export default function CourseDeckIsland({ course, initialLocale = 'ko', initialPathname = '/' }) {
  return (
    <LocaleProvider initialLocale={initialLocale} initialPathname={initialPathname}>
      <CourseDeck course={course} />
    </LocaleProvider>
  );
}
