import Customdiv from "@/_components/customp&h&img/page";
import React from "react";
import Fourthsectionaboutusphoto from "../Fourthsectionaboutusphoto/Fourthsectionaboutusphoto";
import Fourthsectionaboutuscontant from "./Fourthsectionaboutuscontant/Fourthsectionaboutuscontant";
type ImageObj = {
  image_url: string
  image_alt?: string
}

type Member = {
  id: string
  name: string
  meta: string
  role: string
  image: ImageObj
  title: string
}

export default function Fourthsectionaboutus({ writers }: { writers: Member[] }) {  
  return <>
    <section className="py-10 sm:py-12">
  <div className="text-center mb-5">
    <Customdiv pharagraph="EL MEJOR EQUIPO" heading_3="NUESTROS EXPERTOS LOCALES" />
  </div>
  <div className="container mx-auto max-w-6xl md:max-w-7xl px-6 sm:px-8 lg:px-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5">
     {writers.map(({ id, title, meta, image }) => (
  <article
    key={id}
    className="
      group h-full flex flex-col overflow-hidden
      rounded-[5px] border border-zinc-200 bg-white
      shadow-sm transition-all duration-300 ease-out
      hover:shadow-xl
    "
  >
{/* Photo */}
<Fourthsectionaboutusphoto image={image}  />
{/* Contant */}
  <Fourthsectionaboutuscontant    name={title} role={meta} />
  </article>
))}
    </div>
  </div>
</section>
  </>
}
