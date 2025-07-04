import { NextResponse } from 'next/server';

export async function GET() {
  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    '  <url>\n' +
    '    <loc>https://www.sourire.win/</loc>\n' +
    `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n` +
    '  </url>\n' +
    '</urlset>';

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
} 