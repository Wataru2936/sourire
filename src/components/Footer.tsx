'use client'

import { motion } from 'framer-motion'
import { SectionProps } from '@/types'
import { getTranslation } from '@/lib/i18n'
import { Phone, MapPin, Clock, Instagram } from 'lucide-react'

export default function Footer({ language }: SectionProps) {
  const t = getTranslation(language)

  const contactLinks = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: t.common.phone,
      value: t.common.phoneNumber,
      href: `tel:${t.common.phoneNumber}`
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      value: '@restaurant_sourire',
      href: 'https://www.instagram.com/restaurant_sourire/'
    }
  ]

  const quickLinks = [
    { href: '#hero', label: t.common.home || 'Home' },
    { href: '#about', label: t.common.about },
    { href: '#menu', label: t.common.menu },
    { href: '#info', label: t.common.info },
    { href: '#news', label: t.common.news },
    { href: '#instagram', label: t.common.instagram },
    { href: '#contact', label: t.common.contact },
  ]

  return (
    <footer id="contact" className="bg-gradient-to-b from-wine to-wine-dark text-cream-light">
      {/* メインフッターコンテンツ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* ブランド情報 */}
          <motion.div
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <h3 className="text-3xl lg:text-4xl font-bold font-serif mb-2">
                Restaurant Sourire
              </h3>
              <p className="text-xl font-elegant text-gold-light tracking-wide mb-4">
                レストラン スーリール
              </p>
              <div className="flex items-center gap-2 mb-6">
                <img src="/images/ミシュラン星のみ.png" alt="ミシュラン星のみ" className="w-8 h-8 object-contain rounded-full shadow-lg bg-white" />
                <span className="text-lg font-medium">{t.about.michelin}</span>
              </div>
            </div>

            <p className="text-cream-light/80 leading-relaxed mb-8 max-w-md">
              {t.footer.description}
            </p>

            {/* 予約CTAボタン */}
            <motion.a
              href={`tel:${t.common.phoneNumber}`}
              className="inline-flex items-center gap-3 bg-wine hover:bg-wine-dark text-cream-light px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6 text-cream-light" />
              {t.common.reservation}
            </motion.a>
          </motion.div>

          {/* クイックリンク */}
          <motion.div>
            <h4 className="text-xl font-bold font-serif mb-6 text-gold-light">Menu</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block text-cream-light/80 hover:text-cream-light transition-colors duration-300 hover:translate-x-2"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* 連絡先情報 */}
          <motion.div>
            <h4 className="text-xl font-bold font-serif mb-6 text-gold-light">{t.common.contact}</h4>
            
            {/* 基本情報 */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-light mt-1 flex-shrink-0" />
                <a href="#info" className="text-cream-light/80 text-sm leading-relaxed underline hover:text-gold-light transition-colors duration-200 cursor-pointer">
                  {t.footer.address}<br/>
                  {language !== 'ja' && '1-2-3 Keyaki-dori, Chuo-ku, Fukuoka City'}
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-light mt-1 flex-shrink-0" />
                <div className="text-cream-light/80 text-sm">
                  <div>{t.footer.lunchHours}</div>
                  <div>{t.footer.dinnerHours}</div>
                  <div className="text-gold-light mt-1">{t.footer.wednesdayClosed}</div>
                </div>
              </div>
            </div>

            {/* 連絡先リンク */}
            <div className="space-y-3">
              {contactLinks.map((contact, index) => (
                <motion.a
                  key={contact.href}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-cream-light/80 hover:text-cream-light transition-all duration-300 hover:translate-x-2"
                >
                  <span className="text-gold-light">{contact.icon}</span>
                  <span className="text-sm">{contact.value}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ボトムバー */}
      <motion.div
        className="border-t border-cream-light/20 bg-wine-dark"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-cream-light/60 text-sm text-center">
            {t.footer.copyright}
          </div>
        </div>
      </motion.div>
    </footer>
  )
} 