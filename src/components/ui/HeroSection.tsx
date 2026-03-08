import Image from 'next/image'

interface HeroSectionProps {
  imageSrc: string
  imageAlt: string
}

export function HeroSection({ imageSrc, imageAlt }: HeroSectionProps) {
  return (
    <section
      className="flex flex-col items-center px-4"
      style={{ paddingTop: 'var(--header-h)' }}
    >
      {/* Featured image */}
      <div
        className="relative w-full"
        style={{ maxWidth: '880px', aspectRatio: '4/5' }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 880px) 100vw, 880px"
          style={{ objectFit: 'cover' }}
        />
      </div>

    </section>
  )
}
