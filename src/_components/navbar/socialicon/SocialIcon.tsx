import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
export default function SocialIcon() {
  return <>
  <Link
              href="https://facebook.com"
              target="_blank"
              
            >
              <FaFacebookF className="text-[#10221B] text-[12.31px] hover:text-yellow-600 transition duration-200" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
             
            >
              <FaInstagram className="text-[#10221B] text-[12.31px] hover:text-yellow-600 transition duration-200" />
            </Link>
  
  
  </>
}
