import { getCourseDetailBySlug } from '../course-details/registry';
import { courseRegistry, getCourseBySlug } from '../courses/registry';
import { pickLocalized } from '../i18n/localize';
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  buildLocalizedPath,
} from '../i18n/localeRouting';
import { createSeoPayload } from './head';
import { buildCanonicalUrl } from './siteUrl';

function getPublishedCourses() {
  return courseRegistry.filter((course) => course.status === 'live');
}

function buildAlternates(pathname) {
  const alternates = SUPPORTED_LOCALES.map((locale) => ({
    hrefLang: locale,
    href: buildCanonicalUrl(buildLocalizedPath(locale, pathname)),
  }));

  alternates.push({
    hrefLang: 'x-default',
    href: buildCanonicalUrl(buildLocalizedPath(DEFAULT_LOCALE, pathname)),
  });

  return alternates;
}

function buildBreadcrumbList(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function buildCatalogItemList(locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: getPublishedCourses().length,
    itemListElement: getPublishedCourses().map((course, index) => {
      const detail = getCourseDetailBySlug(course.slug);
      const overviewPath = buildLocalizedPath(locale, `/courses/${course.slug}/overview`);

      return {
        '@type': 'ListItem',
        position: index + 1,
        url: buildCanonicalUrl(overviewPath),
        name: pickLocalized(course.title, locale),
        description: detail
          ? pickLocalized(detail.hero.summary, locale)
          : pickLocalized(course.description, locale),
      };
    }),
  };
}

function buildCatalogSchema(locale, title, description, canonical) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: title,
        description,
        url: canonical,
        inLanguage: locale,
      },
      buildCatalogItemList(locale),
    ],
  };
}

function buildCourseSchema({ locale, canonical, course, detail, pageType, pageTitle, pageDescription }) {
  const courseName = pickLocalized(course.title, locale);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': pageType,
        name: pageTitle,
        description: pageDescription,
        url: canonical,
        inLanguage: locale,
        isAccessibleForFree: true,
        provider: {
          '@type': 'Organization',
          name: 'Studio Jin',
          url: buildCanonicalUrl(buildLocalizedPath(DEFAULT_LOCALE, '/')),
        },
        educationalLevel: pickLocalized(detail?.difficulty, locale),
        learningResourceType: pageType === 'LearningResource' ? 'Slide deck' : 'Course overview',
        about: courseName,
      },
      buildBreadcrumbList([
        {
          name: locale === 'ko' ? '강의 목록' : 'Lecture index',
          url: buildCanonicalUrl(buildLocalizedPath(locale, '/')),
        },
        {
          name: courseName,
          url: buildCanonicalUrl(buildLocalizedPath(locale, `/courses/${course.slug}/overview`)),
        },
        {
          name: pageTitle,
          url: canonical,
        },
      ]),
    ],
  };
}

function buildCatalogSeo(locale) {
  const path = buildLocalizedPath(locale, '/');
  const title = locale === 'ko' ? 'Studio Jin 강의 아카이브' : 'Studio Jin Lecture Archive';
  const description = locale === 'ko'
    ? '실전형 개발 강의를 하나씩 쌓아가는 컬렉션입니다. 각 강의의 소개 페이지와 슬라이드 덱을 언어별 URL로 제공합니다.'
    : 'A growing collection of practical development lectures with localized overview pages and slide decks.';

  return createSeoPayload({
    title: `${title} | Studio Jin`,
    description,
    locale,
    canonical: buildCanonicalUrl(path),
    alternates: buildAlternates('/'),
    jsonLd: [buildCatalogSchema(locale, title, description, buildCanonicalUrl(path))],
    ogType: 'website',
  });
}

export function getCourseOverviewSeo(locale, courseSlug) {
  const course = getCourseBySlug(courseSlug);
  const detail = getCourseDetailBySlug(courseSlug);

  if (!course || !detail) {
    return getNotFoundSeo(locale, buildLocalizedPath(locale, `/courses/${courseSlug}/overview`));
  }

  const path = buildLocalizedPath(locale, `/courses/${courseSlug}/overview`);
  const title = pickLocalized(detail.hero.title, locale);
  const description = pickLocalized(detail.hero.summary, locale);

  return createSeoPayload({
    title: `${title} | Studio Jin`,
    description,
    locale,
    canonical: buildCanonicalUrl(path),
    alternates: buildAlternates(`/courses/${courseSlug}/overview`),
    jsonLd: [
      buildCourseSchema({
        locale,
        canonical: buildCanonicalUrl(path),
        course,
        detail,
        pageType: 'Course',
        pageTitle: title,
        pageDescription: description,
      }),
    ],
    ogType: 'article',
  });
}

export function getCourseDeckSeo(locale, courseSlug) {
  const course = getCourseBySlug(courseSlug);
  const detail = getCourseDetailBySlug(courseSlug);

  if (!course) {
    return getNotFoundSeo(locale, buildLocalizedPath(locale, `/courses/${courseSlug}`));
  }

  const path = buildLocalizedPath(locale, `/courses/${courseSlug}`);
  const courseName = pickLocalized(course.title, locale);
  const title = locale === 'ko'
    ? `${courseName} 슬라이드`
    : `${courseName} Slides`;
  const description = detail
    ? `${pickLocalized(detail.hero.summary, locale)} ${pickLocalized(detail.hero.deliverable, locale)}`
    : pickLocalized(course.description, locale);

  return createSeoPayload({
    title: `${title} | Studio Jin`,
    description,
    locale,
    canonical: buildCanonicalUrl(path),
    alternates: buildAlternates(`/courses/${courseSlug}`),
    jsonLd: [
      buildCourseSchema({
        locale,
        canonical: buildCanonicalUrl(path),
        course,
        detail,
        pageType: 'LearningResource',
        pageTitle: title,
        pageDescription: description,
      }),
    ],
    ogType: 'article',
  });
}

export function getNotFoundSeo(locale, currentPath = buildLocalizedPath(locale, '/')) {
  const title = locale === 'ko' ? '페이지를 찾을 수 없습니다' : 'Page not found';
  const description = locale === 'ko'
    ? '요청한 페이지를 찾을 수 없습니다. 공개된 강의 목록으로 이동해 주세요.'
    : 'The requested page could not be found. Return to the published lecture index.';

  return createSeoPayload({
    title: `${title} | Studio Jin`,
    description,
    locale,
    canonical: buildCanonicalUrl(currentPath),
    alternates: buildAlternates('/'),
    jsonLd: [],
    robots: 'noindex, nofollow',
    ogType: 'website',
  });
}

export function getPageSeoByPath(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const segments = normalizedPath.split('/').filter(Boolean);

  if (segments.length === 1) {
    return buildCatalogSeo(segments[0]);
  }

  const [locale, scope, courseSlug, leaf] = segments;
  if (!SUPPORTED_LOCALES.includes(locale) || scope !== 'courses' || !courseSlug) {
    return null;
  }

  if (leaf === 'overview') {
    return getCourseOverviewSeo(locale, courseSlug);
  }

  if (!leaf) {
    return getCourseDeckSeo(locale, courseSlug);
  }

  return null;
}

export function getPublicLocalizedRouteEntries() {
  return SUPPORTED_LOCALES.flatMap((locale) => {
    const baseEntry = {
      locale,
      pathname: buildLocalizedPath(locale, '/'),
      seo: buildCatalogSeo(locale),
    };

    const courseEntries = getPublishedCourses().flatMap((course) => ([
      {
        locale,
        pathname: buildLocalizedPath(locale, `/courses/${course.slug}`),
        seo: getCourseDeckSeo(locale, course.slug),
      },
      {
        locale,
        pathname: buildLocalizedPath(locale, `/courses/${course.slug}/overview`),
        seo: getCourseOverviewSeo(locale, course.slug),
      },
    ]));

    return [baseEntry, ...courseEntries];
  });
}

export function getCatalogSeo(locale) {
  return buildCatalogSeo(locale);
}
