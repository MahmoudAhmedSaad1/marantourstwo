import React, { useMemo, useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { LuCalendar } from "react-icons/lu";

type Props = {
  field: UseFormRegisterReturn;
  error?: string;
  touched?: boolean;
  /** اختياري: مرّر من الأب watch("departureDate") لتلوين الأيقونة/الحدود بدقة */
  valueFromParent?: string;
};

export default function Formsectiontwodeparturedate({
  field,
  error,
  touched,
  valueFromParent,
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // دمج ref RHF مع ref المحلي
  const setRefs = (el: HTMLInputElement | null) => {
    field.ref(el);
    inputRef.current = el;
  };

  const handleCalendarClick = () => {
    if (inputRef.current) {
      (inputRef.current as HTMLInputElement & { showPicker?: () => void }).showPicker?.();
      inputRef.current.focus();
    }
  };

  const hasValue = useMemo(() => {
    return (valueFromParent ?? inputRef.current?.value ?? "").trim().length > 0;
  }, [valueFromParent]);

  return (
    <div className="col-span-1 relative flex flex-col">
      <label className="mb-1 text-sm font-medium text-gray-700">Departure date</label>

      <div className="relative">
        <LuCalendar
          className={`
            absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 cursor-pointer
            ${error ? "" : hasValue ? "text-[#C49A6C]" : "text-black"}
          `}
          onClick={handleCalendarClick}
        />

        <input
          {...field}        // name, onChange, onBlur, ref (سنستبدله بـ setRefs)
          ref={setRefs}     // ← دمج refs هنا
          type="date"
          className={`
            w-full rounded-lg border bg-white pl-3 pr-10 py-2.5 
            text-sm text-gray-700 outline-none focus:ring-2
            [appearance:textfield] 
            [&::-webkit-calendar-picker-indicator]:opacity-0 
            [&::-webkit-calendar-picker-indicator]:absolute 
            [&::-webkit-calendar-picker-indicator]:right-0

            ${!error && touched ? "border-[#C49A6C] focus:border-[#C49A6C] focus:ring-[#C49A6C]" : ""}
            ${!touched && !error && !hasValue ? "border-gray-200 focus:border-[#C49A6C] focus:ring-[#C49A6C]" : ""}
            ${hasValue && !error ? "border-[#C49A6C]" : ""}
          `}
          placeholder="Departure date"
        />
      </div>

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
