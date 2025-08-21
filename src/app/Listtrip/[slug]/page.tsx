import React from 'react'
import { getData } from "@/utilities/fetchApi";

import Photos from "@/_components/layouttripdetails/firstsectionphotos/photos";
import Frequantlyquestion from "@/_components/layouttripdetails/secondsection/Frequantlyquestion/Frequantlyquestion";
import Secondsection from "@/_components/layouttripdetails/secondsection/Secondsection";
import Completecard from '@/_components/customcard/completecard/Completecard';
export default async function Packedgedetails({params}) {
   const { slug } = await params;
     const packedges = await getData("packages/viaje-completo-a-egipto?tenant_id=58&language_id=51" );
  return <>
  <Photos packedges={packedges.row.galleries} />
  <Secondsection packedges={packedges.row} slug={slug}   />
  
  <Frequantlyquestion packedges={packedges.row.itineraries}/>
   <Completecard />
  </>
}
