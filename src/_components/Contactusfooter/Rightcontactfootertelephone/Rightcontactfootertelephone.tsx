import React from 'react'

export default function Rightcontactfootertelephone() {
  return <>
     <div>
          <label className="block text-sm text-neutral-600">Phone *</label>
          <input
            type="tel"
            className="mt-1 block w-full h-10 rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C19A6B] focus:border-transparent"
            placeholder="+1 000 000 0000"
          />
        </div>
  </>
}
