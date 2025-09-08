import React from "react";
import Fifthsectionaboutuscontantphotos from "../FifthsectionaboutuscontantPhotos/Fifthsectionaboutuscontantphotos";
import Fifthsectionaboutuscontantname from "../Fifthsectionaboutuscontantname/Fifthsectionaboutuscontantname";
import Fifthsectionaboutuscontantstars from "../Fifthsectionaboutuscontantstars/Fifthsectionaboutuscontantstars";
import Fifthsectionaboutuscontanttitle from "../Fifthsectionaboutuscontanttitle/Fifthsectionaboutuscontanttitle";
import Fifthsectionaboutuscontantcity from "../Fifthsectionaboutuscontantcity/Fifthsectionaboutuscontantcity";
import Fifthsectionaboutuscontantpharagraph from "../Fifthsectionaboutuscontantpharagraph/Fifthsectionaboutuscontantpharagraph";
import Fifthsectionaboutuscontanticon from "../Fifthsectionaboutuscontanticon/Fifthsectionaboutuscontanticon";
type Testimonial = {
  id: string;
  name: string;
  location: string;
  title: string;
  body: string;
  avatar: string;
  stars?: number;
};
export default function Fifthsectionaboutuscontant({
  items = [
    {
      id: "marta",
      name: "Marta",
      location: "Barcelona",
      title: "Mi experiencia con Maram Tours",
      body: "Viajé con Maram Tours y la experiencia superó todas mis expectativas. El itinerario estuvo perfectamente organizado...",
      avatar: "/imgs/fbcb0eed9cc7e89e3d2083629a55be197c5d57bf.png",
      stars: 5,
    },
  ] as Testimonial[],
}: {
  items?: Testimonial[];
}) {
  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((t) => (
            <article
              key={t.id}
              className="
                relative overflow-hidden bg-white
                ring-1 ring-black/5
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0_18px_50px_rgba(0,0,0,0.14)]
                transition-shadow duration-300
              "
            >
              <Fifthsectionaboutuscontanticon />
              <div className="px-2 sm:px-[5px] pt-10 pb-10">
                <Fifthsectionaboutuscontantphotos t={t} />
                <Fifthsectionaboutuscontantname t={t} />
                <Fifthsectionaboutuscontantstars t={t} />
                <Fifthsectionaboutuscontanttitle t={t} />
                <Fifthsectionaboutuscontantcity t={t} />
                <Fifthsectionaboutuscontantpharagraph t={t} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
