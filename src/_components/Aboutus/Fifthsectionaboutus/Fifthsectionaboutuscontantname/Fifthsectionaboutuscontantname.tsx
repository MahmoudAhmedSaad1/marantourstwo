import React from 'react'

export default function Fifthsectionaboutuscontantname({t}: {t: {name: string}}) {
  return <>
  <h4 className="mt-2 text-center text-xl sm:text-2xl font-semibold text-black">
                  {t.name}
                </h4>
  </>
}
