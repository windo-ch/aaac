'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ImageWithBlur } from '@/components/ui/ImageWithBlur'

interface PieceGalleryProps {
  images: string[]
  title: string
}

export function PieceGallery({ images, title }: PieceGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      {/* Primary image */}
      <div
        className="relative overflow-hidden"
        style={{
          background: 'var(--color-surface)',
          aspectRatio: '1 / 1',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <ImageWithBlur
              src={images[activeIndex]}
              alt={`${title} — image ${activeIndex + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
              priority={activeIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail strip (only shown if multiple images) */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`View image ${i + 1}`}
              className="relative shrink-0 overflow-hidden transition-opacity"
              style={{
                width: 64,
                height: 64,
                opacity: i === activeIndex ? 1 : 0.5,
                border: i === activeIndex
                  ? `2px solid var(--color-accent)`
                  : '2px solid transparent',
                background: 'var(--color-surface)',
              }}
            >
              <ImageWithBlur
                src={src}
                alt={`Thumbnail ${i + 1}`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
