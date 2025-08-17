import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Thirdsectionfooter() {
  return<>
  
    <div className="gallary  ps-5 border-l-[2px] my-3 border-[#383938]">
                        <h3 className="text-[#FFFFFFCC] text-[20px] font-[600] py-2"><Link href="">Gallery</Link></h3>
                        <div className="images grid grid-cols-3 gap-2">
                            <Image priority fetchPriority='high' width={100} height={100} src="/imgs/Link → brazil-image-gallery-9-300x300.jpg.png" alt="footer image" />
                            <Image priority fetchPriority='high' width={100} height={100} src="/imgs/Link → brazil-image-gallery-11-300x300.jpg.png" alt="footer image" />
                            <Image priority fetchPriority='high' width={100} height={100} src="/imgs/Link → japan-image-gallery-9-300x300.jpg.png" alt="footer image" />
                            <Image priority fetchPriority='high' width={100} height={100} src="/imgs/Link → japan-image-gallery-6-300x300.jpg.png" alt="footer image" />
                            <Image priority fetchPriority='high' width={100} height={100} src="/imgs/Link → japan-image-gallery-11-300x300.jpg.png" alt="footer image" />
                            <Image priority fetchPriority='high' width={100} height={100} src="/imgs/Link → lisbon-image-gallery-7-300x300.jpg.png" alt="footer image" />
                        </div>
                    </div>
  
  </>
}
