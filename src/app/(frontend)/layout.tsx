import React from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FullWidthTitle } from '@/components/ui/FullWidthTitle'
import EasterEggsClient from './EasterEggsClient'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'AAAC — Art As A Consequence',
  description:
    'Ceramics by Dimitria Barrows. Boldly colored, fully functional ceramic vases as collectible, tactile timestamps of crypto culture.',
  metadataBase: new URL('https://artasaconsequence.net'),
  openGraph: {
    title: 'AAAC — Art As A Consequence',
    description:
      'Ceramics by Dimitria Barrows. Boldly colored, fully functional ceramic vases as collectible, tactile timestamps of crypto culture.',
    type: 'website',
    url: 'https://artasaconsequence.net',
    siteName: 'Art As A Consequence',
    locale: 'en_US',
    images: [
      {
        url: '/AAAC-OG-img.png',
        width: 1200,
        height: 630,
        alt: 'Art As A Consequence — Ceramics by Dimitria Barrows',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dimitria1337',
    creator: '@dimitria1337',
    images: ['/AAAC-OG-img.png'],
  },
  robots: { index: true, follow: true },
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-sans flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* Spacer so footer clears the fixed bottom title (~10vw tall) */}
      <div style={{ height: '10vw' }} aria-hidden="true" />
      <FullWidthTitle />
      <EasterEggsClient />
    </div>
  )
}
