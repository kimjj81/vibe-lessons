import { buildSiteLlmsText } from '../seo/llmsText';

export const prerender = true;

export async function GET({ site }) {
  const body = await buildSiteLlmsText(site);
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
