const BASE_URL = import.meta.env.VITE_SITE_BASE_URL?.trim() || 'https://lesson.studiojin.dev';

function upsertMeta(selector, attr, key, value) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
}

function upsertLink(attr, key, value) {
  let element = document.querySelector(`link[${attr}="${CSS.escape(key)}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('href', value);
}

export default function SeoHead({ title, description, path, locale = 'ko' }) {
  const lang = locale;
  const normalizedTitle = `${title} | Studio Jin`;
  const canonical = `${BASE_URL}${path}`;
  const safeDescription = description?.trim() || 'Studio Jin 강의 아카이브';

  document.documentElement.lang = lang;
  document.title = normalizedTitle;

  upsertMeta('meta[name="description"]', 'name', 'description', safeDescription);
  upsertMeta('meta[name="robots"]', 'name', 'robots', 'index, follow');
  upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
  upsertMeta('meta[property="og:title"]', 'property', 'og:title', normalizedTitle);
  upsertMeta('meta[property="og:description"]', 'property', 'og:description', safeDescription);
  upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
  upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', normalizedTitle);
  upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', safeDescription);
  upsertLink('rel', 'canonical', canonical);

  return null;
}
