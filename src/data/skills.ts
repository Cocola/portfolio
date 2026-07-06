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
    name: { 'fr': 'Design', 'en': 'Design' },
    blurb: {
      'fr': 'Comprendre, cadrer, concevoir — du besoin réel au système.',
      'en': 'Understand, frame, design — from real needs to systems.',
    },
    skills: [
      {
        label: { 'fr': 'User research', 'en': 'User research' },
        tags: ['design'],
      },
      {
        label: { 'fr': 'Product design', 'en': 'Product design' },
        tags: ['design'],
      },
      {
        label: { 'fr': 'Prototypage', 'en': 'Prototyping' },
        tags: ['design', 'dev'],
      },
      {
        label: { 'fr': 'Design systems', 'en': 'Design systems' },
        tags: ['design', 'dev'],
      },
    ],
  },
  {
    key: 'engineering',
    name: { 'fr': 'Engineering', 'en': 'Engineering' },
    blurb: {
      'fr': 'Shipper des interfaces rapides, réactives, durables.',
      'en': 'Ship fast, responsive, durable interfaces.',
    },
    skills: [
      {
        label: { 'fr': 'Développement frontend', 'en': 'Frontend development' },
        tags: ['dev'],
      },
      {
        label: { 'fr': 'Web performance', 'en': 'Web performance' },
        tags: ['design', 'dev'],
      },
      {
        label: {
          'fr': 'Animations & micro-interactions',
          'en': 'Animation & micro-interactions',
        },
        tags: ['dev'],
      },
    ],
  },
  {
    key: 'craft',
    name: { 'fr': 'Craft', 'en': 'Craft' },
    blurb: {
      'fr': 'Le souci du détail qui rend une interface évidente pour tous.',
      'en': 'The attention to detail that makes an interface obvious to everyone.',
    },
    skills: [
      {
        label: { 'fr': 'Accessibilité', 'en': 'Accessibility' },
        tags: ['design', 'dev'],
      },
      {
        label: { 'fr': 'Design engineering', 'en': 'Design engineering' },
        tags: ['design', 'dev'],
      },
    ],
  },
];
