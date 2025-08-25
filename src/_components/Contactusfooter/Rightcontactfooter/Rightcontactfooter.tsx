import React from 'react'
import Rightcontactfooterheadingandpharagraph from '../Rightcontactfooterheadingandpharagraph/Rightcontactfooterheadingandpharagraph'
import Rightcontactfooterfirestname from '../Rightcontactfooterfirestname/Rightcontactfooterfirestname'
import Rightcontactfootersecondname from '../Rightcontactfootersecondname/Rightcontactfootersecondname'
import Rightcontactfooteremail from '../Rightcontactfooteremail/Rightcontactfooteremail'
import Rightcontactfootertelephone from '../Rightcontactfootertelephone/Rightcontactfootertelephone'
import Rightcontactfootermeassage from '../Rightcontactfootermeassage/Rightcontactfootermeassage'
import RightcontactfooterButton from '../Rightcontactfooterbutton/RightcontactfooterButton'
export default function Rightcontactfooter() {
  return (
 <section className="px-4 py-6">
  <div className="mx-auto w-full max-w-[460px]">
    <div className="rounded-xl bg-neutral-100 p-5 sm:p-6 md:p-7 ring-1 ring-black/5 shadow-sm">
     <Rightcontactfooterheadingandpharagraph/>
      <form className="mt-5 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Rightcontactfooterfirestname/>
          <Rightcontactfootersecondname/>
        </div>
       <Rightcontactfooteremail/>
     <Rightcontactfootertelephone/>
       <Rightcontactfootermeassage/>
      <RightcontactfooterButton/>
      </form>
    </div>
  </div>
</section>

  )
}
