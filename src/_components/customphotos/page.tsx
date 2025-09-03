import Image from 'next/image'
import React from 'react'

export default function Customphotos() {
  return (
    <div className="container mx-auto border border-dashed border-[#C19A6B] my-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 rounded-[8px]">
      
      <div className="border-r border-b lg:border-b-0 border-dashed border-[#C19A6B] p-7">
        <Image src="/imgs/logo 1 (1).png" width={100} height={100} alt="Logo" className="w-full h-auto" />
      </div>

      <div className="border-r border-b lg:border-b-0 border-dashed border-[#C19A6B] p-7">
        <Image src="/imgs/logo 1 (1).png" width={100} height={100} alt="Logo" className="w-full h-auto" />
      </div>

      <div className="border-r border-b lg:border-b-0 border-dashed border-[#C19A6B] p-7">
        <Image src="/imgs/logo 1 (1).png" width={100} height={100} alt="Logo" className="w-full h-auto" />
      </div>

      <div className="border-r border-b lg:border-b-0 border-dashed border-[#C19A6B] p-7">
        <Image src="/imgs/logo 1 (1).png" width={100} height={100} alt="Logo" className="w-full h-auto" />
      </div>

      <div className="border-r border-b lg:border-b-0 border-dashed border-[#C19A6B] p-7">
        <Image src="/imgs/logo 1 (1).png" width={100} height={100} alt="Logo" className="w-full h-auto" />
      </div>

      <div className="border-r border-b lg:border-b-0 border-dashed border-[#C19A6B] p-7">
        <Image src="/imgs/logo 1 (1).png" width={100} height={100} alt="Logo" className="w-full h-auto" />
      </div>

    </div>
  )
}
