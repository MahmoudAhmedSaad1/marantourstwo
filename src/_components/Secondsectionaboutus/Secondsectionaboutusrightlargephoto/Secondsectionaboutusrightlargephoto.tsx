import Image from 'next/image'
import React from 'react'

export default function Secondsectionaboutusrightlargephoto({largeImg}: {largeImg: string}) {
  return <>
   <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-zinc-200/70 aspect-[16/10] lg:aspect-[16/9]">
        <Image
          src={largeImg}
          alt="Camel rider with pyramids in the distance"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw" 
        />
      </div>
  </>
}
