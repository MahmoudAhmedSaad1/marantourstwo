import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa6";
import CustomButton from '../custombutton/page';
import Customdiv from '../customp&h&img/page';

export default function Contactar() {
  return <>
    <div id="Contactar" className="     my-5">
      <div className="flex justify-center items-center w-full h-full text-black text-center relative">
        <div className="lineer  w-full h-full ">
          <div className="text-center mt-9">
             <Customdiv pharagraph="Contactar" heading_3="Encuentra tu destino"  />
          </div>
          <div className='contacter grid md:grid-cols-2 lg:grid-cols-3  text-center my-9 w-[50%] mx-auto gap-[16px] md:gap-[90px] '>

            <div className='bg-white py-10 md:py-8 rounded-[8px]'>
              <MdOutlineMail className='mx-auto text-black text-[64.17px] h-[52.5px] my-2' />
              <p className='uppercase font-[500] text-[14px] pt-2'>Dream with <br />us</p>
            </div>
            <div className='bg-white py-10 md:py-8 rounded-[8px]'>

              <FaHeadset className='mx-auto text-black text-[64.17px] h-[52.5px] my-2' />
              <p className='uppercase font-[500] text-[14px] pt-2 '>Speak with an <br /> Expert</p>
            </div>
            <div className='bg-white py-10 md:py-8 rounded-[8px]'>
              <RiMessage2Line className='mx-auto text-black text-[64.17px] h-[52.5px] my-2' />
              <p className='uppercase font-[500] text-[14px] pt-2'>Live Your <br /> Journey</p>
            </div>

          </div>
          <div className='mb-9'>
            {
            <CustomButton title='Contáctenos'  />
          }
          </div>
      
        </div>

      </div>
    </div>
  </>
}
