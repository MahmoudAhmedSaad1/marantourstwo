
import { useForm } from "react-hook-form";
import React from "react";
import Rightcontactfooterheadingandpharagraph from "../Rightcontactfooterheadingandpharagraph/Rightcontactfooterheadingandpharagraph";
import Rightcontactfooterfirestname from "../Rightcontactfooterfirestname/Rightcontactfooterfirestname";
import Rightcontactfootersecondname from "../Rightcontactfootersecondname/Rightcontactfootersecondname";
import Rightcontactfooteremail from "../Rightcontactfooteremail/Rightcontactfooteremail";
import Rightcontactfootertelephone from "../Rightcontactfootertelephone/Rightcontactfootertelephone";
import Rightcontactfootermeassage from "../Rightcontactfootermeassage/Rightcontactfootermeassage";
import axios from "axios";
import dayjs from "dayjs";
import RightcontactfooterButton from "../Rightcontactfooterbutton/RightcontactfooterButton";
import { useRouter } from "next/navigation";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  advice: string;
  message?: string; 
};

export default function Rightcontactfooter() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm<Inputs>({ mode: "onBlur" });

  // spinner after success (per request)
  const [postSuccessSpin, setPostSuccessSpin] = React.useState(false);

  const firstNameField = register("firstName", {
    required: "firstName is required",
    minLength: { value: 4, message: "min length is 3" },
    maxLength: { value: 60, message: "max length is 50" },
  });
  const lastNameField = register("lastName", {
    required: "lastname is required",
    minLength: { value: 3, message: "min length is 3" },
    maxLength: { value: 50, message: "max length is 50" },
  });
  const emailField = register("email", {
    required: "email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "not valid email",
    },
  });
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

  const onSubmit = handleSubmit(async (values) => {
    try {
      await axios.post(
        "https://api.dubaidaytrips.com/v1/inquires?tenant_id=58&language_id=51",
        {
          ...values,
          arrival: dayjs(new Date()).format("DD/MM/YYYY"),
          departure: dayjs(new Date()).format("DD/MM/YYYY"),
          name: `${values.firstName} ${values.lastName} `,
        }
      );

      // console.log(values.firstName, values.email );

      setPostSuccessSpin(true);
      setTimeout(() => setPostSuccessSpin(false), 50);
 router.replace(`/contact/${ values.firstName}/${values.email}`); 
    } catch (e) {
      console.error(e);
    }
  })
  const isLoading = isSubmitting || postSuccessSpin;
  return (
    <section className="px-4 py-6">
      <div className="mx-auto w-full max-w-[460px]">
        <div className="rounded-xl bg-neutral-100 p-5 sm:p-6 md:p-7 ring-1 ring-black/5 shadow-sm">
          <Rightcontactfooterheadingandpharagraph />
          <form onSubmit={onSubmit}  className="mt-5 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Rightcontactfooterfirestname
                field={firstNameField}
                error={errors.firstName?.message}
                touched={touchedFields.firstName}
              />
              <Rightcontactfootersecondname
                field={lastNameField}
                error={errors.lastName?.message}
                touched={touchedFields.lastName}
              />
            </div>

            <Rightcontactfooteremail
              field={emailField}
              error={errors.email?.message}
              touched={touchedFields.email}
            />

            <Rightcontactfootertelephone
              field={phoneField}
              error={errors.phone?.message}
              touched={touchedFields.phone}
            />

            <Rightcontactfootermeassage
              field={textareaField}
              error={errors.advice?.message}         
              touched={touchedFields.advice}          
            />

           <RightcontactfooterButton isLoading={isLoading} isSubmitting={isSubmitting} postSuccessSpin={postSuccessSpin} />
          </form>
        </div>
      </div>
    </section>
  );
}
 