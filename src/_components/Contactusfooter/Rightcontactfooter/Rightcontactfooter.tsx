"use client"
import React from 'react'
import Rightcontactfooterheadingandpharagraph from '../Rightcontactfooterheadingandpharagraph/Rightcontactfooterheadingandpharagraph'
import Rightcontactfooterfirestname from '../Rightcontactfooterfirestname/Rightcontactfooterfirestname'
import Rightcontactfootersecondname from '../Rightcontactfootersecondname/Rightcontactfootersecondname'
import Rightcontactfooteremail from '../Rightcontactfooteremail/Rightcontactfooteremail'
import Rightcontactfootertelephone from '../Rightcontactfootertelephone/Rightcontactfootertelephone'
import Rightcontactfootermeassage from '../Rightcontactfootermeassage/Rightcontactfootermeassage'
import RightcontactfooterButton from '../Rightcontactfooterbutton/RightcontactfooterButton'
import { useFormik } from 'formik'
import * as yup from "yup" 
import axios from 'axios'
export default function Rightcontactfooter() {
async function handelform(values){
  console.log(values);
const res = await axios.post("https://api.dubaidaytrips.com/v1/inquires?tenant_id=58&language_id=51",values)
console.log(res);
}

const myvalidation = yup.object().shape({
  firstName:yup.string().min(3,"min length is 3 ").max(10,"max length is 10 ").required("firstName is Required"),
  lastName:yup.string().min(3,"min length is 3 ").max(10,"max length is 10 ").required("lastName is Required"),
  message:yup.string().min(10,"min length is 10 "),
  email:yup.string().email("not valied email").required("email is Required"),
  phone:yup.string().matches(/^01[1025][0-9]{8}$/,"phone not valid").required("Number is Required"),
})

 const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema:myvalidation,
    onSubmit: handelform,
  });
  return (
 <section className="px-4 py-6">
  <div className="mx-auto w-full max-w-[460px]">
    <div className="rounded-xl bg-neutral-100 p-5 sm:p-6 md:p-7 ring-1 ring-black/5 shadow-sm">
     <Rightcontactfooterheadingandpharagraph/>
      <form onSubmit={formik.handleSubmit} className="mt-5 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Rightcontactfooterfirestname error={formik.errors.firstName} touch={formik.touched.firstName} value={formik.values.firstName} change={formik.handleChange} firstName={"firstName"}  />
          <Rightcontactfootersecondname error={formik.errors.lastName} touch={formik.touched.lastName} value={formik.values.lastName} change={formik.handleChange} lastName={"lastName"}/>
        </div>
       <Rightcontactfooteremail error={formik.errors.email} touch={formik.touched.email} value={formik.values.email} change={formik.handleChange} email={"email"}/>
     <Rightcontactfootertelephone error={formik.errors.phone} touch={formik.touched.phone} value={formik.values.phone} change={formik.handleChange} phone={"phone"}/>
       <Rightcontactfootermeassage error={formik.errors.message} touch={formik.touched.message} value={formik.values.message} change={formik.handleChange} message={"message"} />
      <RightcontactfooterButton/>
      </form>
    </div>
  </div>
</section>

  )
}
