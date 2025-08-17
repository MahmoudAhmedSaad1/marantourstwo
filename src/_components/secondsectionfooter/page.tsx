import Link from 'next/link'
import React from 'react'

export default function SecondsectionFooter() {
  return <>
  
   <div className="quick-links my-3 ps-5 border-l-[2px] border-[#383938]">

                        <h3 className="text-[#FFFFFFCC] text-[20px] font-[600]">Quick Link</h3>
                        <ul className="text-[#FFFFFF99] font-[400] ">
                            <li className="py-2"><Link href="">About Us</Link></li>
                            <li className="py-2"><Link href="">Home</Link></li>
                            <li className="py-2"><Link href="">Destinations</Link></li>
                            <li className="py-2"><Link href="">Experiences</Link></li>
                            <li className="py-2"><Link href="">Inspirations</Link></li>
                        </ul>
                    </div>
  </>
}
