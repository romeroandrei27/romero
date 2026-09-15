import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Romero Perfumes | Perfumes originales con envío a todo México',
  description:
    'Romero es tu tienda en línea de perfumes originales de las mejores marcas nacionales e internacionales. Envíos seguros a toda la República Mexicana.',
  generator: 'v0.app',
  keywords: [
    'perfumes',
    'perfumes originales',
    'perfumería México',
    'fragancias',
    'perfumes árabes',
    'Romero Perfumes',
  ],
  openGraph: {
    title: 'Romero Perfumes',
    description:
      'Perfumes originales de las mejores marcas, entregados en tu puerta en todo México.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
