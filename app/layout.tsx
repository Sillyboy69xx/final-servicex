import type { Metadata } from 'next'
import { Bebas_Neue, Manrope, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageTransition } from '@/components/page-transition'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
})
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Service Auto — Overlanding & Off-Road | București',
  description:
    'Service auto premium specializat în overlanding și off-road. Pregătim mașini pentru locuri unde drumul se termină. Detailing, revizii, diagnoză multi-marcă și sudură argon.',
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#F5EFE6',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ro"
      className={`${bebas.variable} ${manrope.variable} ${caveat.variable} bg-bg-primary`}
    >
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        <PageTransition />
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
