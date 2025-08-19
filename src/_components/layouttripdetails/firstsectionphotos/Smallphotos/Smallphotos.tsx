import React from "react";
import Image from "next/image";
import Link from "next/link";
type Img = { src: string;  image_alt: string ; image_url : string ; alt: string; href?: string };
export default function Smallphotos({ images }: { images: Img[] }) {

  
  return (
    <>
      <div
        className="grid grid-cols-2 grid-rows-2 
                gap-2 sm:gap-3 md:gap-4 lg:gap-5 
                h-72 sm:h-80 md:h-[460px] lg:h-[520px]"
      >
        {images.slice(1).map((img, i) => (
          <div
            key={img.src ?? i}
            className="group relative h-full rounded-2xl overflow-hidden"
          >
            <Image
              src={img.image_url}
              alt={img.image_alt ?? ""}
              fill
              sizes="(min-width:1024px) 25vw, (min-width:768px) 25vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10 shadow-sm transition-all duration-300 group-hover:ring-black/20 group-hover:shadow-lg" />
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            {img.href ? (
              <Link
                href={img.href}
                className="absolute inset-0 z-10"
                aria-label={img.alt ?? `open-${i + 1}`}
              />
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}
