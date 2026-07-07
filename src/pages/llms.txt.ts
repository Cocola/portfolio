import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { journey } from '../data/about';

// Machine-readable site map for LLM agents (https://llmstxt.org). English is the
// lingua franca for agents; the site itself is French-first (root) + English (/en/).
const SITE = 'https://www.nicolas-fiascaro.com';

export const GET: APIRoute = () => {
  const lines = [
    '# Nicolas Fiascaro — Design Engineer',
    '',
    '> Portfolio of Nicolas Fiascaro, a Design Engineer based in Biarritz, France. ' +
      'Fifteen years at the intersection of design and code: design systems, product UI, ' +
      'and frontend engineering. Currently Founding Design Engineer at Méthode Aristote.',
    '',
    `- Home (French, default): ${SITE}/`,
    `- Home (English): ${SITE}/en/`,
    '',
    '## Projects',
    ...projects.map(
      (p) =>
        `- [${p.title.en}](${SITE}/en/projects/${p.slug.en}/): ${p.client} · ${p.year} — ${p.summary.en}`,
    ),
    '',
    '## Career',
    ...journey.map((j) => `- ${j.role.en} — ${j.org} (${j.period}, ${j.place})`),
    '',
    '## Optional',
    `- [Full content (all case studies, FR + EN)](${SITE}/llms-full.txt)`,
    `- LinkedIn: https://www.linkedin.com/in/nicolas-fiascaro`,
    `- GitHub: https://github.com/Cocola`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
