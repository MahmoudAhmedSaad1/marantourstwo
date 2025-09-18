import Image from 'next/image'
import React from 'react'
type ImageObj = {
  image_url: string
  image_alt?: string
}
export default function Fourthsectionaboutusphoto({ image }: { image: ImageObj }) {
  return (
    <div className="transition-all duration-300 ease-out p-3 sm:p-3 group-hover:p-1">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image.image_url}
          alt={image.image_alt ?? 'about us photo'}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      </div>
    </div>
  )
}
