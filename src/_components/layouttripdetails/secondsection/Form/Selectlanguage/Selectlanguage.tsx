import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type Option = { value: string; label: string };

type Props = {
  field: UseFormRegisterReturn;     
  options?: Option[];
};

export default function Selectlanguage({
  field,
  options = [
    { value: "it", label: "Italian" },
    { value: "en", label: "English" },
    { value: "es", label: "Espanol" },
    { value: "de", label: "Deutsch" },
  ],
}: Props) {
  return (
    <div className="col-span-1">


      <div className="relative">
        <select
          {...field}  
          className="
            w-full appearance-none rounded-lg border border-gray-300 bg-white
            px-3 py-2.5 pr-9 text-sm text-gray-800 outline-none transition-all
            focus:border-amber-500 focus:ring-2 focus:ring-amber-300
            cursor-pointer
          "
        >
          <option value="">Selecciona idioma</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
        >
          <path d="M5.25 7.5L10 12.25 14.75 7.5H5.25z" />
        </svg>
      </div>
    </div>
  );
}
