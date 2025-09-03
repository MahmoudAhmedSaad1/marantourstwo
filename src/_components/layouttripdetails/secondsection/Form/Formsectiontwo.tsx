"use client";

import Selectlanguage from "./Selectlanguage/Selectlanguage";
import Formsectiontwoemail from "./Formsectiontwoemail/Formsectiontwoemail";
import FormsectiontwoPhonewithflagcode from "./FormsectiontwoPhonewithflagcode/FormsectiontwoPhonewithflagcode";
import Formsectiontwodeparturedate from "./Formsectiontwodeparturedate/Formsectiontwodeparturedate";
import Formsectiontwoarrivaldate from "./Formsectiontwoarrivaldate/Formsectiontwoarrivaldate";
import Formsectiontwoname from "./Formsectiontwoname/Formsectiontwoname";
import Formsectiontwoadults from "./Formsectiontwoadults/Formsectiontwoadults";
import Formsectiontwobambini from "./Formsectiontwobambini/Formsectiontwobambini";
import Formsectiontwomessage from "./Formsectiontwomessage/Formsectiontwomessage";
import Formsectiontwosubmit from "./Formsectiontwosubmit/Formsectiontwosubmit";
import Formsectiontwoheader from "./Formsectiontwoheader/Formsectiontwoheader";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";

type Input = { 
  Name:string,
  email:string,
  arrivalDate:string,
  departureDate:string,
  phone:string,
  advice:string,
  adults:string,
  language:string,
  bambini:string,
}

export default function Formsectiontwo() {
  const router = useRouter();
const {
  register,
  handleSubmit,
  formState: { errors, touchedFields, isSubmitting },
} = useForm<Input>({
  mode: "onChange",
  defaultValues: {
    language: "en", 
  },
});


  const [postSuccessSpin, setPostSuccessSpin] = React.useState(false);



      const NameField = register("Name", {
    required: "Name is required",
  });

  const emailField = register("email", {
    required: "email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "not valid email",
    },
  });

const arrivalDate = register("arrivalDate", {
  required: "date is required",
});
const DeparturedateField = register("departureDate", {
  required: "date is required",

});
const languageField = register("language");
 const phoneField = register("phone", {
    required: "Phone is required",
    minLength: { value: 11, message: "length must be 11" },
    maxLength: { value: 11, message: "length must be 11" },
    pattern: {
      value: /^01[0125]\d{8}$/,
      message: "not valid Egyptian mobile (01X...)",
    },
  });
 const textareaField = register("advice", {
    required: "message is required",
    minLength: { value: 20, message: "min length is 20" },
    maxLength: { value: 100, message: "max length is 100" },
  });

const adultsField = register("adults", {
});
const bambiniField = register("bambini", {
});
 const onSubmit = handleSubmit(
  async (values) => {
    console.log("VALID VALUES =>", values);
    await axios.post("https://api.dubaidaytrips.com/v1/inquires?tenant_id=58&language_id=51", values);
    setPostSuccessSpin(true);
    setTimeout(() => setPostSuccessSpin(false), 50);
    router.replace(`/contact/${values.Name}/${values.email}`);
  },
  (formErrors) => {
    console.log("FORM ERRORS =>", formErrors); // هتشوف هنا أي حقل واقفك
  }
);

        const isLoading = isSubmitting || postSuccessSpin;
  return (
    <aside>
      <div className="rounded-2xl bg-[#F6EFE7] ring-1 ring-black/5 shadow-xl pb-5 px-2">
        <Formsectiontwoheader text="solicitar presupuesto" />
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-4 p-4 px-2">
          <Formsectiontwoname  field={NameField}
                error={errors.Name?.message}
                touched={touchedFields.Name} />
          <Formsectiontwoemail field={emailField} error={errors.email?.message}  touched={touchedFields.email} />

          {/* Arrival date */}
          <Formsectiontwoarrivaldate field={arrivalDate} error={errors.arrivalDate?.message} touched={touchedFields.arrivalDate} />

          {/* Departure date */}
          <Formsectiontwodeparturedate field={DeparturedateField} error={errors.departureDate?.message} touched={touchedFields.departureDate}  />

  <Selectlanguage   field={languageField} />

          {/* Phone with flag + code */}
          <FormsectiontwoPhonewithflagcode  field={phoneField}
              error={errors.phone?.message}
              touched={touchedFields.phone} />

          {/* Adults */}
          <Formsectiontwoadults field={adultsField}/>

          {/* Bambini */}
          <Formsectiontwobambini field={bambiniField} />

          <Formsectiontwomessage field={textareaField}
              error={errors.advice?.message}         
              touched={touchedFields.advice}  />

          {/* Submit */}
          <Formsectiontwosubmit isLoading={isLoading} isSubmitting={isSubmitting} postSuccessSpin={postSuccessSpin}  />
        </form>
      </div>
    </aside>
  );
}
