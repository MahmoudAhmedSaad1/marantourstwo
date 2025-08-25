import Link from 'next/link'
import React from 'react'
import { LuPhoneCall } from 'react-icons/lu'
export default function Phonecontactfooter() {
  return <>
 <div className="my-6 h-px w-full max-w-md bg-[#E4EBF1]" />
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E4EBF1] ring-1 ring-neutral-200 text-[#4E5561]">
              <LuPhoneCall className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[13px] text-[#4E5561]">Phone Number</p>
              <Link href="tel:+18164948103" className="font-semibold text-[#4E5561] hover:underline">
                +1 81649 48103
              </Link>
            </div>
          </div>  
  </>
}
