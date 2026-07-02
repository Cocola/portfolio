import type { Locale } from '../i18n/ui';

export type Tag = 'design' | 'dev';

export interface Skill {
  label: Record<Locale, string>;
  tags: Tag[];
}

export interface SkillFamily {
  key: 'design' | 'engineering' | 'craft';
  name: Record<Locale, string>;
  blurb: Record<Locale, string>;
  skills: Skill[];
}

export const skillFamilies: SkillFamily[] = [
  {
    key: 'design',
    name: { 'fr-fr': 'Design', 'en-us': 'Design' },
    blurb: {
      'fr-fr': 'Comprendre, cadrer, concevoir — du besoin réel au système.',
      'en-us': 'Understand, frame, design — from real needs to systems.',
    },
    skills: [
      {
        label: { 'fr-fr': 'User research', 'en-us': 'User research' },
        tags: ['design'],
      },
      {
        label: { 'fr-fr': 'Product design', 'en-us': 'Product design' },
        tags: ['design'],
      },
      {
        label: { 'fr-fr': 'Prototypage', 'en-us': 'Prototyping' },
        tags: ['design', 'dev'],
      },
      {
        label: { 'fr-fr': 'Design systems', 'en-us': 'Design systems' },
        tags: ['design', 'dev'],
      },
    ],
  },
  {
    key: 'engineering',
    name: { 'fr-fr': 'Engineering', 'en-us': 'Engineering' },
    blurb: {
      'fr-fr': 'Shipper des interfaces rapides, réactives, durables.',
      'en-us': 'Ship fast, responsive, durable interfaces.',
    },
    skills: [
      {
        label: { 'fr-fr': 'Développement frontend', 'en-us': 'Frontend development' },
        tags: ['dev'],
      },
      {
        label: { 'fr-fr': 'Web performance', 'en-us': 'Web performance' },
        tags: ['design', 'dev'],
      },
      {
        label: {
          'fr-fr': 'Animations & micro-interactions',
          'en-us': 'Animation & micro-interactions',
        },
        tags: ['dev'],
      },
    ],
  },
  {
    key: 'craft',
    name: { 'fr-fr': 'Craft', 'en-us': 'Craft' },
    blurb: {
      'fr-fr': 'Le souci du détail qui rend une interface évidente pour tous.',
      'en-us': 'The attention to detail that makes an interface obvious to everyone.',
    },
    skills: [
      {
        label: { 'fr-fr': 'Accessibilité', 'en-us': 'Accessibility' },
        tags: ['design', 'dev'],
      },
      {
        label: { 'fr-fr': 'Design engineering', 'en-us': 'Design engineering' },
        tags: ['design', 'dev'],
      },
    ],
  },
];
