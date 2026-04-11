import { pickLocalized } from '../i18n/localize';

export const SOCIAL_IMAGE_WIDTH = 1200;
export const SOCIAL_IMAGE_HEIGHT = 630;
export const SOCIAL_IMAGE_PAGE_KINDS = ['course', 'guide'];
const DEFAULT_CATALOG_THEME = {
  '--grad-start': '#7c3aed',
  '--grad-mid': '#2563eb',
  '--grad-end': '#06b6d4',
  '--bg-dark': '#09090f',
  '--text-main': '#f8fafc',
  '--text-muted': '#94a3b8',
};

const PAGE_KIND_COPY = {
  course: {
    ko: '슬라이드 강의',
    en: 'Slide Deck',
  },
  guide: {
    ko: '상세강의자료',
    en: 'Lecture Guide',
  },
};

const META_LABEL_COPY = {
  difficulty: {
    ko: '난이도',
    en: 'Difficulty',
  },
};

function escapeXml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function clampText(value = '', maxLength = 160) {
  const trimmed = String(value || '').trim();
  if (trimmed.length <= maxLength) return trimmed;
  return `${trimmed.slice(0, maxLength - 1).trimEnd()}…`;
}

function wrapText(value, { maxLineLength = 24, maxLines = 3 } = {}) {
  const trimmed = clampText(value, maxLineLength * maxLines + 12);
  if (!trimmed) return [];

  const tokens = trimmed.split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';

  for (const token of tokens) {
    if (token.length > maxLineLength && !current) {
      lines.push(token.slice(0, maxLineLength));
      if (lines.length === maxLines) return lines;
      const remainder = token.slice(maxLineLength);
      if (remainder) {
        current = remainder;
      }
      continue;
    }

    const candidate = current ? `${current} ${token}` : token;
    if (candidate.length <= maxLineLength) {
      current = candidate;
      continue;
    }

    if (current) {
      lines.push(current);
      if (lines.length === maxLines) return lines;
      current = token;
      continue;
    }

    lines.push(token.slice(0, maxLineLength));
    if (lines.length === maxLines) return lines;
  }

  if (current && lines.length < maxLines) {
    lines.push(current);
  }

  if (lines.length === maxLines && tokens.join(' ').length > lines.join(' ').length) {
    lines[maxLines - 1] = clampText(lines[maxLines - 1], maxLineLength);
  }

  return lines;
}

function renderTextLines(lines, x, y, lineHeight, fontSize, fill, fontWeight = 700) {
  if (!lines.length) return '';

  const tspans = lines
    .map((line, index) => {
      const dy = index === 0 ? 0 : lineHeight;
      return `<tspan x="${x}" dy="${dy}">${escapeXml(line)}</tspan>`;
    })
    .join('');

  return `<text x="${x}" y="${y}" fill="${fill}" font-family="'Space Grotesk', Arial, sans-serif" font-size="${fontSize}" font-weight="${fontWeight}">${tspans}</text>`;
}

export function buildCourseSocialImageSvg({ course, detail, locale = 'ko', pageKind = 'course' }) {
  const title = pickLocalized(course.title, locale);
  const subtitle = pageKind === 'guide'
    ? pickLocalized(detail?.hero?.subtitle, locale) || pickLocalized(course.subtitle, locale)
    : pickLocalized(course.subtitle, locale);
  const summary = pickLocalized(detail?.hero?.summary, locale) || pickLocalized(course.description, locale);
  const difficulty = pickLocalized(detail?.difficulty, locale) || (locale === 'ko' ? '입문' : 'Beginner');
  const estimatedTime = pickLocalized(detail?.estimatedTime, locale) || (locale === 'ko' ? '약 1시간' : 'About 1 hour');
  const pageKindLabel = PAGE_KIND_COPY[pageKind]?.[locale] || PAGE_KIND_COPY.course[locale];
  const difficultyLabel = META_LABEL_COPY.difficulty[locale];

  const theme = course.theme || {};
  const gradStart = theme['--grad-start'] || '#7c3aed';
  const gradMid = theme['--grad-mid'] || '#2563eb';
  const gradEnd = theme['--grad-end'] || '#06b6d4';
  const bgDark = theme['--bg-dark'] || '#0a0a1a';
  const textMain = theme['--text-main'] || '#f8fafc';
  const textMuted = theme['--text-muted'] || '#94a3b8';

  const titleLines = wrapText(title, { maxLineLength: locale === 'ko' ? 18 : 22, maxLines: 3 });
  const subtitleLines = wrapText(subtitle, { maxLineLength: locale === 'ko' ? 26 : 34, maxLines: 2 });
  const summaryLines = wrapText(summary, { maxLineLength: locale === 'ko' ? 46 : 60, maxLines: 3 });
  const difficultyLines = wrapText(difficulty, { maxLineLength: locale === 'ko' ? 14 : 24, maxLines: 2 });
  const estimatedTimeY = 72 + (Math.max(difficultyLines.length, 1) - 1) * 28 + 30;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SOCIAL_IMAGE_WIDTH}" height="${SOCIAL_IMAGE_HEIGHT}" viewBox="0 0 ${SOCIAL_IMAGE_WIDTH} ${SOCIAL_IMAGE_HEIGHT}" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(title)} - ${escapeXml(pageKindLabel)}</title>
  <desc id="desc">${escapeXml(clampText(summary, 220))}</desc>
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${gradStart}" stop-opacity="0.18" />
      <stop offset="45%" stop-color="${bgDark}" />
      <stop offset="100%" stop-color="${gradEnd}" stop-opacity="0.28" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${gradStart}" />
      <stop offset="50%" stop-color="${gradMid}" />
      <stop offset="100%" stop-color="${gradEnd}" />
    </linearGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="44" />
    </filter>
  </defs>

  <rect width="${SOCIAL_IMAGE_WIDTH}" height="${SOCIAL_IMAGE_HEIGHT}" fill="${bgDark}" />
  <rect width="${SOCIAL_IMAGE_WIDTH}" height="${SOCIAL_IMAGE_HEIGHT}" fill="url(#bg)" />
  <circle cx="150" cy="120" r="128" fill="${gradStart}" fill-opacity="0.38" filter="url(#blur)" />
  <circle cx="1035" cy="118" r="142" fill="${gradEnd}" fill-opacity="0.28" filter="url(#blur)" />
  <circle cx="930" cy="520" r="176" fill="${gradMid}" fill-opacity="0.20" filter="url(#blur)" />

  <rect x="56" y="48" width="1088" height="534" rx="34" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
  <rect x="92" y="88" width="176" height="34" rx="17" fill="rgba(255,255,255,0.08)" />
  <text x="116" y="111" fill="${textMuted}" font-family="'Space Grotesk', Arial, sans-serif" font-size="18" font-weight="600" letter-spacing="1.4">STUDIO JIN</text>

  <rect x="92" y="146" width="188" height="42" rx="21" fill="rgba(15,23,42,0.62)" stroke="rgba(255,255,255,0.08)" />
  <text x="120" y="173" fill="${textMain}" font-family="'Space Grotesk', Arial, sans-serif" font-size="22" font-weight="600">${escapeXml(pageKindLabel)}</text>

  ${renderTextLines(titleLines, 92, 264, 72, 64, textMain, 700)}
  ${renderTextLines(subtitleLines, 92, 422, 42, 32, '#dbeafe', 500)}
  ${renderTextLines(summaryLines, 92, 512, 34, 24, textMuted, 500)}

  <g transform="translate(820 398)">
    <rect width="252" height="138" rx="24" fill="rgba(2,6,23,0.48)" stroke="rgba(255,255,255,0.10)" />
    <text x="28" y="42" fill="${textMuted}" font-family="'Space Grotesk', Arial, sans-serif" font-size="16" font-weight="600">${escapeXml(difficultyLabel)}</text>
    ${renderTextLines(difficultyLines, 28, 72, 28, 24, textMain, 700)}
    <text x="28" y="${estimatedTimeY}" fill="${textMuted}" font-family="'Space Grotesk', Arial, sans-serif" font-size="16" font-weight="500">${escapeXml(estimatedTime)}</text>
  </g>

  <g transform="translate(92 552)">
    <rect width="356" height="8" rx="4" fill="url(#accent)" />
  </g>
</svg>`;
}

export function buildCatalogSocialImageSvg({ locale = 'ko', courseCount = 0, featuredCourse }) {
  const title = locale === 'ko' ? 'Studio Jin 강의 아카이브' : 'Studio Jin Lecture Archive';
  const subtitle = locale === 'ko'
    ? 'Vibe Coding, 자동화, 실전 개발 강의'
    : 'Vibe coding, automation, and practical dev lectures';
  const summary = locale === 'ko'
    ? '슬라이드 강의, 상세강의자료, 예제 자산을 함께 제공하는 실전형 개발 강의 컬렉션입니다.'
    : 'A growing collection of practical development lectures with slide decks, guides, and reusable example assets.';
  const badge = locale === 'ko' ? '강의 카탈로그' : 'Course Catalog';
  const courseCountLabel = locale === 'ko'
    ? `공개 강의 ${courseCount}개`
    : `${courseCount} live courses`;
  const featuredLabel = locale === 'ko' ? '대표 강의' : 'Featured';
  const featuredTitle = featuredCourse ? pickLocalized(featuredCourse.title, locale) : (locale === 'ko' ? '실전 개발 강의' : 'Practical dev lectures');

  const theme = featuredCourse?.theme || DEFAULT_CATALOG_THEME;
  const gradStart = theme['--grad-start'] || DEFAULT_CATALOG_THEME['--grad-start'];
  const gradMid = theme['--grad-mid'] || DEFAULT_CATALOG_THEME['--grad-mid'];
  const gradEnd = theme['--grad-end'] || DEFAULT_CATALOG_THEME['--grad-end'];
  const bgDark = theme['--bg-dark'] || DEFAULT_CATALOG_THEME['--bg-dark'];
  const textMain = theme['--text-main'] || DEFAULT_CATALOG_THEME['--text-main'];
  const textMuted = theme['--text-muted'] || DEFAULT_CATALOG_THEME['--text-muted'];

  const titleLines = wrapText(title, { maxLineLength: locale === 'ko' ? 18 : 24, maxLines: 2 });
  const subtitleLines = wrapText(subtitle, { maxLineLength: locale === 'ko' ? 24 : 38, maxLines: 2 });
  const summaryLines = wrapText(summary, { maxLineLength: locale === 'ko' ? 44 : 58, maxLines: 3 });

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SOCIAL_IMAGE_WIDTH}" height="${SOCIAL_IMAGE_HEIGHT}" viewBox="0 0 ${SOCIAL_IMAGE_WIDTH} ${SOCIAL_IMAGE_HEIGHT}" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(title)}</title>
  <desc id="desc">${escapeXml(clampText(summary, 220))}</desc>
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${gradStart}" stop-opacity="0.22" />
      <stop offset="45%" stop-color="${bgDark}" />
      <stop offset="100%" stop-color="${gradEnd}" stop-opacity="0.30" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${gradStart}" />
      <stop offset="50%" stop-color="${gradMid}" />
      <stop offset="100%" stop-color="${gradEnd}" />
    </linearGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="46" />
    </filter>
  </defs>

  <rect width="${SOCIAL_IMAGE_WIDTH}" height="${SOCIAL_IMAGE_HEIGHT}" fill="${bgDark}" />
  <rect width="${SOCIAL_IMAGE_WIDTH}" height="${SOCIAL_IMAGE_HEIGHT}" fill="url(#bg)" />
  <circle cx="144" cy="116" r="128" fill="${gradStart}" fill-opacity="0.32" filter="url(#blur)" />
  <circle cx="1044" cy="132" r="152" fill="${gradEnd}" fill-opacity="0.26" filter="url(#blur)" />
  <circle cx="960" cy="522" r="186" fill="${gradMid}" fill-opacity="0.18" filter="url(#blur)" />

  <rect x="56" y="48" width="1088" height="534" rx="34" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
  <rect x="92" y="88" width="176" height="34" rx="17" fill="rgba(255,255,255,0.08)" />
  <text x="116" y="111" fill="${textMuted}" font-family="'Space Grotesk', Arial, sans-serif" font-size="18" font-weight="600" letter-spacing="1.4">STUDIO JIN</text>

  <rect x="92" y="146" width="188" height="42" rx="21" fill="rgba(15,23,42,0.62)" stroke="rgba(255,255,255,0.08)" />
  <text x="120" y="173" fill="${textMain}" font-family="'Space Grotesk', Arial, sans-serif" font-size="22" font-weight="600">${escapeXml(badge)}</text>

  ${renderTextLines(titleLines, 92, 264, 72, 64, textMain, 700)}
  ${renderTextLines(subtitleLines, 92, 388, 42, 32, '#dbeafe', 500)}
  ${renderTextLines(summaryLines, 92, 474, 34, 24, textMuted, 500)}

  <g transform="translate(796 376)">
    <rect width="276" height="156" rx="28" fill="rgba(2,6,23,0.52)" stroke="rgba(255,255,255,0.10)" />
    <text x="28" y="44" fill="${textMuted}" font-family="'Space Grotesk', Arial, sans-serif" font-size="16" font-weight="600">${escapeXml(courseCountLabel)}</text>
    <text x="28" y="84" fill="${textMain}" font-family="'Space Grotesk', Arial, sans-serif" font-size="18" font-weight="600">${escapeXml(featuredLabel)}</text>
    ${renderTextLines(wrapText(featuredTitle, { maxLineLength: locale === 'ko' ? 16 : 22, maxLines: 2 }), 28, 114, 28, 24, textMain, 700)}
  </g>

  <g transform="translate(92 552)">
    <rect width="356" height="8" rx="4" fill="url(#accent)" />
  </g>
</svg>`;
}
