import Link from 'next/link'
import React from 'react'

export default function CustomButtontwo({title}: {title: string}) {
  return <>
      <button className=" bg-white py-2 px-10 cursor-pointer text-[#C49A6C] border border-[#C49A6C] hover:border-[#C49A6C] rounded-sm hover:bg-white
     hover:text-[#C49A6C] duration-300 uppercase text-[14px] font-[700]"> <Link href="/Listtrip">{title}</Link></button>
  
  </>
}
