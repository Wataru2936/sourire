'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Language, LanguageSwitcherProps } from '@/types'
import { LANGUAGE_LABELS, LANGUAGE_FLAGS } from '@/lib/i18n'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const languages: Language[] = ['ja', 'en', 'zh', 'ko', 'fr']

  return (
    <div className="relative z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-wine/90 backdrop-blur-elegant text-cream-light p-3 rounded-full shadow-elegant hover:bg-wine transition-all duration-300 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="言語を選択"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:block">
          {LANGUAGE_FLAGS[currentLanguage]}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 right-auto sm:right-0 bg-cream/95 backdrop-blur-elegant rounded-lg shadow-elegant border border-wine/20 overflow-hidden min-w-[160px]"
          >
            {languages.map((language) => (
              <motion.button
                key={language}
                onClick={() => {
                  onLanguageChange(language)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-3 text-left transition-all duration-200 flex items-center gap-3 ${
                  currentLanguage === language
                    ? 'bg-wine text-cream-light'
                    : 'text-black hover:bg-wine/10'
                }`}
                whileHover={{ backgroundColor: currentLanguage === language ? undefined : 'rgba(139, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg">{LANGUAGE_FLAGS[language]}</span>
                <span className="font-medium">{LANGUAGE_LABELS[language]}</span>
                {currentLanguage === language && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="ml-auto"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 