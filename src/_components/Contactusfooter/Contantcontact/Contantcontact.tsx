import Link from "next/link";
import React from "react";

interface ContactfooterType {
  row: {
    page_title: string;
    title: string;
  };
}

interface ContantcontactProps {
  Contactfooter: ContactfooterType;
}

export default function Contantcontact({ Contactfooter }: ContantcontactProps) {
  return <>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-white text-2xl sm:text-3xl  md:text-4xl font-semibold tracking-tight drop-shadow-md">
            {Contactfooter.row.page_title}
          </h1>
          <div className="mt-2 text-sm sm:text-base text-white/85">
            <Link href="/" className="font-medium hover:text-[#C19A6B]">
              Inico
            </Link>
            <span className="mx-2 text-white/70 cursor-pointer hover:text-[#C19A6B]">›</span>
            <Link href="/contact"><span className="cursor-pointer hover:text-[#C19A6B]">{Contactfooter.row.title}</span></Link>
          </div>
        </div>
      </div>
    </>
  ;
}
