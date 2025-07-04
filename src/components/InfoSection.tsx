'use client'

import { motion } from 'framer-motion'
import { SectionProps } from '@/types'
import { getTranslation } from '@/lib/i18n'
import { Phone, MapPin, CreditCard, Ban, Users, Instagram } from 'lucide-react'

export default function InfoSection({ language }: SectionProps) {
  const t = getTranslation(language)

  const infoItems = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t.info.location,
      value: t.info.addressDetail,
      valueEn: t.info.addressDetail
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: t.common.phone,
      value: t.common.phoneNumber,
      href: `tel:${t.common.phoneNumber}`
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      value: '@restaurant_sourire',
      href: 'https://www.instagram.com/restaurant_sourire/'
    }
  ]

  const features = [
    {
      icon: <img src="/images/ミシュラン星のみ.png" alt="ミシュラン星のみ" className="w-6 h-6 object-contain inline-block rounded-full shadow bg-white" />,
      label: t.info.features.michelin
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      label: t.info.features.creditCard
    },
    {
      icon: <Ban className="w-6 h-6" />,
      label: t.info.features.noSmoking
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: t.info.features.noChildren
    }
  ]

  return (
    <section id="info" className="section-spacing bg-gradient-to-b from-cream to-cream-light">
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
            {t.info.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* 左側：店舗情報 */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* 基本情報 */}
            <div className="bg-cream rounded-lg p-6 shadow-elegant">
              <h3 className="text-2xl font-bold text-wine font-serif mb-6">{t.info.basicInfo}</h3>
              <div className="space-y-4">
                {infoItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-wine/5 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-wine mt-1">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-black mb-1">{item.label}</div>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-wine hover:underline transition-colors duration-300"
                        >
                          お電話でのご予約・お問い合わせ: {item.value}
                        </a>
                      ) : (
                        <div className="text-black/70">
                          {language === 'ja' ? item.value : (item.valueEn || item.value)}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 営業時間詳細 */}
            <motion.div
              className="bg-wine/5 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-wine font-serif mb-4">{t.info.operatingHours}</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div>
                    <span className="font-medium inline-block min-w-[4.5em]">{t.info.lunchOperating}</span>
                    <span className="text-black/70">{t.info.lunchHours}</span>
                    <span className="text-black/60 text-xs ml-2">{t.info.lunchNote}</span>
                  </div>
                  <div>
                    <span className="font-medium inline-block min-w-[4.5em]">{t.info.dinnerOperating}</span>
                    <span className="text-black/70">{t.info.dinnerHours}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-wine/20">
                  <span className="font-medium text-wine">{t.info.wednesdayClosed}</span>
                </div>
              </div>
            </motion.div>

            {/* 特徴・サービス */}
            <motion.div
              className="bg-cream rounded-lg p-6 shadow-elegant"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-wine font-serif mb-4">{t.info.characteristics}</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-wine">
                      {feature.icon}
                    </div>
                    <span className="text-black/80 text-sm">{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 右側：地図 */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Googleマップ */}
            <div className="bg-cream rounded-lg overflow-hidden shadow-elegant">
              <div className="p-4 bg-wine text-cream-light">
                <h4 className="text-lg font-bold">{t.info.accessMap}</h4>
              </div>
              <div className="relative h-80 bg-warm-gray flex items-center justify-center">
                {/* 実際のGoogleマップはここに埋め込み */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.843694354878!2d130.38178527623472!3d33.58340737333715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354193d36a136b9b%3A0x89b876030cd0ac2!2zUmVzdGF1cmFudCBTb3VyaXJlICjjg6zjgrnjg4jjg6njg7Mg44K544O844Oq44O844OrKQ!5e0!3m2!1sja!2sjp!4v1751157001707!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Google Mapで店舗位置を表示"
                />
                <div className="bg-wine/90 text-cream-light p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-bold">Google Map</div>
                    <div className="text-sm opacity-90">{t.info.showMap}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* アクセス詳細 */}
            <motion.div
              className="bg-cream rounded-lg p-6 shadow-elegant"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-wine font-serif mb-4">{t.info.access}</h4>
              <div className="space-y-2 text-black/80 text-sm">
                <div>{t.info.nearestStation}</div>
                <div>
                  {t.info.directions}：<br />
                  {t.info.accessDetail.split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* その他・注意事項 */}
            <motion.div
              className="bg-wine/10 rounded-lg p-6 shadow-elegant"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-wine font-serif mb-4">{t.info.other}</h4>
              <div className="space-y-2 text-black/80 text-sm">
                <div>
                  {t.info.restaurantInfo.split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </div>
                <div className="font-bold mt-2">{t.info.notes}</div>
                <ul className="list-disc pl-6">
                  <li>{t.info.reservationNotes}</li>
                  <li>{t.info.reservationChange}</li>
                  <li>{t.info.cancellationPolicy}</li>
                </ul>
                <div>{t.info.thankYou}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 