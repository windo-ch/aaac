import Image, { ImageProps } from 'next/image'

interface ImageWithBlurProps extends Omit<ImageProps, 'placeholder'> {
  blurDataURL?: string
}

const FALLBACK_BLUR =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='

export function ImageWithBlur({
  blurDataURL,
  alt,
  ...props
}: ImageWithBlurProps) {
  return (
    <Image
      alt={alt}
      placeholder="blur"
      blurDataURL={blurDataURL ?? FALLBACK_BLUR}
      {...props}
    />
  )
}
