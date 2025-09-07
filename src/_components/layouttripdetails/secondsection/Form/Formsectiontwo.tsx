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
  name: string;
  email: string;
  arrival: string;
  departure: string;
  number: string;
  advice: string;
  adults: number;
  nationality	: string;
  bambini: number;
};

export default function Formsectiontwo() {
  const router = useRouter();

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm<Input>({
    mode: "onChange",
    defaultValues: {
      nationality: "en",
      adults: 0,
      bambini: 0,
    },
  });

  const [postSuccessSpin, setPostSuccessSpin] = React.useState(false);

  const NameField = register("name", {
    required: "Name is required",
  });

  const emailField = register("email", {
    required: "email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "not valid email",
    },
  });

  const arrival = register("arrival", {
    required: "date is required",
    setValueAs: (val: string) => {
      if (!val) return "";
      const [year, month, day] = val.split("-");
      return `${day}/${month}/${year}`; // DD/MM/YYYY
    },
  });

  const arrivalVal = watch("arrival");

  const departure = register("departure", {
    required: "date is required",
    setValueAs: (val: string) => {
      if (!val) return "";
      const [year, month, day] = val.split("-");
      return `${day}/${month}/${year}`;
    },
  });

  const languageField = register("nationality");

  const phoneField = register("number", {
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

  // ===== الأهم هنا: تحويل أي قيمة (رقم أو event) إلى Number موثوق =====
  const normalizeNumber = (v: any, fallback = 0) => {
    const raw =
      v && typeof v === "object" && "target" in v
        ? (v as any).target?.value
        : v;
    const n = Number(raw);
    return Number.isFinite(n) ? n : fallback;
  };

  const adultsField = register("adults", {
    valueAsNumber: true,
    setValueAs: (v) => normalizeNumber(v, 0),
    min: { value: 0, message: "min 0" },
  });

  const bambiniField = register("bambini", {
    valueAsNumber: true,
    setValueAs: (v) => normalizeNumber(v, 0),
    min: { value: 0, message: "min 0" },
  });

  const onSubmit = handleSubmit(
    async (values) => {
      console.log("VALID VALUES =>", values);
      await axios.post(
        "https://api.dubaidaytrips.com/v1/inquires?tenant_id=58&language_id=51",
        {
           ...values,

        },
        { headers: { "Content-Type": "application/json" } }
      );
      setPostSuccessSpin(true);
      router.replace(`/contact/${values.name}/${values.email}`);
    },
    (formErrors) => {
      console.log("FORM ERRORS =>", formErrors);
    }
  );

  const isLoading = isSubmitting || postSuccessSpin;

  return (
    <aside>
      <div className="rounded-2xl bg-[#F6EFE7] ring-1 ring-black/5 shadow-xl pb-5 px-2">
        <Formsectiontwoheader text="solicitar presupuesto" />
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-4 p-4 px-2"
        >
          <Formsectiontwoname
            field={NameField}
            error={errors.name?.message}
            touched={touchedFields.name}
          />

          <Formsectiontwoemail
            field={emailField}
            error={errors.email?.message}
            touched={touchedFields.email}
          />

          <Formsectiontwoarrivaldate
            field={arrival}
            error={errors.arrival?.message}
            touched={touchedFields.arrival}
            valueFromParent={arrivalVal}
          />

          <Formsectiontwodeparturedate
            field={departure}
            error={errors.departure?.message}
            touched={touchedFields.departure}
                        valueFromParent={arrivalVal}

          />

          <Selectlanguage field={languageField} />

          <FormsectiontwoPhonewithflagcode
            field={phoneField}
            error={errors.number?.message}
            touched={touchedFields.number}
          />

          {/* Adults */}
          <Formsectiontwoadults setValue={setValue} field={adultsField} />

          {/* Bambini */}
          <Formsectiontwobambini setValue={setValue} field={bambiniField} />

          <Formsectiontwomessage
            field={textareaField}
            error={errors.advice?.message}
            touched={touchedFields.advice}
          />

          <Formsectiontwosubmit
            isLoading={isLoading}
            isSubmitting={isSubmitting}
            postSuccessSpin={postSuccessSpin}
          />
        </form>
      </div>
    </aside>
  );
}
