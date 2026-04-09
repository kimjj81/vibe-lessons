import { buildLocalizedPath } from '../i18n/localeRouting';
import { pickLocalized } from '../i18n/localize';
import { buildCanonicalUrl, DEFAULT_SITE_BASE_URL, normalizeBaseUrl } from './siteUrl';

function getBaseUrl(site = DEFAULT_SITE_BASE_URL) {
  return normalizeBaseUrl(site);
}

export function getCatalogStructuredData({ site = DEFAULT_SITE_BASE_URL, courses = [], locale = 'ko' }) {
  const baseUrl = getBaseUrl(site);
  const catalogPath = buildLocalizedPath(locale, '/');

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: locale === 'ko' ? 'Studio Jin 강의 아카이브' : 'Studio Jin Lecture Archive',
    description: locale === 'ko'
      ? '실전형 개발 강의를 모은 Studio Jin 강의 카탈로그'
      : 'A practical lecture catalog from Studio Jin',
    url: buildCanonicalUrl(catalogPath, baseUrl),
    hasPart: courses.map((course) => ({
      '@type': 'Course',
      name: pickLocalized(course.title, locale),
      description: pickLocalized(course.description, locale),
      url: buildCanonicalUrl(buildLocalizedPath(locale, `/courses/${course.slug}/overview`), baseUrl),
    })),
  };
}

export function getCourseStructuredData({ site = DEFAULT_SITE_BASE_URL, course, detail, path, locale = 'ko' }) {
  const baseUrl = getBaseUrl(site);

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: pickLocalized(course.title, locale),
    description: pickLocalized(detail?.hero?.summary, locale) || pickLocalized(course.description, locale),
    url: buildCanonicalUrl(path, baseUrl),
    provider: {
      '@type': 'Organization',
      name: 'Studio Jin',
      url: baseUrl,
    },
    inLanguage: locale,
    educationalLevel: pickLocalized(detail?.difficulty, locale) || 'Beginner',
    timeRequired: pickLocalized(detail?.estimatedTime, locale) || undefined,
  };
}

export function getNotFoundStructuredData({ site = DEFAULT_SITE_BASE_URL }) {
  const baseUrl = getBaseUrl(site);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Page not found',
    url: buildCanonicalUrl('/404', baseUrl),
  };
}
