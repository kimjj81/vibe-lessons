import { DEFAULT_SITE_BASE_URL } from '../seo/siteUrl';

export const prerender = true;

export function GET({ site }) {
  const resolvedSite = site?.toString() || DEFAULT_SITE_BASE_URL;

  return new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      `Sitemap: ${new URL('/sitemap-index.xml', resolvedSite).toString()}`,
      '',
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}
