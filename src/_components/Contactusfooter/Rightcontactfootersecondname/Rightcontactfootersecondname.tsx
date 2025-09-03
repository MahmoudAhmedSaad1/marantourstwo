import React from 'react'
import { UseFormRegisterReturn } from "react-hook-form";


type Props = {
  field: UseFormRegisterReturn; 
  error?: string;
  touched?: boolean;
  placeholder?: string;
}; 


export default function Rightcontactfootersecondname({
  field,
  error,
  touched,
  placeholder = "Last name",
}: Props) {
  const id = "input-lastName";
  return <>
  <div>


            <label htmlFor={id} className="block text-sm text-neutral-600">Last Name *</label>
        <input
        id={id}
        type="text"
        placeholder={placeholder}
        {...field}
        className={`mt-1 block w-full h-10 rounded-md border bg-white px-3 text-sm
          ${touched && error ? "border-red-500 focus:ring-red-300" : "border-neutral-200 focus:ring-[#C19A6B]"}
          placeholder-neutral-400 focus:outline-none focus:ring-2 focus:border-transparent`}
        aria-invalid={!!(touched && error)}
        aria-describedby={touched && error ? `${id}-error` : undefined}
        autoComplete="given-name"
      />
        {touched && error && (
        <span className="text-red-600 text-sm" id={`${id}-error`}>
          {error}
        </span>
      )}
          </div>
  
  </>
}
