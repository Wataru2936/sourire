'use client'

import { motion } from 'framer-motion'
import { SectionProps } from '@/types'
import { getTranslation } from '@/lib/i18n'

export default function AboutSection({ language }: SectionProps) {
  const t = getTranslation(language)

  return (
    <section id="about" className="section-spacing bg-gradient-to-b from-cream-light to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左側：シェフの写真 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <div 
                className="aspect-[4/5] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/images/シェフの写真.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/20 to-transparent" />
            </div>

            {/* ミシュラン星の装飾 */}
            <motion.div
              className="absolute -top-4 -right-4 bg-wine text-cream-light p-4 rounded-full shadow-elegant"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-2xl"
              >
                <img src="/images/ミシュラン星のみ.png" alt="ミシュラン星のみ" className="w-8 h-8 object-contain inline-block rounded-full shadow bg-white" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 右側：テキストコンテンツ */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* セクションタイトル */}
            <div>
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-wine font-serif mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t.about.title}
              </motion.h2>
              
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <img src="/images/ミシュラン星のみ.png" alt="ミシュラン星のみ" className="w-8 h-8 object-contain inline-block rounded-full shadow bg-white" />
                <span className="text-xl font-bold text-gold-dark">{t.about.michelin}</span>
              </motion.div>
            </div>

            {/* レストランの哲学 */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-2xl sm:text-3xl font-serif text-wine italic leading-relaxed border-l-4 border-gold pl-6">
                &quot;{t.about.philosophy}&quot;
              </blockquote>
              <p className="text-lg text-black/80 leading-relaxed">
                {t.about.experience}
              </p>
            </motion.div>

            {/* シェフ紹介 */}
            <motion.div
              className="bg-cream/50 p-6 rounded-lg border border-wine/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-wine font-serif">
                    {t.about.chefTitle} {t.about.chefName}
                  </h3>
                  <p className="text-gold-dark font-medium">Executive Chef</p>
                </div>
              </div>
              <p className="text-black/80 leading-relaxed">
                {t.about.chefBio}
              </p>
            </motion.div>

            {/* 特徴・実績 */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-4 bg-wine/5 rounded-lg">
                <div className="text-2xl font-bold text-wine font-serif">2019</div>
                <div className="text-sm text-black/70">{t.about.achievements.michelinStar}</div>
              </div>
              <div className="text-center p-4 bg-wine/5 rounded-lg">
                <div className="text-2xl font-bold text-wine font-serif">30+</div>
                <div className="text-sm text-black/70">{t.about.achievements.frenchExperience}</div>
              </div>
              <div className="text-center p-4 bg-wine/5 rounded-lg">
                <div className="text-2xl font-bold text-wine font-serif">Local</div>
                <div className="text-sm text-black/70">{t.about.achievements.localIngredients}</div>
              </div>
              <div className="text-center p-4 bg-wine/5 rounded-lg">
                <div className="text-2xl font-bold text-wine font-serif">France</div>
                <div className="text-sm text-black/70">{t.about.achievements.franceTraining}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 