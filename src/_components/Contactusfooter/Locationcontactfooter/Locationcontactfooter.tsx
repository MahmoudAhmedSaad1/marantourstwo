import React from "react";
import { LuMapPin } from "react-icons/lu";
export default function Locationcontactfooter() {
  return (
    <>
      <div className="my-6 h-px w-full max-w-md bg-[#E4EBF1]" />
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E4EBF1] ring-1 ring-neutral-200 text-[#4E5561]">
          <LuMapPin className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[13px] text-[#4E5561]">Our Location</p>
          <p className="font-semibold text-[#4E5561]">
            2077 Chicago Avenue Orosi, CA 93647
          </p>
        </div>
      </div>
    </>
  );
}
