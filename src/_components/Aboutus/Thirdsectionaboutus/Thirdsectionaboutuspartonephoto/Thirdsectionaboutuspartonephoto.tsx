import Image from 'next/image'
import React from 'react'

export default function Thirdsectionaboutuspartonephoto({image,title}: {image:string,title:string}) {
  return <>
  <div className="relative w-full aspect-[16/10]">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    </div>
  
  </>
}
