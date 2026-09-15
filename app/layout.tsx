import type { Metadata, Viewport } from 'next';
import { Anton, Inter } from 'next/font/google';
import './globals.css';

const display = Anton({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://apsmedia.example';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'APS Media Tešanj — Reklamne table, LED reklame, grafički dizajn i video',
    template: '%s — APS Media Tešanj',
  },
  description:
    'APS Media iz Tešnja izrađuje reklamne table, svjetleće LED reklame, 3D slova, XPS reklamne elemente i branding poslovnih prostora, uz grafički dizajn i video produkciju za firme u BiH.',
  keywords: [
    'reklamne table Tešanj',
    'LED reklame Tešanj',
    'reklamni paneli Tešanj',
    '3D reklame Tešanj',
    'grafički dizajn Tešanj',
    'izrada reklama Tešanj',
    'video reklame Tešanj',
    'branding firmi',
    'reklamne table BiH',
  ],
  authors: [{ name: 'APS Media' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'bs_BA',
    url: '/',
    siteName: 'APS Media',
    title: 'APS Media Tešanj — Reklame, dizajn i video produkcija',
    description:
      'Od ideje do montirane reklame: table, LED natpisi, 3D slova, branding prostora, grafički dizajn i video.',
    images: [{ url: '/placeholders/og.svg', width: 1200, height: 630, alt: 'APS Media — svjetleći natpis' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APS Media Tešanj — Reklame, dizajn i video',
    description: 'Reklamne table, LED natpisi, 3D slova, branding prostora, grafički dizajn i video.',
    images: ['/placeholders/og.svg'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg', apple: '/favicon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bs" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
