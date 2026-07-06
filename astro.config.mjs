// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nicolas-fiascaro.com',

  // French is the default locale, served prefix-free at the root (`/`);
  // English lives under `/en/`. Clean URLs, French-first for SEO.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [mdx(), sitemap()],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
