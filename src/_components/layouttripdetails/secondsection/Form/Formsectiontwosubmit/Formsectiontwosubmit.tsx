import React from 'react'
type RightcontactfooterButtonProps = {
  isLoading: boolean;
  isSubmitting: boolean;
  postSuccessSpin: boolean;
};
export default function Formsectiontwosubmit({
  isLoading,
  isSubmitting,
  postSuccessSpin,
}: RightcontactfooterButtonProps) {
  
  return <>
   <div className="col-span-2">
          <button 
        type="submit"
        disabled={isLoading}
        aria-busy={isLoading}
        aria-live="polite"
        className="inline-flex cursor-pointer h-10 items-center justify-center rounded-md bg-[#C19A6B] px-4 text-sm font-semibold text-white hover:brightness-95 active:brightness-90 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {(isSubmitting) && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {postSuccessSpin
          ? "Success"
          : isSubmitting
          ? "Waiting...."
          : "Send Message"}
      </button>
          </div>
  </>
}
