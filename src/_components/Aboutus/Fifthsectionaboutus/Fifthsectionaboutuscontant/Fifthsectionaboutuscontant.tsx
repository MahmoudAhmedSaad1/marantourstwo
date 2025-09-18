"use client";
import React from "react";
import Fifthsectionaboutuscontantphotos from "../FifthsectionaboutuscontantPhotos/Fifthsectionaboutuscontantphotos";
import Fifthsectionaboutuscontantname from "../Fifthsectionaboutuscontantname/Fifthsectionaboutuscontantname";
import Fifthsectionaboutuscontantstars from "../Fifthsectionaboutuscontantstars/Fifthsectionaboutuscontantstars";
import Fifthsectionaboutuscontanttitle from "../Fifthsectionaboutuscontanttitle/Fifthsectionaboutuscontanttitle";
import Fifthsectionaboutuscontantcity from "../Fifthsectionaboutuscontantcity/Fifthsectionaboutuscontantcity";
import Fifthsectionaboutuscontantpharagraph from "../Fifthsectionaboutuscontantpharagraph/Fifthsectionaboutuscontantpharagraph";
import Fifthsectionaboutuscontanticon from "../Fifthsectionaboutuscontanticon/Fifthsectionaboutuscontanticon";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Review = {
  id: string | number;
  [key: string]: any;
};

export default function Fifthsectionaboutuscontant({
  reviewRows,
}: {
  reviewRows: Review[];
}) {
  return (
<section className="py-10 sm:py-15">
  <div className="mx-auto w-[85%]">
    <Swiper
        modules={[Autoplay]}
  spaceBetween={24}
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  loop={reviewRows.length > 3}
  
      className="myswiper"
    >
      {reviewRows.map((t) => (
        <SwiperSlide key={t.id}>
          <article
            className="
              relative bg-white
              ring-1 ring-black/5
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              hover:shadow-[0_18px_50px_rgba(0,0,0,0.14)]
              transition-shadow duration-300
              self-start
            "
          >
            <div className="overflow-hidden">
              <Fifthsectionaboutuscontanticon />
            </div>
            <div className="px-2 sm:px-[5px] pt-10 pb-10">
              <Fifthsectionaboutuscontantphotos t={t} />
              <Fifthsectionaboutuscontantname t={t} />
              <Fifthsectionaboutuscontantstars t={t} />
              <Fifthsectionaboutuscontanttitle t={t} />
              <Fifthsectionaboutuscontantcity t={t} />
              <div className="flex justify-center">
                <Fifthsectionaboutuscontantpharagraph t={t} />
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

  );
}
