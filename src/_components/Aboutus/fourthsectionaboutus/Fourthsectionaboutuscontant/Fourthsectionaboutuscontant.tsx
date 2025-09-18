import React from 'react'

export default function Fourthsectionaboutuscontant({ name, role }: { name: string; role: string }) {
  return <>
  
    <div className="px-6 sm:px-8 pb-6 text-center">
      <h3 className="text-[17px] font-semibold text-black leading-tight">
        {name}
      </h3>
      <p className="mt-2 text-[14px] leading-normal text-[#b9a58a]">
        {role.meta_title}
      </p>
    </div>
  
  </>
}
