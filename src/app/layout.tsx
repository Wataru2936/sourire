import type { Metadata } from "next";
import { Noto_Serif_JP, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Google Fontsの設定
const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-serif-jp",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-elegant",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "レストラン スーリール | 福岡・けやき通りのミシュラン一つ星フレンチ",
    template: "%s | レストラン スーリール"
  },
  description: "福岡市・けやき通りにあるミシュラン一つ星フレンチレストラン「スーリール」。フレンチの王道と九州の旬が織りなす美食体験をお楽しみください。",
  keywords: [
    "レストラン スーリール",
    "Restaurant Sourire",
    "福岡",
    "けやき通り",
    "ミシュラン一つ星",
    "フレンチ",
    "French restaurant",
    "Fukuoka",
    "高級レストラン",
    "コース料理",
    "予約"
  ],
  authors: [{ name: "Restaurant Sourire" }],
  creator: "Restaurant Sourire",
  publisher: "Restaurant Sourire",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.sourire.win'),
  alternates: {
    canonical: '/',
    languages: {
      'ja-JP': '/ja',
      'en-US': '/en',
      'zh-CN': '/zh',
      'ko-KR': '/ko',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://www.sourire.win',
    title: 'レストラン スーリール | 福岡・けやき通りのミシュラン一つ星フレンチ',
    description: 'フレンチの王道と九州の旬が織りなす美食体験をお楽しみください。',
    siteName: 'Restaurant Sourire',
    images: [
      {
        url: '/images/OGP.png',
        width: 1200,
        height: 630,
        alt: 'レストラン スーリール - 福岡・けやき通りのミシュラン一つ星フレンチ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'レストラン スーリール | 福岡・けやき通りのミシュラン一つ星フレンチ',
    description: 'フレンチの王道と九州の旬が織りなす美食体験をお楽しみください。',
    images: ['/images/OGP.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'restaurant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B0000" />
        <meta name="msapplication-TileColor" content="#8B0000" />
        <meta name="robots" content="index, follow" />
        
        {/* 構造化データ（JSON-LD） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "レストラン スーリール",
              "alternateName": "Restaurant Sourire",
              "description": "福岡市・けやき通りにあるミシュラン一つ星フレンチレストラン",
              "image": "https://www.sourire.win/images/OGP.png",
              "url": "https://www.sourire.win",
              "telephone": "+81-92-753-6324",
              "email": "info@sourire-fukuoka.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1F-4 Park Heights Akasaka, 2-6-5 Akasaka, Chuo-ku",
                "addressLocality": "福岡市",
                "addressRegion": "福岡県",
                "addressCountry": "JP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.583971",
                "longitude": "130.392956"
              },
              "openingHours": [
                "Tu-Su 12:00-14:30",
                "Tu-Su 18:00-20:30"
              ],
              "servesCuisine": "French",
              "priceRange": "$$$$",
              "acceptsReservations": true,
              "hasMenu": "https://www.sourire.win#menu",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              },
              "award": "Michelin 1 Star"
            })
          }}
        />
      </head>
      <body className={`min-h-screen bg-gradient-to-br from-cream-light to-cream font-serif-jp ${notoSerifJP.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable}`}>
        <div id="top" />
        {children}
      </body>
    </html>
  );
}
