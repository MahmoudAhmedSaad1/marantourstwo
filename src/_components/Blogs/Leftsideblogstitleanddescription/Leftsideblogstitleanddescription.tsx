import React from "react";
import Link from "next/link";

interface LeftsideblogstitleanddescriptionProps {
  title: string;
  body: string;
}

export default function Leftsideblogstitleanddescription({ title , body }: LeftsideblogstitleanddescriptionProps) {
  // console.log(body);
  // console.log(title);
  
  return (
    
    <>
      <div className="min-w-0">
      
          <Link
            href={"/"}
            className="block text-[22px] sm:text-[24px] md:text-[26px] font-semibold text-[#303030] "
          >
          <h3 className="text-[22px] sm:text-[24px] md:text-[26px] font-semibold text-neutral-900">
            {title}
          </h3>
          </Link>
        <p className="mt-3 text-[16px] md:text-[17px] leading-[30px] text-[#8E8E8E] antialiased">
          {body}
        </p>
      </div>
    </>
  );
}
