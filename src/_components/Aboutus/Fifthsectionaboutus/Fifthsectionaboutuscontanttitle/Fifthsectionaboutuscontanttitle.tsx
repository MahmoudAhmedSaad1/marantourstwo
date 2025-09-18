import React from 'react'

export default function Fifthsectionaboutuscontanttitle({t}:{t:{title:string}}) {
  return <>
    <h3 className="mt-2 text-center font-bold text-zinc-900 text-2xl sm:text-xl leading-tight">
                  {t.title}
                </h3>
  </>
}
