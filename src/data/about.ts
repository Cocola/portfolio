import type { Locale } from '../i18n/ui';

export interface JourneyEntry {
  org: string;
  role: Record<Locale, string>;
  period: string;
  place: string;
}

export const journey: JourneyEntry[] = [
  {
    org: 'Méthode Aristote',
    role: { 'fr-fr': 'Founding Design Engineer', 'en-us': 'Founding Design Engineer' },
    period: '2025 →',
    place: 'Biarritz',
  },
  {
    org: 'Lizee · PayShft',
    role: {
      'fr-fr': 'Product Designer & Frontend',
      'en-us': 'Product Designer & Frontend',
    },
    period: '2020 – 2025',
    place: 'Remote',
  },
  {
    org: 'BeAPI',
    role: {
      'fr-fr': 'Frontend Manager, directeur du pôle front',
      'en-us': 'Frontend Manager, head of front-end',
    },
    period: '2014 – 2020',
    place: 'Paris',
  },
  {
    org: 'BeAPI',
    role: { 'fr-fr': 'Web designer / développeur', 'en-us': 'Web designer / developer' },
    period: '2010 – 2014',
    place: 'Paris',
  },
];

export interface Testimonial {
  quote: Record<Locale, string>;
  author: string;
  role: Record<Locale, string>;
}

export const testimonials: Testimonial[] = [
  {
    quote: {
      'fr-fr':
        'J’ai eu la chance d’être formé par Nicolas durant mon premier CDI. Extrêmement exigeant et passionné, il sait transmettre sa passion du métier.',
      'en-us':
        'I had the chance to be trained by Nicolas during my first job. Extremely demanding and passionate, he knows how to pass on his love of the craft.',
    },
    author: 'Benjamin Bertout',
    role: { 'fr-fr': 'Développeur front-end', 'en-us': 'Front-end developer' },
  },
  {
    quote: {
      'fr-fr':
        'Pendant plus de trois ans chez BeAPI, travailler sous la supervision de Nicolas a été une expérience enrichissante : exigeant, mais toujours dans l’équité et le partage.',
      'en-us':
        'For over three years at BeAPI, working under Nicolas was a rewarding experience: demanding, but always fair and generous with his knowledge.',
    },
    author: 'Romain Lefort',
    role: { 'fr-fr': 'Lead Développeur Front-End', 'en-us': 'Lead Front-End Developer' },
  },
];
