const MANAGED_ATTRIBUTE = 'data-seo-managed';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildLocaleTag(locale) {
  if (locale === 'ko') return 'ko_KR';
  return 'en_US';
}

function buildManagedNodes(seo) {
  const descriptors = [
    { tag: 'meta', attrs: { name: 'description', content: seo.description } },
    { tag: 'meta', attrs: { name: 'robots', content: seo.robots ?? 'index, follow' } },
    { tag: 'meta', attrs: { property: 'og:type', content: seo.ogType ?? 'website' } },
    { tag: 'meta', attrs: { property: 'og:title', content: seo.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: seo.description } },
    { tag: 'meta', attrs: { property: 'og:url', content: seo.canonical } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: seo.siteName } },
    { tag: 'meta', attrs: { property: 'og:locale', content: buildLocaleTag(seo.locale) } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: seo.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: seo.description } },
    { tag: 'link', attrs: { rel: 'canonical', href: seo.canonical } },
  ];

  for (const alternate of seo.alternates ?? []) {
    descriptors.push({
      tag: 'link',
      attrs: {
        rel: 'alternate',
        hrefLang: alternate.hrefLang,
        href: alternate.href,
      },
    });
  }

  for (const schema of seo.jsonLd ?? []) {
    descriptors.push({
      tag: 'script',
      attrs: { type: 'application/ld+json' },
      content: JSON.stringify(schema),
    });
  }

  return descriptors;
}

function renderAttrs(attrs) {
  return Object.entries(attrs)
    .map(([key, value]) => ` ${key}="${escapeHtml(value)}"`)
    .join('');
}

function escapeScriptContent(value) {
  return String(value)
    .replaceAll('&', '\\u0026')
    .replaceAll('<', '\\u003c')
    .replaceAll('>', '\\u003e');
}

function renderDescriptor(descriptor) {
  const attrs = {
    ...descriptor.attrs,
    [MANAGED_ATTRIBUTE]: 'true',
  };

  if (descriptor.tag === 'script') {
    return `<script${renderAttrs(attrs)}>${escapeScriptContent(descriptor.content ?? '')}</script>`;
  }

  return `<${descriptor.tag}${renderAttrs(attrs)}>`;
}

export function createSeoPayload({
  title,
  description,
  locale,
  canonical,
  alternates = [],
  jsonLd = [],
  ogType = 'website',
  robots = 'index, follow',
  siteName = 'Studio Jin',
}) {
  return {
    title,
    description,
    locale,
    canonical,
    alternates,
    jsonLd,
    ogType,
    robots,
    siteName,
  };
}

export function renderSeoHead(seo) {
  const tags = buildManagedNodes(seo).map(renderDescriptor).join('\n    ');
  return `<title>${escapeHtml(seo.title)}</title>\n    ${tags}`;
}

export function applySeoToDocument(seo, doc = document) {
  if (!doc?.head) return;

  doc.title = seo.title;
  doc.documentElement.lang = seo.locale;
  doc.head.querySelectorAll(`[${MANAGED_ATTRIBUTE}="true"]`).forEach((node) => node.remove());

  for (const descriptor of buildManagedNodes(seo)) {
    const element = doc.createElement(descriptor.tag);
    element.setAttribute(MANAGED_ATTRIBUTE, 'true');

    for (const [key, value] of Object.entries(descriptor.attrs)) {
      element.setAttribute(key, value);
    }

    if (descriptor.tag === 'script') {
      element.textContent = descriptor.content ?? '';
    }

    doc.head.appendChild(element);
  }
}
