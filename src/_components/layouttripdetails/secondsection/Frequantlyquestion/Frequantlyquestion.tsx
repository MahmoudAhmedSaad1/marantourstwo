"use client";
import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import PlateForkKnife from "./Icon/Iconsfr";
import parse from "html-react-parser";
export default function Frequantlyquestion({ packedges }) {

  const [open, setOpen] = useState([]);

  const toggle = (i) => {
    setOpen((prev) => {
      const newOpen = [...prev];
      newOpen[i] = !newOpen[i];
      return newOpen;
    });
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 cursor-pointer">
      <div className="w-full md:w-2/3">
        <div className="rounded-3xl bg-white  p-4 sm:p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Itinerary
          </h3>
          <div className="space-y-3">
            {packedges.map((it, i) => (
              <div
                key={i}
                 onClick={() => toggle(i)}
                 aria-label={open[i] ? "collapse day" : "expand day"}
                className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-[#C19A6B]">
                    Dia {it.sort}
                  </span>

                  <h4 className="text-[15px] sm:text-base font-semibold text-slate-800 tracking-tight">
                    {it.title}
                  </h4>

                  <button
                    
                    className="ml-auto grid h-7 w-7 place-items-center rounded-full bg-[#C19A6B] text-white hover:brightness-95 transition"
                    
                  >
                    {open[i] ? (
                      <LuMinus className="h-3.5 w-3.5 " />
                    ) : (
                      <LuPlus className="h-3.5 w-3.5 " />
                    )}
                  </button>
                </div>

                {open[i] && (
                  <div>
                    <p className="mt-3 text-[15px] text-[#667085] leading-7">
                      {parse(it.body)}
                      
                    </p>
                    <p className=" text-[15px] text-[#667085] leading-7 flex items-center ">
                      <PlateForkKnife size={40} color="#C19A6B" />
                      <span className="text-[#7f8186] font-semibold text-bsBerkeleyBlue">{it.meals}</span>
                    </p>
                    
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
