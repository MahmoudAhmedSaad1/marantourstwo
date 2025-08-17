import React from "react";
import { LuCheck, LuX } from "react-icons/lu";

export default function IncludedandExcluded() {
  const included = [
    "Specialized bilingual guide",
    "Private Transport",
    "Entrance fees (Cable and car and Moon Valley)",
    "Box lunch water, banana apple and chocolate",
  ];

  const excluded = ["Additional Services", "Insurance", "Drink", "Tickets"];
  return (
    <>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        Included/Excluded
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        <ul className="space-y-3">
          {included.map((pharagraph, id) => (
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
        <ul className="space-y-3">
          {excluded.map((pharagraph, id) => (
            <li key={id} className="flex gap-3 ">
              <span
                className="mt-1 inline-flex h-6 w-6 items-center justify-center
                               rounded-full bg-[#FAD6D6] ring-1 ring-[#FAD6D6]"
                aria-hidden
              >
                <LuX className="h-3.5 w-3.5 text-[#DA3838]" />
              </span>
              <span className="text-[#5E6D77] text-[15px] sm:text-[16px] md:text-[17px] leading-7 antialiased">
                {pharagraph}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
