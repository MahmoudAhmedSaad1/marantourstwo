import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function NewsLetter() {


  return <>
    <div className='my-5 news'>
      <div className=' text-center p-5 bg-[#F8F3EE]  '>
        <div className='p-3 mt-7 relative '>
          <Image priority fetchPriority='high' width={100} height={100} src="/imgs/Vector.png" alt="" className="mx-auto absolute top-[17%] right-[42%]" />
          <Image priority fetchPriority='high' width={100} height={100} src="/imgs/Vector.png" alt="" className="mx-auto" />
        </div>
        <h3 className="font-[800] text-[32px] py-1 liner-news  rubik my-1">Join The Newsletter</h3>
        <p className="font-[400] text-[16px] linenews-2">To receive our best monthly deals</p>
        <div className='relative i '>
          <input type="search" placeholder='Enter Your Gmail...' className=' p-2  rounded-[8px] w-[100%] md:w-[40%] my-7 border-2 border-[#C49A6C] ' />
          <span className='bg-[#C19A6B] absolute rounded-tr-[8px] rounded-br-[8px] top-[29px] w-[50px] h-[42px] text-[16px]  right-[0] md:right-[30%] text-[white] flex justify-center items-center ' ><FaArrowRight /></span>
        </div>

      </div>
    </div>


  </>
}
