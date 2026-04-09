import CourseCatalogPage from '../react-pages/CourseCatalogPage';
import { LocaleProvider } from '../i18n/LocaleContext';

export default function CatalogPageIsland({ initialLocale = 'ko', initialPathname = '/' }) {
  return (
    <LocaleProvider initialLocale={initialLocale} initialPathname={initialPathname}>
      <CourseCatalogPage />
    </LocaleProvider>
  );
}
