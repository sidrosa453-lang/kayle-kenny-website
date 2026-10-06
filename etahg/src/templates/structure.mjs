// Site structure shared by every language. Language files only supply text and
// slugs; the page tree, navigation and language metadata live here.

// Page ids in canonical order (also the sitemap / llms order). Article pages
// (content `articles`) are appended dynamically after 'insights' by build.mjs.
export const PAGES = [
  'home', 'services', 'aggregates', 'rental', 'mobilization', 'roads', 'drilling', 'parts',
  'fleet', 'experience', 'partners', 'about', 'locations', 'loc-djelfa', 'loc-ghardaia',
  'insights', 'faq', 'contact', 'profile', 'legal',
];

// Parent page id (drives breadcrumbs). Articles get 'insights' as parent.
export const PARENT = {
  home: null,
  services: 'home',
  aggregates: 'services', rental: 'services', mobilization: 'services',
  roads: 'services', drilling: 'services', parts: 'services',
  fleet: 'home', experience: 'home', partners: 'home', about: 'home',
  locations: 'home', 'loc-djelfa': 'locations', 'loc-ghardaia': 'locations',
  insights: 'home', faq: 'home', contact: 'home', profile: 'home', legal: 'home',
};

// Service pages (in dropdown order). Each gets a schema.org Service node.
export const SERVICE_PAGES = ['aggregates', 'rental', 'mobilization', 'roads', 'drilling', 'parts'];

// Location pages: page id -> location id in site.config.json "locations".
// Each gets a LocalBusiness node (parentOrganization = the company) and a hub card.
export const LOCATION_PAGES = { 'loc-djelfa': 'depot', 'loc-ghardaia': 'hq' };

// Hub pages whose children are generated from data (articles -> 'insights').
export const ARTICLE_HUB = 'insights';

// Primary navigation (header). 'services' renders as a dropdown of SERVICE_PAGES.
export const PRIMARY_NAV = ['services', 'fleet', 'experience', 'partners', 'insights', 'about'];

// Footer columns: [column key in ui.footer, page ids]
export const FOOTER_COLUMNS = [
  ['servicesTitle', ['services', ...SERVICE_PAGES]],
  ['companyTitle', ['about', 'fleet', 'experience', 'partners', 'locations', 'insights', 'faq', 'contact', 'profile', 'legal']],
];

// Default per-language metadata; a language file may override any key in `meta`.
// `fonts`: self-hosted font files (src/assets/fonts) PRELOADED on that language's pages:
// only the two faces the first paint needs (headline + body). Other faces load from CSS.
// `fontFamilies`: @font-face families included in that language's inline critical CSS.
// Chinese pages use the visitor's system CJK fonts, so no CJK web font is loaded.
// `dateLocale`: Intl locale for article dates.
export const LANG_META = {
  en: { label: 'EN', name: 'English', englishName: 'English', hreflang: 'en', htmlLang: 'en', dir: 'ltr', ogLocale: 'en_US', dateLocale: 'en-GB', fonts: ['archivo-latin.woff2', 'inter-latin.woff2'], fontFamilies: ['archivo', 'inter'] },
  fr: { label: 'FR', name: 'Français', englishName: 'French', hreflang: 'fr', htmlLang: 'fr', dir: 'ltr', ogLocale: 'fr_FR', dateLocale: 'fr-FR', fonts: ['archivo-latin.woff2', 'inter-latin.woff2'], fontFamilies: ['archivo', 'inter'] },
  ar: { label: 'عربي', name: 'العربية', englishName: 'Arabic', hreflang: 'ar', htmlLang: 'ar', dir: 'rtl', ogLocale: 'ar_DZ', dateLocale: 'ar-DZ', fonts: ['plex-arabic-arabic-400.woff2', 'plex-arabic-arabic-700.woff2'], fontFamilies: ['plex-arabic', 'archivo', 'inter'] },
  zh: { label: '中文', name: '简体中文', englishName: 'Simplified Chinese', hreflang: 'zh-Hans', htmlLang: 'zh-Hans', dir: 'ltr', ogLocale: 'zh_CN', dateLocale: 'zh-CN', fonts: ['archivo-latin.woff2', 'inter-latin.woff2'], fontFamilies: ['archivo', 'inter'] },
};

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
