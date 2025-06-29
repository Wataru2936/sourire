'use client'

import { motion } from 'framer-motion'
import { SectionProps } from '@/types'
import { getTranslation } from '@/lib/i18n'
import { Calendar, Bell, Sparkles, Clock } from 'lucide-react'

// 仮のニュースデータ（後でAPIから取得）
const newsData = [
  {
    id: 'news-1',
    title: {
      ja: '年末年始の営業についてのお知らせ',
      en: 'Notice: Year-end and New Year Business Hours',
      zh: '年末年始营业时间通知',
      ko: '연말연시 영업시간 안내'
    },
    content: {
      ja: '12月29日から1月3日まで休業いたします。1月4日より通常営業となります。',
      en: 'We will be closed from December 29th to January 3rd. Regular business hours resume from January 4th.',
      zh: '12月29日至1月3日休业。1月4日起恢复正常营业。',
      ko: '12월 29일부터 1월 3일까지 휴업합니다. 1월 4일부터 정상 영업합니다.'
    },
    date: '2025-12-15',
    type: 'holiday' as const,
    isPublished: true
  },
  {
    id: 'news-2',
    title: {
      ja: '冬の特別コースメニューのご案内',
      en: 'Winter Special Course Menu',
      zh: '冬季特别套餐菜单',
      ko: '겨울 특별 코스 메뉴 안내'
    },
    content: {
      ja: '12月限定の特別コースメニューをご用意いたしました。寒ブリや真鯛など、冬の旬食材をふんだんに使用した特別な一品をお楽しみください。',
      en: 'We have prepared a special course menu for December only. Enjoy special dishes featuring winter seasonal ingredients such as winter yellowtail and red sea bream.',
      zh: '我们为12月准备了特别的套餐菜单。请享用使用寒鰤鱼、真鲷等冬季时令食材制作的特色料理。',
      ko: '12월 한정 특별 코스 메뉴를 준비했습니다. 방어, 도미 등 겨울 제철 식재료를 사용한 특별한 요리를 즐겨보세요.'
    },
    date: '2025-12-01',
    type: 'menuUpdate' as const,
    isPublished: true
  },
  {
    id: 'news-3',
    title: {
      ja: 'クリスマス限定ディナーコースのご予約受付開始',
      en: 'Christmas Special Dinner Course Reservations Now Open',
      zh: '圣诞节限定晚餐套餐开始接受预约',
      ko: '크리스마스 한정 디너 코스 예약 접수 시작'
    },
    content: {
      ja: 'クリスマス期間限定の特別ディナーコースをご用意いたします。ご予約はお電話またはメールにて承っております。',
      en: 'We offer a special Christmas dinner course for a limited time. Reservations can be made by phone or email.',
      zh: '我们准备了圣诞节期间限定的特别晚餐套餐。请通过电话或邮件进行预约。',
      ko: '크리스마스 기간 한정 특별 디너 코스를 준비했습니다. 전화 또는 이메일로 예약 가능합니다.'
    },
    date: '2025-11-15',
    type: 'event' as const,
    isPublished: true
  }
]

export default function NewsSection({ language }: SectionProps) {
  const t = getTranslation(language)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'holiday':
        return <Calendar className="w-5 h-5" />
      case 'event':
        return <Sparkles className="w-5 h-5" />
      case 'menuUpdate':
        return <Bell className="w-5 h-5" />
      default:
        return <Bell className="w-5 h-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'holiday':
        return 'bg-wine/10 text-wine border-wine/20'
      case 'event':
        return 'bg-gold/10 text-gold-dark border-gold/20'
      case 'menuUpdate':
        return 'bg-wine/10 text-wine border-wine/20'
      default:
        return 'bg-wine/10 text-wine border-wine/20'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === 'ja' ? 'ja-JP' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="news" className="section-spacing bg-gradient-to-b from-cream-light to-warm-gray">
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
            {t.news.title}
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
            {t.news.latestInfo}
          </p>
        </motion.div>

        {/* ニュース一覧 */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <motion.article
              key={news.id}
              className="bg-cream rounded-lg overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* ニュースヘッダー */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full border text-sm font-medium flex items-center gap-2 ${getTypeColor(news.type)}`}>
                    {getTypeIcon(news.type)}
                    {t.news.types[news.type]}
                  </div>
                  <div className="flex items-center gap-2 text-black/60 text-sm">
                    <Clock className="w-4 h-4" />
                    {formatDate(news.date)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-wine font-serif mb-3 leading-tight group-hover:text-wine-dark transition-colors duration-300">
                  {['ja','en','zh','ko'].includes(language) ? news.title[language as 'ja'|'en'|'zh'|'ko'] : news.title.ja}
                </h3>
              </div>

              {/* ニュース内容 */}
              <div className="px-6 pb-6">
                <p className="text-black/80 leading-relaxed line-clamp-3">
                  {['ja','en','zh','ko'].includes(language) ? news.content[language as 'ja'|'en'|'zh'|'ko'] : news.content.ja}
                </p>
                
                <motion.button
                  className="mt-4 text-wine hover:text-wine-dark font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {t.news.readMore}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              {/* ホバー効果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-wine/0 to-wine/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* すべてのニュースを見るボタン */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-wine hover:bg-wine-dark text-cream-light px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-elegant hover:shadow-xl flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="w-6 h-6" />
            {t.news.viewAllNews}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 