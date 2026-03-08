import { getAllPieces } from '@/lib/pieces'
import { HomeHero } from '@/components/ui/HomeHero'
import { GalleryGrid } from '@/components/ui/GalleryGrid'

export const revalidate = 60

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Art As A Consequence',
  alternateName: 'AAAC',
  url: 'https://artasaconsequence.net',
  logo: 'https://artasaconsequence.net/AAAC-Logo-web.png',
  image: 'https://artasaconsequence.net/AAAC-OG-img.png',
  description:
    'Ceramics by Dimitria Barrows. Handmade stoneware vases as collectible, tactile timestamps of crypto culture. NFC-chipped and registered on Base blockchain.',
  founder: {
    '@type': 'Person',
    name: 'Dimitria Barrows',
    sameAs: 'https://twitter.com/dimitria1337',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Zug',
    addressCountry: 'CH',
  },
  sameAs: ['https://twitter.com/dimitria1337'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://artasaconsequence.net',
  name: 'Art As A Consequence',
}

export default async function HomePage() {
  const pieces = await getAllPieces()

  const heroImages = pieces.slice(0, 3).map((p) => ({
    src: p.images[0] ?? '',
    alt: p.title,
  }))

  const cards = pieces.map((p) => ({
    slug: p.slug,
    title: p.title,
    imageUrl: p.images[0] ?? '',
    imageAlt: p.title,
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomeHero images={heroImages} />
      <GalleryGrid pieces={cards} />
    </>
  )
}
