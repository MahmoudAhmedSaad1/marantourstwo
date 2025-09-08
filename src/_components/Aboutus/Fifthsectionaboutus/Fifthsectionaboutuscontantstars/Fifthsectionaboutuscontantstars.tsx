import React from 'react'
import { FaStar } from 'react-icons/fa6'

export default function Fifthsectionaboutuscontantstars({t}:{t:{stars?:number}}) {
  return <>
     <div className="mt-2 flex items-center justify-center gap-2">
                    {Array.from({ length: t.stars ?? 5 }).map((_, i) => (
                      <FaStar key={i} className="text-[#FFA800] text-xl" />
                    ))}
                  </div>
  </>
}
