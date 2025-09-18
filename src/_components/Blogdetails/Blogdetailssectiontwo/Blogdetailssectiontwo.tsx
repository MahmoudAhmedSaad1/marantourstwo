"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Blogdetailssectiontwoimage from "./Blogdetailssectiontwoimage/Blogdetailssectiontwoimage";

type ApiImage = {
  image_url: string;
  image_alt?: string;
  image_title?: string;
  position_image?: "Left" | "Right" | "Center";
};
type ApiItem = {
  body: string;
  sort?: number;
  link?: string;
  image?: ApiImage;
};
type Props = {
  items: ApiItem[];
  className?: string;
  dir?: "rtl" | "ltr" | "auto";
};

export default function Blogdetailssectiontwo({ items, className, dir = "auto" }: Props) {
  const flatImages = useMemo(
    () => (items ?? []).map((it) => it?.image).filter(Boolean) as ApiImage[],
    [items]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (index: number) => { setActiveIndex(index); setIsOpen(true); };
  const close = () => { setIsOpen(false); setActiveIndex(null); };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section className={className ?? "max-w-4xl mx-auto px-4 py-10"} dir={dir}>
      <h2 className="text-2xl font-bold mb-4">Índice:</h2>

      {items?.map((item, idx) => {
        const html = item?.body ?? "";
        const pos = item?.image?.position_image;
        const alignClass =
          pos === "Left" ? "justify-start" :
          pos === "Right" ? "justify-end" :
          "justify-center";

        const src = item?.image?.image_url || "";
        const alt = item?.image?.image_alt || item?.image?.image_title || "image";

        const imageIndex =
          item?.image ? flatImages.findIndex((im) => im?.image_url === item.image!.image_url) : -1;

        return (
          <div key={item?.sort ?? idx} className="mb-10">
            {html && (
              <div
                className="prose-neutral max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: html }}
                suppressHydrationWarning
              />
            )}

            {src && (
              <div
                className={`flex mt-3 cursor-pointer ${alignClass}`}
                role="button"
                tabIndex={0}
                onClick={() => imageIndex >= 0 && open(imageIndex)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    imageIndex >= 0 && open(imageIndex);
                  }
                }}
              >
                <Blogdetailssectiontwoimage src={src} alt={alt} />
              </div>
            )}
          </div>
        );
      })}

      {isOpen && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] rounded-xl overflow-hidden bg-white "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 z-[110] rounded-full bg-gray/60 hover:bg-black/80 hover:text-white text-gray border border-gray px-3 py-1 text-sm"
            >
              ✕
            </button>

            <div className="relative w-full h-[80vh]">
              <Image
                src={flatImages[activeIndex].image_url}
                alt={flatImages[activeIndex].image_alt || flatImages[activeIndex].image_title || "image"}
                fill
                className="object-contain "
                priority
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
