"use client";
import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

type ItineraryItem = {
  day: number | string;
  title: string;
  description: string;
};

export default function Frequantlyquestion({
  items = defaultItems,
  defaultOpen = true,
}: {
  items?: ItineraryItem[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState<Record<number, boolean>>(
    () => Object.fromEntries(items.map((_, i) => [i, defaultOpen]))
  );

  const toggle = (i: number) => setOpen((o) => ({ ...o, [i]: !o[i] }));

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className=" w-full md:w-2/3">
        <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-xl p-4 sm:p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Itinerary</h3>

          <div className="space-y-3">
            {items.map((it, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">
                    Day {it.day}
                  </span>

                  <h4 className="text-[15px] sm:text-base font-semibold text-slate-800 tracking-tight">
                    {it.title}
                  </h4>

                  <button
                    onClick={() => toggle(i)}
                    className="ml-auto grid h-7 w-7 place-items-center rounded-full bg-[#C19A6B] text-white hover:brightness-95 transition"
                    aria-label={open[i] ? "collapse day" : "expand day"}
                  >
                    {open[i] ? (
                      <LuMinus className="h-3.5 w-3.5" />
                    ) : (
                      <LuPlus className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                {open[i] && (
                  <p className="mt-3 text-[15px] text-[#667085] leading-7">
                    {it.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const defaultItems: ItineraryItem[] = [
  {
    day: 1,
    title: "Set off on a guided one-hour",
    description:
      "Immerse yourself in the bustling crossroads of the world at the See Forever Theater.",
  },
 
];
