import type { Metadata } from 'next'
import { getAllPieces } from '@/lib/pieces'
import { CollectionView } from '@/components/pieces/CollectionView'

export const metadata: Metadata = {
  title: 'Work — AAAC',
  description:
    'All ceramics by Dimitria Barrows — handmade stoneware vessels, NFC-chipped and registered on the Base blockchain.',
  openGraph: {
    title: 'Work — AAAC',
    description:
      'All ceramics by Dimitria Barrows — handmade stoneware vessels, NFC-chipped and registered on the Base blockchain.',
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
  },
}

export const revalidate = 60

export default async function WorkPage() {
  const pieces = await getAllPieces()
  return (
    <div style={{ paddingTop: 'var(--header-h)' }}>
      <CollectionView pieces={pieces} />
    </div>
  )
}
