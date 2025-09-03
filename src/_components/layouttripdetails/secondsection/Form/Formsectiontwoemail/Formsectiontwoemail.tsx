import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
type Props = {
  field: UseFormRegisterReturn;
  error?: string;
  touched?: boolean;
};
export default function Formsectiontwoemail({ field, error, touched }: Props) {
  return (
    <>
      <div className="col-span-1 relative">
        <input
          {...field}
          type="email"
          className={`
    w-full rounded-lg border px-3 py-2.5 text-sm outline-none 
    placeholder-gray-400
    ${error ? "border-red-500 focus:ring-2 focus:ring-red-300 bg-white" : ""}
    ${
      !error && touched
        ? "border-gray-200 font-light focus:ring-2 focus:ring-[#C49A6C] bg-white"
        : ""
    }
    ${
      !touched && !error
        ? "border-gray-200 focus:ring-2 focus:ring-[#C49A6C] bg-white"
        : ""
    }
  `}
          placeholder="E-mail"
        />

         {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
      </div>
    </>
  );
}
