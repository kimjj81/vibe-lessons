export const SUPPORTED_LOCALES = ['ko', 'en'];
export const DEFAULT_LOCALE = 'ko';

export function isSupportedLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale);
}

export function normalizeLocale(locale) {
  return isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
}

export function normalizePathname(pathname = '/') {
  const [pathOnly] = String(pathname || '/').split(/[?#]/, 1);
  const withLeadingSlash = pathOnly.startsWith('/') ? pathOnly : `/${pathOnly}`;
  const collapsed = withLeadingSlash.replace(/\/{2,}/g, '/');
  return collapsed || '/';
}

export function stripLocaleFromPathname(pathname = '/') {
  const normalizedPathname = normalizePathname(pathname);
  const segments = normalizedPathname.split('/').filter(Boolean);

  if (segments.length > 0 && isSupportedLocale(segments[0])) {
    const rest = segments.slice(1).join('/');
    return {
      locale: segments[0],
      pathname: rest ? `/${rest}` : '/',
    };
  }

  return {
    locale: null,
    pathname: normalizedPathname,
  };
}

export function buildLocalizedPath(locale, pathname = '/') {
  const resolvedLocale = normalizeLocale(locale);
  const { pathname: barePath } = stripLocaleFromPathname(pathname);

  if (barePath === '/') {
    return `/${resolvedLocale}/`;
  }

  return `/${resolvedLocale}${barePath}`;
}

export function switchLocalePath(pathname, nextLocale) {
  const { pathname: barePath } = stripLocaleFromPathname(pathname);
  return buildLocalizedPath(nextLocale, barePath);
}
