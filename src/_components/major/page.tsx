import React from "react";

import Customdiv from "../customp&h&img/page";
import CustomMajor from "../customMajor/page";
import Customphotos from "../customphotos/page";
import Fifthsectionaboutuslatout from "../Aboutus/Fifthsectionaboutus/Fifthsectionaboutuslatout/Fifthsectionaboutuslatout";

const dataCard = [
  {
    image_Url: "/imgs/Image Placeholder (1).png",
    heading_2: "Amanda Fisher",
    phara_1: "Insert your title here",
    phara_2:
      "There are many variations in texts depending on the title and function.",
  },
  {
    image_Url: "/imgs/Image Placeholder (2).png",
    heading_2: "Amanda Fisher",
    phara_1: "Insert your title here",
    phara_2:
      "There are many variations in texts depending on the title and function.",
  },
  {
    image_Url: "/imgs/Image Placeholder (3).png",
    heading_2: "Mike Cannon",
    phara_1: "Insert your title here",
    phara_2:
      "There are many variations in texts depending on the title and function.",
  },
  {
    image_Url: "/imgs/Image Placeholder (4).png",
    heading_2: "Erika Gofas",
    phara_1: "Insert your title here",
    phara_2:
      "There are many variations in texts depending on the title and function.",
  },
];

export default function Mejor() {
  return (
    <>
      <div>
        <div className="text-center mt-9">
          <Customdiv
            pharagraph="EL MEJOR EQUIPO"
            heading_3="NUESTROS EXPERTOS LOCALES"
          />
        </div>
        <Fifthsectionaboutuslatout/>
        {/* <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 container mx-auto ">
          {dataCard.map((item, id) => (
            <CustomMajor
              key={id}
              image_Url={item.image_Url}
              heading_2={item.heading_2}
              phara_1={item.phara_1}
              phara_2={item.phara_2}
            />
          ))}
        </div> */}

        <Customphotos />
      </div>
    </>
  );
}
