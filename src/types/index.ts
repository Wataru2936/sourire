// レストラン・スーリールの型定義

export type Language = 'ja' | 'en' | 'zh' | 'ko';

export interface MenuCourse {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  price: number;
  type: 'lunch' | 'dinner';
  imageUrl?: string;
  allergens?: string[];
  isAvailable: boolean;
}

export interface NewsItem {
  id: string;
  title: Record<Language, string>;
  content: Record<Language, string>;
  date: string;
  type: 'announcement' | 'event' | 'holiday' | 'menu-update';
  isPublished: boolean;
}

export interface ChefProfile {
  name: Record<Language, string>;
  title: Record<Language, string>;
  biography: Record<Language, string>;
  achievements: Record<Language, string[]>;
  imageUrl: string;
}

export interface RestaurantInfo {
  name: Record<Language, string>;
  tagline: Record<Language, string>;
  description: Record<Language, string>;
  address: Record<Language, string>;
  phone: string;
  email: string;
  instagram: string;
  businessHours: {
    lunch: {
      days: string;
      time: string;
    };
    dinner: {
      days: string;
      time: string;
    };
  };
  closedDays: Record<Language, string>;
  features: {
    michelinStar: boolean;
    creditCard: boolean;
    noChildren: boolean;
    noSmoking: boolean;
    dresscode: Record<Language, string>;
  };
  location: {
    lat: number;
    lng: number;
  };
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  timestamp: string;
  permalink: string;
}

export interface ContactInfo {
  type: 'phone' | 'email' | 'instagram';
  value: string;
  label: Record<Language, string>;
}

// Google Sheets APIのレスポンス型
export interface SheetsResponse<T> {
  data: T[];
  lastUpdated: string;
}

// コンポーネントのプロパティ型
export interface SectionProps {
  language: Language;
}

export interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

// フォーム関連
export interface ReservationForm {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  requests?: string;
}

// API エンドポイント型
export interface ApiEndpoint {
  menu: '/api/menu';
  news: '/api/news';
  instagram: '/api/instagram';
}

// エラーハンドリング
export interface ApiError {
  message: string;
  code: number;
  details?: unknown;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any 