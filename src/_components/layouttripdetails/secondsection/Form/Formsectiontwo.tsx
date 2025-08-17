"use client";
import React, { useState } from "react";
import {
  LuCalendar,
  LuUser,
  LuUserPlus,
  LuUserMinus,
} from "react-icons/lu";
import { PiBabyBold } from "react-icons/pi";
import Selectlanguage from "./Selectlanguage/Selectlanguage";
export default function Formsectiontwo() {
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);

  return (
    <aside>
      <div className="rounded-2xl bg-[#F6EFE7] ring-1 ring-black/5 shadow-xl p-5">
        <h4 className="text-center text-lg font-semibold text-gray-900 mb-4">
          Request a Quote
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {/* Name */}
          <div className="col-span-1 relative">
            <input
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="Name"
            />
          </div>

          {/* Email */}
          <div className="col-span-1 relative">
            <input
              type="email"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="E-mail"
            />
          </div>

          {/* Arrival date */}
          <div className="col-span-1 relative">
            <input
              type="date"
              className="w-full rounded-lg border border-gray-200 bg-white pl-3 pr-10 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="Arrival date"
            />
            <LuCalendar className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          {/* Departure date */}
          <div className="col-span-1 relative">
            <input
              type="date"
              className="w-full rounded-lg border border-gray-200 bg-white pl-3 pr-10 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="Departure date"
            />
            <LuCalendar className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          {/* Language (select بشكل بسيط مع سهم) */}
          <Selectlanguage/>

          {/* Phone with flag + code */}
          <div className="col-span-1">
            <div className="flex items-center rounded-lg border border-gray-200 bg-white overflow-hidden">
              <span className="pl-3 pr-2 text-sm select-none">FL</span>
              <span className="pr-2 text-sm text-gray-600 select-none">+39</span>
              <input
                type="tel"
                className="w-full px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none"
                placeholder="Numero"
              />
            </div>
          </div>

          {/* Adults */}
          <div className="col-span-1">
            <p className="mb-1 text-sm font-medium text-gray-800 flex items-center gap-2">
              <LuUser className="h-4 w-4" /> Adults
            </p>
            <div className="grid grid-cols-3 items-center rounded-lg border border-gray-200 bg-white">
              <button
                type="button"
                onClick={() => setAdults(Math.max(0, adults - 1))}
                className="flex items-center justify-center py-2 text-[#C19A6B] hover:bg-amber-50 rounded-l-lg"
                aria-label="decrease adults"
              >
                <LuUserMinus className="h-5 w-5" />
              </button>
              <span className="text-center text-sm font-semibold">{adults}</span>
              <button
                type="button"
                onClick={() => setAdults(adults + 1)}
                className="flex items-center justify-center py-2 text-[#C19A6B] hover:bg-amber-50 rounded-r-lg"
                aria-label="increase adults"
              >
                <LuUserPlus className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Bambini */}
          <div className="col-span-1">
            <p className="mb-1 text-sm font-medium text-gray-800 flex items-center gap-2">
              <PiBabyBold className="h-4 w-4" /> Bambini
            </p>
            <div className="grid grid-cols-3 items-center rounded-lg border border-gray-200 bg-white">
              <button
                type="button"
                onClick={() => setKids(Math.max(0, kids - 1))}
                className="flex items-center justify-center py-2 text-[#C19A6B] hover:bg-amber-50 rounded-l-lg"
                aria-label="decrease kids"
              >
                <LuUserMinus className="h-5 w-5" />
              </button>
              <span className="text-center text-sm font-semibold">{kids}</span>
              <button
                type="button"
                onClick={() => setKids(kids + 1)}
                className="flex items-center justify-center py-2 text-[#C19A6B] hover:bg-amber-50 rounded-r-lg"
                aria-label="increase kids"
              >
                <LuUserPlus className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Message */}
          <div className="col-span-2">
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>

          {/* Submit */}
          <div className="col-span-2">
            <button
              className="w-full rounded-lg bg-[#C19A6B] text-white py-3 font-semibold hover:brightness-95 transition-colors"
              type="button"
            >
              Send confirmation
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
