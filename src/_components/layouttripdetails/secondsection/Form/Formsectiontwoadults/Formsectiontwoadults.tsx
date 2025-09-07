"use client";
import React, { useEffect, useState } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { LuUser, LuUserMinus, LuUserPlus } from "react-icons/lu";

type Props = {
  field: UseFormRegisterReturn;
  min?: number;
  max?: number;
};

export default function Formsectiontwoadults({ field, min = 0, max = 100 }: Props) {
  const [adults, setAdults] = useState<number>(min);

  // مزامنة أولية مع defaultValues لو موجودة
  useEffect(() => {
    const initial: unknown = (field as any)?.value;
    if (initial !== undefined && initial !== null && !Number.isNaN(Number(initial))) {
      setAdults(Number(initial));
    }
  }, [field]);

const setVal = (next: number) => {
  const clamped = Math.min(max, Math.max(min, next));
  setAdults(clamped);
  field.onChange({
    target: { name: field.name, value: String(clamped) }, // 👈 مهم
    type: "change",
  } as any);
};

  return (
    <div className="col-span-1">
      <p className="mb-1 text-sm font-medium text-gray-800 flex items-center gap-2">
        <LuUser className="h-4 w-4" /> Adults
      </p>

      <div className="grid grid-cols-3 items-center rounded-lg border border-gray-200 bg-white focus-within:ring-2 focus-within:ring-[#C19A6C]">
        <button
          type="button"
          onClick={() => setVal(adults - 1)}
          disabled={adults <= min}
          className="flex items-center cursor-pointer justify-center py-2 text-[#C19A6B] hover:bg-amber-50 rounded-l-lg disabled:opacity-40"
          aria-label="decrease adults"
        >
          <LuUserMinus className="h-5 w-5" />
        </button>

        <span
          className="text-center text-sm font-semibold select-none"
          role="spinbutton"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={adults}
        >
          {adults}
        </span>

        <button
          type="button"
          onClick={() => setVal(adults + 1)}
          disabled={adults >= max}
          className="flex items-center cursor-pointer justify-center py-2 text-[#C19A6B] hover:bg-amber-50 rounded-r-lg disabled:opacity-40"
          aria-label="increase adults"
        >
          <LuUserPlus className="h-5 w-5" />
        </button>

        <input
          type="number"
          {...field}                       
          value={adults}                  
          onChange={(e) => setVal(Number(e.target.value || 0))}
          className="sr-only"
          min={min}
          max={max}
          inputMode="numeric"
        />
      </div>
    </div>
  );
}
