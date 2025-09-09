import Contactar from "@/_components/contactar/page";
import Contact_Us from "@/_components/contactUs/page";
import Cuaderno from "@/_components/cuaderno/page";
import Destionations from "@/_components/destionations/page";

import Frequently from "@/_components/frequently/page";
import Home1 from "@/_components/Home1/page";
import Mejor from "@/_components/major/page";
import NewsLetter from "@/_components/newsletter/page";
import Tours from "@/_components/tours/page";
import React from "react";
import { getData } from "@/utilities/fetchApi";

export default async function Home() {
  const sliders = await getData(
    "sliders?tenant_id=58&language_id=51&status=active"
  );
  const destionation = await getData(
    "destinations/?tenant_id=58&language_id=51&paginate=5&status=active"
  );
  const frequantly = await getData("faqs?tenant_id=58&language_id=51&viewInHome=1&status=active&paginate=1000" );


  return (
    <>
      <Home1 sliders={sliders?.rows} />
      <Tours />
      <Destionations destionation={destionation?.rows} />
      
      <Contact_Us />
      <Contactar />
      <Cuaderno />
      <Frequently frequantly={frequantly?.rows} />
      <NewsLetter />
      <Mejor />
    </>
  );
}
