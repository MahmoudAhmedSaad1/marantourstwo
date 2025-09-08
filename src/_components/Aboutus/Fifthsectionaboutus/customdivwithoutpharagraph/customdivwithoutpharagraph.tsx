"use client";
import React from "react";
import Image from "next/image";

type Props = {
  heading_3: string;
  imageUrl: string;
  alt?: string;

};

export default function Customdivwithoutpharagraph({
  heading_3,
  imageUrl,
  alt = "",

}: Props) {
  return (
    <div className={`text-center `}>
      <h3 className="font-semibold text-[32px] py-1">{heading_3}</h3>

      <div className="flex justify-center">
        <Image
          src={imageUrl}
          alt={alt || heading_3}
          width={250}
          height={200}
        />
      </div>
    </div>
  );
}
