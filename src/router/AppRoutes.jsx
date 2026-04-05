import { Navigate, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';
import AnalyticsTracker from '../components/AnalyticsTracker';
import { LocaleProvider } from '../i18n/LocaleContext';
import {
  DEFAULT_LOCALE,
  buildLocalizedPath,
  isSupportedLocale,
  stripLocaleFromPathname,
} from '../i18n/localeRouting';
import CourseCatalogPage from '../pages/CourseCatalogPage';
import CourseDeckPage from '../pages/CourseDeckPage';
import CourseOverviewPage from '../pages/CourseOverviewPage';
import NotFoundPage from '../pages/NotFoundPage';

function buildNavigationTarget(pathname, search = '', hash = '') {
  return `${pathname}${search}${hash}`;
}

function LegacyLocaleRedirect() {
  const location = useLocation();
  const targetPath = buildLocalizedPath(DEFAULT_LOCALE, location.pathname);
  return (
    <Navigate
      replace
      to={buildNavigationTarget(targetPath, location.search, location.hash)}
    />
  );
}

function LocalizedAppLayout() {
  const { locale } = useParams();
  const location = useLocation();

  if (!isSupportedLocale(locale)) {
    const { pathname } = stripLocaleFromPathname(location.pathname);
    const targetPath = buildLocalizedPath(DEFAULT_LOCALE, pathname);
    return (
      <Navigate
        replace
        to={buildNavigationTarget(targetPath, location.search, location.hash)}
      />
    );
  }

  return (
    <LocaleProvider locale={locale}>
      {typeof window !== 'undefined' ? <AnalyticsTracker /> : null}
      <Outlet />
    </LocaleProvider>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LegacyLocaleRedirect />} />
      <Route path="/courses/:courseSlug" element={<LegacyLocaleRedirect />} />
      <Route path="/courses/:courseSlug/overview" element={<LegacyLocaleRedirect />} />

      <Route path="/:locale" element={<LocalizedAppLayout />}>
        <Route index element={<CourseCatalogPage />} />
        <Route path="courses/:courseSlug" element={<CourseDeckPage />} />
        <Route path="courses/:courseSlug/overview" element={<CourseOverviewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="*" element={<LegacyLocaleRedirect />} />
    </Routes>
  );
}
