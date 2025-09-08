
import React from 'react';
type data = {
    pharagraph: string;
    heading_3: string;
    imageUrl: string;
}
export default function Customdiv({pharagraph,heading_3,imageUrl} : data) {
  return <>
  <p className="font-[400] text-[16px]">{pharagraph}</p>
            <h3 className="font-[600] text-[32px] py-1">{heading_3}</h3>
            <img  src={imageUrl} alt="" className="mx-auto" />
  </>
}
