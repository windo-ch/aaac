import Image from 'next/image'
import Link from 'next/link'

interface HomeHeroProps {
  images: Array<{ src: string; alt: string }>
}

export function HomeHero({ images }: HomeHeroProps) {
  return (
    <section
      className="mx-auto max-w-[1200px] px-6"
      style={{ paddingTop: 'var(--header-h)', paddingBottom: '6rem' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left: 3-image mosaic */}
        <div className="flex items-start" style={{ gap: '3%' }}>
          {/* Large left image */}
          {images[0] && (
            <div
              style={{
                width: '60%',
                flexShrink: 0,
                position: 'relative',
                aspectRatio: '2/3',
              }}
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                priority
                sizes="(max-width: 1024px) 50vw, 30vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}

          {/* Right column: two stacked, offset down */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              marginTop: '22%',
            }}
          >
            {images[1] && (
              <div style={{ position: 'relative', aspectRatio: '3/4' }}>
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  sizes="(max-width: 1024px) 25vw, 15vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
            {images[2] && (
              <div style={{ position: 'relative', aspectRatio: '3/4' }}>
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  sizes="(max-width: 1024px) 25vw, 15vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Right: bio snippet + read more */}
        <div
          className="flex flex-col gap-6"
          style={{
            position: 'sticky',
            top: 'calc(var(--header-h) + 3rem)',
            alignSelf: 'start',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              textTransform: 'uppercase',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              color: 'var(--color-text-primary)',
            }}
          >
            Dimitria Barrows
          </h2>

          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Contemporary ceramic artist Dimitria Barrows spent a decade working full-time
            in the art industry &mdash; at Gagosian, Galerie Thaddaeus Ropac, and among
            others &mdash; before returning to her own practice in 2024. Now she makes
            ceramics: functional sculptural vessels exploring value formation in internet
            memes, crypto culture, and onchain dynamics.
          </p>

          <Link
            href="/about"
            className="font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-50 inline-flex items-center gap-2 self-start"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Read more →
          </Link>
        </div>
      </div>
    </section>
  )
}
