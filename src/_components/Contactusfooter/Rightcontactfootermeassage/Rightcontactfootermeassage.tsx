import React from 'react'

export default function Rightcontactfootermeassage() {
  return <>
   <div>
          <label className="block text-sm text-neutral-600">Message *</label>
          <textarea
            rows={4}
            className="mt-1 block w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C19A6B] focus:border-transparent"
            placeholder="Write your message here..."
          />
        </div>
  
  </>
}
