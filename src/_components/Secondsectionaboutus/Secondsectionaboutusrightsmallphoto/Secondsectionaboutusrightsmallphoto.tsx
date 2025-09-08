import Image from 'next/image'
import React from 'react'

export default function Secondsectionaboutusrightsmallphoto({smallImg}: {smallImg: string}) {
  return <>
    <div className="absolute -bottom-12 -left-10 sm:left-8 lg:-left-12 w-[70%] sm:w-[60%] lg:w-[55%]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-zinc-200 bg-white">
        <Image
          src={smallImg}
          alt="Traditional doorway and lounge interior"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 70vw, (max-width: 1024px) 50vw, 28vw"
        />
      </div>
    </div>
  
  </>
}
