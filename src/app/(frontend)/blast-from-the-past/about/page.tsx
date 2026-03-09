import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Blast from the Past — AAAC',
  description:
    'Dimitria Barrows — art professional with experience at Gagosian, Galerie Thaddaeus Ropac, and beyond.',
  openGraph: {
    title: 'About — Blast from the Past — AAAC',
    description:
      'Dimitria Barrows — art professional with experience at Gagosian, Galerie Thaddaeus Ropac, and beyond.',
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

const f = (sub: string) => `/former%20-%20art%20as%20a%20consequence/${sub}`

const exhibitionImages = [
  {
    src: f('about%20me/Takashi-Murakami-Virgil-Abloh-future-history-Gagosian-London.png'),
    caption: 'Murakami & Abloh "future history", Gagosian Davies Street, London, 2018',
  },
  {
    src: f('about%20me/Damien-Hirst-Colour-Space-exhibition-Gagosian-New-York.gif'),
    caption: 'Damien Hirst "Colour Space Paintings", Gagosian New York, 2018',
  },
  {
    src: f('about%20me/donald-judd-foundation-exhibition-galerie-thaddaeus-ropac-paris.jpg'),
    caption: 'Donald Judd Foundation, Galerie Thaddaeus Ropac Paris, 2019',
  },
  {
    src: f('about%20me/Adrian-Ghenie-The-Battle-Between-Carnival-and-Feast-at-Palazzo-Cini.gif'),
    caption: 'Adrian Ghenie, Palazzo Cini, Venice, 2019',
  },
  {
    src: f('about%20me/NFT-ART-DAY-ZRH.gif'),
    caption: 'NFT ART DAY ZRH, Kunsthaus Zurich, 2022',
  },
  {
    src: f('about%20me/one33seven-check-logo.png'),
    caption: 'AFFILIATED WITH One33seven, #1337 Day 1, Single Check. A crypto-culture collective bridging connoisseurship and emergent technology.',
  },
]

export default function BlastAboutPage() {
  return (
    <div style={{ paddingTop: 'var(--header-h)' }}>
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        {/* Back link */}
        <Link
          href="/blast-from-the-past"
          className="inline-flex items-center gap-2 text-sm mb-12"
          style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}
        >
          <span aria-hidden="true">←</span> Blast from the Past
        </Link>

        {/* Two-column: portrait + bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left: portrait */}
          <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
            <Image
              src={f('about%20me/Dimitria-Barrows-art-professional-2-copy-2.png')}
              alt="Dimitria Barrows — art professional"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Right: quote + bio */}
          <div className="flex flex-col gap-6" style={{ color: 'var(--color-text-secondary)' }}>
            <p
              className="text-base italic leading-relaxed"
              style={{ color: 'var(--color-text-muted)' }}
            >
              &ldquo;He who is not contented with what he has would not be contented with what he
              would like to have.&rdquo;
            </p>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                textTransform: 'uppercase',
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              Dimitria Barrows
            </h1>

            <p className="text-base leading-relaxed">
              Dimitria Barrows (née Markou) is a contemporary ceramic artist and former art
              professional based in Zug, Switzerland.
            </p>

            <p className="text-base leading-relaxed">
              She spent a decade working in the art industry — at Gagosian, Galerie Thaddaeus
              Ropac, and among others — handling exhibitions, sales, and artists&rsquo; studios —
              before returning to her own practice in 2024.
            </p>

            <p className="text-base leading-relaxed">
              During her time as an art advisor she specialized in marketing, studio management,
              digitalization (Web2 &amp; Web3), strategic partnerships, and project management.
              Notable clients include The Oskar Schlemmer Theatre Archives and Wolfgang Beltracchi.
            </p>

            <p className="text-base leading-relaxed">
              Barrows graduated from ZHdK in Zurich (BA Fine Arts, 2015).
            </p>
          </div>
        </div>

        {/* Exhibition image grid */}
        <div
          className="border-t pt-12"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <h2
            className="font-mono text-[10px] uppercase tracking-widest mb-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Exhibitions &amp; Events
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {exhibitionImages.map((item) => (
              <figure key={item.src} className="m-0">
                <div className="relative w-full overflow-hidden mb-3" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <figcaption
                  className="text-xs leading-snug"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
