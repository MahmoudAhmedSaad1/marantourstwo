import React from "react";
import Secondsectionaboutusleft from "./Secondsectionaboutusleft/Secondsectionaboutusleft";
import Secondsectionaboutusright from "./Secondsectionaboutusright/Secondsectionaboutusright";
export default function Secondsectionaboutus({
  largeImg = "/imgs/blog1.webp",
  smallImg = "/imgs/blog2.webp",
  aboutUs,
}: {
  largeImg?: string;
  smallImg?: string;
  aboutUs?: string[];
}) {


  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="flex flex-col space-y-10 order-2 lg:order-1">
            <Secondsectionaboutusleft aboutUs={aboutUs} />
          </div>
          <div className="order-1 lg:order-2">
            <Secondsectionaboutusright
              largeImg={largeImg}
              smallImg={smallImg}
            />
          </div>
        </div>
        <div className="h-20 sm:h-24 lg:h-0" />
      </div>
    </section>
  );
}
