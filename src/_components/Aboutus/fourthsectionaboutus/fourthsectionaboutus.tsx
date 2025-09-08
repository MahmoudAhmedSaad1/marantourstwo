import Customdiv from "@/_components/customp&h&img/page";
import React from "react";
import Fourthsectionaboutusphoto from "../Fourthsectionaboutusphoto/Fourthsectionaboutusphoto";
import Fourthsectionaboutuscontant from "./Fourthsectionaboutuscontant/Fourthsectionaboutuscontant";
type Member = {
  id: string;
  name: string;
  role: string;
  image: string;
};
export default function Fourthsectionaboutus({
  members = [
    {
      id: "farah-amr",
      name: "Farah Amr",
      role: "Sales agent",
      image: "/imgs/ecafedce22027c0e2c7ea1ac4f9e0d3e134bfea7.jpg",
    },
    {
      id: "habiba-mostafa",
      name: "Habiba Mostafa",
      role: "Sales agent",
      image: "/imgs/ecafedce22027c0e2c7ea1ac4f9e0d3e134bfea7.jpg",
    },
  ],
}: { members?: Member[] }) {
  return <>
    <section className="py-10 sm:py-12">
  <div className="text-center mb-5">
    <Customdiv pharagraph="EL MEJOR EQUIPO" heading_3="NUESTROS EXPERTOS LOCALES" imageUrl="/imgs/Vector.png"
    />
  </div>
  <div className="container mx-auto max-w-6xl md:max-w-7xl px-6 sm:px-8 lg:px-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5">
     {members.map(({ id, name, role, image }) => (
  <article
    key={id}
    className="
      group h-full flex flex-col overflow-hidden
      rounded-xl border border-zinc-200 bg-white
      shadow-sm transition-all duration-300 ease-out
      hover:shadow-xl
    "
  >
{/* Photo */}
<Fourthsectionaboutusphoto image={image} name={name} />
{/* Contant */}
  <Fourthsectionaboutuscontant    name={name} role={role} />
  </article>
))}
    </div>
  </div>
</section>
  </>
}
