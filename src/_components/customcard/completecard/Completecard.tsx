import React from "react";
import CustomCard from "../../customcard/page";
import { getData } from "@/utilities/fetchApi";
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
  image_alt: string;
  image: ImageObj | null;
  priority?: number;
}

export default async function Completecard() {
  const packedgeData = await getData(
    "packages/?tenant_id=58&language_id=51&viewInHome=1&paginate=6&status=active"
  );

  const packedge: Pack[] = Array.isArray(packedgeData?.rows) ? packedgeData.rows : [];
// console.log(packedge);

  const PLACEHOLDER = "/imgs/istockphoto-1396814518-612x612.jpg"; 

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 mt-5 md:mt-4">
        {packedge.map((item) => {
          const imgUrl = item.image?.image_url || PLACEHOLDER;
          const image_alt = item.image?.image_alt || PLACEHOLDER;
          const href = `/${item.destination?.slug}/${item.slug}`;
          const price = `${item.start_price } `;

          return (
           
              <CustomCard
              key={item.id}
                slug={item.slug}
                title={item.title}
                 priority={item.priority}
                 
              imgAlt={image_alt || ""}
                price={price}
                location={item.destination?.title ?? ""}
                imageUrl={imgUrl}
                duration={item.duration}
              />
            
          );
        })}
      </div>
      
    </>
  );
}
