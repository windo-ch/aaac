import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Interviews — Blast from the Past — AAAC',
  description:
    'Interviews with artists, collectors, and curators — conducted by Dimitria Barrows for one33seven and ELUSIVE Magazine.',
  openGraph: {
    title: 'Interviews — Blast from the Past — AAAC',
    description:
      'Interviews with artists, collectors, and curators — conducted by Dimitria Barrows for one33seven and ELUSIVE Magazine.',
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

const f = (sub: string) => `/former%20-%20art%20as%20a%20consequence/Interviews/${sub}`

type Interview = {
  name: string
  image: string
  excerpt: string
  link?: string
  linkLabel?: string
}

const interviews: Interview[] = [
  {
    name: 'Oskar Schlemmer',
    image: f('oskar-schlemmer-intreview-with-raman-schlemmer.jpg'),
    excerpt:
      'The legacy of Bauhaus master Oskar Schlemmer — exploring the Triadic Ballet and his influence on contemporary performance and visual art.',
    link: 'https://www.one33seven.com/people/oskar-schlemmer',
    linkLabel: 'one33seven.com',
  },
  {
    name: 'H.R. Giger',
    image: f('HR-Giger-with-alien.jpg'),
    excerpt:
      'The iconic Swiss surrealist artist H.R. Giger — creator of the Alien aesthetic — on biomechanical art and the architecture of the uncanny.',
    link: 'https://www.one33seven.com/people/hr-giger',
    linkLabel: 'one33seven.com',
  },
  {
    name: 'David Newman',
    image: f('carrara-marble-sculpture-by-david-newman-art-copy-e1709553606861.png'),
    excerpt:
      'British sculptor David Newman on working with Carrara marble, the physicality of stone, and the intersection of craft and contemporary art.',
    link: 'https://www.one33seven.com/people/david-newman',
    linkLabel: 'one33seven.com',
  },
  {
    name: 'Georg Bak',
    image: f('generative-art-curator-georg-bak-interview-dimitria-markou-one33seven.jpg'),
    excerpt:
      'Generative art curator Georg Bak on the convergence of technology and creativity, and what it means to collect algorithmic art.',
    link: 'https://www.one33seven.com/people/georg-bak',
    linkLabel: 'one33seven.com',
  },
  {
    name: 'Ata Bozaci',
    image: f('graffiti-artist-ata-bonzaci-intreview-dimitria-markou-one33seven.jpg'),
    excerpt:
      'Graffiti artist Ata Bozaci on street art, the transition from walls to galleries, and the politics of public space.',
    link: 'https://www.one33seven.com/people/ata-bozaci',
    linkLabel: 'one33seven.com',
  },
  {
    name: 'Thomas Reinshagen',
    image: f('Thomas-Reinshagen-art-advisor-interview-dimitria-markou-one33seven.jpg'),
    excerpt:
      'Art advisor Thomas Reinshagen on navigating the contemporary art market, advising collectors, and identifying emerging talent.',
    link: 'https://www.one33seven.com/people/thomas-reinshagen',
    linkLabel: 'one33seven.com',
  },
  {
    name: 'Thomas Stauffer',
    image: f('thomas-stauffer-art-advisor-interview-dimitria-markou-one33seven.jpg'),
    excerpt:
      'Art advisor Thomas Stauffer on the Swiss art scene, advising private collections, and the intersection of finance and collecting.',
    link: 'https://www.one33seven.com/people/thomas-stauffer',
    linkLabel: 'one33seven.com',
  },
  {
    name: 'Wolfgang Beltracchi',
    image: f('Wolfgang-Beltracchi-interview-dimitria-markou-one33seven.jpg'),
    excerpt:
      'Wolfgang Beltracchi — one of the most famous art forgers in history — on deception, mastery, and life after the conviction.',
    link: 'https://www.one33seven.com/people/wolfgang-beltracchi',
    linkLabel: 'one33seven.com',
  },
  {
    name: 'Rata',
    image: f('rata-nft-artist-interview-with-dimitria-markou-one33seven.jpg'),
    excerpt:
      'NFT artist Rata on building a career in the digital art space, community, and what it means to create work that lives onchain.',
    link: f('Rata-Interview-Dimitria-Markou-Art-As-A-Consequence-compressed.pdf'),
    linkLabel: 'PDF',
  },
  {
    name: 'Harald Naegeli',
    image: f('harald-naegeli-artist-interview-with-dimitria-markou-one33seven.jpg'),
    excerpt:
      'Swiss artist Harald Naegeli — "The Sprayer of Zurich" — on guerrilla art, civic disobedience, and the enduring power of the drawn line.',
    link: 'https://www.one33seven.com/people/harald-naegeli',
    linkLabel: 'one33seven.com',
  },
  {
    name: 'Giannis Sourdis',
    image: f('Giannis-Sourdis-nft-collector-Interview-dimitria-markou-one33seven.jpg'),
    excerpt:
      'NFT collector Giannis Sourdis on building a digital art collection, the philosophy behind collecting, and the future of ownership.',
    link: 'https://www.one33seven.com/people/giannis-sourdis',
    linkLabel: 'one33seven.com',
  },
  {
    name: 'Lukas Amacher',
    image: f('Lukas-Amacher-Interview-1of1-collection-dimitria-markou-one33seven.jpg'),
    excerpt:
      'Lukas Amacher on the 1of1 collection, curating one-of-a-kind digital works, and what distinguishes truly singular art.',
    link: 'https://www.one33seven.com/people/lukas-amacher',
    linkLabel: 'one33seven.com',
  },
  {
    name: 'Reeps100',
    image: f('voice-gems-by-reeps100-harry-yeff-interview.png'),
    excerpt:
      'Harry Yeff (Reeps100) on Voice Gems, transforming vocal data into sculptural NFTs, and the art of turning sound into form.',
    link: f('Reeps100-Harry-Yeff-Interview-Dimitria-Markou-Art-As-A-Consequence-compressed.pdf'),
    linkLabel: 'PDF',
  },
  {
    name: 'Alec Monopoly',
    image: f('ALEC-Monopoly-graffiti-artist-interview-dimitria-markou-elusive-magazine.png'),
    excerpt:
      'Street artist Alec Monopoly on anonymity, pop art iconography, and his signature Monopoly Man — from the streets to Sotheby\'s.',
    link: f('ALEC-MONOPOLY-Interview-Dimitria-Markou-Art-As-A-Consequence-compressed.pdf'),
    linkLabel: 'ELUSIVE Magazine PDF',
  },
  {
    name: 'Emily Mae Smith',
    image: f('Emily-Mae-Smith-interview-Dimitria-Markou-ELUSIVE-Magazine.png'),
    excerpt:
      'Painter Emily Mae Smith on her feminist iconography, the Spindle character, and how art history informs her subversive figurative work.',
    link: f('Emily-Mae-Smith-Interview-Dimitria-Markou-Art-As-A-Consequence-compressed.pdf'),
    linkLabel: 'ELUSIVE Magazine PDF',
  },
  {
    name: 'Sam Spratt',
    image: f('sam-spratt-nft-nyc-interview-nft-artist-rata-dimitria-markou-ELUSIVE-Magazine.png'),
    excerpt:
      'Digital painter Sam Spratt on his LUCI universe, the craft of hyper-detailed digital painting, and the NFT scene at NFT.NYC.',
  },
]

export default function InterviewsPage() {
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

        {/* Page title */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            textTransform: 'uppercase',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
          }}
        >
          Interviews
        </h1>

        <p
          className="text-base leading-relaxed max-w-2xl mb-12"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Conversations with artists, collectors, advisors, and curators — conducted for{' '}
          <a
            href="https://www.one33seven.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            one33seven
          </a>{' '}
          and ELUSIVE Magazine.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {interviews.map((item) => (
            <div key={item.name} className="flex flex-col gap-3">
              {/* Square image */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Name */}
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  color: 'var(--color-text-primary)',
                }}
              >
                {item.name}
              </h2>

              {/* Excerpt */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {item.excerpt}
              </p>

              {/* Link chip */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start inline-block text-xs font-mono px-3 py-1 border"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                  }}
                >
                  {item.linkLabel ?? 'Read'} ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
