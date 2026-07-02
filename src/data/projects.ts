import type { Locale } from '../i18n/ui';

export interface Project {
  /** Slugs per locale (preserve the existing ones for SEO / 301 redirects). */
  slug: Record<Locale, string>;
  title: Record<Locale, string>;
  client: string;
  year: string;
  summary: Record<Locale, string>;
  tags: ('design' | 'dev')[];
}

/** Temporary P1 source — migrated to MDX content collections in P2. */
export const projects: Project[] = [
  {
    slug: {
      'fr-fr': 'redesign-ui-et-design-system-pour-une-app-b2c-iosandroid',
      'en-us': 'redesign-ui-et-design-system-pour-une-app-b2c-iosandroid',
    },
    title: {
      'fr-fr': 'Redesign UI & design system pour une app B2C iOS/Android',
      'en-us': 'UI redesign & design system for a B2C iOS/Android app',
    },
    client: 'PennyPet',
    year: '2024',
    summary: {
      'fr-fr':
        'Refonte de l’univers visuel et design system Figma couvrant 190 écrans, refactor React Native.',
      'en-us':
        'Visual overhaul and Figma design system covering 190 screens, plus a React Native refactor.',
    },
    tags: ['design', 'dev'],
  },
  {
    slug: {
      'fr-fr': 'design-system-for-a-responsive-app',
      'en-us': 'design-system-for-a-responsive-app',
    },
    title: {
      'fr-fr': 'Design system pour une webapp responsive',
      'en-us': 'Design system for a responsive web app',
    },
    client: 'Lizee',
    year: '2021–2022',
    summary: {
      'fr-fr':
        'Refonte ergonomique V2 et design system pour garantir cohérence et maintenance des maquettes.',
      'en-us':
        'V2 UX overhaul and a design system to guarantee consistency and maintainability.',
    },
    tags: ['design', 'dev'],
  },
  {
    slug: {
      'fr-fr': 'refonte-saas-homepage',
      'en-us': 'rebuild-a-saas-homepage',
    },
    title: {
      'fr-fr': 'Reconstruire une page d’accueil selon les besoins utilisateurs',
      'en-us': 'Rebuilding a homepage around real user needs',
    },
    client: 'Lizee',
    year: '2023',
    summary: {
      'fr-fr':
        'Dashboard repensé, ateliers d’idéation (How might we, Crazy 8), wireframe au prototype HiFi.',
      'en-us':
        'Rethought dashboard, ideation workshops (How might we, Crazy 8), wireframe to HiFi prototype.',
    },
    tags: ['design'],
  },
  {
    slug: {
      'fr-fr': 'gestion-dun-budget-cafe-dans-un-coworking',
      'en-us': 'handle-coffee-budget-in-a-coworking',
    },
    title: {
      'fr-fr': 'Gestion d’un budget café dans un coworking',
      'en-us': 'Managing a coffee budget in a coworking space',
    },
    client: 'Projet perso',
    year: '2022',
    summary: {
      'fr-fr': 'PWA Vue/Nuxt, stockage local, sans compte. Suivi du budget café d’un coworking.',
      'en-us': 'A Vue/Nuxt PWA, local storage, no account — tracking a coworking’s coffee budget.',
    },
    tags: ['dev'],
  },
  {
    slug: { 'fr-fr': 'refonte-tableaux', 'en-us': 'table-redesign' },
    title: {
      'fr-fr': 'Débloquer de nouvelles fonctionnalités avec des tableaux',
      'en-us': 'Unlocking new features through data tables',
    },
    client: 'Lizee · RMS',
    year: '2023',
    summary: {
      'fr-fr':
        'Recherche utilisateurs, tests Maze (8,9/10), déploiement progressif de 10 tableaux repensés.',
      'en-us':
        'User research, Maze testing (8.9/10), progressive rollout of 10 redesigned tables.',
    },
    tags: ['design', 'dev'],
  },
  {
    slug: {
      'fr-fr': 'presenter-les-fonctionnalites-dans-un-prototype',
      'en-us': 'showcase-upcoming-features-in-a-prototype',
    },
    title: {
      'fr-fr': 'Présenter les fonctionnalités dans un prototype haute fidélité',
      'en-us': 'Showcasing upcoming features in a high-fidelity prototype',
    },
    client: 'Lizee · RMS',
    year: '2021',
    summary: {
      'fr-fr': 'Démo interactive HiFi pour présenter la vision produit à des investisseurs.',
      'en-us': 'Interactive HiFi demo to present the product vision to investors.',
    },
    tags: ['design'],
  },
];
