import React from 'react'
import Customdiv from "@/_components/customp&h&img/page";
import CustomButton from "@/_components/custombutton/page";
import Thirdsectionaboutuspartonephoto from '../../Thirdsectionaboutuspartonephoto/Thirdsectionaboutuspartonephoto';
import Thirdsectionaboutusparttwo from '../Thirdsectionaboutusparttwo';
import Thirdsectionaboutuspartonecontant from '../../Thirdsectionaboutuspartonecontant/Thirdsectionaboutuspartonecontant';
type Destination = {
  image: string;
  destination_title: string;
  desc?: string;
  cta?: string;
};
export default function Thirdsectionaboutuspartone({destionation}:{destionation:Destination[]}) {
  
  return <>
  
   <div id="Contactar" className="my-5">
      <div className="flex justify-center items-center w-full h-full text-black text-center relative">
        <div className="lineer w-full h-full">
          <div className="text-center mt-9">
            <Customdiv
              pharagraph="INSPÍRATE..."
              heading_3="Escoge tu destino"
            />
          </div>
          {/*  Cards */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2   not-odd:not-even:not-first-of-type:  lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-7    ">
              {destionation.map(
                ({ image, destination_title, desc}) => (
                  <article
                    key={destination_title}
                    className="group overflow-hidden rounded-t-lg  bg-white shadow-sm ring-1 ring-zinc-100 transition hover:shadow-md"
                  >
                    {/* photo */}
                    <Thirdsectionaboutuspartonephoto image={image} />

                    {/* contant */}
                <Thirdsectionaboutuspartonecontant desc={desc}  title={destination_title} />
                  </article>
                )
              )}
            </div>
          </div>
  <Thirdsectionaboutusparttwo/>
          <div className="mb-16">
            <CustomButton title="Contáctenos" />
          </div>
        </div>
      </div>
    </div>
  
  </>
}
