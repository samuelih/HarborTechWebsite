import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat, JetBrains_Mono } from 'next/font/google'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Define and load fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Harbor Technology Consulting | Fixed-Cost Tech Upgrades for Harbor Springs Retailers',
  description: 'One-time tech upgrades for Harbor Springs shops. Smart POS, online stores, secure Wi-Fi—no monthly fees. Get your fixed-cost quote today.',
  keywords: 'technology consulting, IT services, retail technology, Harbor Springs, POS systems, cloud migration, staff upskilling',
  icons: {
    icon: '/images/logos/blackandwhite.jpg',
  },
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes',
  openGraph: {
    title: 'Harbor Technology Consulting | Fixed-Cost Retail Tech',
    description: 'One-time tech upgrades for Harbor Springs retailers. No monthly fees, just results.',
    url: 'https://harbor-tech-website.vercel.app',
    siteName: 'Harbor Technology Consulting',
    images: [
      {
        url: 'https://harbor-tech-website.vercel.app/images/harbor-tech-og.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harbor Technology Consulting | Fixed-Cost Retail Tech',
    description: 'One-time tech upgrades for Harbor Springs retailers. No monthly fees, just results.',
    images: ['https://harbor-tech-website.vercel.app/images/harbor-tech-og.jpg'],
  },
  alternates: {
    canonical: 'https://harbor-tech-website.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${jetbrainsMono.variable}`}>
      <head>
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
        {/* Preload critical font */}
        <link
          rel="preload"
          href="/fonts/montserrat-v25-latin-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="overflow-x-hidden max-w-[100vw]">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-700 focus:text-white focus:rounded-md">Skip to content</a>
        <Header />
        <main id="main" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
} 