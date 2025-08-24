"use client";

import React from "react";
import {  LuX } from "react-icons/lu";
import parse, { domToReact } from "html-react-parser";

export default function Included({ packedges }: { packedges: any }) {
  const inclusionHtml: string | undefined = packedges?.exclusion;
  if (!inclusionHtml) return null;

  let i = 0; 

  return (
    <ul className="space-y-3">
      {parse(inclusionHtml, {
        replace: (node: any) => {
          if (node?.name === "li") {
            return (
              <li key={i++} className="flex gap-4 py-1">
                 <span
              className="mt-1 inline-flex h-6 w-6 items-center justify-center
                                 rounded-full bg-[#FAD6D6] ring-1 ring-[#FAD6D6]"
              aria-hidden
            >
              <LuX className="h-3.5 w-3.5 text-[#DA3838]" />
            </span>
                <span className="text-[#5E6D77] text-[15px] sm:text-[16px] md:text-[17px] leading-7 antialiased">
                  {domToReact(node.children)}
                </span>
              </li>
            );
          }
                  
        },
      })}
    </ul>
  );
}
