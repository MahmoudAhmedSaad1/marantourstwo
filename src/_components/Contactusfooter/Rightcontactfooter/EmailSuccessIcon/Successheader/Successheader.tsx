import React from 'react'
type Props = {
  name: string ;
};
export default function Successheader({name}:Props) {
  return <>
   <h1 className=" sm:text-4xl md:text-5xl font-bold text-xl text-[#3d3d3d]  tracking-tight">
          ¡Gracias! {name}!
        </h1>
  </>
}
