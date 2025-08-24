import Image from "next/image";
import React from "react";
interface RightsideblogslatestgalleryProps {
  gallery: string[];
}
export default function Rightsideblogslatestgallery({
  gallery,
}: RightsideblogslatestgalleryProps) {
  return (
    <>
      <h4 className="mt-8 text-[18px] sm:text-[20px] font-semibold text-neutral-900">
        Gallery
      </h4>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {gallery.map((src, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded ring-1 ring-black/5"
          >
            <Image
              src={src}
              alt={`gallery-${i + 1}`}
              fill
              className="object-cover"
              sizes="96px"
              unoptimized
            />
          </div>
        ))}
      </div>
    </>
  );
}
