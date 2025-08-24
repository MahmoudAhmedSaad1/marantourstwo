import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

export default function Firstsectionfooter() {
  return (
    <>
      <div>
        <Image
          className="pb-2 w-[105px]"
          priority
          fetchPriority="high"
          width={100}
          height={100}
          src="/imgs/MARAM-LOGO 1.png"
          alt="Logo"
        />
        <p className="text-[#A7A8A8] text-[12px] font[400]">
          En Maram estamos comprometidos a brindarte un servicio excepcional,
          prestando atención a cada detalle para que tu experiencia de viaje sea
          como ninguna otra.
        </p>
        <ul className="text-white lato py-3 text-[12px] font[600]">
          <li className="flex gap-1 items-center py-[5px]">
            <Link href="">
              <BsFillTelephoneInboundFill className="text-[15px]" />
            </Link>
            1-677-124-44227
          </li>
          <li className="flex gap-1 items-center py-[5px]">
            <Link href="">
              <IoIosMail className="text-[20px]" />
            </Link>
            Mon - Sat 8.00 - 18.00 Sunday CLOSED
          </li>
          <li className="flex gap-1 items-center py-[5px]">
            <Link href="">
              <CiLocationOn className="text-[20px]" />
            </Link>
            184 Main Street West Victoria 8007
          </li>
        </ul>
      </div>
    </>
  );
}
