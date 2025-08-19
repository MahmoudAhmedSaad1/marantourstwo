import Link from 'next/link'
import React from 'react'
import Image from "next/image";
type Img = { src: string; alt?: string; href?: string };


export default function Largephoto({ images  }: { images: Img[] }) {
  return <>
   <div className="relative h-72 sm:h-80 md:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow">
        <Image
          src={images.image_url}
          alt={images.image_alt}
          fill
          sizes="(min-width:768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
        {images.image_url ? (
          <Link
            href={images.image_url}
            className="absolute inset-0"
            aria-label={images.image_alt ?? "open"}
          />
        ) : null}
      </div>
  
  </>
}
