import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { DEFAULT_SITE_BASE_URL, normalizeBaseUrl } from './src/seo/siteUrl.js';
import { getLlmsUrl } from './src/seo/llmsText.js';

const site = normalizeBaseUrl(process.env.VITE_SITE_BASE_URL || DEFAULT_SITE_BASE_URL);
const SITEMAP_EXCLUDED_PATH_SUFFIXES = ['/404/', '/overview/'];

export default defineConfig({
  site,
  integrations: [
    react(),
    sitemap({
      filter: (page) => !SITEMAP_EXCLUDED_PATH_SUFFIXES.some((suffix) => page.endsWith(suffix)),
      customPages: [getLlmsUrl(site)],
    }),
  ],
});
