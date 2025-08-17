import Link from 'next/link'
import React from 'react'
import Image from "next/image";
type Img = { src: string; alt?: string; href?: string };


export default function Largephoto({ images  }: { images: Img[] }) {
  return <>
   <div className="relative h-72 sm:h-80 md:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow">
        <Image
          src={images[0].src}
          alt={images[0].alt ?? ""}
          fill
          sizes="(min-width:768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
        {images[0].href ? (
          <Link
            href={images[0].href}
            className="absolute inset-0"
            aria-label={images[0].alt ?? "open"}
          />
        ) : null}
      </div>
  
  </>
}
