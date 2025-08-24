import Image from 'next/image'
import React from 'react'
type MainProps = {
  img: string;
  title: string;
};
export default function Leftsideblogsimage({ main }: { main: MainProps }) {
  return <>
  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md shadow ring-1 ring-black/5">
              <Image
                src={main.img}
                alt={main.title}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 66vw, 100vw"
                unoptimized
                priority
              />
            </div>
  </>
}
