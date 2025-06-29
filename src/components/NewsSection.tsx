'use client'

import { motion } from 'framer-motion'
import { SectionProps } from '@/types'
import { getTranslation } from '@/lib/i18n'
import { Calendar, Bell, Sparkles, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'
import Papa from 'papaparse'

const SHEET_ID = '1ur63dFrriVpn71okabD3H3jOSKOV5DMHCse_NgR0v4E';
const SHEET_RANGE = 'A2:F'; // 2行目以降、date, ja, en, zh, ko, fr
const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_RANGE}?alt=json&key=`; // APIキー不要の公開シートはfetchでcsv/json取得

function getSheetCSVUrl() {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Sheet1`;
}

export default function NewsSection({ language }: SectionProps) {
  const t = getTranslation(language)
  const [news, setNews] = useState<{date: string, ja: string, en: string, zh: string, ko: string, fr: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(getSheetCSVUrl());
        if (!res.ok) throw new Error('ニュース取得に失敗しました');
        const text = await res.text();
        const parsed = Papa.parse(text.trim(), { skipEmptyLines: true });
        const rows = parsed.data as string[][];
        // 1行目（ヘッダー）をスキップし、2行目以降のみ取得
        const newsArr = rows.slice(1).map(cols => ({
          date: (cols[0] || '').trim(),
          ja: (cols[1] || '').trim(),
          en: (cols[2] || '').trim(),
          zh: (cols[3] || '').trim(),
          ko: (cols[4] || '').trim(),
          fr: (cols[5] || '').trim(),
        })).filter(n => n.date && n[language]);
        setNews(newsArr);
      } catch (e: any) {
        setError(e.message || 'エラーが発生しました');
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [language]);

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
    <section id="news" className="section-spacing bg-cream-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-wine font-serif mb-10 text-center">NEWS</h2>
        {loading && <div className="text-center text-black/60">読み込み中...</div>}
        {error && <div className="text-center text-red-500">{error}</div>}
        <div className="space-y-8">
          {news.map((item, idx) => (
            <div key={item.date + idx} className="bg-cream rounded-lg p-6 shadow-elegant">
              <div className="text-sm text-black/60 mb-2">{item.date}</div>
              <div className="text-lg text-black font-bold mb-1 whitespace-pre-line">
                {(item[language] || item.ja)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 