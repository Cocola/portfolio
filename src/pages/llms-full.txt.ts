import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { projects } from '../data/projects';
import { journey, testimonials } from '../data/about';

// Full concatenated content for LLM agents: every case study body (FR + EN),
// plus career and testimonials. Complements the lighter /llms.txt map.
const SITE = 'https://www.nicolas-fiascaro.com';

// Strip MDX noise (JSX comment blocks, imports, component tags) from a raw body
// so the dump reads as clean prose. Media components collapse to their caption /
// alt text, which is the only part meaningful to a text-only agent.
function toProse(body: string): string {
  const captionOf = (tag: string): string => {
    const m =
      tag.match(/caption=(?:"([^"]*)"|\{`([^`]*)`\})/) ??
      tag.match(/alt=(?:"([^"]*)"|\{`([^`]*)`\})/);
    return (m?.[1] ?? m?.[2] ?? '').trim();
  };
  return body
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/<(?:Video|Figure)\b[\s\S]*?\/>/g, (m) => {
      const cap = captionOf(m);
      return cap ? `[Média : ${cap}]` : '';
    })
    .split('\n')
    .filter((l) => !/^\s*import\s/.test(l))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export const GET: APIRoute = async () => {
  const studies = await getCollection('caseStudies');
  const out: string[] = [
    '# Nicolas Fiascaro — Design Engineer — Full content',
    '',
    '> Full text of every case study (French then English), career and testimonials. ' +
      'Design Engineer based in Biarritz, France. Site: ' +
      SITE,
    '',
  ];

  for (const p of projects) {
    out.push(`## ${p.title.fr}`, `${p.client} · ${p.year}`, '');
    for (const loc of ['fr', 'en'] as const) {
      const s = studies.find(
        (e) => e.data.project === p.id && e.data.locale === loc,
      );
      if (!s) continue;
      const url = `${SITE}${loc === 'fr' ? '' : '/en'}/projects/${p.slug[loc]}/`;
      out.push(
        `### ${loc === 'fr' ? 'Français' : 'English'} — ${url}`,
        '',
        s.data.lead,
        '',
        `Role: ${s.data.role} · ${s.data.period}`,
        s.data.stack.length ? `Stack: ${s.data.stack.join(', ')}` : '',
        '',
        toProse(s.body ?? ''),
        '',
      );
    }
  }

  out.push('## Career', '');
  for (const j of journey) {
    out.push(`- ${j.role.fr} — ${j.org} (${j.period}, ${j.place})`);
  }
  out.push('', '## Testimonials', '');
  for (const t of testimonials) {
    out.push(`- "${t.quote.en}" — ${t.author}, ${t.role.en}`);
  }
  out.push('');

  return new Response(out.filter((l) => l !== undefined).join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
