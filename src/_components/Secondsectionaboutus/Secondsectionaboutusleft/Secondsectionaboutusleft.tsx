import React from "react";

type HtmlChunk = string | { body?: string; html?: string; id?: string | number };

export default function Secondsectionaboutusleft({
  aboutUs,
}: {
  aboutUs: HtmlChunk | HtmlChunk[];
}) {
  const items: HtmlChunk[] = Array.isArray(aboutUs) ? aboutUs : [aboutUs];

  return (
    <div className="order-2 lg:order-1 mt-5" dir="auto">
      {items.map((it, idx) => {
        const html = typeof it === "string" ? it : it?.body ?? it?.html ?? "";
        if (!html) return null;

        return (
          <article
            key={typeof it === "string" ? idx : it?.id ?? idx}
            className="
              max-w-3xl
              [&_h1]:text-4xl sm:[&_h1]:text-5xl lg:[&_h1]:text-6xl
              [&_h1]:font-extrabold [&_h1]:leading-tight [&_h1]:tracking-tight [&_h1]:text-black [&_h1]:mb-3
              [&_p]:text-lg [&_p]:leading-8 [&_p]:text-[#444]
              [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-black
              [&_strong]:font-semibold
              [&_a]:text-[#3598db] [&_a]:underline
            "
            suppressHydrationWarning
          >
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        );
      })}
    </div>
  );
}
