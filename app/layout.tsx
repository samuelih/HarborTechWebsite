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
  title: 'Harbor Technology Consulting | Fixed-cost IT for Harbor Springs Retailers',
  description: 'Fixed-cost technology upgrades and IT services for Harbor Springs retailers. STEADY. SECURE. SEAWORTHY.',
  keywords: 'technology consulting, IT services, retail technology, Harbor Springs, POS systems, cloud migration, staff upskilling',
  icons: {
    icon: '/images/logos/blackandwhite.jpg',
  },
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${jetbrainsMono.variable}`}>
      <body className="overflow-x-hidden max-w-[100vw]">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-700 focus:text-white focus:rounded-md">Skip to content</a>
        <Header />
        <main id="main" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
} 