// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nicolas-fiascaro.com',

  // Preserves the existing URL structure (/fr-fr, /en-us) for SEO continuity.
  // Only project slugs that change will be 301-redirected (see redirects).
  i18n: {
    defaultLocale: 'fr-fr',
    locales: ['fr-fr', 'en-us'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  integrations: [mdx(), sitemap()],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
