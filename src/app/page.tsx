'use client'

import { useState } from 'react'
import { Language } from '@/types'
import { DEFAULT_LANGUAGE } from '@/lib/i18n'

// コンポーネントのインポート（後で作成）
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import MenuSection from '@/components/MenuSection'
import InfoSection from '@/components/InfoSection'
import NewsSection from '@/components/NewsSection'
import InstagramSection from '@/components/InstagramSection'
import Footer from '@/components/Footer'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE)

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-light to-cream">
      {/* ヘッダー */}
      <Header language={currentLanguage} onLanguageChange={handleLanguageChange} />
      
      {/* ヒーローセクション */}
      <HeroSection language={currentLanguage} />
      
      {/* シェフ&レストラン紹介セクション */}
      <AboutSection language={currentLanguage} />
      
      {/* メニューセクション */}
      <MenuSection language={currentLanguage} />
      
      {/* 店舗情報セクション */}
      <InfoSection language={currentLanguage} />
      
      {/* お知らせセクション */}
      <NewsSection language={currentLanguage} />
      
      {/* Instagramセクション */}
      <InstagramSection language={currentLanguage} />
      
      {/* フッター */}
      <Footer language={currentLanguage} />
      </main>
  )
}
