import React from "react";
import { LuCheck } from "react-icons/lu";
export default function Heightlight() {
  const highlights = [
    "Discover Hollywood and celebrate its iconic landmarks such as the Walk of Fame.",
    "Soak in the views of the ever vibrant City of Angels.",
    "Marvel at the spectacular Hollywood Sign, the quintessential symbol of Los Angeles.",
  ];
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        About this activity
      </h2>
      <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-3">
        Highlights
      </h3>
      <ul className="space-y-3 mb-6">
        {highlights.map((pharagraph, id) => (
          <li key={id} className="flex gap-3">
            <span
              className="mt-1 inline-flex h-6 w-6 items-center justify-center
             rounded-full bg-[#CEF2E5] ring-1 ring-[#CEF2E5]"
              aria-hidden
            >
              <LuCheck className="h-3.5 w-3.5 text-[#10AC58]" />
            </span>
            <span className="text-[#5E6D77] text-[15px] sm:text-[16px] md:text-[17px] leading-7 antialiased">
                {pharagraph}
              </span>
          </li>
        ))}
      </ul>
    </>
  );
}
