import Link from "next/link";
import Image from "next/image";

type Img = {
  image_url: string;
  image_alt?: string;
  image_href?: string; 
};
function normalizeSrc(input?: string): string {
  if (!input || input.trim() === "") return "/imgs/istockphoto-1396814518-612x612.jpg"; 
  let s = input.trim();
  if (s.startsWith("/public/")) s = s.replace(/^\/public/, "");
  if (!s.startsWith("http") && !s.startsWith("/")) s = "/" + s; 
  return s;
}

export default function Largephoto({ image }: { image: Img }) {
  const src = normalizeSrc(image?.image_url);
  const alt = image?.image_alt ?? "image";
  const href = image?.image_href;

  return (
    <div className="relative h-72 sm:h-80 md:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width:768px) 50vw, 100vw"
        className="object-cover"
        priority
      />
      {href ? (
        <Link href={href} className="absolute inset-0" aria-label={alt || "open"} />
      ) : null}
    </div>
  );
}
