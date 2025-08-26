import Image from "next/image";
import React from "react";
export default function Leftsideblogsimage({
  src,
  alt,
}: {
  src: string;
  alt?: string;
}) {
  // console.log(src);
  // console.log(alt);
  const FALLBACK = "/imgs/istockphoto-1396814518-612x612.jpg";
  return (
    <>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md shadow ring-1 ring-black/5">
        <Image
          src={src || FALLBACK}
          alt={alt ?? ""}
          fill
          className="object-cover"
          sizes="(min-width:1024px) 66vw, 100vw"
          unoptimized
          priority
        />
      </div>
    </>
  );
}
