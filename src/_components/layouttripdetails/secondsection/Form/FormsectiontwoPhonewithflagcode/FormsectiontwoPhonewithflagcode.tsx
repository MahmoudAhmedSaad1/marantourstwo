import React from 'react'
import { UseFormRegisterReturn } from "react-hook-form";
type Props = {
  field: UseFormRegisterReturn;
  error?: string;
  touched?: boolean;
};
export default function FormsectiontwoPhonewithflagcode({
  field,
  error,
  touched,
}: Props) {
  const id = "input-Phone";
  return <>
     <div>
       <input
        id={id}
        type="text"
      {...field}
      
          className={`mt-1 block w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C19A6B] focus:border-transparent
          ${
            touched && error
              ? "border-red-500 focus:ring-red-300"
              : "border-neutral-200 focus:ring-[#C19A6B]"
          }
          focus:outline-none focus:ring-2`}
          aria-invalid={!!(touched && error)}
          aria-describedby={touched && error ? `${id}-error` : undefined}
          placeholder="Enter your phone"
      />
       {touched && error && (
        <p className="text-red-600 text-sm mb-1" id={`${id}-error`}>
          {error}
        </p>
      )}
        </div>
  </>
}
