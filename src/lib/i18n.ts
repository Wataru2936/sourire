// 翻訳データの型定義
export interface Translations {
  common: {
    reservation: string;
    phone: string;
    email: string;
    instagram: string;
    address: string;
    hours: string;
    closed: string;
    menu: string;
    news: string;
    contact: string;
    loading: string;
    error: string;
    backToTop: string;
    about: string;
    info: string;
    phoneNumber: string;
    home: string;
  };
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    taglineEn: string;
    cta: string;
  };
  about: {
    title: string;
    michelin: string;
    philosophy: string;
    experience: string;
    chefTitle: string;
    chefName: string;
    chefBio: string;
    achievements: {
      michelinStar: string;
      frenchExperience: string;
      localIngredients: string;
      franceTraining: string;
    };
  };
  menu: {
    title: string;
    lunch: string;
    dinner: string;
    course: string;
    price: string;
    yen: string;
    taxIncluded: string;
    serviceCharge: string;
    allergens: string;
    seasonal: string;
    courses: {
      lunchCourse: string;
      premiumLunchCourse: string;
      dinnerCourse: string;
      chefsTastingMenu: string;
    };
    descriptions: {
      lunchCourse: string;
      premiumLunchCourse: string;
      dinnerCourse: string;
      chefsTastingMenu: string;
    };
    reservation: string;
  };
  info: {
    title: string;
    location: string;
    businessHours: string;
    lunchHours: string;
    dinnerHours: string;
    features: {
      michelin: string;
      creditCard: string;
      noChildren: string;
      noSmoking: string;
      dresscode: string;
    };
    access: string;
    accessDetail: string;
    addressDetail: string;
    basicInfo: string;
    operatingHours: string;
    lunchOperating: string;
    dinnerOperating: string;
    wednesdayClosed: string;
    characteristics: string;
    accessMap: string;
    showMap: string;
    nearestStation: string;
    directions: string;
    other: string;
    restaurantInfo: string;
    notes: string;
    reservationNotes: string;
    cancellationPolicy: string;
    reservationChange: string;
    thankYou: string;
    lunchNote: string;
  };
  news: {
    title: string;
    date: string;
    readMore: string;
    noNews: string;
    types: {
      announcement: string;
      event: string;
      holiday: string;
      menuUpdate: string;
    };
    latestInfo: string;
    viewAllNews: string;
  };
  instagram: {
    title: string;
    subtitle: string;
    viewPost: string;
    followUs: string;
  };
  footer: {
    copyright: string;
    privacy: string;
    languages: string;
    description: string;
    address: string;
    lunchHours: string;
    dinnerHours: string;
    wednesdayClosed: string;
  };
}

// 翻訳データ
export const translations: Record<Language, Translations> = {
  ja: {
    common: {
      reservation: '',
      phone: 'お電話',
      email: 'メール',
      instagram: 'Instagram',
      address: '住所',
      hours: '営業時間',
      closed: '定休日',
      menu: 'メニュー',
      news: 'お知らせ',
      contact: 'お問合せ',
      loading: '読み込み中...',
      error: 'エラーが発生しました',
      backToTop: 'トップへ戻る',
      about: 'シェフ&レストランについて',
      info: '店舗情報',
      phoneNumber: '092-753-6324',
      home: 'ホーム',
    },
    hero: {
      title: 'レストラン\nスーリール',
      subtitle: 'Restaurant Sourire',
      tagline: 'あなたの心を満たす\n福岡けやき通りのフランス料理',
      taglineEn: 'A Taste of French Elegance\nin the Heart of Fukuoka',
      cta: 'ご予約はこちら',
    },
    about: {
      title: 'シェフ&レストランについて',
      michelin: 'ミシュラン一つ星',
      philosophy: '奇を衒わず、正統の中に輝きを',
      experience: 'フレンチの王道と九州の旬が織りなす美食体験',
      chefTitle: 'シェフ',
      chefName: '水元康裕',
      chefBio: 'フランス修行を経て、レストランひらまつ入社。伝統的なフレンチ技法に九州の食材の美味しさを融合させた独自の料理スタイルを確立。2019年ミシュラン一つ星を獲得。',
      achievements: {
        michelinStar: 'ミシュラン一つ星獲得',
        frenchExperience: '年のフレンチ経験',
        localIngredients: '九州の旬の食材',
        franceTraining: '本場フランスでの修行',
      },
    },
    menu: {
      title: 'コース料理',
      lunch: 'ランチコース',
      dinner: 'ディナーコース',
      course: 'コース',
      price: '料金',
      yen: '円',
      taxIncluded: '税込',
      serviceCharge: 'サービス料10%別途',
      allergens: 'アレルギーをお持ちの方は、ご予約時にお申し付けください。',
      seasonal: '季節の食材により内容が変わります',
      courses: {
        lunchCourse: 'ランチコース',
        premiumLunchCourse: 'ディナーコース',
        dinnerCourse: 'ディナーコース',
        chefsTastingMenu: 'シェフおまかせコース',
      },
      descriptions: {
        lunchCourse: '季節の前菜、魚料理、肉料理、デザート、コーヒー',
        premiumLunchCourse: 'アミューズ、前菜2品、魚料理、肉料理、デザート、小菓子、コーヒー',
        dinnerCourse: 'アミューズ、前菜、スープ、魚料理、肉料理、チーズ、デザート、小菓子、コーヒー',
        chefsTastingMenu: 'シェフが厳選した特別な食材を使用した本日のおまかせコース（8品）',
      },

      reservation: '予約する',
    },
    info: {
      title: '店舗情報',
      location: '所在地',
      businessHours: '営業時間',
      lunchHours: '12:00-14:30',
      dinnerHours: '18:00-20:30',
      features: {
        michelin: 'ミシュラン一つ星',
        creditCard: 'クレジットカード対応',
        noChildren: '12歳未満のお子様も歓迎です。お電話でご相談下さい。',
        noSmoking: '全席禁煙',
        dresscode: 'スマートカジュアル',
      },
      access: '交通手段',
      accessDetail: '・博多バスターミナル(4乗場)\n・駅前A発(国体道路経由113.203.201.114.12.1136.201)約20分\n・福岡市営地下鉄赤坂駅から徒歩15分',
      addressDetail: '福岡県福岡市中央区赤坂2丁目6-5-104 パークハイツ赤坂 1F-4',
      basicInfo: '基本情報',
      operatingHours: '営業時間',
      lunchOperating: 'ランチ',
      dinnerOperating: 'ディナー',
      wednesdayClosed: '基本的に水曜定休日',
      characteristics: '特徴',
      accessMap: 'アクセスマップ',
      showMap: '地図を表示',
      nearestStation: '最寄り駅：西鉄バス 赤坂３丁目、福岡市営地下鉄赤坂駅',
      directions: '道順',
      other: 'その他',
      restaurantInfo: '当店は全15席の小さなレストランで、\nカウンター席を5席ご用意しております。\nお一人様でのご来店も、心よりお待ちしております。\n\nお料理に合わせたグラスワインのペアリングもご用意しており、\nボトルワインも各種取り揃えております。\nお好みに合わせてお楽しみください。\n\nなお、ドリンクをご注文いただかない場合は、\nチャージ料として350円を頂戴しております。\nあらかじめご了承ください。',
      notes: '《ご利用にあたってのご案内》',
      reservationNotes: '食材の無駄を防ぎ、より良いお料理を提供させていただくため、ご予約は前日までにお願い申し上げます。',
      cancellationPolicy: 'ご予約当日のキャンセルにつきましては、予定されていたお料理代金をキャンセル料として申し受ける場合がございます。あらかじめご了承ください。',
      reservationChange: 'ご予約人数の変更やキャンセルは、お早めにご連絡いただけますようお願い申し上げます。',
      
      thankYou: '何卒よろしくお願い申し上げます。',
      lunchNote: '（金・土・日・祝祭日のみ）',
    },
    news: {
      title: 'お知らせ',
      date: '日付',
      readMore: '詳細を見る',
      noNews: '現在お知らせはありません',
      types: {
        announcement: 'お知らせ',
        event: 'イベント',
        holiday: '休業案内',
        menuUpdate: 'メニュー更新',
      },
      latestInfo: 'レストラン・スーリールの最新情報をお届けします',
      viewAllNews: 'すべてのお知らせを見る',
    },
    instagram: {
      title: 'スーリールのInstagram',
      subtitle: '日々の料理と店舗の様子をお届けします',
      viewPost: '投稿を見る',
      followUs: 'フォローする',
    },
    footer: {
      copyright: '© 2025 Restaurant Sourire. All rights reserved.',
      privacy: 'プライバシーポリシー',
      languages: '言語を選択',
      description: 'フレンチの王道と九州の旬が織りなす美食体験をお楽しみください。福岡けやき通りで皆様のお越しをお待ちしております。',
      address: '福岡県福岡市中央区赤坂2丁目6-5-104 パークハイツ赤坂 1F-4',
      lunchHours: 'ランチ 12:00-14:30（金・土・日・祝祭日のみ）',
      dinnerHours: 'ディナー 18:00-20:30',
      wednesdayClosed: '基本的に水曜定休日',
    },
  },
  en: {
    common: {
      reservation: 'Reservation',
      phone: 'Phone',
      email: 'Email',
      instagram: 'Instagram',
      address: 'Address',
      hours: 'Opening Hours',
      closed: 'Closed Days',
      menu: 'Menu',
      news: 'News',
      contact: 'Contact',
      loading: 'Loading...',
      error: 'An error has occurred',
      backToTop: 'Back to Top',
      about: 'About the Chef & Restaurant',
      info: 'Information',
      phoneNumber: '+81-92-753-6324',
      home: 'Home',
    },
    hero: {
      title: 'Restaurant\nSourire',
      subtitle: 'Restaurant Sourire',
      tagline: 'A Taste of French Elegance in the Heart of Fukuoka',
      taglineEn: "Cuisine française qui réchauffe le cœur, sur l'avenue Keyaki à Fukuoka",
      cta: 'Reserve Now',
    },
    about: {
      title: 'About the Chef & Restaurant',
      michelin: 'One Michelin Star',
      philosophy: 'Genuine brilliance within tradition',
      experience: 'A refined gastronomic experience blending classic French cuisine with the seasonal bounty of Kyushu',
      chefTitle: 'Chef',
      chefName: 'Yasuhiro Mizumoto',
      chefBio: 'After training in France, Chef Mizumoto joined the esteemed Hiramatsu restaurant group. He developed a unique culinary style by combining traditional French techniques with the rich flavors of Kyushu. Awarded a Michelin star in 2019.',
      achievements: {
        michelinStar: 'Michelin One Star',
        frenchExperience: 'Years of experience in French cuisine',
        localIngredients: 'Seasonal ingredients from Kyushu',
        franceTraining: 'Trained in France',
      },
    },
    menu: {
      title: 'Course Menu',
      lunch: 'Lunch',
      dinner: 'Dinner',
      course: 'Course',
      price: 'Price',
      yen: 'yen',
      taxIncluded: 'Tax included',
      serviceCharge: '10% service charge applies',
      allergens: 'If you have any food allergies, please inform us at the time of reservation.',
      seasonal: 'Menu items may vary depending on seasonal ingredients',
      courses: {
        lunchCourse: 'Lunch Course',
        premiumLunchCourse: 'Dinner Course',
        dinnerCourse: 'Dinner Course',
        chefsTastingMenu: "Chef's Tasting Menu",
      },
      descriptions: {
        lunchCourse: 'Seasonal appetizer, fish dish, meat dish, dessert, and coffee',
        premiumLunchCourse: 'Amuse-bouche, two appetizers, fish dish, meat dish, dessert, petit fours, and coffee',
        dinnerCourse: 'Amuse-bouche, appetizer, soup, fish dish, meat dish, cheese, dessert, petit fours, and coffee',
        chefsTastingMenu: "An 8-course tasting menu featuring handpicked ingredients selected by the chef",
      },
      reservation: 'Reserve a Table',
    },
    info: {
      title: 'Information',
      location: 'Location',
      businessHours: 'Opening Hours',
      lunchHours: '12:00–14:30',
      dinnerHours: '18:00–20:30',
      features: {
        michelin: 'Michelin One Star',
        creditCard: 'Credit Cards Accepted',
        noChildren: 'Guests under 12 are welcome. Please contact us in advance.',
        noSmoking: 'Non-smoking throughout the restaurant',
        dresscode: 'Smart Casual',
      },
      access: 'Access',
      accessDetail: '- From Hakata Bus Terminal (Stand 4) / Board from "Ekimae A" via Kokutai Road (routes 113, 203, 201, 114, 12, 1136, 201) / Approx. 20 min\n- 15-minute walk from Fukuoka Subway Akasaka Station',
      addressDetail: '1F-4, Park Heights Akasaka, 2-6-5 Akasaka, Chuo-ku, Fukuoka, Japan',
      basicInfo: 'Basic Information',
      operatingHours: 'Operating Hours',
      lunchOperating: 'Lunch',
      dinnerOperating: 'Dinner',
      wednesdayClosed: 'Closed on Wednesdays (subject to change)',
      characteristics: 'Features',
      accessMap: 'Access Map',
      showMap: 'Show Map',
      nearestStation: 'Nearest stops: Nishitetsu Bus Akasaka 3-chome / Fukuoka Subway Akasaka Station',
      directions: 'Directions',
      other: 'Other',
      restaurantInfo: 'Our restaurant is an intimate space with only 15 seats,\nincluding 5 counter seats.\nWe warmly welcome solo diners as well.\n\nWe offer wine pairings by the glass to complement your meal,\nas well as a wide selection of bottled wines.\nPlease enjoy according to your preference.\n\nPlease note that a cover charge of ¥350 will apply\nif no drinks are ordered.',
      notes: '■ Please Read Before Visiting ■',
      reservationNotes: 'To reduce food waste and provide the best experience possible, please make your reservation at least one day in advance.',
      cancellationPolicy: 'Cancellations on the day of the reservation may incur a charge equivalent to the cost of the reserved course. Thank you for your understanding.',
      reservationChange: 'Please notify us as early as possible regarding any changes or cancellations to your reservation.',
      thankYou: 'Thank you for your kind cooperation.',
      lunchNote: '(Available on Fridays, Saturdays, Sundays, and public holidays only)',
    },
    news: {
      title: 'News',
      date: 'Date',
      readMore: 'Read More',
      noNews: 'There are currently no announcements.',
      types: {
        announcement: 'Announcement',
        event: 'Event',
        holiday: 'Temporary Closure',
        menuUpdate: 'Menu Update',
      },
      latestInfo: "Stay informed with the latest updates from Restaurant Sourire",
      viewAllNews: 'View All News',
    },
    instagram: {
      title: 'Sourire on Instagram',
      subtitle: 'A glimpse of our daily cuisine and restaurant ambiance',
      viewPost: 'View Post',
      followUs: 'Follow Us',
    },
    footer: {
      copyright: '© 2025 Restaurant Sourire. All rights reserved.',
      privacy: 'Privacy Policy',
      languages: 'Language',
      description: 'Savor the harmony of authentic French cuisine and the seasonal richness of Kyushu. We look forward to welcoming you on Keyaki-dori in Fukuoka.',
      address: '1F-4, Park Heights Akasaka, 2-6-5 Akasaka, Chuo-ku, Fukuoka, Japan',
      lunchHours: 'Lunch: 12:00–14:30 (Fri, Sat, Sun, and public holidays only)',
      dinnerHours: 'Dinner: 18:00–20:30',
      wednesdayClosed: 'Closed on Wednesdays (subject to change)',
    },
  },
  
  zh: {
    common: {
      reservation: '预约',
      phone: '电话',
      email: '电子邮件',
      instagram: 'Instagram',
      address: '地址',
      hours: '营业时间',
      closed: '休息日',
      menu: '菜单',
      news: '通知',
      contact: '联系我们',
      loading: '加载中...',
      error: '发生错误',
      backToTop: '返回顶部',
      about: '关于主厨与餐厅',
      info: '店铺信息',
      phoneNumber: '+81-92-753-6324',
      home: '首页',
    },
    hero: {
      title: 'Restaurant\nSourire',
      subtitle: 'Restaurant Sourire',
      tagline: '温暖人心的法式料理，坐落于福冈栎树大道',
      taglineEn: 'A Taste of French Elegance in the Heart of Fukuoka',
      cta: '立即预约',
    },
    about: {
      title: '关于主厨与餐厅',
      michelin: '米其林一星',
      philosophy: '在传统中绽放光彩',
      experience: '融合经典法餐与九州时令食材的精致美味体验',
      chefTitle: '主厨',
      chefName: '水元康裕',
      chefBio: '曾赴法国研修，后加入餐厅「Hiramatsu」。他将法式传统技法与九州食材巧妙融合，确立了独特的料理风格。2019年荣获米其林一星。',
      achievements: {
        michelinStar: '荣获米其林一星',
        frenchExperience: '多年法餐经验',
        localIngredients: '精选九州时令食材',
        franceTraining: '法国本地研修',
      },
    },
    menu: {
      title: '套餐菜单',
      lunch: '午餐套餐',
      dinner: '晚餐套餐',
      course: '套餐',
      price: '价格',
      yen: '日元',
      taxIncluded: '含税',
      serviceCharge: '另加10%服务费',
      allergens: '如有食物过敏，请在预约时告知我们。',
      seasonal: '菜单内容会根据季节食材有所变动',
      courses: {
        lunchCourse: '午餐套餐',
        premiumLunchCourse: '晚餐套餐',
        dinnerCourse: '晚餐套餐',
        chefsTastingMenu: '主厨精选套餐',
      },
      descriptions: {
        lunchCourse: '时令前菜、鱼料理、肉料理、甜点与咖啡',
        premiumLunchCourse: '餐前小点、两道前菜、鱼料理、肉料理、甜点、小点心与咖啡',
        dinnerCourse: '餐前小点、前菜、汤品、鱼料理、肉料理、奶酪、甜点、小点心与咖啡',
        chefsTastingMenu: '主厨严选食材制作的当日特别八道式套餐',
      },
      reservation: '预约座位',
    },
    info: {
      title: '店铺信息',
      location: '地址',
      businessHours: '营业时间',
      lunchHours: '12:00–14:30',
      dinnerHours: '18:00–20:30',
      features: {
        michelin: '米其林一星',
        creditCard: '支持信用卡支付',
        noChildren: '欢迎12岁以下儿童，烦请提前电话咨询。',
        noSmoking: '全场禁烟',
        dresscode: '得体休闲着装（Smart Casual）',
      },
      access: '交通方式',
      accessDetail:
        '・博多巴士总站（4号站台）\n・从「站前A」出发，途经国体道路（113、203、201、114、12、1136 等线路），约20分钟\n・从福冈地铁赤坂站步行15分钟',
      addressDetail: '福冈县福冈市中央区赤坂2丁目6-5-104 Park Heights赤坂 1F-4',
      basicInfo: '基本信息',
      operatingHours: '营业时间',
      lunchOperating: '午餐时段',
      dinnerOperating: '晚餐时段',
      wednesdayClosed: '基本上每周三为休息日',
      characteristics: '特色服务',
      accessMap: '交通地图',
      showMap: '显示地图',
      nearestStation: '最近车站：西铁巴士 赤坂3丁目 / 福冈地铁 赤坂站',
      directions: '路线指引',
      other: '其他信息',
      restaurantInfo:
        '本店为一家温馨的小型餐厅，\n共设有15个座位，其中包含5个吧台座。\n我们也热情欢迎单人用餐的客人。\n\n我们提供与菜品搭配的杯装葡萄酒套餐，\n并备有丰富的瓶装葡萄酒供您选择。\n请根据喜好自由享用。\n\n若您未点任何饮品，\n我们将收取350日元的服务费，敬请谅解。',
      notes: '■ 用餐须知 ■',
      reservationNotes: '为避免食材浪费并提供最优质的料理，敬请于前一天完成预约。',
      cancellationPolicy:
        '如在预约当天取消，可能会收取所预约料理金额的取消费用，敬请理解。',
      reservationChange: '如需更改人数或取消预约，请尽早与我们联系。',
      thankYou: '衷心感谢您的配合与支持。',
      lunchNote: '（仅限周五、周六、周日及节假日供应）',
    },
    news: {
      title: '最新通知',
      date: '日期',
      readMore: '查看更多',
      noNews: '当前暂无通知',
      types: {
        announcement: '公告',
        event: '活动',
        holiday: '休息通知',
        menuUpdate: '菜单更新',
      },
      latestInfo: '为您带来Restaurant Sourire的最新资讯',
      viewAllNews: '查看所有通知',
    },
    instagram: {
      title: 'Sourire的Instagram',
      subtitle: '呈现我们的每日料理与店内风貌',
      viewPost: '查看帖子',
      followUs: '关注我们',
    },
    footer: {
      copyright: '© 2025 Restaurant Sourire 版权所有',
      privacy: '隐私政策',
      languages: '选择语言',
      description: '在福冈栎树大道，体验融合正统法餐与九州季节食材的美味盛宴。期待您的光临。',
      address: '日本福冈县福冈市中央区赤坂2丁目6-5-104 Park Heights赤坂 1F-4',
      lunchHours: '午餐时间：12:00–14:30（仅限周五、六、日及节假日）',
      dinnerHours: '晚餐时间：18:00–20:30',
      wednesdayClosed: '基本上每周三为休息日',
    },
  },
  ko: {
    common: {
      reservation: '예약',
      phone: '전화',
      email: '이메일',
      instagram: '인스타그램',
      address: '주소',
      hours: '영업시간',
      closed: '정기 휴무일',
      menu: '메뉴',
      news: '공지사항',
      contact: '문의하기',
      loading: '불러오는 중...',
      error: '오류가 발생했습니다',
      backToTop: '맨 위로',
      about: '셰프 & 레스토랑 소개',
      info: '매장 정보',
      phoneNumber: '+81-92-753-6324',
      home: '홈',
    },
    hero: {
      title: 'Restaurant\nSourire',
      subtitle: 'Restaurant Sourire',
      tagline: '후쿠오카 케야키 거리에 위치한, 마음을 채우는 프렌치 요리',
      taglineEn: 'A Taste of French Elegance in the Heart of Fukuoka',
      cta: '지금 예약하기',
    },
    about: {
      title: '셰프 & 레스토랑 소개',
      michelin: '미쉐린 1스타',
      philosophy: '화려함보다 본질, 전통 속에서 빛나는 정성',
      experience: '정통 프렌치와 규슈 제철 식재료가 어우러진 미식 경험',
      chefTitle: '셰프',
      chefName: '미즈모토 야스히로',
      chefBio:
        '프랑스에서 연수를 마친 후, Hiramatsu 레스토랑 그룹에 입사. 전통적인 프렌치 기법과 규슈의 풍미를 융합한 독창적인 스타일을 확립하였으며, 2019년 미쉐린 1스타를 수상했습니다.',
      achievements: {
        michelinStar: '미쉐린 1스타 수상',
        frenchExperience: '프렌치 요리 경력',
        localIngredients: '규슈 제철 식재료',
        franceTraining: '프랑스 연수 경력',
      },
    },
    menu: {
      title: '코스 메뉴',
      lunch: '런치 코스',
      dinner: '디너 코스',
      course: '코스',
      price: '가격',
      yen: '엔',
      taxIncluded: '세금 포함',
      serviceCharge: '서비스 요금 10% 별도',
      allergens: '알레르기가 있으신 경우, 예약 시 미리 알려주시기 바랍니다.',
      seasonal: '계절 식재료에 따라 메뉴가 달라질 수 있습니다',
      courses: {
        lunchCourse: '런치 코스',
        premiumLunchCourse: '디너 코스',
        dinnerCourse: '디너 코스',
        chefsTastingMenu: '셰프 추천 코스',
      },
      descriptions: {
        lunchCourse: '계절 전채, 생선 요리, 고기 요리, 디저트, 커피',
        premiumLunchCourse: '아뮤즈, 전채 2종, 생선 요리, 고기 요리, 디저트, 프티푸르, 커피',
        dinnerCourse: '아뮤즈, 전채, 수프, 생선 요리, 고기 요리, 치즈, 디저트, 프티푸르, 커피',
        chefsTastingMenu: '셰프가 엄선한 재료로 구성된 오늘의 8코스 특별 메뉴',
      },
      reservation: '좌석 예약',
    },
    info: {
      title: '매장 정보',
      location: '위치',
      businessHours: '영업시간',
      lunchHours: '12:00–14:30',
      dinnerHours: '18:00–20:30',
      features: {
        michelin: '미쉐린 1스타',
        creditCard: '신용카드 결제 가능',
        noChildren: '12세 미만의 어린이도 환영합니다. 전화로 상담해 주세요.',
        noSmoking: '전석 금연',
        dresscode: '스마트 캐주얼',
      },
      access: '오시는 길',
      accessDetail:
        '- 하카타 버스터미널 4번 승차장\n- 역앞 A 승차 (국체도로 경유 노선: 113, 203, 201, 114, 12, 1136 등) 약 20분 소요\n- 후쿠오카 시영 지하철 아카사카역에서 도보 15분',
      addressDetail: '일본 후쿠오카시 주오구 아카사카 2-6-5-104 파크 하이츠 아카사카 1F-4',
      basicInfo: '기본 정보',
      operatingHours: '영업시간',
      lunchOperating: '런치',
      dinnerOperating: '디너',
      wednesdayClosed: '수요일 정기 휴무 (변경될 수 있음)',
      characteristics: '특징',
      accessMap: '약도',
      showMap: '지도 보기',
      nearestStation: '가까운 정류장: 니시테츠 버스 아카사카 3초메 / 아카사카 지하철역',
      directions: '찾아오시는 길',
      other: '기타 정보',
      restaurantInfo:
        '저희 레스토랑은 총 15석의 아담한 공간으로,\n이 중 5석은 카운터 좌석입니다.\n혼자 방문하시는 분도 진심으로 환영합니다.\n\n요리에 어울리는 글라스 와인 페어링을 제공하며,\n다양한 병 와인도 준비되어 있습니다.\n기호에 맞게 즐겨주시기 바랍니다.\n\n음료를 주문하지 않으실 경우,\n테이블 차지로 350엔이 청구되오니 양해 부탁드립니다.',
      notes: '■ 이용 시 안내사항 ■',
      reservationNotes:
        '식재료 낭비를 줄이고 최고의 요리를 제공해 드리기 위해, 예약은 하루 전까지 부탁드립니다.',
      cancellationPolicy:
        '예약 당일 취소 시, 예약하신 메뉴의 요금이 청구될 수 있으니 양해 부탁드립니다.',
      reservationChange: '인원 변경 및 취소는 최대한 빨리 연락 주시기 바랍니다.',
      thankYou: '감사합니다.',
      lunchNote: '(금・토・일・공휴일만 운영)',
    },
    news: {
      title: '공지사항',
      date: '날짜',
      readMore: '자세히 보기',
      noNews: '현재 공지사항이 없습니다',
      types: {
        announcement: '공지',
        event: '이벤트',
        holiday: '휴무 안내',
        menuUpdate: '메뉴 업데이트',
      },
      latestInfo: 'Restaurant Sourire의 최신 소식을 알려드립니다',
      viewAllNews: '전체 공지사항 보기',
    },
    instagram: {
      title: 'Sourire 인스타그램',
      subtitle: '매일의 요리와 매장 풍경을 소개합니다',
      viewPost: '게시물 보기',
      followUs: '팔로우하기',
    },
    footer: {
      copyright: '© 2025 Restaurant Sourire. All rights reserved.',
      privacy: '개인정보처리방침',
      languages: '언어 선택',
      description: '후쿠오카 케야키 거리에서 정통 프렌치와 규슈 제철 식재료의 조화를 즐겨보세요. 고객님의 방문을 기다리고 있습니다.',
      address: '일본 후쿠오카현 후쿠오카시 주오구 아카사카 2-6-5-104 파크 하이츠 아카사카 1F-4',
      lunchHours: '런치 12:00–14:30 (금・토・일・공휴일만)',
      dinnerHours: '디너 18:00–20:30',
      wednesdayClosed: '수요일 정기 휴무 (변경 가능)',
    },
  },
  fr: {
    common: {
      reservation: 'Réservation',
      phone: 'Téléphone',
      email: 'E-mail',
      instagram: 'Instagram',
      address: 'Adresse',
      hours: 'Horaires',
      closed: 'Jour de fermeture',
      menu: 'Menu',
      news: 'Actualités',
      contact: 'Contact',
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
      backToTop: 'Haut de page',
      about: 'À propos du chef et du restaurant',
      info: 'Informations',
      phoneNumber: '+81-92-753-6324',
      home: 'Accueil',
    },
    hero: {
      title: 'Restaurant\nSourire',
      subtitle: 'Restaurant Sourire',
      tagline: 'Une cuisine française qui réchauffe le cœur, au cœur de Keyaki-dori à Fukuoka',
      taglineEn: 'A Taste of French Elegance in the Heart of Fukuoka',
      cta: 'Réserver une table',
    },
    about: {
      title: 'À propos du chef et du restaurant',
      michelin: 'Une étoile Michelin',
      philosophy: 'L’élégance dans la tradition, sans extravagance',
      experience: 'Une expérience gastronomique alliant la grande cuisine française aux produits saisonniers de Kyushu',
      chefTitle: 'Chef',
      chefName: 'Yasuhiro Mizumoto',
      chefBio: 'Formé en France, le chef Mizumoto a rejoint le prestigieux groupe Hiramatsu. Il a développé un style unique mêlant techniques classiques françaises et ingrédients de Kyushu. Étoilé Michelin depuis 2019.',
      achievements: {
        michelinStar: 'Étoile Michelin obtenue',
        frenchExperience: "Années d'expérience en cuisine française",
        localIngredients: 'Produits de saison de Kyushu',
        franceTraining: 'Formation culinaire en France',
      },
    },
    menu: {
      title: 'Menus gastronomiques',
      lunch: 'Menu déjeuner',
      dinner: 'Menu dîner',
      course: 'Formule',
      price: 'Prix',
      yen: '¥',
      taxIncluded: 'Taxes incluses',
      serviceCharge: '10 % de frais de service en supplément',
      allergens: 'Veuillez nous informer de toute allergie lors de la réservation.',
      seasonal: 'Le contenu des menus varie selon la saison',
      courses: {
        lunchCourse: 'Menu déjeuner',
        premiumLunchCourse: 'Menu dîner',
        dinnerCourse: 'Menu dîner',
        chefsTastingMenu: 'Menu dégustation du chef',
      },
      descriptions: {
        lunchCourse: 'Entrée de saison, poisson, viande, dessert, café',
        premiumLunchCourse: 'Amuse-bouche, deux entrées, poisson, viande, dessert, mignardises, café',
        dinnerCourse: 'Amuse-bouche, entrée, soupe, poisson, viande, fromage, dessert, mignardises, café',
        chefsTastingMenu: 'Menu dégustation de 8 plats, avec des ingrédients soigneusement sélectionnés par le chef',
      },
      reservation: 'Réserver une table',
    },
    info: {
      title: 'Informations',
      location: 'Localisation',
      businessHours: 'Horaires d’ouverture',
      lunchHours: 'Déjeuner : 12h00–14h30',
      dinnerHours: 'Dîner : 18h00–20h30',
      features: {
        michelin: 'Une étoile Michelin',
        creditCard: 'Cartes bancaires acceptées',
        noChildren: 'Les enfants de moins de 12 ans sont les bienvenus. Veuillez nous contacter à l’avance.',
        noSmoking: 'Espace entièrement non-fumeur',
        dresscode: 'Tenue correcte exigée (smart casual)',
      },
      access: 'Accès',
      accessDetail:
        '- Depuis le terminal de bus de Hakata (quai n°4)\n- Prendre le bus à "Ekimae A" via Kokutai-dōri (lignes 113, 203, 201, 114, 12, 1136, etc.) – environ 20 minutes\n- 15 minutes à pied depuis la station Akasaka (métro de Fukuoka)',
      addressDetail: '1F-4, Park Heights Akasaka, 2-6-5 Akasaka, Chuo-ku, Fukuoka, Japon',
      basicInfo: 'Informations générales',
      operatingHours: 'Heures d’ouverture',
      lunchOperating: 'Service du déjeuner',
      dinnerOperating: 'Service du dîner',
      wednesdayClosed: 'Fermé le mercredi (sauf exception)',
      characteristics: 'Caractéristiques',
      accessMap: 'Plan d’accès',
      showMap: 'Afficher la carte',
      nearestStation: 'Arrêts les plus proches : Bus Nishitetsu Akasaka 3-chome / Métro Akasaka',
      directions: 'Comment venir',
      other: 'Autres informations',
      restaurantInfo: 'Notre restaurant est un petit établissement intime de 15 places,\ndont 5 au comptoir.\nNous accueillons chaleureusement les clients seuls.\n\nNous proposons des accords mets et vins au verre\npour accompagner vos plats,\nainsi qu’un large choix de vins en bouteille.\nProfitez selon vos préférences.\n\nVeuillez noter qu’un supplément de 350 ¥ sera appliqué\nsi aucune boisson n’est commandée.',
      notes: '■ Informations importantes avant votre visite ■',
      reservationNotes: 'Afin d’éviter tout gaspillage alimentaire et de garantir une qualité optimale, les réservations doivent être faites au plus tard la veille.',
      cancellationPolicy: 'En cas d’annulation le jour même, des frais équivalents au montant du menu réservé pourront être facturés. Merci de votre compréhension.',
      reservationChange: 'Pour toute modification ou annulation de réservation, merci de nous contacter le plus tôt possible.',
      thankYou: 'Nous vous remercions pour votre coopération.',
      lunchNote: '(Disponible uniquement les vendredis, samedis, dimanches et jours fériés)',
    },
    news: {
      title: 'Actualités',
      date: 'Date',
      readMore: 'En savoir plus',
      noNews: 'Aucune actualité pour le moment',
      types: {
        announcement: 'Annonce',
        event: 'Événement',
        holiday: 'Fermeture exceptionnelle',
        menuUpdate: 'Mise à jour du menu',
      },
      latestInfo: 'Découvrez les dernières nouvelles du Restaurant Sourire',
      viewAllNews: 'Voir toutes les actualités',
    },
    instagram: {
      title: "Instagram de Sourire",
      subtitle: 'Nos plats du jour et l’ambiance du restaurant',
      viewPost: 'Voir la publication',
      followUs: 'Suivez-nous',
    },
    footer: {
      copyright: '© 2025 Restaurant Sourire. Tous droits réservés.',
      privacy: 'Politique de confidentialité',
      languages: 'Choisir la langue',
      description:
        'Savourez une cuisine française authentique sublimée par les saveurs saisonnières de Kyushu. Nous vous accueillons avec plaisir sur l’avenue Keyaki, à Fukuoka.',
      address: '1F-4, Park Heights Akasaka, 2-6-5 Akasaka, Chuo-ku, Fukuoka, Japon',
      lunchHours: 'Déjeuner : 12h00–14h30 (vendredi, samedi, dimanche et jours fériés uniquement)',
      dinnerHours: 'Dîner : 18h00–20h30',
      wednesdayClosed: 'Fermé le mercredi (sous réserve de modifications)',
    },
  }  
};

// 翻訳データを取得する関数
export function getTranslation(language: Language): Translations {
  return translations[language];
}

// 現在の言語を取得・設定するフック用のデフォルト言語
export const DEFAULT_LANGUAGE: Language = 'ja';

// 言語ラベル
export const LANGUAGE_LABELS: Record<Language, string> = {
  ja: '日本語',
  en: 'English',
  zh: '简体中文',
  ko: '한국어',
  fr: 'Français',
};

// 言語フラグ（絵文字）
export const LANGUAGE_FLAGS: Record<Language, string> = {
  ja: '🇯🇵',
  en: '🇺🇸',
  zh: '🇨🇳',
  ko: '🇰🇷',
  fr: '🇫🇷',
};

// Language型にfrを追加
export type Language = 'ja' | 'en' | 'zh' | 'ko' | 'fr'; 