import Image from 'next/image'
import React from 'react'

type ImageObj = { image_url: string; image_alt?: string }
type Props = { image?: string | ImageObj | null }

export default function Thirdsectionaboutuspartonephoto({ image }: Props) {
  if (!image) return null
  if (!image.image_url) return null
  const { image_url, image_alt } = image

  return (
   <div className="relative w-full  aspect-[4/3] overflow-hidden">
  <Image
    src={image_url}
    alt={image_alt ?? 'about maram tours'}
    fill
    className="object-cover  group-hover:scale-105 transition-transform duration-200"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
  />
</div>

  )
}
