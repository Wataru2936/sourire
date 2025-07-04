module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/types/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wine: '#8B0000',
        'wine-dark': '#660000',
        cream: '#FFF8E7',
        'cream-light': '#FFFEF7',
        gold: '#D4AF37',
        'gold-light': '#E6C757',
        'gold-dark': '#B8941F',
        'warm-gray': '#F5F5F0',
        'medium-gray': '#8B8680',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Noto Serif JP', 'serif'],
        'serif-jp': ['Noto Serif JP', 'serif'],
        'elegant': ['Cormorant Garamond', 'Noto Serif JP', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
      './src/types/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    options: {
      safelist: [
        /^text-/,
        /^bg-/,
        /^border-/,
        /^shadow-/,
        /^hover:/,
        /^focus:/,
        /^active:/,
        /^group-hover:/,
        /^motion-/,
        /^animate-/,
        /^transition-/,
        /^duration-/,
        /^delay-/,
        /^ease-/,
      ],
    },
  },
} 