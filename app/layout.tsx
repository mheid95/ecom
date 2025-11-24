import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import Providers from '@/components/Providers'
import WhatsAppButton from '@/components/WhatsAppButton'
import CallbackWidget from '@/components/CallbackWidget'
import QuickContactBar from '@/components/QuickContactBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professionelle Kaffeemaschinen B2B | Premium Espressomaschinen für Ihr Unternehmen',
  description: 'Führender Anbieter professioneller Kaffeemaschinen für Hotels, Restaurants, Büros und Gastronomie. Hochwertige Espressomaschinen, Siebträger und Vollautomaten im B2B-Bereich.',
  keywords: 'Kaffeemaschinen B2B, professionelle Espressomaschinen, Siebträgermaschinen Gastronomie, Kaffeevollautomaten Hotel, gewerbliche Kaffeemaschinen',
  openGraph: {
    title: 'Professionelle Kaffeemaschinen B2B',
    description: 'Premium Kaffeemaschinen für professionelle Anwendungen',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Providers>
          <CartProvider>
            <Header />
            <QuickContactBar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <CallbackWidget />
          </CartProvider>
        </Providers>
      </body>
    </html>
  )
}
