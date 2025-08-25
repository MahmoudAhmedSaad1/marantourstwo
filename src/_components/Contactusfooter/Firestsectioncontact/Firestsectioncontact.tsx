import React from 'react'
import Backgroundcontact from '../backgroundcontact/Backgroundcontact'
import Contantcontact from '../Contantcontact/Contantcontact'
export default function Firestsectioncontact() {
  return <>
  <section className="relative w-full mb-10">
    <div className="relative h-[70vh] min-h-[340px] overflow-hidden">
    <Backgroundcontact/>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/15" />
     <Contantcontact/>
    </div>
    <div className="h-px w-full bg-neutral-200/70" />
  </section>
  </>
}
