import React from "react";
import { LuX } from "react-icons/lu";
import parse from "html-react-parser";

export default function Excluded({ packedges }) {
  const excluded = [packedges];

  return (
    <>
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
              {parse(pharagraph.exclusion)}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
