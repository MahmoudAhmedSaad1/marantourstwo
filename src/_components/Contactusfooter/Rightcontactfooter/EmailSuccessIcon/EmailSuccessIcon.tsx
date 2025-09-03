import React from 'react'
import {  FaCheckCircle } from 'react-icons/fa'
export default function EmailSuccessIcon() {
  return <>
<div className="w-full flex items-center justify-center py-6">
<div className="relative w-[150px] h-[150px] flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-violet-100/90 shadow-lg" />
<svg viewBox="0 0 64 64" className="relative w-24 h-24 drop-shadow-md">
<path d="M8 24h48L32 44 8 24z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
<path d="M8 24v20a2 2 0 002 2h44a2 2 0 002-2V24L32 44 8 24z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
<rect x="16" y="12" width="32" height="18" rx="2" fill="#fff" stroke="#cbd5e1" />
<line x1="20" y1="18" x2="44" y2="18" stroke="#818cf8" strokeWidth="2" />
<line x1="20" y1="22" x2="40" y2="22" stroke="#818cf8" strokeWidth="2" />
</svg>
<div className="absolute -bottom-2 -right-2 bg-white rounded-full shadow-lg p-1">
<FaCheckCircle className="text-green-500 text-4xl" />
</div>
</div>
</div>
  </>
}
