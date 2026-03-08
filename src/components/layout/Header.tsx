'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY.current && y > 80)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] transition-transform duration-300"
        style={{
          height: 'var(--header-h)',
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--color-border)',
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/AAAC-Logo-web.png"
              alt="AAAC"
              width={80}
              height={32}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-8">
            <Link
              href="/work"
              className="font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-50"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Work
            </Link>
            <Link
              href="/about"
              className="font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-50"
              style={{ color: 'var(--color-text-primary)' }}
            >
              About
            </Link>
            <div className="flex items-center gap-4 ml-2">
              <a
                href="https://x.com/dimitria1337"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="transition-opacity hover:opacity-50"
                style={{ color: 'var(--color-text-primary)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
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
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-px bg-current" />
            <span className="block w-6 h-px bg-current" />
            <span className="block w-4 h-px bg-current" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
