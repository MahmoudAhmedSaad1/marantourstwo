import React from 'react'

 import { LuClock3, LuUsers, LuLanguages } from "react-icons/lu";
import { SiFlux } from "react-icons/si";

export default function Iconsforsecondsection() {
     const info = [
  { icon: <LuClock3 className="h-5 w-5" />,  label: "Duration",     value: "10 day" },
  { icon: <SiFlux className="h-5 w-5" />, label: "Cancellation", value: "No Cancel" },
  { icon: <LuUsers className="h-5 w-5" />,   label: "Group Size",   value: "12 people" },
  { icon: <LuLanguages className="h-5 w-5" />, label: "Languages",  value: "English, Espanol" },
];
  return <>
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
  {info.map((x, i) => (
    <div
      key={x.label ?? i}
      className="flex w-full h-full items-center gap-4  bg-white px-4 py-3"
    >
      <div className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white text-gray-600 flex-shrink-0">
        {x.icon}
      </div>
      <div className="leading-tight">
        <p className="text-sm font-semibold text-gray-900">{x.label}</p>
        <p className="text-xs text-gray-500">{x.value}</p>
      </div>
    </div>
  ))}
</div>
  
  
  
  </>
}
