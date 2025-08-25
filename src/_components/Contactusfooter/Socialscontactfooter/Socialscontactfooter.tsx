import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTiktok } from 'react-icons/si';
export default function Socialscontactfooter() {
  return <>
   <div className="mt-8">
                <p className="font-bold text-[#000000]">Follow Us</p>
            <div className="mt-3 flex items-center gap-3">
              <Link href="#" aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full  bg-[#3B5998]">
                <FaFacebookF className="h-5 w-5 text-[#3B5998] pt-1 bg-white rounded-full " />
              </Link>
              <Link href="#" aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#CF3881]  ">
                <FaInstagram className="h-5 w-5 text-[#FFFFFF]" />
              </Link>
              <Link href="#" aria-label="TikTok"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#000000]">
                <SiTiktok className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>
  
  </>
}
