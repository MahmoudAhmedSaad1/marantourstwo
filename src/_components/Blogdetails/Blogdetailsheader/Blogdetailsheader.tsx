import Link from 'next/link'
import React from 'react'
export default function Blogdetailsheader() {
  return <>
   <header className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 lg:py-2">
        <h1 className="text-center font-extrabold tracking-tight 
                       leading-tight text-xl text-[30px]">
          Mi primera visita al Grand Egyptian Museum
        </h1>
        <p className="mt-2 sm:mt-2 text-center text-sm sm:text-base text-gray-600 cursor-pointer ">
          <Link href="/" className='hover:text-[#C49A6C]'>Inicio &gt;</Link> <Link className='hover:text-[#C49A6C]' href="/blogs">blog /</Link>  <span className='hover:text-[#C49A6C]'>Mi primera visita al Grand Egyptian Museum</span>
        </p>
      </div>
    </header>
  
  </>
}
