import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Cinzel, Cinzel_Decorative } from 'next/font/google'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Define and load fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
})

const cinzelDecorative = Cinzel_Decorative({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel-decorative',
})

export const metadata = {
  title: 'Harbor Tech | Local IT Partner for Harbor Springs',
  description: 'Your local tech partner for Harbor Springs shops. Smart POS, online stores, secure Wi-Fi—simple solutions from neighbors who understand your business.',
  metadataBase: new URL('https://harbortech.org'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harbortech.org',
    title: 'Harbor Tech | Local IT Partner for Harbor Springs',
    description: 'Your local tech partner for Harbor Springs shops. Smart POS, online stores, secure Wi-Fi—simple solutions from neighbors who understand your business.',
    siteName: 'Harbor Tech',
    images: [
      {
        url: '/images/harbor-tech-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Harbor Technology Consulting'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harbor Tech | Local IT Partner for Harbor Springs',
    description: 'Your local tech partner for Harbor Springs shops. Smart POS, online stores, secure Wi-Fi—simple solutions from neighbors who understand your business.',
    images: ['/images/harbor-tech-og.jpg']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${cinzel.variable} ${cinzelDecorative.variable}`}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Harbor Tech",
              "description": "Your local tech partner for Harbor Springs shops. Smart POS, online stores, secure Wi-Fi—simple solutions from neighbors who understand your business.",
              "url": "https://harbortech.org",
              "telephone": "+1-231-XXX-XXXX",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Harbor Springs",
                "addressRegion": "MI",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 45.4308,
                "longitude": -84.9958
              },
              "openingHours": "Mo-Fr 09:00-17:00",
              "sameAs": [
                "https://harbortech.org"
              ]
            })
          }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PLACEHOLDER');
            `,
          }}
        />
      </head>
      <body className="overflow-x-hidden max-w-full bg-neutral-mist">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-blue focus:text-white focus:rounded-md">Skip to content</a>
        <Header />
        <main id="main" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
} 