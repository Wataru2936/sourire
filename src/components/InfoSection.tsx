'use client'

import { SectionProps } from '@/types'
import { getTranslation } from '@/lib/i18n'
import { Phone, MapPin, CreditCard, Ban, Users, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function InfoSection({ language }: SectionProps) {
  const t = getTranslation(language)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapVisible, setMapVisible] = useState(false)

  // 地図の遅延読み込み
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const mapElement = document.getElementById('google-map-container')
    if (mapElement) {
      observer.observe(mapElement)
    }

    return () => observer.disconnect()
  }, [])

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
      icon: <Image src="/images/ミシュラン星のみ.png" alt="ミシュラン星のみ" width={24} height={24} className="w-6 h-6 object-contain inline-block rounded-full shadow bg-white" />,
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
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-wine font-serif mb-6">
            {t.info.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* 左側：店舗情報 */}
          <div className="space-y-8">
            {/* 基本情報 */}
            <div className="bg-cream rounded-lg p-6 shadow-elegant">
              <h3 className="text-2xl font-bold text-wine font-serif mb-6">{t.info.basicInfo}</h3>
              <div className="space-y-4">
                {infoItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-wine/5 transition-colors duration-300"
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
                          aria-label={`${item.label}: ${item.value}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-black/70">
                          {language === 'ja' ? item.value : (item.valueEn || item.value)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 営業時間詳細 */}
            <div className="bg-wine/5 rounded-lg p-6">
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
            </div>

            {/* 特徴・サービス */}
            <div className="bg-cream rounded-lg p-6 shadow-elegant">
              <h4 className="text-xl font-bold text-wine font-serif mb-4">{t.info.characteristics}</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg"
                  >
                    <div className="text-wine">
                      {feature.icon}
                    </div>
                    <span className="text-black/80 text-sm">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右側：地図 */}
          <div className="space-y-6">
            {/* Googleマップ - 遅延読み込み最適化 */}
            <div className="bg-cream rounded-lg overflow-hidden shadow-elegant">
              <div className="p-4 bg-wine text-cream-light">
                <h4 className="text-lg font-bold">{t.info.accessMap}</h4>
              </div>
              <div 
                id="google-map-container"
                className="relative h-80 bg-warm-gray flex items-center justify-center"
              >
                {/* 遅延読み込みされたGoogleマップ */}
                {mapVisible && (
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
                    onLoad={() => setMapLoaded(true)}
                  />
                )}
                
                {/* ローディング状態 */}
                {!mapLoaded && (
                  <div className="bg-wine/90 text-cream-light p-4 rounded-lg shadow-lg">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-bold">Google Map</div>
                      <div className="text-sm opacity-90">{t.info.showMap}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* アクセス詳細 */}
            <div className="bg-cream rounded-lg p-6 shadow-elegant">
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
            </div>

            {/* その他・注意事項 */}
            <div className="bg-wine/10 rounded-lg p-6 shadow-elegant">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 