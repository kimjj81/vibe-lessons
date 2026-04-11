import { getCourseDetailBySlug } from '../../../../course-details/registry';
import { courseRegistry, getCourseBySlug } from '../../../../courses/registry';
import { SOCIAL_IMAGE_PAGE_KINDS, buildCourseSocialImageSvg } from '../../../../seo/socialImage';

export const prerender = true;

export function getStaticPaths() {
  return courseRegistry
    .filter((course) => course.status === 'live')
    .flatMap((course) => SOCIAL_IMAGE_PAGE_KINDS.map((kind) => ({
      params: {
        kind,
        slug: course.slug,
      },
    })));
}

export function GET({ params }) {
  const course = getCourseBySlug(params.slug);
  const detail = getCourseDetailBySlug(params.slug);
  const kind = SOCIAL_IMAGE_PAGE_KINDS.includes(params.kind) ? params.kind : 'course';

  if (!course) {
    return new Response('Not found', { status: 404 });
  }

  const svg = buildCourseSocialImageSvg({
    course,
    detail,
    locale: 'en',
    pageKind: kind,
  });

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
