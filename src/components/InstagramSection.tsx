'use client'

import { SectionProps } from '@/types'
import { getTranslation } from '@/lib/i18n'
import { useState, useEffect } from 'react'

export default function InstagramSection({ language }: SectionProps) {
  const t = getTranslation(language)
  const [instagramLoaded, setInstagramLoaded] = useState(false)
  const [instagramVisible, setInstagramVisible] = useState(false)

  // Instagram iframeの遅延読み込み
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInstagramVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const instagramElement = document.getElementById('instagram-container')
    if (instagramElement) {
      observer.observe(instagramElement)
    }

    return () => observer.disconnect()
  }, [])

  // restaurant_sourireのInstagramプロフィールURL
  const instagramProfile = 'https://www.instagram.com/restaurant_sourire/'

  return (
    <section id="instagram" className="section-spacing bg-gradient-to-b from-warm-gray to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg className="w-8 h-8 text-wine" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.25 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 6.5A5.5 5.5 0 1 0 12 17.5a5.5 5.5 0 0 0 0-11zm0 1.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
            </svg>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-wine font-serif">
              {t.instagram.title}
            </h2>
          </div>
          <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed mb-8">
            {t.instagram.subtitle}
          </p>
          {/* フォローボタン */}
          <a
            href={instagramProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-elegant hover:shadow-xl"
            aria-label={`${t.instagram.followUs} - Instagramでフォローする`}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.25 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 6.5A5.5 5.5 0 1 0 12 17.5a5.5 5.5 0 0 0 0-11zm0 1.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
            </svg>
            <span className="text-white">{t.instagram.followUs}</span>
          </a>
        </div>

        {/* Instagram公式oEmbedウィジェット - 遅延読み込み最適化 */}
        <div 
          id="instagram-container"
          className="flex flex-col items-center gap-8 relative"
        >
          {/* ローディング状態 */}
          {instagramVisible && !instagramLoaded && (
            <div className="w-[400px] h-[480px] bg-white rounded-xl shadow-elegant flex items-center justify-center absolute top-0 left-0 z-10">
              <div className="text-center text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-4 text-wine" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.25 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 6.5A5.5 5.5 0 1 0 12 17.5a5.5 5.5 0 0 0 0-11zm0 1.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
                </svg>
                <div className="font-medium">Instagram</div>
                <div className="text-sm opacity-75">読み込み中...</div>
              </div>
            </div>
          )}
          {/* 遅延読み込みされたInstagram iframe */}
          {instagramVisible && (
            <iframe
              src="https://www.instagram.com/restaurant_sourire/embed"
              width="400"
              height="480"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
              className="rounded-xl shadow-elegant bg-white relative z-20"
              title="Instagram最新投稿"
              loading="lazy"
              onLoad={() => setInstagramLoaded(true)}
              style={{ display: instagramLoaded ? 'block' : 'none' }}
            />
          )}
        </div>
      </div>
    </section>
  )
} 