import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Long-form case studies (one MDX file per project per locale).
 * Index-level metadata (title, client, year, summary) stays in `data/projects.ts`;
 * this collection only holds the article body + a few article-specific fields.
 */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z.object({
      /** Matches `Project.id` in data/projects.ts. */
      project: z.string(),
      locale: z.enum(['fr', 'en']),
      /** One-line outcome shown under the title (TL;DR). */
      lead: z.string(),
      role: z.string(),
      period: z.string(),
      stack: z.array(z.string()).default([]),
      /** Optional cover image — the case study renders it only when set. */
      hero: image().optional(),
      heroAlt: z.string().optional(),
    }),
});

export const collections = { caseStudies };
