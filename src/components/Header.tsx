'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { SectionProps, Language } from '@/types'
import { getTranslation } from '@/lib/i18n'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

interface HeaderProps extends SectionProps {
  onLanguageChange: (language: Language) => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const t = getTranslation(language)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: t.common.about || '私たちについて' },
    { href: '#menu', label: t.common.menu },
    { href: '#info', label: t.common.info || '店舗情報' },
    { href: '#news', label: t.common.news },
    { href: '#instagram', label: t.common.instagram },
    { href: '#contact', label: t.common.contact },
  ]

  // バーガーメニューの外側クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // ホームにスクロールする関数
  const scrollToHome = () => {
    const homeElement = document.getElementById('home')
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className="fixed w-full z-40 bg-cream/95 backdrop-blur-elegant shadow-elegant lg:top-0 lg:left-0 top-auto bottom-0 left-0 lg:bottom-auto"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 lg:py-6">
          {/* ロゴ */}
          <motion.a
            href="#home"
            onClick={scrollToHome}
            className="flex items-center lg:static fixed left-4 bottom-2 z-50 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-3">
              {/* ロゴ画像 */}
              <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                <Image
                  src="/images/Sourire_logo.png"
                  alt="Restaurant Sourire Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* ロゴテキスト */}
              <div className="hidden sm:block">
                <div className="text-xl lg:text-2xl font-bold text-wine font-serif">
                  <span className="block text-xs lg:text-sm font-elegant text-gold-dark tracking-widest uppercase">
                    Restaurant
                  </span>
                  Sourire
                </div>
              </div>
            </div>
          </motion.a>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-black hover:text-wine transition-colors duration-300 font-medium tracking-wide relative group whitespace-nowrap"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wine transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* 予約＆多言語ボタンを中央揃えで横並び */}
          <div className="hidden lg:flex items-center gap-6">

            <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
            {/* 電話アイコンボタン */}
            <a
              href={`tel:${t.common.phoneNumber}`}
              className="flex items-center justify-center bg-wine/90 hover:bg-wine-dark text-cream-light w-12 h-12 rounded-full shadow-elegant transition-all duration-300"
              aria-label={t.common.phone}
            >
              <svg className="w-6 h-6 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>

          {/* モバイル：言語切替＆バーガーメニュー */}
          <div className="flex lg:hidden items-center w-full justify-between px-4">
            <div className="flex-1 flex justify-center">
              <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
            </div>
            {/* 電話アイコンボタン（モバイル専用） */}
            <a
              href={`tel:${t.common.phoneNumber}`}
              className="flex items-center justify-center bg-wine/90 hover:bg-wine-dark text-cream-light w-12 h-12 rounded-full shadow-elegant transition-all duration-300 mx-2"
              aria-label={t.common.phone}
            >
              <svg className="w-6 h-6 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-wine ml-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="メニューを開く"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="fixed bottom-16 left-0 w-full bg-cream/95 backdrop-blur-elegant border-t border-wine/20 z-50 lg:hidden"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-black hover:text-wine transition-colors duration-300 font-medium py-2 border-b border-warm-gray/50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-center bg-wine hover:bg-wine-dark text-cream-light px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.common.reservation}
            </a>
          </div>
        </div>
      )}
    </motion.header>
  )
} 