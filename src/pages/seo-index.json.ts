import { getAllPublicEntries } from '../seo/publicIndex';

export const prerender = true;

export async function GET({ site }) {
  const entries = await getAllPublicEntries(site);
  const payload = {
    generatedAt: new Date().toISOString(),
    entries,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
