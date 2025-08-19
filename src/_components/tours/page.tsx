"use client"
import Image from 'next/image'
import React from 'react'

export default function Tours() {
    return <>
        <section className="tours container mx-auto ps-4 md:ps-0 my-20">
            <div className='grid md:grid-cols-2 gap-1 md:items-center'>
                <div className='ms-7 lg:ms-40 '>
                    <div className="main-img relative">
                        <Image priority fetchPriority='high' width={100} height={100} className='w-[325.4px] md:w-[434.1px] rounded-bl-[31.59px] rounded-tr-[31.59px] rounded-br-[31.59px] z-50' src="/imgs/Figure.png" alt="Tours image" />
                        <Image priority fetchPriority='high' width={100} height={100} className='absolute top-0 left-3.5 z-30' src="/imgs/div.about-two__logo.png" alt="" />
                        <Image priority fetchPriority='high' width={100} height={100} className='absolute top-[241px] left-[239px] w-[159.2px] md:w-[212.4px] md:-left-[104px] md:top-[275px] border-[5px] border-white rounded-[18.95px] z-30' src="/imgs/Link → image-21.jpg.png" alt="" />
                        <Image priority fetchPriority='high' width={100} height={100} className='hidden md:block absolute -z-10 -top-10 -left-30' src="/imgs/Section → Section.png" alt="" />
                    </div>
                </div>
                <div className='mt-10 md:mt-0 w-full  '>
                    <p className='text-[#C19A6B] font-[600] py-2 px-2.5 bg-[#F6F6F6] rounded-lg w-[120px] kumbh'>Maram Tours</p>
                    <h2 className='py-2 uppercase text-[24px] md:text-[32px] font-[500] w-[318px] md:w-[486.4px]' >Maram Un viaje hacia tu destino</h2>
                    <p className='py-2 text-[14px] md:text-[20px] font-[400]  text-[#565050] lora'>En Maram estamos comprometidos a brindarte un servicio excepcional, prestando atención a cada detalle para que tu experiencia de viaje sea como ninguna otra.
                        Trabajamos con guías locales expertos y seleccionamos los mejores alojamientos y actividades, asegurándonos de que estés inmerso en la cultura local.
                        Tu única preocupación será disfrutarlo al máximo.</p>
                </div>
            </div>
        </section>
    </>
}