import Image from "next/image";
import React from "react";
type data = {
  pharagraph: string;
  heading_3: string;
};
export default function Customdiv({ pharagraph, heading_3 }: data) {
  return (
    <>
      <p className="font-[400] text-[16px]">{pharagraph}</p>
      <h3 className="font-[600] text-[32px] py-1">{heading_3}</h3>
      <Image
        src="/imgs/Vector.png"
        alt=""
        width={200}
        height={40}
        className="mx-auto w-40 h-auto "
      />
    </>
  );
}
