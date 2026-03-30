export const DEFAULT_SITE_BASE_URL = 'https://lesson.studiojin.dev';

export function normalizeBaseUrl(rawBaseUrl) {
  const candidate = rawBaseUrl?.trim() || DEFAULT_SITE_BASE_URL;
  return candidate.endsWith('/') ? candidate.slice(0, -1) : candidate;
}

export function buildCanonicalUrl(path = '/', rawBaseUrl = DEFAULT_SITE_BASE_URL) {
  const normalizedBaseUrl = normalizeBaseUrl(rawBaseUrl);
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalizedPath, `${normalizedBaseUrl}/`).toString();
}
