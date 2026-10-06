/*
 * SARL ETAHG website — SIMPLIFIED CHINESE CONTENT (简体中文)
 * =========================================================
 * Mirror of src/content/en.mjs: same keys, page ids, block order and block types.
 * Schema documentation: see the header of en.mjs. Facts follow BRIEF.md only.
 * Slugs: the English slugs are kept for /zh/ pages.
 *
 * AUDIENCE: Chinese contractors and investors active in Algeria (EPC 总承包、路桥、
 * 水泥与矿业企业). Register: formal 公司简介 / 商务合作 style, no hype.
 *
 * ENTITY STATEMENT (Chinese, repeat word for word):
 *   "SARL ETAHG 是一家阿尔及利亚公司，专业从事细骨料（机制砂）生产、道路施工、重型设备租赁
 *    （短租与长租）、施工进场与开工准备以及水井钻探。"
 * "SARL ETAHG", "ETAHG" and "EURL KAYLE KENNY" stay in Latin capitals; never transliterate
 * and keep ETAHG in Latin capitals.
 *
 * TERMINOLOGY
 *   fine aggregate 细骨料 / crushed sand, manufactured sand 机制砂 / stone crushing plant
 *   石料破碎筛分站 / rental and leasing 设备租赁（短租／长租）; short-term 短期租赁, leasing
 *   长期租赁 (NOT 融资租赁 = bank crédit-bail) /
 *   mobilization, project initialization 施工进场与开工准备 (nav: 进场准备; 进场动员 only in
 *   the FIDIC sense of mobilizing equipment; never 进场准备 = project kick-off) / semi-trailer truck 半挂车
 *   (牵引车＋半挂车) / trucks 载重卡车 (EN says "trucks", not specifically dump trucks) /
 *   bulldozer 推土机 / excavator 挖掘机 / road paver 摊铺机 / water well drilling rig 水井钻机 /
 *   subcontracting 分包 / local partner 当地合作伙伴 / wilaya 省 (wilaya).
 * PLACE NAMES (site.config.json names.zh): 阿尔及利亚、阿尔及尔、杰勒法 (Djelfa)、
 *   盖尔达耶 (Ghardaïa)、艾因伊贝勒（Oued Sdeur）(Aïn El Ibel quarry)、阿尔及尔穆罕默迪亚 (Mohammadia).
 *   RN1 = 1 号国道 (RN1).
 * HEADINGS: headings break only at punctuation or at an explicit U+200B (CSS word-break: keep-all);
 *   add a U+200B break hint in long headings without punctuation.
 * TYPOGRAPHY: full-width Chinese punctuation (，。：；、（）“”); a space between Chinese and
 *   Latin words or numbers (e.g. "成立于 1997 年"); inline links keep ASCII [label](target).
 * WHATSAPP: prefilled messages are Chinese first, followed by an English line, so the message is
 *   readable even before the team's working languages are confirmed (site.config.json spokenLanguages).
 * META: titles <= 30 Chinese characters before " | SARL ETAHG"; descriptions 60-80 Chinese
 *   characters (Baidu / Google CJK snippet length).
 */

// Phone numbers with no-break spaces so they never wrap inside Chinese text.
const TEL = '+213\u00a0558\u00a096\u00a010\u00a049';
const TEL_CN = '00\u00a0213\u00a0558\u00a096\u00a010\u00a049';
const ENTITY = 'SARL ETAHG 是一家阿尔及利亚公司，专业从事细骨料（机制砂）生产、道路施工、重型设备租赁（短租与长租）、施工进场与开工准备以及水井钻探。';
const DISCLAIMER = 'EURL KAYLE KENNY 为独立配件供应商，与 Cummins Inc.（康明斯公司）无任何隶属关系，亦未获其认可或授权。';

export default {
  meta: {},

  ui: {
    skip: '跳至正文',
    menu: '菜单',
    close: '关闭菜单',
    servicesOverview: '全部服务',
    primaryNav: '主导航',
    footerNav: '页脚导航',
    languageLabel: '选择语言',
    contactCta: '联系我们',
    whatsappLabel: 'WhatsApp',
    whatsappAria: '通过 WhatsApp 联系 SARL ETAHG',
    emailAria: '发送电子邮件给 SARL ETAHG',
    // WhatsApp is blocked in mainland China: email first in the header and contact block.
    headerChannel: 'email',
    whatsappNote: '中国大陆无法使用 WhatsApp，请优先通过电子邮件联系。',
    subMenuLabel: '展开服务菜单',
    brandAria: 'SARL ETAHG 首页',
    phoneLabel: '电话',
    phonesLabel: '办公室／采石场电话',
    phonesShort: '电话',
    faxLabel: '传真',
    emailLabel: '电子邮箱',
    breadcrumbLabel: '当前位置',
    readMore: '了解详情',
    openExternal: '（在新标签页打开）',
    downloadProfile: '下载公司简介（PDF）',
    viewProfile: '查看公司简介',
    printProfile: '打印本简介',
    vcard: '保存联系人名片（vCard）',
    mapLink: '在 Google 地图中打开',
    illustrationPlaceholder: '示意图',
    whatsappMessage: '您好，SARL ETAHG。我通过贵公司网站中文页面（{{page}}）与您联系。\nHello SARL ETAHG, I am contacting you from the Chinese version of your website (page: {{page}}).',
    logoCaption: 'SARL ETAHG',
    homeLabel: '首页',
    faqMore: '查看全部问答',
    sectionPrefix: '',
    punct: { colon: '：', comma: '，', list: '；', enum: '、', open: '（', close: '）' },
    addressOrder: 'country-first',
    languageNames: { ar: '阿拉伯语', fr: '法语', en: '英语', zh: '中文' },

    footer: {
      tagline: ENTITY,
      servicesTitle: '服务',
      companyTitle: '公司',
      contactTitle: '联系方式',
      groupTitle: '集团',
      languagesTitle: '语言',
      groupText: '重型柴油发动机配件，库存位于阿尔及尔。',
      copyright: '© {{year}} {{company}} 版权所有。',
      privacyNote: '本网站不使用 Cookie，不做任何追踪。',
    },

    facts: {
      title: '公司概况',
      legalName: '公司法定名称',
      fullName: '公司全称',
      legalForm: '公司形式',
      legalFormValue: 'SARL，即依据阿尔及利亚法律设立的有限责任公司',
      country: '国家',
      countryValue: '阿尔及利亚',
      registeredOffice: '注册地',
      address: '地址',
      operations: '经营场所',
      activities: '业务范围',
      activitiesValue: '细骨料生产（石料破碎）、道路施工、重型设备租赁（短租与长租）、施工进场与开工准备、水井钻探',
      languages: '工作语言',
      languagesNote: '（网站另提供简体中文版）',
      group: '集团公司',
      groupValue: 'EURL KAYLE KENNY：重型设备配件，阿尔及尔',
      founded: '成立年份',
      rc: '商业注册号（RC）',
      nif: '税务识别号（NIF／MF）',
      nis: '统计识别号（NIS）',
      ai: '税务条目号（AI）',
      fleet: '设备',
      fleetValue: '液压挖掘机、推土机、轮式装载机、平地机、沥青摊铺机、振动压路机、载重卡车、自卸半挂车、沥青洒布车和沥青罐车、采石场凿岩钻车、车载水井钻机，以及采石场和石料破碎筛分站',
      capacity: '破碎产能',
      capacityUnit: '吨／小时',
      certifications: '资质认证',
      phone: '电话／WhatsApp',
      phones: '办公室／采石场电话',
      fax: '传真',
      email: '电子邮箱',
      website: '网站',
      hours: '工作时间',
      publisher: '网站发布方',
    },

    fleetLabels: {
      crushingPlants: '石料破碎筛分站',
      semiTrailerTrucks: '半挂车',
      dumpTrucks: '载重卡车',
      bulldozers: '推土机',
      excavators: '挖掘机',
      roadPavers: '摊铺机',
      drillingRigs: '水井钻机',
      units: '台',
      yearsLabel: '成立年份',
    },

    locations: {
      types: {
        hq: '注册地',
        depot: '设备基地',
        quarry: '采石场及石料破碎筛分站',
        parts: '配件门店及仓库',
      },
      details: {
        hq: 'SARL ETAHG 的注册所在地。布努拉位于盖尔达耶省，地处阿尔及利亚撒哈拉北部的姆扎布河谷。',
        depot: '重型设备的驻地，位于高原地区、1 号国道（RN1）沿线；RN1 是连接阿尔及尔与撒哈拉的南北主干道。',
        quarry: '公司自有采石场，开采岩石并破碎为细骨料，位于杰勒法以南的艾因伊贝勒附近。',
        parts: '集团旗下配件公司 EURL KAYLE KENNY，库存位于阿尔及尔。',
      },
      wilaya: '{{region}}省',
      detailsLink: '查看该场所',
      geoLabel: 'GPS',
      regionNames: { 'Ghardaïa': '盖尔达耶', Djelfa: '杰勒法', Algiers: '阿尔及尔' },
      map: {
        title: 'SARL ETAHG 各场所示意图：阿尔及尔—杰勒法—盖尔达耶轴线',
        sea: '地中海',
        tell: '泰勒阿特拉斯山脉',
        plateaus: '高原地区',
        saharanAtlas: '撒哈拉阿特拉斯山脉',
        sahara: '撒哈拉北部',
        axis: 'RN1',
        north: '北',
        caption: '示意图，未按比例绘制。',
      },
    },

    photoAlt: {
      hero: 'SARL ETAHG 重型设备在阿尔及利亚施工现场',
      crusher: 'SARL ETAHG 石料破碎筛分站生产细骨料',
      excavator: 'SARL ETAHG 挖掘机作业中',
      bulldozer: 'SARL ETAHG 推土机作业中',
      'semi-truck': 'SARL ETAHG 半挂车',
      'dump-truck': 'SARL ETAHG 载重卡车',
      paver: 'SARL ETAHG 摊铺机摊铺沥青',
      drilling: 'SARL ETAHG 水井钻机',
      parts: '阿尔及尔 EURL KAYLE KENNY 的重型设备配件',
      mobilization: 'SARL ETAHG 设备进场开辟新工地',
      'terrain-coastal': '阿尔及利亚沿海泰勒地区的道路施工',
      'terrain-mountain': '阿尔及利亚阿特拉斯山区的道路施工',
      'terrain-plateau': '阿尔及利亚高原地区的道路施工',
      'terrain-desert': '阿尔及利亚撒哈拉地区的道路施工',
    },

    records: {
      region: '地区',
      project: '项目',
      year: '年份',
      client: '业主',
      scope: '工作内容',
    },

    // 「洞察」文章：署名、目录、翻页（日期按语言格式化）。
    article: {
      by: '作者：',
      updated: '更新于',
      readingTime: '阅读约 {{min}} 分钟',
      toc: '本文目录',
      related: '相关服务',
      prev: '上一篇',
      next: '下一篇',
      all: '全部文章',
      navLabel: '其他文章',
    },

    notFound: {
      title: '页面未找到 | ETAHG',
      heading: '未找到该页面',
      text: '网址可能输入有误，或页面已移动。请通过以下链接继续浏览。',
      home: '返回首页',
    },

    og: {
      tagline: '骨料 · 道路 · 重型设备 · 阿尔及利亚',
      line: '细骨料生产、道路施工、设备租赁、施工进场与开工准备、水井钻探。',
    },
  },

  pages: {
    /* ------------------------------------------------------------------ HOME */
    home: {
      slug: '',
      nav: '首页',
      title: 'SARL ETAHG | 阿尔及利亚骨料供应、工程机械租赁与道路施工',
      description: 'SARL ETAHG 成立于 1997 年，是阿尔及利亚当地合作伙伴：自有采石场和破碎站供应机制砂，提供设备租赁、道路施工、进场准备及水井钻探。',
      summary: 'SARL ETAHG 概览：阿尔及利亚公司，专业从事细骨料生产、道路施工、设备租赁（短租／长租）、施工进场与开工准备以及水井钻探。',
      blocks: [
        {
          type: 'hero',
          size: 'home',
          eyebrow: '阿尔及利亚重型工程企业',
          title: 'SARL ETAHG：阿尔及利亚细骨料生产、重型设备与道路施工',
          lead: 'SARL ETAHG 是一家阿尔及利亚公司，专业从事细骨料（机制砂）生产、道路施工、重型设备租赁（短租与长租）、施工进场与开工准备以及水井钻探。公司成立于 1997 年；对国际承包商而言，我们是一家拥有自有设备、自采自产骨料、熟悉当地施工条件的当地合作伙伴。',
          points: [
            '自有采石场及石料破碎筛分站：生产细骨料，适合高产量需求',
            '自有道路施工设备：挖掘机、推土机、装载机、平地机、压路机、摊铺机、沥青设备及运输车辆',
            '设备基地位于 1 号国道（RN1）沿线的杰勒法，注册地盖尔达耶，配件在阿尔及尔',
          ],
          ctas: [
            { label: '合作洽谈', page: 'partners', variant: 'primary' },
            { label: '设备租赁', page: 'rental', variant: 'secondary' },
          ],
          illustration: 'hero-terrain',
        },
        {
          type: 'pillars',
          stats: true,
          items: [
            { title: '细骨料', text: '自有破碎站生产的机制细骨料，适合高产量需求。' },
            { title: '道路施工', text: '以自有设备完成土方、平整、压实、洒布沥青及沥青面层施工。' },
            { title: '设备租赁', text: '挖掘机、推土机、装载机、平地机、压路机、摊铺机及卡车，可短租或长租。' },
            { title: '进场准备', text: '开辟新工地：场地清理、施工便道、平台、土方及骨料供应。' },
            { title: '水井钻探', text: '自有钻机可为工地、农场、工业及居民用水钻凿水井。' },
          ],
        },
        {
          type: 'split',
          label: '公司',
          title: '连接阿尔及利亚南北的​重型工程合作伙伴',
          paragraphs: [
            '{{company}} 是一家成立于 1997 年的阿尔及利亚有限责任公司（SARL），注册地位于撒哈拉北部姆扎布河谷的**盖尔达耶省布努拉**。公司重型设备驻扎在高原地区的**杰勒法**，位于连接阿尔及尔与撒哈拉的南北主干道 1 号国道（RN1）沿线。自有采石场及石料破碎筛分站位于杰勒法以南的**艾因伊贝勒（Oued Sdeur）**；集团旗下配件公司 EURL KAYLE KENNY 位于阿尔及尔。',
            '公司的挖掘机、推土机、轮式装载机、平地机、压路机、沥青摊铺机、沥青洒布车、载重卡车和半挂车主要为修建道路而配置，ETAHG 已在阿尔及利亚许多地区完成道路项目。这些工程让我们的团队切实掌握了各地的地形地貌，以及在不同地形条件下保持设备高效运转的要领。如今，同一批设备、骨料产能和现场经验，以供货、租赁、长期租赁和分包等方式向业主及承包商开放。',
          ],
          ctas: [{ label: '关于我们', page: 'about', variant: 'secondary' }],
          illustration: 'semi-truck',
        },
        {
          type: 'cards',
          label: '服务',
          title: '业务范围',
          intro: '五项服务由自有生产线和设备完成，另有集团公司提供配件，同一项目的材料、设备和现场施工可由一家合作伙伴统一承担。',
          style: 'services',
          items: [
            { page: 'aggregates', illustration: 'crusher', title: '骨料生产', text: '杰勒法以南自有采石场和破碎站生产的高品质机制细骨料（机制砂），用于混凝土、沥青及路面结构层，尤其适合高产量需求的项目。' },
            { page: 'roads', illustration: 'paver', title: '道路施工', text: '公司起家业务：土方、平整、压实、基层、洒布沥青及沥青摊铺，全部以自有的整套道路施工设备完成。' },
            { page: 'rental', illustration: 'excavator', title: '设备租赁（短租／长租）', text: '挖掘机、推土机、装载机、平地机、压路机、摊铺机、卡车和半挂车，可按施工阶段或整个项目周期租用，条款按项目商定。' },
            { page: 'mobilization', illustration: 'mobilization', title: '施工进场与开工准备', text: '设备进场、场地清理、施工便道、平台、首批土方及骨料供应，为主体工程开工做好准备。' },
            { page: 'drilling', illustration: 'drill-rig', title: '水井钻探', text: '自有钻机可为施工工地、农业、工业及居民用水钻凿水井。' },
            { page: 'parts', illustration: 'spare-parts', title: '配件供应（EURL KAYLE KENNY）', text: '集团旗下公司从其位于阿尔及尔的门店和仓库供应重型柴油发动机配件。' },
          ],
        },
        {
          type: 'features',
          label: '国际合作',
          title: '为什么 ETAHG 是务实的当地合作伙伴',
          intro: '国际承包商、供应商或投资方在阿尔及利亚启动项目，需要一家已拥有设备、能生产材料并熟悉当地地质条件的本地企业。这正是 ETAHG 的核心优势。',
          items: [
            { title: '设备自有', text: '挖掘机、推土机、装载机、平地机、压路机、摊铺机、沥青设备、运输车辆和水井钻机均为自有设备，由我们自行管理，从杰勒法基地调遣。' },
            { title: '材料源头供应', text: '自有采石场为自有破碎站供料，岩石与细骨料由同一家公司掌控，项目从一开始即可锁定本地供应。' },
            { title: '区位居中', text: '立足杰勒法和盖尔达耶，地处阿尔及尔至撒哈拉的 RN1 轴线上，可同时服务北部和南部项目。' },
            { title: '熟悉地形', text: '在阿尔及利亚许多地区完成的道路项目，使我们对当地地质、材料和施工条件有切实了解。' },
            { title: '一家伙伴，多项工作', text: '骨料、设备、土方、道路和水井可纳入同一份协议，由一个联系人统一对接。' },
            { title: '集团内配件支持', text: '集团旗下阿尔及尔公司 EURL KAYLE KENNY 供应重型设备配件，有助于设备持续运转。' },
          ],
        },
        {
          type: 'steps',
          label: '进场动员',
          title: '新项目如何进场动员',
          intro: '开工阶段往往决定整个项目的工期。我们的进场准备遵循清晰的流程，并根据每个项目调整、与客户商定。',
          items: [
            { title: '工作范围与现场踏勘', text: '与您共同研究项目位置、进场道路、地形、工程量和工期，明确开工首日必须就绪的内容。' },
            { title: '设备与资源计划', text: '按工作范围选定设备、操作手和物资，并商定进场条款。' },
            { title: '运输进场', text: '重型设备由半挂车从杰勒法基地或其他工地直接运至现场。' },
            { title: '开辟工地', text: '场地清理、施工便道、平台及首批土方，为主体工程开工创造条件。' },
            { title: '材料与用水', text: '组织骨料供应；如工地无水源，可钻凿水井。' },
            { title: '生产与跟进', text: '设备按计划作业，集团提供配件支持，直至工地移交，或以租赁、分包方式继续施工。' },
          ],
        },
        {
          type: 'terrain',
          label: '地形',
          title: '熟悉阿尔及利亚各类地形',
          intro: '阿尔及利亚从地中海沿岸一直延伸至撒哈拉腹地，不同地貌决定了道路的修建方式、设备的使用方式以及水源的寻找方式。ETAHG 已在该国许多地区修建道路，熟悉这些地区的地形。',
          items: [
            { illustration: 'terrain-coastal', title: '沿海泰勒地区', text: '地中海沿岸的平原与丘陵，黏性土多、降雨较多、交通繁忙。排水和路基处理决定工程质量。', points: ['排水与土质处理', '不中断交通施工'] },
            { illustration: 'terrain-mountain', title: '阿特拉斯山区', text: '纵坡大、石方开挖多、弯道急。开挖、填筑和边坡施工需要大功率设备和熟练操作。', points: ['岩石路段挖填', '大型推土与开挖'] },
            { illustration: 'terrain-plateau', title: '高原地区', text: '开阔草原，线路长而平直，冬季寒冷、夏季炎热。施工效率和稳定的骨料供应决定进度。', points: ['长距离线性工程', '骨料需求量大'] },
            { illustration: 'terrain-desert', title: '撒哈拉', text: '风沙、高温、运距长。设备、人员和补给线必须按自给自足规划，水源本身就是一项工程。', points: ['沙地与沙丘条件', '水井钻探'] },
          ],
        },
        {
          type: 'locations',
          label: '场所',
          title: '经营布局',
          intro: '四处场所分布在阿尔及尔—杰勒法—盖尔达耶走廊上，连接地中海沿岸的北部与撒哈拉：设备与骨料生产位于高原地区，注册地位于撒哈拉北部，配件供应位于首都。',
        },
        {
          type: 'group',
          label: '集团',
          title: 'EURL KAYLE KENNY：集团内的配件公司',
          paragraphs: [
            'EURL KAYLE KENNY（EURL 即阿尔及利亚一人有限责任公司）隶属于 {{company}} 旗下。公司通过位于阿尔及尔穆罕默迪亚（Mohammadia）的门店和配件仓库，向车队和维修厂供应重型柴油发动机配件，包括 Cummins 兼容配件。',
            '对客户和合作伙伴而言，集团内的配件公司是重型发动机配件的本地货源。',
          ],
          disclaimer: DISCLAIMER,
          cta: { label: '访问 kaylekenny.com', href: 'https://www.kaylekenny.com' },
          illustration: 'bulldozer',
        },
        {
          type: 'facts',
          label: '简介',
          title: '公司概况',
        },
        {
          type: 'faq',
          label: '问答',
          title: '常见问题',
          from: 'faq',
          ids: ['what-is-etahg', 'what-does-etahg-do', 'where', 'foreign-companies', 'rental-terms'],
          more: { label: '查看全部问答', page: 'faq' },
        },
        {
          type: 'cta',
          title: '计划在阿尔及利亚​开展项目？',
          text: '请告知项目地点、工作内容和时间安排。我们将答复可提供的设备、材料及进场动员方案。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
            { label: '下载公司简介（PDF）', kind: 'pdf', variant: 'ghost' },
          ],
        },
      ],
    },

    /* -------------------------------------------------------------- SERVICES */
    services: {
      slug: 'services',
      nav: '服务',
      title: '阿尔及利亚重型工程与施工服务 | ETAHG',
      description: 'SARL ETAHG 在阿尔及利亚的服务：机制细骨料供应、道路施工、重型设备租赁（短租与长租）、项目进场动员及水井钻探，可单项委托或组合承包。',
      summary: 'SARL ETAHG 各项服务概览，以及如何在同一项目中组合使用。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '服务',
          title: '阿尔及利亚​土木工程合作伙伴：​五项服务及​集团配件支持',
          lead: '{{company}} 集材料生产、重型设备和道路施工经验于一身。各项服务既可单独委托，也可组合纳入同一份协议，从前期研究到工程结束由同一联系人对接。',
          illustration: 'dump-truck',
        },
        {
          type: 'cards',
          label: '概览',
          title: '我们的服务',
          style: 'services',
          items: [
            { page: 'aggregates', illustration: 'crusher', title: '骨料生产', text: '位于杰勒法以南艾因伊贝勒（Oued Sdeur）的自有采石场及破碎制砂设备，生产高品质细骨料，特别适合需要高产量的项目。' },
            { page: 'roads', illustration: 'paver', title: '道路施工', text: '公司起家业务：以自有设备在阿尔及利亚许多地区修建道路，从土方、级配碎石层到沥青面层。' },
            { page: 'rental', illustration: 'excavator', title: '设备租赁（短租／长租）', text: '修建道路的同一批设备，可按施工阶段或整个项目向其他承包商出租，条款按项目商定。' },
            { page: 'mobilization', illustration: 'mobilization', title: '施工进场与开工准备', text: '进场准备：我们派遣设备和操作手开辟新工地，修建便道和平台，为主体工程做好准备。' },
            { page: 'drilling', illustration: 'drill-rig', title: '水井钻探', text: '自有钻机可为施工工地、农业、工业及居民用水钻凿水井。' },
            { page: 'parts', illustration: 'spare-parts', title: '配件供应', text: '通过集团旗下 EURL KAYLE KENNY 供应重型柴油发动机配件，库存位于阿尔及尔。' },
          ],
        },
        {
          type: 'prose',
          label: '合作方式',
          title: '一家公司，多项工作',
          paragraphs: [
            '阿尔及利亚的大型项目依赖几项关键资源：稳定的骨料供应、适时到位的重型设备、规范开辟的工地，以及在干旱地区必不可少的水源。如果每项资源来自不同供应商，业主或总承包商就要花大量时间协调，每一个接口都可能影响工期。{{company}} 可以统一提供这些资源。',
            '新建基础设施项目的典型组合是：我们调遣设备进场并开辟工地，生产工程所需的细骨料，为主体工程提供卡车和土方设备，作为分包商承担土方或摊铺工作；如工地无水，再钻凿一口水井。重型发动机配件则由集团旗下的 EURL KAYLE KENNY 提供支持。',
            '每项合作都从沟通项目地点、工作范围、工程量和工期开始。租期、操作手、运输和维修保养等条款按项目商定，并写入合同。',
          ],
        },
        {
          type: 'table',
          label: '汇总',
          title: '服务一览',
          caption: 'SARL ETAHG 各项服务的内容及典型客户',
          head: ['服务', '工作内容', '主要设备', '典型客户'],
          rows: [
            ['[骨料生产](page:aggregates)', '将石料破碎、筛分为细骨料，并以卡车配送', '破碎与制砂设备、卡车', '混凝土及预制构件厂、沥青拌和站、道路承包商'],
            ['[道路施工](page:roads)', '土方、路基、底基层、基层及沥青面层', '挖掘机、推土机、平地机、压路机、沥青洒布车及罐车、摊铺机、卡车', '公共及私营业主、总承包商'],
            ['[设备租赁（短租／长租）](page:rental)', '按施工阶段或整个项目提供设备', '挖掘机、推土机、装载机、平地机、压路机、摊铺机、卡车、半挂车', '承包商、EPC 总承包企业、工业项目'],
            ['[施工进场与开工准备](page:mobilization)', '设备进场、场地清理、施工便道、平台、首批土方、供应体系搭建', '推土机、挖掘机、装载机、平地机、卡车、半挂车', '初入阿尔及利亚的国际承包商、业主'],
            ['[水井钻探](page:drilling)', '为工地、农场、工业及居民钻凿水井', '车载水井钻机', '施工工地、农业、工业、社区'],
            ['[配件供应](page:parts)', '重型柴油发动机配件（EURL KAYLE KENNY）', '阿尔及尔配件门店及仓库', '设备车队业主、维修厂'],
          ],
        },
        {
          type: 'features',
          label: '组合方案',
          title: '典型组合',
          intro: '以下为常见项目情形下的服务组合示例，具体范围均与客户共同确定。',
          items: [
            { title: '新建道路项目', text: '进场动员与土方、自有采石场供应骨料，再以自有设备平整、压实、洒布沥青和摊铺，按一个连续流程统筹安排。' },
            { title: '新建工业或能源项目', text: '开辟场地、修建进场道路和平台、钻凿施工用水井，并为主体工程租赁设备。' },
            { title: '承包商施工高峰', text: '租用额外的卡车、挖掘机、装载机、平地机或压路机，含运输进场及集团配件支持。' },
            { title: '混凝土或沥青生产', text: '按计划供应机制细骨料，由我们的卡车送至拌和站或工地。' },
          ],
        },
        {
          type: 'faq',
          label: '问答',
          title: '关于服务的常见问题',
          from: 'faq',
          ids: ['services-list', 'regions', 'subcontract'],
          more: { label: '查看全部问答', page: 'faq' },
        },
        {
          type: 'cta',
          title: '同一项目需要多项服务？',
          text: '请发送项目地点、工作范围和工期，我们将提出组合方案。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '国际合作', page: 'partners', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ AGGREGATES */
    aggregates: {
      slug: 'services/aggregate-production',
      nav: '骨料生产',
      title: '阿尔及利亚骨料供应：杰勒法机制砂生产 | ETAHG',
      description: 'SARL ETAHG 在杰勒法以南自营采石场和石料破碎筛分站，供应高品质细骨料（机制砂），用于混凝土、沥青和道路，适合高产量项目。',
      summary: 'SARL ETAHG 位于杰勒法以南艾因伊贝勒（Oued Sdeur）的自有采石场和石料破碎筛分站生产高品质机制细骨料，适合高产量需求。',
      service: { name: '细骨料生产与供应', serviceType: '机制细骨料（机制砂）生产' },
      whatsapp: '您好，SARL ETAHG。我想了解细骨料供应事宜（项目地点、用途、数量、供货时间）。\nHello SARL ETAHG, I would like information on fine aggregate supply (location, use, quantities, schedule).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '骨料生产',
          title: '为阿尔及利亚​大方量项目​供应机制细骨料',
          lead: '{{company}} 在其位于杰勒法以南艾因伊贝勒（Oued Sdeur）的自有采石场及石料破碎筛分站（Carrière Djellal El Gharbi），生产高品质机制细骨料（又称机制砂）。公司以自有钻凿和装载设备自行开采岩石，并在同一场地破碎，因此既掌控生产工艺，也掌控原材料。站内的破碎与制砂设备尤其适合需要高产量的项目，如道路工程、混凝土生产和大型基础设施工地。',
          ctas: [
            { label: '咨询骨料供应', kind: 'whatsapp', variant: 'primary' },
            { label: '联系我们', page: 'contact', variant: 'secondary' },
          ],
          illustration: 'crusher',
        },
        {
          type: 'split',
          label: '产品',
          title: '什么是细骨料，用于哪些工程',
          paragraphs: [
            '细骨料是粒状材料中砂粒粒径的部分，即能通过数毫米筛孔的颗粒：欧洲标准通常以 4 毫米为界，中国标准（GB/T 14684）以 4.75 毫米为界。在混凝土中，细骨料填充粗骨料之间的空隙并与水泥浆结合；在沥青混合料中，它使混合料形成密实、稳定的结构；在路面结构层中，它补全级配，使材料易于压实。',
            '机制细骨料是将开采的岩石分级多段破碎，再按粒径筛分而成。由于岩石来源明确、工艺受控，可按稳定级配、以大型项目所需的产量持续生产，而不必依赖供应不稳定的天然砂。',
          ],
          list: [
            '结构混凝土及商品混凝土',
            '砌块、路缘石、管材等混凝土预制构件',
            '沥青混合料及表面处治',
            '道路和场坪的级配碎石底基层与基层',
            '砂浆、抹灰及一般建筑工程',
          ],
          illustration: 'dump-truck',
        },
        {
          type: 'prose',
          label: '机制砂',
          title: '阿尔及利亚的​机制砂与天然砂',
          paragraphs: [
            '阿尔及利亚的天然砂主要来自河床（为保护水道，开采受到限制）或撒哈拉沙丘。沙丘砂储量丰富，但颗粒极细、浑圆且粒径单一。单独使用时，往往会增加混凝土需水量，并降低沥青混合料的稳定性。',
            '机制砂颗粒棱角分明，粒径范围更宽。工程师可单独使用，或与天然砂掺配，以达到设计规范要求的级配。对业主而言，拥有可靠的本地机制细骨料来源，可以降低混凝土或沥青生产因缺砂而停工的风险。',
          ],
        },
        {
          type: 'steps',
          label: '工艺',
          title: '高产量破碎筛分​生产线的工作原理',
          intro: '石料破碎筛分站是由输送带串联的一组设备。每一级破碎使石料变小，每一道筛分进行分级，直至产品达到要求粒径。以下各步骤介绍此类生产线的一般原理。',
          items: [
            { title: '给料', text: '石料装入料仓，通常经振动给料机均匀给料，同时在破碎前除去泥土和细碎杂物。' },
            { title: '粗碎', text: '粗碎设备（通常为颚式破碎机）将大块石料破碎成后续工序可处理的尺寸。' },
            { title: '中碎', text: '圆锥破碎机或反击式破碎机进一步破碎物料，并开始对颗粒整形。' },
            { title: '细碎与制砂', text: '进一步破碎和制砂，产出砂级颗粒，并使颗粒形状紧凑、近似立方体。' },
            { title: '筛分', text: '振动筛按粒径分级。超粒径物料闭路返回破碎机，多余的石粉可予去除，保证砂的洁净度。' },
            { title: '堆存与装车', text: '成品按规格分别堆放、防止污染，再装车配送。' },
          ],
        },
        {
          type: 'features',
          label: '质量',
          title: '细骨料的质量控制要点',
          intro: '细骨料的性能取决于几项可量化的指标。这些是采购方通常规定的参数；每次供货所需的检测项目与客户商定。',
          items: [
            { title: '级配', text: '颗粒粒径分布，通过筛分分析检测。连续、稳定的级配使混凝土和沥青配合比更易设计和复现。' },
            { title: '洁净度', text: '细粉的含量与性质，通常以砂当量试验和亚甲蓝试验评定。黏土质细粉会增加需水量，并削弱与胶结料的黏结。' },
            { title: '颗粒形状', text: '紧凑的立方体颗粒比片状或针状颗粒更易密实。粒形主要取决于破碎工序及其给料方式。' },
            { title: '稳定性', text: '每批交货的产品保持一致，这取决于各规格分仓堆存和生产过程中的检测。' },
            { title: '母岩', text: '岩石的硬度和耐久性，以洛杉矶磨耗试验和微型狄法尔磨耗试验（Micro-Deval）等在粗颗粒上检测，决定材料可用于道路的哪一层位。' },
            { title: '供货有据可查', text: '项目所需的检测项目及承担检测的实验室，在开始供货前与客户商定。' },
          ],
        },
        {
          type: 'pillars',
          label: '优势',
          title: '专为高产量而配置',
          stats: true,
          items: [
            { title: '满足大型项目产量', text: '破碎与制砂设备适合每日需要大量细骨料的项目。' },
            { title: '自有采石场', text: '岩石在自有采石场开采，并在同一场地送入破碎机，原材料始终在我们掌控之中。' },
            { title: '位于主干走廊', text: '采石场位于杰勒法以南的艾因伊贝勒（Oued Sdeur）附近，杰勒法地处 RN1 南北轴线上，材料可运往北部和南部工地。' },
            { title: '自有运输', text: '自有卡车和半挂车可直接送货到工地，生产与运输统一安排。' },
            { title: '供货与施工一体', text: '同一家公司可同时提供骨料、土方设备和摊铺施工，简化协调。' },
          ],
        },
        {
          type: 'prose',
          label: '就近供应',
          title: '为何大方量项目​需要就近生产',
          paragraphs: [
            '骨料属于重质散装材料。在大型项目中，运输费用可能占到场价的很大比例，每多运一公里，就要增加卡车、燃油以及对沿途道路的磨损。在使用地附近生产细骨料，可以降低到场成本和卡车流量，缩短供应链。',
            '供应保障与价格同样重要。混凝土或沥青拌和站一旦缺砂就会停产，后面的摊铺作业也随之停工。与拥有自有破碎站和运输车辆的生产商约定生产和供货计划，可以为整个项目降低这一风险。',
          ],
        },
        {
          type: 'prose',
          label: '询价',
          title: '骨料询价需提供的信息',
          lead: '询价信息越具体，答复越准确。请提供：',
          list: [
            '项目地点（省、最近城镇）及交货地点',
            '用途：混凝土、预制构件、沥青、路面结构层或其他',
            '所需规格及技术要求（如已确定）',
            '总需求量及预计日需求量或月需求量',
            '供货期及开始日期',
            '送货到工地或在破碎站自提',
          ],
          note: '规格、价格及供货计划将在针对每个项目的书面报价中确认。',
        },
        {
          type: 'links',
          label: '相关服务',
          title: '骨料供应与完整项目',
          intro: '骨料供应往往是更大工作范围的一部分。ETAHG 可将其与以下服务组合：',
          items: [
            { title: '道路施工', text: '以自有骨料和设备完成土方、级配碎石层及沥青面层。', page: 'roads' },
            { title: '施工进场与开工准备', text: '开辟新工地，并从一开始就组织骨料供应。', page: 'mobilization' },
            { title: '设备租赁', text: '为主体工程提供卡车和土方设备。', page: 'rental' },
            { title: '国际合作', text: '外国承包商如何通过 ETAHG 保障本地材料供应。', page: 'partners' },
          ],
        },
        {
          type: 'faq',
          label: '问答',
          title: '关于骨料供应的常见问题',
          items: [
            { id: 'agg-where', q: 'SARL ETAHG 的采石场和破碎站在哪里？', a: 'SARL ETAHG 的采石场及石料破碎筛分站（Carrière Djellal El Gharbi）位于杰勒法省艾因伊贝勒（Oued Sdeur），在杰勒法市以南。公司在自有采石场开采岩石并就地破碎。杰勒法地处 1 号国道（RN1）沿线，RN1 是连接阿尔及尔与撒哈拉的南北主干道。' },
            { id: 'agg-volume', q: 'ETAHG 能否大量供应细骨料？', a: '可以。SARL ETAHG 的破碎与制砂设备尤其适合需要高产量的项目。供应量、规格和供货计划按项目以书面报价商定。' },
            { id: 'agg-what', q: '什么是机制砂？', a: '机制砂是通过破碎岩石而非从河床或沙丘开采得到的细骨料，也是 SARL ETAHG 在杰勒法以南艾因伊贝勒（Oued Sdeur）自有采石场和破碎站生产的产品。其颗粒棱角分明、级配可控，可单独使用或与天然砂掺配，用于混凝土、沥青和路面结构层。' },
            { id: 'agg-uses', q: 'ETAHG 的细骨料能否用于混凝土和沥青？', a: 'SARL ETAHG 生产的高品质细骨料用于混凝土、预制构件、沥青混合料和路面结构层。是否适用于某一具体配合比，在开始供货前对照项目技术规范确认。' },
            { id: 'agg-fractions', q: 'ETAHG 生产哪些规格的骨料？', a: 'SARL ETAHG 专注于细骨料，即用于混凝土、沥青和路面结构层的砂级规格。项目可供应的具体规格在报价中确认。' },
            { id: 'agg-testing', q: '订货前可以检测骨料吗？', a: 'SARL ETAHG 在供货开始前与每位客户商定所需检测项目，如级配、砂当量和亚甲蓝值。项目资料明确后，可商议取样检测事宜。' },
            { id: 'agg-delivery', q: 'ETAHG 能否送货到工地？', a: '可以。SARL ETAHG 可用自有卡车和半挂车配送骨料。运输条件根据运距、供应量和提货计划与每位客户商定。' },
          ],
        },
        {
          type: 'cta',
          title: '锁定您的骨料供应',
          text: '请告知项目地点、用途、数量和供货期。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- RENTAL */
    rental: {
      slug: 'services/equipment-rental',
      nav: '设备租赁',
      title: '阿尔及利亚工程机械租赁：短租与长租 | ETAHG',
      description: '在阿尔及利亚向 SARL ETAHG 租用工程机械：挖掘机、推土机、装载机、平地机、压路机、摊铺机和卡车，可短租或长租，条款按项目商定。',
      summary: 'SARL ETAHG 在阿尔及利亚出租和长期租赁自有重型设备，从杰勒法调遣。',
      service: { name: '重型设备短期租赁与长期租赁', serviceType: '重型工程机械租赁' },
      whatsapp: '您好，SARL ETAHG。我们想租用重型设备（设备类型、项目地点、开始日期、租期）。\nHello SARL ETAHG, I would like to rent heavy equipment (machines, location, start date, duration).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '设备租赁（短租／长租）',
          title: '道路施工企业​自有重型设备，可短租或长期租赁',
          lead: '{{company}} 在阿尔及利亚向承包商和业主出租及长期租赁自有重型设备：液压挖掘机、推土机、轮式装载机、平地机、振动压路机、沥青摊铺机、沥青设备、载重卡车和半挂车。这些设备原为修建道路而配置，从位于 RN1 轴线上的杰勒法设备基地调遣。租期、操作手、运输和维修保养按项目商定。',
          ctas: [
            { label: '咨询设备', kind: 'whatsapp', variant: 'primary' },
            { label: '查看设备', page: 'fleet', variant: 'secondary' },
          ],
          illustration: 'excavator',
        },
        {
          type: 'equipment',
          label: '设备',
          title: '可供租赁的设备',
          intro: '设备可单台租用，也可按明确的工作内容成组提供，例如土方或摊铺作业。',
          items: [
            { illustration: 'semi-truck', title: '自卸半挂车', text: '牵引车配自卸半挂车，用于长距离散装运输骨料、填料和材料。', uses: ['散装运输', '长途运输', '材料供应'], count: 'semiTrailerTrucks' },
            { illustration: 'dump-truck', title: '载重卡车', text: '用于在工地内及工地之间运输骨料、填料和开挖土方，是土方和道路施工的主力车辆。', uses: ['土方运输', '骨料配送', '弃土外运'], count: 'dumpTrucks' },
            { illustration: 'bulldozer', title: '推土机', text: '用于清除植被和杂物、推运和摊铺填料、整平场坪和路堤，以及开辟便道。', uses: ['场地清理', '场坪与路堤', '施工便道'], count: 'bulldozers' },
            { illustration: 'excavator', title: '挖掘机', text: '用于大方量开挖、开槽、装车、修整边沟，以及在坚硬地层作业。', uses: ['开挖与开槽', '装车', '排水边沟'], count: 'excavators' },
            { illustration: 'bulldozer', title: '轮式装载机', text: '用于装车、在料堆和拌和站倒运骨料，以及工地材料搬运。', uses: ['装车', '料堆倒运', '场地清理'] },
            { illustration: 'bulldozer', title: '平地机', text: '用于按线形和断面摊铺、整平粒料层，形成横坡，并养护便道和施工道路。', uses: ['层面整平', '断面整形', '便道养护'] },
            { illustration: 'paver', title: '振动压路机', text: '用于压实路基、粒料层和沥青层，达到路面所需密实度。', uses: ['路基压实', '粒料层', '沥青压实'] },
            { illustration: 'dump-truck', title: '沥青洒布车及沥青罐车', text: '沥青洒布车用于透层、粘层和表面处治，由沥青罐车供料。', uses: ['透层与粘层', '表面处治', '沥青供应'] },
            { illustration: 'paver', title: '摊铺机', text: '按要求的宽度、厚度和标高，均匀摊铺沥青及其他路面材料。', uses: ['沥青摊铺', '道路修复', '场坪与堆场'], count: 'roadPavers' },
          ],
        },
        {
          type: 'prose',
          label: '短租与长租',
          title: '租赁与长期租赁的区别',
          paragraphs: [
            '**短期租赁**针对某一明确的施工阶段：几台设备用于应对施工高峰、替换维修中的设备，或完成清表、摊铺等单项工作。**长期租赁**在 ETAHG 的服务中是指较长期的安排，设备固定配属于某一项目，通常覆盖项目全过程。',
            '两者均由 ETAHG 作为设备所有人直接签约，不应与银行的融资租赁（crédit-bail）混淆。融资租赁是一种融资产品；ETAHG 的长期租赁不涉及融资，而是较长期地提供自有设备。',
          ],
        },
        {
          type: 'features',
          label: '条款',
          title: '条款按项目商定',
          intro: '每个工地情况不同，因此我们不公布固定的租赁条件。以下事项将逐项商定并写入合同。',
          items: [
            { title: '租期', text: '针对某一施工阶段的短期租赁，或覆盖项目全过程的长期租赁。' },
            { title: '操作手', text: '是否配备操作手，根据项目情况及客户自有团队商定。' },
            { title: '运输', text: '设备进场和退场，以及是否由我们的半挂车运输、条件如何。' },
            { title: '维修保养', text: '明确由谁负责保养和维修，集团公司可提供配件支持。' },
            { title: '燃油与耗材', text: '明确租赁期间燃油、润滑油和易损件由谁提供。' },
            { title: '现场条件', text: '工作时间、进场条件、安保、保险以及双方在现场的责任。' },
          ],
        },
        {
          type: 'steps',
          label: '流程',
          title: '租赁流程',
          items: [
            { title: '提出需求', text: '您发送设备类型、项目地点、开始日期、预计租期和工作内容。' },
            { title: '确认可用性并报价', text: '我们确认可提供的设备，并发送含条款的方案。' },
            { title: '签订合同', text: '租期、操作手、运输、维修保养及各方责任写入租赁或长期租赁协议。' },
            { title: '设备进场', text: '设备按合同约定运抵现场。' },
            { title: '施工与配件支持', text: '设备在您的项目上作业；重型发动机配件由阿尔及尔的 EURL KAYLE KENNY 提供支持。' },
            { title: '退还', text: '协议期满后，设备按约定退场。' },
          ],
        },
        {
          type: 'prose',
          label: '为何选择 ETAHG',
          title: '为何向施工企业​而非租赁公司​租用设备',
          paragraphs: [
            '我们的设备是为自有道路项目购置的，而非为租赁目录配置。设备规格适合阿尔及利亚的实际重型工程，由一家在自有项目上使用这些设备的公司管理。设备类别详见[自有设备](page:fleet)页面。',
            '对刚启动项目的外国承包商而言，在当地租用设备可以省去第一阶段进口设备的费用和等待时间，并为决定后续引进哪些设备留出时间。对阿尔及利亚企业而言，租赁可在不购置设备的情况下增加高峰期产能。无论哪种情况，条款均直接与设备所有人 {{company}} 商定。',
          ],
        },
        {
          type: 'prose',
          label: '询价',
          title: '租赁询价需提供的信息',
          list: [
            '设备类型及各类数量',
            '项目地点及进场条件',
            '开始日期及预计租期',
            '工作内容及工作时间',
            '是否需要操作手',
            '往返工地的运输要求',
          ],
          note: '每项询价的设备可用性均以书面形式确认。',
        },
        {
          type: 'links',
          label: '相关服务',
          title: '租赁与其他服务组合',
          intro: '租赁设备往往是更大工作范围的一部分。另请参阅：',
          items: [
            { title: '施工进场与开工准备', text: '我们将设备运至新工地，在主体工程开工前完成场地开辟。', page: 'mobilization' },
            { title: '道路施工', text: 'ETAHG 作为分包商承担土方、级配碎石层或摊铺工作。', page: 'roads' },
            { title: '自有设备', text: '从破碎站到钻机的全部设备类别。', page: 'fleet' },
            { title: '配件供应', text: '通过阿尔及尔的 EURL KAYLE KENNY 供应重型发动机配件。', page: 'parts' },
          ],
        },
        {
          type: 'faq',
          label: '问答',
          title: '关于设备租赁的常见问题',
          items: [
            { id: 'rent-what', q: 'ETAHG 是否在阿尔及利亚​出租重型设备？', a: '是的。SARL ETAHG 在阿尔及利亚出租和长期租赁自有重型设备：液压挖掘机、推土机、轮式装载机、平地机、振动压路机、沥青摊铺机、沥青设备、载重卡车和半挂车。设备从其杰勒法基地调遣，条款按项目商定。' },
            { id: 'rent-operators', q: '租赁是否包含操作手？', a: 'SARL ETAHG 按项目商定是否配备操作手，以及租期、运输和维修保养，并将这些条款写入合同。' },
            { id: 'rent-lease', q: 'ETAHG 是否提供设备长期租赁？', a: '是的。除按施工阶段租赁外，SARL ETAHG 也提供较长期的设备租赁，例如覆盖整个项目工期。这是与作为设备所有人的 ETAHG 直接签订的安排，而非银行融资租赁产品。' },
            { id: 'rent-where', q: 'ETAHG 的设备可在哪些地区使用？', a: 'SARL ETAHG 的设备驻扎在位于 RN1 南北轴线上的杰勒法设备基地，并曾在阿尔及利亚许多地区修建道路。某一具体地点的设备可用性，在您发送项目资料后确认。' },
            { id: 'rent-transport', q: 'ETAHG 能否将设备运至我方工地？', a: 'SARL ETAHG 拥有载重卡车和自卸半挂车。设备往返贵方工地的运输方式及具体条件，按项目商定。' },
            { id: 'rent-breakdown', q: '租用的设备出现故障怎么办？', a: '与 SARL ETAHG 合作时，维修保养责任在租赁开始前写入合同。其集团公司 EURL KAYLE KENNY 从阿尔及尔供应重型柴油发动机配件，为设备完好率提供支持。' },
          ],
        },
        {
          type: 'cta',
          title: '请告诉我们您的需求',
          text: '设备、地点、开始日期和租期，即可获得初步答复。',
          ctas: [
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'primary' },
            { label: '联系我们', page: 'contact', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- MOBILIZATION */
    mobilization: {
      slug: 'services/project-mobilization',
      nav: '进场准备',
      title: '阿尔及利亚施工进场与开工准备（设备动员） | ETAHG',
      description: 'SARL ETAHG 为阿尔及利亚新项目提供进场准备服务：设备进场动员、场地清理、施工便道、平台、土方、骨料供应及施工用水井，助力主体工程按期开工。',
      summary: 'SARL ETAHG 以自有重型设备在阿尔及利亚承担进场准备与工地开辟。',
      service: { name: '施工进场与开工准备', serviceType: '施工现场进场动员' },
      whatsapp: '您好，SARL ETAHG。我们正在筹备新项目，希望商谈进场动员事宜（项目地点、开工日期、工作范围）。\nHello SARL ETAHG, we are preparing a new project and would like to discuss site mobilization (location, start date, scope).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '施工进场与开工准备',
          title: '进场与开工准备：​以自有设备​开辟新工地',
          lead: '{{company}} 调遣重型设备，在阿尔及利亚启动新项目。我们将设备运至现场，清理并开辟场地，修建施工便道和平台，完成首批土方，组织骨料供应；如现场无水，还可钻凿水井，确保主体工程按期开工。',
          ctas: [
            { label: '洽谈您的项目', kind: 'whatsapp', variant: 'primary' },
            { label: '国际合作', page: 'partners', variant: 'secondary' },
          ],
          illustration: 'mobilization',
        },
        {
          type: 'split',
          label: '工作范围',
          title: '进场准备包括哪些内容',
          paragraphs: [
            '进场动员是从合同签订到全面施工之间的阶段。它时间短，却决定项目能否顺利起步：设备必须到位，现场必须可进入且安全，工程所依赖的材料和用水必须就绪。',
            '许多国际承包商将这些工作归入施工准备：场地平整、道路畅通、水源到位（相当于中国工程界所说“三通一平”中的通路、通水和场地平整）。{{company}} 可为业主或总承包商承担其中需要重型设备和钻机的部分，全部使用自有设备。',
          ],
          list: [
            '以半挂车将重型设备运至现场',
            '场地清理与整备',
            '施工便道及场内道路',
            '临建设施、营地、料场和拌和站平台',
            '首批土方：开挖、填筑、整平',
            '组织骨料供应',
            '现场无供水时钻凿水井',
          ],
          illustration: 'bulldozer',
          reverse: true,
        },
        {
          type: 'steps',
          label: '步骤',
          title: '清晰的进场动员流程',
          intro: '每次进场动员都针对具体工地规划，但流程始终一致。',
          items: [
            { title: '需求沟通与现场踏勘', text: '共同审查项目地点、进场路线、地质条件、工作范围、工期和限制条件，尽可能到现场踏勘。' },
            { title: '进场动员计划', text: '确定设备、操作手、运输、燃油、用水和材料，并商定条款。' },
            { title: '设备进场', text: '设备由半挂车从杰勒法基地或其他工地运至现场。' },
            { title: '开辟工地', text: '按商定的优先顺序完成场地清理、施工便道、平台和首批土方。' },
            { title: '供应到位', text: '安排骨料供货计划；如有需要，为施工和临建设施钻凿水井。' },
            { title: '移交或继续施工', text: '工地移交主体工程，或我们的设备以租赁或分包方式继续施工。' },
          ],
        },
        {
          type: 'features',
          label: '交付成果',
          title: '进场准备完成后，客户可获得哪些成果',
          items: [
            { title: '可通行的工地', text: '卡车、工地车辆和送货车辆均可通行的施工便道和场内道路。' },
            { title: '整备好的平台', text: '用于办公室、营地、车间、拌和站和料场的整平场地。' },
            { title: '土方已开工', text: '首批挖方和填方已完成，总承包商可在整备好的场地上开工。' },
            { title: '骨料供应已组织', text: '来自艾因伊贝勒（Oued Sdeur）自有采石场和破碎站的细骨料，按工程需要安排供货。' },
            { title: '现场有水', text: '在需要且获准的情况下钻凿水井，用于压实、混凝土、降尘及临建设施。' },
            { title: '设备可继续施工', text: '已在现场的设备可通过租赁或分包方式留用于主体工程。' },
          ],
        },
        {
          type: 'prose',
          label: '致外国承包商',
          title: '从海外启动​阿尔及利亚项目',
          paragraphs: [
            '在阿尔及利亚中标的国际承包商，头几个月往往面临相同的局面：自有设备仍在海运和清关途中，当地供应商尚未完成资格审核，而现场已经需要展现进度。拥有自有设备的当地合作伙伴可以在其余组织搭建期间先行开工，承包商自己的设备随后加入，不会拖延开工。',
            '我们立足杰勒法、地处阿尔及尔与撒哈拉之间的 RN1 沿线，并在阿尔及利亚许多地区积累了道路施工经验，能够制定切实可行的进场动员方案。对于偏远工地，方案涵盖现场自给所需的一切：燃油、用水、配件和物资运输。详情请见[国际合作](page:partners)页面。',
          ],
        },
        {
          type: 'prose',
          label: '计划',
          title: '制定进场动员方案​所需资料',
          list: [
            '工地位置，如有请附坐标或地图',
            '进场路线及重型运输的限制条件',
            '场地平面图、图纸或需整备区域的说明',
            '进场准备工作的范围及大致工程量',
            '要求的开工日期及主体工程开工日期',
            '骨料和用水需求，以及许可、安保等现场限制条件',
          ],
        },
        {
          type: 'links',
          label: '相关服务',
          title: '完善进场动员的配套服务',
          items: [
            { title: '设备租赁', text: '主体工程期间将我们的设备留在现场，条款按项目商定。', page: 'rental' },
            { title: '骨料生产', text: '来自艾因伊贝勒（Oued Sdeur）自有采石场和破碎站的机制细骨料。', page: 'aggregates' },
            { title: '水井钻探', text: '为施工和临建设施钻凿水井。', page: 'drilling' },
            { title: '道路施工', text: '由 ETAHG 修建的进场道路和永久道路。', page: 'roads' },
          ],
        },
        {
          type: 'faq',
          label: '问答',
          title: '关于进场动员的常见问题',
          items: [
            { id: 'mob-what', q: 'ETAHG 所说的施工进场与开工准备指什么？', a: '对 SARL ETAHG 而言，进场准备（即进场动员）是指将重型设备和操作手派往新地点，为主体工程整备现场：场地清理、施工便道、平台、首批土方、骨料供应，以及在需要时钻凿水井。' },
            { id: 'mob-who', q: 'ETAHG 的进场动员服务面向哪些客户？', a: 'SARL ETAHG 的进场动员服务面向在阿尔及利亚开辟新工地的业主和总承包商，包括自有设备尚未到场的国际承包商。' },
            { id: 'mob-after', q: '进场动员后 ETAHG 能否继续留在项目上？', a: '可以。开工准备阶段结束后，SARL ETAHG 的设备可按与客户的约定，以租赁或分包方式继续施工。' },
            { id: 'mob-remote', q: 'ETAHG 能否进驻偏远或沙漠工地？', a: '可以，但须先进行现场评估。SARL ETAHG 注册于撒哈拉北部的盖尔达耶省布努拉，设备驻扎在杰勒法；对于偏远工地，运输、燃油、用水和配件均纳入进场动员计划。' },
            { id: 'mob-time', q: 'ETAHG 多快能完成进场动员？', a: 'SARL ETAHG 在审查项目地点、进场条件和所需设备后，与每位客户商定进场动员时间表。由于时间取决于运距、设备可用性和现场条件，公司不报标准周期。' },
            { id: 'mob-water', q: '进场动员能否包括工地供水？', a: '可以。在工地无水源且获准钻井的情况下，SARL ETAHG 可将钻凿水井纳入进场动员，为土方、混凝土和临建设施提供用水。' },
          ],
        },
        {
          type: 'cta',
          title: '即将开辟新工地？',
          text: '请发送项目地点和计划开工日期，我们将提出进场动员方案。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ----------------------------------------------------------------- ROADS */
    roads: {
      slug: 'services/road-construction',
      nav: '道路施工',
      title: '阿尔及利亚道路施工与公路工程分包 | ETAHG',
      description: 'SARL ETAHG 以自有整套设备在阿尔及利亚承建道路：土方、平整、压实、洒布沥青及沥青摊铺，可承接总包或分包，在许多地区有施工经验。',
      summary: '道路施工是 SARL ETAHG 的起家业务，以自有设备和自产骨料完成。',
      service: { name: '道路施工', serviceType: '道路施工与土方工程' },
      whatsapp: '您好，SARL ETAHG。我们想商谈一个道路施工项目（项目地点、长度、工作范围）。\nHello SARL ETAHG, I would like to discuss a road construction project (location, length, scope).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '道路施工',
          title: '阿尔及利亚道路施工：从土方到沥青面层',
          lead: '道路施工是 {{company}} 的起家业务。公司的挖掘机、推土机、轮式装载机、平地机、振动压路机、沥青洒布车及罐车、沥青摊铺机和卡车主要为修建道路而配置，ETAHG 已在阿尔及利亚许多地区完成道路项目。公司既可承担完整的道路工程，也可作为分包商承担土方、路面结构层、摊铺及骨料供应。',
          ctas: [
            { label: '洽谈道路项目', kind: 'whatsapp', variant: 'primary' },
            { label: '工程经验', page: 'experience', variant: 'secondary' },
          ],
          illustration: 'paver',
        },
        {
          type: 'steps',
          label: '工法',
          title: '道路如何逐层修建',
          intro: '道路是一种层状结构。每一层将交通荷载传递给下一层，因此每一层都必须建在坚实的基础上，使用合适的材料并充分压实。',
          items: [
            { title: '清表与放样', text: '清除线路范围内的植被和杂物，按设计在地面放出道路位置。' },
            { title: '土方', text: '以推土机、挖掘机和卡车形成挖方和路堤，尽可能做到挖填平衡。' },
            { title: '路基处理', text: '以平地机对原地面整形，必要时进行处理，并以压路机压实以承托路面。' },
            { title: '底基层', text: '由机制碎石或合适的当地材料构成的粒料层，经平地机摊铺整平后压实，扩散荷载并排出结构内的水分。' },
            { title: '基层', text: '质量更高的碎石层（无结合料或经稳定处理），为路面提供承载能力。' },
            { title: '面层', text: '先由沥青洒布车洒布透层或粘层，再由摊铺机按线形和标高摊铺沥青，并以压路机压实；设计有要求时采用表面处治。' },
            { title: '排水与收尾', text: '边沟、涵洞、路肩及收尾工程，保护道路并延长其使用寿命。' },
          ],
        },
        {
          type: 'split',
          label: '一体化',
          title: '完整的沥青道路施工链集于一家公司',
          paragraphs: [
            '道路施工在粒料层和沥青中都要消耗大量骨料。{{company}} 在自有破碎站生产细骨料并拥有自有卡车，因此材料供应与施工进度可以统一安排。',
            '自有设备覆盖沥青道路的每一道工序：挖掘机、推土机和装载机完成土方；平地机整平各结构层；振动压路机压实；沥青洒布车在沥青罐车供料下洒布透层、粘层和表面处治；沥青摊铺机铺筑面层。平地机、压路机、沥青洒布和摊铺集于一家公司，构成完整的沥青道路施工链，各阶段由彼此配合默契的设备和班组完成，总承包商关键线路上的接口也随之减少。设备类别详见[自有设备](page:fleet)页面。',
          ],
          list: ['新建道路及进场道路', '既有道路拓宽与改造', '通往工业、矿业及能源场地的进场道路', '场坪、堆场及场内道路'],
          illustration: 'dump-truck',
        },
        {
          type: 'prose',
          label: '地形',
          title: '因地制宜修建道路',
          paragraphs: [
            '在沿海泰勒地区，黏性土和冬季降雨使排水与路基处理成为首要任务，施工往往需在不中断交通的情况下进行。在阿特拉斯山区，石方开挖、路堤和边坡稳定需要大型推土和开挖作业。在高原地区，长而平直的线路讲求施工效率和稳定的骨料供应，冬冷夏热要求周密的季节性安排；在盐沼（chott）周边，松软含盐的土层需要特别处理。',
            '在撒哈拉，风沙、高温和运距左右着每一项决策：必须防止流沙侵入线路，沥青必须耐受高路表温度，钙质土（tuf calcaire）等当地材料在路面结构层中广泛使用。人员和物资必须按自给自足规划。ETAHG 已在阿尔及利亚许多地区修建道路，熟悉这些地区的地形；详见[道路施工经验](page:experience)。',
          ],
        },
        {
          type: 'features',
          label: '分包',
          title: '可为总承包商承担的工作',
          intro: '在大型道路项目中，ETAHG 可在总承包商（包括国际承包商）之下承担明确划分的部分工程。',
          items: [
            { title: '土方', text: '以自有推土机、挖掘机、装载机、平地机、压路机和卡车完成清表、挖方、路堤和路基处理。' },
            { title: '粒料层', text: '底基层和基层，由 ETAHG 组织骨料供应和运输。' },
            { title: '洒布沥青与摊铺', text: '以自有沥青洒布车和罐车洒布透层、粘层，再以自有摊铺机和压路机摊铺压实，与沥青供应协调配合。' },
            { title: '骨料供应', text: '来自艾因伊贝勒（Oued Sdeur）自有采石场和破碎站的机制细骨料，送至工地或沥青、混凝土拌和站。' },
            { title: '运输', text: '以卡车和自卸半挂车沿线运输材料。' },
            { title: '便道与保通道路', text: '修建临时便道和改道路线，保障主体工程和当地交通通行。' },
          ],
        },
        {
          type: 'prose',
          label: '询价',
          title: '道路项目需提供的信息',
          list: [
            '项目地点、起止点及大致长度',
            '项目阶段：投标、已中标或在建',
            '委托的工作范围及贵方角色（业主、总承包商）',
            '图纸、技术规范和工程量清单（如有）',
            '计划开工日期及工期',
            '材料（包括骨料和沥青）由哪方供应',
          ],
        },
        {
          type: 'links',
          label: '相关服务',
          title: '支持道路项目的服务',
          items: [
            { title: '骨料生产', text: '用于粒料层和沥青的机制细骨料。', page: 'aggregates' },
            { title: '设备租赁', text: '施工高峰期增配卡车、挖掘机、装载机、平地机、压路机和摊铺机。', page: 'rental' },
            { title: '施工进场与开工准备', text: '主体工程开工前开辟工地、修建便道和平台。', page: 'mobilization' },
            { title: '工程经验', text: '阿尔及利亚的不同地形如何改变道路修建方式。', page: 'experience' },
          ],
        },
        {
          type: 'faq',
          label: '问答',
          title: '关于道路施工的常见问题',
          items: [
            { id: 'road-experience', q: 'ETAHG 是否有道路施工经验？', a: '有。道路施工是 SARL ETAHG 的起家业务：其设备主要用于修建道路，公司已在阿尔及利亚许多地区完成道路项目。' },
            { id: 'road-scope', q: 'ETAHG 可承担道路项目的哪些部分？', a: 'SARL ETAHG 可承担土方、平整压实、底基层和基层、洒布沥青、以自有摊铺机和压路机进行沥青面层施工、骨料供应及运输，既可作为完整工作范围承接，也可作为部分工程分包。' },
            { id: 'road-subcontract', q: 'ETAHG 能否作为道路项目的分包商？', a: '可以。SARL ETAHG 可为总承包商（包括外国承包商）承担明确划分的工作，如土方、粒料层、摊铺或骨料供应。' },
            { id: 'road-regions', q: 'ETAHG 在哪些地区修建过道路？', a: 'SARL ETAHG 已在阿尔及利亚许多地区完成道路项目，熟悉这些地区的地形。以往道路项目的资料可与潜在合作伙伴商谈。' },
            { id: 'road-materials', q: 'ETAHG 能否为道路项目供应骨料？', a: '可以。SARL ETAHG 在杰勒法以南艾因伊贝勒（Oued Sdeur）的自有采石场和破碎站生产高品质细骨料，并可用自有卡车配送，材料供应与道路施工可统一安排。' },
            { id: 'road-equipment', q: 'ETAHG 使用哪些设备修建道路？', a: 'SARL ETAHG 以自有液压挖掘机、推土机、轮式装载机、平地机、振动压路机、沥青洒布车及罐车、沥青摊铺机、载重卡车和半挂车修建道路，构成完整的沥青道路施工链，并由自有采石场和破碎站供应骨料。' },
          ],
        },
        {
          type: 'cta',
          title: '在阿尔及利亚有道路项目？',
          text: '请告知项目地点、长度和工作范围，我们将说明可承担的工作。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    /* -------------------------------------------------------------- DRILLING */
    drilling: {
      slug: 'services/water-well-drilling',
      nav: '水井钻探',
      title: '阿尔及利亚水井钻探与打井服务 | ETAHG',
      description: 'SARL ETAHG 以自有水井钻机在阿尔及利亚钻凿水井，可按需为施工工地以及农业灌溉、工矿企业和社区供水需求提供服务，并可纳入新工地的进场准备。',
      summary: 'SARL ETAHG 以自有钻机在阿尔及利亚钻凿水井，服务工地、农场、工业及社区。',
      service: { name: '水井钻探', serviceType: '水井钻探' },
      whatsapp: '您好，SARL ETAHG。我想了解钻凿水井事宜（井位地点、用水用途）。\nHello SARL ETAHG, I would like information about drilling a water well (location, use of the water).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '水井钻探',
          title: '为工地、农场、工业和社区钻凿水井',
          lead: '{{company}} 拥有新近购置的车载水井钻机及配套附件，可在阿尔及利亚为施工工地、农业、工业设施和社区钻凿水井。ETAHG 立足杰勒法和盖尔达耶，地处高原地区与撒哈拉北部之间，也可将打井纳入新项目的进场准备工作，使工程早期即有水可用。',
          ctas: [
            { label: '咨询打井', kind: 'whatsapp', variant: 'primary' },
            { label: '联系我们', page: 'contact', variant: 'secondary' },
          ],
          illustration: 'drill-rig',
        },
        {
          type: 'split',
          label: '重要性',
          title: '水源本身就是一项工程',
          paragraphs: [
            '土方压实需要水，混凝土拌和与养护需要水，施工便道降尘需要水，工地营地需要生活和生产用水。在地表水稀缺的高原地区和撒哈拉，水井往往是唯一可靠的水源，而用水罐车长距离运水成本高昂。',
            '在进场动员阶段尽早打井，可消除偏远项目的主要制约之一。工程结束后，水井还可继续为业主、农场或当地社区所用。',
          ],
          list: ['施工及道路工地', '农业灌溉及牲畜饮水', '工业及矿业设施', '社区供水'],
          illustration: 'terrain-desert',
        },
        {
          type: 'features',
          label: '用途',
          title: '水井的典型用途',
          items: [
            { title: '施工工地', text: '就近提供压实、混凝土、降尘及临建设施用水。' },
            { title: '农业', text: '为农场和新垦农田钻凿灌溉井，尤其是在草原地区和撒哈拉。' },
            { title: '工业与矿业', text: '为远离管网的工厂、采石场和工业场地提供生产及生活用水。' },
            { title: '社区与牲畜', text: '为管网未覆盖的村庄、居民点和牧区钻凿水井。' },
          ],
        },
        {
          type: 'steps',
          label: '流程',
          title: '水井项目如何实施',
          intro: '水井项目的主要阶段如下。ETAHG 承担的具体范围在每份合同中约定。',
          items: [
            { title: '需求与井位', text: '与客户确定需水量、用途、位置和进场条件，并收集附近既有水井的资料。' },
            { title: '审批', text: '钻井前须依据阿尔及利亚法规取得所需许可，由哪一方申请在合同中约定；钻井工作围绕许可安排。' },
            { title: '钻机进场', text: '将钻机及辅助设备运至现场。' },
            { title: '钻进', text: '采用适合地层的工艺钻穿各地层，直至含水层。' },
            { title: '下管与成井', text: '下入井管，在含水层位置设置滤水管，并按约定规格完成成井配套。' },
            { title: '洗井与移交', text: '清洗、洗井直至出水清澈，然后移交使用。' },
          ],
        },
        {
          type: 'prose',
          label: '地质',
          title: '阿尔及利亚​不同地质条件下的钻井',
          paragraphs: [
            '阿尔及利亚的地下水随地貌而变化。在泰勒地区，含水层主要分布在冲积平原和裂隙灰岩中，依靠冬季降雨补给；在沿海地带，过量开采可能导致海水入侵。在高原地区，含水层分布于沉积盆地中，深度和水质各异，盐沼（chott）附近的地下水可能含盐。',
            '撒哈拉北部地下有两大含水层系统，与突尼斯和利比亚共享：埋藏较浅的终端复合含水层（Complexe Terminal），以及埋藏较深的大陆间含水层（Continental Intercalaire，通称阿尔比含水层）。深井可能出温度较高的承压水，这会影响井管和井口装置的选型。由于这部分地下水大多不可再生，其使用受到主管部门的管理。',
            '因此每口井都针对其位置进行设计：钻进工艺、井深、井管和成井方式取决于地层和目标含水层。每个项目都从沟通现场情况和预计用水需求开始。阿尔及利亚各类地形对施工的影响，详见[道路施工经验](page:experience)页面。',
          ],
        },
        {
          type: 'prose',
          label: '询价',
          title: '水井项目需提供的信息',
          list: [
            '井位地点，如有请附坐标',
            '用途及预计需水量',
            '附近既有水井资料（如已知：井深、水位）',
            '钻机及其辅助车辆的进场条件',
            '钻井许可的办理情况',
            '期望的施工时间',
          ],
        },
        {
          type: 'links',
          label: '相关服务',
          title: '水源与完整项目',
          items: [
            { title: '施工进场与开工准备', text: '在开辟新工地时一并打井。', page: 'mobilization' },
            { title: '道路施工', text: '道路工程的压实及降尘用水。', page: 'roads' },
            { title: '骨料生产', text: '用于混凝土和路面结构层的机制细骨料。', page: 'aggregates' },
            { title: '国际合作', text: '外国承包商如何与 ETAHG 合作。', page: 'partners' },
          ],
        },
        {
          type: 'faq',
          label: '问答',
          title: '关于水井钻探的常见问题',
          items: [
            { id: 'drill-own', q: 'ETAHG 是否拥有自己的钻机？', a: '是的。SARL ETAHG 拥有新近购置的自有车载水井钻机及配套附件。' },
            { id: 'drill-uses', q: 'ETAHG 钻凿哪些类型的水井？', a: 'SARL ETAHG 可为施工工地、农业灌溉、工矿设施和社区供水钻凿水井。每口井的设计取决于其用途和当地地质条件。' },
            { id: 'drill-combined', q: '能否在进场动员时一并打井？', a: '可以。SARL ETAHG 可将钻凿水井纳入新工地的进场动员，为土方、混凝土和临建设施提供用水。' },
            { id: 'drill-where', q: 'ETAHG 可以在哪些地方打井？', a: 'SARL ETAHG 立足杰勒法和盖尔达耶，地处阿尔及利亚北部与撒哈拉之间的轴线上。具体地点的可行性在您发送项目资料后评估。' },
            { id: 'drill-permit', q: '在阿尔及利亚打井是否需要许可？', a: '需要。在阿尔及利亚钻凿水井须事先取得水资源主管部门的许可，SARL ETAHG 根据该许可安排钻井工作，由哪一方申请与客户商定。' },
            { id: 'drill-depth', q: '水井会打多深？', a: 'SARL ETAHG 根据当地地质条件和目标含水层确定每口井的深度。井深在审查井位及附近既有水井资料后估算。' },
          ],
        },
        {
          type: 'cta',
          title: '工地需要用水？',
          text: '请告知井位地点和用水用途。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ----------------------------------------------------------------- PARTS */
    parts: {
      slug: 'services/spare-parts',
      nav: '配件供应',
      title: '重型设备配件：EURL KAYLE KENNY | ETAHG',
      description: 'EURL KAYLE KENNY 隶属 SARL ETAHG 集团，从阿尔及尔穆罕默迪亚的门店和配件仓库供应重型柴油发动机配件，服务设备车队与维修厂。',
      summary: '通过集团旗下阿尔及尔公司 EURL KAYLE KENNY 供应重型柴油发动机配件。',
      service: { name: '重型设备配件（EURL KAYLE KENNY）', serviceType: '重型设备配件供应' },
      whatsapp: '您好，我们在寻找重型设备配件（零件号／发动机型号）：\nHello, I am looking for heavy-duty spare parts (reference / engine model):',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '配件供应',
          title: 'EURL KAYLE KENNY 重型设备配件',
          lead: 'EURL KAYLE KENNY 隶属于 {{company}} 旗下，从其位于阿尔及尔穆罕默迪亚（Mohammadia）的门店和配件仓库，向设备车队业主、承包商和维修厂供应重型柴油发动机配件。',
          ctas: [
            { label: '在 kaylekenny.com 查询配件', href: 'https://www.kaylekenny.com', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
          illustration: 'spare-parts',
        },
        {
          type: 'split',
          label: '公司',
          title: '集团内的配件支持',
          paragraphs: [
            '重型设备只有在运转时才创造效益。当远离城市的工地上发动机零件损坏时，找到合适配件所需的时间决定了设备停机多久。集团内拥有配件公司，可为我们自己的设备和客户缩短这一时间。',
            'EURL KAYLE KENNY 在阿尔及尔库存重型柴油发动机配件，包括 Cummins 兼容配件。客户可在 [kaylekenny.com](https://www.kaylekenny.com) 查询零件号，并直接询问库存和价格。',
          ],
          list: ['重型设备柴油发动机配件', 'Cummins 兼容配件', '阿尔及尔穆罕默迪亚现货库存', '可在线按零件号查询'],
          illustration: 'excavator',
          reverse: true,
        },
        {
          type: 'prose',
          label: '致合作伙伴',
          title: '对 ETAHG 合作伙伴的意义',
          paragraphs: [
            '对于租用 ETAHG 设备或与 ETAHG 在项目上合作的承包商，集团内的配件公司是发动机配件的本地货源。对于拥有自有设备的合作伙伴，它也提供了一个位于阿尔及尔的重型发动机配件本地货源。',
            '询购配件时，请发送零件号，或发动机型号及序列号。附上零件照片和发动机铭牌照片，有助于准确识别所需零件。',
          ],
        },
        {
          type: 'prose',
          label: '声明',
          title: '独立供应商',
          paragraphs: [
            'EURL KAYLE KENNY 为独立配件供应商，与 Cummins Inc.（康明斯公司）无任何隶属关系，亦未获其认可或授权。Cummins 名称及任何零件号仅用于说明兼容性。',
          ],
        },
        {
          type: 'faq',
          label: '问答',
          title: '关于配件的常见问题',
          items: [
            { id: 'parts-link', q: 'SARL ETAHG 与 EURL KAYLE KENNY 是什么关系？', a: 'EURL KAYLE KENNY 隶属于 SARL ETAHG 旗下，是集团的重型设备配件公司，位于阿尔及尔穆罕默迪亚。' },
            { id: 'parts-what', q: 'EURL KAYLE KENNY 供应哪些配件？', a: 'EURL KAYLE KENNY 供应重型柴油发动机配件，包括 Cummins 兼容配件。该公司为独立供应商，与 Cummins Inc. 无任何隶属关系，亦未获其认可或授权。' },
            { id: 'parts-how', q: '如何查询配件是否有货？', a: `可在 www.kaylekenny.com 查询零件号，或通过 WhatsApp 将零件号发送至 ${TEL}，这是 SARL ETAHG 与 EURL KAYLE KENNY 共用的集团号码。` },
            { id: 'parts-fleet', q: '集团配件公司是否为 ETAHG 的租赁设备提供支持？', a: '是的。SARL ETAHG 集团旗下位于阿尔及尔的配件公司 EURL KAYLE KENNY 供应重型柴油发动机配件，为用于租赁和项目的设备提供完好率保障。' },
          ],
        },
        {
          type: 'cta',
          title: '正在寻找配件？',
          text: '可在 kaylekenny.com 按零件号查询，或将零件号发送给我们。',
          ctas: [
            { label: '访问 kaylekenny.com', href: 'https://www.kaylekenny.com', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ----------------------------------------------------------------- FLEET */
    fleet: {
      slug: 'fleet',
      nav: '自有设备',
      title: '杰勒法重型设备：破碎站、推土机、摊铺机 | ETAHG',
      description: 'SARL ETAHG 自有设备：挖掘机、推土机、装载机、平地机、压路机、摊铺机、沥青设备、运输车辆、钻机及采石场和破碎站。',
      summary: 'SARL ETAHG 的重型设备类别，驻扎在杰勒法设备基地及艾因伊贝勒（Oued Sdeur）采石场和破碎站。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '自有设备',
          title: '从采石场到摊铺机，重型设备全部自有',
          lead: '{{company}} 拥有支撑其全部服务的设备：采石场及石料破碎筛分站、液压挖掘机、推土机、轮式装载机、平地机、振动压路机、沥青摊铺机、沥青洒布车和沥青罐车、载重卡车、自卸半挂车、采石场凿岩钻车以及车载水井钻机。移动设备驻扎在位于 RN1 南北轴线上的杰勒法设备基地，采石场和破碎设备位于艾因伊贝勒（Oued Sdeur）。这些设备服务于公司自有项目，同时可供出租和长期租赁。',
          ctas: [
            { label: '设备租赁', page: 'rental', variant: 'primary' },
            { label: '联系我们', page: 'contact', variant: 'secondary' },
          ],
          illustration: 'semi-truck',
        },
        {
          type: 'equipment',
          label: '设备',
          title: '设备类别',
          intro: '我们的设备覆盖重型工程全链条，从材料生产、道路面层施工到供水。',
          items: [
            { illustration: 'crusher', title: '采石场及石料破碎筛分站', text: '自有采石场为破碎与制砂设备供料，生产高品质细骨料，适合高产量需求。', uses: ['岩石开采', '细骨料'], count: 'crushingPlants' },
            { illustration: 'drill-rig', title: '采石场凿岩钻车', text: '露天凿岩钻车，用于采石场工作面钻孔，是岩石开采的第一步。', uses: ['采石场钻孔', '岩石开采'] },
            { illustration: 'excavator', title: '液压挖掘机', text: '用于开挖、开槽、装车及坚硬地层作业。', uses: ['开挖', '装车'], count: 'excavators' },
            { illustration: 'bulldozer', title: '推土机', text: '用于清表、推运、摊铺和整形，以及开辟便道。', uses: ['场地清理', '路堤'], count: 'bulldozers' },
            { illustration: 'bulldozer', title: '轮式装载机', text: '用于装车、为破碎机上料及料堆倒运。', uses: ['装车', '料堆'] },
            { illustration: 'bulldozer', title: '平地机', text: '用于摊铺和整平粒料层，并养护便道。', uses: ['层面整平', '断面整形'] },
            { illustration: 'paver', title: '振动压路机', text: '用于压实路基、粒料层和沥青层。', uses: ['压实', '沥青'] },
            { illustration: 'dump-truck', title: '沥青洒布车及沥青罐车', text: '沥青洒布车用于透层、粘层和表面处治，沥青罐车负责供料。', uses: ['洒布沥青', '沥青供应'] },
            { illustration: 'paver', title: '沥青摊铺机', text: '按线形和标高摊铺沥青及路面结构层。', uses: ['沥青摊铺', '面层施工'], count: 'roadPavers' },
            { illustration: 'dump-truck', title: '载重卡车', text: '用于土方作业以及配送骨料和填料。', uses: ['土方', '骨料配送'], count: 'dumpTrucks' },
            { illustration: 'semi-truck', title: '自卸半挂车', text: '牵引车配自卸半挂车，用于长距离散装运输骨料和材料。', uses: ['散装运输', '材料供应'], count: 'semiTrailerTrucks' },
            { illustration: 'drill-rig', title: '车载水井钻机', text: '新近购置的车载水井钻机及配套附件，可在施工工地、农场及偏远地区钻凿水井。', uses: ['水井', '工地供水'], count: 'drillingRigs' },
          ],
        },
        {
          type: 'prose',
          label: '全链条',
          title: '覆盖重型工程​各阶段的设备',
          paragraphs: [
            '大多数项目按固定顺序使用设备。在采石场，凿岩钻车和装载机开采岩石，破碎站将其加工为粒料层、混凝土和沥青所需的细骨料。在工地，推土机和挖掘机开辟场地；卡车和半挂车运输填料、弃土和骨料；平地机整平每一结构层，振动压路机将其压实；沥青洒布车在沥青罐车供料下洒布透层和粘层；摊铺机铺筑沥青面层。平地机、压路机、沥青洒布和摊铺共同构成完整的沥青道路施工链。水井钻机则在无水之处提供水源。',
            '由于 {{company}} 在上述每一类别都拥有自有设备，既能承担完整的施工工序，也能填补承包商自有设备的单项缺口。同一批设备用于公司自有道路项目、[设备租赁（短租／长租）](page:rental)以及[施工进场与开工准备](page:mobilization)。',
          ],
        },
        {
          type: 'features',
          label: '设备完好率',
          title: '如何保障设备可用',
          intro: '设备的价值取决于其在现场的可用性。',
          items: [
            { title: '中心基地', text: '杰勒法基地位于 RN1 轴线上，是向北部和南部整备、调遣设备的基地。' },
            { title: '自有运输', text: '自有卡车和自卸半挂车运输骨料和材料，不依赖第三方承运商。' },
            { title: '集团内配件', text: 'EURL KAYLE KENNY 从阿尔及尔的库存供应重型柴油发动机配件。' },
            { title: '事先约定维保', text: '每项租赁或项目在开工前，均在合同中明确保养和维修责任。' },
          ],
        },
        {
          type: 'prose',
          label: '设备明细',
          title: '设备清单与技术参数',
          paragraphs: [
            '本网站仅介绍设备类别。拟投入项目的设备清单及技术参数随每份报价提供。',
          ],
        },
        {
          type: 'faq',
          label: '问答',
          title: '关于设备的常见问题',
          from: 'faq',
          ids: ['fleet', 'rental', 'rental-terms'],
          more: { label: '查看全部问答', page: 'faq' },
        },
        {
          type: 'cta',
          title: '项目需要设备？',
          text: '短租、长期租赁或完整的施工范围，请告诉我们您的需求。',
          ctas: [
            { label: '设备租赁', page: 'rental', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ EXPERIENCE */
    experience: {
      slug: 'experience',
      nav: '工程经验',
      title: '阿尔及利亚多个地区道路施工经验 | ETAHG',
      description: 'SARL ETAHG 在阿尔及利亚许多地区修建过道路。本页介绍泰勒地区、阿特拉斯山区、高原地区和撒哈拉的地形如何影响道路施工与水井钻探。',
      summary: 'SARL ETAHG 在阿尔及利亚许多地区的道路施工经验，以及不同地形对施工的影响。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '工程经验',
          title: '源自阿尔及利亚​多地道路项目的经验',
          lead: '{{company}} 已在阿尔及利亚许多地区完成道路项目，熟悉这些地区的地形。公司的设备为修建道路而配置，这些经验如今贯穿于公司提供的全部服务：骨料生产、设备租赁、施工进场与开工准备以及水井钻探。',
          illustration: 'paver',
        },
        {
          type: 'prose',
          label: '背景',
          title: '在道路项目中成长',
          paragraphs: [
            '在向外提供设备之前，ETAHG 主要用这些设备修建道路。道路工程要求严苛：线性工地长，土方和骨料用量大，标高要求严格，工期紧张。设备、班组和组织管理每天都在接受考验，而且随着线路推进，施工环境不断变化。',
            '这一背景决定了我们今天的工作方式。我们以产量为导向做计划，因为摊铺机组和混凝土拌和站不能停工待料。我们因地形做计划，因为地质、气候和进场条件决定设备与工法的选择。我们也考虑运距，因为阿尔及利亚是非洲面积最大的国家，许多工地远离城镇、维修厂和供应商。',
          ],
        },
        {
          type: 'terrain',
          label: '地形',
          title: '不同地形的施工要求',
          intro: '阿尔及利亚四大类地貌需要四种不同的施工方式。以下概述其中涉及的专业经验。',
          items: [
            { illustration: 'terrain-coastal', title: '沿海泰勒地区', text: '地中海沿岸土质多为黏性土，冬季降雨较多。道路取决于良好的排水、路基处理和精细压实，施工往往紧邻既有交通和密集居民区。', points: ['排水优先', '路基处理', '交通组织'] },
            { illustration: 'terrain-mountain', title: '阿特拉斯山区', text: '泰勒阿特拉斯山脉和撒哈拉阿特拉斯山脉意味着石方开挖、高路堤、挡土工程和急弯。大功率推土机和挖掘机、经验丰富的操作手以及对边坡稳定的重视是关键。', points: ['石方开挖', '挖填平衡', '边坡稳定'] },
            { illustration: 'terrain-plateau', title: '高原地区', text: '泰勒阿特拉斯山脉与撒哈拉阿特拉斯山脉之间的草原地带，线路长、工程量大。施工效率、稳定的骨料供应、大风、冬季冻融以及盐沼附近的软弱地基共同决定工期安排。', points: ['高产量施工', '骨料稳定供应', '季节性安排'] },
            { illustration: 'terrain-desert', title: '撒哈拉', text: '沙漠中风沙、高温和偏远是主导因素。工地须在燃油、配件和用水上自给自足，必须治理流沙，路面必须耐受高温。', points: ['工地自给自足', '水井钻探', '高温与风沙'] },
          ],
        },
        {
          type: 'table',
          label: '汇总',
          title: '地形对施工的影响',
          caption: '阿尔及利亚主要地貌对道路施工和水井钻探的影响',
          head: ['地形', '主要制约', '道路施工对策', '钻井注意事项'],
          rows: [
            ['沿海泰勒地区', '黏性土、冬季降雨、交通、土地利用密集', '排水、路基处理、保通分段施工', '冲积层及灰岩含水层；近海地带有海水入侵'],
            ['阿特拉斯山区', '陡坡、岩石、滑坡风险、弯道', '石方开挖、挖填平衡、挡土及边坡工程', '裂隙岩层；钻机进场往往是主要制约'],
            ['高原地区', '冬冷夏热、大风、盐沼（chott）', '高产量土方与摊铺、稳定的骨料供应、季节性安排', '深度不一的沉积盆地；盐沼附近地下水含盐'],
            ['撒哈拉', '风沙、高温、运距、缺水', '防沙治沙、耐高温沥青、钙质土（tuf calcaire）等当地材料、工地自给自足', '终端复合含水层及深层阿尔比含水层；深部承压热水'],
          ],
        },
        {
          type: 'features',
          label: '致合作伙伴',
          title: '这些经验对​合作伙伴意味着什么',
          items: [
            { title: '切实可行的计划', text: '工期和资源安排充分考虑地形、季节和运距。' },
            { title: '合适的设备', text: '根据地质和工作范围选择设备，而不只看是否有空闲设备。' },
            { title: '提前考虑材料供应', text: '尽早明确骨料需求，以自有破碎站作为货源。' },
            { title: '工地自给自足', text: '为远离城镇和维修厂的工地规划燃油、用水和配件。' },
          ],
        },
        {
          type: 'records',
          label: '业绩',
          title: '项目业绩资料',
          regionsTitle: '修建过道路的地区',
          projectsTitle: '代表性项目',
          emptyText: '以往道路项目的资料可与潜在合作伙伴商谈，欢迎通过电子邮件索取。',
        },
        {
          type: 'locations',
          label: '场所',
          title: '我们的基地',
          intro: '我们在杰勒法和盖尔达耶的基地位于南北主轴线上，介于地中海沿岸的北部与撒哈拉之间。',
        },
        {
          type: 'cta',
          title: '在条件复杂的地区施工？',
          text: '请告诉我们地形和工作范围，我们将说明应对思路。以往道路项目的资料可与潜在合作伙伴商谈。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '道路施工', page: 'roads', variant: 'secondary' },
          ],
        },
      ],
    },

    /* -------------------------------------------------------------- PARTNERS */
    partners: {
      slug: 'international-partners',
      nav: '国际合作',
      title: '阿尔及利亚当地合作伙伴：欢迎中资企业洽谈 | ETAHG',
      description: 'SARL ETAHG 为在阿尔及利亚承建项目的中资及外国承包商提供当地合作：施工分包、工程机械租赁、机制砂供应、施工进场与开工准备及水井钻探，欢迎来邮洽谈。',
      summary: '国际承包商及外国企业（包括中资企业）如何在阿尔及利亚与 SARL ETAHG 合作，以及如何开始。',
      whatsapp: '您好，SARL ETAHG。我们是一家国际企业，希望商谈在阿尔及利亚的合作。\nHello SARL ETAHG, we are an international company and would like to discuss cooperation in Algeria.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '国际合作',
          title: '国际承包商​在阿尔及利亚的​当地重型工程​合作伙伴',
          lead: '{{company}} 是一家成立于 1997 年的阿尔及利亚重型工程企业，与国际承包商、EPC 总承包企业和投资方协同作业。我们可在贵方合同下承担明确划分的工作，向贵方工地供应设备和细骨料，或在贵方组织机构搭建期间先行开辟工地；依托的是自有设备、自有采石场和破碎站，以及在阿尔及利亚许多地区积累的道路施工经验。',
          ctas: [
            { label: '发送邮件洽谈', kind: 'mailto', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
            { label: '下载公司简介（PDF）', kind: 'pdf', variant: 'ghost' },
          ],
          illustration: 'semi-truck',
        },
        {
          type: 'prose',
          label: '背景',
          title: '与国际承包商协同作业',
          paragraphs: [
            '阿尔及利亚的公路、铁路、水坝、住房和工业项目，由阿尔及利亚企业和国际承包商共同实施，其中包括众多中国、土耳其和欧洲企业。国际承包商带来设计、融资和大型项目管理能力；他们在当地往往需要的，是已在当地的设备、有保障的材料供应、承担土方和路面结构层的分包商，以及熟悉当地地质和实际施工条件的合作伙伴（参见我们的[道路施工经验](page:experience)）。',
            '{{company}} 正是为承担这一角色而组织的。公司可在贵方合同下承担明确划分的工作，向贵方工地供应设备和骨料，或在贵方组织机构搭建期间先行开辟工地。由于设备和破碎站均为自有，公司投入的是自身资源，而不是代贵方协调第三方。',
          ],
        },
        {
          type: 'prose',
          label: '致中资企业',
          title: '致在阿尔及利亚的​中资企业',
          paragraphs: [
            '在阿尔及利亚承建公路、铁路、水利和住房项目的中资企业，常在几个环节遇到相同的问题：开工初期国内设备仍在海运和清关途中；工地附近缺少稳定的机制砂来源；南部偏远工地的燃油、配件和用水保障困难；以及需要熟悉当地地质和施工条件的分包队伍。',
            'SARL ETAHG 以自有设备、艾因伊贝勒（Oued Sdeur）自有采石场和破碎站以及在阿尔及利亚许多地区积累的道路施工经验，可在上述环节与贵方项目部配合：先行进场开辟工地，供应细骨料，承担土方、路面结构层或摊铺分包，并在需要时钻凿施工用水井。',
            '欢迎贵方国内总部或驻阿项目部通过电子邮件 [{{email}}](mailto:) 与我们联系，并请注明贵方首选的沟通语言；我们将在收到项目资料后给出初步答复。本网站另有[英文版](page:home@en)。',
          ],
        },
        {
          type: 'features',
          label: '为何选择 ETAHG',
          title: 'ETAHG 能为贵方项目带来什么',
          items: [
            { title: '自有设备，自有运输', text: 'ETAHG 自有的挖掘机、推土机、装载机、平地机、压路机、摊铺机、沥青设备、卡车、半挂车和水井钻机，从杰勒法基地调遣。' },
            { title: '自有采石场与骨料', text: '艾因伊贝勒（Oued Sdeur）自有采石场及石料破碎筛分站生产高品质细骨料，适合高产量需求。' },
            { title: '道路施工经验', text: '在阿尔及利亚许多地区完成道路项目，切实了解当地地形、材料和施工条件。' },
            { title: '布局贯通南北', text: '成立于 1997 年，注册于撒哈拉北部的盖尔达耶省布努拉，设备驻扎在阿尔及尔至撒哈拉 RN1 轴线上的杰勒法，配件位于阿尔及尔。' },
            { title: '集团配件支持', text: '阿尔及尔的 EURL KAYLE KENNY 供应重型柴油发动机配件，有助于设备在贵方项目上持续运转。' },
            { title: '直接沟通', text: '可通过电子邮件、电话或 WhatsApp 直接联系我们，并请告知首选沟通语言。本网站提供英文、法文、阿拉伯文和简体中文版本。' },
          ],
        },
        {
          type: 'cards',
          label: '合作模式',
          title: '合作方式',
          intro: '我们根据贵方项目架构灵活配合。最常见的模式有：',
          style: 'compact',
          items: [
            { title: '施工分包', text: '在贵方合同下承担明确划分的工作，如土方、路面结构层、摊铺或场地整备。', page: 'roads' },
            { title: '设备供应', text: '向贵方项目出租或长期租赁设备，操作手、运输和维修保养等条款按项目商定。', page: 'rental' },
            { title: '骨料供应', text: '从自有破碎站为贵方混凝土、沥青或道路工程供应机制细骨料。', page: 'aggregates' },
            { title: '进场准备', text: '在贵方组织机构搭建期间，调遣设备进场并开辟工地。', page: 'mobilization' },
            { title: '供水', text: '为贵方工地钻凿水井，尤其是无供水管网的地区。', page: 'drilling' },
            { title: '当地合作伙伴', text: '作为贵方在阿尔及利亚的项目合作伙伴，以设备、材料和当地经验参与联合体或联营安排。' },
          ],
        },
        {
          type: 'table',
          label: '一览',
          title: '合作模式一览',
          caption: 'SARL ETAHG 与国际企业的合作模式',
          head: ['模式', 'ETAHG 提供的内容', '通常的协议形式'],
          rows: [
            ['施工分包', '以自有设备和操作手完成明确划分的工作', '主合同下的分包合同'],
            ['设备供应', '设备，操作手、运输及维修保养按项目商定', '租赁或长期租赁协议'],
            ['骨料供应', '机制细骨料，送货或自提', '供货合同'],
            ['进场准备', '进场动员、场地清理、便道、平台、首批土方', '分包合同或服务协议'],
            ['供水', '钻凿水井', '服务合同'],
            ['当地合作伙伴', '以设备、材料和当地经验参与联合安排', '联合体或合资协议'],
          ],
        },
        {
          type: 'steps',
          label: '如何开始',
          title: '合作如何开始',
          items: [
            { title: '初次联系', text: `通过电子邮件（[{{email}}](mailto:)）、电话或 WhatsApp（${TEL}）简要介绍贵公司及项目情况。` },
            { title: '保密', text: '如项目信息敏感，可在交换详细资料前商议签订保密协议。' },
            { title: '交换资料', text: '我们提供公司简介、注册文件和设备资料；贵方提供工作范围、项目地点和工期。' },
            { title: '会谈与现场考察', text: '双方会面并共同考察项目现场；也可商议参观我们的杰勒法设备基地和艾因伊贝勒（Oued Sdeur）采石场及破碎站。' },
            { title: '提交方案', text: '我们提交涵盖工作范围、设备、材料、工期和商务条款的方案。' },
            { title: '签订协议', text: '以适合项目的合同形式确定合作模式。' },
            { title: '进场与跟进', text: '按约定计划调遣设备和团队。' },
          ],
        },
        {
          type: 'split',
          label: '资料清单',
          title: '请发送以下信息',
          paragraphs: ['为便于我们尽快给出有针对性的初步答复，请尽量提供以下信息：'],
          list: [
            '贵公司名称、国家及主营业务',
            '项目名称或简介及业主（如可公开）',
            '项目地点（省或最近城镇）',
            '贵方在项目中的角色及设想的合作模式',
            '工作范围、所需设备类型或材料数量',
            '计划开工日期及工期',
            '现有技术文件（图纸、技术规范、工程量清单）',
            '联系人及首选沟通语言',
          ],
          illustration: 'mobilization',
          reverse: true,
        },
        {
          type: 'prose',
          label: '尽职调查',
          title: '可向合作伙伴提供的文件',
          lead: '评估 ETAHG 的合作伙伴通常会索取法律和技术文件。应要求（必要时在签订保密协议后），我们可提供：',
          list: [
            '商业注册摘录（RC）及税务识别号（NIF、NIS、AI）',
            '[公司简介](page:profile)（PDF 版及可打印版）',
            '拟投入贵方项目的设备清单',
            '采石场、破碎站及其所产骨料的资料',
            '以往道路项目的资料（可与潜在合作伙伴商谈）',
          ],
          note: '本网站另有[英文版](page:home@en)、法文版和阿拉伯文版。请告知贵方首选的函件和文件语言。',
        },
        {
          type: 'faq',
          label: '问答',
          title: '国际企业常见问题',
          from: 'faq',
          ids: ['foreign-companies', 'chinese-contractors', 'subcontract', 'languages', 'kayle-kenny-link', 'quote'],
          more: { label: '查看全部问答', page: 'faq' },
        },
        {
          type: 'cta',
          title: '欢迎洽谈贵方在​阿尔及利亚的项目',
          text: '欢迎通过电子邮件、电话或 WhatsApp 直接与我们联系，并请告知首选沟通语言。',
          ctas: [
            { label: '发送邮件洽谈', kind: 'mailto', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
            { label: '下载公司简介（PDF）', kind: 'pdf', variant: 'ghost' },
          ],
        },
      ],
    },

    /* ----------------------------------------------------------------- ABOUT */
    about: {
      slug: 'about',
      nav: '关于我们',
      title: '关于我们：阿尔及利亚重型工程企业 | ETAHG',
      description: '关于 SARL ETAHG：成立于 1997 年的阿尔及利亚有限责任公司，注册于盖尔达耶，设备基地在杰勒法，自有采石场在艾因伊贝勒。',
      summary: 'SARL ETAHG 公司简介：公司形式、业务、场所及集团。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '关于我们',
          title: '关于 SARL ETAHG',
          lead: 'SARL ETAHG 是一家阿尔及利亚公司，专业从事细骨料（机制砂）生产、道路施工、重型设备租赁（短租与长租）、施工进场与开工准备以及水井钻探。公司成立于 1997 年，注册于盖尔达耶省布努拉，以杰勒法为运营基地，地处阿尔及利亚北部与撒哈拉之间。',
          ctas: [{ label: '下载公司简介（PDF）', kind: 'pdf', variant: 'primary' }],
          illustration: 'bulldozer',
        },
        {
          type: 'prose',
          label: '简介',
          title: '公司简介',
          paragraphs: [
            '{{company}} 是依据阿尔及利亚法律设立的有限责任公司（SARL），成立于 1997 年，注册地址为盖尔达耶省布努拉 Cité 400 Logements, Sidi Abbaz。公司设备基地位于杰勒法；自有采石场及石料破碎筛分站（Carrière Djellal El Gharbi）位于杰勒法以南的艾因伊贝勒（Oued Sdeur），公司在此开采岩石并破碎为高品质细骨料。简称 ETAHG 在所有语言中均使用拉丁字母书写。',
            '公司为修建道路配置了挖掘机、推土机、轮式装载机、平地机、振动压路机、沥青摊铺机、沥青洒布车及罐车、载重卡车和半挂车，并已在阿尔及利亚许多地区完成道路项目。此后，公司通过租赁和长期租赁向其他企业开放这些设备，以自有设备承接新项目的进场准备工作，并以自有车载水井钻机钻凿水井。',
            '集团旗下还有 EURL KAYLE KENNY，一家在阿尔及尔穆罕默迪亚设有门店和配件仓库的重型设备配件公司。',
          ],
        },
        {
          type: 'prose',
          label: '发展',
          title: '从道路施工企业​到多元服务合作伙伴',
          paragraphs: [
            '自 1997 年以来，ETAHG 作为道路施工企业发展壮大，并投资建立了自有生产资料。修建道路需要卡车、土方设备、平地机、压路机、沥青设备、摊铺机和大量骨料；拥有这些资源以及骨料所出的采石场，使公司能够自主安排施工。',
            '如今，这些资源本身已成为独立的服务。承包商可以租用或长期租赁设备、从破碎站采购细骨料、委托 ETAHG 开辟新工地，或请其钻凿水井。国际企业可将这些服务与 ETAHG 的道路施工经验组合为一项合作。',
          ],
        },
        {
          type: 'facts',
          label: '基本信息',
          title: '公司概况',
        },
        {
          type: 'split',
          label: '布局',
          title: '我们的区位为何重要',
          paragraphs: [
            '公司注册地**盖尔达耶**位于撒哈拉北部的姆扎布河谷，是通往阿尔及利亚南部的门户。设备基地所在的**杰勒法**地处草原与撒哈拉过渡带上的高原地区，位于连接阿尔及尔与撒哈拉的南北主干道 1 号国道（RN1）沿线。自有采石场和破碎站位于杰勒法以南的**艾因伊贝勒（Oued Sdeur）**，在同一地区生产细骨料。集团公司 EURL KAYLE KENNY 从**阿尔及尔**供应配件。',
            '对合作伙伴而言，这一布局意味着：设备驻扎在全国南北主通道上，骨料在高原地区生产，配件由首都供应，整体位于北部与撒哈拉南部之间。',
          ],
          illustration: 'semi-truck',
          reverse: true,
        },
        {
          type: 'features',
          label: '工作方式',
          title: '我们的工作方式',
          intro: '我们在自有工地上遵循的原则。',
          items: [
            { title: '书面条款', text: '工作范围、工期和条款在开工前以书面形式约定。' },
            { title: '检测要求事先约定', text: '骨料的检测要求在供货前与客户商定。' },
            { title: '集团配件支持', text: '通过集团公司 EURL KAYLE KENNY 提供重型发动机配件。' },
          ],
        },
        {
          type: 'group',
          label: '集团',
          title: '集团公司：EURL KAYLE KENNY',
          paragraphs: [
            'EURL KAYLE KENNY 隶属于 {{company}} 旗下，位于阿尔及尔穆罕默迪亚，经营重型柴油发动机配件门店和配件仓库，产品包括 Cummins 兼容配件。',
          ],
          disclaimer: DISCLAIMER,
          cta: { label: '访问 kaylekenny.com', href: 'https://www.kaylekenny.com' },
        },
        {
          type: 'locations',
          label: '场所',
          title: '我们的场所',
        },
        {
          type: 'cta',
          title: '了解我们',
          text: '欢迎联系我们洽谈项目，或索取更多公司资料。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '国际合作', page: 'partners', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------------- FAQ */
    /* ----------------------------------------------------------------- 场所 */
    locations: {
      slug: 'locations',
      nav: '场所',
      title: '盖尔达耶、杰勒法与阿尔及尔的场所 | ETAHG',
      description: 'SARL ETAHG 的运营场所：注册地在布努拉（盖尔达耶省），设备基地在杰勒法，采石场在 Oued Sdeur，集团配件门店在阿尔及尔。',
      summary: 'SARL ETAHG 及其集团在阿尔及尔—杰勒法—盖尔达耶轴线上的四个场所，每个运营基地均有专页。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '场所',
          title: '我们在阿尔及利亚南北之间的场所',
          lead: '{{company}}拥有两个自有基地：布努拉（盖尔达耶省）的注册地和杰勒法的设备基地；另有位于艾因伊贝勒附近 Oued Sdeur 的自有采石场和破碎站，以及集团在阿尔及尔的配件门店。四个场所均位于连接阿尔及尔与撒哈拉的 1 号国道（RN1）沿线或附近。',
        },
        {
          type: 'locations',
          label: '场所',
          title: 'RN1 走廊沿线的四个场所',
          intro: '高原地区的设备基地和撒哈拉北部的注册地各有专页：那里有什么、从那里出发提供哪些服务、周边地形以及如何到达。',
        },
        {
          type: 'cta',
          title: '哪个基地离您的项目最近？',
          text: '请告诉我们工地位置。我们会说明将从哪个基地调遣，以及可在当地提供什么。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    'loc-djelfa': {
      slug: 'locations/djelfa',
      nav: '杰勒法设备基地',
      title: '杰勒法设备基地（高原地区） | ETAHG',
      description: 'SARL ETAHG 位于杰勒法 RN1 轴线上的设备基地：筑路设备驻地、租赁与进场调遣的出发点，邻近城市以南的 Oued Sdeur 采石场。',
      summary: 'SARL ETAHG 杰勒法设备基地：高原地区的设备驻地，租赁、进场调遣和道路施工的出发点，靠近采石场。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '杰勒法，杰勒法省',
          title: '杰勒法：RN1 轴线上的设备基地',
          lead: '{{company}}的设备在杰勒法驻扎和维护，大多数进场调遣也从这里出发。该市位于高原地区，地处连接阿尔及尔与撒哈拉的南北主干道上，设备可就近服务南北两个方向的项目。',
          illustration: 'excavator',
        },
        {
          type: 'place',
          label: '基地',
          title: '杰勒法基地有什么',
          paragraphs: [
            '基地是筑路设备的驻地：液压挖掘机、推土机、轮式装载机、平地机、振动压路机、沥青摊铺机、沥青洒布车和沥青罐车、卡车和自卸半挂车、采石场凿岩台车以及车载水井钻机。设备在项目间隙于此停放、保养并做运输准备。',
            '半挂车装载、车队准备和租赁设备交接均在基地进行。重型柴油发动机的配件由集团公司 EURL KAYLE KENNY（阿尔及尔）供应。',
          ],
        },
        {
          type: 'cards',
          label: '服务',
          title: '从杰勒法提供的服务',
          intro: '凡需要设备的工作都从这里出发。骨料由城市以南 Oued Sdeur 的采石场和破碎站供应。',
          style: 'compact',
          items: [
            { page: 'rental', title: '设备租赁', text: '挖掘机、推土机、装载机、平地机、压路机、摊铺机、卡车和半挂车，在基地交接或送达工地。' },
            { page: 'mobilization', title: '项目进场', text: '设备和操作人员组成车队开辟新工地：便道、平台和首批土方。' },
            { page: 'roads', title: '道路施工', text: '以全套设备完成土方、路面结构层和沥青面层，可直接承包或分包。' },
            { page: 'aggregates', title: '细骨料', text: '来自 Oued Sdeur 破碎站的机制砂和细骨料，由自有卡车和半挂车运输。' },
            { page: 'drilling', title: '水井钻探', text: '车载钻机驻扎在基地，可前往高原和南部的工地。' },
          ],
        },
        {
          type: 'prose',
          label: '地形',
          title: '杰勒法周边的高原地区',
          paragraphs: [
            '杰勒法位于高原地区，即北面泰勒阿特拉斯与南面撒哈拉阿特拉斯之间的广阔草原。地势开阔，线路平直而漫长，冬冷夏热，多风。对道路施工而言，这意味着长距离的线性工地、大量的骨料需求，以及需要在长距离上保持设备的生产率；我们位于城市以南的自有采石场直接解决了骨料问题。',
            '邻近的撒哈拉阿特拉斯带来岩石开挖、路堤和更陡的坡度，这正是我们组建设备队伍所针对的条件。',
          ],
        },
        {
          type: 'prose',
          label: '交通',
          title: '交通与物流',
          paragraphs: [
            '基地由 RN1 到达，该国道北接阿尔及尔，南连拉格瓦特、盖尔达耶和撒哈拉。重型设备沿此轴线或穿越高原前往邻近省份，均以半挂车运输。运输、工期和操作人员按项目商定。',
          ],
        },
        {
          type: 'faq',
          label: '常见问题',
          title: '关于杰勒法基地的问题',
          items: [
            { id: 'djelfa-visit', q: '租赁前可以到基地查看设备吗？', a: '可以。请联系我们安排参观；我们将展示适合您项目的设备类别，并讨论运往工地的事宜。' },
            { id: 'djelfa-aggregates', q: '骨料来自哪里？', a: '来自我们自有的采石场和石料破碎站，即杰勒法以南艾因伊贝勒附近 Oued Sdeur 的 Carrière Djellal El Gharbi，生产用于混凝土、沥青和道路结构层的细骨料。' },
          ],
        },
        {
          type: 'cta',
          title: '项目在高原地区或更南的地方？',
          text: '请把位置、工作范围和日期发给我们。我们将答复可从杰勒法调遣的设备和材料。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    'loc-ghardaia': {
      slug: 'locations/ghardaia',
      nav: '盖尔达耶注册地',
      title: '盖尔达耶注册地（布努拉） | ETAHG',
      description: 'SARL ETAHG 的注册地位于盖尔达耶省布努拉，地处阿尔及利亚撒哈拉北部：负责合同签署、行政管理以及南部地区项目的协调。',
      summary: 'SARL ETAHG 在盖尔达耶布努拉的注册地：合同在此处理，也是阿尔及利亚撒哈拉地区项目的出发点。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '布努拉，盖尔达耶省',
          title: '盖尔达耶：撒哈拉北部的注册地',
          lead: '{{company}}于 1997 年在盖尔达耶成立，注册地一直设在姆扎布河谷的布努拉。公司在此进行行政管理并签署合同，这里也是南部项目的自然出发点。',
          illustration: 'drill-rig',
        },
        {
          type: 'place',
          label: '办公地',
          title: '盖尔达耶注册地有什么',
          paragraphs: [
            '注册地负责公司的行政管理、合同、开票以及阿尔及利亚有限责任公司的登记义务。与业主和合作伙伴的会议可在此或杰勒法基地举行，视项目所在地而定。',
            '盖尔达耶也让公司扎根南部：从这里，驻扎在杰勒法的设备被派往撒哈拉，并为本地区的工地、农场和社区组织水井钻探。',
          ],
        },
        {
          type: 'cards',
          label: '服务',
          title: '由盖尔达耶协调的服务',
          intro: '设备在杰勒法；注册地负责组织项目，尤其是撒哈拉各省的项目。',
          style: 'compact',
          items: [
            { page: 'partners', title: '本地合作', text: '与国际承包商的分包、供应和租赁协议，在注册地准备并签署。' },
            { page: 'drilling', title: '水井钻探', text: '为工地、农业和工业钻井；在这一地区，水本身就是一个项目。' },
            { page: 'mobilization', title: '向南进场', text: '车队从杰勒法沿 RN1 前往撒哈拉工地，注册地作为当地联系点。' },
            { page: 'aggregates', title: '骨料供应', text: 'Oued Sdeur 破碎站的细骨料由自有运输车辆送达南部项目。' },
          ],
        },
        {
          type: 'prose',
          label: '地形',
          title: '盖尔达耶周边的撒哈拉北部',
          paragraphs: [
            '盖尔达耶位于姆扎布河谷，地处阿尔及利亚撒哈拉北部。该地区兼有岩质高地、干河谷和沙地，高温、距离遥远、水源稀缺。在此施工必须按自给自足规划：燃油、配件、住宿和供水都随工地一起移动，这正是项目进场和钻井成为我们服务内容的原因。',
          ],
        },
        {
          type: 'prose',
          label: '交通',
          title: '交通与物流',
          paragraphs: [
            '布努拉属盖尔达耶城区，位于拉格瓦特和杰勒法以南的 RN1 沿线。设备从杰勒法基地沿同一条公路抵达撒哈拉工地。注册地是本地区项目的当地联系点；运输和工地条件按项目商定。',
          ],
        },
        {
          type: 'faq',
          label: '常见问题',
          title: '关于盖尔达耶注册地的问题',
          items: [
            { id: 'ghardaia-fleet', q: '设备停放在盖尔达耶吗？', a: '不是。设备驻扎在杰勒法基地；盖尔达耶是公司的注册地，负责协调项目，尤其是南部的项目。' },
            { id: 'ghardaia-meet', q: '可以在盖尔达耶会面吗？', a: '可以。请联系我们，在布努拉注册地、杰勒法基地或您的工地安排会面。' },
          ],
        },
        {
          type: 'cta',
          title: '项目在阿尔及利亚撒哈拉地区？',
          text: '请告诉我们地点和时间。我们将说明可以供应、调遣或钻探什么，以及从哪个基地出发。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ----------------------------------------------------------------- 洞察 */
    insights: {
      slug: 'insights',
      nav: '洞察',
      title: '洞察：阿尔及利亚的骨料、道路与设备 | ETAHG',
      description: 'SARL ETAHG 关于在阿尔及利亚从事骨料生产、道路施工、工程机械租赁、项目进场和水井钻探的实用文章，面向业主、总承包商和投资者。',
      summary: 'SARL ETAHG 关于在阿尔及利亚开展工作的文章：骨料、道路施工、设备租赁、项目进场和水井钻探。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '洞察',
          title: '面向阿尔及利亚项目的实用经验',
          lead: '由经营采石场、设备队伍和工地的人员撰写的简短、务实的文章：骨料如何生产、工地如何开辟、阿尔及利亚的地形如何影响筑路与钻井，以及联系当地合作伙伴前应准备什么。',
        },
        {
          type: 'articles',
          label: '文章',
          title: '最新文章',
          emptyText: '文章正在编写中。在此期间，请参阅我们的[服务](page:services)和[常见问题](page:faq)。',
        },
        {
          type: 'cta',
          title: '这些文章没有回答您的问题？',
          text: '请直接向我们提问。我们将根据自有采石场、设备和工地的经验作答。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '常见问题', page: 'faq', variant: 'secondary' },
          ],
        },
      ],
    },

    faq: {
      slug: 'faq',
      nav: '常见问题',
      title: '常见问题：公司、服务与合作 | ETAHG',
      description: '关于 SARL ETAHG 的问答：公司简介、所在地、细骨料供应、设备租赁、进场动员、水井钻探、配件供应，以及中资企业如何与我们合作。',
      summary: '关于 SARL ETAHG 及其服务和合作方式的常见问题。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '常见问题',
          title: '关于 SARL ETAHG 的常见问题',
          lead: '关于公司、服务及合作方式的简明、客观解答。',
        },
        {
          type: 'faq',
          label: '公司',
          title: '关于公司',
          items: [
            { id: 'what-is-etahg', q: 'SARL ETAHG 是一家什么公司？', a: 'SARL ETAHG 是一家阿尔及利亚公司，专业从事细骨料（机制砂）生产、道路施工、重型设备租赁（短租与长租）、施工进场与开工准备以及水井钻探。公司成立于 1997 年，为有限责任公司（SARL），注册于盖尔达耶省布努拉，设备基地位于杰勒法，自有采石场及石料破碎筛分站位于杰勒法以南的艾因伊贝勒（Oued Sdeur）。集团旗下还有位于阿尔及尔的重型设备配件公司 EURL KAYLE KENNY。' },
            { id: 'etahg-meaning', q: 'ETAHG 是什么意思？', a: 'ETAHG 是法文公司全称 “Entreprise de Travaux d’Aménagement Hydraulique de Ghardaïa”（盖尔达耶水利整治工程公司）的缩写，公司阿拉伯文正式名称为 شركة الأشغال لتهيئة الري بغرداية。SARL ETAHG 于 1997 年在盖尔达耶成立并在当地注册。' },
            { id: 'what-does-etahg-do', q: 'ETAHG 的业务有哪些？', a: 'SARL ETAHG 在阿尔及利亚生产细骨料、修建道路、出租和长期租赁重型设备、为新项目进场动员并钻凿水井。公司依托自有采石场和石料破碎筛分站，以及自有的挖掘机、推土机、装载机、平地机、压路机、摊铺机、沥青设备、卡车、半挂车和水井钻机开展业务；集团公司 EURL KAYLE KENNY 供应重型设备配件。' },
            { id: 'where', q: 'SARL ETAHG 位于哪里？', a: 'SARL ETAHG 的注册地址为阿尔及利亚盖尔达耶省布努拉 Cité 400 Logements, Sidi Abbaz，设备基地位于高原地区的杰勒法。自有采石场及石料破碎筛分站位于杰勒法以南的艾因伊贝勒（Oued Sdeur），集团公司 EURL KAYLE KENNY 在阿尔及尔穆罕默迪亚设有门店和配件仓库。杰勒法地处 1 号国道（RN1）沿线，RN1 是连接阿尔及尔与撒哈拉的南北主干道。' },
            { id: 'legal-form', q: 'SARL ETAHG 是什么类型的公司？', a: 'SARL ETAHG 是一家 société à responsabilité limitée（SARL），即阿尔及利亚的有限责任公司形式。公司成立于 1997 年，其商业注册号（RC）及税务识别号（NIF、NIS、AI）载于本网站的公司简介和法律声明。' },
            { id: 'name', q: '公司名称如何书写？', a: '公司法定名称为 SARL ETAHG，其中 SARL 表示公司形式。简称 ETAHG 在所有语言（包括阿拉伯语和中文）中均以拉丁大写字母书写，不作音译。' },
            { id: 'kayle-kenny-link', q: 'SARL ETAHG 与 EURL KAYLE KENNY 是什么关系？', a: 'EURL KAYLE KENNY 隶属于 SARL ETAHG 旗下，是集团的重型设备配件公司，在阿尔及尔穆罕默迪亚设有门店和配件仓库。公司作为独立供应商供应柴油发动机配件，包括 Cummins 兼容配件，与 Cummins Inc. 无任何隶属关系，亦未获其认可或授权。对 ETAHG 的合作伙伴而言，它是集团内支持设备运转的配件来源。' },
            { id: 'languages', q: '有关 ETAHG 的信息提供哪些语言版本？', a: '本网站提供英文、法文、阿拉伯文和简体中文版本，公司简介同样提供这四种语言版本。可通过电子邮件、电话或 WhatsApp 联系 SARL ETAHG；请在首次来信中注明贵方首选的沟通语言。' },
          ],
        },
        {
          type: 'faq',
          label: '服务',
          title: '服务',
          items: [
            { id: 'services-list', q: 'SARL ETAHG 提供哪些服务？', a: 'SARL ETAHG 在阿尔及利亚提供细骨料生产、道路施工、重型设备租赁（短租与长租）、施工进场与开工准备以及水井钻探服务。重型设备配件由集团公司 EURL KAYLE KENNY 供应。各项服务可单独委托，也可组合纳入同一份协议。' },
            { id: 'aggregates', q: 'ETAHG 能否为大型项目供应细骨料？', a: '可以。SARL ETAHG 在杰勒法以南艾因伊贝勒（Oued Sdeur）的自有采石场及石料破碎筛分站生产高品质细骨料，其破碎与制砂设备尤其适合需要高产量的项目。规格、数量、供货计划和检测要求按项目商定。' },
            { id: 'aggregates-uses', q: 'ETAHG 的细骨料有哪些用途？', a: 'SARL ETAHG 生产的细骨料主要用于混凝土、预制构件、砂浆、沥青混合料以及道路和场坪的粒料层。机制细骨料又称机制砂，是河砂或沙丘砂之外质量稳定的替代材料。' },
            { id: 'rental', q: 'ETAHG 是否在阿尔及利亚​出租重型设备？', a: '是的。SARL ETAHG 在阿尔及利亚出租和长期租赁自有重型设备：液压挖掘机、推土机、轮式装载机、平地机、振动压路机、沥青摊铺机、沥青设备、载重卡车和半挂车，条款按项目商定。设备从其杰勒法设备基地调遣。' },
            { id: 'rental-terms', q: 'ETAHG 的租赁和长期租赁条款是什么？', a: 'SARL ETAHG 按项目商定租赁和长期租赁条款，不采用固定条件。租期、操作手、运输、维修保养和燃油等事项与客户协商后写入合同。' },
            { id: 'fleet', q: 'ETAHG 拥有哪些设备？', a: 'SARL ETAHG 拥有采石场及石料破碎筛分站、采石场凿岩钻车、液压挖掘机、推土机、轮式装载机、平地机、振动压路机、沥青摊铺机、沥青洒布车和沥青罐车、载重卡车、自卸半挂车以及车载水井钻机。移动设备驻扎在其杰勒法基地。出于审慎考虑，本网站仅列出设备类别。' },
            { id: 'roads', q: 'ETAHG 是否承建道路？', a: '是的。道路施工是 SARL ETAHG 的起家业务：其设备主要用于修建道路，公司已在阿尔及利亚许多地区完成道路项目，涵盖从土方到沥青面层的各项工作。' },
            { id: 'mobilization', q: '什么是施工进场与开工准备？', a: '对 SARL ETAHG 而言，施工进场与开工准备是指以自有设备启动新工地：将设备运至现场、场地清理、修建施工便道和平台、完成首批土方、组织骨料供应，并在需要时钻凿水井。' },
            { id: 'drilling', q: 'ETAHG 是否提供水井钻探？', a: '是的。SARL ETAHG 拥有新近购置的车载水井钻机，可在阿尔及利亚为施工工地、农业、工业和社区钻凿水井。' },
            { id: 'regions', q: 'ETAHG 在阿尔及利亚哪些地区开展业务？', a: 'SARL ETAHG 已在阿尔及利亚许多地区完成道路项目。公司立足杰勒法和盖尔达耶，地处阿尔及尔至撒哈拉的 RN1 轴线上，可同时服务北部和南部项目；具体地点的可用性应要求确认。' },
          ],
        },
        {
          type: 'faq',
          label: '合作',
          title: '与 ETAHG 合作',
          items: [
            { id: 'foreign-companies', q: 'ETAHG 是否与外国企业合作？', a: '是的。SARL ETAHG 欢迎与在阿尔及利亚开展业务的外国企业合作，包括国际 EPC 总承包商、水泥与矿业集团、投资方和设备供应商。公司可担任项目的分包商、设备或骨料供应商、进场准备合作方或当地合作伙伴。' },
            { id: 'chinese-contractors', q: '中国承包商能否与 ETAHG 合作？', a: '可以。SARL ETAHG 欢迎与在阿尔及利亚承建项目的中国承包商和中资企业合作，可担任分包商、设备或骨料供应商、进场准备合作方或当地合作伙伴。本网站提供简体中文版；请在首次来信中注明贵方首选的沟通语言。在中国境内，建议通过电子邮件（{{email}}）联系。' },
            { id: 'subcontract', q: 'ETAHG 能否担任分包商？', a: '可以。SARL ETAHG 可为总承包商以自有设备承担明确划分的工作，如土方、路面结构层、沥青摊铺、场地整备、骨料供应或水井钻探。' },
            { id: 'quote', q: '如何向 ETAHG 询价？', a: `向 SARL ETAHG 询价时，请通过电子邮件（{{email}}）、WhatsApp 或电话（${TEL}）发送项目地点（省或最近城镇）、工作范围、所需设备或数量、工期及开始日期。` },
            { id: 'contact', q: '如何联系 ETAHG？', a: `可通过电子邮件 {{email}}，或电话、WhatsApp（${TEL}）联系 SARL ETAHG；该号码为与 EURL KAYLE KENNY 共用的集团号码。www.etahg.com 的联系页面列出了全部联系方式和场所。` },
            { id: 'profile', q: '是否有可供内部传阅的公司简介？', a: '有。SARL ETAHG 在本网站发布了可打印的公司简介，并提供 PDF 下载。' },
            { id: 'kayle-kenny', q: 'EURL KAYLE KENNY 与 Cummins 有关联吗？', a: '没有。EURL KAYLE KENNY 是 SARL ETAHG 集团的配件公司，作为独立供应商供应 Cummins 兼容配件，与 Cummins Inc. 无任何隶属关系，亦未获其认可或授权。' },
          ],
        },
        {
          type: 'cta',
          title: '还有其他问题？',
          text: '欢迎通过电子邮件、电话或 WhatsApp 直接咨询。',
          ctas: [
            { label: '发送电子邮件', kind: 'mailto', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
            { label: '联系我们', page: 'contact', variant: 'ghost' },
          ],
        },
      ],
    },

    /* --------------------------------------------------------------- CONTACT */
    contact: {
      slug: 'contact',
      nav: '联系我们',
      title: '联系我们：电子邮件、电话与 WhatsApp | ETAHG',
      description: '通过电子邮件、电话或 WhatsApp（+213 558 96 10 49）联系 SARL ETAHG。注册地盖尔达耶，设备基地杰勒法，可按需报价。',
      summary: 'SARL ETAHG 的联系方式及询价方法。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '联系我们',
          title: '联系 SARL ETAHG',
          lead: `请通过电子邮件 [{{email}}](mailto:)、电话或 WhatsApp（${TEL}）联系 SARL ETAHG。我们直接答复阿尔及利亚及国际企业的询问。`,
        },
        {
          type: 'contact',
          label: '联系',
          title: '联系方式',
          intro: '在中国境内，建议通过电子邮件与我们联系；在阿尔及利亚及其他国家，拨打下方主号码或发送 WhatsApp 消息最为快捷。该号码为与 EURL KAYLE KENNY 共用的集团号码；办公室和采石场电话及传真列于其下。',
          checklistTitle: '询问时请提供',
          checklist: [
            '贵公司名称及国家',
            '项目地点（省或最近城镇）',
            '工作范围',
            '所需设备类型或材料数量',
            '预计工期',
            '计划开工日期',
          ],
          quoteTitle: '快速询价',
          quoteText: '可通过电子邮件发送询价；在中国境外，也可打开 WhatsApp，使用预填的中英双语消息并补充详细信息。',
          quoteLabel: '立即询价',
          quoteEmailLabel: '通过电子邮件询价',
          quoteMessage: '您好，SARL ETAHG。我们希望获得报价。\nHello SARL ETAHG, I would like a quote.\n公司 / Company：\n项目地点（省）/ Project location (wilaya)：\n工作范围 / Scope of work：\n所需设备或数量 / Equipment or volumes needed：\n工期 / Duration：\n开始日期 / Start date：',
        },
        {
          type: 'prose',
          label: '国际联系',
          title: '从海外联系我们',
          paragraphs: [
            `从阿尔及利亚境外请拨打 **${TEL}**；从中国拨打时，请拨 **${TEL_CN}**。中国境内无法使用 WhatsApp，建议发送电子邮件至 [{{email}}](mailto:)，技术和商务文件也可通过该邮箱往来。`,
            '来信时请注明贵方首选的沟通语言。本网站提供英文、法文、阿拉伯文和简体中文版本。有关合作模式的更多信息，请见[国际合作](page:partners)页面。',
          ],
        },
        {
          type: 'locations',
          label: '场所',
          title: '我们的位置',
        },
        {
          type: 'faq',
          label: '问答',
          title: '联系前须知',
          from: 'faq',
          ids: ['quote', 'contact', 'languages', 'foreign-companies'],
          more: { label: '查看全部问答', page: 'faq' },
        },
      ],
    },

    /* --------------------------------------------------------------- PROFILE */
    profile: {
      slug: 'company-profile',
      nav: '公司简介',
      title: '公司简介 | ETAHG',
      description: 'SARL ETAHG 可打印公司简介：成立于 1997 年，业务范围、设备、采石场，盖尔达耶、杰勒法和艾因伊贝勒场所，注册信息及联系方式。',
      summary: 'SARL ETAHG 可打印公司简介，另提供 PDF 版。',
      layout: 'profile',
      blocks: [
        {
          type: 'hero',
          size: 'profile',
          eyebrow: '公司简介',
          title: 'SARL ETAHG 公司简介',
          lead: ENTITY,
          ctas: [{ label: '下载公司简介（PDF）', kind: 'pdf', variant: 'primary' }],
        },
        {
          type: 'prose',
          title: '公司概述',
          paragraphs: [
            '{{company}} 是依据阿尔及利亚法律设立的有限责任公司（SARL），成立于 1997 年，注册于盖尔达耶省布努拉，设备基地位于杰勒法，自有采石场及石料破碎筛分站位于杰勒法以南的艾因伊贝勒（Oued Sdeur）。公司设备为修建道路而配置，已在阿尔及利亚许多地区完成道路项目。如今，公司还供应高品质细骨料，出租和长期租赁设备，以自有设备承接新进场准备，并钻凿水井。',
          ],
        },
        {
          type: 'cards',
          title: '业务范围',
          style: 'compact',
          items: [
            { title: '骨料生产', text: '自有采石场及石料破碎筛分站生产高品质细骨料，适合高产量需求。', page: 'aggregates' },
            { title: '道路施工', text: '以自有设备完成土方、平整、压实、洒布沥青及沥青面层施工。', page: 'roads' },
            { title: '设备租赁（短租／长租）', text: '挖掘机、推土机、装载机、平地机、压路机、摊铺机、沥青设备、卡车、半挂车。', page: 'rental' },
            { title: '施工进场与开工准备', text: '开辟场地、施工便道、平台、土方、骨料供应。', page: 'mobilization' },
            { title: '水井钻探', text: '自有车载水井钻机；可按需为工地、农业、工业及社区钻凿水井。', page: 'drilling' },
            { title: '配件供应', text: 'EURL KAYLE KENNY（阿尔及尔）：重型柴油发动机配件。', page: 'parts' },
          ],
        },
        {
          type: 'facts',
          title: '公司概况',
        },
        {
          type: 'locations',
          title: '场所',
        },
        {
          type: 'prose',
          title: '与国际企业合作',
          paragraphs: [
            '施工分包、设备租赁（短租／长租）、骨料供应、进场准备、水井钻探，以及阿尔及利亚项目的当地合作。联系邮箱：{{email}}。本简介另有英文、法文和阿拉伯文版本。',
          ],
          note: DISCLAIMER,
        },
      ],
    },

    /* ----------------------------------------------------------------- LEGAL */
    legal: {
      slug: 'legal',
      nav: '法律声明',
      title: '法律声明与隐私政策 | ETAHG',
      description: 'SARL ETAHG 网站的法律声明与隐私政策：网站发布方、托管服务、不使用 Cookie、不做追踪，以及我们如何处理您发送给我们的联系信息。',
      summary: 'www.etahg.com 的法律声明与隐私政策。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '法律信息',
          title: '法律声明与隐私政策',
          lead: '关于本网站发布方以及我们如何处理您的数据的信息。',
        },
        {
          type: 'facts',
          variant: 'legal',
          label: '发布方',
          title: '网站发布方',
        },
        {
          type: 'prose',
          label: '托管',
          title: '网站托管',
          paragraphs: [
            '本网站为静态网站，托管于 GitHub Pages，该服务由 GitHub, Inc. 提供，地址：88 Colin P Kelly Jr St, San Francisco, CA 94107, United States。',
          ],
        },
        {
          type: 'prose',
          label: '隐私',
          title: '隐私政策',
          paragraphs: [
            '**不使用 Cookie，不做追踪。**本网站不使用 Cookie、统计分析、广告或追踪工具，也没有联系表单。我们不通过本网站收集个人数据。',
            '**字体。**本网站中文页面使用访问者设备自带的系统字体，其他语言页面的字体由本网站自行提供，不从第三方服务器加载字体，也不会因字体向第三方传送您的 IP 地址。',
            '**联系我们。**如您通过电话、WhatsApp 或电子邮件与我们联系，我们仅将您发送的信息用于答复您的询问，以及建立和管理可能的业务关系。WhatsApp 由 WhatsApp LLC／Meta 运营，适用其自身的隐私政策。',
            `**您的权利。**您可随时通过 [{{email}}](mailto:) 或 [${TEL}](tel:) 联系我们，要求查阅、更正或删除您发送给我们的个人数据。`,
          ],
        },
        {
          type: 'prose',
          label: '内容',
          title: '知识产权与责任',
          paragraphs: [
            '除另有说明外，本网站的文字、插图和设计归 {{company}} 所有。未经事先许可，不得转载。',
            '本网站信息仅供一般参考，不构成合同要约；任何服务的条款均按项目以书面形式约定。一般性技术说明（例如关于骨料、道路施工或地质的说明）介绍的是通行做法，不构成任何具体项目的技术规范。',
            '第三方名称仅用于识别。EURL KAYLE KENNY 为独立配件供应商，与 Cummins Inc.（康明斯公司）无任何隶属关系，亦未获其认可或授权。',
          ],
        },
      ],
    },
  },

  /* ================================================================== 文章 */
  // 「洞察」文章（结构说明：en.mjs 开头的 ARTICLE）。仅限一般性经验，不得超出 BRIEF.md 的事实。
  articles: {
    'mobilization-checklist': {
      slug: 'mobilizing-heavy-equipment-algeria-checklist',
      nav: '在阿尔及利亚为新工地调遣重型设备',
      title: '在阿尔及利亚为新工地调遣重型设备 | ETAHG',
      description: '在阿尔及利亚将重型设备调往新工地之前应准备什么：便道、平台、水源、骨料供应，以及当地合作伙伴规划车队所需的信息。',
      summary: '阿尔及利亚工地最初几周的实用清单：便道、平台、水源、骨料供应，以及当地合作伙伴规划车队所需的信息。',
      eyebrow: '项目进场',
      h1: '在阿尔及利亚为新工地调遣重型设备：实用清单',
      lead: '最初几周决定项目的节奏。本清单源自{{company}}用自有设备开辟工地的做法，列出通常在第一辆半挂车离开基地之前就应落实的事项。',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'mobilization',
      related: ['mobilization', 'rental', 'aggregates'],
      blocks: [
        {
          type: 'prose',
          title: '为什么进场需要单独的计划',
          paragraphs: [
            '在新工地上，设备、操作人员、燃油、水和材料到位之前，什么也生产不了。在阿尔及利亚，基地与工地之间的距离可能很远，地形从海岸到撒哈拉差异巨大，而工地在第一天往往既没有便道，也没有平台和水源。把开工当作一个独立的项目，用一份书面商定的简短流程来管理，通常能避免代价最高的停工周。',
          ],
        },
        {
          type: 'steps',
          title: '我们遵循的流程',
          intro: '六个步骤，按项目调整，并在任何设备移动之前与客户商定。',
          items: [
            { title: '现场与范围审查', text: '共同审查位置、交通、地形、工程量和进度，并写明第一天必须就绪的事项清单。' },
            { title: '设备与资源计划', text: '按工作范围匹配设备类别、操作人员和物资；进场条件按项目商定。' },
            { title: '运输', text: '设备在基地装上半挂车，或直接从另一工地转场；车队日期取决于交通条件。' },
            { title: '开辟工地', text: '清场、修建便道、设备和设施平台，以及首批土方。' },
            { title: '材料与水', text: '组织骨料供应；若工地没有水，可用车载钻机钻一口井。' },
            { title: '生产与跟进', text: '设备按计划作业直至移交，或在租赁或分包协议下继续工作。' },
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          title: '获取进场方案需发给我们的信息',
          list: [
            '工地位置（省份，如可能请附坐标或地图链接）',
            '第一阶段的范围：清场、便道、平台、土方、骨料、水',
            '大致工程量和计划开工日期',
            '操作人员、燃油和住宿由客户提供，还是希望由我们提供',
          ],
          cta: { label: '联系我们', page: 'contact' },
        },
        {
          type: 'prose',
          title: '地形改变计划',
          paragraphs: [
            '沿海工地土质黏重、多雨，重型车辆通行前需要排水和路基处理。山区工地意味着岩石开挖、更陡的便道和更慢的车队。高原地区距离漫长，骨料需求高。在撒哈拉，沙、高温和缺水使自给自足成为首要要求：燃油、配件、水和住宿都随工地一起移动。弄清适用哪种情况并据此规划，就是大部分工作。',
          ],
        },
        {
          type: 'faq',
          title: '常见问题',
          items: [
            { id: 'mob-duration', q: '进场需要多长时间？', a: '取决于与基地的距离、交通条件和第一阶段的范围。运输、工期和操作人员按项目商定；现场审查完成后我们会给出日期。' },
            { id: 'mob-rent', q: '工地开辟后设备可以继续租用吗？', a: '可以。进场后，同一批设备可按租赁协议继续作业，或以分包形式继续施工，条件按项目商定。' },
          ],
        },
        {
          type: 'cta',
          title: '即将开辟工地？',
          text: '请把位置和工作范围发给我们。我们将答复可提供的设备、材料和流程。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '项目进场', page: 'mobilization', variant: 'secondary' },
          ],
        },
      ],
    },
  },
};
