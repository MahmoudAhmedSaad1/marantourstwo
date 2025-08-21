import React from 'react'
import { LuCheck } from "react-icons/lu";
import parse from "html-react-parser";

export default function Included({packedges}) {
  const included = [packedges];
    
  return <>
  
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
                  {parse(pharagraph.inclusion)}
                </span>
              </li>
            ))}
          </ul>
  
  </>
}
