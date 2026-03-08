import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Art Direction & Partnerships — Blast from the Past — AAAC',
  description:
    'Art direction and strategic partnerships — Jeff Koons campaigns, Luisa World, SHED.Club, Bongénie Grieder.',
  openGraph: {
    title: 'Art Direction & Partnerships — Blast from the Past — AAAC',
    description:
      'Art direction and strategic partnerships — Jeff Koons campaigns, Luisa World, SHED.Club, Bongénie Grieder.',
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

const f = (sub: string) => `/former%20-%20art%20as%20a%20consequence/art%20direction/${sub}`

const sections = [
  {
    label: 'Marketing Campaign — Dec 2021',
    title: 'Jeff Koons Balloon Dog (Blue)',
    description:
      'Art direction for the limited edition Balloon Dog (Blue) by Jeff Koons, produced by Weng Contemporary. Campaign conceptualized and executed by Dimitria Markou in collaboration with photographer Shkelzen Konxheli.',
    credits: ['Art Direction: Dimitria Markou', 'Photography: Shkelzen Konxheli', 'Production: Weng Contemporary'],
    images: [
      f('Jeff-Koons-Balloon-Dog-Blue-campaign-Dimitria-Markou.jpg'),
      f('Jeff-Koons-Ballon-Dog-Blue-Diamond-Red-Dimitria-Markou-Shkelzen-Konxheli.jpg'),
      f('jeff-koons-balloon-dog-blue-art-as-a-consequence.jpg'),
      f('Jeff-Koons-Balloon-Dog-Blue-limited-edition-art-direction-Dimitria-Markou.jpg'),
    ],
  },
  {
    label: 'Marketing Campaign — 2022',
    title: 'Jeff Koons Diamond (Red)',
    description:
      'Art direction for the limited edition Diamond (Red) by Jeff Koons, produced by Weng Contemporary. Campaign featured in the Financial Times How to Spend It, with model Zoe Pastelle.',
    credits: [
      'Art Direction: Dimitria Markou',
      'Model: Zoe Pastelle',
      'Publication: FT How to Spend It',
      'Production: Weng Contemporary',
    ],
    images: [
      f('Jeff-Koons-Diamond-Red-Dimitria-Markou-art-director-Zoe-Pastelle-weng-contemporary.jpg'),
      f('Zoe-Pastelle-Jeff-Koons-Diamond-Red-Dimitria-Markou-art-director-weng-contemporary.jpg.jpg'),
      f('Jeff-Koons-FT-How-To-Spend-It-Dimitria-Markou-art-direction.jpg'),
    ],
  },
  {
    label: 'Strategic Partnership — 2022',
    title: 'Luisa World Partnership',
    description:
      'Strategic partnership with Luisa World for the presentation of Jeff Koons Balloon Dog (Blue) and Diamond (Red) in Athens, Greece. Covered by Vogue Greece and Glow.gr.',
    credits: ['Art Direction: Dimitria Markou', 'Partner: Luisa World, Athens'],
    links: [
      { label: 'Vogue Greece', href: 'https://vogue.gr' },
      { label: 'Glow.gr', href: 'https://glow.gr' },
    ],
    images: [
      f('Jeff-Koons-Balloon-Dog-Blue-Athens-Greece-Dimitria-Markou-Luisa-World.jpg'),
      f('Jeff-Koons-Balloon-Dog-Athens-Greece-Dimitria-Markou-Luisa-World-1.jpg'),
      f('jeff-koons-diamond-red-dimitria-markou-luisa-world-athens-greece.jpg'),
    ],
  },
  {
    label: 'Partnership — 2021',
    title: 'SHED.Club',
    description:
      'Partnership with SHED.Club Zug for the presentation of Alex Katz "Black Dress (Yi)" to the SHED.Club community.',
    credits: ['Art Direction: Dimitria Markou', 'Partner: SHED.Club, Zug'],
    images: [
      f('ALEX-KATZ-SHED-CLUB-ZUG-Dimitria-Markou.png'),
    ],
  },
  {
    label: 'Pop-up & Partnership — 2022',
    title: 'Bongénie Grieder',
    description:
      'Jeff Koons Balloon Animals pop-up at Bongénie Grieder, Zurich. Curated and produced in collaboration with Bongénie Grieder as part of the luxury fashion retailer\'s art programme.',
    credits: ['Art Direction: Dimitria Markou', 'Partner: Bongénie Grieder, Zurich'],
    images: [
      f('Jeff-Koons-pop-up-zurich-bongenie-zurich-dimitria-markou.jpg'),
      f('Jeff-Koons-pop-up-Zurich-Balloon-Animals.jpg'),
    ],
  },
]

export default function ArtDirectionPage() {
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
            marginBottom: '3rem',
          }}
        >
          Art Direction &amp; Partnerships
        </h1>

        {/* Sections */}
        <div className="flex flex-col gap-0">
          {sections.map((section, i) => (
            <div
              key={i}
              className="border-t py-14"
              style={{ borderColor: 'var(--color-border)' }}
            >
              {/* Label */}
              <p
                className="font-mono text-[10px] uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {section.label}
              </p>

              {/* Title */}
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text-primary)',
                  marginBottom: '1rem',
                }}
              >
                {section.title}
              </h2>

              {/* Description */}
              <p
                className="text-base leading-relaxed max-w-2xl mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {section.description}
              </p>

              {/* Credits */}
              <ul
                className="flex flex-col gap-1 text-xs font-mono mb-2"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {section.credits.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>

              {/* Media links */}
              {'links' in section && section.links && (
                <div className="flex gap-3 mb-6 mt-3">
                  {section.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs font-mono px-3 py-1 border"
                      style={{
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text-secondary)',
                        textDecoration: 'none',
                      }}
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}

              {/* Images */}
              <div
                className="grid gap-3 mt-6"
                style={{
                  gridTemplateColumns: `repeat(${Math.min(section.images.length, 4)}, 1fr)`,
                }}
              >
                {section.images.map((src) => (
                  <div key={src} className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={src}
                      alt={section.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
