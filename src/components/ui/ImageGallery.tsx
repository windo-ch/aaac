'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageGalleryProps {
  images: string[]
  title: string
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [active, setActive] = useState(0)
  const hasMultiple = images.length > 1

  if (images.length === 0) {
    return <div className="w-full aspect-square bg-surface rounded" />
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
        <Image
          src={images[active]}
          alt={`${title} — image ${active + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Thumbnail strip */}
      {hasMultiple && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative flex-shrink-0 w-16 h-16 overflow-hidden"
              style={{
                outline: i === active ? '2px solid var(--color-accent)' : '2px solid transparent',
                outlineOffset: '2px',
              }}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${title} thumbnail ${i + 1}`}
                fill
                sizes="64px"
                style={{ objectFit: 'cover' }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
