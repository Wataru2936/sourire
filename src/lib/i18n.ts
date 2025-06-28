import { Language } from '@/types';

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
  };
  hero: {
    title: string;
    subtitle: string;
    taglineJa: string;
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
  };
  info: {
    title: string;
    location: string;
    businessHours: string;
    lunchHours: string;
    dinnerHours: string;
    closedDays: string;
    phone: string;
    email: string;
    features: {
      michelin: string;
      creditCard: string;
      noChildren: string;
      noSmoking: string;
      dresscode: string;
    };
    access: string;
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
  };
}

// 翻訳データ
export const translations: Record<Language, Translations> = {
  ja: {
    common: {
      reservation: 'ご予約',
      phone: 'お電話',
      email: 'メール',
      instagram: 'Instagram',
      address: '住所',
      hours: '営業時間',
      closed: '定休日',
      menu: 'メニュー',
      news: 'お知らせ',
      contact: 'お問い合わせ',
      loading: '読み込み中...',
      error: 'エラーが発生しました',
      backToTop: 'トップへ戻る',
    },
    hero: {
      title: 'レストラン スーリール',
      subtitle: 'Restaurant Sourire',
      taglineJa: 'あなたの心を満たす、福岡けやき通りのフランス料理',
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
      allergens: 'アレルギー情報',
      seasonal: '季節の食材により内容が変わります',
    },
    info: {
      title: '店舗情報',
      location: '所在地',
      businessHours: '営業時間',
      lunchHours: 'ランチ 112:00-14:30（L.O.13:00）',
      dinnerHours: 'ディナー 18:00-20:30（L.O.20:00）',
      closedDays: '毎週月曜日、第1・第3火曜日',
      phone: '092-xxx-xxxx',
      email: 'info@sourire-fukuoka.com',
      features: {
        michelin: 'ミシュラン一つ星',
        creditCard: 'クレジットカード対応',
        noChildren: '12歳未満のお子様も歓迎です。お電話でご相談下さい。',
        noSmoking: '全席禁煙',
        dresscode: 'スマートカジュアル',
      },
      access: '福岡市営地下鉄赤坂駅から徒歩15分',
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
    },
  },
  en: {
    common: {
      reservation: 'Reservation',
      phone: 'Phone',
      email: 'Email',
      instagram: 'Instagram',
      address: 'Address',
      hours: 'Hours',
      closed: 'Closed',
      menu: 'Menu',
      news: 'News',
      contact: 'Contact',
      loading: 'Loading...',
      error: 'An error occurred',
      backToTop: 'Back to Top',
    },
    hero: {
      title: 'Restaurant Sourire',
      subtitle: 'レストラン スーリール',
      taglineJa: 'あなたの心を満たす、福岡けやき通りのフランス料理',
      taglineEn: 'A Taste of French Elegance in the Heart of Fukuoka',
      cta: 'Make a Reservation',
    },
    about: {
      title: 'About Chef & Restaurant',
      michelin: 'Michelin One Star',
      philosophy: 'Brilliance within tradition, without ostentation',
      experience: 'An exquisite culinary experience blending classic French techniques with Kyushu\'s seasonal ingredients',
      chefTitle: 'Chef',
      chefName: 'Ichiro Tanaka',
      chefBio: 'After training in France, established a unique culinary style that fuses traditional French techniques with the finest Kyushu ingredients. Awarded Michelin One Star in 2019.',
    },
    menu: {
      title: 'Course Menu',
      lunch: 'Lunch Course',
      dinner: 'Dinner Course',
      course: 'Course',
      price: 'Price',
      yen: 'yen',
      taxIncluded: 'Tax included',
      serviceCharge: '10% service charge not included',
      allergens: 'Allergy Information',
      seasonal: 'Menu may change according to seasonal ingredients',
    },
    info: {
      title: 'Restaurant Information',
      location: 'Location',
      businessHours: 'Business Hours',
      lunchHours: 'Lunch 112:00-14:30 (L.O.13:00)',
      dinnerHours: 'Dinner 18:00-20:30 (L.O.20:00)',
      closedDays: 'Closed: Mondays, 1st & 3rd Tuesdays',
      phone: '+81-92-xxx-xxxx',
      email: 'info@sourire-fukuoka.com',
      features: {
        michelin: 'Michelin One Star',
        creditCard: 'Credit Cards Accepted',
        noChildren: 'Children under 12 not permitted',
        noSmoking: 'Non-smoking establishment',
        dresscode: 'Smart Casual',
      },
      access: '5-minute walk from Nishitetsu Fukuoka (Tenjin) Station',
    },
    news: {
      title: 'News & Updates',
      date: 'Date',
      readMore: 'Read More',
      noNews: 'No news available',
      types: {
        announcement: 'Announcement',
        event: 'Event',
        holiday: 'Holiday Notice',
        menuUpdate: 'Menu Update',
      },
    },
    instagram: {
      title: 'Sourire\'s Daily Journal',
      subtitle: 'Sharing our daily cuisine and restaurant atmosphere',
      viewPost: 'View Post',
      followUs: 'Follow Us',
    },
    footer: {
      copyright: '© 2025 Restaurant Sourire. All rights reserved.',
      privacy: 'Privacy Policy',
      languages: 'Select Language',
    },
  },
  zh: {
    common: {
      reservation: '预约',
      phone: '电话',
      email: '邮箱',
      instagram: 'Instagram',
      address: '地址',
      hours: '营业时间',
      closed: '休息日',
      menu: '菜单',
      news: '通知',
      contact: '联系方式',
      loading: '加载中...',
      error: '发生错误',
      backToTop: '返回顶部',
    },
    hero: {
      title: '微笑餐厅',
      subtitle: 'Restaurant Sourire',
      taglineJa: 'あなたの心を満たす、福岡けやき通りのフランス料理',
      taglineEn: 'A Taste of French Elegance in the Heart of Fukuoka',
      cta: '立即预约',
    },
    about: {
      title: '关于主厨与餐厅',
      michelin: '米其林一星',
      philosophy: '不哗众取宠，在传统中绽放光彩',
      experience: '法式经典技法与九州时令食材相融合的美食体验',
      chefTitle: '主厨',
      chefName: '田中一郎',
      chefBio: '在法国修业后，建立了融合传统法式技法与九州优质食材的独特料理风格。2019年获得米其林一星。',
    },
    menu: {
      title: '套餐料理',
      lunch: '午餐套餐',
      dinner: '晚餐套餐',
      course: '套餐',
      price: '价格',
      yen: '日元',
      taxIncluded: '含税',
      serviceCharge: '服务费10%另收',
      allergens: '过敏原信息',
      seasonal: '根据时令食材，内容可能有所变化',
    },
    info: {
      title: '餐厅信息',
      location: '位置',
      businessHours: '营业时间',
      lunchHours: '午餐 112:00-14:30（最后点餐13:00）',
      dinnerHours: '晚餐 18:00-20:30（最后点餐20:00）',
      closedDays: '每周一、第1和第3个周二休息',
      phone: '+81-92-xxx-xxxx',
      email: 'info@sourire-fukuoka.com',
      features: {
        michelin: '米其林一星',
        creditCard: '接受信用卡',
        noChildren: '12岁以下儿童谢绝入内',
        noSmoking: '全店禁烟',
        dresscode: '智能休闲装',
      },
      access: '从西铁福冈（天神）站步行5分钟',
    },
    news: {
      title: '最新通知',
      date: '日期',
      readMore: '查看详情',
      noNews: '暂无通知',
      types: {
        announcement: '通知',
        event: '活动',
        holiday: '休业通知',
        menuUpdate: '菜单更新',
      },
    },
    instagram: {
      title: '微笑餐厅日记',
      subtitle: '分享我们的日常料理与餐厅氛围',
      viewPost: '查看帖子',
      followUs: '关注我们',
    },
    footer: {
      copyright: '© 2025 微笑餐厅 版权所有',
      privacy: '隐私政策',
      languages: '选择语言',
    },
  },
  ko: {
    common: {
      reservation: '예약',
      phone: '전화',
      email: '이메일',
      instagram: 'Instagram',
      address: '주소',
      hours: '영업시간',
      closed: '휴무일',
      menu: '메뉴',
      news: '공지사항',
      contact: '문의',
      loading: '로딩 중...',
      error: '오류가 발생했습니다',
      backToTop: '맨 위로',
    },
    hero: {
      title: '레스토랑 수리르',
      subtitle: 'Restaurant Sourire',
      taglineJa: 'あなたの心을 満たす、福岡けやき通りの一皿',
      taglineEn: 'A Taste of French Elegance in the Heart of Fukuoka',
      cta: '예약하기',
    },
    about: {
      title: '셰프 & 레스토랑 소개',
      michelin: '미슐랭 1스타',
      philosophy: '기교 없이, 정통 속에서 빛나는 요리',
      experience: '프렌치 정통 기법과 규슈 제철 식재료가 어우러진 미식 경험',
      chefTitle: '셰프',
      chefName: '타나카 이치로',
      chefBio: '프랑스 수업을 거쳐 전통적인 프렌치 기법에 규슈 식재료의 맛을 융합한 독특한 요리 스타일을 확립했습니다. 2019년 미슐랭 1스타를 획득했습니다.',
    },
    menu: {
      title: '코스 요리',
      lunch: '런치 코스',
      dinner: '디너 코스',
      course: '코스',
      price: '가격',
      yen: '엔',
      taxIncluded: '세금 포함',
      serviceCharge: '서비스료 10% 별도',
      allergens: '알레르기 정보',
      seasonal: '계절 식재료에 따라 내용이 변경될 수 있습니다',
    },
    info: {
      title: '매장 정보',
      location: '위치',
      businessHours: '영업시간',
      lunchHours: '런치 112:00-14:30 (라스트오더 13:00)',
      dinnerHours: '디너 18:00-20:30 (라스트오더 20:00)',
      closedDays: '매주 월요일, 첫째・셋째 화요일',
      phone: '+81-92-xxx-xxxx',
      email: 'info@sourire-fukuoka.com',
      features: {
        michelin: '미슐랭 1스타',
        creditCard: '신용카드 사용 가능',
        noChildren: '12세 미만 아동 입장 불가',
        noSmoking: '전체 금연',
        dresscode: '스마트 캐주얼',
      },
      access: '니시테츠 후쿠오카(텐진)역에서 도보 5분',
    },
    news: {
      title: '공지사항',
      date: '날짜',
      readMore: '자세히 보기',
      noNews: '현재 공지사항이 없습니다',
      types: {
        announcement: '공지',
        event: '이벤트',
        holiday: '휴업 안내',
        menuUpdate: '메뉴 업데이트',
      },
    },
    instagram: {
      title: '수리르의 일기',
      subtitle: '매일의 요리와 매장 분위기를 전해드립니다',
      viewPost: '게시물 보기',
      followUs: '팔로우하기',
    },
    footer: {
      copyright: '© 2025 Restaurant Sourire. All rights reserved.',
      privacy: '개인정보처리방침',
      languages: '언어 선택',
    },
  },
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
  zh: '中文',
  ko: '한국어',
};

// 言語フラグ（絵文字）
export const LANGUAGE_FLAGS: Record<Language, string> = {
  ja: '🇯🇵',
  en: '🇺🇸',
  zh: '🇨🇳',
  ko: '🇰🇷',
}; 