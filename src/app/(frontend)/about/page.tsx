import type { Metadata } from 'next'
import Image from 'next/image'
import { getAllPieces } from '@/lib/pieces'

export const metadata: Metadata = {
  title: 'About — AAAC',
  description:
    'Contemporary ceramic artist Dimitria Barrows (AAAC) — based in Zug, Switzerland. Formerly Gagosian and Galerie Thaddaeus Ropac.',
  openGraph: {
    title: 'About — AAAC',
    description:
      'Contemporary ceramic artist Dimitria Barrows (AAAC) — based in Zug, Switzerland. Formerly Gagosian and Galerie Thaddaeus Ropac.',
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

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dimitria Barrows',
  jobTitle: 'Ceramic Artist',
  url: 'https://artasaconsequence.net/about',
  sameAs: ['https://twitter.com/dimitria1337'],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Zürcher Hochschule der Künste',
    alternateName: 'ZHdK',
    address: { '@type': 'PostalAddress', addressLocality: 'Zurich', addressCountry: 'CH' },
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Zug',
    addressCountry: 'CH',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Art As A Consequence',
    url: 'https://artasaconsequence.net',
  },
}

export default async function AboutPage() {
  const pieces = await getAllPieces()
  const portraitSrc = pieces[0]?.images[0] ?? '/images/pieces/Genesis/01.png'

  return (
    <div style={{ paddingTop: 'var(--header-h)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: portrait image */}
          <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
            <Image
              src={portraitSrc}
              alt="Dimitria Barrows — ceramics"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Right: full bio */}
          <div className="flex flex-col gap-6" style={{ color: 'var(--color-text-secondary)' }}>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                textTransform: 'uppercase',
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                marginBottom: '1rem',
              }}
            >
              Dimitria Barrows
            </h1>

            <p className="text-base leading-relaxed">
              Contemporary ceramic artist Dimitria Barrows (ART AS A CONSEQUENCE &mdash; AAAC)
              spent a decade working full-time in the art industry &mdash; at Gagosian, Galerie
              Thaddaeus Ropac, and among others &mdash; handling exhibitions, sales, and artists&rsquo;
              studios &mdash;{' '}
              <a
                href="/blast-from-the-past"
                style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}
              >
                a blast from the past
              </a>
              {' '}&mdash; before returning to her own practice in 2024. Now Barrows makes
              ceramics, including functional sculptural vessels.
            </p>

            <p className="text-base leading-relaxed">
              Based in Zug, Switzerland &mdash; better known as Crypto Valley &mdash; Barrows
              creates handmade stoneware ceramics &mdash; vases and vessels exploring value
              formation in internet memes, crypto culture, economics, onchain dynamics.
            </p>

            <p className="text-base leading-relaxed">
              Barrows bridges the contemporary art scene with the web3 space. Each artwork is
              unique, boldly glazed, and created with utility in mind &mdash; it mirrors how we
              assign (and verify) worth, a question she watched play out in blue-chip galleries
              and now watches play out onchain. Barrows&rsquo; artworks are NFC-chipped and
              onchain-registered; these conceptual ceramics exist as physical-digital twins.
            </p>

            <p className="text-base leading-relaxed">
              Barrows graduated from ZHdK in Zurich (BA Fine Arts, 2015).
            </p>

            {/* Education */}
            <div
              className="border-t pt-6 mt-2"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <h2
                className="font-mono text-[10px] uppercase tracking-widest mb-4"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Education
              </h2>
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>
                    2012 &ndash; 2015
                  </p>
                  <p>BA Media and Art: Fine Arts</p>
                  <p>Z&uuml;rcher Hochschule der K&uuml;nste, Zurich</p>
                </div>
                <div>
                  <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>
                    2008 &ndash; 2010
                  </p>
                  <p>attRAct, workshops in architecture and art</p>
                  <p>Royal Academy of Arts, London, UK</p>
                </div>
              </div>
            </div>

            {/* Exhibitions */}
            <div
              className="border-t pt-6"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <h2
                className="font-mono text-[10px] uppercase tracking-widest mb-4"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Exhibitions
              </h2>
              <div className="flex flex-col gap-4 text-sm">
                <div>
                  <p className="font-medium mb-1" style={{ color: 'var(--color-text-primary)' }}>2015</p>
                  <p>Aufgeweckte Kunstgeschichten, group exhibition</p>
                  <p style={{ color: 'var(--color-text-muted)' }}>Kunsthaus Zurich, Vortragssaal, Zurich</p>
                </div>
                <div>
                  <p className="font-medium mb-1" style={{ color: 'var(--color-text-primary)' }}>2014</p>
                  <p>Sweet Nothings — ONO Gallery, Zurich</p>
                  <p>SOKK, group exhibition — Arbenz, Zurich</p>
                  <p>Aufgeweckte Kunstgeschichten — Toni Areal, Zurich</p>
                  <p>Welcome deadline — Import Export, ZHdK, Zurich</p>
                  <p>Washington Ghost — A.C. KUPPER Modern, Zurich</p>
                </div>
                <div>
                  <p className="font-medium mb-1" style={{ color: 'var(--color-text-primary)' }}>2013</p>
                  <p>If Nobody Was Watching — ZHdK, Zurich</p>
                </div>
                <div>
                  <p className="font-medium mb-1" style={{ color: 'var(--color-text-primary)' }}>2010</p>
                  <p>Michael Landy Art Bin, group exhibition</p>
                  <p style={{ color: 'var(--color-text-muted)' }}>South London Gallery, London</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div
              className="border-t pt-6 font-mono text-sm"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
            >
              <p>get in touch: dimitria@artasaconsequence.net</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
