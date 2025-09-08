import React from "react";
import Secondsectionaboutusrightlargephoto from "../Secondsectionaboutusrightlargephoto/Secondsectionaboutusrightlargephoto";
import Secondsectionaboutusrightsmallphoto from "../Secondsectionaboutusrightsmallphoto/Secondsectionaboutusrightsmallphoto";
export default function Secondsectionaboutusright({
  smallImg,
  largeImg,
}: {
  smallImg: string;
  largeImg: string;
}) {
  return (
    <>
      <div className="order-1 lg:order-2  ">
        <div className="relative w-full">
          <Secondsectionaboutusrightlargephoto largeImg={largeImg} />
          <Secondsectionaboutusrightsmallphoto smallImg={smallImg} />
        </div>
      </div>
    </>
  );
}
