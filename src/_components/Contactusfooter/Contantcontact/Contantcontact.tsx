import Link from "next/link";
import React from "react";
export default function Contantcontact() {
  return <>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight drop-shadow-md">
            CONTACT US
          </h1>
          <div className="mt-2 text-sm sm:text-base text-white/85">
            <Link href="/" className="font-medium hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/70">›</span>
            <span>Contact us</span>
          </div>
        </div>
      </div>
    </>
  ;
}
