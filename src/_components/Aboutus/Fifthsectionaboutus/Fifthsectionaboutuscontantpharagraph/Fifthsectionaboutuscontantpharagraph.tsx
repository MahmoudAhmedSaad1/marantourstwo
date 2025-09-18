// Fifthsectionaboutuscontantpharagraph.tsx
import React from 'react'
import he from 'he'

type Props = { t: { body: string } }

export default function Fifthsectionaboutuscontantpharagraph({ t }: Props) {
  const decoded = he.decode(t.body ?? '')

  return (
    <p className="inline-block w-fit max-w-full text-center text-base leading-relaxed text-[#00000080] break-words">
      {decoded}
    </p>
  )
}
