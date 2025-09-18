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
  priority?: number; 
}

interface BlogdetailssectionthreeProps {
  blogdetails: Pack[];
}
export default async function Blogdetailssectionthree({
  blogdetails,
}: BlogdetailssectionthreeProps) {
  const packedge: Pack[] = blogdetails;
  const PLACEHOLDER = "/imgs/istockphoto-1396814518-612x612.jpg";
  return (
    <>
      <div className="text-center mb-5">
        <Customdiv
          pharagraph="¿Te sientes inspirado?"
          heading_3="Encuenrta nuestras Travesías"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 mt-5 md:mt-4">
        {packedge.map((item) => {
          const imgUrl = item.image?.image_url || PLACEHOLDER;
          const imgAlt = item.image?.image_alt || "";
          const price = `${item.start_price  } `;
          return (
            <CustomCard
              key={item.id}
              slug={item.slug}
              title={item.title}
              price={price}
              priority={item.priority}
              imgAlt={imgAlt}
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
  );
}
