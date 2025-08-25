import Link from 'next/link'
import React from 'react'

export default function FourthsectionFooter() {
  return <>
  
  <div className="ps-5 border-l-[2px] my-3 border-[#383938]">
                        <h3 className="text-[#FFFFFFCC] text-[20px] font-[600] py-2">Support</h3>
                        <ul className="text-[#FFFFFF99] font-[400] ">
                            <li className="py-2"><Link className='hover:border-[#C49A6C]  hover:text-[#C49A6C] duration-300' href="/contact">Contact us</Link></li>
                            <li className="py-2"> <Link className='hover:border-[#C49A6C]  hover:text-[#C49A6C] duration-300' href="/">sochial Media</Link></li>
                            <li className="py-2"> <Link  className='hover:border-[#C49A6C]  hover:text-[#C49A6C] duration-300'   href="/">Team</Link></li>

                        </ul>
                    </div>
  
  
  </>
}
