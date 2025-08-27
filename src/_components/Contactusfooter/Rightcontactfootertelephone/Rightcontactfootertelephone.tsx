import React from 'react'

export default function Rightcontactfootertelephone({change,phone,value, touch,
  error}) {
  return <>
     <div>
          <label className="block text-sm text-neutral-600">Phone *</label>
          <input
          value={value}
          name={phone}
          onChange={change}
            type="tel"
            className="mt-1 block w-full h-10 rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C19A6B] focus:border-transparent"
            placeholder="+1 000 000 0000"
          />
           {error&&touch?(
  <div className={`transition-all duration-300 ${error ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
      <span className="font-medium text-red-600">{error}</span>

</div>
):null}
        </div>
  </>
}
