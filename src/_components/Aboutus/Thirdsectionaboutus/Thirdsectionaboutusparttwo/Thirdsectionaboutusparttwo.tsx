import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaHeadset } from "react-icons/fa6";
import { FaRegClipboard, FaCamera } from "react-icons/fa";
import Customdiv from "@/_components/customp&h&img/page";
import Thirdsectionaboutusparttwoicon from "./Thirdsectionaboutusparttwoicon/Thirdsectionaboutusparttwoicon";
import Thirdsectionaboutusparttwotitle from "./Thirdsectionaboutusparttwotitle/Thirdsectionaboutusparttwotitle";
type ContactItem = {
  id: string;
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
};
export default function Thirdsectionaboutusparttwo() {
  const items: ContactItem[] = [
    {
      id: "form",
      title: "Rellena el formulario",
      Icon: MdOutlineMail,
    },
    {
      id: "expert",
      title: "Contacta con un experto local",
      Icon: FaHeadset,
    },
    {
      id: "customize",
      title: "Personaliza tu experiencia",
      Icon: FaRegClipboard,
    },
    {
      id: "enjoy",
      title: "Disfruta de tu travesía",
      Icon: FaCamera,
    },
  ];

  return (
   <section className="relative" aria-label="Contact options">
  {/* خلفية راديال ناعمة */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(100%_60%_at_50%_0%,#f4efe9_0%,#f2ece6_25%,#efe7df_60%,#ece4dc_100%)]" />

  <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-0 pb-10 sm:pb-12 lg:pb-14">
    <div className="text-center mb-6">
      <Customdiv pharagraph="Diseña tu travesía" heading_3="PASO A PASO" />
    </div>

    {/* 1 عمود موبايل | 2 تابلت | 4 دِسكْتوب */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
      {items.map(({ id, title, Icon }) => (
        <div
          key={id}
          className="
            group w-full text-center
            flex flex-col items-center justify-center
            rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5
            transition hover:shadow-[0_18px_50px_rgba(0,0,0,0.14)] hover:-translate-y-[2px]
            px-8 sm:px-10 lg:px-12
            py-8 sm:py-10 lg:py-12
            min-h-[260px] sm:min-h-[280px] lg:min-h-[300px]
          "
        >
          {/* الأيقونة كبيرة وواضحة */}
          <Thirdsectionaboutusparttwoicon Icon={Icon} />

          {/* العنوان Uppercase ومتباعد زي الصورة */}
          <Thirdsectionaboutusparttwotitle title={title} />
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
