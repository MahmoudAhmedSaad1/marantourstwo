"use client"
import React from 'react';
import CustomButton from "@/_components/custombutton/page";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSelector } from 'react-redux';


interface slider {
  id: number;
  title: string;
  body: string;
  button: string;
  image: {
    image_url: string;
    image_alt: string;
    image_title: string;
  };
}

export default function Home1({ sliders }: { sliders: slider[] }) {
  return (
    <>
      <Swiper className="mySwiper">
        {sliders.map((slider: slider, id) => (
          <SwiperSlide key={id}>
            <div className="h-[400px] md:h-[600px] relative  md:mt-0">
              <div className="bg-amber-600 absolute inset-0">
                
                <Image
                  src={slider?.image?.image_url}
                  fill
                  className="home h-full w-screen"
                  alt={slider?.image?.image_alt}
                />
              </div>
              <div className="flex justify-center items-center w-full h-full text-white text-center absolute top-0">
                <div className="absolute z-40 mb-10">
                  <h1 className="text-[44px] md:text-[70px] font-[600] w-[75%] mx-auto">
                    {slider?.title}
                  </h1>
                 
                  <p className="text-[20px] font-[500] py-2">
                    {slider?.image?.image_title}
                  </p>
                  <CustomButton title={slider?.button} />

                </div>
                
                <div className="bg-[#00000040] w-full h-full" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </>
  );
}
