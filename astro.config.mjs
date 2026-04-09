import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { DEFAULT_SITE_BASE_URL, normalizeBaseUrl } from './src/seo/siteUrl.js';

const site = normalizeBaseUrl(process.env.VITE_SITE_BASE_URL || DEFAULT_SITE_BASE_URL);

export default defineConfig({
  site,
  integrations: [react(), sitemap()],
});
