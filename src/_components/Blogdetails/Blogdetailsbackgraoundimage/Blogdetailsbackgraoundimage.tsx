import Image from 'next/image'
import React from 'react'

export default function Blogdetailsbackgraoundimage() {
  return <>
  <div className="relative w-full h-[60vh]">
    <Image
      src="/imgs/istockphoto-1396814518-612x612.jpg"
      alt="tour image"
      fill
      className=""
      priority
      unoptimized
    />
  </div>
  
  </>
}
