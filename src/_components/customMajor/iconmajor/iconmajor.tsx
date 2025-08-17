import React from 'react'
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';
export default function Iconmajor() {
  return <>
  
  
  <div className="flex justify-center gap-3 my-4 ">
                  <span
                    
                    className="w-9 h-9 border rounded-full flex justify-center items-center  bg-black text-[white] hover:bg-white hover:text-black duration-200"
                  >
                    <Link href=""><FaFacebookF /></Link>
                  </span>
                   <span
                    
                    className="w-9 h-9 border rounded-full flex justify-center items-center  bg-black text-[white] hover:bg-white hover:text-black duration-200"
                  >
                    <Link href=""><FaTiktok /></Link>
                  </span>
                   <span
                    
                    className="w-9 h-9 border rounded-full flex justify-center items-center  bg-black text-[white] hover:bg-white hover:text-black duration-200"
                  >
                    <Link href=""><CiLinkedin /></Link>
                     </span>
                    <span
                    
                    className="w-9 h-9 border rounded-full flex justify-center items-center  bg-black text-[white] hover:bg-white hover:text-black duration-200"
                  >
                    <Link href=""><IoIosMail /></Link>
                  </span>
                </div>  
  
  
  
  
  
  
  
  </>
}
