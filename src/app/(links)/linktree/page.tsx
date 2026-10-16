import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Links — AAAC',
  description: 'Dimitria Barrows — Art As A Consequence. Website, X, Telegram, WhatsApp and email.',
  metadataBase: new URL('https://artasaconsequence.net'),
  openGraph: {
    title: 'Links — AAAC',
    description: 'Dimitria Barrows — Art As A Consequence. Website, X, Telegram, WhatsApp and email.',
    url: 'https://artasaconsequence.net/linktree',
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
}

const links = [
  { label: 'Website', href: '/', external: false },
  { label: 'X', href: 'https://x.com/dimitria1337', external: true },
  { label: 'Telegram', href: 'https://t.me/dimitriabarrows', external: true },
  { label: 'WhatsApp', href: 'https://wa.me/41795906726', external: true },
  { label: 'Email', href: 'mailto:dimitria@artasaconsequence.net', external: false },
]

export default function LinktreePage() {
  const year = new Date().getFullYear()

  return (
    <div className="mx-auto flex min-h-dvh max-w-[420px] flex-col items-center px-6 py-16">
      <Image
        src="/AAAC-Logo-web.png"
        alt="Art As A Consequence logo"
        width={96}
        height={96}
        priority
      />

      <h1
        className="mt-8 text-center"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(2rem, 9vw, 2.75rem)',
          textTransform: 'uppercase',
          lineHeight: 0.9,
          letterSpacing: '-0.03em',
          color: 'var(--color-text-primary)',
        }}
      >
        Dimitria Barrows
      </h1>
      <p
        className="mt-3 font-mono text-[10px] uppercase tracking-widest text-center"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Art As A Consequence — Ceramics
      </p>

      <nav className="mt-10 flex w-full flex-col gap-3">
        {links.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="block w-full border border-[var(--color-text-primary)] py-4 text-center font-mono text-xs uppercase tracking-widest text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-text-primary)] hover:text-white"
          >
            {label}
          </a>
        ))}
      </nav>

      <p
        className="mt-auto pt-16 font-mono text-[10px] text-center"
        style={{ color: 'var(--color-text-muted)' }}
      >
        © {year} ART AS A CONSEQUENCE
      </p>
    </div>
  )
}
