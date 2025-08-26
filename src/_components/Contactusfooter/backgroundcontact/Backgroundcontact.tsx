import Image from 'next/image'
import React from 'react'
interface ContactfooterProps {
  Contactfooter: {
    row: {
      image?: string;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
}
export default function Backgroundcontact({ Contactfooter }: ContactfooterProps) {
    // console.log(Contactfooter.row);
  return <>
    <Image
        src={Contactfooter.row.image ?? "/imgs/istockphoto-1396814518-612x612.jpg"}
        alt="tour image"
        fill
        className="object-cover "
        priority
        unoptimized
      />
  </>
}
