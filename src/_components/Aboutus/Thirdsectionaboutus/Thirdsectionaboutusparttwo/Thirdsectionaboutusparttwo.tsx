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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(100%_60%_at_50%_0%,#f4efe9_0%,#f2ece6_25%,#efe7df_60%,#ece4dc_100%)]" />
            <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-0 pb-10 sm:pb-12 lg:pb-14">
        <div className="text-center mb-6">
          <Customdiv
            pharagraph="Diseña tu travesía"
            heading_3="PASO A PASO"
            imageUrl="/imgs/Vector.png"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {items.map(({ id, title, Icon }) => (
            <div
              key={id}
              className="
                group w-full text-center
                rounded-2xl bg-white/50 backdrop-blur
                shadow-sm ring-1 ring-black/5
                transition hover:shadow-md hover:-translate-y-[2px]
                px-6 sm:px-8 lg:px-8
                py-6 sm:py-8 lg:py-10
              "
            >
              <Thirdsectionaboutusparttwoicon Icon={Icon} />
              <Thirdsectionaboutusparttwotitle title={title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
