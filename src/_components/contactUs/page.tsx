"use client";
import Link from "next/link";
import CustomButton from "../custombutton/page";
import Customdiv from "../customp&h&img/page";
import Completecard from "../customcard/completecard/Completecard";


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
 console.log(packedge);
 

  return (
    <div className="mt-20">
      <div className="text-center">
        <Customdiv
          pharagraph="Contact us"
          heading_3="Buscas tu Destino"
          imageUrl="imgs/Vector.png"
        />
      </div>

      <Link href={`/${(packedge[0].destination.slug)}/${(packedge[0].slug)}`}>
      <Completecard packedge={packedge}/>

      
      </Link>
      <div className="text-center mb-16">
        <CustomButton title="See more" />
      </div>
    </div>
  );
}
