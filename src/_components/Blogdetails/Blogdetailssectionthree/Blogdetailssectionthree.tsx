import React from "react";
import CustomCard from "../../customcard/page";
import Customdiv from "@/_components/customp&h&img/page";
import CustomButton from "@/_components/custombutton/page";
interface Destination {
  id: number;
  slug: string;
  title: string;
}
interface ImageObj {
  image_url: string;
  image_alt: string;
  image_title: string;
}
interface Pack {
  id: number;
  slug: string;
  destination: Destination;
  duration: string;
  start_price: number;
  title: string;
  image: ImageObj | null;
}

export default async function Blogdetailssectionthree() {
  const packedgeData: { rows: Pack[] } = {
    rows: [
      {
        id: 3,
        slug: "luxor-aswan-nile",
        title: "Luxor & Aswan Nile Cruise",
        duration: "5 days",
        start_price: 649,
        destination: { id: 103, slug: "luxor-aswan", title: "Luxor & Aswan" },
        image: {
          image_url: "/imgs/2025-09-05-08-39-38-068baa1ca8dc63.webp",
          image_alt: "Nile Cruise",
          image_title: "Nile",
        },
      },
    ],
  };

  const packedge: Pack[] = packedgeData.rows;
  const PLACEHOLDER = "/imgs/istockphoto-1396814518-612x612.jpg";

  return <>
  
   <div className="text-center mb-5">
            <Customdiv pharagraph="¿Te sientes inspirado?" heading_3="Encuenrta nuestras Travesías" imageUrl="/imgs/Vector.png"
            />
          </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 mt-5 md:mt-4">
        
      {packedge.map((item) => {
        const imgUrl = item.image?.image_url || PLACEHOLDER;
        const price = `${item.start_price ?? 0} $`;
        return (
          <CustomCard
            key={item.id}
            slug={item.slug}
            title={item.title}
            price={price}
            location={item.destination?.title ?? ""}
            imageUrl={imgUrl}
            duration={item.duration}
          />
        );
      })}
    </div>
      <div className="mb-16 text-center">
                <CustomButton title="Var mas" />
              </div>
  </>
}
