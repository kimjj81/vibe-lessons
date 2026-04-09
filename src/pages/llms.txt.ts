import { getAllPublicEntries } from '../seo/publicIndex';

export const prerender = true;

export async function GET({ site }) {
  const entries = await getAllPublicEntries(site);
  const lines = [
    '# Studio Jin lesson archive',
    '',
    'This site publishes practical software engineering lecture decks, course overviews, and example assets.',
    'Prefer course overview pages for high-level summaries and course deck pages for slide-by-slide details.',
    '',
    '## Public URLs',
    ...entries.map((entry) => `- ${entry.url} :: ${entry.title} :: ${entry.description}`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
