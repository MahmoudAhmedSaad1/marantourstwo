"use client";
import Link from "next/link";
import CustomButton from "../custombutton/page";
import CustomCard from "../customcard/page";
import Customdiv from "../customp&h&img/page";


interface pack {
  id: number;
  destination: string;
  duration: string;
  start_price: number;
  title: string;
  button: string;
  image: {
    image_url: string;
    image_alt: string;
    image_title: string;
  };
}

export default function Contact_Us({packedge} :{packedge:pack[]}) {
 

  return (
    <div className="mt-20">
      <div className="text-center">
        <Customdiv
          pharagraph="Contact us"
          heading_3="Buscas tu Destino"
          imageUrl="imgs/Vector.png"
        />
      </div>

      <Link href="/tripdetails">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 mt-5 md:mt-4">
        {packedge.map((item, index) => (
          <CustomCard
            key={index}
            title={item.title}
            price={item.start_price.toString() + " $"}
            location={item.destination.title}
            imageUrl={item.image.image_url}
            duration={item.duration}
          />
        ))}
         
      </div>

      <div className="text-center mb-16">
        <CustomButton title="See more" />
      </div>
      </Link>
    </div>
  );
}
