/* =====================================================================
   i18n — interface strings + helpers
   Language-only locales. French is the default and served at the root (`/`);
   English lives under `/en/`.
   ===================================================================== */

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

/** HTML language code (`lang` / `hreflang`) for each locale. */
export const htmlLang: Record<Locale, string> = {
  fr: 'fr',
  en: 'en',
};

/** Open Graph locale (language_TERRITORY). */
export const ogLocale: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_US',
};

export const ui = {
  fr: {
    'nav.work': 'Projets',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Aller au contenu',
    'hero.role': 'Design Engineer',
    'hero.tagline':
      'Je conçois et développe la couche produit, de la recherche au code en production.',
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
    'contact.location': 'Remote · Pays Basque',
    'footer.builtWith': 'Conçu et développé par mes soins, avec Astro.',
    'lang.switch': 'English',
  },
  en: {
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Skip to content',
    'hero.role': 'Design Engineer',
    'hero.tagline':
      'I design and build the product layer, from research to production code.',
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
    'contact.location': 'Remote · Basque Country',
    'footer.builtWith': 'Designed and developed by me, with Astro.',
    'lang.switch': 'Français',
  },
} as const;

export type UiKey = keyof (typeof ui)['fr'];

/** Returns a translation function for a given locale. */
export function useTranslations(locale: Locale) {
  return function t(key: UiKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}

/**
 * Build a site-absolute URL for a locale. The default locale is prefix-free
 * (served at the root); other locales are prefixed (`/en/...`).
 */
export function localizedPath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === '/' ? `/${locale}/` : `/${locale}${clean}`;
}

/** Extracts the locale from a pathname (`/en/...` -> en, otherwise the default). */
export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  return seg === 'en' ? 'en' : defaultLocale;
}

/** The path with the locale prefix stripped, always starting with `/`. */
export function stripLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === 'en') segments.shift();
  return segments.length ? `/${segments.join('/')}` : '/';
}

/** The opposite locale (for the language switcher). */
export function otherLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}
