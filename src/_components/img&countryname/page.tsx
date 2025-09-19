import Image from "next/image";
import React from "react";
type country = {
  imageUrl: string;
  imagealt: string;
  title: string;
};
export default function Img_Countryname({
  imageUrl,
  title,
  imagealt,
}: country) {
  return (
    <>
      <div className="px-10   text-center relative md:p-[0] ">
        <div className="w-full h-[360px] bg-white p-[15px] hover:p-2 duration-300 rounded-[10px]">
          <div className="relative w-full h-full">
            <Image
              fill
              src={imageUrl || "/imgs/istockphoto-1396814518-612x612.jpg"}
              alt={imagealt || "image"}
              quality={100}
              loading="lazy"
              sizes="(max-width:768px) 70vw, (max-width:1200px) 50vw, 33vw"
              className="object-cover "
            />
          </div>
        </div>

        <p className="absolute bottom-[10%] left-[15%] md:bottom-[10%] md:left-[10%]  font-[900] text-[18px]  text-white uppercase L-spacing">
          {title}
        </p>
      </div>
    </>
  );
}
