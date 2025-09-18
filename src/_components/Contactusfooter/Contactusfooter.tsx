import React from 'react'
import Firestsectioncontact from './Firestsectioncontact/Firestsectioncontact'
import Secondsection from './Secondsection/Secondsection'
import { getData } from '@/utilities/fetchApi';
export default async  function Contactusfooter() {
   const Contactfooter = await getData(
         "pages/contactanos?tenant_id=58&language_id=51"
       );
  return <>
<Firestsectioncontact Contactfooter={Contactfooter.row}   />
<Secondsection/>
</>
}
