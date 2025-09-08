import CustomButton from '@/_components/custombutton/page'
import React from 'react'
export default function Thirdsectionaboutuspartonecontant({desc,cta,title}:{desc?:string,cta:string,title:string}) {
  return <>
      <div className="px-2 pt-2 pb-6">
                      <h3 className="text-center text-2xl font-semibold tracking-tight text-zinc-900">
                        {title}
                      </h3>
                      {desc && (
                        <p className="mt-0 text-center text-[16px] leading-relaxed text-[#444]">
                          {desc}
                        </p>
                      )}
                      <div className="mt-2 ">
                        <CustomButton title={cta} />
                      </div>
                    </div>
  </>
}
