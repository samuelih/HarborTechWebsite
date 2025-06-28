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
  title: 'Harbor Technology Consulting | Local Tech Partner for Harbor Springs Retailers',
  description: 'Your local tech partner for Harbor Springs shops. Smart POS, online stores, secure Wi-Fi—simple solutions from neighbors who understand your business.',
  metadataBase: new URL('https://harbortechconsulting.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harbortechconsulting.com',
    title: 'Harbor Technology Consulting | Local Tech Partner for Harbor Springs',
    description: 'Your local tech partner for Harbor Springs shops. Smart POS, online stores, secure Wi-Fi—simple solutions from neighbors who understand your business.',
    siteName: 'Harbor Technology Consulting',
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
    title: 'Harbor Technology Consulting | Local Tech Partner for Harbor Springs',
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
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${cinzel.variable} ${cinzelDecorative.variable}`} style={{ fontSize: '18px' }}>
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