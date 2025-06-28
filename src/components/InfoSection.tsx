'use client'

import { motion } from 'framer-motion'
import { SectionProps } from '@/types'
import { getTranslation } from '@/lib/i18n'
import { Phone, Mail, MapPin, CreditCard, Ban, Users } from 'lucide-react'

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
      value: '092-753-6324',
      href: 'tel:092-753-6324'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: t.common.email,
      value: 'info@sourire-fukuoka.com',
      href: 'mailto:info@sourire-fukuoka.com'
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
          <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
            {t.info.access}
          </p>
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
              <h3 className="text-2xl font-bold text-wine font-serif mb-6">基本情報</h3>
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
                          {item.value}
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
              <h4 className="text-xl font-bold text-wine font-serif mb-4">営業時間</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">昼の営業</span>
                  <span className="text-black/70">12:00-14:30オーダーストップ（金・土・日・祝祭日のみ）</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">夜の営業</span>
                  <span className="text-black/70">18:00-20:30オーダーストップ（月・火・木・金・土・日）</span>
                </div>
                <div className="pt-2 border-t border-wine/20">
                  <span className="font-medium text-wine">基本的に水曜定休日</span>
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
              <h4 className="text-xl font-bold text-wine font-serif mb-4">特徴</h4>
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
                <h4 className="text-lg font-bold">アクセスマップ</h4>
              </div>
              <div className="relative h-80 bg-warm-gray flex items-center justify-center">
                {/* 実際のGoogleマップはここに埋め込み */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.695021296157!2d130.3929563152107!3d33.58397084183827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35419135577ad10f%3A0x2a84c6b84e3fdfc4!2zUmVzdGF1cmFudCBTb3VyaXJl!5e0!3m2!1sja!2sjp!4v1719550000000!5m2!1sja!2sjp&markers=color:red%7Clabel:S%7C33.58397084183827,130.3929563152107"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                <div className="bg-wine/90 text-cream-light p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-bold">Google Map</div>
                    <div className="text-sm opacity-90">地図を表示</div>
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
              <h4 className="text-xl font-bold text-wine font-serif mb-4">アクセス</h4>
              <div className="space-y-2 text-black/80 text-sm">
                <div>最寄り駅：西鉄バス 赤坂３丁目</div>
                <div>
                  道順：<br />
                  ・西鉄バス赤坂3丁目バス停至近<br />
                  ・博多バスターミナル(4乗場)<br />
                  ・駅前A発(国体道路経由113.203.201.114.12.1136.201)約20分<br />
                  ・福岡市営地下鉄赤坂駅から徒歩15分
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
              <h4 className="text-xl font-bold text-wine font-serif mb-4">その他</h4>
              <div className="space-y-2 text-black/80 text-sm">
                <div>全15席の小さなレストランです。カウンター席も5席ございます。お一人様歓迎いたします。</div>
                <div className="font-bold mt-2">＜御利用いただく時の注意事項として＞</div>
                <ul className="list-disc pl-6">
                  <li>食材ロス、より良い料理をご提供させていただく為、御予約は前日までにお願い致します</li>
                  <li>御予約の人数変更やキャンセルはできる限り早いご連絡をお願い致します</li>
                  <li>御予約当日のキャンセルにつきましては、御予約いただいた料理等の金額をキャンセル料としてお支払いいただくこともございますので、御留意いただきますようお願い致します</li>
                </ul>
                <div>どうぞよろしくお願い致します</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 