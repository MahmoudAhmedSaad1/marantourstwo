import Image from 'next/image'
import React from 'react'

interface PhotoProps {
  avatar: string;
  name: string;
}

export default function Fifthsectionaboutuscontantphotos({t}: {t: PhotoProps}) {
  return <>
      <div className="flex justify-center">
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden ring-4 ring-white shadow">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  </div>
  </>
}
