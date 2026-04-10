import { getAllPublicEntries } from '../seo/publicIndex';

export const prerender = true;

export async function GET({ site }) {
  const entries = await getAllPublicEntries(site);
  const lines = [
    '# Studio Jin lesson archive',
    '',
    'This site publishes practical software engineering lecture decks, lecture guides, and example assets.',
    'Prefer lecture guide pages for structured course details and course deck pages for slide-by-slide material.',
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
