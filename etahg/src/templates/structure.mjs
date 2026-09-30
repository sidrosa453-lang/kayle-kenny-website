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
export const LANG_META = {
  en: { label: 'EN', name: 'English', hreflang: 'en', htmlLang: 'en', dir: 'ltr', ogLocale: 'en_US', fonts: [] },
  fr: { label: 'FR', name: 'Français', hreflang: 'fr', htmlLang: 'fr', dir: 'ltr', ogLocale: 'fr_FR', fonts: [] },
  ar: { label: 'عربي', name: 'العربية', hreflang: 'ar', htmlLang: 'ar', dir: 'rtl', ogLocale: 'ar_DZ', fonts: ['IBM+Plex+Sans+Arabic:wght@400;500;600;700'] },
  zh: { label: '中文', name: '简体中文', hreflang: 'zh-Hans', htmlLang: 'zh-Hans', dir: 'ltr', ogLocale: 'zh_CN', fonts: ['Noto+Sans+SC:wght@400;500;700'] },
};

// Fonts loaded on every page.
export const BASE_FONTS = ['Archivo:wdth,wght@62..125,500..800', 'Inter:wght@400;500;600'];

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
