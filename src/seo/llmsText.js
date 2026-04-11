import {
  getPublicExampleEntries,
  getPublishedCourseDetails,
  getPublishedCourses,
  getPublishedPageEntries,
} from './publicIndex';
import { buildCanonicalUrl, DEFAULT_SITE_BASE_URL, normalizeBaseUrl } from './siteUrl';

function escapeInline(text = '') {
  return String(text).replace(/\s+/g, ' ').trim();
}

function toLinkLine(entry) {
  const title = escapeInline(entry.title || entry.label || entry.path || entry.url);
  const description = escapeInline(entry.description || '');
  return description
    ? `- [${title}](${entry.url}): ${description}`
    : `- [${title}](${entry.url})`;
}

export function getLlmsUrl(site = DEFAULT_SITE_BASE_URL) {
  return buildCanonicalUrl('/llms.txt', normalizeBaseUrl(site));
}

export async function buildSiteLlmsText(site = DEFAULT_SITE_BASE_URL) {
  const baseUrl = normalizeBaseUrl(site);
  const catalogEntries = getPublishedPageEntries(baseUrl).filter((entry) => entry.type === 'catalog');
  const deckEntries = getPublishedPageEntries(baseUrl).filter((entry) => entry.type === 'course-deck');
  const guideEntries = getPublishedPageEntries(baseUrl).filter((entry) => entry.type === 'course-guide');
  const exampleEntries = await getPublicExampleEntries(baseUrl);
  const courses = getPublishedCourses();
  const courseDetails = getPublishedCourseDetails();

  const lines = [
    '# Studio Jin Lesson Archive',
    '',
    '> Practical software-engineering lecture website with bilingual course catalog pages, lecture guide pages, slide deck pages, and downloadable public example assets. Prefer guide pages for structured course context and deck pages for slide-by-slide teaching material.',
    '',
    'Important notes:',
    '- Default language is Korean. English equivalents exist under `/en/` for public catalog, course deck, and guide pages.',
    '- Course guide pages are the best first stop for AI agents because they summarize audience, prerequisites, structure, and linked practice assets.',
    '- Slide deck pages are presentation-oriented and may contain denser visual material than guide pages.',
    '- Public example assets under `/example/` are intended for learner reference and may include Markdown, JSON, JavaScript, and checklist files.',
    '- This site is a lecture archive and teaching resource, not a SaaS product or API platform.',
    '',
    `The site currently publishes ${courses.length} live courses and ${courseDetails.length} matching guide-page definitions.`,
    '',
    '## Main Pages',
    ...catalogEntries.map(toLinkLine),
    '',
    '## Course Guides',
    ...guideEntries.map(toLinkLine),
    '',
    '## Slide Decks',
    ...deckEntries.map(toLinkLine),
    '',
    '## Example Assets',
    ...exampleEntries.map(toLinkLine),
    '',
    '## Optional',
    `- [llms.txt](${getLlmsUrl(baseUrl)}): LLM-oriented summary of the public site structure and high-value URLs.`,
  ];

  return lines.join('\n') + '\n';
}
