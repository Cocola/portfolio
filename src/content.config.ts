import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Long-form case studies (one MDX file per project per locale).
 * Index-level metadata (title, client, year, summary) stays in `data/projects.ts`;
 * this collection only holds the article body + a few article-specific fields.
 */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/case-studies' }),
  schema: z.object({
    /** Matches `Project.id` in data/projects.ts. */
    project: z.string(),
    locale: z.enum(['fr-fr', 'en-us']),
    /** One-line outcome shown under the title (TL;DR). */
    lead: z.string(),
    role: z.string(),
    period: z.string(),
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = { caseStudies };
