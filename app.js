(function () {
  'use strict';

  const DATA = window.PARTS_DATA;
  const parts = DATA.parts;
  const company = DATA.company;
  const config = DATA.config;

  /* ---------------- category translations (also searchable aliases) ---------------- */
  const CAT_I18N = {
    'Camshaft bushing': { fr: "Bague d'arbre à cames", ar: 'جلبة عمود الحدبات' },
    'Con rod bearing': { fr: 'Coussinet de bielle', ar: 'محمل البييلة' },
    'Crankshaft': { fr: 'Vilebrequin', ar: 'عمود المرفق' },
    'Cylinder head': { fr: 'Culasse', ar: 'رأس المحرك' },
    'Cylinder head gasket': { fr: 'Joint de culasse', ar: 'حشية رأس المحرك' },
    'Cylinder liner': { fr: 'Chemise de cylindre', ar: 'قميص الأسطوانة' },
    'Exhaust valve': { fr: "Soupape d'échappement", ar: 'صمام العادم' },
    'Exhaust valve guide': { fr: "Guide de soupape d'échappement", ar: 'دليل صمام العادم' },
    'Injector': { fr: 'Injecteur', ar: 'حاقن الوقود' },
    'Intake valve': { fr: "Soupape d'admission", ar: 'صمام السحب' },
    'Intake valve guide': { fr: "Guide de soupape d'admission", ar: 'دليل صمام السحب' },
    'Intake valve seat': { fr: "Siège de soupape d'admission", ar: 'مقعد صمام السحب' },
    'Lower gasket set': { fr: 'Pochette de joints inférieure', ar: 'طقم الحشيات السفلي' },
    'Main bearing': { fr: 'Coussinet de palier', ar: 'محمل رئيسي' },
    'Oil pan gasket': { fr: "Joint de carter d'huile", ar: 'حشية حوض الزيت' },
    'Oil pump': { fr: 'Pompe à huile', ar: 'مضخة الزيت' },
    'Oil seal ring': { fr: "Bague d'étanchéité d'huile", ar: 'حلقة مانع تسرب الزيت' },
    'Piston': { fr: 'Piston', ar: 'مكبس' },
    'Piston kit': { fr: 'Kit piston', ar: 'طقم مكبس' },
    'Piston pin': { fr: 'Axe de piston', ar: 'محور مكبس' },
    'Piston ring': { fr: 'Segments de piston', ar: 'حلقات مكبس' },
    'Seal ring': { fr: "Bague d'étanchéité", ar: 'حلقة إحكام' },
    'Snap ring': { fr: 'Circlips', ar: 'حلقة تثبيت' },
    'Upper gasket set': { fr: 'Pochette de joints supérieure', ar: 'طقم الحشيات العلوي' },
    'Valve seat': { fr: 'Siège de soupape', ar: 'مقعد الصمام' },
    'Water pump': { fr: 'Pompe à eau', ar: 'مضخة الماء' },
  };

  /* ---------------- i18n ---------------- */
  const I18N = {
    en: {
      'title': 'EURL Kayle Kenny — Engine Parts | Algiers',
      'meta.description': 'EURL Kayle Kenny — engine parts in stock in Algiers. Search your part reference to check availability, compatible references and price.',
      'aria.language': 'Language', 'aria.search': 'Search parts',
      'brand.tag': 'Engine parts · Algiers',
      'brand.disclaimer': 'Independent parts supplier — not affiliated with or endorsed by Cummins Inc. References are used for identification only.',
      'nav.search': 'Search', 'nav.contact': 'Contact',
      'hero.kicker': 'Diesel engine parts — Algiers',
      'hero.title': 'Find your part. Check it. Reserve it.',
      'hero.sub': 'Enter your part reference or part name — we instantly tell you if it is available, which references are interchangeable, and the price.',
      'search.placeholder': 'Part reference or name — e.g. 3917320, injector…',
      'search.button': 'Search', 'search.hint': 'Try:', 'search.hintName': 'injector',
      'results.title': 'Search results',
      'results.count': (n) => `${n} matching part${n === 1 ? '' : 's'}`,
      'results.none.title': 'Reference not in our stock',
      'results.none.body': 'We could not find this reference. It may still be compatible with a part we stock — check online below, or send it to us and we answer quickly.',
      'results.call': 'Call us', 'results.whatsapp': 'Ask on WhatsApp',
      'badge.in': 'In stock', 'badge.out': 'Out of stock',
      'match.partial': 'Partial reference match — verify with us',
      'match.interchangeable': 'Interchangeable references — same part',
      'price.onRequest': 'Price on request',
      'steps.1title': 'Search your reference',
      'steps.1body': 'Type the part number stamped on your part or listed in your engine manual.',
      'steps.2title': 'Check availability & price',
      'steps.2body': 'See instantly if it is in stock, which references are interchangeable, and the price.',
      'steps.3title': 'Call or WhatsApp us',
      'steps.3body': 'Reserve your part in one message — we confirm compatibility before you buy.',
      'detail.back': '← Back to search',
      'detail.eyebrow': 'Diesel engine part',
      'ext.arrow': '↗',
      'detail.interchangeableTitle': 'Interchangeable references',
      'detail.interchangeableBody': 'All the references below identify the same part. If your reference is one of them, this part fits.',
      'detail.variantsTitle': 'Other versions of this part',
      'detail.call': 'Call to reserve', 'detail.whatsapp': 'Reserve on WhatsApp',
      'detail.figureNote': 'Illustration for identification only — actual part appearance may differ.',
      'check.title': 'Not sure about compatibility?',
      'check.body': 'Cross-check your reference in public databases, or send it to us — we verify it before you buy.',
      'check.google': 'Search cross-references on Google',
      'check.manufacturer': 'Check on the manufacturer site',
      'check.whatsapp': 'Ask us on WhatsApp',
      'wa.msgPart': (name, ref) => `Hello, I would like to ask about: ${name} — ref ${ref}`,
      'wa.msgQuery': (q) => `Hello, do you have this part or a compatible one? Reference: ${q}`,
      'contact.title': 'Visit our shop',
      'contact.address': 'Address', 'contact.phone': 'Phone',
      'contact.directions': 'Get directions →',
      'contact.whatsappCta': 'Message us on WhatsApp',
      'contact.hours': 'Opening hours',
      'contact.hoursValue': 'Saturday – Thursday, 8:00 – 17:00',
      'about.title': 'About Kayle Kenny',
      'about.body': 'EURL Kayle Kenny imports and distributes diesel engine parts for trucks, machinery and industrial engines: crankshafts, cylinder heads, injectors, bearings, pistons, gasket sets, pumps and more.',
      'about.cta': "Can't find your reference? Contact us — we check compatibility and order the part for you.",
      'footer.disclaimer': 'Independent supplier. Not affiliated with or endorsed by Cummins Inc. All trademarks belong to their respective owners and are used for identification purposes only.',
      'footer.note': 'Prices are indicative and subject to confirmation.',
      'unit.pc': 'pc', 'unit.set': 'set', 'unit.kit': 'kit',
    },
    fr: {
      'title': 'EURL Kayle Kenny — Pièces moteur | Alger',
      'meta.description': 'EURL Kayle Kenny — pièces moteur en stock à Alger. Recherchez votre référence pour vérifier la disponibilité, les références compatibles et le prix.',
      'aria.language': 'Langue', 'aria.search': 'Rechercher des pièces',
      'brand.tag': 'Pièces moteur · Alger',
      'brand.disclaimer': "Fournisseur indépendant de pièces — non affilié à Cummins Inc. ni approuvé par elle. Les références sont utilisées uniquement à des fins d'identification.",
      'nav.search': 'Recherche', 'nav.contact': 'Contact',
      'hero.kicker': 'Pièces moteur diesel — Alger',
      'hero.title': 'Trouvez votre pièce. Vérifiez-la. Réservez-la.',
      'hero.sub': 'Saisissez votre référence ou le nom de la pièce — nous vous disons instantanément si elle est disponible, quelles références sont interchangeables, et son prix.',
      'search.placeholder': 'Référence ou nom de pièce — ex. 3917320, injecteur…',
      'search.button': 'Rechercher', 'search.hint': 'Essayez :', 'search.hintName': 'injecteur',
      'results.title': 'Résultats de recherche',
      'results.count': (n) => `${n} pièce${n === 1 ? '' : 's'} trouvée${n === 1 ? '' : 's'}`,
      'results.none.title': 'Référence non disponible dans notre stock',
      'results.none.body': "Nous n'avons pas trouvé cette référence. Elle peut néanmoins être compatible avec une pièce en stock — vérifiez en ligne ci-dessous, ou envoyez-la-nous et nous répondons rapidement.",
      'results.call': 'Appelez-nous', 'results.whatsapp': 'Demander sur WhatsApp',
      'badge.in': 'En stock', 'badge.out': 'Rupture de stock',
      'match.partial': 'Correspondance partielle — vérifiez auprès de nous',
      'match.interchangeable': 'Références interchangeables — même pièce',
      'price.onRequest': 'Prix sur demande',
      'steps.1title': 'Recherchez votre référence',
      'steps.1body': 'Saisissez le numéro gravé sur votre pièce ou indiqué dans le manuel du moteur.',
      'steps.2title': 'Vérifiez disponibilité et prix',
      'steps.2body': 'Voyez instantanément si elle est en stock, les références interchangeables et le prix.',
      'steps.3title': 'Appelez-nous ou écrivez-nous sur WhatsApp',
      'steps.3body': "Réservez votre pièce en un message — nous confirmons la compatibilité avant l'achat.",
      'detail.back': '← Retour à la recherche',
      'detail.eyebrow': 'Pièce moteur diesel',
      'ext.arrow': '↗',
      'detail.interchangeableTitle': 'Références interchangeables',
      'detail.interchangeableBody': 'Toutes les références ci-dessous désignent la même pièce. Si votre référence en fait partie, cette pièce convient.',
      'detail.variantsTitle': 'Autres versions de cette pièce',
      'detail.call': 'Appeler pour réserver', 'detail.whatsapp': 'Réserver sur WhatsApp',
      'detail.figureNote': "Illustration à titre indicatif — l'aspect réel de la pièce peut différer.",
      'check.title': 'Un doute sur la compatibilité ?',
      'check.body': 'Vérifiez votre référence dans les bases publiques, ou envoyez-la-nous — nous la vérifions avant votre achat.',
      'check.google': 'Rechercher les équivalences sur Google',
      'check.manufacturer': 'Vérifier sur le site du fabricant',
      'check.whatsapp': 'Demandez-nous sur WhatsApp',
      'wa.msgPart': (name, ref) => `Bonjour, je voudrais me renseigner sur : ${name} — réf ${ref}`,
      'wa.msgQuery': (q) => `Bonjour, avez-vous cette pièce ou une pièce compatible ? Référence : ${q}`,
      'contact.title': 'Visitez notre magasin',
      'contact.address': 'Adresse', 'contact.phone': 'Téléphone',
      'contact.directions': 'Itinéraire →',
      'contact.whatsappCta': 'Écrivez-nous sur WhatsApp',
      'contact.hours': "Heures d'ouverture",
      'contact.hoursValue': 'Samedi – Jeudi, 8 h – 17 h',
      'about.title': 'À propos de Kayle Kenny',
      'about.body': 'EURL Kayle Kenny importe et distribue des pièces de moteurs diesel pour camions, engins et moteurs industriels : vilebrequins, culasses, injecteurs, coussinets, pistons, pochettes de joints, pompes et plus encore.',
      'about.cta': 'Vous ne trouvez pas votre référence ? Contactez-nous — nous vérifions la compatibilité et commandons la pièce pour vous.',
      'footer.disclaimer': "Fournisseur indépendant. Non affilié à Cummins Inc. ni approuvé par elle. Toutes les marques appartiennent à leurs propriétaires respectifs et sont utilisées à des fins d'identification uniquement.",
      'footer.note': 'Les prix sont indicatifs et sous réserve de confirmation.',
      'unit.pc': 'pièce', 'unit.set': 'jeu', 'unit.kit': 'kit',
    },
    ar: {
      'title': 'EURL Kayle Kenny — قطع غيار المحركات | الجزائر العاصمة',
      'meta.description': 'EURL Kayle Kenny — قطع غيار محركات متوفرة في الجزائر العاصمة. ابحث بمرجع القطعة للتحقق من التوفر والمراجع المتوافقة والسعر.',
      'aria.language': 'اللغة', 'aria.search': 'البحث عن القطع',
      'brand.tag': 'قطع غيار المحركات · الجزائر العاصمة',
      'brand.disclaimer': 'مورّد مستقل لقطع الغيار — غير تابع لشركة Cummins وغير معتمد منها. تُستخدم المراجع لأغراض التعريف فقط.',
      'nav.search': 'بحث', 'nav.contact': 'اتصل بنا',
      'hero.kicker': 'قطع غيار محركات الديزل — الجزائر العاصمة',
      'hero.title': 'اعثر على قطعتك. تحقق منها. احجزها.',
      'hero.sub': 'أدخل مرجع القطعة أو اسمها — نخبرك فوراً إن كانت متوفرة، وما المراجع القابلة للتبديل، وسعرها.',
      'search.placeholder': 'مرجع القطعة أو اسمها — مثال: 3917320، حاقن…',
      'search.button': 'بحث', 'search.hint': 'جرّب:', 'search.hintName': 'حاقن',
      'results.title': 'نتائج البحث',
      'results.count': (n) =>
        n === 1 ? 'قطعة واحدة مطابقة'
        : n === 2 ? 'قطعتان مطابقتان'
        : n >= 3 && n <= 10 ? `${n} قطع مطابقة`
        : `${n} قطعة مطابقة`,
      'results.none.title': 'المرجع غير متوفر في مخزوننا',
      'results.none.body': 'لم نعثر على هذا المرجع. قد يكون متوافقاً مع قطعة لدينا — تحقق عبر الإنترنت أدناه أو أرسله إلينا وسنرد بسرعة.',
      'results.call': 'اتصل بنا', 'results.whatsapp': 'اسأل عبر واتساب',
      'badge.in': 'متوفر', 'badge.out': 'غير متوفر',
      'match.partial': 'تطابق جزئي للمرجع — تحقق معنا',
      'match.interchangeable': 'مراجع قابلة للتبديل — نفس القطعة',
      'price.onRequest': 'السعر عند الطلب',
      'steps.1title': 'ابحث عن مرجعك',
      'steps.1body': 'أدخل رقم القطعة المحفور عليها أو المذكور في دليل المحرك.',
      'steps.2title': 'تحقق من التوفر والسعر',
      'steps.2body': 'اعرف فوراً إن كانت متوفرة، والمراجع القابلة للتبديل، والسعر.',
      'steps.3title': 'اتصل بنا أو راسلنا على واتساب',
      'steps.3body': 'احجز قطعتك برسالة واحدة — نؤكد التوافق قبل الشراء.',
      'detail.back': '→ العودة إلى البحث',
      'detail.eyebrow': 'قطعة غيار محرك ديزل',
      'ext.arrow': '↖',
      'detail.interchangeableTitle': 'مراجع قابلة للتبديل',
      'detail.interchangeableBody': 'جميع المراجع أدناه تشير إلى نفس القطعة. إذا كان مرجعك من بينها، فهذه القطعة مناسبة.',
      'detail.variantsTitle': 'إصدارات أخرى من هذه القطعة',
      'detail.call': 'اتصل للحجز', 'detail.whatsapp': 'احجز عبر واتساب',
      'detail.figureNote': 'الرسم للتوضيح فقط — قد يختلف الشكل الفعلي للقطعة.',
      'check.title': 'لست متأكداً من التوافق؟',
      'check.body': 'تحقق من مرجعك في قواعد البيانات العامة، أو أرسله إلينا — نتحقق منه قبل الشراء.',
      'check.google': 'ابحث عن المراجع المتوافقة في Google',
      'check.manufacturer': 'تحقق من موقع الشركة المصنعة',
      'check.whatsapp': 'اسألنا عبر واتساب',
      'wa.msgPart': (name, ref) => `مرحباً، أود الاستفسار عن: ${name} — مرجع ${ref}`,
      'wa.msgQuery': (q) => `مرحباً، هل لديكم هذه القطعة أو قطعة متوافقة معها؟ المرجع: ${q}`,
      'contact.title': 'زوروا متجرنا',
      'contact.address': 'العنوان', 'contact.phone': 'الهاتف',
      'contact.directions': 'الاتجاهات ←',
      'contact.whatsappCta': 'راسلنا عبر واتساب',
      'contact.hours': 'ساعات العمل',
      'contact.hoursValue': 'السبت – الخميس، 8:00 – 17:00',
      'about.title': 'عن Kayle Kenny',
      'about.body': 'تستورد EURL Kayle Kenny وتوزع قطع غيار محركات الديزل للشاحنات والآليات والمحركات الصناعية: أعمدة مرفقية، رؤوس محركات، حاقنات، محامل، مكابس، أطقم حشيات، مضخات وغيرها.',
      'about.cta': 'لم تجد مرجعك؟ اتصل بنا — نتحقق من التوافق ونطلب القطعة لك.',
      'footer.disclaimer': 'مورّد مستقل. غير تابع لشركة Cummins وغير معتمد منها. جميع العلامات التجارية ملك لأصحابها وتُستخدم للتعريف فقط.',
      'footer.note': 'الأسعار إرشادية وتخضع للتأكيد.',
      'unit.pc': 'قطعة', 'unit.set': 'طقم', 'unit.kit': 'كيت',
    },
  };

  let lang = null;
  try { lang = localStorage.getItem('kk-lang'); } catch (e) { /* storage blocked */ }
  if (!I18N[lang]) lang = 'en';

  function t(key, ...args) {
    const entry = (I18N[lang] && I18N[lang][key]) !== undefined ? I18N[lang][key] : I18N.en[key];
    if (entry === undefined) return key;
    return typeof entry === 'function' ? entry(...args) : entry;
  }

  /* ---------------- helpers ---------------- */
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // Arabic-Indic (٠-٩) and extended (۰-۹) digits -> Latin, so pasted Arabic refs match
  const latinizeDigits = (s) =>
    String(s)
      .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
      .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06F0));
  const normalize = (s) => latinizeDigits(s).toUpperCase().replace(/[^A-Z0-9]/g, '');
  // Fold names for search: strip accents/harakat, unify hamza forms, collapse punctuation,
  // so "echappement", "pompe a eau", "راس المحرك", "water  pump" all match.
  const fold = (s) =>
    latinizeDigits(s)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f\u064B-\u065F\u0670\u0654\u0655]/g, '')
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .replace(/[^\p{L}\p{N}]+/gu, ' ')
      .trim()
      .replace(/\s+/g, ' ');
  const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const LOCALES = { en: 'en-US', fr: 'fr-DZ', ar: 'ar-DZ' };
  function fmtPrice(p) {
    if (p == null) return t('price.onRequest');
    const v = p * (config.priceMultiplier || 1);
    return new Intl.NumberFormat(LOCALES[lang] || 'en-US', {
      style: 'currency',
      currency: config.currency || 'USD',
      numberingSystem: 'latn',
      maximumFractionDigits: Number.isInteger(v) ? 0 : 2,
    }).format(v);
  }

  const unitLabel = (u) => {
    const key = 'unit.' + u;
    const v = t(key);
    return v === key ? u : v;
  };

  const localizedName = (p) => (lang === 'en' ? p.category : (CAT_I18N[p.category] && CAT_I18N[p.category][lang]) || p.category);

  const NOTE_I18N = { Grey: { fr: 'Gris', ar: 'رمادي' } };
  const localizedNote = (n) => (n && lang !== 'en' && NOTE_I18N[n] && NOTE_I18N[n][lang]) || n;

  const waLink = (msg) => `${company.whatsapp}?text=${encodeURIComponent(msg)}`;
  const googleCrossRef = (ref) => `https://www.google.com/search?q=${encodeURIComponent(`"${ref}" cross reference interchange`)}`;
  const manufacturerSearch = (ref) => `https://www.google.com/search?q=${encodeURIComponent(`"${ref}" site:cummins.com`)}`;

  // Precompute search keys
  parts.forEach((p) => {
    p._norm = p.numbers.map(normalize);
    const tr = CAT_I18N[p.category] || {};
    p._aliases = [...new Set([p.name, p.category, tr.fr, tr.ar].filter(Boolean).map(fold))];
    p._slug = slugify(p.category);
  });
  const byId = new Map(parts.map((p) => [p.id, p]));

  const numberIndex = new Map();
  parts.forEach((p) => {
    p._norm.forEach((n) => {
      if (!numberIndex.has(n)) numberIndex.set(n, []);
      numberIndex.get(n).push(p.id);
    });
  });

  function relatedParts(part) {
    const ids = new Set();
    part._norm.forEach((n) => (numberIndex.get(n) || []).forEach((id) => { if (id !== part.id) ids.add(id); }));
    return [...ids].map((id) => byId.get(id));
  }

  /* ---------------- search ---------------- */
  function searchParts(query) {
    const q = query.trim();
    if (q.length < 2) return null;
    const qFold = fold(q);
    // Tokens: the whole query plus pieces split on separators, so pasted pairs
    // like "3950661 / 4966244" and prefixed refs like "C3917320" both match.
    const tokens = new Set([normalize(q)]);
    q.split(/[\s\/,;+]+/).forEach((tk) => { const n = normalize(tk); if (n.length >= 3) tokens.add(n); });
    // A query of only punctuation/separators is not a real query.
    if (![...tokens].some((tn) => tn.length >= 3) && qFold.length < 2) return null;

    const scored = [];
    for (const p of parts) {
      let best = 0;
      const hitIdx = new Set();
      for (const tn of tokens) {
        if (tn.length < 3) continue;
        for (let i = 0; i < p._norm.length; i++) {
          const n = p._norm[i];
          let s = 0;
          if (n === tn) s = 100;
          else if (tn.length > n.length && n.length >= 5 && tn.includes(n)) s = 95;
          else if (n.startsWith(tn)) s = 80;
          else if (tn.length >= 4 && n.includes(tn)) s = 60;
          if (s > 0) { hitIdx.add(i); if (s > best) best = s; }
        }
      }
      // Name matching against folded aliases; word-boundary matches outrank
      // accidental mid-word hits ("ring" inside "bearing").
      if (qFold.length >= 2) {
        for (const a of p._aliases) {
          const idx = a.indexOf(qFold);
          if (idx === -1) continue;
          const atBoundary = idx === 0 || a[idx - 1] === ' ';
          const s = atBoundary ? 45 : 35;
          if (s > best) best = s;
        }
      }
      if (best > 0) scored.push({ part: p, score: best, hitIdx });
    }
    scored.sort(
      (a, b) =>
        b.score - a.score ||
        a.part.category.localeCompare(b.part.category) ||
        a.part.id - b.part.id
    );
    return scored;
  }

  /* ---------------- images ---------------- */
  // The category line drawing is the default (it always exists); if the owner
  // has dropped a real photo at images/<REF>.jpg it is swapped in once loaded.
  function partImg(p, cls) {
    const drawing = `drawings/${p._slug}.svg`;
    return `<img class="${cls}" src="${esc(drawing)}" alt="${esc(localizedName(p))}"
      data-photo="images/${esc(p._norm[0])}.jpg" data-fallback="drawings/generic.svg">`;
  }

  const photoProbes = new Map(); // photo URL -> Promise<boolean>, one request per session
  function wireImageFallbacks(rootEl) {
    rootEl.querySelectorAll('img[data-photo]').forEach((img) => {
      img.addEventListener('error', () => {
        if (img.dataset.fallback) {
          const fb = img.dataset.fallback;
          delete img.dataset.fallback;
          img.src = fb;
        }
      });
      const url = img.dataset.photo;
      let probe = photoProbes.get(url);
      if (!probe) {
        probe = new Promise((resolve) => {
          const im = new Image();
          im.onload = () => resolve(true);
          im.onerror = () => resolve(false);
          im.src = url;
        });
        photoProbes.set(url, probe);
      }
      probe.then((ok) => { if (ok && img.isConnected) img.src = url; });
    });
  }

  /* ---------------- results rendering ---------------- */
  function resultCard({ part, score, hitIdx }) {
    const refBadges = part.numbers
      .map((n, i) => `<span class="ref-badge${hitIdx.has(i) ? ' hit' : ''}">${esc(n)}</span>`)
      .join('');
    let tag = '';
    if (score >= 95 && part.numbers.length > 1) {
      tag = `<span class="match-tag">✓ ${esc(t('match.interchangeable'))}</span>`;
    } else if (score >= 60 && score < 95) {
      tag = `<span class="match-tag">${esc(t('match.partial'))}</span>`;
    }
    const note = part.note ? ` <span style="color:var(--muted);font-weight:400">(${esc(localizedNote(part.note))})</span>` : '';
    return `
      <a class="result-card" href="#p/${part.id}">
        <span class="result-thumb">${partImg(part, '')}</span>
        <span class="result-body">
          <span class="result-top">
            <span class="result-name">${esc(localizedName(part))}${note}</span>
            <span class="stock-pill ${part.inStock ? 'in' : 'out'}">${esc(t(part.inStock ? 'badge.in' : 'badge.out'))}</span>
          </span>
          <span class="result-refs">${refBadges}</span>
          <span class="result-foot">
            <span class="result-price">${esc(fmtPrice(part.price))} <small>/ ${esc(unitLabel(part.unit))}</small></span>
            ${tag}
          </span>
        </span>
      </a>`;
  }

  function checkOnlineBlock(ref) {
    return `
      <div class="check-online">
        <h4>${esc(t('check.title'))}</h4>
        <p>${esc(t('check.body'))}</p>
        <div class="check-links">
          <a href="${esc(googleCrossRef(ref))}" target="_blank" rel="noopener">${esc(t('check.google'))} ${esc(t('ext.arrow'))}</a>
          <a href="${esc(manufacturerSearch(ref))}" target="_blank" rel="noopener">${esc(t('check.manufacturer'))} ${esc(t('ext.arrow'))}</a>
          <a href="${esc(waLink(t('wa.msgQuery', ref)))}" target="_blank" rel="noopener">${esc(t('check.whatsapp'))}</a>
        </div>
      </div>`;
  }

  function runSearch(query, scroll) {
    const resultsEl = document.getElementById('results');
    const scored = searchParts(query || '');
    if (!scored) {
      resultsEl.hidden = true;
      resultsEl.innerHTML = '';
      return null;
    }
    let html = `<div class="results-head"><h2>${esc(t('results.title'))}</h2>`;
    if (scored.length) {
      html += `<span class="count-pill">${esc(t('results.count', scored.length))}</span></div>`;
      html += `<div class="result-grid">${scored.map(resultCard).join('')}</div>`;
    } else {
      const q = query.trim();
      html += '</div>';
      html += `
        <div class="no-result">
          <h3>${esc(t('results.none.title'))}</h3>
          <p>${esc(t('results.none.body'))}</p>
          <div class="cta-row">
            <a class="btn btn-red" href="tel:${esc(company.phoneRaw)}">${esc(t('results.call'))} <bdi dir="ltr">${esc(company.phone)}</bdi></a>
            <a class="btn btn-green" href="${esc(waLink(t('wa.msgQuery', q)))}" target="_blank" rel="noopener">${esc(t('results.whatsapp'))}</a>
          </div>
          ${checkOnlineBlock(q)}
        </div>`;
    }
    resultsEl.innerHTML = html;
    resultsEl.hidden = false;
    wireImageFallbacks(resultsEl);
    if (scroll) resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return scored;
  }

  /* ---------------- detail page ---------------- */
  function renderDetail(p) {
    const el = document.getElementById('detail-content');
    const primaryRef = p.numbers[0];
    const refBadges = p.numbers.map((n) => `<span class="ref-badge">${esc(n)}</span>`).join('');
    const note = p.note ? ` <span style="font-size:.55em;color:var(--muted)">(${esc(localizedNote(p.note))})</span>` : '';

    let interchangeable = '';
    if (p.numbers.length > 1) {
      interchangeable = `
        <div class="detail-block">
          <h4>${esc(t('detail.interchangeableTitle'))}</h4>
          <p>${esc(t('detail.interchangeableBody'))}</p>
          <p class="ref-inline" style="margin-top:6px;font-family:var(--font-mono);font-weight:600;color:var(--ink)">${esc(p.numbers.join('  ·  '))}</p>
        </div>`;
    }

    const rel = relatedParts(p);
    let variants = '';
    if (rel.length) {
      variants = `
        <div class="detail-block">
          <h4>${esc(t('detail.variantsTitle'))}</h4>
          <ul class="variant-list">
            ${rel
              .map(
                (r) => `<li><a href="#p/${r.id}">
                  <span>${esc(localizedName(r))} — <bdi dir="ltr">${esc(r.numbers.join(' / '))}</bdi> (${esc(unitLabel(r.unit))})</span>
                  <strong>${esc(fmtPrice(r.price))}</strong>
                </a></li>`
              )
              .join('')}
          </ul>
        </div>`;
    }

    el.innerHTML = `
      <a class="back-link" href="#home">${esc(t('detail.back'))}</a>
      <div class="detail-grid">
        <div>
          <div class="detail-figure">${partImg(p, '')}</div>
          <p class="figure-note">${esc(t('detail.figureNote'))}</p>
        </div>
        <div class="detail-info">
          <p class="detail-cat">${esc(t('detail.eyebrow'))}</p>
          <h1>${esc(localizedName(p))}${note}</h1>
          <div class="detail-refs">${refBadges}</div>
          <div class="detail-price-row">
            <span class="detail-price">${esc(fmtPrice(p.price))} <small>/ ${esc(unitLabel(p.unit))}</small></span>
            <span class="stock-pill ${p.inStock ? 'in' : 'out'}">${esc(t(p.inStock ? 'badge.in' : 'badge.out'))}</span>
          </div>
          <div class="cta-row">
            <a class="btn btn-red" href="tel:${esc(company.phoneRaw)}">${esc(t('detail.call'))}</a>
            <a class="btn btn-green" href="${esc(waLink(t('wa.msgPart', localizedName(p), primaryRef)))}" target="_blank" rel="noopener">${esc(t('detail.whatsapp'))}</a>
          </div>
          ${interchangeable}
          ${variants}
          ${checkOnlineBlock(primaryRef)}
          <p class="detail-disclaimer">${esc(t('brand.disclaimer'))}</p>
        </div>
      </div>`;
    wireImageFallbacks(el);
  }

  /* ---------------- routing ---------------- */
  const viewHome = document.getElementById('view-home');
  const viewDetail = document.getElementById('view-detail');

  let currentDetailId = null;
  function route() {
    const m = location.hash.match(/^#p\/(\d+)$/);
    const p = m ? byId.get(Number(m[1])) : null;
    if (p) {
      viewHome.hidden = true;
      viewDetail.hidden = false;
      renderDetail(p);
      document.title = `${localizedName(p)} ${p.numbers[0]} — ${company.name}`;
      // Re-rendering the same part (e.g. language switch) must not lose the scroll position.
      if (currentDetailId !== p.id) window.scrollTo({ top: 0 });
      currentDetailId = p.id;
    } else {
      currentDetailId = null;
      document.title = t('title');
      viewDetail.hidden = true;
      viewHome.hidden = false;
      if (location.hash === '#home') window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  window.addEventListener('hashchange', route);

  /* ---------------- language ---------------- */
  function renderHintChips() {
    const wrap = document.getElementById('hint-chips');
    const hints = ['3917320', '4966244', t('search.hintName')];
    wrap.innerHTML = hints
      .map((h) => ` <button type="button" class="hint-chip" data-q="${esc(h)}">${esc(h)}</button>`)
      .join('');
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t('title');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('meta.description'));
    document.getElementById('lang-switch').setAttribute('aria-label', t('aria.language'));
    const input = document.getElementById('search-input');
    input.setAttribute('aria-label', t('aria.search'));
    input.placeholder = t('search.placeholder');
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('.lang-switch button').forEach((b) => {
      b.classList.toggle('active', b.dataset.lang === lang);
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    renderHintChips();
    if (!viewDetail.hidden) route();
    if (input.value) runSearch(input.value, false);
  }

  /* ---------------- company info ---------------- */
  function renderCompany() {
    document.getElementById('company-address').textContent = company.address;
    const phone = document.getElementById('company-phone');
    phone.textContent = company.phone;
    phone.href = 'tel:' + company.phoneRaw;
    document.getElementById('company-whatsapp').href = company.whatsapp;
    document.getElementById('company-maps').href = company.mapsUrl;
    document.getElementById('company-registry').innerHTML =
      `NIF ${esc(company.nif)}<br>NIS ${esc(company.nis)}<br>RC ${esc(company.rc)}`;
    document.getElementById('footer-name').textContent =
      `© ${new Date().getFullYear()} ${company.name}`;
  }

  /* ---------------- wiring ---------------- */
  const input = document.getElementById('search-input');
  const form = document.getElementById('search-form');
  let debounceTimer;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearTimeout(debounceTimer);
    const scored = runSearch(input.value, true);
    // Auto-open only on an unambiguous exact reference match — a lone partial
    // match must stay on the results list where its caveat tag is visible.
    if (scored && scored.length === 1 && scored[0].score >= 95) location.hash = '#p/' + scored[0].part.id;
  });
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => runSearch(input.value, false), 220);
  });

  document.getElementById('hint-chips').addEventListener('click', (e) => {
    const chip = e.target.closest('.hint-chip');
    if (!chip) return;
    input.value = chip.dataset.q;
    runSearch(input.value, true);
  });

  document.querySelectorAll('.lang-switch button').forEach((b) => {
    b.addEventListener('click', () => {
      lang = b.dataset.lang;
      try { localStorage.setItem('kk-lang', lang); } catch (e) { /* storage blocked */ }
      applyLang();
    });
  });

  renderCompany();
  applyLang();
  route();
})();
