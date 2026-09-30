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
 *   "SARL ETAHG 是一家阿尔及利亚公司，专业从事细骨料生产、道路施工、重型设备租赁与
 *    长期租赁、项目启动与进场动员以及水井钻探。"
 * "SARL ETAHG", "ETAHG" and "EURL KAYLE KENNY" stay in Latin capitals; never transliterate
 * and never expand the acronym ETAHG.
 *
 * TERMINOLOGY
 *   fine aggregate 细骨料 / crushed sand, manufactured sand 机制砂 / stone crushing plant
 *   石料破碎筛分站 / rental 设备租赁 / leasing 长期租赁 (NOT 融资租赁 = bank crédit-bail) /
 *   mobilization, project initialization 项目启动与进场动员 / semi-trailer truck 半挂车
 *   (牵引车＋半挂车) / trucks 载重卡车 (EN says "trucks", not specifically dump trucks) /
 *   bulldozer 推土机 / excavator 挖掘机 / road paver 摊铺机 / water well drilling rig 水井钻机 /
 *   subcontracting 分包 / local partner 当地合作伙伴 / wilaya 省 (wilaya).
 * PLACE NAMES (site.config.json names.zh): 阿尔及利亚、阿尔及尔、杰勒法 (Djelfa)、
 *   盖尔达耶 (Ghardaïa)、瓦德塞杜尔 (Oued Seddeur)、阿尔及尔穆罕默迪亚 (Mohammadia).
 *   RN1 = 1 号国道 (RN1).
 * TYPOGRAPHY: full-width Chinese punctuation (，。：；、（）“”); a space between Chinese and
 *   Latin words or numbers (e.g. "约 25 公里"); inline links keep ASCII [label](target).
 * WHATSAPP: prefilled messages are Chinese first, followed by an English line, because the
 *   ETAHG team works in Arabic, French and English.
 * META: titles <= 30 Chinese characters before " | SARL ETAHG"; descriptions 60-80 Chinese
 *   characters (Baidu / Google CJK snippet length).
 */

// Phone numbers with no-break spaces so they never wrap inside Chinese text.
const TEL = '+213\u00a0558\u00a096\u00a010\u00a049';
const TEL_CN = '00\u00a0213\u00a0558\u00a096\u00a010\u00a049';
const ENTITY = 'SARL ETAHG 是一家阿尔及利亚公司，专业从事细骨料生产、道路施工、重型设备租赁与长期租赁、项目启动与进场动员以及水井钻探。';
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
    phoneLabel: '电话',
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
      legalForm: '公司形式',
      legalFormValue: 'SARL，即依据阿尔及利亚法律设立的有限责任公司',
      country: '国家',
      countryValue: '阿尔及利亚',
      registeredOffice: '注册地',
      address: '地址',
      operations: '经营场所',
      activities: '业务范围',
      activitiesValue: '细骨料生产（石料破碎）、道路施工、重型设备租赁与长期租赁、项目启动与进场动员、水井钻探',
      languages: '工作语言',
      languagesValue: '阿拉伯语、法语、英语（网站另提供简体中文版）',
      group: '集团公司',
      groupValue: 'EURL KAYLE KENNY：重型设备配件，阿尔及尔',
      founded: '成立年份',
      rc: '商业注册号（RC）',
      nif: '税务识别号（NIF）',
      nis: '统计识别号（NIS）',
      ai: '税务条目号（AI）',
      fleet: '设备',
      capacity: '破碎产能',
      capacityUnit: '吨／小时',
      certifications: '资质认证',
      phone: '电话／WhatsApp',
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
        quarry: '石料破碎筛分站',
        parts: '配件门店及仓库',
      },
      details: {
        hq: 'SARL ETAHG 的注册所在地。盖尔达耶位于阿尔及利亚撒哈拉北部的姆扎布河谷。',
        depot: '重型设备的驻地，位于高原地区、1 号国道（RN1）沿线；RN1 是连接阿尔及尔与撒哈拉的南北主干道。',
        quarry: '细骨料生产基地，位于杰勒法城外，距市区以南约 25 公里。',
        parts: '集团旗下配件公司 EURL KAYLE KENNY，库存位于阿尔及尔。',
      },
      wilaya: '{{region}}省',
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

    notFound: {
      title: '页面未找到 | SARL ETAHG',
      heading: '未找到该页面',
      text: '网址可能输入有误，或页面已移动。请通过以下链接继续浏览。',
      home: '返回首页',
    },

    og: {
      tagline: '骨料 · 道路 · 重型设备 · 阿尔及利亚',
      line: '细骨料生产、道路施工、设备租赁、项目启动与进场动员、水井钻探。',
    },
  },

  pages: {
    /* ------------------------------------------------------------------ HOME */
    home: {
      slug: '',
      nav: '首页',
      title: 'SARL ETAHG | 阿尔及利亚骨料供应、工程机械租赁与道路施工',
      description: 'SARL ETAHG 是阿尔及利亚当地合作伙伴：自有破碎站供应细骨料（机制砂），提供工程机械租赁、道路施工分包、项目进场动员及水井钻探服务。',
      summary: 'SARL ETAHG 概览：阿尔及利亚公司，专业从事细骨料生产、道路施工、设备租赁与长期租赁、项目启动与进场动员以及水井钻探。',
      blocks: [
        {
          type: 'hero',
          size: 'home',
          eyebrow: '阿尔及利亚重型工程企业',
          title: 'SARL ETAHG：阿尔及利亚细骨料生产、重型设备与道路施工',
          lead: 'SARL ETAHG（SARL 即依据阿尔及利亚法律设立的有限责任公司）是一家阿尔及利亚公司，专业从事细骨料生产、道路施工、重型设备租赁与长期租赁、项目启动与进场动员以及水井钻探。我们自营石料破碎筛分站，并拥有修建道路所用的全部设备，现将二者一并服务于业主和承包商，包括正在寻找当地合作伙伴的国际企业。',
          points: [
            '注册地：盖尔达耶，撒哈拉北部',
            '设备基地：杰勒法，位于 1 号国道（RN1）南北主轴线上',
            '石料破碎筛分站：瓦德塞杜尔（Oued Seddeur），杰勒法以南约 25 公里',
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
            { title: '道路施工', text: '以自有设备完成土方、路面结构层及沥青面层施工。' },
            { title: '设备租赁', text: '半挂车、载重卡车、推土机、挖掘机及摊铺机，可短租或长租。' },
            { title: '进场动员', text: '开辟新工地：场地清理、施工便道、平台、土方及骨料供应。' },
            { title: '水井钻探', text: '以自有钻机钻凿水井，服务工地、农场、工业及居民用水。' },
          ],
        },
        {
          type: 'split',
          label: '公司',
          title: '连接阿尔及利亚南北的重型工程合作伙伴',
          paragraphs: [
            '{{company}} 是一家阿尔及利亚有限责任公司（SARL），注册于撒哈拉北部姆扎布河谷的**盖尔达耶**。公司重型设备驻扎在高原地区的**杰勒法**，位于连接阿尔及尔与撒哈拉的南北主干道 1 号国道（RN1）沿线。石料破碎筛分站位于杰勒法以南约 25 公里的**瓦德塞杜尔（Oued Seddeur）**；集团旗下配件公司 EURL KAYLE KENNY 位于阿尔及尔。',
            '公司的半挂车、载重卡车、推土机、挖掘机和摊铺机主要为修建道路而配置，ETAHG 已在阿尔及利亚许多地区完成道路项目。这些工程让我们的团队切实掌握了各地的地形地貌，以及在不同地形条件下保持设备高效运转的要领。如今，同一批设备、骨料产能和现场经验，以供货、租赁、长期租赁和分包等方式向业主及承包商开放。',
          ],
          ctas: [{ label: '关于我们', page: 'about', variant: 'secondary' }],
          illustration: 'mobilization',
        },
        {
          type: 'cards',
          label: '服务',
          title: '业务范围',
          intro: '六项相互配套的服务，均由自有生产线和设备完成，同一项目的材料、设备和现场施工可由一家合作伙伴统一承担。',
          style: 'services',
          items: [
            { page: 'aggregates', illustration: 'crusher', title: '骨料生产', text: '杰勒法附近自有破碎站生产的高品质机制细骨料（机制砂），用于混凝土、沥青及路面结构层，尤其适合高产量需求的项目。' },
            { page: 'roads', illustration: 'paver', title: '道路施工', text: '公司起家业务：土方、底基层、基层及沥青面层，全部以自有卡车、推土机、挖掘机和摊铺机施工。' },
            { page: 'rental', illustration: 'excavator', title: '设备租赁与长期租赁', text: '半挂车、载重卡车、推土机、挖掘机和摊铺机，可按施工阶段或整个项目周期租用，条款按项目商定。' },
            { page: 'mobilization', illustration: 'mobilization', title: '项目启动与进场动员', text: '设备进场、场地清理、施工便道、平台、首批土方及骨料供应，为主体工程开工做好准备。' },
            { page: 'drilling', illustration: 'drill-rig', title: '水井钻探', text: '以自有钻机钻凿水井，服务施工工地、农业、工业及居民用水。' },
            { page: 'parts', illustration: 'spare-parts', title: '配件供应（EURL KAYLE KENNY）', text: '集团旗下公司从其位于阿尔及尔的门店和仓库供应重型柴油发动机配件。' },
          ],
        },
        {
          type: 'features',
          label: '国际合作',
          title: '为什么 ETAHG 是务实的当地合作伙伴',
          intro: '国际承包商、供应商或投资方在阿尔及利亚启动项目，需要一家已拥有设备、能生产材料并熟悉当地地质条件的本地企业。这正是 ETAHG 的核心优势。',
          items: [
            { title: '设备自有', text: '卡车、推土机、挖掘机、摊铺机和钻机均为自有设备，由我们自行管理，可随时调遣进场。' },
            { title: '材料源头供应', text: '自有破碎站生产细骨料，项目从一开始即可锁定这一关键材料的本地供应。' },
            { title: '区位居中', text: '立足杰勒法和盖尔达耶，地处阿尔及尔至撒哈拉的 RN1 轴线上，可同时服务北部和南部项目。' },
            { title: '熟悉地形', text: '在阿尔及利亚许多地区完成的道路项目，使我们对当地地质、材料和施工条件有切实了解。' },
            { title: '一家伙伴，多项工作', text: '骨料、设备、土方、道路和水井可纳入同一份协议，由一个联系人统一对接。' },
            { title: '集团内配件保障', text: '集团旗下阿尔及尔公司 EURL KAYLE KENNY 供应重型设备配件，保障设备持续运转。' },
          ],
        },
        {
          type: 'steps',
          label: '进场动员',
          title: '新项目如何进场动员',
          intro: '工地启动阶段决定工期的得失。我们的进场动员遵循清晰的流程，并根据每个项目调整、与客户商定。',
          items: [
            { title: '工作范围与现场踏勘', text: '与您共同研究项目位置、进场道路、地形、工程量和工期，明确开工首日必须就绪的内容。' },
            { title: '设备与资源计划', text: '按工作范围选定设备、操作手和物资，并商定进场条款。' },
            { title: '运输进场', text: '重型设备由半挂车从杰勒法基地或其他工地直接运至现场。' },
            { title: '开辟工地', text: '场地清理、施工便道、平台及首批土方，为主体工程开工创造条件。' },
            { title: '材料与用水', text: '组织骨料供应；如工地无水源，可钻凿水井。' },
            { title: '生产与跟进', text: '设备按计划作业，集团提供配件保障，直至工地移交，或以租赁、分包方式继续施工。' },
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
            '对客户和合作伙伴而言，集团内拥有配件公司意味着能更快获得合适的配件，设备停机时间更短。',
          ],
          disclaimer: DISCLAIMER,
          cta: { label: '访问 kaylekenny.com', href: 'https://www.kaylekenny.com' },
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
          title: '计划在阿尔及利亚开展项目？',
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
      title: '阿尔及利亚重型工程与施工服务 | SARL ETAHG',
      description: 'SARL ETAHG 在阿尔及利亚的服务：机制细骨料供应、道路施工、重型设备租赁与长期租赁、项目进场动员及水井钻探，可单项委托或组合承包。',
      summary: 'SARL ETAHG 各项服务概览，以及如何在同一项目中组合使用。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '服务',
          title: '六项服务，阿尔及利亚一站式重型工程合作伙伴',
          lead: '{{company}} 集材料生产、重型设备和道路施工经验于一身。各项服务既可单独委托，也可组合纳入同一份协议，从前期研究到工程结束由同一联系人对接。',
          illustration: 'hero-terrain',
        },
        {
          type: 'cards',
          label: '概览',
          title: '我们的服务',
          style: 'services',
          items: [
            { page: 'aggregates', illustration: 'crusher', title: '骨料生产', text: '杰勒法附近瓦德塞杜尔的石料破碎与制砂设备，生产高品质细骨料，特别适合需要高产量的项目。' },
            { page: 'roads', illustration: 'paver', title: '道路施工', text: '公司起家业务：以自有设备在阿尔及利亚许多地区修建道路，从土方、级配碎石层到沥青面层。' },
            { page: 'rental', illustration: 'excavator', title: '设备租赁与长期租赁', text: '修建道路的同一批设备，可按施工阶段或整个项目向其他承包商出租，条款按项目商定。' },
            { page: 'mobilization', illustration: 'mobilization', title: '项目启动与进场动员', text: '项目启动：我们派遣设备和操作手开辟新工地，修建便道和平台，为主体工程做好准备。' },
            { page: 'drilling', illustration: 'drill-rig', title: '水井钻探', text: '以自有钻机钻凿水井，服务施工工地、农业、工业及居民用水。' },
            { page: 'parts', illustration: 'spare-parts', title: '配件供应', text: '通过集团旗下 EURL KAYLE KENNY 供应重型柴油发动机配件，库存位于阿尔及尔。' },
          ],
        },
        {
          type: 'prose',
          label: '合作方式',
          title: '一家公司，多项工作',
          paragraphs: [
            '阿尔及利亚的大型项目依赖几项关键资源：稳定的骨料供应、适时到位的重型设备、规范开辟的工地，以及在干旱地区必不可少的水源。如果每项资源来自不同供应商，业主或总承包商就要花大量时间协调，每一个接口都可能影响工期。{{company}} 可以统一提供这些资源。',
            '新建基础设施项目的典型组合是：我们调遣设备进场并开辟工地，生产工程所需的细骨料，为主体工程提供卡车和土方设备，作为分包商承担土方或摊铺工作；如工地无水，再钻凿一口水井。重型发动机配件则由集团旗下的 EURL KAYLE KENNY 提供保障。',
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
            ['[道路施工](page:roads)', '土方、路基、底基层、基层及沥青面层', '推土机、挖掘机、卡车、摊铺机', '公共及私营业主、总承包商'],
            ['[设备租赁与长期租赁](page:rental)', '按施工阶段或整个项目提供设备', '半挂车、载重卡车、推土机、挖掘机、摊铺机', '承包商、EPC 总承包企业、工业项目'],
            ['[项目启动与进场动员](page:mobilization)', '设备进场、场地清理、施工便道、平台、首批土方、供应体系搭建', '半挂车、推土机、挖掘机、卡车', '初入阿尔及利亚的国际承包商、业主'],
            ['[水井钻探](page:drilling)', '为工地、农场、工业及居民钻凿水井', '水井钻机', '施工工地、农业、工业、社区'],
            ['[配件供应](page:parts)', '重型柴油发动机配件（EURL KAYLE KENNY）', '阿尔及尔配件门店及仓库', '设备车队业主、维修厂'],
          ],
        },
        {
          type: 'features',
          label: '组合方案',
          title: '典型组合',
          intro: '以下为常见项目情形下的服务组合示例，具体范围均与客户共同确定。',
          items: [
            { title: '新建道路项目', text: '进场动员与土方、自有破碎站供应骨料、自有摊铺机摊铺，按一个连续流程统筹安排。' },
            { title: '新建工业或能源项目', text: '开辟场地、修建进场道路和平台、钻凿施工用水井，并为主体工程租赁设备。' },
            { title: '承包商施工高峰', text: '租用额外的卡车、推土机或挖掘机，含运输进场及集团配件保障。' },
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
      title: '阿尔及利亚骨料供应：杰勒法机制砂生产 | SARL ETAHG',
      description: 'SARL ETAHG 在阿尔及利亚杰勒法附近自营石料破碎筛分站，供应高品质细骨料（机制砂），用于混凝土、沥青和道路工程，适合高产量项目。',
      summary: 'SARL ETAHG 位于杰勒法附近瓦德塞杜尔的石料破碎筛分站生产高品质机制细骨料，适合高产量需求。',
      service: { name: '细骨料生产与供应', serviceType: '机制细骨料（机制砂）生产' },
      whatsapp: '您好，SARL ETAHG。我想了解细骨料供应事宜（项目地点、用途、数量、供货时间）。\nHello SARL ETAHG, I would like information on fine aggregate supply (location, use, quantities, schedule).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '骨料生产',
          title: '为阿尔及利亚大方量项目供应机制细骨料',
          lead: '{{company}} 在其位于杰勒法以南约 25 公里的瓦德塞杜尔（Oued Seddeur）石料破碎筛分站，生产高品质机制细骨料（又称机制砂）。站内的破碎与制砂设备尤其适合需要高产量的项目，如道路工程、混凝土生产和大型基础设施工地。',
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
            '细骨料是粒状材料中砂粒粒径的部分，即能通过数毫米筛孔的颗粒，欧洲标准中通常以 4 毫米为界。在混凝土中，细骨料填充粗骨料之间的空隙并与水泥浆结合；在沥青混合料中，它使混合料形成密实、稳定的结构；在路面结构层中，它补全级配，使材料易于压实。',
            '机制细骨料是将开采的岩石分级多段破碎，再按粒径筛分而成。由于岩石来源明确、工艺受控，可按稳定级配、以大型项目所需的产量持续生产，而不必依赖供应不稳定的天然砂。',
          ],
          list: [
            '结构混凝土及商品混凝土',
            '砌块、路缘石、管材等混凝土预制构件',
            '沥青混合料及表面处治',
            '道路和场坪的级配碎石底基层与基层',
            '砂浆、抹灰及一般建筑工程',
          ],
          illustration: 'crusher',
        },
        {
          type: 'prose',
          label: '机制砂',
          title: '阿尔及利亚的机制砂与天然砂',
          paragraphs: [
            '阿尔及利亚的天然砂主要来自河床（为保护水道，开采受到限制）或撒哈拉沙丘。沙丘砂储量丰富，但颗粒极细、浑圆且粒径单一。单独使用时，往往会增加混凝土需水量，并降低沥青混合料的稳定性。',
            '机制砂颗粒棱角分明，粒径范围更宽。工程师可单独使用，或与天然砂掺配，以达到设计规范要求的级配。对业主而言，拥有可靠的本地机制细骨料来源，可以降低混凝土或沥青生产因缺砂而停工的风险。',
          ],
        },
        {
          type: 'steps',
          label: '工艺',
          title: '高产量破碎筛分生产线的工作原理',
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
          intro: '细骨料的性能取决于几项可量化的指标。这些是我们在生产中控制的要点，也是采购方通常规定的参数。',
          items: [
            { title: '级配', text: '颗粒粒径分布，通过筛分分析检测。连续、稳定的级配使混凝土和沥青配合比更易设计和复现。' },
            { title: '洁净度', text: '细粉的含量与性质，通常以砂当量试验和亚甲蓝试验评定。黏土质细粉会增加需水量，并削弱与胶结料的黏结。' },
            { title: '颗粒形状', text: '紧凑的立方体颗粒比片状或针状颗粒更易密实。粒形主要取决于破碎工序及其给料方式。' },
            { title: '稳定性', text: '每批交货的产品保持一致，依靠各规格分仓堆存和生产过程中的定期检测来保证。' },
            { title: '母岩', text: '岩石的硬度和耐久性，以洛杉矶磨耗试验和微狄瓦尔（Micro-Deval）试验等在粗颗粒上检测，决定材料可用于道路的哪一层位。' },
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
            { title: '位于主干走廊', text: '瓦德塞杜尔位于杰勒法以南约 25 公里，杰勒法地处 RN1 南北轴线上，材料可运往北部和南部工地。' },
            { title: '自有运输', text: '自有卡车和半挂车可直接送货到工地，生产与运输统一安排。' },
            { title: '供货与施工一体', text: '同一家公司可同时提供骨料、土方设备和摊铺施工，简化协调。' },
          ],
        },
        {
          type: 'prose',
          label: '就近供应',
          title: '为何大方量项目需要就近生产',
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
            { title: '项目启动与进场动员', text: '开辟新工地，并从一开始就组织骨料供应。', page: 'mobilization' },
            { title: '设备租赁', text: '为主体工程提供卡车和土方设备。', page: 'rental' },
            { title: '国际合作', text: '外国承包商如何通过 ETAHG 保障本地材料供应。', page: 'partners' },
          ],
        },
        {
          type: 'faq',
          label: '问答',
          title: '关于骨料供应的常见问题',
          items: [
            { id: 'agg-where', q: 'SARL ETAHG 的破碎站在哪里？', a: 'SARL ETAHG 的石料破碎筛分站位于杰勒法省瓦德塞杜尔（Oued Seddeur），在杰勒法城外、距市区以南约 25 公里。杰勒法地处 1 号国道（RN1）沿线，RN1 是连接阿尔及尔与撒哈拉的南北主干道。' },
            { id: 'agg-volume', q: 'ETAHG 能否大量供应细骨料？', a: '可以。SARL ETAHG 的破碎与制砂设备尤其适合需要高产量的项目。供应量、规格和供货计划按项目以书面报价商定。' },
            { id: 'agg-what', q: '什么是机制砂？', a: '机制砂是通过破碎岩石而非从河床或沙丘开采得到的细骨料，也是 SARL ETAHG 在杰勒法附近瓦德塞杜尔破碎站生产的产品。其颗粒棱角分明、级配可控，可单独使用或与天然砂掺配，用于混凝土、沥青和路面结构层。' },
            { id: 'agg-uses', q: 'ETAHG 的细骨料能否用于混凝土和沥青？', a: 'SARL ETAHG 生产的高品质细骨料用于混凝土、预制构件、沥青混合料和路面结构层。是否适用于某一具体配合比，在开始供货前对照项目技术规范确认。' },
            { id: 'agg-fractions', q: 'ETAHG 生产哪些规格的骨料？', a: 'SARL ETAHG 专注于细骨料，即用于混凝土、沥青和路面结构层的砂级规格。项目可供应的具体规格在报价中确认。' },
            { id: 'agg-testing', q: '订货前可以检测骨料吗？', a: '可以。SARL ETAHG 与每位客户商定所需检测项目，如级配、砂当量和亚甲蓝值，并可安排取样，由双方认可的实验室检测。' },
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
      title: '阿尔及利亚工程机械租赁与长期租赁 | SARL ETAHG',
      description: '在阿尔及利亚向 SARL ETAHG 租用重型工程机械：半挂车、载重卡车、推土机、挖掘机和摊铺机，可短租或长期租赁，条款按项目商定。',
      summary: 'SARL ETAHG 在阿尔及利亚出租和长期租赁自有重型设备，从杰勒法调遣。',
      service: { name: '重型设备租赁与长期租赁', serviceType: '重型工程机械租赁' },
      whatsapp: '您好，SARL ETAHG。我们想租用重型设备（设备类型、项目地点、开始日期、租期）。\nHello SARL ETAHG, I would like to rent heavy equipment (machines, location, start date, duration).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '设备租赁与长期租赁',
          title: '道路施工企业自有重型设备，可短租或长期租赁',
          lead: '{{company}} 在阿尔及利亚向承包商和业主出租及长期租赁自有重型设备：半挂车、载重卡车、推土机、挖掘机和摊铺机。这些设备原为修建道路而配置，从位于 RN1 轴线上的杰勒法设备基地调遣。租期、操作手、运输和维修保养按项目商定。',
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
          intro: '设备可单台租用，也可按工作内容成套提供，例如一支土方作业队或一套摊铺机组。',
          items: [
            { illustration: 'semi-truck', title: '半挂车', text: '牵引车配半挂车，用于重型运输：在工地之间转运施工设备，以及长距离运输材料。', uses: ['设备转运', '长途运输', '材料供应'], count: 'semiTrailerTrucks' },
            { illustration: 'dump-truck', title: '载重卡车', text: '用于在工地内及工地之间运输骨料、填料和开挖土方，是土方和道路施工的主力车辆。', uses: ['土方运输', '骨料配送', '弃土外运'], count: 'dumpTrucks' },
            { illustration: 'bulldozer', title: '推土机', text: '用于清除植被和杂物、推运和摊铺填料、整平场坪和路堤，以及开辟便道。', uses: ['场地清理', '场坪与路堤', '施工便道'], count: 'bulldozers' },
            { illustration: 'excavator', title: '挖掘机', text: '用于大方量开挖、开槽、装车、修整边沟，以及在坚硬地层作业。', uses: ['开挖与开槽', '装车', '排水边沟'], count: 'excavators' },
            { illustration: 'paver', title: '摊铺机', text: '按要求的宽度、厚度和标高，均匀摊铺沥青及其他路面材料。', uses: ['沥青摊铺', '道路修复', '场坪与堆场'], count: 'roadPavers' },
          ],
        },
        {
          type: 'prose',
          label: '短租与长租',
          title: '租赁与长期租赁的区别',
          paragraphs: [
            '**租赁**针对某一明确的施工阶段：几台设备用于应对施工高峰、替换维修中的设备，或完成清表、摊铺等单项工作。**长期租赁**在 ETAHG 的服务中是指较长期的安排，设备固定配属于某一项目，通常覆盖项目全过程。',
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
            { title: '操作手', text: '根据项目情况及客户自有团队，提供带操作手或不带操作手的设备。' },
            { title: '运输', text: '设备进场和退场，适当时由我们的半挂车运输。' },
            { title: '维修保养', text: '明确由谁负责保养和维修，集团公司可提供配件保障。' },
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
            { title: '设备进场', text: '设备从杰勒法基地或其他工地运至现场，交接时双方共同检查设备状况。' },
            { title: '施工与保障', text: '设备在您的项目上作业；重型发动机配件由阿尔及尔的 EURL KAYLE KENNY 提供保障。' },
            { title: '退还', text: '协议期满后设备退场，并进行结束检查。' },
          ],
        },
        {
          type: 'prose',
          label: '为何选择 ETAHG',
          title: '为何向施工企业而非租赁公司租用设备',
          paragraphs: [
            '我们的设备是为自有道路项目购置的，而非为租赁目录配置。设备规格适合阿尔及利亚的实际重型工程，管理设备的人员懂生产，而不只是懂合同。',
            '对刚启动项目的外国承包商而言，在当地租用设备可以省去第一阶段进口设备的费用和等待时间，并为决定后续引进哪些设备留出时间。对阿尔及利亚企业而言，租赁可在不购置设备的情况下增加高峰期产能。无论哪种情况，都由 {{company}} 的一位联系人统一协调设备、运输和配件保障。',
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
            { title: '项目启动与进场动员', text: '我们将设备运至新工地，在主体工程开工前完成场地开辟。', page: 'mobilization' },
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
            { id: 'rent-what', q: 'ETAHG 是否在阿尔及利亚出租重型设备？', a: '是的。SARL ETAHG 在阿尔及利亚出租和长期租赁自有重型设备：半挂车、载重卡车、推土机、挖掘机和摊铺机。设备从其杰勒法基地调遣，条款按项目商定。' },
            { id: 'rent-operators', q: '租赁是否包含操作手？', a: 'SARL ETAHG 根据项目情况，提供带操作手或不带操作手的设备。操作手、租期、运输和维修保养按项目商定并写入合同。' },
            { id: 'rent-lease', q: 'ETAHG 是否提供设备长期租赁？', a: '是的。除按施工阶段租赁外，SARL ETAHG 也提供较长期的设备租赁，例如覆盖整个项目工期。这是与作为设备所有人的 ETAHG 直接签订的安排，而非银行融资租赁产品。' },
            { id: 'rent-where', q: 'ETAHG 的设备可在哪些地区使用？', a: 'SARL ETAHG 的设备驻扎在位于 RN1 南北轴线上的杰勒法设备基地，并曾在阿尔及利亚许多地区修建道路。某一具体地点的设备可用性，在您发送项目资料后确认。' },
            { id: 'rent-transport', q: 'ETAHG 能否将设备运至我方工地？', a: '可以。SARL ETAHG 拥有半挂车，可将设备运至工地并运回。如有需要，运输将纳入方案，具体条件按项目商定。' },
            { id: 'rent-breakdown', q: '租用的设备出现故障怎么办？', a: '与 SARL ETAHG 合作时，维修保养责任在租赁开始前写入合同。其集团公司 EURL KAYLE KENNY 从阿尔及尔供应重型柴油发动机配件，为设备完好率提供保障。' },
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
      nav: '项目启动',
      title: '阿尔及利亚项目启动与设备进场动员 | SARL ETAHG',
      description: 'SARL ETAHG 为阿尔及利亚新项目提供启动服务：设备进场动员、场地清理、施工便道、平台、土方、骨料供应及施工用水井，助力主体工程按期开工。',
      summary: 'SARL ETAHG 以自有重型设备在阿尔及利亚承担项目启动与工地开辟。',
      service: { name: '项目启动与进场动员', serviceType: '施工现场进场动员' },
      whatsapp: '您好，SARL ETAHG。我们正在筹备新项目，希望商谈进场动员事宜（项目地点、开工日期、工作范围）。\nHello SARL ETAHG, we are preparing a new project and would like to discuss site mobilization (location, start date, scope).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '项目启动与进场动员',
          title: '项目启动：以自有设备开辟新工地',
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
          title: '项目启动包括哪些内容',
          paragraphs: [
            '进场动员是从合同签订到全面施工之间的阶段。它时间短，却决定项目能否顺利起步：设备必须到位，现场必须可进入且安全，工程所依赖的材料和用水必须就绪。',
            '许多国际承包商将这些工作归入施工准备：场地平整、道路畅通、水源到位（大致对应国内“三通一平”中的通路、通水和场地平整）。{{company}} 可为业主或总承包商承担其中需要重型设备和钻机的部分，全部使用自有设备。',
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
          title: '进场动员完成后客户获得什么',
          items: [
            { title: '可通行的工地', text: '卡车、工地车辆和送货车辆均可通行的施工便道和场内道路。' },
            { title: '整备好的平台', text: '用于办公室、营地、车间、拌和站和料场的整平场地。' },
            { title: '土方已开工', text: '首批挖方和填方已完成，总承包商可在整备好的场地上开工。' },
            { title: '骨料供应已组织', text: '来自瓦德塞杜尔自有破碎站的细骨料，按工程需要安排供货。' },
            { title: '现场有水', text: '在需要且获准的情况下钻凿水井，用于压实、混凝土、降尘及临建设施。' },
            { title: '设备可继续施工', text: '已在现场的设备可通过租赁或分包方式留用于主体工程。' },
          ],
        },
        {
          type: 'prose',
          label: '致外国承包商',
          title: '从海外启动阿尔及利亚项目',
          paragraphs: [
            '在阿尔及利亚中标的国际承包商，头几个月往往面临相同的局面：自有设备仍在海运和清关途中，当地供应商尚未完成资格审核，而现场已经需要展现进度。拥有自有设备的当地合作伙伴可以在其余组织搭建期间先行开工，承包商自己的设备随后加入，不会拖延开工。',
            '我们立足杰勒法、地处阿尔及尔与撒哈拉之间的 RN1 沿线，并在阿尔及利亚许多地区积累了道路施工经验，能够制定切实可行的进场动员方案。对于偏远工地，方案涵盖现场自给所需的一切：燃油、用水、配件和物资运输。详情请见[国际合作](page:partners)页面。',
          ],
        },
        {
          type: 'prose',
          label: '计划',
          title: '制定进场动员方案所需资料',
          list: [
            '工地位置，如有请附坐标或地图',
            '进场路线及重型运输的限制条件',
            '场地平面图、图纸或需整备区域的说明',
            '启动工程的工作范围及大致工程量',
            '要求的开工日期及主体工程开工日期',
            '骨料和用水需求，以及许可、安保等现场限制条件',
          ],
        },
        {
          type: 'links',
          label: '相关服务',
          title: '完善进场动员的配套服务',
          items: [
            { title: '设备租赁', text: '主体工程期间将我们的设备留在现场，可带或不带操作手。', page: 'rental' },
            { title: '骨料生产', text: '来自杰勒法附近瓦德塞杜尔破碎站的机制细骨料。', page: 'aggregates' },
            { title: '水井钻探', text: '为施工和临建设施钻凿水井。', page: 'drilling' },
            { title: '道路施工', text: '由 ETAHG 修建的进场道路和永久道路。', page: 'roads' },
          ],
        },
        {
          type: 'faq',
          label: '问答',
          title: '关于进场动员的常见问题',
          items: [
            { id: 'mob-what', q: 'ETAHG 所说的项目启动指什么？', a: '对 SARL ETAHG 而言，项目启动（即进场动员）是指将重型设备和操作手派往新地点，为主体工程整备现场：场地清理、施工便道、平台、首批土方、骨料供应，以及在需要时钻凿水井。' },
            { id: 'mob-who', q: 'ETAHG 的进场动员服务面向哪些客户？', a: 'SARL ETAHG 的进场动员服务面向在阿尔及利亚开辟新工地的业主和总承包商，包括自有设备尚未到场的国际承包商。' },
            { id: 'mob-after', q: '进场动员后 ETAHG 能否继续留在项目上？', a: '可以。启动阶段结束后，SARL ETAHG 的设备可按与客户的约定，以租赁或分包方式继续施工。' },
            { id: 'mob-remote', q: 'ETAHG 能否进驻偏远或沙漠工地？', a: '可以，但须先进行现场评估。SARL ETAHG 注册于撒哈拉北部的盖尔达耶，设备驻扎在杰勒法；对于偏远工地，运输、燃油、用水和配件均纳入进场动员计划。' },
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
      title: '阿尔及利亚道路施工与公路工程分包 | SARL ETAHG',
      description: 'SARL ETAHG 以自有设备在阿尔及利亚承建道路：土方、路基、底基层、基层及沥青摊铺，可承接总包或分包，在该国许多地区有施工经验。',
      summary: '道路施工是 SARL ETAHG 的起家业务，以自有设备和自产骨料完成。',
      service: { name: '道路施工', serviceType: '道路施工与土方工程' },
      whatsapp: '您好，SARL ETAHG。我们想商谈一个道路施工项目（项目地点、长度、工作范围）。\nHello SARL ETAHG, I would like to discuss a road construction project (location, length, scope).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '道路施工',
          title: '阿尔及利亚道路施工：从土方到沥青面层',
          lead: '道路施工是 {{company}} 的起家业务。公司的卡车、推土机、挖掘机和摊铺机主要为修建道路而配置，ETAHG 已在阿尔及利亚许多地区完成道路项目。公司既可承担完整的道路工程，也可作为分包商承担土方、路面结构层、摊铺及骨料供应。',
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
            { title: '路基处理', text: '对原地面整形，必要时进行处理，并压实以承托路面。' },
            { title: '底基层', text: '由机制碎石或合适的当地材料构成的粒料层，扩散荷载并排出结构内的水分。' },
            { title: '基层', text: '质量更高的碎石层（无结合料或经稳定处理），为路面提供承载能力。' },
            { title: '面层', text: '由摊铺机按线形和标高摊铺沥青后压实；设计有要求时采用表面处治。' },
            { title: '排水与收尾', text: '边沟、涵洞、路肩及收尾工程，保护道路并延长其使用寿命。' },
          ],
        },
        {
          type: 'split',
          label: '一体化',
          title: '骨料、设备与摊铺集于一家公司',
          paragraphs: [
            '道路施工在粒料层和沥青中都要消耗大量骨料。{{company}} 在自有破碎站生产细骨料并拥有自有卡车，因此材料供应与施工进度可以统一安排。',
            '自有的推土机、挖掘机和摊铺机意味着从土方到面层的每个阶段，都由彼此配合默契的设备和班组完成。对总承包商而言，这减少了关键线路上的接口数量。',
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
            '在撒哈拉，风沙、高温和运距左右着每一项决策：必须防止流沙侵入线路，沥青必须耐受高路表温度，钙质土（tuf calcaire）等当地材料在路面结构层中广泛使用。人员和物资必须按自给自足规划。ETAHG 已在阿尔及利亚许多地区修建道路，熟悉这些地区的地形；详见[工程经验](page:experience)页面。',
          ],
        },
        {
          type: 'features',
          label: '分包',
          title: '可为总承包商承担的工作',
          intro: '在大型道路项目中，ETAHG 可在总承包商（包括国际承包商）之下承担明确划分的部分工程。',
          items: [
            { title: '土方', text: '以自有推土机、挖掘机和卡车完成清表、挖方、路堤和路基处理。' },
            { title: '粒料层', text: '底基层和基层，由 ETAHG 组织骨料供应和运输。' },
            { title: '沥青摊铺', text: '以自有摊铺机摊铺，与沥青供应协调配合。' },
            { title: '骨料供应', text: '来自瓦德塞杜尔自有破碎站的机制细骨料，送至工地或沥青、混凝土拌和站。' },
            { title: '运输', text: '以卡车和半挂车运输材料，并沿线转运设备。' },
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
            { title: '设备租赁', text: '施工高峰期增配卡车、推土机、挖掘机和摊铺机。', page: 'rental' },
            { title: '项目启动与进场动员', text: '主体工程开工前开辟工地、修建便道和平台。', page: 'mobilization' },
            { title: '工程经验', text: '阿尔及利亚的不同地形如何改变道路修建方式。', page: 'experience' },
          ],
        },
        {
          type: 'faq',
          label: '问答',
          title: '关于道路施工的常见问题',
          items: [
            { id: 'road-experience', q: 'ETAHG 是否有道路施工经验？', a: '有。道路施工是 SARL ETAHG 的起家业务：其设备主要用于修建道路，公司已在阿尔及利亚许多地区完成道路项目。' },
            { id: 'road-scope', q: 'ETAHG 可承担道路项目的哪些部分？', a: 'SARL ETAHG 可承担土方、路基处理、底基层和基层、以自有摊铺机进行沥青面层施工、骨料供应及运输，既可作为完整工作范围承接，也可作为部分工程分包。' },
            { id: 'road-subcontract', q: 'ETAHG 能否作为道路项目的分包商？', a: '可以。SARL ETAHG 可为总承包商（包括外国承包商）承担明确划分的工作，如土方、粒料层、摊铺或骨料供应。' },
            { id: 'road-regions', q: 'ETAHG 在哪些地区修建过道路？', a: 'SARL ETAHG 已在阿尔及利亚许多地区完成道路项目，熟悉这些地区的地形。以往道路项目的详细资料可应要求提供。' },
            { id: 'road-materials', q: 'ETAHG 能否为道路项目供应骨料？', a: '可以。SARL ETAHG 在杰勒法附近瓦德塞杜尔的破碎站生产高品质细骨料，并可用自有卡车配送，材料供应与道路施工可统一安排。' },
            { id: 'road-equipment', q: 'ETAHG 使用哪些设备修建道路？', a: 'SARL ETAHG 以自有推土机、挖掘机、载重卡车、半挂车和摊铺机修建道路，并由自有破碎站供应骨料。' },
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
      title: '阿尔及利亚水井钻探与打井服务 | SARL ETAHG',
      description: 'SARL ETAHG 以自有水井钻机在阿尔及利亚打井，为施工工地、农业灌溉、工矿企业和社区供水，也可服务南部偏远工地及沙漠项目。',
      summary: 'SARL ETAHG 以自有钻机在阿尔及利亚钻凿水井，服务工地、农场、工业及社区。',
      service: { name: '水井钻探', serviceType: '水井钻探' },
      whatsapp: '您好，SARL ETAHG。我想了解钻凿水井事宜（井位地点、用水用途）。\nHello SARL ETAHG, I would like information about drilling a water well (location, use of the water).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '水井钻探',
          title: '为工地、农场、工业和社区钻凿水井',
          lead: '{{company}} 拥有水井钻机，在阿尔及利亚为施工工地、农业、工业设施和社区钻凿水井。ETAHG 立足杰勒法和盖尔达耶，地处高原地区与撒哈拉北部之间，也可将打井纳入新项目的启动工作，使工程早期即有水可用。',
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
            '土方压实需要水，混凝土拌和与养护需要水，施工便道降尘需要水，工地营地生活也需要水。在地表水稀缺的高原地区和撒哈拉，水井往往是唯一可靠的水源，而用水罐车长距离运水成本高昂。',
            '在进场动员阶段尽早打井，可消除偏远项目的主要制约之一。工程结束后，水井还可继续为业主、农场或当地社区所用。',
          ],
          list: ['施工及道路工地', '农业灌溉及牲畜饮水', '工业及矿业设施', '社区供水'],
          illustration: 'drill-rig',
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
            { title: '审批', text: '钻井前，由井的所有人依据阿尔及利亚法规取得所需许可；钻井工作围绕许可安排。' },
            { title: '钻机进场', text: '将钻机及辅助设备运至现场。' },
            { title: '钻进', text: '采用适合地层的工艺钻穿各地层，直至含水层。' },
            { title: '下管与成井', text: '下入井管，在含水层位置设置滤水管，并按约定规格完成成井配套。' },
            { title: '洗井与移交', text: '清洗、洗井直至出水清澈，然后移交使用。' },
          ],
        },
        {
          type: 'prose',
          label: '地质',
          title: '阿尔及利亚不同地质条件下的钻井',
          paragraphs: [
            '阿尔及利亚的地下水随地貌而变化。在泰勒地区，含水层主要分布在冲积平原和裂隙灰岩中，依靠冬季降雨补给；在沿海地带，过量开采可能导致海水入侵。在高原地区，含水层分布于沉积盆地中，深度和水质各异，盐沼（chott）附近的地下水可能含盐。',
            '撒哈拉北部地下有两大含水层系统，与突尼斯和利比亚共享：埋藏较浅的终端复合含水层（Complexe Terminal），以及埋藏较深的大陆间含水层（Continental Intercalaire，通称阿尔比含水层）。深井可能出温度较高的承压水，这会影响井管和井口装置的选型。由于这部分地下水大多不可再生，其使用受到主管部门的管理。',
            '因此每口井都针对其位置进行设计：钻进工艺、井深、井管和成井方式取决于地层和目标含水层。每个项目都从沟通现场情况和预计用水需求开始。',
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
            { title: '项目启动与进场动员', text: '在开辟新工地时一并打井。', page: 'mobilization' },
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
            { id: 'drill-own', q: 'ETAHG 是否拥有自己的钻机？', a: '是的。SARL ETAHG 拥有自有水井钻机，用于自身项目及客户项目。' },
            { id: 'drill-uses', q: 'ETAHG 钻凿哪些类型的水井？', a: 'SARL ETAHG 为施工工地、农业灌溉、工矿设施和社区供水钻凿水井。每口井的设计取决于其用途和当地地质条件。' },
            { id: 'drill-combined', q: '能否在进场动员时一并打井？', a: '可以。SARL ETAHG 可将钻凿水井纳入新工地的进场动员，为土方、混凝土和临建设施提供用水。' },
            { id: 'drill-where', q: 'ETAHG 可以在哪些地方打井？', a: 'SARL ETAHG 立足杰勒法和盖尔达耶，地处阿尔及利亚北部与撒哈拉之间的轴线上。具体地点的可行性在您发送项目资料后评估。' },
            { id: 'drill-permit', q: '在阿尔及利亚打井是否需要许可？', a: '需要。在阿尔及利亚钻凿水井须事先取得水资源主管部门的许可，SARL ETAHG 根据井的所有人取得的许可安排钻井工作。' },
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
      title: '重型设备配件：EURL KAYLE KENNY | SARL ETAHG',
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
          title: '集团内的配件保障',
          paragraphs: [
            '重型设备只有在运转时才创造效益。当远离城市的工地上发动机零件损坏时，找到合适配件所需的时间决定了设备停机多久。集团内拥有配件公司，可为我们自己的设备和客户缩短这一时间。',
            'EURL KAYLE KENNY 在阿尔及尔库存重型柴油发动机配件，包括 Cummins 兼容配件。客户可在 [kaylekenny.com](https://www.kaylekenny.com) 查询零件号，并直接询问库存和价格。',
          ],
          list: ['重型设备柴油发动机配件', 'Cummins 兼容配件', '阿尔及尔穆罕默迪亚现货库存', '可在线按零件号查询'],
          illustration: 'spare-parts',
          reverse: true,
        },
        {
          type: 'prose',
          label: '致合作伙伴',
          title: '对 ETAHG 合作伙伴的意义',
          paragraphs: [
            '对于租用 ETAHG 设备或与 ETAHG 在项目上合作的承包商，集团内的配件保障是设备保持完好的重要一环。对于拥有自有设备的合作伙伴，它也提供了一个位于阿尔及尔的重型发动机配件本地货源。',
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
            { id: 'parts-fleet', q: '集团配件公司是否为 ETAHG 的租赁设备提供保障？', a: '是的。SARL ETAHG 集团旗下位于阿尔及尔的配件公司 EURL KAYLE KENNY 供应重型柴油发动机配件，为用于租赁和项目的设备提供完好率保障。' },
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
      title: '杰勒法重型设备：破碎站、推土机、摊铺机 | SARL ETAHG',
      description: 'SARL ETAHG 自有设备：石料破碎筛分站、半挂车、载重卡车、推土机、挖掘机、摊铺机和水井钻机，驻扎在阿尔及利亚杰勒法设备基地。',
      summary: 'SARL ETAHG 的重型设备，驻扎在杰勒法设备基地及瓦德塞杜尔破碎站。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '自有设备',
          title: '从破碎站到摊铺机，重型设备全部自有',
          lead: '{{company}} 拥有支撑其全部服务的设备：石料破碎筛分站、半挂车、载重卡车、推土机、挖掘机、摊铺机和水井钻机。移动设备驻扎在位于 RN1 南北轴线上的杰勒法设备基地，破碎设备位于瓦德塞杜尔破碎站。这些设备服务于公司自有项目，同时可供出租和长期租赁。',
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
            { illustration: 'crusher', title: '石料破碎筛分站', text: '破碎与制砂设备，生产高品质细骨料，适合高产量需求。', uses: ['细骨料', '道路及混凝土材料'], count: 'crushingPlants' },
            { illustration: 'semi-truck', title: '半挂车', text: '牵引车和半挂车，用于重型运输及在工地之间转运设备。', uses: ['设备转运', '材料运输'], count: 'semiTrailerTrucks' },
            { illustration: 'dump-truck', title: '载重卡车', text: '用于土方作业以及配送骨料和填料。', uses: ['土方', '骨料配送'], count: 'dumpTrucks' },
            { illustration: 'bulldozer', title: '推土机', text: '用于清表、推运、摊铺和整形，以及开辟便道。', uses: ['场地清理', '路堤'], count: 'bulldozers' },
            { illustration: 'excavator', title: '挖掘机', text: '用于开挖、开槽、装车及坚硬地层作业。', uses: ['开挖', '装车'], count: 'excavators' },
            { illustration: 'paver', title: '摊铺机', text: '按线形和标高摊铺沥青及路面结构层。', uses: ['沥青摊铺', '面层施工'], count: 'roadPavers' },
            { illustration: 'drill-rig', title: '水井钻机', text: '在施工工地、农场及偏远地区钻凿水井。', uses: ['水井', '工地供水'], count: 'drillingRigs' },
          ],
        },
        {
          type: 'prose',
          label: '全链条',
          title: '覆盖重型工程各阶段的设备',
          paragraphs: [
            '大多数项目按固定顺序使用设备。推土机和挖掘机开辟场地、移运土方；卡车运输填料、弃土和骨料；破碎站生产粒料层、混凝土和沥青所需的细骨料；摊铺机铺筑面层；半挂车在施工阶段或工地之间转运重型设备。钻机则在无水之处提供水源。',
            '由于 {{company}} 在上述每一类别都拥有自有设备，既能承担完整的施工工序，也能填补承包商自有设备的单项缺口。同一批设备用于公司自有道路项目、[设备租赁与长期租赁](page:rental)以及[项目启动与进场动员](page:mobilization)。',
          ],
        },
        {
          type: 'features',
          label: '设备完好率',
          title: '如何保障设备可用',
          intro: '设备的价值取决于其在现场的可用性。我们的做法务实，源于真实项目的日常使用。',
          items: [
            { title: '中心基地', text: '杰勒法基地位于 RN1 轴线上，是向北部和南部整备、调遣设备的基地。' },
            { title: '自有运输', text: '自有半挂车转运设备，不依赖第三方运输。' },
            { title: '集团内配件', text: 'EURL KAYLE KENNY 从阿尔及尔的库存供应重型柴油发动机配件。' },
            { title: '事先约定维保', text: '每项租赁或项目在开工前，均在合同中明确保养和维修责任。' },
          ],
        },
        {
          type: 'prose',
          label: '设备明细',
          title: '设备清单与技术参数',
          paragraphs: [
            '拟投入项目的设备详细清单及技术参数随每份报价提供。设备数量经确认后将在本页公布。',
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
      title: '阿尔及利亚各地区道路施工经验 | SARL ETAHG',
      description: 'SARL ETAHG 在阿尔及利亚许多地区修建过道路。本页介绍泰勒地区、阿特拉斯山区、高原地区和撒哈拉的地形如何影响道路施工与水井钻探。',
      summary: 'SARL ETAHG 在阿尔及利亚许多地区的道路施工经验，以及不同地形对施工的影响。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '工程经验',
          title: '源自阿尔及利亚多地道路项目的经验',
          lead: '{{company}} 已在阿尔及利亚许多地区完成道路项目，熟悉这些地区的地形。公司的设备为修建道路而配置，这些经验如今贯穿于公司提供的全部服务：骨料生产、设备租赁、项目启动与进场动员以及水井钻探。',
          illustration: 'hero-terrain',
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
          title: '这些经验对合作伙伴意味着什么',
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
          title: '施工地区与项目',
          regionsTitle: '修建过道路的地区',
          projectsTitle: '代表性项目',
          emptyText: '以往道路项目的详细资料可应要求提供。',
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
          text: '请告诉我们地形和工作范围，我们将说明应对思路。',
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
      title: '阿尔及利亚当地合作伙伴：中资企业合作 | SARL ETAHG',
      description: 'SARL ETAHG 是中资及外国承包商在阿尔及利亚的当地合作伙伴：施工分包、工程机械租赁、骨料供应、项目进场动员及水井钻探，欢迎洽谈合作。',
      summary: '国际承包商及外国企业（包括中资企业）如何在阿尔及利亚与 SARL ETAHG 合作，以及如何开始。',
      whatsapp: '您好，SARL ETAHG。我们是一家国际企业，希望商谈在阿尔及利亚的合作。\nHello SARL ETAHG, we are an international company and would like to discuss cooperation in Algeria.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '国际合作',
          title: '国际承包商在阿尔及利亚的当地重型工程合作伙伴',
          lead: '{{company}} 是一家阿尔及利亚公司，可为国际承包商、EPC 总承包企业、水泥与矿业集团及投资方提供阿尔及利亚项目从一开始就需要的资源：自有重型设备、自有细骨料生产、在该国许多地区积累的道路施工经验，以及位于阿尔及尔的集团配件公司。',
          ctas: [
            { label: '开始洽谈', kind: 'whatsapp', variant: 'primary' },
            { label: '下载公司简介（PDF）', kind: 'pdf', variant: 'secondary' },
          ],
          illustration: 'hero-terrain',
        },
        {
          type: 'prose',
          label: '背景',
          title: '与国际承包商协同作业',
          paragraphs: [
            '阿尔及利亚的公路、铁路、水坝、住房和工业项目，由阿尔及利亚企业和国际承包商共同实施，其中包括众多中国、土耳其和欧洲企业。国际承包商带来设计、融资和大型项目管理能力；他们在当地往往需要的，是能够立即开工的设备、有保障的材料供应、承担土方和路面结构层的分包商，以及熟悉当地地质和实际施工条件的合作伙伴。',
            '{{company}} 正是为承担这一角色而组织的。公司可在贵方合同下承担明确划分的工作，向贵方工地供应设备和骨料，或在贵方组织机构搭建期间先行开辟工地。由于设备和破碎站均为自有，公司投入的是自身资源，而不是代贵方协调第三方。',
          ],
        },
        {
          type: 'features',
          label: '为何选择 ETAHG',
          title: 'ETAHG 能为您的项目带来什么',
          items: [
            { title: '自有设备，随时进场', text: 'ETAHG 自有的半挂车、载重卡车、推土机、挖掘机、摊铺机和钻机，从杰勒法基地调遣。' },
            { title: '自有骨料生产', text: '瓦德塞杜尔石料破碎筛分站生产高品质细骨料，适合高产量需求。' },
            { title: '道路施工经验', text: '在阿尔及利亚许多地区完成道路项目，切实了解当地地形、材料和施工条件。' },
            { title: '布局贯通南北', text: '注册于撒哈拉北部的盖尔达耶，设备驻扎在阿尔及尔至撒哈拉 RN1 轴线上的杰勒法，配件位于阿尔及尔。' },
            { title: '集团保障设备完好率', text: '阿尔及尔的 EURL KAYLE KENNY 供应重型柴油发动机配件，保障设备在您的项目上持续运转。' },
            { title: '直接沟通', text: '我们使用阿拉伯语、法语和英语工作，您接触的就是决策和执行的人。' },
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
            { title: '设备供应', text: '向贵方项目出租或长期租赁设备，可带或不带操作手，条款按项目商定。', page: 'rental' },
            { title: '骨料供应', text: '从自有破碎站为贵方混凝土、沥青或道路工程供应机制细骨料。', page: 'aggregates' },
            { title: '项目启动', text: '在贵方组织机构搭建期间，调遣设备进场并开辟工地。', page: 'mobilization' },
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
            ['设备供应', '设备（带或不带操作手），运输按约定', '租赁或长期租赁协议'],
            ['骨料供应', '机制细骨料，送货或自提', '供货合同'],
            ['项目启动', '进场动员、场地清理、便道、平台、首批土方', '分包合同或服务协议'],
            ['供水', '钻凿水井', '服务合同'],
            ['当地合作伙伴', '以设备、材料和当地经验参与联合安排', '联合体或合资协议'],
          ],
        },
        {
          type: 'steps',
          label: '如何开始',
          title: '合作如何开始',
          items: [
            { title: '初次联系', text: `通过电话或 WhatsApp（${TEL}）简要介绍贵公司及项目情况。` },
            { title: '保密', text: '如项目信息敏感，可在交换详细资料前签订保密协议。' },
            { title: '交换资料', text: '我们提供公司简介、注册文件和设备资料；贵方提供工作范围、项目地点和工期。' },
            { title: '会谈与现场考察', text: '双方会面并共同考察项目现场；也可安排参观我们的杰勒法设备基地和瓦德塞杜尔破碎站。' },
            { title: '提交方案', text: '我们提交涵盖工作范围、设备、材料、工期和商务条款的方案。' },
            { title: '签订协议', text: '以适合项目的合同形式确定合作模式。' },
            { title: '进场与跟进', text: '按约定计划调遣设备和团队，ETAHG 全程由一位联系人对接。' },
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
            '联系人及首选沟通语言（英语、法语或阿拉伯语）',
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
            '公司简介（PDF 版及可打印版）',
            '拟投入贵方项目的设备清单',
            '破碎站及其所产骨料的资料',
            '以往道路项目的详细资料',
          ],
          note: '本网站另有[英文版](page:home@en)、法文版和阿拉伯文版。技术和商务文件以法语或英语往来。',
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
          title: '欢迎洽谈您在阿尔及利亚的项目',
          text: '请直接与我们联系。国际合作询问由负责实施合作的人员直接答复，可使用英语或法语沟通。',
          ctas: [
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'primary' },
            { label: '联系方式', page: 'contact', variant: 'secondary' },
            { label: '下载公司简介（PDF）', kind: 'pdf', variant: 'ghost' },
          ],
        },
      ],
    },

    /* ----------------------------------------------------------------- ABOUT */
    about: {
      slug: 'about',
      nav: '关于我们',
      title: '关于我们：阿尔及利亚重型工程企业 | SARL ETAHG',
      description: '关于 SARL ETAHG：阿尔及利亚有限责任公司，注册于盖尔达耶，设备基地位于杰勒法，破碎站位于瓦德塞杜尔，集团旗下另有配件公司。',
      summary: 'SARL ETAHG 公司简介：公司形式、业务、场所及集团。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '关于我们',
          title: '关于 SARL ETAHG',
          lead: 'SARL ETAHG 是一家阿尔及利亚公司，专业从事细骨料生产、道路施工、重型设备租赁与长期租赁、项目启动与进场动员以及水井钻探。公司注册于盖尔达耶，以杰勒法为运营基地，地处阿尔及利亚北部与撒哈拉之间。',
          ctas: [{ label: '下载公司简介（PDF）', kind: 'pdf', variant: 'primary' }],
          illustration: 'hero-terrain',
        },
        {
          type: 'prose',
          label: '简介',
          title: '公司简介',
          paragraphs: [
            '{{company}} 是依据阿尔及利亚法律设立的有限责任公司（SARL），注册于盖尔达耶。公司设备基地位于杰勒法；生产高品质细骨料的石料破碎筛分站位于杰勒法以南约 25 公里的瓦德塞杜尔（Oued Seddeur）。简称 ETAHG 在所有语言中均使用拉丁字母书写。',
            '公司为修建道路配置了半挂车、载重卡车、推土机、挖掘机和摊铺机，并已在阿尔及利亚许多地区完成道路项目。此后，公司通过租赁和长期租赁向其他企业开放这些设备，以自有设备承接新项目的启动工作，并运营水井钻机。',
            '集团旗下还有 EURL KAYLE KENNY，一家在阿尔及尔穆罕默迪亚设有门店和配件仓库的重型设备配件公司。',
          ],
        },
        {
          type: 'prose',
          label: '发展',
          title: '从道路施工企业到多元服务合作伙伴',
          paragraphs: [
            'ETAHG 的发展历程，是一家道路施工企业逐步拥有自有生产资料的过程。修建道路需要卡车、土方设备、摊铺机和大量骨料；拥有这些资源，使公司能够掌控施工进度和质量。',
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
            '公司注册地**盖尔达耶**位于撒哈拉北部的姆扎布河谷，是通往阿尔及利亚南部的门户。设备基地所在的**杰勒法**地处草原与撒哈拉过渡带上的高原地区，位于连接阿尔及尔与撒哈拉的南北主干道 1 号国道（RN1）沿线。破碎站位于杰勒法以南约 25 公里的**瓦德塞杜尔**，在同一地区生产细骨料。集团公司 EURL KAYLE KENNY 从**阿尔及尔**供应配件。',
            '对合作伙伴而言，这一布局意味着：设备驻扎在全国南北主通道上，骨料在高原地区生产，配件由首都供应，整体位于北部与撒哈拉南部之间。',
          ],
          illustration: 'semi-truck',
          reverse: true,
        },
        {
          type: 'features',
          label: '工作方式',
          title: '我们的工作方式',
          intro: '我们的工作原则源于真实工地上的重型工程实践。',
          items: [
            { title: '现场安全', text: '重型设备作业要求严格纪律。作业区、设备行驶和进出通道均经过规划，保障施工人员和第三方安全。' },
            { title: '材料质量', text: '骨料来自受控的破碎工艺，施工遵循与客户商定的技术规范。' },
            { title: '设备完好率', text: '以现场可用性为目标管理设备，并由集团公司提供配件保障。' },
            { title: '承诺明确', text: '工作范围、工期和条款在开工前以书面形式约定，并向客户报告进度。' },
            { title: '尊重环境', text: '按照适用法规管理扬尘、用水和土地扰动。' },
            { title: '长期合作', text: '我们更愿意与能够项目接项目、长期合作的伙伴共事。' },
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
    faq: {
      slug: 'faq',
      nav: '常见问题',
      title: '常见问题：公司、服务与合作 | SARL ETAHG',
      description: '关于 SARL ETAHG 的问答：公司简介、所在地、细骨料供应、设备租赁、进场动员、水井钻探、配件供应，以及中资企业如何与我们合作。',
      summary: '关于 SARL ETAHG 及其服务和合作方式的常见问题。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '常见问题',
          title: '关于 SARL ETAHG 的常见问题',
          lead: '关于公司、服务及合作方式的简明、客观解答。SARL ETAHG 是一家阿尔及利亚公司，专业从事细骨料生产、道路施工、重型设备租赁与长期租赁、项目启动与进场动员以及水井钻探。',
        },
        {
          type: 'faq',
          label: '公司',
          title: '关于公司',
          items: [
            { id: 'what-is-etahg', q: 'SARL ETAHG 是一家什么公司？', a: 'SARL ETAHG 是一家阿尔及利亚公司，专业从事细骨料生产、道路施工、重型设备租赁与长期租赁、项目启动与进场动员以及水井钻探。公司为有限责任公司（SARL），注册于盖尔达耶，设备基地位于杰勒法，石料破碎筛分站位于杰勒法以南的瓦德塞杜尔（Oued Seddeur）。集团旗下还有位于阿尔及尔的重型设备配件公司 EURL KAYLE KENNY。' },
            { id: 'what-does-etahg-do', q: 'ETAHG 的业务有哪些？', a: 'SARL ETAHG 在阿尔及利亚生产细骨料、修建道路、出租和长期租赁重型设备、为新项目进场动员并钻凿水井。公司依托自有石料破碎筛分站，以及自有的半挂车、载重卡车、推土机、挖掘机、摊铺机和钻机开展业务；集团公司 EURL KAYLE KENNY 供应重型设备配件。' },
            { id: 'where', q: 'SARL ETAHG 位于哪里？', a: 'SARL ETAHG 注册于阿尔及利亚盖尔达耶，设备基地位于高原地区的杰勒法。石料破碎筛分站位于杰勒法以南约 25 公里的瓦德塞杜尔，集团公司 EURL KAYLE KENNY 在阿尔及尔穆罕默迪亚设有门店和配件仓库。杰勒法地处 1 号国道（RN1）沿线，RN1 是连接阿尔及尔与撒哈拉的南北主干道。' },
            { id: 'legal-form', q: 'SARL ETAHG 是什么类型的公司？', a: 'SARL ETAHG 是一家 société à responsabilité limitée（SARL），即阿尔及利亚的有限责任公司形式。公司的商业注册及税务识别信息可应要求提供，经确认后将在法律声明页面公布。' },
            { id: 'name', q: '公司名称如何书写？', a: '公司法定名称为 SARL ETAHG，其中 SARL 表示公司形式。简称 ETAHG 在所有语言（包括阿拉伯语和中文）中均以拉丁大写字母书写，不作音译。' },
            { id: 'kayle-kenny-link', q: 'ETAHG 与 Kayle Kenny 是什么关系？', a: 'EURL KAYLE KENNY 隶属于 SARL ETAHG 旗下，是集团的重型设备配件公司，在阿尔及尔穆罕默迪亚设有门店和配件仓库。公司作为独立供应商供应柴油发动机配件，包括 Cummins 兼容配件，与 Cummins Inc. 无任何隶属关系，亦未获其认可或授权。对 ETAHG 的合作伙伴而言，它是集团内保障设备完好率的配件来源。' },
            { id: 'languages', q: '可以用哪些语言联系 ETAHG？', a: '可以使用阿拉伯语、法语和英语联系 SARL ETAHG。本网站另提供简体中文版；技术和商务文件以法语或英语往来。' },
          ],
        },
        {
          type: 'faq',
          label: '服务',
          title: '服务',
          items: [
            { id: 'services-list', q: 'SARL ETAHG 提供哪些服务？', a: 'SARL ETAHG 在阿尔及利亚提供细骨料生产、道路施工、重型设备租赁与长期租赁、项目启动与进场动员以及水井钻探服务。重型设备配件由集团公司 EURL KAYLE KENNY 供应。各项服务可单独委托，也可组合纳入同一份协议。' },
            { id: 'aggregates', q: 'ETAHG 能否为大型项目供应细骨料？', a: '可以。SARL ETAHG 在杰勒法附近瓦德塞杜尔的石料破碎筛分站生产高品质细骨料，其破碎与制砂设备尤其适合需要高产量的项目。规格、数量、供货计划和检测要求按项目商定。' },
            { id: 'aggregates-uses', q: 'ETAHG 的细骨料有哪些用途？', a: 'SARL ETAHG 生产的细骨料主要用于混凝土、预制构件、砂浆、沥青混合料以及道路和场坪的粒料层。机制细骨料又称机制砂，是河砂或沙丘砂之外质量稳定的替代材料。' },
            { id: 'rental', q: 'ETAHG 是否在阿尔及利亚出租重型设备？', a: '是的。SARL ETAHG 在阿尔及利亚出租和长期租赁自有重型设备：半挂车、载重卡车、推土机、挖掘机和摊铺机。设备从其杰勒法设备基地调遣。' },
            { id: 'rental-terms', q: 'ETAHG 的租赁和长期租赁条款是什么？', a: 'SARL ETAHG 按项目商定租赁和长期租赁条款，不采用固定条件。租期、操作手、运输、维修保养和燃油等事项与客户协商后写入合同。' },
            { id: 'fleet', q: 'ETAHG 拥有哪些设备？', a: 'SARL ETAHG 拥有石料破碎筛分站、半挂车、载重卡车、推土机、挖掘机、摊铺机和水井钻机。移动设备驻扎在其杰勒法基地。' },
            { id: 'roads', q: 'ETAHG 是否承建道路？', a: '是的。道路施工是 SARL ETAHG 的起家业务：其设备主要用于修建道路，公司已在阿尔及利亚许多地区完成道路项目，涵盖从土方到沥青面层的各项工作。' },
            { id: 'mobilization', q: '什么是项目启动与进场动员？', a: '对 SARL ETAHG 而言，项目启动与进场动员是指以自有设备启动新工地：将设备运至现场、场地清理、修建施工便道和平台、完成首批土方、组织骨料供应，并在需要时钻凿水井。' },
            { id: 'drilling', q: 'ETAHG 是否提供水井钻探？', a: '是的。SARL ETAHG 拥有水井钻机，在阿尔及利亚为施工工地、农业、工业和社区钻凿水井。' },
            { id: 'regions', q: 'ETAHG 在阿尔及利亚哪些地区开展业务？', a: 'SARL ETAHG 已在阿尔及利亚许多地区完成道路项目。公司立足杰勒法和盖尔达耶，地处阿尔及尔至撒哈拉的 RN1 轴线上，可同时服务北部和南部项目；具体地点的可用性应要求确认。' },
          ],
        },
        {
          type: 'faq',
          label: '合作',
          title: '与 ETAHG 合作',
          items: [
            { id: 'foreign-companies', q: 'ETAHG 是否与外国企业合作？', a: '是的。SARL ETAHG 欢迎与在阿尔及利亚开展业务的外国企业合作，包括国际 EPC 总承包商、水泥与矿业集团、投资方和设备供应商。公司可担任项目的分包商、设备或骨料供应商、项目启动合作方或当地合作伙伴。' },
            { id: 'chinese-contractors', q: '中国承包商能否与 ETAHG 合作？', a: '可以。SARL ETAHG 欢迎与在阿尔及利亚承建项目的中国承包商和中资企业合作，合作条件与其他国际合作伙伴相同。本网站提供简体中文版，技术和商务文件以法语或英语往来。' },
            { id: 'subcontract', q: 'ETAHG 能否担任分包商？', a: '可以。SARL ETAHG 可为总承包商以自有设备承担明确划分的工作，如土方、路面结构层、沥青摊铺、场地整备、骨料供应或水井钻探。' },
            { id: 'quote', q: '如何向 ETAHG 询价？', a: `向 SARL ETAHG 询价时，请通过 WhatsApp 或电话（${TEL}）发送项目地点（省或最近城镇）、工作范围、所需设备或数量、工期及开始日期。` },
            { id: 'contact', q: '如何联系 ETAHG？', a: `可通过电话或 WhatsApp（${TEL}）联系 SARL ETAHG，该号码为与 EURL KAYLE KENNY 共用的集团号码。www.etahg.com 的联系页面列出了全部联系方式和场所。` },
            { id: 'profile', q: '是否有可供内部传阅的公司简介？', a: '有。SARL ETAHG 在本网站发布了可打印的公司简介，并提供 PDF 下载。' },
            { id: 'kayle-kenny', q: 'EURL KAYLE KENNY 与 Cummins 有关联吗？', a: '没有。EURL KAYLE KENNY 是 SARL ETAHG 集团的配件公司，作为独立供应商供应 Cummins 兼容配件，与 Cummins Inc. 无任何隶属关系，亦未获其认可或授权。' },
          ],
        },
        {
          type: 'cta',
          title: '还有其他问题？',
          text: '欢迎通过电话或 WhatsApp 直接咨询。',
          ctas: [
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'primary' },
            { label: '联系我们', page: 'contact', variant: 'secondary' },
          ],
        },
      ],
    },

    /* --------------------------------------------------------------- CONTACT */
    contact: {
      slug: 'contact',
      nav: '联系我们',
      title: '联系我们：电话与 WhatsApp，阿尔及利亚 | SARL ETAHG',
      description: '通过电话或 WhatsApp（+213 558 96 10 49）联系 SARL ETAHG，可用英语或法语沟通。注册地盖尔达耶，设备基地杰勒法，可按需报价。',
      summary: 'SARL ETAHG 的联系方式及询价方法。',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: '联系我们',
          title: '联系 SARL ETAHG',
          lead: `请致电或通过 WhatsApp 联系 SARL ETAHG：${TEL}。我们直接答复阿尔及利亚及国际企业的询问，可使用阿拉伯语、法语或英语沟通；中国企业可用英语或法语与我们联系。`,
        },
        {
          type: 'contact',
          label: '联系',
          title: '联系方式',
          intro: '最快捷的方式是拨打下方号码或发送 WhatsApp 消息。该号码为与 EURL KAYLE KENNY 共用的集团号码。我们的团队使用阿拉伯语、法语和英语，欢迎以英语或法语来信来电。',
          checklistTitle: '询问时请提供',
          checklist: [
            '贵公司名称及国家',
            '项目地点（省或最近城镇）',
            '工作范围',
            '所需设备类型或材料数量',
            '预计工期',
            '计划开工日期',
          ],
          quoteTitle: '通过 WhatsApp 询价',
          quoteText: '打开 WhatsApp，使用预填的中英双语消息并补充详细信息。',
          quoteLabel: '立即询价',
          quoteMessage: '您好，SARL ETAHG。我们希望获得报价。\nHello SARL ETAHG, I would like a quote.\n公司 / Company：\n项目地点（省）/ Project location (wilaya)：\n工作范围 / Scope of work：\n所需设备或数量 / Equipment or volumes needed：\n工期 / Duration：\n开始日期 / Start date：',
        },
        {
          type: 'prose',
          label: '国际联系',
          title: '从海外联系我们',
          paragraphs: [
            `从阿尔及利亚境外请拨打 **${TEL}**；从中国拨打时，请拨 **${TEL_CN}**。如贵方团队所在国家无法使用 WhatsApp（例如在中国境内），可直接致电同一号码，再商定最便捷的文件往来方式。`,
            '我们的团队使用阿拉伯语、法语和英语，中国企业可用英语或法语与我们联系。有关合作模式的更多信息，请见[国际合作](page:partners)页面。',
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
      title: '公司简介 | SARL ETAHG',
      description: 'SARL ETAHG 可打印公司简介：业务范围、设备、破碎站，盖尔达耶、杰勒法和瓦德塞杜尔三地场所，集团公司及联系方式，另提供 PDF 版。',
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
            '{{company}} 是依据阿尔及利亚法律设立的有限责任公司（SARL），注册于盖尔达耶，设备基地位于杰勒法，石料破碎筛分站位于杰勒法以南约 25 公里的瓦德塞杜尔（Oued Seddeur）。公司设备为修建道路而配置，已在阿尔及利亚许多地区完成道路项目。如今，公司还供应高品质细骨料，出租和长期租赁设备，以自有设备承接新项目启动，并钻凿水井。',
          ],
        },
        {
          type: 'cards',
          title: '业务范围',
          style: 'compact',
          items: [
            { title: '骨料生产', text: '石料破碎筛分站生产高品质细骨料，适合高产量需求。', page: 'aggregates' },
            { title: '道路施工', text: '以自有设备完成土方、路面结构层及沥青面层施工。', page: 'roads' },
            { title: '设备租赁与长期租赁', text: '半挂车、载重卡车、推土机、挖掘机、摊铺机。', page: 'rental' },
            { title: '项目启动与进场动员', text: '开辟场地、施工便道、平台、土方、骨料供应。', page: 'mobilization' },
            { title: '水井钻探', text: '自有钻机，钻凿工地、农业、工业及社区用水井。', page: 'drilling' },
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
            '施工分包、设备租赁与长期租赁、骨料供应、项目启动、水井钻探，以及阿尔及利亚项目的当地合作。我们使用阿拉伯语、法语和英语工作；本简介另有英文、法文和阿拉伯文版本。',
          ],
          note: DISCLAIMER,
        },
      ],
    },

    /* ----------------------------------------------------------------- LEGAL */
    legal: {
      slug: 'legal',
      nav: '法律声明',
      title: '法律声明与隐私政策 | SARL ETAHG',
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
            '**字体。**正文字体从 Google Fonts 加载。显示页面时，您的浏览器会连接 Google 服务器，Google 在此技术请求中会获得您的 IP 地址。',
            '**联系我们。**如您通过电话、WhatsApp 或电子邮件与我们联系，我们仅将您发送的信息用于答复您的询问，以及建立和管理可能的业务关系。WhatsApp 由 WhatsApp LLC／Meta 运营，适用其自身的隐私政策。',
            `**您的权利。**您可随时通过 [${TEL}](tel:) 联系我们，要求查阅、更正或删除您发送给我们的个人数据。`,
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
};
