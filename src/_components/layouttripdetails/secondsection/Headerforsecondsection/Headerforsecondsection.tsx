import React from 'react'

export default function Headerforsecondsection({images}) {
  return <>
  
  <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-5">
  {images.title}
</h1>
<p className="text-gray-600 mt-10 max-w-3xl">Itinerario</p>
  </>
}
