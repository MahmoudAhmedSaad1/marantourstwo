import Photos from "@/_components/layouttripdetails/firstsectionphotos/photos";
import Frequantlyquestion from "@/_components/layouttripdetails/secondsection/Frequantlyquestion/Frequantlyquestion";
import Secondsection from "@/_components/layouttripdetails/secondsection/Secondsection";
import React from "react";
const images = [
  {
    src: "/imgs/6298842cc6bfef780e2094605c0052d4d336a6e2.jpg",
    alt: "Hero",
    href: "/trip/hero",
  },
  {
    src: "/imgs/e78f33878a177b4aa2af1b25703e24cce8099714.jpg",
    alt: "A",
    href: "/trip/a",
  },
  {
    src: "/imgs/328cddba6814453ccfb133458475a1079bc481c2.jpg",
    alt: "B",
    href: "/trip/b",
  },
  {
    src: "/imgs/6befc328f9fbf4ceebcdee8cbea378b541bfec21.jpg",
    alt: "C",
    href: "/trip/c",
  },
  {
    src: "/imgs/6befc328f9fbf4ceebcdee8cbea378b541bfec21.jpg",
    alt: "D",
    href: "/trip/d",
  },
];
export default function page() {
  return (
    <>
      <Photos images={images} />
      <Secondsection />
      <Frequantlyquestion />
    </>
  );
}
