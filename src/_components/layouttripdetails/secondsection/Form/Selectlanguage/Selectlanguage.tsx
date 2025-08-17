import React from 'react'
import {

  LuChevronDown,
 
} from "react-icons/lu";
export default function Selectlanguage() {
  return <>
  
  <div className="col-span-1 relative">
              <select className="appearance-none w-full rounded-lg border border-gray-200 bg-white pl-3 pr-9 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-amber-300">
                <option>Italian</option>
                <option>English</option>
                <option>Espanol</option>
                <option>Deutsch</option>
              </select>
              <LuChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
  
  </>
}
