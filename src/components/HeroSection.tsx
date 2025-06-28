'use client'

import { motion } from 'framer-motion'
import { SectionProps } from '@/types'
import { getTranslation } from '@/lib/i18n'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HeroSection({ language }: SectionProps) {
  const t = getTranslation(language)

  // スライドショー用画像リスト
  const images = [
    '/images/お肉料理2.webp',
    '/images/魚料理4.webp',
    '/images/デザート2.webp',
    '/images/料理1.webp',
    '/images/dinner-course.jpg',
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像とオーバーレイ（スライドショー） */}
      <div className="absolute inset-0 z-0">
        {images.map((img, idx) => (
          <motion.div
            key={img}
            className="w-full h-full bg-cover bg-center bg-no-repeat absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url('${img}')`,
              opacity: current === idx ? 1 : 0,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: current === idx ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-wine/20 to-transparent" />
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* レストランロゴ */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* ロゴ画像 */}
            <div className="flex justify-center mb-6">
              <motion.div
                className="relative w-24 h-24 lg:w-32 lg:h-32"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/Sourire_logo.png"
                  alt="Restaurant Sourire Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-cream-light font-serif mb-2">
              {t.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gold font-elegant tracking-widest">
              {t.hero.subtitle}
            </p>
          </motion.div>

          {/* ミシュラン星とキャッチコピー */}
          <motion.div
            className="mb-8 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* ミシュラン星 */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <motion.div
                className="relative w-8 h-8 lg:w-10 lg:h-10 rounded-full shadow-lg bg-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img src="/images/ミシュラン1つ星.png" alt="ミシュラン1つ星" className="object-contain w-full h-full rounded-full" />
              </motion.div>
              <span className="text-cream-light font-medium tracking-wide text-lg">
                {t.about.michelin}
              </span>
            </div>

            {/* キャッチコピー */}
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl text-cream-light font-serif leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {t.hero.taglineJa}
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-gold-light font-elegant italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {t.hero.taglineEn}
            </motion.p>
          </motion.div>

          {/* CTAボタン */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.a
              href="#contact"
              className="bg-wine hover:bg-wine-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-elegant hover:shadow-xl flex items-center gap-3"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 25px 70px rgba(139, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-white">{t.hero.cta}</span>
            </motion.a>

            <motion.a
              href="#menu"
              className="bg-cream-light border-2 border-cream-light text-wine px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3"
              whileHover={{ 
                scale: 1.05, 
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t.menu.title}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="text-cream-light cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <p className="text-sm mt-2 tracking-wide">Scroll</p>
        </motion.div>
      </motion.div>
    </section>
  )
} 