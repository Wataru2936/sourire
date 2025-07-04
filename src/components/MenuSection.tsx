'use client'

import { useState } from 'react'
import { SectionProps } from '@/types'
import { getTranslation } from '@/lib/i18n'

// メニューデータ
const menuData = {
  lunch: [
    {
      id: 'lunch-1',
      name: {
        ja: 'シェフおまかせランチコース',
        en: 'Lunch Course',
        zh: '主厨推荐午餐套餐',
        ko: '셰프 추천 런치 코스',
        fr: 'Déjeuner du Chef'
      },
      price: 6600,
      description: {
        ja: 'シェフが旬の食材を活かして仕上げる、おまかせスタイルのランチコースです。',
        en: 'A seasonal lunch course crafted by the chef using carefully selected ingredients of the day.',
        zh: '主厨运用当季精选食材精心打造的午间套餐。',
        ko: '셰프가 제철 재료로 구성한 정갈한 런치 오마카세 코스입니다.',
        fr: 'Un menu déjeuner élaboré par le chef à partir des meilleurs produits de saison.'
      },
      image: '/images/lunch1.jpeg'
    },
    {
      id: 'lunch-2',
      name: {
        ja: '九州黒毛和牛ランチコース',
        en: 'Premium Lunch Course',
        zh: '九州和牛午餐套餐',
        ko: '규슈 흑모와규 런치 코스',
        fr: 'Déjeuner Wagyu de Kyushu'
      },
      price: 8800,
      description: {
        ja: '九州の黒毛和牛と旬の食材を贅沢に使用したプレミアムランチコースです。',
        en: 'A premium lunch course featuring Kyushu black wagyu and seasonal delicacies.',
        zh: '以九州黑毛和牛和当季食材精心呈现的尊享午餐套餐。',
        ko: '규슈 흑모와규와 제철 식재료를 고급스럽게 구성한 프리미엄 런치 코스입니다.',
        fr: 'Un déjeuner raffiné mettant à l’honneur le bœuf Wagyu de Kyushu et des produits de saison.'
      },
      image: '/images/lunch2.jpeg'
    }
  ],
  dinner: [
    {
      id: 'dinner-1',
      name: {
        ja: 'シェフおまかせコース',
        en: 'Dinner Course',
        zh: '主厨推荐晚餐套餐',
        ko: '셰프 추천 디너 코스',
        fr: 'Dîner du Chef'
      },
      price: 13200,
      description: {
        ja: '旬の食材をふんだんに使った、フルコースのおまかせディナーです。',
        en: 'A full-course dinner created by the chef, featuring the finest seasonal ingredients.',
        zh: '主厨全程安排的晚宴套餐，融合丰富时令食材。',
        ko: '셰프가 엄선한 제철 식재료로 구성된 풀코스 디너 오마카세입니다.',
        fr: 'Un dîner gastronomique complet préparé par le chef à partir d’ingrédients de saison soigneusement sélectionnés.'
      },
      image: '/images/dinner1.jpeg'
    },
    {
      id: 'dinner-2',
      name: {
        ja: '九州黒毛和牛ディナーコース',
        en: "Kyushu Wagyu Dinner Course",
        zh: '九州和牛晚餐套餐',
        ko: '규슈 흑모와규 디너 코스',
        fr: 'Dégustation Wagyu de Kyushu'
      },
      price: 15400,
      description: {
        ja: '九州産黒毛和牛を主役に、旬の食材とともに構成されたシェフ渾身のスペシャルコースです。',
        en: 'A special chef-curated course centered on Kyushu black wagyu and seasonal ingredients.',
        zh: '以九州黑毛和牛为主角，搭配时令食材打造的主厨特别晚餐。',
        ko: '규슈 흑모와규를 중심으로 셰프가 정성껏 구성한 스페셜 디너 코스입니다.',
        fr: 'Un menu spécial du chef mettant à l’honneur le bœuf Wagyu de Kyushu et des produits de saison.'
      },
      image: '/images/dinner2.jpeg'
    },
    {
      id: 'dinner-3',
      name: {
        ja: '特別コース',
        en: 'Special Custom Course',
        zh: '特别定制套餐',
        ko: '스페셜 맞춤 코스',
        fr: 'Menu Spécial Personnalisé'
      },
      price: 16000,
      description: {
        ja: 'お好みやご要望に応じて、料理内容や食材を自由にご相談いただけるフルカスタムコースです。料金はご希望内容により変動いたします（時価）。',
        en: 'A fully customized dinner course tailored to your preferences and ingredients. Pricing may vary depending on your request.',
        zh: '可根据您的喜好和需求自由定制的专属晚宴套餐。价格将根据内容有所浮动（时价）。',
        ko: '고객님의 취향과 요청에 맞춰 요리와 식재료를 자유롭게 구성할 수 있는 맞춤형 디너 코스입니다. 가격은 구성에 따라 변동됩니다.',
        fr: 'Un menu du soir entièrement personnalisable selon vos envies et ingrédients. Le tarif varie en fonction de votre sélection (prix du marché).'
      },
      image: '/images/dinner3.jpeg'
    }
  ]
};


export default function MenuSection({ language }: SectionProps) {
  const [activeTab, setActiveTab] = useState<'lunch' | 'dinner'>('dinner')
  const t = getTranslation(language)

  // 翻訳データを使用してメニューデータを動的に生成
  const getMenuData = () => {
    const baseData = menuData[activeTab]
    return baseData.map(item => ({
      ...item,
      name: item.name[language] ?? item.name.ja,
      description: item.description[language] ?? item.description.ja
    }))
  }

  const currentMenuData = getMenuData()

  return (
    <section id="menu" className="section-spacing bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-wine font-serif mb-6">
            {t.menu.title}
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
            {t.menu.seasonal}
          </p>
        </div>

        {/* タブナビゲーション */}
        <div className="flex justify-center mb-12">
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
        </div>

        {/* メニューカード */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {currentMenuData.map((course) => (
            <div
              key={course.id}
              className="bg-cream rounded-lg overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-500"
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
            </div>
          ))}
        </div>

        {/* 注記 */}
        <div className="text-center mt-12">
          <p className="text-black/60">
            {t.menu.allergens}
          </p>
        </div>
      </div>
    </section>
  )
} 