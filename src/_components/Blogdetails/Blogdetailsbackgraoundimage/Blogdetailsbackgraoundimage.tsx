import Image from "next/image";
import React from "react";

type BlogDetails = {
  image_url?: string | null;
  image_alt?: string | null;
};

export default function Blogdetailsbackgraoundimage({ blogdetails }: { blogdetails?: BlogDetails }) {
  const fellBack = "/imgs/istockphoto-1396814518-612x612.jpg";
  const src = blogdetails?.image_url  || fellBack;
  const alt = blogdetails?.image_alt?.trim() || "blog cover image";

  return (
    <div className="relative w-full h-[60vh]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-Contain"
        priority
        sizes="100vw"
      />
    </div>
  );
}
