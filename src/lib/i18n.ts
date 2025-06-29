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
      tagline: 'あなたの心を満たす、福岡けやき通りのフランス料理',
      taglineEn: 'A Taste of French Elegance in the Heart of Fukuoka',
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
      access: '福岡市営地下鉄赤坂駅から徒歩15分',
      accessDetail: '・西鉄バス赤坂3丁目バス停至近\n・博多バスターミナル(4乗場)\n・駅前A発(国体道路経由113.203.201.114.12.1136.201)約20分\n・福岡市営地下鉄赤坂駅から徒歩15分',
      addressDetail: '福岡市営地下鉄赤坂駅から徒歩15分',
      basicInfo: '基本情報',
      operatingHours: '営業時間',
      lunchOperating: 'ランチ',
      dinnerOperating: 'ディナー',
      wednesdayClosed: '基本的に水曜定休日',
      characteristics: '特徴',
      accessMap: 'アクセスマップ',
      showMap: '地図を表示',
      nearestStation: '最寄り駅：西鉄バス 赤坂３丁目',
      directions: '道順',
      other: 'その他',
      restaurantInfo: '全15席の小さなレストランです。カウンター席も5席ございます。お一人様歓迎いたします。',
      notes: '＜御利用いただく時の注意事項として＞',
      reservationNotes: '食材ロス、より良い料理をご提供させていただく為、御予約は前日までにお願い致します',
      cancellationPolicy: '御予約当日のキャンセルにつきましては、御予約いただいた料理等の金額をキャンセル料としてお支払いいただくこともございますので、御留意いただきますようお願い致します',
      reservationChange: '予約人数の変更やキャンセルはできる限り早いご連絡をお願い致します',
      thankYou: 'どうぞよろしくお願い致します',
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
      info: 'Restaurant Info',
      phoneNumber: '+81-92-753-6324',
      home: 'Home',
    },
    hero: {
      title: 'Restaurant\nSourire',
      subtitle: 'Restaurant Sourire',
      tagline: 'A Taste of French Elegance in the Heart of Fukuoka',
      taglineEn: "Cuisine française qui réchauffe le cœur, sur l'avenue Keyaki à Fukuoka",
      cta: 'Make a Reservation',
    },
    about: {
      title: 'About the Chef & Restaurant',
      michelin: 'One Michelin Star',
      philosophy: 'Authenticity with a Spark of Brilliance',
      experience: 'A refined experience blending classic French cuisine and seasonal Kyushu ingredients',
      chefTitle: 'Chef',
      chefName: 'Yasuhiro Mizumoto',
      chefBio: 'After training in France, Chef Mizumoto joined the renowned Hiramatsu group, developing his unique style by marrying traditional French techniques with the rich flavors of Kyushu. Awarded a Michelin star in 2019.',
      achievements: {
        michelinStar: 'Michelin One Star',
        frenchExperience: 'Years of French culinary experience',
        localIngredients: 'Seasonal ingredients from Kyushu',
        franceTraining: 'Trained in France',
      },
    },
    menu: {
      title: 'Course Menu',
      lunch: 'Lunch Course',
      dinner: 'Dinner Course',
      course: 'Course',
      price: 'Price',
      yen: 'yen',
      taxIncluded: 'Tax included',
      serviceCharge: '10% service charge applies',
      allergens: 'If you have any allergies, please let us know when making your reservation.',
      seasonal: 'Menu may vary based on seasonal ingredients',
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
        chefsTastingMenu: 'An 8-course special tasting menu crafted by the chef with handpicked ingredients of the day',
      },
      features: {
        creditCard: 'Credit cards accepted',
        noSmoking: 'Non-smoking throughout',
      },
      reservation: 'Reserve a Table',
    },
    info: {
      title: 'Restaurant Information',
      location: 'Location',
      businessHours: 'Opening Hours',
      lunchHours: 'Lunch: 12:00–14:30',
      dinnerHours: 'Dinner: 18:00–20:30',
      features: {
        michelin: 'Michelin One Star',
        creditCard: 'Credit Cards Accepted',
        noChildren: 'Children under 12 are welcome. Please call us for arrangements.',
        noSmoking: 'All seats non-smoking',
        dresscode: 'Smart Casual',
      },
      access: '15-minute walk from Fukuoka Subway Akasaka Station',
      accessDetail: '・À proximité de l\'arrêt de bus Nishitetsu Akasaka 3-chome\n・Depuis le terminal de bus Hakata (quai 4)\n・Départ de Ekimae A (via la route Kokutai : 113, 203, 201, 114, 12, 1136, 201) ~20 min\n・15 minutes à pied de la station Akasaka (métro de Fukuoka)',
      addressDetail: '15-minute walk from Fukuoka Subway Akasaka Station',
      basicInfo: 'Basic Information',
      operatingHours: 'Operating Hours',
      lunchOperating: 'Lunch Service',
      dinnerOperating: 'Dinner Service',
      wednesdayClosed: 'Closed on Wednesdays (subject to change)',
      characteristics: 'Features',
      accessMap: 'Access Map',
      showMap: 'Show Map',
      nearestStation: 'Nearest Station: Nishitetsu Bus Akasaka 3-chome',
      directions: 'Directions',
      other: 'Other Information',
      restaurantInfo: 'A small and intimate restaurant with 15 seats, including 5 counter seats. Solo diners are warmly welcomed.',
      notes: '■ Important Notes for Your Visit ■',
      reservationNotes: 'To reduce food waste and maintain the quality of our dishes, we kindly ask that reservations be made at least one day in advance.',
      cancellationPolicy: 'Cancellations made on the day of the reservation may incur charges equal to the cost of the reserved menu. We appreciate your understanding.',
      reservationChange: 'Please notify us as early as possible of any changes in party size or cancellations.',
      thankYou: 'Thank you for your cooperation.',
      lunchNote: '(Fridays, Saturdays, Sundays & public holidays only)',
    },
    news: {
      title: 'News',
      date: 'Date',
      readMore: 'Read More',
      noNews: 'No announcements at this time',
      types: {
        announcement: 'Announcement',
        event: 'Event',
        holiday: 'Closure Notice',
        menuUpdate: 'Menu Update',
      },
      latestInfo: 'Stay updated with the latest news from Restaurant Sourire',
      viewAllNews: 'View All News',
    },
    instagram: {
      title: 'Sourire on Instagram',
      subtitle: 'Explore our daily creations and restaurant scenes',
      viewPost: 'View Post',
      followUs: 'Follow Us',
    },
    footer: {
      copyright: '© 2025 Restaurant Sourire. All rights reserved.',
      privacy: 'Privacy Policy',
      languages: 'Select Language',
      description: 'Enjoy an elegant dining experience that weaves the essence of French tradition with the seasonal flavors of Kyushu. We look forward to welcoming you on Keyaki-dori in Fukuoka.',
      address: 'Park Heights Akasaka 1F-4, 2-6-5 Akasaka, Chuo-ku, Fukuoka City, Fukuoka Prefecture',
      lunchHours: 'Lunch: 12:00–14:30',
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
      philosophy: '在正统中闪耀匠心',
      experience: '融合经典法餐与九州时令食材的美食体验',
      chefTitle: '主厨',
      chefName: '水元康裕',
      chefBio: '曾赴法国研修，后加入"餐厅ひらまつ"。以传统法餐技法结合九州食材风味，确立独特料理风格。2019年荣获米其林一星。',
      achievements: {
        michelinStar: '获得米其林一星',
        frenchExperience: '多年法餐经验',
        localIngredients: '九州时令食材',
        franceTraining: '法国本地研修经历',
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
      serviceCharge: '另收10%服务费',
      allergens: '如有食物过敏，请在预约时告知我们。',
      seasonal: '根据季节食材内容可能有所变动',
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
        chefsTastingMenu: '主厨严选当日食材，献上八道佳肴的尊享套餐',
      },
      features: {
        creditCard: '支持信用卡支付',
        noSmoking: '全店禁烟',
      },
      reservation: '预约',
    },
    info: {
      title: '店铺信息',
      location: '地址',
      businessHours: '营业时间',
      lunchHours: '午餐 12:00-14:30',
      dinnerHours: '晚餐 18:00-20:30',
      features: {
        michelin: '米其林一星',
        creditCard: '支持信用卡',
        noChildren: '欢迎12岁以下儿童，敬请电话咨询',
        noSmoking: '全席禁烟',
        dresscode: '得体休闲着装',
      },
      access: '福冈地铁赤坂站步行15分钟',
      accessDetail: '・西铁巴士赤坂3丁目巴士站附近\n・博多巴士总站(4号站台)\n・从车站前A出发(经国体道路113,203,201,114,12,1136,201)约20分钟\n・福冈地铁赤坂站步行15分钟',
      addressDetail: '从福冈地铁赤坂站步行15分钟',
      basicInfo: '基本信息',
      operatingHours: '营业时间',
      lunchOperating: '午餐时间',
      dinnerOperating: '晚餐时间',
      wednesdayClosed: '基本上每周三休息',
      characteristics: '特色',
      accessMap: '交通地图',
      showMap: '显示地图',
      nearestStation: '最近车站：西铁巴士 赤坂3丁目',
      directions: '前往路线',
      other: '其他信息',
      restaurantInfo: '本店为小型餐厅，共15个座位，包括5个吧台座。欢迎单人用餐。',
      notes: '■ 用餐须知 ■',
      reservationNotes: '为减少食材浪费并确保最佳品质，请务必提前至少一天预约',
      cancellationPolicy: '预约当日取消可能收取所订菜单费用，敬请理解',
      reservationChange: '如需更改人数或取消预约，请尽早与我们联系',
      thankYou: '衷心感谢您的理解与配合',
      lunchNote: '（仅限周五、六、日及法定节假日）',
    },
    news: {
      title: '通知',
      date: '日期',
      readMore: '阅读更多',
      noNews: '目前暂无通知',
      types: {
        announcement: '公告',
        event: '活动',
        holiday: '休息通知',
        menuUpdate: '菜单更新',
      },
      latestInfo: '获取餐厅Sourire的最新资讯',
      viewAllNews: '查看所有通知',
    },
    instagram: {
      title: 'Sourire 的 Instagram',
      subtitle: '分享每日佳肴与店铺日常',
      viewPost: '查看帖子',
      followUs: '关注我们',
    },
    footer: {
      copyright: '© 2025 Restaurant Sourire 版权所有',
      privacy: '隐私政策',
      languages: '选择语言',
      description: '融合法餐传统与九州时令食材的美味体验。我们在福冈けやき通欢迎您的光临。',
      address: '日本福冈市中央区赤坂2丁目6-5-104 Park Heights赤坂1F-4',
      lunchHours: '午餐 12:00–14:30',
      dinnerHours: '晚餐 18:00–20:30',
      wednesdayClosed: '基本上每周三休息',
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
      tagline: '당신의 마음을 채워주는 후쿠오카 케야키 거리의 프렌치 레스토랑',
      taglineEn: 'A Taste of French Elegance in the Heart of Fukuoka',
      cta: '예약하기',
    },
    about: {
      title: '셰프 & 레스토랑 소개',
      michelin: '미쉐린 1스타',
      philosophy: '정통 속에서 빛나는 진심',
      experience: '정통 프렌치와 규슈 제철 식재료가 어우러진 미식 경험',
      chefTitle: '셰프',
      chefName: '미즈모토 야스히로',
      chefBio: '프랑스에서 연수를 마친 후, 유명 레스토랑 Hiramatsu에 입사. 전통 프렌치 기술과 규슈 식재료의 맛을 결합한 독창적인 스타일을 확립. 2019년 미쉐린 1스타 획득.',
      achievements: {
        michelinStar: '미쉐린 1스타 수상',
        frenchExperience: '프렌치 요리 경력',
        localIngredients: '규슈 제철 식재료',
        franceTraining: '프랑스 현지 연수',
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
      allergens: '알레르기가 있으신 경우, 예약 시 미리 말씀해 주세요.',
      seasonal: '계절 식재료에 따라 내용이 변경될 수 있습니다',
      courses: {
        lunchCourse: '런치 코스',
        premiumLunchCourse: '디너 코스',
        dinnerCourse: '디너 코스',
        chefsTastingMenu: '셰프 추천 코스',
      },
      descriptions: {
        lunchCourse: '계절 전채, 생선 요리, 고기 요리, 디저트, 커피',
        premiumLunchCourse: '아뮤즈, 전채 2종, 생선 요리, 고기 요리, 디저트, 프티 푸르, 커피',
        dinnerCourse: '아뮤즈, 전채, 수프, 생선 요리, 고기 요리, 치즈, 디저트, 프티 푸르, 커피',
        chefsTastingMenu: '셰프가 엄선한 식재료로 구성된 오늘의 스페셜 8코스',
      },
      features: {
        creditCard: '신용카드 사용 가능',
        noSmoking: '전 좌석 금연',
      },
      reservation: '예약하기',
    },
    info: {
      title: '매장 정보',
      location: '위치',
      businessHours: '영업시간',
      lunchHours: '런치 12:00–14:30',
      dinnerHours: '디너 18:00–20:30',
      features: {
        michelin: '미쉐린 1스타',
        creditCard: '신용카드 결제 가능',
        noChildren: '12세 미만 어린이도 환영합니다. 전화로 상담 부탁드립니다.',
        noSmoking: '전석 금연',
        dresscode: '스마트 캐주얼',
      },
      access: '후쿠오카 지하철 아카사카역에서 도보 15분',
      accessDetail: '・니시테츠 버스 아카사카 3초메 정류장 근처\n・하카타 버스터미널(4번 승강장)\n・에키마에A 출발(국체도로 경유 113,203,201,114,12,1136,201) 약 20분\n・후쿠오카 지하철 아카사카역에서 도보 15분',
      addressDetail: '후쿠오카 지하철 아카사카역에서 도보 15분',
      basicInfo: '기본 정보',
      operatingHours: '영업시간',
      lunchOperating: '점심 영업',
      dinnerOperating: '저녁 영업',
      wednesdayClosed: '기본적으로 수요일 정기휴무',
      characteristics: '특징',
      accessMap: '오시는 길',
      showMap: '지도 보기',
      nearestStation: '가장 가까운 정류장: 니시테츠 버스 아카사카 3초메',
      directions: '오시는 방법',
      other: '기타',
      restaurantInfo: '총 15석의 아담한 레스토랑입니다. 카운터석은 5석이며, 혼밥도 환영합니다.',
      notes: '■ 이용 시 유의사항 ■',
      reservationNotes: '식재료 낭비를 줄이고 최고의 요리를 제공하기 위해, 예약은 전날까지 부탁드립니다.',
      cancellationPolicy: '예약 당일 취소 시, 예약하신 요리의 금액을 청구할 수 있으니 양해 부탁드립니다.',
      reservationChange: '인원 변경이나 취소는 가능한 한 빨리 연락 부탁드립니다.',
      thankYou: '감사합니다.',
      lunchNote: '(금・토・일・공휴일만)',
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
      latestInfo: '레스토랑 Sourire의 최신 소식을 전해드립니다',
      viewAllNews: '모든 공지 보기',
    },
    instagram: {
      title: 'Sourire 인스타그램',
      subtitle: '일상의 요리와 매장 분위기를 소개합니다',
      viewPost: '게시물 보기',
      followUs: '팔로우하기',
    },
    footer: {
      copyright: '© 2025 Restaurant Sourire. All rights reserved.',
      privacy: '개인정보처리방침',
      languages: '언어 선택',
      description: '정통 프렌치와 규슈의 제철 재료가 어우러진 미식 경험을 선사합니다. 후쿠오카 케야키 거리에서 여러분을 기다리고 있습니다.',
      address: '일본 후쿠오카현 후쿠오카시 주오구 아카사카 2-6-5-104 파크하이츠 아카사카 1F-4',
      lunchHours: '런치 12:00–14:30',
      dinnerHours: '디너 18:00–20:30',
      wednesdayClosed: '기본적으로 수요일 정기휴무',
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
      contact: 'Contactez-nous',
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
      backToTop: 'Retour en haut',
      about: 'À propos du chef et du restaurant',
      info: 'Informations pratiques',
      phoneNumber: '+81-92-753-6324',
      home: 'Accueil',
    },
    hero: {
      title: 'Restaurant\nSourire',
      subtitle: 'Restaurant Sourire',
      tagline: "Cuisine française qui réchauffe le cœur, sur l'avenue Keyaki à Fukuoka",
      taglineEn: 'A Taste of French Elegance in the Heart of Fukuoka',
      cta: 'Réserver une table',
    },
    about: {
      title: 'À propos du chef et du restaurant',
      michelin: 'Une étoile Michelin',
      philosophy: 'Brillance dans la tradition, sans extravagance',
      experience: 'Une expérience gastronomique mêlant tradition française et produits de saison de Kyushu',
      chefTitle: 'Chef',
      chefName: 'Yasuhiro Mizumoto',
      chefBio: "Formé en France, il rejoint le groupe Hiramatsu. Il crée un style culinaire unique en associant techniques françaises classiques et saveurs locales de Kyushu. Récompensé d'une étoile Michelin en 2019.",
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
      course: 'Menu',
      price: 'Prix',
      yen: '¥',
      taxIncluded: 'Taxes comprises',
      serviceCharge: 'Frais de service de 10 % en supplément',
      allergens: 'Veuillez nous informer de toute allergie alimentaire au moment de la réservation.',
      seasonal: 'Le contenu varie selon la saison',
      courses: {
        lunchCourse: 'Menu déjeuner',
        premiumLunchCourse: 'Menu dîner',
        dinnerCourse: 'Menu dîner',
        chefsTastingMenu: 'Menu dégustation du chef',
      },
      descriptions: {
        lunchCourse: "Entrée de saison, plat de poisson, plat de viande, dessert et café",
        premiumLunchCourse: "Amuse-bouche, deux entrées, plat de poisson, plat de viande, dessert, mignardises, café",
        dinnerCourse: "Amuse-bouche, entrée, soupe, plat de poisson, plat de viande, fromage, dessert, mignardises, café",
        chefsTastingMenu: "Un menu de 8 plats avec des ingrédients soigneusement sélectionnés par le chef",
      },
      features: {
        creditCard: 'Cartes bancaires acceptées',
        noSmoking: 'Espace entièrement non-fumeur',
      },
      reservation: 'Réserver',
    },
    info: {
      title: 'Informations pratiques',
      location: 'Emplacement',
      businessHours: "Horaires d'ouverture",
      lunchHours: 'Déjeuner : 12h00–14h30',
      dinnerHours: 'Dîner : 18h00–20h30',
      features: {
        michelin: 'Une étoile Michelin',
        creditCard: 'Cartes bancaires acceptées',
        noChildren: 'Enfants de moins de 12 ans bienvenus sur réservation téléphonique',
        noSmoking: 'Non-fumeur',
        dresscode: 'Tenue correcte exigée (smart casual)',
      },
      access: 'À 15 minutes à pied de la station Akasaka (métro de Fukuoka)',
      accessDetail: '・À proximité de l\'arrêt de bus Nishitetsu Akasaka 3-chome\n・Depuis le terminal de bus Hakata (quai 4)\n・Départ de Ekimae A (via la route Kokutai : 113, 203, 201, 114, 12, 1136, 201) ~20 min\n・15 minutes à pied de la station Akasaka (métro de Fukuoka)',
      addressDetail: 'À 15 minutes à pied de la station Akasaka',
      basicInfo: 'Informations générales',
      operatingHours: "Horaires d'ouverture",
      lunchOperating: 'Service du midi',
      dinnerOperating: 'Service du soir',
      wednesdayClosed: 'Fermé le mercredi (sauf exceptions)',
      characteristics: 'Caractéristiques',
      accessMap: "Plan d'accès",
      showMap: 'Afficher la carte',
      nearestStation: 'Arrêt le plus proche : Bus Nishitetsu Akasaka 3-chome',
      directions: 'Comment venir',
      other: 'Autres informations',
      restaurantInfo: 'Petit restaurant intime de 15 places, dont 5 au comptoir. Les clients seuls sont les bienvenus.',
      notes: '■ À noter avant votre visite ■',
      reservationNotes: "Afin d'éviter le gaspillage alimentaire et garantir une qualité optimale, nous vous remercions de réserver au plus tard la veille",
      cancellationPolicy: 'Toute annulation le jour même peut entraîner des frais correspondant au menu réservé. Merci de votre compréhension.',
      reservationChange: 'Pour toute modification ou annulation, veuillez nous contacter le plus tôt possible',
      thankYou: 'Merci de votre compréhension',
      lunchNote: '(vendredi, samedi, dimanche et jours fériés uniquement)',
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
      latestInfo: 'Recevez les dernières nouvelles du Restaurant Sourire',
      viewAllNews: 'Voir toutes les actualités',
    },
    instagram: {
      title: 'Instagram de Sourire',
      subtitle: "Découvrez nos plats du jour et l'ambiance du restaurant",
      viewPost: 'Voir la publication',
      followUs: 'Nous suivre',
    },
    footer: {
      copyright: '© 2025 Restaurant Sourire. Tous droits réservés.',
      privacy: 'Politique de confidentialité',
      languages: 'Choisir la langue',
      description: "Profitez d'une expérience culinaire mêlant tradition française et produits de Kyushu, au cœur de l'avenue Keyaki à Fukuoka.",
      address: '1F-4 Park Heights Akasaka, 2-6-5 Akasaka, Chuo-ku, Fukuoka, Japon',
      lunchHours: 'Déjeuner : 12h00–14h30',
      dinnerHours: 'Dîner : 18h00–20h30',
      wednesdayClosed: 'Fermé le mercredi (sauf exceptions)',
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