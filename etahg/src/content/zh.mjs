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
    phonesLabel: '采石场电话',
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
      phones: '采石场电话',
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
      detailsLink: '查看详情',
      geoLabel: 'GPS',
      regionNames: { 'Ghardaïa': '盖尔达耶', Djelfa: '杰勒法', Algiers: '阿尔及尔' },
      map: {
        title: 'SARL ETAHG 各地点示意图：阿尔及尔—杰勒法—盖尔达耶轴线',
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
      insightsLabel: '文章',
      forService: '相关文章',
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
          label: '地点',
          title: '经营布局',
          intro: '四处地点分布在阿尔及尔—杰勒法—盖尔达耶走廊上，连接地中海沿岸的北部与撒哈拉：设备与骨料生产位于高原地区，注册地位于撒哈拉北部，配件供应位于首都。',
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
          type: 'articles',
          label: '文章',
          title: '面向阿尔及利亚项目的​实用知识',
          intro: '这些文章来自我们自己的采石场、设备和工地：骨料规格、各类地形上的路面结构层、设备租赁还是购买、在草原和沙漠开辟工地、水井的钻凿与审批，以及新进入者需要了解的分包和公共采购规则。',
          limit: 3,
          more: { label: '全部文章', page: 'insights' },
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
            '阿尔及利亚的天然砂主要来自河床（为保护水道，开采受到限制）或撒哈拉沙丘。沙丘砂（风积砂）储量丰富，但颗粒极细、浑圆且粒径单一。单独使用时，往往会增加混凝土需水量，并降低沥青混合料的稳定性。',
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
            { id: 'rent-what', q: '在阿尔及利亚可以向 ETAHG ​租赁哪些设备？', a: 'SARL ETAHG 在阿尔及利亚出租和长期租赁自有重型设备：液压挖掘机、推土机、轮式装载机、平地机、振动压路机、沥青摊铺机、沥青设备、载重卡车和半挂车。设备从其杰勒法基地调遣，条款按项目商定。' },
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
            { id: 'parts-link', q: 'EURL KAYLE KENNY 与 SARL ETAHG 是如何关联的？', a: 'EURL KAYLE KENNY 隶属于 SARL ETAHG 旗下，是集团的重型设备配件公司，位于阿尔及尔穆罕默迪亚。' },
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
          label: '地点',
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
            '制度环境也有利于这种合作：阿尔及利亚 2023 年《公共采购法》给予阿尔及利亚资本控股企业 25% 的优惠幅度，并要求参加指定项目国际招标的外国投标人承诺与此类企业建立合作关系；公共采购条例则将分包比例上限定为合同金额的 40%，且每一家分包商均须事先获得批准。我们的[外国承包商进入阿尔及利亚市场的​准备清单](page:foreign-contractor-checklist)和[阿尔及利亚公共工程分包解析](page:subcontracting-algeria)两篇文章对这些规则作了概括性说明。',
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
      summary: 'SARL ETAHG 公司简介：公司形式、业务、地点及集团。',
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
            '{{company}} 是依据阿尔及利亚法律设立的有限责任公司（SARL），成立于 1997 年，注册地址为盖尔达耶省布努拉 Cité 400 Logements, Sidi Abbaz。公司设备基地位于杰勒法；自有采石场及石料破碎筛分站（Carrière Djellal El Gharbi）位于杰勒法以南的艾因伊贝勒（Oued Sdeur），公司在此开采岩石并破碎为高品质细骨料。简称 ETAHG 在所有语言中均使用拉丁字母书写，是法文全称 Entreprise de Travaux d’Aménagement Hydraulique de Ghardaïa 的缩写，与其他首字母相近的公司没有任何关系。',
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
          label: '地点',
          title: '我们的地点',
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
      nav: '公司地点',
      title: '公司地点：盖尔达耶、杰勒法与阿尔及尔 | ETAHG',
      description: 'SARL ETAHG 的经营地点：注册地在布努拉（盖尔达耶省），设备基地在杰勒法，采石场在 Oued Sdeur，集团配件门店在阿尔及尔。',
      summary: 'SARL ETAHG 及其集团在阿尔及尔—杰勒法—盖尔达耶轴线（RN1）上的各个地点，每个运营基地均有专页。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '公司地点',
          title: '我们在阿尔及利亚南北之间的​经营地点',
          lead: '{{company}} 在连接阿尔及尔与撒哈拉的主干道 1 号国道（RN1）沿线拥有两个自有基地：位于撒哈拉北部盖尔达耶省布努拉的注册地，以及位于高原地区杰勒法的设备基地；公司自有采石场和石料破碎筛分站位于杰勒法以南艾因伊贝勒附近的 Oued Sdeur。集团配件公司 EURL KAYLE KENNY 位于阿尔及尔穆罕默迪亚（Mohammadia）。',
        },
        {
          type: 'locations',
          label: '地点',
          title: 'RN1 走廊沿线的四个地点',
          intro: '高原地区的设备基地和撒哈拉北部的注册地各有专页：那里有什么、哪些服务从那里出发、周边地形如何、怎样到达以及联系谁。',
        },
        {
          type: 'prose',
          label: '区位意义',
          title: '通往南方公路上的​经营布局',
          paragraphs: [
            '1 号国道（RN1）从阿尔及尔出发，翻越泰勒阿特拉斯山脉，穿过高原地区的杰勒法和拉格瓦特，经盖尔达耶南下撒哈拉，通往埃尔梅尼亚（El Menia）和深南地区。杰勒法距首都约 300 公里，是设备停放、保养和大多数车队出发的地方；再往南约 300 公里的盖尔达耶，是公司 1997 年成立和日常管理的所在地。北部的项目从杰勒法沿同一条公路北上即可到达，撒哈拉的项目则沿公路南下，由盖尔达耶的注册地作为当地联系点。骨料来自两地之间公司自有的破碎站，发动机配件则来自阿尔及尔。',
          ],
        },
        {
          type: 'cta',
          title: '哪个基地​离您的项目最近？',
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
      nav: '杰勒法：设备基地与采石场',
      title: '阿尔及利亚杰勒法设备基地与采石场 | ETAHG',
      description: 'SARL ETAHG 杰勒法设备基地及艾因伊贝勒 Oued Sdeur 采石场与破碎站：RN1 沿线的设备驻地，提供设备租赁、细骨料供应与水井钻探。',
      summary: 'SARL ETAHG 的杰勒法基地：高原地区的设备基地，以及艾因伊贝勒附近 Oued Sdeur 的采石场和石料破碎筛分站，是设备租赁、进场动员、道路施工和骨料配送的出发点。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '杰勒法，杰勒法省',
          title: '杰勒法：RN1 轴线上的​设备基地与采石场',
          lead: '{{company}} 的重型设备驻扎在杰勒法的设备基地，细骨料则产自公司位于市区以南艾因伊贝勒附近 Oued Sdeur 的自有采石场和石料破碎筛分站 Carrière Djellal El Gharbi。杰勒法位于高原地区，海拔约 1,100 米，地处 1 号国道（RN1）沿线、阿尔及尔以南约 300 公里，设备和材料可就近服务南北两个方向的项目。',
          illustration: 'excavator',
        },
        {
          type: 'place',
          label: '设备基地',
          title: '杰勒法基地有什么',
          paragraphs: [
            '基地是筑路设备的驻地：液压挖掘机、推土机、轮式装载机、平地机、振动压路机、沥青摊铺机、沥青洒布车和沥青罐车、载重卡车和自卸半挂车、采石场用的露天凿岩钻车以及车载水井钻机。设备在项目间隙于此停放、保养并做运输准备；半挂车装载、车队准备和租赁设备交接也在基地进行。',
            '重型柴油发动机的配件由集团公司 EURL KAYLE KENNY（阿尔及尔）供应，从杰勒法出发的设备由集团内部提供保障。在筹备租赁或分包时，可商议到基地查看各类设备。',
          ],
        },
        {
          type: 'prose',
          label: '采石场',
          title: '艾因伊贝勒 Oued Sdeur 的​采石场与破碎站',
          paragraphs: [
            '在杰勒法市以南的艾因伊贝勒镇，{{company}} 经营自有采石场和石料破碎筛分站，即位于 Oued Sdeur 的 Carrière Djellal El Gharbi。破碎站的破碎和制砂设备生产高品质细骨料，用于混凝土、沥青以及道路和平台的粒料层，尤其适合需要高产量的项目。材料由公司自有卡车和自卸半挂车装运配送；配送或在破碎站自提按项目商定。',
            `采石场设有专线电话 +213 660 36 75 50 和 +213 660 36 75 51 以及传真 +213 27 90 46 13，受理供货咨询和配送事宜；其他事项请拨打集团号码 ${TEL} 或发送邮件至 {{email}}。`,
          ],
        },
        {
          type: 'cards',
          label: '服务',
          title: '从杰勒法提供的服务',
          intro: '凡需要设备的工作都从基地出发；凡需要石料的工作都从采石场出发。',
          style: 'compact',
          items: [
            { page: 'rental', title: '设备租赁（短租／长租）', text: '挖掘机、推土机、装载机、平地机、压路机、摊铺机、沥青车辆、卡车和半挂车，在基地交接或送达工地，条款按项目商定。' },
            { page: 'aggregates', title: '细骨料', text: '来自 Oued Sdeur 破碎站的机制砂和细骨料，试验要求在供货前商定，由公司自有卡车运输。' },
            { page: 'mobilization', title: '施工进场与开工准备', text: '设备和操作手组成车队开辟新工地：施工便道、平台、首批土方及骨料供应。' },
            { page: 'roads', title: '道路施工', text: '以整套设备完成土方、路面结构层和沥青面层，可直接承包或分包。' },
            { page: 'drilling', title: '水井钻探', text: '车载钻机可前往高原地区和南部的工地。' },
          ],
        },
        {
          type: 'prose',
          label: '地形',
          title: '杰勒法周边的高原地区',
          paragraphs: [
            '杰勒法省位于高原地区，即北面泰勒阿特拉斯山脉与南面撒哈拉阿特拉斯山脉之间的广阔草原，市区周围耸立着乌拉德纳伊勒（Ouled Naïl）山脉。地势开阔，线路平直而漫长，冬季寒冷，有霜冻并偶有降雪，夏季炎热干燥，多风。对道路施工而言，这意味着长距离的线性工地、大量的骨料需求和较短的沥青层施工季；对钻井而言，这里是一个向斜构造，其含水层补给着草原上的大多数水井。公司位于市区以南的自有采石场直接解决了骨料问题，而邻近的撒哈拉阿特拉斯山脉则带来了本地区筑路所必然涉及的岩石开挖、路堤和坡度。',
          ],
        },
        {
          type: 'prose',
          label: '交通',
          title: 'RN1 沿线的交通与物流',
          paragraphs: [
            '基地由 1 号国道（RN1）到达，该国道北接阿尔及尔和泰勒地区，南连拉格瓦特、盖尔达耶和撒哈拉；Oued Sdeur 采石场位于同一条公路旁、市区以南通往艾因伊贝勒的方向。重型设备以半挂车沿此轴线运输，或穿越高原经通往姆西拉（M’Sila）、比斯克拉（Biskra）、提亚雷特（Tiaret）和布萨达（Bou Saâda）的公路前往工地。高原地区和撒哈拉北部的工地一般一天车程即可送达。运输、工期和操作手按项目商定。',
            '如需参观，请先与我们联系：我们将安排在基地或采石场的时间，并可结合参观讨论贵方项目。',
          ],
        },
        {
          type: 'faq',
          label: '常见问题',
          title: '关于杰勒法基地的问题',
          items: [
            { id: 'djelfa-depot', q: 'ETAHG 在杰勒法有设备基地吗？', a: '有。SARL ETAHG 的重型设备驻扎在杰勒法省杰勒法市的设备基地，位于阿尔及尔与撒哈拉之间的 RN1 轴线上；设备在此保养，并从这里调往租赁、进场动员和道路施工项目。' },
            { id: 'djelfa-quarry', q: 'ETAHG 的采石场在哪里？', a: 'SARL ETAHG 的采石场和石料破碎筛分站 Carrière Djellal El Gharbi 位于杰勒法省艾因伊贝勒附近的 Oued Sdeur，在杰勒法市以南；生产用于混凝土、沥青和道路结构层的细骨料，联系电话 +213 660 36 75 50 / 51。' },
            { id: 'djelfa-collect', q: '我们可以用自己的卡车到采石场自提骨料吗？', a: '可以安排在破碎站自提，也可由公司自有卡车和自卸半挂车配送；粒级、数量、装车时间和验收方式在供货开始前商定。' },
            { id: 'djelfa-deliver', q: 'ETAHG 向哈西巴赫巴赫（Hassi Bahbah）、拉格瓦特或其他城镇配送骨料吗？', a: '向杰勒法省及邻近省份工地的配送按项目报价，依据与 Oued Sdeur 破碎站的距离、数量和配送节奏确定；请提供工地位置和所需粒级，以便我们报出到场价格。' },
            { id: 'djelfa-visit', q: '租赁前可以到基地查看设备吗？', a: '可以。请联系我们安排参观杰勒法基地；我们将展示适合贵方项目的设备类别，并讨论运往工地的事宜和条款。' },
            { id: 'djelfa-regions', q: '杰勒法基地服务哪些地区？', a: '从杰勒法出发，SARL ETAHG 沿 RN1 向北部和撒哈拉方向、并穿越高原地区进行调遣；公司已在阿尔及利亚许多地区修建道路，具体地点的可用性可应要求确认。' },
          ],
        },
        {
          type: 'cta',
          title: '项目在高原地区​或更南的地方？',
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
      nav: '盖尔达耶：注册地',
      title: '阿尔及利亚盖尔达耶公司注册地（布努拉） | ETAHG',
      description: 'SARL ETAHG 的注册地位于盖尔达耶省布努拉 Cité 400 Logements, Sidi Abbaz：负责合同签署、行政管理以及撒哈拉地区项目的协调。',
      summary: 'SARL ETAHG 位于盖尔达耶布努拉的注册地，公司 1997 年在此成立：负责合同与行政管理，也是阿尔及利亚撒哈拉地区项目的当地联系点。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '布努拉，盖尔达耶省',
          title: '盖尔达耶：撒哈拉北部的注册地',
          lead: '{{company}} 于 1997 年经公证在盖尔达耶成立，注册地设在姆扎布河谷布努拉的 Cité 400 Logements, Sidi Abbaz。ETAHG 中的 “G” 即代表盖尔达耶（Ghardaïa）。公司在此进行行政管理，这里也是公司承接南部项目的天然起点。',
          illustration: 'drill-rig',
        },
        {
          type: 'place',
          label: '办公地',
          title: '盖尔达耶注册地有什么',
          paragraphs: [
            '注册地负责公司的行政管理、合同、开票，以及阿尔及利亚有限责任公司的各项登记义务：商业注册、税务和社保登记。与业主和合作伙伴的会议在此或杰勒法基地举行，视项目所在地而定；用于分包审批或尽职调查的文件也在此准备。',
            '盖尔达耶也让公司扎根南部：从注册地出发，驻扎在杰勒法的设备沿 RN1 被派往撒哈拉工地，Oued Sdeur 破碎站的骨料在此组织配送，并为本地区的工地、农场和社区安排水井钻探——在这一地区，水本身就是一个项目。',
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
            { page: 'drilling', title: '水井钻探', text: '为工地、农业和工业钻凿水井，车载钻机从杰勒法前往现场。' },
            { page: 'mobilization', title: '向南进场', text: '车队从杰勒法沿 RN1 前往撒哈拉工地，注册地作为当地联系点。' },
            { page: 'aggregates', title: '骨料供应', text: 'Oued Sdeur 破碎站的细骨料由公司自有运输车辆送达南部项目。' },
            { page: 'roads', title: '南部道路施工', text: '在撒哈拉条件下为道路、进场道路和工业场地完成土方、平台和路面结构层。' },
          ],
        },
        {
          type: 'prose',
          label: '地形',
          title: '盖尔达耶周边的​撒哈拉北部',
          paragraphs: [
            '盖尔达耶位于姆扎布河谷，海拔约 500 米，河谷切入撒哈拉北部的岩质高原（hamada）。该地区兼有石质高地、数月干涸却可在数小时内暴涨的干河谷（wadi）以及沙地；降雨稀少，夏季酷热，冬夜寒冷。用水来自深层含水层。在此施工必须按自给自足规划：燃油、配件、住宿和用水都随工地一起移动，骨料则需从有岩石的地方运来。正因如此，进场动员、从公司自有破碎站运输骨料以及水井钻探是本地区最常委托我们的服务。',
          ],
        },
        {
          type: 'prose',
          label: '交通',
          title: 'RN1 沿线的交通与物流',
          paragraphs: [
            '布努拉是盖尔达耶城区的市镇之一，位于拉格瓦特和杰勒法以南的 RN1 沿线。同一条公路继续向南通往埃尔梅尼亚（El Menia）和深南地区，其他国道则向东通往瓦尔格拉（Ouargla）和石油产区，向西通往埃勒拜耶德（El Bayadh）。盖尔达耶距阿尔及尔公路里程约 600 公里，距拉格瓦特和瓦尔格拉各约 200 公里。设备从杰勒法基地沿 RN1 抵达撒哈拉工地；注册地是本地区项目的当地联系点，运输和工地条件按项目商定。',
            '如需到访，请先来信或来电；我们在布努拉注册地接待合作伙伴，并可陪同前往本地区的工地。',
          ],
        },
        {
          type: 'faq',
          label: '常见问题',
          title: '关于盖尔达耶注册地的​问题',
          items: [
            { id: 'ghardaia-office', q: 'SARL ETAHG 的总部在哪里？', a: 'SARL ETAHG 的注册地位于阿尔及利亚盖尔达耶省布努拉 Cité 400 Logements, Sidi Abbaz，公司于 1997 年经公证在此成立；其商业注册号和税务识别号载于公司简介和法律声明。' },
            { id: 'ghardaia-fleet', q: '设备停放在盖尔达耶吗？', a: '不是。设备驻扎在杰勒法基地；盖尔达耶是公司的注册地，负责协调项目，尤其是南部的项目，设备从杰勒法沿 RN1 调遣。' },
            { id: 'ghardaia-eptpg', q: 'ETAHG 是否隶属于某家公共企业或更大的集团？', a: '不是。SARL ETAHG（Entreprise de Travaux d’Aménagement Hydraulique de Ghardaïa）是一家 1997 年成立的独立民营有限责任公司，不是任何公共企业或集团的子公司，与任何首字母相近的公共企业或集团均无关系。' },
            { id: 'ghardaia-south', q: 'ETAHG 在撒哈拉各省开展业务吗？', a: '依托盖尔达耶的注册地和杰勒法的设备基地，SARL ETAHG 可沿 RN1 向南调遣；公司已在阿尔及利亚许多地区修建道路，撒哈拉具体地点的可用性可应要求确认。' },
            { id: 'ghardaia-meet', q: '可以在盖尔达耶会面吗？', a: '可以。请联系我们，在布努拉注册地、杰勒法基地或贵方工地安排会面。' },
          ],
        },
        {
          type: 'cta',
          title: '项目在​阿尔及利亚撒哈拉地区？',
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
      title: '洞察：在阿尔及利亚开展项目的实用知识 | ETAHG',
      description: 'SARL ETAHG 面向在阿尔及利亚施工的承包商撰写的实用文章：骨料规格、路面结构层、设备租赁、施工进场、水井钻探与分包规则。',
      summary: 'SARL ETAHG 关于在阿尔及利亚开展工作的文章：骨料规格、道路施工、设备租赁、施工进场、水井钻探、分包以及外国承包商应了解的规则。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '洞察',
          title: '面向阿尔及利亚项目的​实用知识',
          lead: '{{company}} 从杰勒法和盖尔达耶经营采石场、筑路设备队伍和水井钻机，面向外国承包商和阿尔及利亚业主提供服务。这些文章正是这些经验的书面总结：骨料如何规定和生产，阿尔及利亚各类地形上的道路如何分层，什么时候租赁优于购买，草原和沙漠中的工地如何开辟，水井如何钻凿和审批，以及分包和公共采购对新进入者意味着什么。内容仅为一般性介绍，力求每篇文章都能独立阅读、各自有用。',
        },
        {
          type: 'articles',
          label: '文章',
          title: '全部文章',
          emptyText: '文章正在编写中。在此期间，请参阅我们的[服务](page:services)和[常见问题](page:faq)。',
        },
        {
          type: 'cta',
          title: '这些文章没有回答​您的问题？',
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
            { id: 'etahg-meaning', q: 'ETAHG 是什么意思？', a: 'ETAHG 是法文公司全称 “Entreprise de Travaux d’Aménagement Hydraulique de Ghardaïa”（盖尔达耶水利整治工程公司）的缩写，公司阿拉伯文正式名称为 شركة الأشغال لتهيئة الري بغرداية。SARL ETAHG 于 1997 年在盖尔达耶成立并在当地注册，是一家独立的民营企业，不是任何公共企业或集团的子公司，与任何首字母相近的公共企业或集团均无关系。' },
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
          label: '地点',
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
          title: '公司地点',
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
    'aggregate-specifications': {
      slug: 'aggregate-specifications-algeria',
      nav: '阿尔及利亚骨料规格：粒级、试验与​向供应商提问',
      title: '阿尔及利亚骨料规格：试验与粒级 | ETAHG',
      description: '阿尔及利亚骨料如何规定：d/D 粒级表示法、EN 12620／13242／13043 标准、砂当量等常见试验项目，以及向供应商询价时应提供的信息。SARL ETAHG 骨料采购指南。',
      summary: '阿尔及利亚骨料规格采购指南：粒级表示法、常见试验（级配、砂当量、亚甲蓝、洛杉矶磨耗、Micro-Deval）、合同引用的标准，以及询价单应包含的内容。',
      eyebrow: '骨料',
      h1: '阿尔及利亚骨料规格：粒级、试验与​向供应商提问',
      lead: '混凝土、沥青和道路结构层对所用石料各有不同要求。本指南由 {{company}} 撰写，公司在杰勒法省自有采石场和破碎站生产细骨料；文中说明阿尔及利亚规范如何描述骨料，以及如何向供应商提出正确的问题。',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'aggregates',
      related: ['aggregates', 'roads'],
      blocks: [
        {
          type: 'prose',
          title: '粒级的写法：d/D 表示法',
          paragraphs: [
            '骨料以大部分颗粒所处的最小和最大筛孔尺寸命名，写作 d/D，单位为毫米。0/3 是颗粒通过 3 mm 筛的砂；3/8 是在 3 mm 筛上截留、通过 8 mm 筛的细碎石（gravillon）；0/31.5 则是从石粉到 31.5 mm 的连续级配混合料。这种表示法并不保证每一颗颗粒都在范围之内：标准允许一定比例的超粒径和欠粒径，因此实验室核查的是级配曲线，而不只是名称。',
            '在阿尔及利亚，房建和道路工程最常要求的粒级一般是 0/3 至 0/5 的砂，用于混凝土的 3/8、8/15 和 15/25 碎石，以及用于无结合料路面结构层的 0/20 和 0/31.5 连续级配料。沥青混合料有自己的一套粒级，通常是 0/2 或 0/3 机制砂配合 2/6、6/10 和 10/14 碎石。具体尺寸由项目技术规范（CCTP）确定，而不是由供应商决定。',
          ],
        },
        {
          type: 'prose',
          title: '阿尔及利亚合同​引用哪些标准',
          paragraphs: [
            '阿尔及利亚大多数项目规范用欧洲标准的术语描述骨料，或直接引用，或通过阿尔及利亚国家标准化机构（IANOR）发布的、与之基本一致的阿尔及利亚国家标准（NA）。三个文本对应三种主要用途：EN 12620 为混凝土用骨料，EN 13242 为道路结构层用的无结合料及水硬性结合料处治材料，EN 13043 为沥青混合料用骨料。法国补充标准 NF P 18-545 按用途将各项要求归为代码（A、B、C、D），也被广泛引用；较早的规范可能仍引用原法国 P 18 系列标准。',
            '对买方而言，实际后果很简单：规范会为每项性能指定一个类别（例如级配类别、细粒含量类别、强度类别），供应商的试验报告则应逐项给出结果。当合同只引用标准而未写明类别时，最好在订货前向监理工程师确认适用的数值，使双方按同一阈值进行试验。',
          ],
        },
        {
          type: 'table',
          title: '试验报告上会出现的​试验项目',
          intro: '下列名称为阿尔及利亚实验室和规范所用；括注欧洲试验标准供参考。',
          caption: '常见骨料试验、测定内容及其意义',
          head: ['试验', '测定内容', '意义'],
          rows: [
            ['级配（granulométrie，EN 933-1）', '材料的筛分曲线', '混凝土和易性、路面结构层压实、沥青配合比设计'],
            ['砂当量（équivalent de sable，EN 933-8）', '砂的洁净度：黏土类细粒的比例', '黏土类细粒会削弱混凝土和沥青；混凝土用砂通常要求 60–70 左右'],
            ['亚甲蓝值（bleu de méthylène，EN 933-9）', '细粒中黏土的活性', '对细粒含量高的机制砂，是砂当量的补充'],
            ['洛杉矶磨耗（EN 1097-2）', '抗冲击破碎能力', '基层、沥青面层及重载交通下的混凝土'],
            ['Micro-Deval 磨耗（EN 1097-1）', '有水条件下的抗磨耗能力', '面层、暴露于交通和潮湿的无结合料层'],
            ['针片状含量（coefficient d’aplatissement，EN 933-3）', '扁平颗粒的比例', '扁平颗粒难以压实，在沥青中易碎'],
            ['密度与吸水率（EN 1097-6）', '颗粒密度与开口孔隙率', '配合比设计、混凝土和沥青的需水量'],
            ['细度模数', '概括砂曲线的单一数值', '混凝土一般宜用 2.2–2.8 左右的砂；沙丘砂远比这细'],
          ],
        },
        {
          type: 'prose',
          title: '机制砂、河砂还是沙丘砂',
          paragraphs: [
            '阿尔及利亚北部可开采的天然砂已所剩无几：多年来干河谷采砂受到限制，而南部的沙丘砂（风积砂）极细，细度模数低，在混凝土中需水量大。因此，用破碎筛分站从石灰岩或其他硬岩生产的机制砂已成为通行的解决方案。机制砂颗粒棱角分明，有利于混合料强度，其石粉含量在破碎站受控，而不是听凭河流决定。',
            '阿尔及利亚对石灰岩机制砂普通混凝土和砂浆的研究一般发现，洁净石灰石粉含量在 10% 至 15% 左右最佳，部分试验系列中高至 20% 左右仍可接受；但规范仍按标准规定的类别对混凝土用砂的石粉含量设定上限，破碎站必须按该数值供货。这也是为什么对这种材料而言亚甲蓝试验与砂当量同等重要。用机制砂与沙丘砂掺配以修正曲线的做法也有充分的文献记载。实践中，配合比由项目实验室决定；供应商的职责是保证每一车砂的曲线和洁净度稳定一致。',
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          title: '询价单应包含的内容',
          list: [
            '所需粒级（d/D）及各自用途：混凝土、沥青、基层、底基层、回填',
            '规范引用的标准或类别，或相关 CCTP 页面的复印件',
            '大致总量以及每月或每周的配送量',
            '工地位置（省份及最近城镇），以及拟采用配送还是在破碎站自提',
            '业主实验室在破碎站取样、到货取样还是两者兼有',
          ],
          cta: { label: '索取报价', page: 'contact' },
        },
        {
          type: 'prose',
          title: '如何解读供应商的答复',
          paragraphs: [
            '可信的答复会写明材料来自哪个采石场和破碎站，附上所报粒级的近期试验结果，并说明生产和库存如何组织以保证配送量。它也会说明不涵盖的内容：在项目实验室完成试拌之前，供应商不能承诺某种砂一定适合某个混凝土配方，而且应当如实说明。试验要求、取样频率和验收方法最好在首次交货前写入供货协议。',
            '还要问运输。骨料每吨又重又便宜，运距往往比出厂价更重要。拥有自有卡车和半挂车的供应商可以针对贵方地点报出每吨到场价并承诺配送节奏；依赖第三方运输的供应商未必能做到。',
          ],
        },
        {
          type: 'faq',
          title: '常见问题',
          items: [
            { id: 'agg-what-is-0-3', q: '骨料的 0/3 或 3/8 是什么意思？', a: '0/3 是颗粒通过 3 mm 筛的砂，3/8 是在 3 mm 筛上截留、通过 8 mm 筛的细碎石。两个数字分别是该粒级的下限和上限筛孔尺寸（毫米），标准对超粒径和欠粒径规定了允许偏差。' },
            { id: 'agg-standard', q: '阿尔及利亚混凝土用骨料适用哪个标准？', a: '阿尔及利亚规范一般对混凝土骨料采用 EN 12620，或直接引用，或通过 IANOR 与之一致的阿尔及利亚 NA 标准，或与法国 NF P 18-545 并用，并指定级配、细粒含量和强度的类别。每个项目的合同技术规范（CCTP）会写明适用的文本和类别。' },
            { id: 'agg-sand-equivalent', q: '砂当量多少算合格？', a: '砂当量高于 60 左右一般表示砂较洁净，阿尔及利亚的混凝土规范通常按暴露等级要求 60–70 的数值。对石粉含量高的机制砂，还要用亚甲蓝试验判断细粒是否有害。' },
            { id: 'agg-crushed-sand-concrete', q: '机制砂可以用于混凝土吗？', a: '可以。由于天然砂稀缺，机制砂在阿尔及利亚的混凝土中广泛使用；阿尔及利亚对石灰岩机制砂的研究一般发现，当细粒是石灰石粉而非黏土时，石粉含量在 10% 至 15% 左右最佳，部分研究中高至 20% 左右仍可接受；应供应的类别由规范确定。配方由项目实验室通过试拌确认。' },
            { id: 'agg-tests-who', q: '骨料由谁试验，供应商还是业主？', a: '一般双方都做：生产方在破碎站试验以控制生产，业主实验室在到货时按规范类别试验。取样频率和验收规则通常在交货开始前写入供货协议。' },
          ],
        },
        {
          type: 'prose',
          title: 'ETAHG 能提供什么帮助',
          paragraphs: [
            '{{company}} 在杰勒法省艾因伊贝勒附近 Oued Sdeur 的自有采石场和石料破碎筛分站 Carrière Djellal El Gharbi 生产高品质细骨料，其破碎和制砂设备适合需要高产量的项目。试验要求在供货前与客户商定，公司以自有卡车和自卸半挂车运输。有关用途和供货组织方式，请参阅[细骨料生产](page:aggregates)页面；有关同一材料在路面结构层中的应用，请参阅[道路施工](page:roads)页面。',
          ],
        },
        {
          type: 'cta',
          title: '阿尔及利亚项目​需要骨料？',
          text: '请把粒级、数量和工地位置发给我们。我们将答复破碎站可以供应什么以及如何供应。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '细骨料生产', page: 'aggregates', variant: 'secondary' },
          ],
        },
      ],
    },

    'rent-or-buy-equipment': {
      slug: 'renting-vs-buying-construction-equipment-algeria',
      nav: '在阿尔及利亚​租赁还是购买工程机械',
      title: '阿尔及利亚工程机械：租赁还是购买 | ETAHG',
      description: '面向阿尔及利亚承包商的决策指南：进口或购买设备、银行融资租赁（crédit-bail）与经营性租赁的区别、操作手、配件与运距。',
      summary: '进口规定、交货周期、融资租赁与经营性租赁、操作手、配件与运距：承包商决定为阿尔及利亚项目购买还是租赁重型设备的决策指南。',
      eyebrow: '设备租赁',
      h1: '在阿尔及利亚​租赁还是购买工程机械：决策指南',
      lead: '每一家进入阿尔及利亚的承包商在头一个月都会问同一个问题：自带设备、在当地购买，还是租赁。{{company}} 从杰勒法基地出租其自有筑路设备（短租与长租），在此梳理通常决定这一选择的因素。',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'rental',
      related: ['rental', 'parts', 'mobilization'],
      blocks: [
        {
          type: 'prose',
          title: '为什么这个问题​在阿尔及利亚有所不同',
          paragraphs: [
            '在许多国家，自有还是租赁取决于利用率和现金流。在阿尔及利亚还要加上三个因素。其一，机械进口受到管制且规则多变：多年来二手设备进口受限，即使是新设备，许可、外汇手续和清关也会在设备开工前增加数周乃至数月。其二，运距长、地形多样，为一个项目购买的设备可能离下一个项目很远。其三，大城市以外的售后网络参差不齐，配件和维修服务与购置价格同等重要。',
            '这些并不意味着购买是错的，而是意味着决策应依据项目进度计划，而不仅仅是财务报表。',
          ],
        },
        {
          type: 'prose',
          title: '进口或购买新机：周期与手续',
          paragraphs: [
            '为项目进口一台设备，通常需要通过经批准的渠道采购、办理进口银行备案（domiciliation）、海运至阿尔及利亚港口、清关并运至工地。计划中应预留数月的周期，并考虑从订货到交付期间规则可能变化。为特定合同引入的设备可适用暂时进口制度，但有其自身的文件要求和复出口义务，最好在项目报价前向报关行核实。',
            '向阿尔及利亚本地经销商购买新机可省去进口环节，却省不掉排队等候，而且第纳尔价格反映了关税和汇率。对于在同一地点、拥有维修车间和配件库存的长期项目，自有设备仍然合理；对于短期或分散的工作范围，则很少如此。',
          ],
        },
        {
          type: 'prose',
          title: '银行融资租赁（crédit-bail）不是设备租赁',
          paragraphs: [
            '在阿尔及利亚，“leasing” 一词指两种不同的东西。Crédit-bail 是自 1996 年租赁法令以来受监管的融资产品：银行或经批准的租赁公司（例如国有的 Société Nationale de Leasing，或 Maghreb Leasing Algérie 等私营公司）购买设备，以数年期出租给客户，期末附购买选择权。它是一种为取得所有权而融资的方式，实际上面向在阿尔及利亚注册、具备常规银行资料的企业，设备的运行、维护和保险仍由承租人负责。',
            '{{company}} 提供的是经营性租赁，是一种服务：设备所有者在一定期限内提供设备，可带或不带操作手，运输、维护和燃油按项目约定分担，期满收回。设备从不出现在客户的资产负债表上，客户也永远不必把它卖掉。对于在阿尔及利亚只做一个合同的外国承包商，这一区别往往具有决定性。',
          ],
        },
        {
          type: 'table',
          title: '按项目类型的决策表',
          intro: '仅供参考；每个项目有自己的数据。',
          caption: '购买、融资租赁和经营性租赁与工期及工作性质的典型匹配',
          head: ['项目类型', '购买或进口', '融资租赁（crédit-bail）', '经营性租赁'],
          rows: [
            ['短期工作，数周至数月', '很少合理：周期超过工期', '不适用', '常规选择；本地班组未到位时可带操作手'],
            ['单一工地，一至三年，有自建车间', '核心设备可考虑', '注册企业可考虑', '高峰期、专用设备、开工阶段'],
            ['多个工地分布在不同地区', '工地之间的转运增加成本', '同样的限制', '在各工地附近从当地基地租赁'],
            ['自有设备到达前的开工阶段', '来不及', '来不及', '进口设备清关前的过渡'],
            ['同一地区的长期项目', '核心设备通常以购买为经济', '融资选项', '补充高峰期和故障期'],
          ],
        },
        {
          type: 'prose',
          title: '带操作手​还是不带操作手',
          paragraphs: [
            '在阿尔及利亚，带操作手租赁很常见，即使对自带班组的承包商也值得考虑。熟悉设备和地形的操作手能缩短磨合期，让设备保持在所有者期望的状态，并且已在阿尔及利亚社保系统登记。不带操作手时，日常检查和设备使用责任由客户承担。采用哪种方式，以及运输、维护、燃油和保险如何分担，按项目商定并写入租赁合同；阿尔及利亚没有固定的标准合同范本。',
          ],
        },
        {
          type: 'prose',
          title: '配件、维护与运距',
          paragraphs: [
            '自有设备的生产率取决于配件供应。购买前，先弄清该型号的滤芯、发动机配件和易损件在阿尔及利亚何处有库存，非库存配件要多久才能到。在 ETAHG 集团内，阿尔及尔的 EURL KAYLE KENNY 供应重型柴油发动机配件，包括 Cummins 兼容配件；该公司为独立供应商，与 Cummins Inc.（康明斯公司）无任何隶属关系，亦未获其认可或授权。对租赁设备而言，这个问题基本不存在：除非另有约定，维护仍由所有者负责。',
            '运距在另一个方向上同样重要。杰勒法 RN1 沿线的基地位于阿尔及尔与撒哈拉之间的公路上，租赁设备用半挂车一天即可运抵高原地区和撒哈拉北部，工作结束后原路返回。运输按项目商定，但正是这样的地理位置使租赁对远离海岸的工地切实可行。',
          ],
        },
        {
          type: 'faq',
          title: '常见问题',
          items: [
            { id: 'rb-import-used', q: '外国承包商可以向阿尔及利亚进口二手工程机械吗？', a: '一般而言，阿尔及利亚多年来限制二手机械进口，而且规则随历年财政法变化，因此项目报价前必须向报关行核实现行规定。为特定合同办理的暂时进口是另一种制度，附带复出口义务。' },
            { id: 'rb-leasing-vs-rental', q: '在阿尔及利亚，leasing 与租赁有什么区别？', a: '在阿尔及利亚，leasing 通常指 crédit-bail，即银行融资产品：经批准的租赁公司购买设备，以数年期出租给客户并附购买选择权；而租赁是指所有者在一定期限内以服务方式提供设备。Crédit-bail 为取得所有权融资；租赁则避免取得所有权。' },
            { id: 'rb-with-operator', q: '阿尔及利亚的重型设备租赁带操作手吗？', a: '带。带操作手租赁在阿尔及利亚很常见，对本地班组尚未到位的承包商往往是务实的选择。设备是否带操作手，以及运输、燃油和维护如何分担，按项目在租赁合同中约定。' },
            { id: 'rb-how-fast', q: '租赁设备多快能到达阿尔及利亚的工地？', a: '取决于与基地的距离、工地的进场条件和设备类别的可用性；运输按项目商定。从杰勒法 RN1 沿线的基地出发，高原地区和撒哈拉北部的工地一般一天内即可用半挂车送达。' },
            { id: 'rb-long-term', q: '在阿尔及利亚可以长期租赁设备吗？', a: '可以。长期经营性租赁（日常用语中有时也称 leasing）由 SARL ETAHG 等设备所有者按项目商定的条款提供，包括期限、操作手、运输和维护；它仍是一种服务合同，有别于银行的 crédit-bail。' },
          ],
        },
        {
          type: 'prose',
          title: 'ETAHG 能提供什么帮助',
          paragraphs: [
            '{{company}} 从杰勒法设备基地出租其自有的液压挖掘机、推土机、轮式装载机、平地机、振动压路机、沥青摊铺机、沥青洒布车和罐车、载重卡车和自卸半挂车（短租与长租），期限、操作手、运输和维护按项目商定。设备类别和询价处理方式请参阅[设备租赁（短租／长租）](page:rental)，开工阶段请参阅[施工进场与开工准备](page:mobilization)，通过 EURL KAYLE KENNY 供应发动机配件请参阅[配件供应](page:parts)页面。',
          ],
        },
        {
          type: 'cta',
          title: '正在权衡阿尔及利亚项目的​设备租赁？',
          text: '请告诉我们设备类别、地点和日期。我们将答复可用情况和可提出的条款。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '设备租赁', page: 'rental', variant: 'secondary' },
          ],
        },
      ],
    },

    'mobilization-checklist': {
      slug: 'mobilizing-heavy-equipment-algeria-checklist',
      nav: '在高原地区和撒哈拉​开辟工地',
      title: '高原地区与撒哈拉的工地进场清单 | ETAHG',
      description: '在阿尔及利亚高原地区或撒哈拉开辟工地的清单：施工便道、平台与排水、山洪风险、水源与打井许可、骨料供应、气候差异以及 RN1 沿线的物流保障。',
      summary: '第一辆半挂车离开基地前应落实的事项：进场道路、平台与排水、水源、骨料供应、气候、营地与物流，以及阿尔及利亚草原和沙漠中工地开工的顺序。',
      eyebrow: '施工进场与开工准备',
      h1: '在高原地区和撒哈拉​开辟工地：进场清单',
      lead: '最初几周决定项目的节奏。本清单源自 {{company}} 用自有设备从杰勒法基地开辟工地的做法，列出通常在第一辆半挂车出发前就应落实的事项，并特别考虑阿尔及利亚草原和沙漠的具体条件。',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'mobilization',
      related: ['mobilization', 'rental', 'aggregates', 'drilling'],
      blocks: [
        {
          type: 'prose',
          title: '为什么进场​需要单独的计划',
          paragraphs: [
            '在新工地上，设备、操作手、燃油、水和材料到位之前，什么也生产不了。在阿尔及利亚内陆，基地与工地之间可能相距数百公里，工地在第一天往往既没有进场道路，也没有平台和水源，气候也比沿海严酷。把开工当作一个独立的项目，用一份与客户商定的简短书面流程来管理，通常能避免代价最高的停工周。',
            '本文涉及两种地貌：一是高原地区，即泰勒阿特拉斯与撒哈拉阿特拉斯之间海拔约 1,000 米的广阔草原，杰勒法位于此；二是撒哈拉阿特拉斯以南的撒哈拉北部，盖尔达耶位于姆扎布河谷，海拔约 500 米。两者都运距漫长、水源稀缺，但其他方面几乎截然不同。',
          ],
        },
        {
          type: 'prose',
          title: '施工便道',
          paragraphs: [
            '内陆的大多数工地从 RN1 等国道经一条便道到达，这条便道必须先修建或改善，重型车辆才能通行。在高原地区，天然地面往往足够坚实，可用当地材料平整压实成路；问题在于小型干河谷的穿越以及冬雨后细粒土的软化。在撒哈拉，问题在于沙：松散的沙丘砂需要稳定层，坚硬的石质戈壁（hamada）面可以通行但很伤轮胎，此外还要有半挂车掉头所需的宽度。',
            '施工便道是推土机和平地机到场后的第一项工作，其费用应列入开工预算，而不是事后才发现。',
          ],
        },
        {
          type: 'prose',
          title: '平台、排水与干河谷问题',
          paragraphs: [
            '营地、车间、料场和拌和站的平台通过清表、整平、填筑和压实修建，上面铺一层碎石料即可全天候使用。最容易让新来者吃亏的一点是排水：草原和撒哈拉都会遇到罕见但猛烈的降雨，干涸的河谷能在数小时内涨满。设在河床内或河床旁的平台，无论夏天看起来多么干燥，都有风险。请查看历史洪水的痕迹，把设施设在痕迹之上，并给平台做出坡度和排水沟。',
          ],
        },
        {
          type: 'prose',
          title: '水',
          paragraphs: [
            '压实、混凝土、降尘和营地都需要水，而这些地区的工地很少能接到管网。常规做法是从最近的城镇用罐车运水，或在工地上或附近钻一口井，并用水罐或水池储存。打井需要许可：自 2021 年年中起，阿尔及利亚的申请通过一站式窗口办理，由国家水资源局和水资源综合管理局参与审核，再由省长（wali）签发批文，目标办理时限为一个月，施工有效期为 18 个月，条例允许在有正当理由时延长。因此申请应尽早提交，并为这段空档规划运水。地层性质决定钻井方法和深度，杰勒法向斜与撒哈拉含水层之间差异很大。',
          ],
        },
        {
          type: 'prose',
          title: '骨料与供应半径',
          paragraphs: [
            '骨料是工地消耗量最大的材料，因此与最近破碎站的距离决定了每一方混凝土和每一层道路的成本。在杰勒法周边的高原，石灰岩采石场相对较近；在撒哈拉，最近的破碎站可能很远，第一辆卡车应在工地需要之前就上路。在进场阶段就与供应商确定粒级、数量和配送节奏，并在平台上按运距预留相应规模的料场。',
          ],
        },
        {
          type: 'table',
          title: '气候：两个地区的差异',
          intro: '数量级来自公开气候数据；具体工地请核对当地气象站。',
          caption: '高原地区和撒哈拉北部的作业条件',
          head: ['因素', '高原地区（杰勒法一带）', '撒哈拉北部（盖尔达耶一带）'],
          rows: [
            ['海拔', '约 1,100 米', '约 500 米'],
            ['冬季', '寒冷，有霜冻并偶有降雪；清晨地面冻结', '夜间凉爽，白天温和'],
            ['夏季', '炎热干燥', '酷热；作业时间移至清晨和傍晚'],
            ['降雨', '年降雨数百毫米，多在冬春，有时猛烈', '年降雨量极低，但罕见的暴雨会淹没干河谷'],
            ['风与沙尘', '开阔草原上风力强劲', '风沙、扬尘、能见度和设备磨损'],
            ['影响', '冬季损失工作日；沥青和混凝土的温度限制', '沥青和混凝土的高温限制；储水；滤清与冷却'],
          ],
        },
        {
          type: 'prose',
          title: '营地、燃油与 RN1 沿线的物流',
          paragraphs: [
            'RN1 是内陆的交通主干，从阿尔及尔经杰勒法、拉格瓦特到盖尔达耶，再深入南部腹地。位于其东西两侧的工地所需的燃油、食品、住宿和配件都沿这条公路运来，再经地方公路或便道抵达。进场计划要指明最近的加油和补给城镇，确定操作手住在镇上还是工地上，准备车间集装箱和首批滤芯与易损件库存，并明确由谁负责住宿和餐饮。在偏远工地，营地本身就是一项施工任务，供水、卫生、供电和遮阳设施都要在班组到达前建好。',
          ],
        },
        {
          type: 'steps',
          title: '我们遵循的流程',
          intro: '六个步骤，按项目调整，并在任何设备移动之前与客户商定。',
          items: [
            { title: '现场与范围审查', text: '共同审查位置、进场条件、地形、水源、工程量和进度，并写明第一天必须就绪的事项清单。' },
            { title: '设备与资源计划', text: '按工作范围匹配设备类别、操作手和物资；进场条款按项目商定。' },
            { title: '运输', text: '设备在基地装上半挂车，或直接从另一工地转场；车队日期取决于进场条件和超限运输的道路许可。' },
            { title: '开辟工地', text: '清场、施工便道、设备和设施平台、排水以及首批土方。' },
            { title: '材料与水', text: '骨料供应启动，用罐车运水，必要时在取得许可后用车载钻机钻一口井。' },
            { title: '生产与跟进', text: '设备按计划作业直至移交，或在租赁或分包协议下继续工作。' },
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          title: '获取进场方案​需发给我们的信息',
          list: [
            '工地位置（省份，如可能请附坐标或地图链接）',
            '第一阶段的范围：清场、便道、平台、土方、骨料、水',
            '大致工程量和计划开工日期',
            '操作手、燃油和住宿由客户提供，还是希望由我们提供',
          ],
          cta: { label: '联系我们', page: 'contact' },
        },
        {
          type: 'faq',
          title: '常见问题',
          items: [
            { id: 'mob-duration', q: '在阿尔及利亚将设备调往工地需要多长时间？', a: '取决于与基地的距离、进场条件和第一阶段的范围；运输、工期和操作手按项目商定。从杰勒法出发，车队准备就绪后，高原地区和撒哈拉北部的工地一般一天内即可用半挂车送达。' },
            { id: 'mob-water', q: '撒哈拉的工地如何供水？', a: '通常先从最近的城镇用罐车运水，直到工地上或附近的水井钻成并装好设备，用水罐或水池储存。在阿尔及利亚打井须经 2021 年设立的一站式窗口审核后由省长签发许可，因此申请应尽早提交。' },
            { id: 'mob-floods', q: '沙漠工地真的有山洪风险吗？', a: '有。草原和撒哈拉都会遇到罕见但强烈的降雨，干涸的河谷可在数小时内涨满，因此营地、料场和拌和站要设在历史洪水痕迹之上，平台要做出坡度并设排水沟。' },
            { id: 'mob-winter', q: '高原地区冬季能继续道路施工吗？', a: '部分可以。杰勒法海拔约 1,100 米，冬季有霜冻并偶有降雪，沥青摊铺必须停工，冻结或饱水地面上的土方作业也会放慢，因此高原地区的工程计划一般把沥青层安排在寒冷月份之外。' },
            { id: 'mob-rent', q: '工地开辟后设备可以继续租用吗？', a: '可以。进场后，同一批设备可按租赁协议继续作业，或以分包形式继续施工，条款按项目商定。' },
          ],
        },
        {
          type: 'prose',
          title: 'ETAHG 能提供什么帮助',
          paragraphs: [
            '{{company}} 从杰勒法基地调遣自有设备开辟新工地：清场、施工便道、平台、首批土方、来自艾因伊贝勒附近 Oued Sdeur 自有采石场和破碎站的骨料供应，以及用自有车载钻机钻凿水井。服务内容请参阅[施工进场与开工准备](page:mobilization)，进场后可留在工地的设备请参阅[设备租赁（短租／长租）](page:rental)，另见[细骨料生产](page:aggregates)和[水井钻探](page:drilling)。',
          ],
        },
        {
          type: 'cta',
          title: '即将开辟工地？',
          text: '请把位置和工作范围发给我们。我们将答复可提供的设备、材料和流程。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '施工进场与开工准备', page: 'mobilization', variant: 'secondary' },
          ],
        },
      ],
    },

    'water-well-drilling-guide': {
      slug: 'water-well-drilling-high-plateaus-sahara-algeria',
      nav: '高原地区和撒哈拉北部的​水井钻探',
      title: '阿尔及利亚水井钻探：含水层与许可 | ETAHG',
      description: '杰勒法和盖尔达耶周边的水井钻探：两地的含水层、回转钻进与潜孔锤钻进、成井工艺、洗井与抽水试验，以及阿尔及利亚一站式窗口的打井许可程序。',
      summary: '杰勒法向斜和撒哈拉盆地的含水层、回转钻进与潜孔锤钻进、成井、洗井与抽水试验，以及一站式窗口许可：面向阿尔及利亚内陆需要用水的业主的指南。',
      eyebrow: '水井钻探',
      h1: '高原地区和撒哈拉北部的​水井钻探：含水层、方法与许可',
      lead: '阿尔及利亚内陆的工地、农场或工厂通常要自己解决水源。{{company}} 拥有一台车载水井钻机，从杰勒法和盖尔达耶开展业务；本文说明这些地区的地下有什么、水井如何钻凿和成井，以及许可程序包括哪些内容。',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'drilling',
      related: ['drilling', 'mobilization'],
      blocks: [
        {
          type: 'prose',
          title: '两种截然不同的地下',
          paragraphs: [
            '在高原地区的杰勒法周边，水文地质研究描述了一个向斜构造：其上部含水层位于中新世—上新世—第四纪沉积层中，据报道平均厚度达数百米，是草原上饮用水和灌溉水井及钻孔最常利用的含水层。其下为阿尔布阶和巴雷姆阶较老的砂岩和石灰岩地层，同样含水，由更深的钻孔开采。水位和出水量沿向斜变化，浅层含水层依赖周围山脉的降雨补给。',
            '在撒哈拉北部的盖尔达耶周边，情况与整个撒哈拉盆地相同：下部是阿尔布—巴雷姆期的巨大砂岩含水层“大陆间层”（Continental Intercalaire），上覆“终端复合层”（Complexe Terminal）。本地区钻入大陆间层的钻孔很深，有的超过一千米，采用多级固井套管和滤水管成井；因深度大，出水温度较高。河谷底部和终端复合层的较浅水井满足许多当地需求，但水质变化较大。',
            '实际经验是：“水井”一词既指几十米深的浅层潜水井，也指深层自流钻孔；当地水文地质资料（可从水务部门或邻近钻孔的研究中获取）是任何项目的起点。',
          ],
        },
        {
          type: 'prose',
          title: '回转钻进还是潜孔锤',
          paragraphs: [
            '两种钻进方法覆盖了大多数水井。泥浆回转钻进通过空心钻杆转动钻头，同时将钻井液泵入钻杆、经环空返回，带出岩屑并支撑孔壁；适用于松软和未固结地层，可钻大口径。潜孔锤（DTH）钻进用压缩空气驱动活塞冲击孔底钻头；在石灰岩、砂岩等硬岩中速度快，并用空气排出岩屑。许多钻机两者兼能，一口井可以用一种方法开孔、随地层变化换另一种方法完孔。方法根据预期地质、目标深度和口径以及可用于泥浆的水量选择。',
          ],
        },
        {
          type: 'steps',
          title: '从钻孔到可用的水井',
          intro: '常规顺序；每一步按含水层和用途确定规模。',
          items: [
            { title: '选址与设计', text: '审查已有钻孔、地质和许可文件；确定目标深度、口径和方法。' },
            { title: '钻进', text: '以一种或多种口径进行回转或潜孔锤钻进，记录地层和出水层位。' },
            { title: '下套管与滤水管', text: '套管保护孔壁，滤水管对准含水层段；滤水管周围填砾以过滤细砂。' },
            { title: '固井', text: '封填滤水管以上的环空，隔绝地表水和不需要的地层，并保护井口。' },
            { title: '洗井', text: '用气举、活塞拉洗或抽水清除钻井液和细粒，直至出水清澈。' },
            { title: '抽水试验', text: '分段或定流量试验测定出水量和降深，据此确定泵的规格和可持续流量。' },
            { title: '安装设备', text: '泵、扬水管、电缆、井口装置及与储水设施的连接；使用前分析水质。' },
          ],
        },
        {
          type: 'prose',
          title: '许可程序简述',
          paragraphs: [
            '在阿尔及利亚钻凿水井须取得水资源使用许可。自 2021 年改革以来，申请通过一站式窗口审核，该窗口汇集国家水资源局（ANRH）、国家水资源综合管理局（AGIRE）以及环境、农业和灌溉部门的代表；文件随后送交省政府，由省长（wali）签发批文。条例规定完整文件的目标办理时限为一个月。工程一般须在通知后 18 个月内完成，条例允许在有正当理由时延长。',
            '文件通常说明申请人、土地、用途和用水量以及拟建水井的特征。实用建议很简单：尽早申请，把许可文件留在工地，并由会记录深度、地层和试验结果以编制竣工报告的公司施工。',
          ],
        },
        {
          type: 'table',
          title: '各地区水井的预期情况',
          intro: '区域研究报告的一般趋势；具体地点可能不同。',
          caption: '高原地区与撒哈拉北部水井的指示性比较',
          head: ['方面', '高原地区（杰勒法向斜）', '撒哈拉北部（盖尔达耶一带）'],
          rows: [
            ['主要含水层', '中新世—上新世—第四纪；其下为阿尔布阶和巴雷姆阶砂岩', '终端复合层；深部为大陆间层'],
            ['典型深度', '几十米至数百米', '几十米至数百米；深层含水层超过一千米'],
            ['地层', '冲积层、黏土、砂岩、石灰岩', '砂、砂岩、石灰岩、黏土'],
            ['水', '一般较凉，水质随层位变化', '深部水温较高；矿化度不一'],
            ['方法', '软地层回转钻进，岩层潜孔锤', '深井泥浆回转钻进；硬层可用潜孔锤'],
            ['补给', '周围山脉的降雨', '极慢；基本是储存资源'],
          ],
        },
        {
          type: 'prose',
          title: '水质与水温',
          paragraphs: [
            '撒哈拉深层含水层的水往往温度较高，并可能含有矿物质，某些用途前需要冷却或处理；浅层含水层的水则可能受地表活动影响。对施工工地来说，这关系到混凝土（规范对硫酸盐和氯化物有限值）和营地（饮用水必须检测）。洗井后、装泵前做实验室分析是标准做法。',
          ],
        },
        {
          type: 'faq',
          title: '常见问题',
          items: [
            { id: 'ww-permit', q: '在阿尔及利亚打井需要许可吗？', a: '需要。阿尔及利亚的水井须取得水资源使用许可，文件经 2021 年设立的一站式窗口（ANRH 和 AGIRE 两机构参与）审核后由省长签发批文，完整申请的目标办理时限为一个月。' },
            { id: 'ww-depth', q: '杰勒法和盖尔达耶周边的水井有多深？', a: '因目标含水层而差异很大：浅层含水层的井深几十米至数百米，而盖尔达耶周边钻入撒哈拉盆地大陆间层的钻孔据报道有的超过一千米。当地钻孔资料和用途决定设计。' },
            { id: 'ww-method', q: '回转钻进与潜孔锤钻进有什么区别？', a: '回转钻进用旋转钻头切削岩石，用循环液带出岩屑，适用于松软和松散地层；潜孔锤（DTH）在孔底用气动冲击破碎硬岩，在石灰岩和砂岩中更快。许多水井随地层变化两种方法结合使用。' },
            { id: 'ww-time', q: '钻一口水井需要多长时间？', a: '浅井数天即可钻成并完井，而带多级套管的深井需要数周；许可程序往往是整个日程中最长的部分，应尽早启动。' },
            { id: 'ww-site-use', q: '水井能为施工工地供水吗？', a: '能。在没有管网的阿尔及利亚内陆，在工地上或附近钻井并用水池或水罐储存，是供应压实用水、混凝土用水和营地用水的常见方式；用于混凝土或饮用前要做水质分析。' },
          ],
        },
        {
          type: 'prose',
          title: 'ETAHG 能提供什么帮助',
          paragraphs: [
            '{{company}} 拥有一台新近购置的车载水井钻机及配套附件，为施工工地、农业、工业和社区钻凿水井；公司注册地在盖尔达耶省布努拉，设备基地在杰勒法。钻深能力、方法和日程按项目商谈。服务内容请参阅[水井钻探](page:drilling)，水井如何纳入工地开工请参阅[施工进场与开工准备](page:mobilization)。',
          ],
        },
        {
          type: 'cta',
          title: '工地、农场或工厂需要水源？',
          text: '请把位置、用途以及您所了解的邻近钻孔情况发给我们。我们将告知可以钻什么样的井以及如何准备文件。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '水井钻探', page: 'drilling', variant: 'secondary' },
          ],
        },
      ],
    },

    'foreign-contractor-checklist': {
      slug: 'foreign-contractors-algeria-checklist',
      nav: '外国承包商进入阿尔及利亚市场的​准备清单',
      title: '外国承包商进入阿尔及利亚市场：准备清单 | ETAHG',
      description: '分公司还是子公司、2023 年公共采购法与 25% 优惠幅度、分包 40% 上限、资质等级证书、登记文件，以及如何核查阿尔及利亚合作伙伴：外国承包商入门清单。',
      summary: '面向准备在阿尔及利亚施工的外国和中国承包商的实用清单：分公司或子公司、公共采购规则、分包、资质和登记文件，以及如何核查阿尔及利亚合作伙伴。',
      eyebrow: '在阿尔及利亚施工',
      h1: '外国承包商进入阿尔及利亚市场的​准备清单',
      lead: '外国承包商（其中有许多中国企业）承建了阿尔及利亚近年来相当大一部分的基础设施，几乎都有阿尔及利亚合作伙伴、分包商和供应商参与。{{company}} 可为这类承包商提供杰勒法和盖尔达耶的本地基地。本清单概括新进入者应了解的制度框架，仅为一般性说明，不构成法律意见，相关法规也在不断演变。',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'roads',
      related: ['partners', 'roads', 'rental', 'aggregates'],
      blocks: [
        {
          type: 'prose',
          title: '进入形式',
          paragraphs: [
            '外国承包商可以多种形式在阿尔及利亚存在。联络处可代表母公司，但不得经营。在商业登记簿登记的分公司（succursale）是执行特定合同的常用载体：它被视为外国投资，须在国家商业登记中心（CNRC）登记，并有自己的税务和社保登记。依据阿尔及利亚法律设立的公司（通常为 SARL 或 SPA）是长期存在的载体；自 2020 年财政法起，非战略性行业不再要求阿尔及利亚方股东持股 51%，但战略性活动仍适用这一规定，而且根据 2025 年矿业法，采石场经营也仍然适用。',
            '哪种形式合适取决于合同和期限。许多承包商第一个项目用分公司，待项目储备形成后再设立公司。',
          ],
        },
        {
          type: 'prose',
          title: '公共采购：第 23-12 号法律与优惠幅度',
          paragraphs: [
            '阿尔及利亚的公共工程依据 2023 年 8 月 5 日的《公共采购法》（第 23-12 号法律）授予，该法在实施细则起草期间取代了 2015 年条例的原则；与此同时，2015 年第 15-247 号总统令继续规范具体程序，新法规定的电子公共采购门户于 2026 年获得了运行规则。有两项规定直接关系到外国投标人。一是对阿尔及利亚原产产品以及由常住阿尔及利亚国民控股、依阿尔及利亚法律设立的公司给予 25% 的优惠幅度。二是对于当局指定的某些大型项目，国际招标的招标文件要求外国投标人承诺与此类阿尔及利亚公司在同一业务领域投资建立合作关系，不履行承诺将受到处罚；某一招标是否含有此条款，以其招标文件为准。',
            '对外国承包商而言，这意味着一个可信、有资质的阿尔及利亚合作伙伴不仅在工地上有用，而且是投标的组成部分。',
          ],
        },
        {
          type: 'prose',
          title: '分包：40% 上限与事先批准',
          paragraphs: [
            '根据 2015 年条例，公共合同中的分包不得超过合同金额的 40%，分包商开工前须经发包方批准，分包合同副本须备案，分包商须申报其在工地的存在。投标人还要在报价中注明拟分包给依阿尔及利亚法律设立的公司的份额。无论适用于特定招标的具体数字如何，方向是一贯的：阿尔及利亚分包是被期待的，须申报，且有上限。',
          ],
        },
        {
          type: 'prose',
          title: '资质等级证书',
          paragraphs: [
            '任何依据公共合同实施房建、公共工程或水利工程的企业，都必须持有 1993 年第 93-289 号执行令设立并沿用至今的专业资质与等级证书。证书写明企业的业务领域和等级，等级取决于其技术人员、设备和财务能力，并决定可投标的合同规模。在公共合同上施工的分包商一般也应持有其领域的证书。这是向阿尔及利亚合作伙伴索要的最有用的单一文件，因为它概括了国家对该企业核实过的内容。',
          ],
        },
        {
          type: 'table',
          title: '外国承包商会被要求提供、也会要求对方提供的文件',
          intro: '常见的阿尔及利亚文件；名称按文件上的法文原文给出。',
          caption: '阿尔及利亚承包商文件中的登记与清缴证明',
          head: ['文件', '签发机构', '证明内容'],
          rows: [
            ['Extrait du registre de commerce（商业登记摘录，RC）', 'CNRC，可通过 Sidjilcom 门户查询', '法律存在、经营范围、注册地、管理人员'],
            ['Numéro d’identification fiscale（税务识别号，NIF）', '税务部门', '税务登记；出现在每一张发票上'],
            ['Extrait de rôle（税务清缴证明）', '税务部门', '税务状况正常（或有分期缴纳计划）'],
            ['Attestations de mise à jour CNAS / CASNOS（社保缴费证明）', '社会保险基金', '员工／管理人员的社保已缴纳'],
            ['Certificat de qualification et classification（资质等级证书）', '部委或省级委员会', '公共工程的业务领域和等级'],
            ['Statuts 与 NIS（公司章程与统计识别号）', '公证处；国家统计局', '法律形式、资本、统计识别号'],
            ['Casier judiciaire（管理人员无犯罪记录证明）', '司法部', '大多数公共招标文件要求'],
          ],
        },
        {
          type: 'prose',
          title: '如何核查​阿尔及利亚合作伙伴',
          paragraphs: [
            '索取上述文件，并核查可核查的内容：商业登记摘录与 CNRC 记录核对，税务和社保证明看日期，资质证书看领域和有效期。然后再看证书不能显示的内容。这家公司是否真正拥有其所述的设备，设备存放在哪里？能否参观基地、采石场或破碎站？它是否熟悉贵方项目所在地区的地形，能否说明将如何调遣到那里？设备背后是否有配件和维护组织？合同、函件和工地文件是否有贵方团队能读懂的语言版本？这些问题的答案，把真正的合作伙伴与只有一个名头的皮包公司区分开来。',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: '常被晚发现的实际问题',
          list: [
            '阿尔及利亚的付款以第纳尔通过阿尔及利亚银行进行；合同中可汇出境外的外汇部分在合同本身中约定',
            '工地人员需要工作许可；本地员工的社保登记会在工地受到检查',
            '设备进口（即使是暂时进口）需要数月，规则也会变化；在当地租赁可以填补这段空档',
            '公共合同以法文文件执行；配备双语工地团队可节省数周时间',
          ],
        },
        {
          type: 'faq',
          title: '常见问题',
          items: [
            { id: 'fc-51-49', q: '51/49 规则对阿尔及利亚的外国承包商仍然适用吗？', a: '对建筑和公共工程一般已不再适用：2020 年财政法取消了非战略性行业阿尔及利亚方股东持股 51% 的要求，但战略性活动仍保留，2025 年矿业法对采石场经营也予以保留。因此外国承包商可以在阿尔及利亚拥有一家建筑公司，但公共采购仍通过优惠幅度和合作承诺向阿尔及利亚控股企业倾斜。' },
            { id: 'fc-preference', q: '阿尔及利亚公共采购中的国产优惠幅度是多少？', a: '根据 2023 年第 23-12 号法律，对阿尔及利亚原产产品以及由常住国民控股、依阿尔及利亚法律设立的公司，在比较报价时给予 25% 的优惠幅度。' },
            { id: 'fc-subcontract-limit', q: '阿尔及利亚公共合同可以分包多大比例？', a: '根据 2015 年公共采购条例，分包不得超过合同金额的 40%，且每一家分包商须事先经发包方批准；具体招标应核对 2023 年法律的实施细则。' },
            { id: 'fc-qualification', q: '什么是 certificat de qualification et classification？', a: '这是 1993 年第 93-289 号法令设立的证书，每一家实施公共房建、公共工程或水利工程的企业都必须持有；证书写明企业的业务领域和等级，等级取决于其人员、设备和财务能力，是向阿尔及利亚合作伙伴索要的第一份文件。' },
            { id: 'fc-check-partner', q: '外国公司如何核实一家阿尔及利亚公司？', a: '取得其商业登记摘录（RC）、税务识别号（NIF）、税务和社保清缴证明以及资质证书，向 CNRC 等签发机构核对，然后参观其基地、采石场或破碎站，确认所述设备和组织确实存在。' },
          ],
        },
        {
          type: 'prose',
          title: 'ETAHG 能提供什么帮助',
          paragraphs: [
            '{{company}} 是一家 1997 年成立的阿尔及利亚有限责任公司，注册地在盖尔达耶省布努拉，自有设备驻扎在杰勒法基地，自有采石场和破碎站位于艾因伊贝勒附近的 Oued Sdeur。公司已为以分包商、设备和骨料供应商、工地开工伙伴或当地合作伙伴的身份与国际承包商合作做好准备，并向合作伙伴提供其登记文件和公司简介。请参阅[国际承包商的当地合作伙伴](page:partners)、[道路施工](page:roads)、[设备租赁](page:rental)和[细骨料](page:aggregates)。',
          ],
        },
        {
          type: 'cta',
          title: '正在准备阿尔及利亚的​投标或项目？',
          text: '请给我们发一封简短的项目说明，并注明您希望使用的语言。我们将答复能为项目带来什么。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '国际合作', page: 'partners', variant: 'secondary' },
          ],
        },
      ],
    },

    'road-pavement-layers': {
      slug: 'road-pavement-layers-algeria-terrains',
      nav: '阿尔及利亚各类地形上的​路面结构层',
      title: '阿尔及利亚各类地形的路面结构层 | ETAHG',
      description: '从泰勒到撒哈拉如何修路：路基、底基层、基层与面层及典型材料，CTTP 路面结构图册、钙质结壳（tuf）、高原冻害与南部高温对设计的影响。',
      summary: '路基、路床、底基层、基层与面层及各层所用材料，阿尔及利亚路面图册如何处理气候与交通，以及沿海、阿特拉斯、高原和撒哈拉之间的差异。',
      eyebrow: '道路施工',
      h1: '阿尔及利亚各类地形上的​路面结构层：从泰勒到撒哈拉',
      lead: '道路是层层叠加的结构，每一层各司其职，而结构随地基、气候和交通而变。{{company}} 为修路而组建设备队伍，并已在阿尔及利亚许多地区修建道路；本文介绍各结构层、所用材料，以及该国四大地形如何改变设计。',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'roads',
      related: ['roads', 'aggregates', 'rental'],
      blocks: [
        {
          type: 'prose',
          title: '自下而上的结构',
          paragraphs: [
            '最底下是路基（plate-forme），即土方完成后的天然或填筑地面，其承载力按土工试验分级。地基软弱时，用选定材料做路床（couche de forme）将其提升到设计所需的等级。接着是真正的路面结构层：底基层（couche de fondation）和基层（couche de base）用来扩散车轮荷载；面层（couche de roulement）承受交通、排除雨水并提供抗滑能力。基层和面层之间可加粘层或联结层，整个结构由路肩和边沟排水——没有排水，任何结构都不耐久。',
          ],
        },
        {
          type: 'table',
          title: '结构层与典型材料',
          intro: '厚度为普通道路的指示性范围；具体由设计单位按项目确定。',
          caption: '路面结构层、功能及阿尔及利亚常用的规定材料',
          head: ['结构层', '功能', '典型材料', '指示性厚度'],
          rows: [
            ['路基／路床', '承载平台，防冻防水', '选定填料、钙质结壳（tuf）、处治土', '随土质等级变化'],
            ['底基层（fondation）', '向地基扩散荷载', '未处治级配碎石（GNT 0/31.5、0/40），南部用 tuf', '约 20–30 cm'],
            ['基层', '主要结构层', '级配碎石，或沥青稳定碎石（grave-bitume）', '无结合料约 15–25 cm，沥青类 10–15 cm'],
            ['联结层／面层', '交通、防水、抗滑', '热拌沥青混凝土（béton bitumineux 0/10 或 0/14），轻交通道路用表面处治', '沥青混凝土约 5–8 cm；表面处治 1–2 cm'],
          ],
        },
        {
          type: 'prose',
          title: '阿尔及利亚图册​如何进行设计',
          paragraphs: [
            '阿尔及利亚的道路设计很大程度上依据公共工程技术监督机构（CTTP）发布的新建路面结构图册，并结合国家实验室的土工和材料试验。图册方法按交通量（日重车数和设计年限）、路基承载力和工地气候分区进行分类，然后为每种组合和路网类型给出结构方案。工程师也参考 CBR 法和法国图册。对承包商或业主而言，要点是结构不能在工地上临时拼凑：各层、材料及其厚度来自设计研究，承包商的本领在于按规定的压实度和平整度生产和压实这些层。',
          ],
        },
        {
          type: 'prose',
          title: '材料：碎石、钙质结壳与沥青',
          paragraphs: [
            '无结合料层使用级配受控（如 0/31.5）的未处治级配碎石（grave non traitée，GNT），在最佳含水率下压实；其质量取决于岩石硬度（洛杉矶磨耗和 Micro-Deval 试验）和细粒的洁净度。在南部和撒哈拉地区，称为 tuf 的石膏—石灰质结壳是底基层和基层的传统首选材料，有自己的设计规则，因为其性状不同于标准 GNT：干压实时获得黏聚力，遇水和疲劳时却可能劣化，因此使用时须谨慎规定。',
            '沥青层在热拌站用碎石、机制砂和道路沥青生产；针入度 40/50 是阿尔及利亚最常用的标号，规范中也会见到 35/50，两者都适合炎热气候。摊铺由摊铺机和压路机完成，须在混合料的温度窗口内进行；气温过低或风把摊铺层冷却过快时就要停工。',
          ],
        },
        {
          type: 'prose',
          title: '各类地形改变了什么',
          paragraphs: [
            '在沿海泰勒地区，降雨、黏性土和高地下水位使重点落在排水、路床和路基保护上；泥灰岩路堑和路堤稳定是工程难题。在阿特拉斯山区，线路本身就是挑战：岩石路堑、高路堤、支挡结构和陡坡，而且高海拔地区的摊铺季节很短。',
            '在海拔约一千米的高原地区，冬季有霜冻并偶有降雪，设计要防范冻结深度和春季细粒土饱水，施工计划则把沥青作业安排在温暖月份。因线路漫长，骨料需求量大，附近有无采石场成为无结合料层成本的决定因素。在撒哈拉，问题反过来：高温限制了沥青和混凝土的作业时间并影响沥青标号的选择；风沙侵占路面并磨蚀表层；压实用水稀缺；优质岩石遥远时须使用当地的 tuf 和碎石料。干河谷的山洪决定了水工构造物和路堤高度。',
          ],
        },
        {
          type: 'prose',
          title: '压实、水与物流',
          paragraphs: [
            '无论地形如何，结构层只有在最佳含水率下压实到规定密度才能发挥作用，因此振动压路机、洒水车和工地实验室与摊铺机同等重要。在阿尔及利亚内陆，压实用水本身就是一个物流问题，靠罐车运水或在线路上打井解决。骨料用卡车和自卸半挂车从采石场运到工地，沥青用保温罐车供应，这些共同构成了全貌：这些地区的道路项目既是施工项目，也是物流项目。',
          ],
        },
        {
          type: 'faq',
          title: '常见问题',
          items: [
            { id: 'rp-layers', q: '道路由哪些结构层组成？', a: '自下而上依次为：路基（经处理的天然或填筑地面）、可选的路床、底基层、基层和面层（磨耗层），基层与面层之间有时设联结层；每一层把荷载扩散到下一层，面层提供抗滑和防水。' },
            { id: 'rp-thickness', q: '阿尔及利亚的道路结构层有多厚？', a: '普通道路的数量级大约是：无结合料底基层 20–30 cm，无结合料基层 15–25 cm 或沥青类基层 10–15 cm，热拌沥青面层 5–8 cm；实际厚度由设计研究按交通量、路基等级和气候分区，依据阿尔及利亚 CTTP 图册确定。' },
            { id: 'rp-tuf', q: '阿尔及利亚道路施工中的 tuf 是什么？', a: 'Tuf 是阿尔及利亚南部和撒哈拉地区石膏—石灰质结壳的名称，因优质岩石遥远而被广泛用作底基层和基层材料；它有自己的设计规则，因为压实后能获得黏聚力，但遇水和疲劳时可能劣化。' },
            { id: 'rp-bitumen', q: '阿尔及利亚使用哪种标号的沥青？', a: '针入度 40/50 的道路沥青是阿尔及利亚最常用的标号，规范中也会见到 35/50；两者都是适合炎热气候的硬质标号，用于热拌沥青面层和沥青类基层。' },
            { id: 'rp-winter', q: '高原地区冬季可以摊铺沥青吗？', a: '寒冷月份一般不行：在海拔约一千米处，霜冻、风和偶发降雪会使摊铺层冷却过快而无法压实，因此高原地区的沥青层安排在温暖季节，而土方和无结合料层在地面条件允许时继续施工。' },
          ],
        },
        {
          type: 'prose',
          title: 'ETAHG 能提供什么帮助',
          paragraphs: [
            '{{company}} 以自有整套设备修建道路，从土方、平整到压实、洒布沥青和沥青摊铺，可直接承包或分包，并从杰勒法省艾因伊贝勒附近 Oued Sdeur 的自有采石场和破碎站供应机制细骨料。公司成立于 1997 年，已在阿尔及利亚许多地区完成道路项目。请参阅[道路施工](page:roads)、[细骨料生产](page:aggregates)和[设备租赁](page:rental)。',
          ],
        },
        {
          type: 'cta',
          title: '有道路、平台或进场道路工程需要报价？',
          text: '请把线路、规定的结构层和地点发给我们。我们将答复能为其施工、供应或出租什么。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '道路施工', page: 'roads', variant: 'secondary' },
          ],
        },
      ],
    },

    'crushed-sand-vs-dune-sand': {
      slug: 'crushed-sand-dune-sand-river-sand-concrete-algeria',
      nav: '阿尔及利亚混凝土用砂：机制砂、沙丘砂还是河砂',
      title: '阿尔及利亚混凝土：机制砂、沙丘砂还是河砂 | ETAHG',
      description: '为什么阿尔及利亚天然河砂稀缺，沙丘砂在混凝土中的表现，机制砂有何不同，阿尔及利亚研究对石粉含量的结论，以及热拌沥青应选用哪种砂。',
      summary: '比较阿尔及利亚可用于混凝土和沥青的三种砂：稀缺的河砂、极细的沙丘砂和石粉受控的棱角状机制砂，并介绍阿尔及利亚对掺配砂的研究结论。',
      eyebrow: '骨料',
      h1: '机制砂、沙丘砂还是河砂：阿尔及利亚混凝土用哪种砂？',
      lead: '砂是混凝土和沥青的原料中阿尔及利亚既最多又最少的一种：南部遍地是砂，北部却找不到足够的合适的砂。{{company}} 在杰勒法省自有破碎站生产机制细骨料，在此比较项目可用的三种砂。',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'aggregates',
      related: ['aggregates', 'roads'],
      blocks: [
        {
          type: 'prose',
          title: '为什么北部天然砂稀缺',
          paragraphs: [
            '几十年来，阿尔及利亚北部的混凝土用的是从干河谷挖采的河砂。这一资源有限，开采会破坏河床和地下水，多年来一直受到限制和管制。结果是，级配良好的洁净河砂价格昂贵且供应不稳，远离少数获准砂源的地方尤其如此，承包商因此转向该国储量丰富的两种替代品：撒哈拉的沙丘砂和石灰岩采石场的机制砂。',
          ],
        },
        {
          type: 'prose',
          title: '沙丘砂（风积砂）：丰富但极细',
          paragraphs: [
            '沙丘砂浑圆、洁净、极其均匀——而这正是问题所在。其颗粒几乎全部集中在很窄的细粒区间，细度模数远低于混凝土标准偏好的范围；单独用它配制的混凝土需要更多的水和水泥才能有和易性，收缩更大，强度也偏低。尽管如此，阿尔及利亚对它进行了大量研究，因为它在南部免费且随处可见：作为掺配料与较粗的砂混合，有时再加石粉或掺合料补全曲线，可以得到合格的混凝土；它也广泛用于砂浆和撒哈拉道路的砂基材料。经验法则是：沙丘砂可以修正曲线，却很少能单独构成曲线。',
          ],
        },
        {
          type: 'prose',
          title: '机制砂：棱角分明，石粉须控制',
          paragraphs: [
            '机制砂是破碎筛分站产出的 0/3 至 0/5 粒级，在阿尔及利亚多以石灰岩为原料。其颗粒棱角分明、表面粗糙，能改善与水泥浆的粘结和混合料的力学强度，但在相同和易性下需要稍多的水或外加剂。其级配连续，可在破碎站调整，并含有一定比例的石粉（破碎产生的粉末），这既是弱点也是优势：过多的黏土类细粒会损害混凝土，而洁净的石灰石粉却能填充空隙、改善黏聚性。',
            '正因如此，测定细粒中黏土活性的亚甲蓝试验对机制砂与砂当量同等重要。阿尔及利亚对石灰岩机制砂普通混凝土和砂浆的研究一般发现，石粉含量在 10% 至 15% 左右最佳；只要这些细粒是石灰石粉而非黏土，部分试验系列中高至 20% 左右强度和耐久性仍能保持；但规范仍按标准规定的类别对石粉含量设定上限。破碎站还可以通过水洗或风选把石粉含量调整到规范要求的数值。',
          ],
        },
        {
          type: 'table',
          title: '三种砂的并列比较',
          intro: '一般趋势；以具体砂源的试验结果为准。',
          caption: '阿尔及利亚混凝土和沥青用河砂、沙丘砂与机制砂的比较',
          head: ['性能', '河砂（冲积砂）', '沙丘砂', '机制砂'],
          rows: [
            ['可得性', '稀缺，开采受管制', '南部储量丰富', '采石场按需生产'],
            ['颗粒形状', '浑圆', '浑圆', '棱角状'],
            ['级配', '随砂源变化', '极细，均匀', '连续，可在破碎站调整'],
            ['细粒', '常含黏土', '很少', '石灰石粉，须控制'],
            ['需水量', '低', '高', '中等'],
            ['混凝土强度', '级配良好时好', '单独使用偏低；可掺配使用', '好；棱角有利'],
            ['稳定性', '取决于河流', '高', '生产受控时高'],
            ['沥青混合料', '可用', '不能单独使用', '优选：棱角状颗粒抗变形'],
          ],
        },
        {
          type: 'prose',
          title: '对沥青和道路结构层​意味着什么',
          paragraphs: [
            '对热拌沥青而言，答案比混凝土更明确：优选机制砂，因为其棱角状颗粒相互嵌挤，能抵抗高温下重载交通造成的车辙——这正是阿尔及利亚的工况；浑圆的砂配制的混合料容易摊铺，却更早变形。在无结合料路面层中，级配碎石的砂粒部分与碎石来自同一台破碎机，这个问题很少出现；而在撒哈拉，砂基稳定层出于必要使用沙丘砂。',
          ],
        },
        {
          type: 'prose',
          title: '实际如何选择',
          paragraphs: [
            '选择由项目实验室通过试拌，在工地经济运距内实际可得的砂中做出。供应商能做的，是交付从第一车到最后一车曲线、石粉含量和洁净度始终一致的砂，并提供每个交货期的试验结果。对业主而言，有用的问题是：砂来自哪里，石粉如何控制，砂当量和亚甲蓝值是多少，供应能否维持工地所需的进度。',
          ],
        },
        {
          type: 'faq',
          title: '常见问题',
          items: [
            { id: 'ds-dune-concrete', q: '沙丘砂可以用于混凝土吗？', a: '沙丘砂用于混凝土主要是作为掺配料与较粗的砂混合，因为单独使用过细且过于均匀，会提高需水量和收缩、降低强度；阿尔及利亚的研究记录了通过掺配和补全曲线的掺合料得到合格混凝土的案例。' },
            { id: 'ds-crushed-vs-river', q: '混凝土用机制砂比河砂好吗？', a: '是不同而非更好：机制砂棱角分明，能改善粘结和强度，级配可在破碎站控制，但需要稍多的水或外加剂，且石粉必须洁净；河砂浑圆、和易性好，但在阿尔及利亚稀缺且不稳定。配合比设计得当，机制砂能配制出同等质量的混凝土。' },
            { id: 'ds-fines', q: '机制砂可以含多少石粉？', a: '取决于规范和细粒的性质：阿尔及利亚对石灰岩机制砂的研究一般发现，当细粒是石灰石粉而非黏土时（由亚甲蓝试验验证），普通混凝土中石粉含量在 10% 至 15% 左右最佳，部分研究中高至 20% 左右仍可接受；应供应的类别由规范确定。' },
            { id: 'ds-why-scarce', q: '为什么阿尔及利亚河砂稀缺？', a: '因为为保护河床和地下水，干河谷采砂多年来一直受到限制，获准的砂源少且远离大多数工地，因此北部通常以机制砂替代，南部则以沙丘砂掺配替代。' },
            { id: 'ds-asphalt', q: '沥青用哪种砂？', a: '热拌沥青一般优选机制砂，因为其棱角状颗粒相互嵌挤，能抵抗高温下重载交通造成的车辙，而浑圆的砂配制的混合料更早变形。' },
          ],
        },
        {
          type: 'prose',
          title: 'ETAHG 能提供什么帮助',
          paragraphs: [
            '{{company}} 在杰勒法省艾因伊贝勒附近 Oued Sdeur 的自有采石场和石料破碎筛分站生产高品质机制细骨料，设备适合需要高产量的项目，并以自有卡车和半挂车配送。试验要求在供货前商定。请参阅[细骨料生产](page:aggregates)；同一材料在路面中的应用请参阅[道路施工](page:roads)。',
          ],
        },
        {
          type: 'cta',
          title: '寻找可靠的砂源？',
          text: '请把粒级、数量和工地发给我们。我们将答复试验结果和到场供货方案。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '细骨料生产', page: 'aggregates', variant: 'secondary' },
          ],
        },
      ],
    },

    'public-works-glossary': {
      slug: 'public-works-glossary-french-english-arabic-chinese',
      nav: '公共工程术语表：法、英、阿、中',
      title: '公共工程术语表：法英阿中四语对照 | ETAHG',
      description: '阿尔及利亚工地常用公共工程术语的法文、英文、阿拉伯文和中文四语对照：土方与摊铺设备、骨料与破碎站、路面结构层、水井钻探及合同和工地文件词汇。',
      summary: '外国团队在阿尔及利亚工地会遇到的设备、材料、路面结构层和合同术语，以法文、英文、阿拉伯文和简体中文对照。',
      eyebrow: '在阿尔及利亚施工',
      h1: '公共工程术语表：阿尔及利亚工地常用的法、英、阿、中术语',
      lead: '阿尔及利亚的工地文件用法文，班组说阿拉伯语，而越来越多看图纸的工程师说中文或英文。{{company}} 立足杰勒法和盖尔达耶的基地面向国际承包商，整理了最常出现的术语。',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'rental',
      related: ['fleet', 'rental', 'roads', 'partners'],
      blocks: [
        {
          type: 'prose',
          title: '如何使用本术语表',
          paragraphs: [
            '法文栏是阿尔及利亚规范、工程量清单和工地报告中出现的用语；阿拉伯文栏给出标准书面词，与工地上常听到的说法不同时在括号内注明；中文栏采用中国大陆的工程术语。术语按主题分组。存在多个说法时，给出阿尔及利亚工地上最常用的一个。',
          ],
        },
        {
          type: 'table',
          title: '土方与摊铺设备',
          caption: '四种语言的设备名称',
          head: ['法文', '英文', '阿拉伯文', '中文'],
          rows: [
            ['pelle hydraulique', 'hydraulic excavator', 'حفّارة هيدروليكية', '液压挖掘机'],
            ['bouteur (bulldozer)', 'bulldozer', 'جرّافة (بلدوزر)', '推土机'],
            ['chargeuse sur pneus', 'wheel loader', 'محمّلة بعجلات (شارجور)', '轮式装载机'],
            ['niveleuse', 'motor grader', 'آلة تسوية (نيفلوز)', '平地机'],
            ['finisseur', 'asphalt paver', 'فرّاشة الإسفلت (فينيسور)', '沥青摊铺机'],
            ['compacteur vibrant', 'vibratory roller', 'مدحلة اهتزازية', '振动压路机'],
            ['camion-benne', 'tipper truck, dump truck', 'شاحنة قلاّبة', '自卸卡车'],
            ['semi-remorque benne', 'tipper semi-trailer', 'نصف مقطورة قلاّبة', '自卸半挂车'],
            ['répandeuse de bitume', 'bitumen distributor', 'شاحنة رش الزفت (القار)', '沥青洒布车'],
            ['citerne à bitume', 'bitumen tanker', 'صهريج الزفت', '沥青运输罐车'],
            ['chariot de forage (carrière)', 'surface rock drill', 'آلة حفر الصخور', '露天凿岩钻车'],
            ['atelier de forage sur camion', 'truck-mounted drilling rig', 'جهاز حفر محمول على شاحنة', '车载钻机'],
          ],
        },
        {
          type: 'table',
          title: '骨料与破碎站',
          caption: '四种语言的骨料和破碎站词汇',
          head: ['法文', '英文', '阿拉伯文', '中文'],
          rows: [
            ['carrière', 'quarry', 'محجرة', '采石场'],
            ['station de concassage', 'crushing plant', 'محطة تكسير (كسّارة)', '破碎站'],
            ['concasseur à mâchoires', 'jaw crusher', 'كسّارة فكّية', '颚式破碎机'],
            ['concasseur à cône', 'cone crusher', 'كسّارة مخروطية', '圆锥破碎机'],
            ['concasseur à percussion', 'impact crusher', 'كسّارة صدمية', '反击式破碎机'],
            ['crible', 'screen', 'غربال', '筛分机'],
            ['granulats', 'aggregates', 'ركام (حصى)', '骨料'],
            ['sable concassé', 'crushed sand, manufactured sand', 'رمل مكسّر', '机制砂'],
            ['gravillon', 'fine gravel, chippings', 'حصى صغير (غرافييه)', '碎石'],
            ['grave non traitée (GNT)', 'unbound graded aggregate', 'حصى مدرّج غير معالج', '级配碎石'],
            ['fines', 'fines', 'الدقائق (الغبار)', '石粉'],
            ['équivalent de sable', 'sand equivalent', 'مكافئ الرمل', '砂当量'],
          ],
        },
        {
          type: 'table',
          title: '道路与土方',
          caption: '四种语言的道路施工术语',
          head: ['法文', '英文', '阿拉伯文', '中文'],
          rows: [
            ['terrassement', 'earthworks', 'أشغال ترابية', '土方工程'],
            ['déblai / remblai', 'cut / fill', 'حفر / ردم', '挖方 / 填方'],
            ['plate-forme', 'subgrade, platform', 'أرضية (الطبقة الحاملة)', '路基'],
            ['couche de forme', 'capping layer', 'طبقة التشكيل', '路床'],
            ['couche de fondation', 'sub-base', 'طبقة الأساس', '底基层'],
            ['couche de base', 'base course', 'الطبقة القاعدية', '基层'],
            ['couche de roulement', 'wearing course', 'طبقة السطح', '面层'],
            ['béton bitumineux (enrobé à chaud)', 'hot-mix asphalt', 'خرسانة إسفلتية', '热拌沥青混合料'],
            ['grave-bitume', 'bituminous base', 'حصى مقيّر', '沥青稳定碎石'],
            ['couche d’accrochage', 'tack coat', 'طبقة التثبيت', '粘层'],
            ['compactage', 'compaction', 'رصّ (دكّ)', '压实'],
            ['piste d’accès', 'access track', 'مسلك الدخول', '施工便道'],
            ['installation de chantier', 'site mobilization, site set-up', 'تجهيز الورشة', '施工进场（三通一平）'],
            ['forage d’eau (puits)', 'water well', 'بئر (فوراج)', '水井'],
          ],
        },
        {
          type: 'table',
          title: '合同与工地文件',
          caption: '四种语言的合同和行政词汇',
          head: ['法文', '英文', '阿拉伯文', '中文'],
          rows: [
            ['maître d’ouvrage (service contractant)', 'project owner, contracting authority', 'صاحب المشروع (المصلحة المتعاقدة)', '业主（发包方）'],
            ['maître d’œuvre', 'engineer, supervising consultant', 'صاحب العمل (مكتب الدراسات)', '监理/设计单位'],
            ['entreprise titulaire', 'main contractor', 'المقاول الرئيسي', '总承包商'],
            ['sous-traitance / sous-traitant', 'subcontracting / subcontractor', 'المناولة / المناول', '分包 / 分包商'],
            ['marché public', 'public contract', 'صفقة عمومية', '公共采购合同'],
            ['CCTP (cahier des clauses techniques particulières)', 'technical specification', 'دفتر الشروط التقنية الخاصة', '技术规范'],
            ['bordereau des prix unitaires', 'schedule of unit prices', 'جدول الأسعار الوحدوية', '单价表'],
            ['devis quantitatif et estimatif', 'bill of quantities', 'الكشف الكمي والتقديري', '工程量清单'],
            ['ordre de service (ODS)', 'notice to proceed', 'أمر بالخدمة', '开工令'],
            ['PV de réception', 'acceptance report', 'محضر الاستلام', '验收报告（验收证书）'],
            ['attachement', 'measurement sheet', 'كشف الأشغال المنجزة', '计量单'],
            ['situation de travaux', 'progress payment statement', 'وضعية الأشغال', '进度款报表'],
            ['location avec opérateur', 'rental with operator', 'كراء مع سائق', '带操作手租赁'],
            ['registre de commerce (RC)', 'commercial register extract', 'السجل التجاري', '商业登记证'],
            ['certificat de qualification et classification', 'qualification and classification certificate', 'شهادة التأهيل والتصنيف المهنيين', '资质等级证书'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: '三个容易混淆的词',
          paragraphs: [
            '在阿尔及利亚，“leasing” 通常指银行的 crédit-bail（融资租赁），而不是经营性租赁。“Forage” 指钻成的水井，而不只是钻进这一动作。“Attachement” 是工地上签认的计量记录，不是电子邮件的附件。',
          ],
        },
        {
          type: 'faq',
          title: '常见问题',
          items: [
            { id: 'gl-language', q: '阿尔及利亚的施工合同用什么语言？', a: '阿尔及利亚的公共合同、规范和工地文件一般用法文书写，行政和工地上使用阿拉伯语；配备双语工地团队，或有一个同时使用两种语言的当地合作伙伴，能为外国承包商节省大量时间。' },
            { id: 'gl-finisseur', q: 'Finisseur 是什么？', a: 'Finisseur 是法文中沥青摊铺机的名称，即在压路机之前把热拌沥青均匀摊铺成层的机械；阿拉伯文为 فرّاشة الإسفلت，中文为沥青摊铺机。' },
            { id: 'gl-attachement', q: '阿尔及利亚工地上的 attachement 是什么？', a: 'Attachement 是由承包商和监理工程师签认的计量单，记录一个计量期内完成的工程量，是进度款报表（situation de travaux）的依据。' },
            { id: 'gl-gnt', q: '道路规范中的 GNT 是什么意思？', a: 'GNT 是 grave non traitée 的缩写，即未处治的级配碎石，如用于底基层和基层的 0/31.5；英文称 unbound graded aggregate，中文称级配碎石。' },
          ],
        },
        {
          type: 'prose',
          title: 'ETAHG 能提供什么帮助',
          paragraphs: [
            '{{company}} 在工地上使用法语和阿拉伯语；本网站和公司简介均有四种语言版本，合作伙伴可告知其希望使用的通信语言。第一张表中的设备是公司自有[设备](page:fleet)的类别，可提供[租赁（短租／长租）](page:rental)；道路术语描述的是公司的[道路施工](page:roads)工作；[国际合作](page:partners)页面则说明与外国承包商的合作如何开始。',
          ],
        },
        {
          type: 'cta',
          title: '缺少某个术语？',
          text: '请告诉我们需要哪个词的哪种语言，我们会补充。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '国际合作', page: 'partners', variant: 'secondary' },
          ],
        },
      ],
    },

    'subcontracting-algeria': {
      slug: 'public-works-subcontracting-algeria',
      nav: '阿尔及利亚公共工程分包​如何运作',
      title: '阿尔及利亚公共工程分包解析 | ETAHG',
      description: '阿尔及利亚公共工程分包：法律依据、40% 上限、发包方事先批准、付款方式以及通常分包的工作范围，面向总承包商和分包商。',
      summary: '民法典、2015 年采购法令与 2023 年法律、审批流程、付款以及通常分包的工作范围：面向总承包商和分包商的阿尔及利亚公共工程分包解析。',
      eyebrow: '在阿尔及利亚施工',
      h1: '阿尔及利亚公共工程分包​如何运作',
      lead: '阿尔及利亚的大多数大型项目由一家总承包商和一批阿尔及利亚分包商共同完成，后者承担土方、运输、骨料、水井和收尾工作。{{company}} 正是在这些工作范围内，向总承包商提供自有设备、骨料和筑路班组。本文概括法规如何界定这种关系以及实践中如何运作，仅为一般性说明。',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'roads',
      related: ['roads', 'partners', 'mobilization'],
      blocks: [
        {
          type: 'prose',
          title: '法律依据',
          paragraphs: [
            '阿尔及利亚的分包由三层法规界定。民法典允许承包商在合同未禁止的情况下将全部或部分工作分包，同时对分包商的工作向业主承担全部责任。公共采购条例——2015 年第 15-247 号总统令，以及在实施细则出台期间取代其原则的 2023 年第 23-12 号法律——增加了公共合同的特定条件：上限、事先批准和申报。合同本身则可通过特殊条款进一步限制分包，或要求在投标中列明分包商。',
          ],
        },
        {
          type: 'prose',
          title: '40% 上限与不得分包的内容',
          paragraphs: [
            '根据 2015 年条例，公共合同中分包的部分不得超过合同总金额的 40%。常规供货合同完全不得分包。投标人须在报价中说明合同可汇出外汇部分中对应分包给依阿尔及利亚法律设立的公司的服务金额，这一点对外国投标人尤其重要，因为它把分包与合同中可用外币支付的份额联系在一起。2023 年法律的实施细则可能调整这些数字；适用于特定招标的，以招标文件所载法规为准。',
          ],
        },
        {
          type: 'steps',
          title: '审批流程',
          intro: '公共合同通常遵循的顺序；私营合同更自由，但常常照此办理。',
          items: [
            { title: '确定', text: '总承包商确定拟分包的工作范围和拟使用的阿尔及利亚公司，最好在投标时就已确定。' },
            { title: '文件', text: '分包商提供商业登记摘录、税务和社保清缴证明、资质证书以及其资源说明。' },
            { title: '申请批准', text: '总承包商将分包商和分包合同草案提交发包方事先批准。' },
            { title: '批准与签约', text: '获批后，分包合同按条例要求的必备条款签署，副本报发包方备案。' },
            { title: '工地申报', text: '分包商开工时向发包方申报其在工地的存在，其人员进行社保登记。' },
            { title: '执行与付款', text: '工程量在总承包商的计量单（attachement）中计量；分包商由总承包商付款，合同有规定时也可由发包方直接付款。' },
          ],
        },
        {
          type: 'prose',
          title: '付款',
          paragraphs: [
            '一般情况下，总承包商从其收到的进度款中按分包合同条款向分包商付款。条例也规定，合同允许时发包方可直接向获批的分包商付款，对工作范围较大的分包商来说，这是值得争取的保障。无论哪种方式，分包商的现金流都跟随总合同进度款报表（situation de travaux）的节奏，并受公共会计可能带来的延迟影响；分包合同应写明总承包商收款延迟时如何处理。付款以第纳尔通过阿尔及利亚银行进行。',
          ],
        },
        {
          type: 'prose',
          title: '总承包商批准分包商前​核查什么',
          paragraphs: [
            '文件是第一道筛选：相关业务范围的有效商业登记、最新的税务和社保证明以及相关领域的资质证书。第二道是能力：分包商是否拥有或能可靠获得该工作范围所需的设备，设备在哪里？能否在规定时间内调遣到工地，是否熟悉地形？第三道是组织：有能看懂图纸的工地负责人、实验室跟踪、安全规范，以及有人接电话。跳过第二和第三道筛选的总承包商，往往在开工的第一个月就会发现问题。',
          ],
        },
        {
          type: 'table',
          title: '最常分包的工作范围',
          intro: '阿尔及利亚基础设施项目的典型分包包以及分包商须具备的条件。',
          caption: '常见分包范围及所需资源',
          head: ['工作范围', '要求', '典型资源'],
          rows: [
            ['土方与平台', '按图纸挖填，压实到规定密度', '挖掘机、推土机、平地机、压路机、洒水车'],
            ['道路结构层', '按规范完成底基层、基层，有时含沥青层', '平地机、压路机、摊铺机、沥青洒布车、实验室跟踪'],
            ['骨料供应与运输', '按规范粒级、按配送量供货', '采石场和破碎站、卡车和半挂车'],
            ['工地开工', '施工便道、平台、首批土方、水源', '调遣的设备队伍、钻机'],
            ['水井', '经许可的钻孔，成井并完成试验', '钻机、抽水试验设备'],
            ['带操作手的设备', '设备在工地上供总承包商使用', '设备队伍、操作手、维护支持'],
          ],
        },
        {
          type: 'faq',
          title: '常见问题',
          items: [
            { id: 'sc-limit', q: '阿尔及利亚公共合同的分包上限是多少？', a: '根据 2015 年公共采购条例（第 15-247 号法令），分包不得超过公共合同总金额的 40%，常规供货合同完全不得分包；具体招标应核对 2023 年法律的实施细则。' },
            { id: 'sc-approval', q: '在阿尔及利亚分包商需要获得批准吗？', a: '需要。在公共合同上，分包商须事先经发包方批准，分包合同副本须报发包方备案，分包商开工时须申报其在工地的存在。' },
            { id: 'sc-foreign', q: '外国总承包商可以分包给阿尔及利亚公司吗？', a: '可以，而且是被期待的：投标人要在报价中注明分包给依阿尔及利亚法律设立的公司的合同份额，根据 2023 年法律，指定项目的国际招标中的外国投标人须承诺与阿尔及利亚控股企业建立合作关系，而当地分包是解决土方、运输、骨料和水井的常规方式。' },
            { id: 'sc-payment', q: '阿尔及利亚公共合同中由谁向分包商付款？', a: '一般由总承包商从其进度款中按分包合同条款向分包商付款，但条例也允许在合同有规定时由发包方直接向获批的分包商付款。' },
            { id: 'sc-documents', q: '在阿尔及利亚分包商需要哪些文件？', a: '通常包括相关业务范围的商业登记摘录、税务识别号和最新税务清缴证明、最新社保证明（CNAS 和 CASNOS）、相关领域的资质等级证书，以及设备和人员的说明。' },
          ],
        },
        {
          type: 'prose',
          title: 'ETAHG 能提供什么帮助',
          paragraphs: [
            '{{company}} 是一家 1997 年成立的阿尔及利亚有限责任公司，以分包商身份承担土方、路面结构层、沥青摊铺、场地准备、骨料供应和水井等明确划分的工作范围，使用驻扎在杰勒法的自有设备以及艾因伊贝勒附近 Oued Sdeur 的自有采石场和破碎站。公司可向准备审批文件的总承包商提供其登记文件。请参阅[道路施工](page:roads)、[国际承包商的当地合作伙伴](page:partners)和[施工进场与开工准备](page:mobilization)。',
          ],
        },
        {
          type: 'cta',
          title: '寻找可随时报批的​分包商？',
          text: '请把工作范围、地点和进度发给我们。我们将答复我们的能力，并提供审批文件所需的资料。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '国际合作', page: 'partners', variant: 'secondary' },
          ],
        },
      ],
    },

    'crushing-plant-explained': {
      slug: 'how-a-crushing-plant-produces-fine-aggregate',
      nav: '破碎筛分站​如何生产细骨料',
      title: '破碎筛分站​如何生产细骨料 | ETAHG',
      description: '从爆破到料堆：颚式、圆锥和立轴冲击式破碎机、筛分、石粉控制，以及决定破碎站机制砂产量和稳定性的因素。面向骨料采购方的破碎流程解析。',
      summary: '面向采购方的采石场破碎流程解析：开采、粗碎、中碎和细碎、筛分、石粉控制，以及决定细骨料产量和稳定性的因素。',
      eyebrow: '骨料',
      h1: '破碎筛分站​如何生产细骨料',
      lead: '破碎站通过一系列设备把爆破后的岩石变成级配一致的材料，每台设备把粒径再减小一点并把产出分选开来。{{company}} 在杰勒法省经营自有采石场和石料破碎筛分站，在此为产品的采购方（而非建造此类设备的人）讲解这一流程。',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'aggregates',
      related: ['aggregates', 'fleet'],
      blocks: [
        {
          type: 'prose',
          title: '从岩壁开始',
          paragraphs: [
            '采石场是在岩石矿床上开挖的台阶，在阿尔及利亚多为石灰岩，依据国家矿业管理机构颁发、按 2025 年矿业法续期的采矿权证开采。露天凿岩钻车在台阶上按网格钻孔，持证班组装药起爆，爆破形成一堆破碎的岩石——爆堆，其块度分布取决于钻孔网格和装药量。装载机或挖掘机把岩石装入卡车或直接送入粗碎机。最终砂的质量在这里就已经开始决定：坚硬、洁净、未风化的岩石产出强度高、洁净的骨料；夹有黏土层的岩石则产生有害细粒，破碎站必须将其去除。',
          ],
        },
        {
          type: 'steps',
          title: '逐级流程',
          intro: '生产细骨料的典型三段破碎流程；各破碎站细节不同。',
          items: [
            { title: '给料与预筛', text: '料斗和振动给料机把岩石定量送入流程；格筛或预筛分机在进入破碎机前去除天然细粒和泥土。' },
            { title: '粗碎：颚式破碎机', text: '一块固定颚板和一块动颚板挤压岩石直至破裂并从排料口落下；粗碎把数百毫米的大块减小到约 100 至 200 mm。' },
            { title: '中碎：圆锥或反击式破碎机', text: '圆锥破碎机在旋转的动锥和定锥之间挤压岩石；反击式破碎机把岩石抛向反击板。两者都把材料减小到几十毫米并开始整形。' },
            { title: '细碎：立轴冲击式破碎机', text: '立轴冲击式破碎机（VSI）在转子中加速石块，将其抛向砧环或石料衬层，使其沿薄弱面破裂；这一段产出立方体颗粒和大部分机制砂。' },
            { title: '筛分', text: '多层振动筛把物料分成销售的粒级——0/3、3/8、8/15 等——并把超粒径料送回原破碎机；这种闭路流程正是级配受控的原因。' },
            { title: '石粉控制与堆料', text: '通过喷淋或抽吸收集粉尘，并通过筛分、风选或水洗调整砂的石粉含量；皮带机堆成供卡车装载的料堆。' },
          ],
        },
        {
          type: 'prose',
          title: '为什么细碎段​决定砂的质量',
          paragraphs: [
            '颚式和圆锥破碎机靠挤压工作，产出的颗粒呈片状和长条状，用于底基层尚可，用于混凝土和沥青则不理想。冲击破碎，尤其是立轴冲击式破碎机，使岩石沿天然层面破裂并磨圆棱角，产出更接近立方体、级配更好的产品，并大量生成砂的粒级。因此，销售混凝土和沥青用细骨料的破碎站靠的是细碎段：转子转速、部件磨损和给料情况决定了砂的曲线和形状。最细的产品还要用到制砂设备。',
          ],
        },
        {
          type: 'table',
          title: '决定破碎站产量的因素',
          intro: '当项目需要高而稳定的供应量时，采购方应询问的因素。',
          caption: '影响破碎站产能和稳定性的因素',
          head: ['因素', '影响', '向供应商询问什么'],
          rows: [
            ['岩石硬度与磨蚀性', '岩石越硬，破碎越慢、磨损越快', '是什么岩石，洛杉矶磨耗和 Micro-Deval 值是多少'],
            ['给料粒度与爆破', '爆破充分的给料能保持粗碎顺畅', '采石场工作面如何开采'],
            ['破碎机参数与易损件', '排料口和衬板磨损会改变曲线', '参数和衬板多久检查一次'],
            ['筛面面积与层数', '筛分往往是瓶颈', '可以同时生产哪些粒级'],
            ['闭路流程', '超粒径料返回破碎机使产品稳定', '砂的粒级是否闭路'],
            ['含水与细粒', '潮湿或含泥给料会堵塞筛网', '石粉如何控制；砂是否水洗或分级'],
            ['库存与运输', '料堆吸收峰值；卡车决定到场供应量', '地面库存量；自有卡车还是外雇'],
          ],
        },
        {
          type: 'prose',
          title: '稳定性就是产品',
          paragraphs: [
            '对采购方而言，破碎站的价值不在于峰值吨数，而在于每周的砂是否一样：同样的曲线、同样的石粉、同样的洁净度。这种稳定性来自均匀的给料、对破碎机和筛分机的维护，以及在破碎站的检测——对生产样品做级配和砂当量试验并记录在案。需要高产量的项目，如大规模混凝土浇筑计划或长距离道路的结构层，应要求查看这些记录并参观破碎站；料堆、筛网状态和粉尘控制在十分钟内就能说明很多问题。',
          ],
        },
        {
          type: 'faq',
          title: '常见问题',
          items: [
            { id: 'cp-stages', q: '破碎站有哪些工段？', a: '典型的破碎站有粗碎段（颚式破碎机把爆破岩石破碎到约 100–200 mm）、中碎段（圆锥或反击式破碎机把它减小到几十毫米）、细碎段（通常是立轴冲击式破碎机，用于整形和制砂）以及筛分机，筛分机分选粒级并把超粒径料送回破碎机。' },
            { id: 'cp-jaw-vs-cone', q: '颚式破碎机和圆锥破碎机有什么区别？', a: '颚式破碎机在固定颚板和动颚板之间挤压大块岩石，用作粗碎机；圆锥破碎机在旋转的动锥和定锥之间挤压已初碎的岩石，用作中碎或细碎机，生产更细、更均匀的产品。' },
            { id: 'cp-vsi', q: 'VSI 破碎机用来做什么？', a: '立轴冲击式破碎机（VSI）把石块高速抛向砧环或石料衬层，使其沿天然层面破裂；用于细碎段，生产混凝土和沥青用的立方体颗粒和机制砂。' },
            { id: 'cp-fines', q: '机制砂的石粉如何控制？', a: '先在源头用喷水和抽吸限制粉尘，再通过筛分、风选或水洗控制；目标石粉含量以项目规范要求为准，并用亚甲蓝试验核查剩余细粒不含黏土。' },
            { id: 'cp-capacity', q: '破碎站能生产多少骨料？', a: '取决于破碎机和筛分机的规格、岩石硬度、同时生产的粒级以及采石场和运输的组织；采购方不应只看标称吨数，而应询问破碎站对所需粒级能持续保持的供应量以及可用库存。' },
          ],
        },
        {
          type: 'prose',
          title: 'ETAHG 能提供什么帮助',
          paragraphs: [
            '{{company}} 经营位于杰勒法省艾因伊贝勒附近 Oued Sdeur 的自有采石场和石料破碎筛分站 Carrière Djellal El Gharbi，其破碎和制砂设备生产高品质细骨料，尤其适合需要高产量的项目，并以自有卡车和自卸半挂车运输。在筹备项目时可商议参观破碎站。请参阅[细骨料生产](page:aggregates)和[设备](page:fleet)页面。',
          ],
        },
        {
          type: 'cta',
          title: '项目骨料需求量大？',
          text: '请告诉我们粒级、供应量和地点。我们将答复破碎站能持续供应多少以及如何配送。',
          ctas: [
            { label: '联系我们', page: 'contact', variant: 'primary' },
            { label: '细骨料生产', page: 'aggregates', variant: 'secondary' },
          ],
        },
      ],
    },
  },
};
