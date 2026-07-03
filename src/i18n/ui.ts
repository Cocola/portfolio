/* =====================================================================
   i18n — interface strings + helpers
   Locales aligned with the existing ones (/fr-fr, /en-us) for SEO continuity.
   ===================================================================== */

export const locales = ['fr-fr', 'en-us'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr-fr';

/** HTML language code (`lang` / `hreflang`) for each locale. */
export const htmlLang: Record<Locale, string> = {
  'fr-fr': 'fr-FR',
  'en-us': 'en-US',
};

export const ui = {
  'fr-fr': {
    'nav.work': 'Projets',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Aller au contenu',
    'hero.role': 'Design Engineer',
    'hero.tagline':
      'Je conçois et développe la couche produit, du design system à l’interface.',
    'hero.viewWork': 'Voir les projets',
    'hero.contact': 'Me contacter',
    'hero.cv': 'Télécharger mon CV',
    'skills.title': 'Savoir-faire',
    'skills.design': 'Design',
    'skills.engineering': 'Engineering',
    'skills.craft': 'Craft',
    'work.title': 'Projets',
    'about.title': 'Parcours',
    'contact.title': 'Contact',
    'contact.lead': 'Founding Design Engineer @ Méthode Aristote',
    'contact.location': 'Biarritz · Pays Basque',
    'footer.builtWith': 'Conçu et développé par mes soins, avec Astro.',
    'lang.switch': 'English',
  },
  'en-us': {
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Skip to content',
    'hero.role': 'Design Engineer',
    'hero.tagline':
      'I design and build the product layer, from design system to interface.',
    'hero.viewWork': 'View work',
    'hero.contact': 'Get in touch',
    'hero.cv': 'Download my résumé',
    'skills.title': 'Skills',
    'skills.design': 'Design',
    'skills.engineering': 'Engineering',
    'skills.craft': 'Craft',
    'work.title': 'Work',
    'about.title': 'Journey',
    'contact.title': 'Contact',
    'contact.lead': 'Founding Design Engineer @ Méthode Aristote',
    'contact.location': 'Biarritz · Basque Country',
    'footer.builtWith': 'Designed and developed by me, with Astro.',
    'lang.switch': 'Français',
  },
} as const;

export type UiKey = keyof (typeof ui)['fr-fr'];

/** Returns a translation function for a given locale. */
export function useTranslations(locale: Locale) {
  return function t(key: UiKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}

/** Extracts the locale from a pathname (`/fr-fr/...`). */
export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  return (locales as readonly string[]).includes(seg)
    ? (seg as Locale)
    : defaultLocale;
}

/** The opposite locale (for the language switcher). */
export function otherLocale(locale: Locale): Locale {
  return locale === 'fr-fr' ? 'en-us' : 'fr-fr';
}
