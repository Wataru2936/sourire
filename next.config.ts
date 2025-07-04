import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 画像最適化
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1年
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // 実験的機能
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // Turbopack設定
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // バンドル分析
  webpack: (config, { dev, isServer }) => {
    // 本番環境での最適化
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
            framer: {
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: 'framer-motion',
              chunks: 'all',
              priority: 10,
            },
          },
        },
      };
    }
    
    return config;
  },
  
  // 圧縮
  compress: true,
  
  // パフォーマンス
  poweredByHeader: false,
  
  // リダイレクト
  async redirects() {
    return [];
  },
  
  // リライト
  async rewrites() {
    return [
      { source: '/sitemap.xml', destination: '/api/sitemap' }
    ];
  },
  
  // ヘッダー
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8'
          },
          {
            key: 'Cache-Control',
            value: 'no-store'
          }
        ]
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'X-Content-Type-Options', value: 'nosniff' }
        ]
      },
      {
        source: '/favicon.ico',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        source: '/favicon.png',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        source: '/icon.svg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        source: '/apple-touch-icon.png',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        source: '/manifest.json',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' }
        ]
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        source: '/_next/image/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      }
    ];
  },
};

export default nextConfig;
