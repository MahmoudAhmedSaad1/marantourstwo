import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { IoEarth } from "react-icons/io5";
import { TbLetterV } from "react-icons/tb";
import Link from 'next/link';
export default function CustomiconFooter() {
  return <>
  
  
  <div className="container mx-auto pt-5 border-t-[2px] my-3 border-[#383938] md:flex justify-between items-center ">
                      <p className="text-[14px] font-[400] lato py-2 text-white">© 2024 MARAMTOURS</p>
                      <ul className="flex gap-5 text-white py-4 md:py-0">
                          <li className="hover:text-[#C19A6B] duration-200"> <Link className='hover:border-[#C49A6C] hover:bg-white hover:text-[#C49A6C] duration-300' href=""><FaTwitter /></Link> </li>
                          <li className="hover:text-[#C19A6B] duration-200"> <Link className='hover:border-[#C49A6C] hover:bg-white hover:text-[#C49A6C] duration-300' href=""><FaFacebookF /></Link></li>
                          <li className="hover:text-[#C19A6B] duration-200"> <Link className='hover:border-[#C49A6C] hover:bg-white hover:text-[#C49A6C] duration-300'  href=""><ImInstagram /></Link></li>
                          <li className="hover:text-[#C19A6B] duration-200"> <Link className='hover:border-[#C49A6C] hover:bg-white hover:text-[#C49A6C] duration-300'  href=""><CiLinkedin /></Link></li>
                          <li className="hover:text-[#C19A6B] duration-200"> <Link className='hover:border-[#C49A6C] hover:bg-white hover:text-[#C49A6C] duration-300'  href=""><FaPinterestP /></Link></li>
                          <li className="hover:text-[#C19A6B] duration-200"> <Link className='hover:border-[#C49A6C] hover:bg-white hover:text-[#C49A6C] duration-300'  href=""><TbLetterV /></Link></li>
                          <li className="hover:text-[#C19A6B] duration-200"><Link  className='hover:border-[#C49A6C] hover:bg-white hover:text-[#C49A6C] duration-300'  href=""><IoEarth /></Link></li>
                      </ul>
                  </div>
  
  
  </>
}
