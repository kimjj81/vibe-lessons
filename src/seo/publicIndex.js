import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { courseDetailRegistry } from '../course-details/registry';
import { courseRegistry } from '../courses/registry';
import { SUPPORTED_LOCALES, buildLocalizedPath } from '../i18n/localeRouting';
import { pickLocalized } from '../i18n/localize';
import { buildCanonicalUrl, DEFAULT_SITE_BASE_URL, normalizeBaseUrl } from './siteUrl';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicExampleDir = path.resolve(__dirname, '../../public/example');

function isLiveCourse(course) {
  return course.status === 'live';
}

export function getSiteBaseUrl(site = DEFAULT_SITE_BASE_URL) {
  return normalizeBaseUrl(site);
}

export function getPublishedCourses() {
  return courseRegistry.filter(isLiveCourse);
}

export function getPublishedCourseDetails() {
  return courseDetailRegistry.filter((detail) => getPublishedCourses().some((course) => course.slug === detail.slug));
}

export function getPublishedPageEntries(site = DEFAULT_SITE_BASE_URL) {
  const baseUrl = getSiteBaseUrl(site);
  const courses = getPublishedCourses();

  return SUPPORTED_LOCALES.flatMap((locale) => {
    const baseEntries = [
      {
        url: buildCanonicalUrl(buildLocalizedPath(locale, '/'), baseUrl),
        path: buildLocalizedPath(locale, '/'),
        title: locale === 'ko' ? 'Studio Jin 강의 아카이브' : 'Studio Jin Lecture Archive',
        description: locale === 'ko'
          ? '실전형 개발 강의를 모은 Studio Jin 강의 카탈로그'
          : 'A practical lecture catalog from Studio Jin',
        type: 'catalog',
        locale,
      },
    ];

    const courseEntries = courses.flatMap((course) => {
      const detail = courseDetailRegistry.find((entry) => entry.slug === course.slug);

      return [
        {
          url: buildCanonicalUrl(buildLocalizedPath(locale, `/courses/${course.slug}`), baseUrl),
          path: buildLocalizedPath(locale, `/courses/${course.slug}`),
          title: pickLocalized(course.title, locale),
          description: pickLocalized(course.description, locale),
          type: 'course-deck',
          locale,
        },
        {
          url: buildCanonicalUrl(buildLocalizedPath(locale, `/courses/${course.slug}/guide`), baseUrl),
          path: buildLocalizedPath(locale, `/courses/${course.slug}/guide`),
          title: pickLocalized(detail?.hero?.title, locale) || (locale === 'ko' ? `${pickLocalized(course.title, locale)} 상세강의자료` : `${pickLocalized(course.title, locale)} Lecture Guide`),
          description: pickLocalized(detail?.hero?.summary, locale) || pickLocalized(course.description, locale),
          type: 'course-guide',
          locale,
        },
      ];
    });

    return [...baseEntries, ...courseEntries];
  });
}

export async function getPublicExampleEntries(site = DEFAULT_SITE_BASE_URL) {
  const baseUrl = getSiteBaseUrl(site);
  const detailByHref = new Map(
    getPublishedCourseDetails()
      .flatMap((detail) => detail.practiceAssets || [])
      .flatMap((asset) => ([
        asset.href?.ko
          ? [
            asset.href.ko,
            {
              label: asset.label?.ko || asset.label?.en || 'Example asset',
              description: asset.description?.ko || asset.description?.en || '',
              type: asset.type?.ko || asset.type?.en || 'asset',
            },
          ]
          : null,
        asset.href?.en
          ? [
            asset.href.en,
            {
              label: asset.label?.en || asset.label?.ko || 'Example asset',
              description: asset.description?.en || asset.description?.ko || '',
              type: asset.type?.en || asset.type?.ko || 'asset',
            },
          ]
          : null,
      ]).filter(Boolean)),
  );

  async function walk(dirPath, currentPrefix = '/example') {
    const entries = await readdir(dirPath, { withFileTypes: true });
    const output = [];

    for (const entry of entries) {
      const entryPath = path.join(dirPath, entry.name);
      const routePath = `${currentPrefix}/${entry.name}`;

      if (entry.isDirectory()) {
        output.push(...await walk(entryPath, routePath));
        continue;
      }

      const metadata = detailByHref.get(routePath);

      output.push({
        url: buildCanonicalUrl(routePath, baseUrl),
        path: routePath,
        title: metadata?.label || entry.name,
        description: metadata?.description || `Public example asset: ${entry.name}`,
        type: metadata?.type || 'example-file',
      });
    }

    return output;
  }

  return walk(publicExampleDir);
}

export async function getAllPublicEntries(site = DEFAULT_SITE_BASE_URL) {
  const pages = getPublishedPageEntries(site);
  const examples = await getPublicExampleEntries(site);
  return [...pages, ...examples];
}
