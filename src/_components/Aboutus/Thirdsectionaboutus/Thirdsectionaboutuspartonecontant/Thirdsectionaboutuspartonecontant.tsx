import CustomButtontwo from '@/_components/custombutton/CustomButtontwo/CustomButtontwo'
import React from 'react'

export default function Thirdsectionaboutuspartonecontant({desc, title}:{desc?: string, title: string}) {
  return (
    <>
      <div className="px-2 pt-2 pb-6">
        <h3 className="text-center  text-xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h3>

        {desc && (
          <p className="mt-0 text-center text-[16px] leading-relaxed text-[#444]">
            {desc}
          </p>
        )}

        <div className="mt-2 w-full sm:w-4/5 mx-auto">
          
          <CustomButtontwo title="DESCUBRE MÁS" />
        </div>
      </div>
    </>
  )
}
