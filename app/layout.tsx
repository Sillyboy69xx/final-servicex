import type { Metadata } from 'next'
import { Suspense } from 'react'
import Script from 'next/script'
import { Bebas_Neue, Manrope, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageTransition } from '@/components/page-transition'
import { CookieConsent } from '@/components/cookie-consent'
import { GoogleAnalytics } from '@/components/google-analytics'
import {
  GA_MEASUREMENT_ID,
  GOOGLE_ADS_CALL_CONVERSION_ID,
  GOOGLE_ADS_PHONE_CONVERSION_NUMBER,
} from '@/lib/google-analytics'

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
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <html
      lang="ro"
      className={`${bebas.variable} ${manrope.variable} ${caveat.variable} bg-bg-primary`}
    >
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        {/* Consent Mode defaults must run before gtag.js loads */}
        {isProduction && (
          <>
            <Script
              id="ga-consent-default"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('consent', 'default', {
                    analytics_storage: 'denied',
                    ad_storage: 'denied',
                    ad_user_data: 'denied',
                    ad_personalization: 'denied',
                    wait_for_update: 500
                  });
                `,
              }}
            />
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga-config"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}');
                  // Website call conversion — replaces matching displayed numbers with a Google forwarding number for ad visitors
                  gtag('config', '${GOOGLE_ADS_CALL_CONVERSION_ID}', {
                    'phone_conversion_number': '${GOOGLE_ADS_PHONE_CONVERSION_NUMBER}'
                  });
                `,
              }}
            />
          </>
        )}

        <PageTransition />
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <CookieConsent />
        {isProduction && (
          <>
            {/* Suspense required because GoogleAnalytics reads useSearchParams */}
            <Suspense fallback={null}>
              <GoogleAnalytics />
            </Suspense>
            <Analytics />
          </>
        )}
      </body>
    </html>
  )
}
