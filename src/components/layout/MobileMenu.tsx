'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center transition-opacity duration-300"
      style={{
        background: '#fff',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
      }}
      aria-hidden={!open}
    >
      {/* Close button */}
      <button
        className="absolute top-6 right-6 p-2 text-2xl leading-none"
        onClick={onClose}
        aria-label="Close menu"
        style={{ color: 'var(--color-text-primary)' }}
      >
        ✕
      </button>

      <nav className="flex flex-col items-center gap-10">
        <Link
          href="/work"
          onClick={onClose}
          className="font-display text-7xl uppercase leading-none hover:opacity-50 transition-opacity"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}
        >
          Work
        </Link>
        <Link
          href="/about"
          onClick={onClose}
          className="font-display text-7xl uppercase leading-none hover:opacity-50 transition-opacity"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}
        >
          About
        </Link>
        <div className="flex items-center gap-8 mt-4">
          <a
            href="https://x.com/dimitria1337"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="transition-opacity hover:opacity-50"
            style={{ color: 'var(--color-text-primary)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/dimitria1337"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-opacity hover:opacity-50"
            style={{ color: 'var(--color-text-primary)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  )
}
