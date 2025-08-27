import React from 'react'

export default function Rightcontactfootermeassage({change,message,value , touch,
  error}) {
  return <>
   <div>
          <label className="block text-sm text-neutral-600">Message *</label>
          <textarea
          value={value}
          name={message}
          onChange={change}
            rows={4}
            className="mt-1 block w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C19A6B] focus:border-transparent"
            placeholder="Write your message here..."
          />
          {error&&touch?(
  <div className={`transition-all duration-300 ${error ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
      <span className="font-medium text-red-600">{error}</span>

</div>
):null}
        </div>
  
  </>
}
