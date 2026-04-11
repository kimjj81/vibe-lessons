import { courseRegistry } from '../../courses/registry';
import { buildCatalogSocialImageSvg } from '../../seo/socialImage';

export const prerender = true;

export function GET() {
  const liveCourses = courseRegistry.filter((course) => course.status === 'live');
  const svg = buildCatalogSocialImageSvg({
    locale: 'ko',
    courseCount: liveCourses.length,
    featuredCourse: liveCourses[0],
  });

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
