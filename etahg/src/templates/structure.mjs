// Site structure shared by every language. Language files only supply text and
// slugs; the page tree, navigation and language metadata live here.

// Page ids in canonical order (also the sitemap / llms order).
export const PAGES = [
  'home', 'services', 'aggregates', 'rental', 'mobilization', 'roads', 'drilling', 'parts',
  'fleet', 'experience', 'partners', 'about', 'faq', 'contact', 'profile', 'legal',
];

// Parent page id (drives breadcrumbs).
export const PARENT = {
  home: null,
  services: 'home',
  aggregates: 'services', rental: 'services', mobilization: 'services',
  roads: 'services', drilling: 'services', parts: 'services',
  fleet: 'home', experience: 'home', partners: 'home', about: 'home',
  faq: 'home', contact: 'home', profile: 'home', legal: 'home',
};

// Service pages (in dropdown order). Each gets a schema.org Service node.
export const SERVICE_PAGES = ['aggregates', 'rental', 'mobilization', 'roads', 'drilling', 'parts'];

// Primary navigation (header). 'services' renders as a dropdown of SERVICE_PAGES.
export const PRIMARY_NAV = ['services', 'fleet', 'experience', 'partners', 'about'];

// Footer columns: [column key in ui.footer, page ids]
export const FOOTER_COLUMNS = [
  ['servicesTitle', ['services', ...SERVICE_PAGES]],
  ['companyTitle', ['about', 'fleet', 'experience', 'partners', 'faq', 'contact', 'profile', 'legal']],
];

// Default per-language metadata; a language file may override any key in `meta`.
// `fonts`: self-hosted font files (src/assets/fonts) preloaded on that language's pages.
// Chinese pages use the visitor's system CJK fonts, so no CJK web font is loaded.
export const LANG_META = {
  en: { label: 'EN', name: 'English', englishName: 'English', hreflang: 'en', htmlLang: 'en', dir: 'ltr', ogLocale: 'en_US', fonts: [] },
  fr: { label: 'FR', name: 'Français', englishName: 'French', hreflang: 'fr', htmlLang: 'fr', dir: 'ltr', ogLocale: 'fr_FR', fonts: [] },
  ar: { label: 'عربي', name: 'العربية', englishName: 'Arabic', hreflang: 'ar', htmlLang: 'ar', dir: 'rtl', ogLocale: 'ar_DZ', fonts: ['plex-arabic-arabic-400.woff2', 'plex-arabic-arabic-700.woff2'] },
  zh: { label: '中文', name: '简体中文', englishName: 'Simplified Chinese', hreflang: 'zh-Hans', htmlLang: 'zh-Hans', dir: 'ltr', ogLocale: 'zh_CN', fonts: [] },
};

// Self-hosted font files preloaded on every page (variable fonts: one file covers all weights).
export const BASE_FONTS = ['archivo-latin.woff2', 'inter-latin.woff2'];

// Illustration name -> photo slot name used in site.config.json "photos".
export const PHOTO_SLOTS = {
  'hero-terrain': 'hero',
  crusher: 'crusher',
  excavator: 'excavator',
  bulldozer: 'bulldozer',
  'semi-truck': 'semi-truck',
  'dump-truck': 'dump-truck',
  paver: 'paver',
  'drill-rig': 'drilling',
  'spare-parts': 'parts',
  mobilization: 'mobilization',
  'terrain-coastal': 'terrain-coastal',
  'terrain-mountain': 'terrain-mountain',
  'terrain-plateau': 'terrain-plateau',
  'terrain-desert': 'terrain-desert',
};
