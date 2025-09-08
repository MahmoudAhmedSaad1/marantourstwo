import React from "react";
import Secondsectionaboutusleft from "./Secondsectionaboutusleft/Secondsectionaboutusleft";
import Secondsectionaboutusright from "./Secondsectionaboutusright/Secondsectionaboutusright";
export default function Secondsectionaboutus({
  largeImg = "/imgs/f8f4c0bcd3197ef3d51449684c7bf3fbb197b916.jpg",
  smallImg = "/imgs/7282f5ccbaac74287ebc8a6dc70de3954f13732f.jpg",
}: {
  largeImg?: string;
  smallImg?: string;
}) {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="flex flex-col space-y-10 order-2 lg:order-1">
            <Secondsectionaboutusleft />
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
