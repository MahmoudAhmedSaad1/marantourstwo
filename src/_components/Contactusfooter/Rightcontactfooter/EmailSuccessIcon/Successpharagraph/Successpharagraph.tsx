import React from 'react'
type Props = {
  pharagraph: string ;
};
export default function Successpharagraph({pharagraph}:Props) {
  return <>
  <p className="mt-5 text-lg md:text-[23px] md:font-light  sm:text-lg  md:text-xl leading-relaxed text-gray-700">
         {pharagraph}
        </p>
  
  </>
}
