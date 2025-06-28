import type { Metadata } from "next";
import { Noto_Serif_JP, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { getTranslation, DEFAULT_LANGUAGE } from '@/lib/i18n'

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

const t = getTranslation(DEFAULT_LANGUAGE)

export const metadata: Metadata = {
  title: {
    default: t.seo.title,
    template: `%s | ${t.seo.title}`
  },
  description: t.seo.description,
  keywords: t.seo.keywords,
  authors: [{ name: "Restaurant Sourire" }],
  creator: "Restaurant Sourire",
  publisher: "Restaurant Sourire",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sourire-fukuoka.com'),
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
    url: 'https://sourire-fukuoka.com',
    title: t.seo.ogTitle,
    description: t.seo.ogDescription,
    siteName: 'Restaurant Sourire',
    images: [
      {
        url: '/images/og/og-main.jpg',
        width: 1200,
        height: 630,
        alt: t.seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.seo.twitterTitle,
    description: t.seo.twitterDescription,
    images: ['/images/og/og-main.jpg'],
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B0000" />
        <meta name="msapplication-TileColor" content="#8B0000" />
        
        {/* 構造化データ（JSON-LD） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              ...t.seo.structuredData
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
