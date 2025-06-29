'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionProps } from '@/types'
import { getTranslation } from '@/lib/i18n'

// 仮のメニューデータ（後でAPIから取得）
const menuData = {
  lunch: [
    {
      id: 'lunch-1',
      name: 'ランチコース',
      nameEn: 'Lunch Course',
      price: 4500,
      description: '季節の前菜、魚料理、肉料理、デザート、コーヒー',
      descriptionEn: 'Seasonal appetizer, fish course, meat course, dessert, coffee',
      image: '/images/lunch-course.jpg'
    },
    {
      id: 'dinner',
      name: 'ディナーコース',
      nameEn: 'Premium Lunch Course',
      price: 6800,
      description: 'アミューズ、前菜2品、魚料理、肉料理、デザート、小菓子、コーヒー',
      descriptionEn: 'Amuse-bouche, 2 appetizers, fish course, meat course, dessert, petit fours, coffee',
      image: '/images/premium-lunch.jpg'
    }
  ],
  dinner: [
    {
      id: 'dinner-1',
      name: 'ディナーコース',
      nameEn: 'Dinner Course',
      price: 12000,
      description: 'アミューズ、前菜、スープ、魚料理、肉料理、チーズ、デザート、小菓子、コーヒー',
      descriptionEn: 'Amuse-bouche, appetizer, soup, fish course, meat course, cheese, dessert, petit fours, coffee',
      image: '/images/dinner-course.jpg'
    },
    {
      id: 'dinner-2',
      name: 'シェフおまかせコース',
      nameEn: 'Chef\'s Tasting Menu',
      price: 18000,
      description: 'シェフが厳選した特別な食材を使用した本日のおまかせコース（8品）',
      descriptionEn: 'Today\'s special tasting menu with chef-selected premium ingredients (8 courses)',
      image: '/images/chefs-menu.jpg'
    }
  ]
}

export default function MenuSection({ language }: SectionProps) {
  const [activeTab, setActiveTab] = useState<'lunch' | 'dinner'>('lunch')
  const t = getTranslation(language)

  // 翻訳データを使用してメニューデータを動的に生成
  const getMenuData = () => {
    const baseData = menuData[activeTab]
    return baseData.map(item => ({
      ...item,
      name: language === 'ja' ? item.name : item.nameEn,
      description: language === 'ja' ? item.description : item.descriptionEn
    }))
  }

  const currentMenuData = getMenuData()

  return (
    <section id="menu" className="section-spacing bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-wine font-serif mb-6">
            {t.menu.title}
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
            {t.menu.seasonal}
          </p>
        </motion.div>

        {/* タブナビゲーション */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-cream rounded-full p-2 shadow-elegant">
            <button
              onClick={() => setActiveTab('lunch')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'lunch'
                  ? 'bg-wine text-cream-light shadow-lg'
                  : 'text-wine hover:bg-wine/10'
              }`}
            >
              {t.menu.lunch}
            </button>
            <button
              onClick={() => setActiveTab('dinner')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'dinner'
                  ? 'bg-wine text-cream-light shadow-lg'
                  : 'text-wine hover:bg-wine/10'
              }`}
            >
              {t.menu.dinner}
            </button>
          </div>
        </motion.div>

        {/* メニューカード */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {currentMenuData.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-cream rounded-lg overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* 料理画像 */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-110"
                  style={{
                    backgroundImage: `url('${course.image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* 価格バッジ */}
                <div className="absolute top-4 right-4 bg-wine text-cream-light px-4 py-2 rounded-full font-bold">
                  ¥{course.price.toLocaleString()}
                </div>
              </div>

              {/* コンテンツ */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-wine font-serif mb-2">
                  {course.name}
                </h3>
                <p className="text-black/70 leading-relaxed mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-black/60">
                    {t.menu.taxIncluded} • {t.menu.serviceCharge}
                  </div>
                  <a
                    href="#contact"
                    className="bg-wine hover:bg-wine-dark text-cream-light px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center justify-center"
                  >
                    <span className="text-cream-light">{t.menu.reservation}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 注記 */}
        <motion.div
          className="text-center mt-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-black/60">
            {t.menu.allergens}
          </p>
        </motion.div>
      </div>
    </section>
  )
} 