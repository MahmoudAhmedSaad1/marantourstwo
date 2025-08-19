import React from 'react'
import { getData } from "@/utilities/fetchApi";

export default async function Packedgedetails({params}) {
   const { slug } = await params;
   console.log(slug);
   
      const packedge = await getData(`packages/${slug}?tenant_id=58&language_id=51`);

console.log(packedge.row);

  return <>
  
  {/* <Photos images={images?.row} />
      <Secondsection images={images.row} />
      <Frequantlyquestion freq={images.row}  /> */}
  
  
  
  </>
}
