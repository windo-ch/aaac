import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blast from the Past — AAAC',
  description:
    'Art as a Consequence started as an art advisory. Consulting for marketing, studio management, digitalization, and strategic partnerships.',
  openGraph: {
    title: 'Blast from the Past — AAAC',
    description:
      'Art as a Consequence started as an art advisory. Consulting for marketing, studio management, digitalization, and strategic partnerships.',
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

const cards = [
  {
    title: 'About',
    description: 'Dimitria Barrows — art professional',
    image: f('about%20me/Dimitria-Markou-art-professional-2-copy-2.jpg'),
    href: '/blast-from-the-past/about',
  },
  {
    title: 'Art Direction',
    description: 'Campaigns & strategic partnerships',
    image: f('art%20direction/Jeff-Koons-Balloon-Dog-Blue-campaign-Dimitria-Markou.jpg'),
    href: '/blast-from-the-past/art-direction',
  },
  {
    title: 'Interviews',
    description: 'Artists, collectors & curators',
    image: f('Interviews/sam-spratt-nft-nyc-interview-nft-artist-rata-dimitria-markou-ELUSIVE-Magazine.png'),
    href: '/blast-from-the-past/interviews',
  },
]

export default function BlastFromThePastPage() {
  return (
    <div style={{ paddingTop: 'var(--header-h)' }}>
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        {/* Header */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            textTransform: 'uppercase',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            marginBottom: '2rem',
          }}
        >
          Blast from the Past
        </h1>

        {/* Intro */}
        <div
          className="max-w-2xl mb-12 flex flex-col gap-4 text-base leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          <p>Art as a Consequence started as an art advisory.</p>
          <p>
            Consulting for the art industry — specializing in marketing, studio management,
            digitalization (Web2 &amp; Web3), strategic partnerships, and project management.
            Clients include{' '}
            <a
              href="https://schlemmer.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              The Oskar Schlemmer Theatre Archives
            </a>{' '}
            and{' '}
            <a
              href="https://beltracchi-art.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Wolfgang Beltracchi
            </a>
            .
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group block"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <div
                className="relative w-full overflow-hidden mb-4"
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.25rem',
                }}
              >
                {card.title}
              </h2>
              <p
                className="text-sm"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
