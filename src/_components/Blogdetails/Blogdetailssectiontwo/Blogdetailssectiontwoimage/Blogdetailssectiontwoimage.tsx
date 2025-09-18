import Image from 'next/image'
import React from 'react'

export default function Blogdetailssectiontwoimage({src,alt}:{src:string,alt:string}) {
  return <>
   <Image
                    src={src}
                    alt={alt}
                    width={400}
                    height={400}
                    className="object-contain mx-auto duration-300 hover:brightness-110"
                    style={{ width: "60%", height: "80vh" }}
                  />
  </>
}
