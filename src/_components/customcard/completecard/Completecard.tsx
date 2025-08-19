import React from 'react'
import CustomCard from '../page'
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
export default  function Completecard({packedge} :{packedge:pack[]}) {

  return <>
  
   <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 mt-5 md:mt-4">
          {packedge.map((item, index) => (
            <CustomCard
              key={index}
              slug={item.slug}
              title={item.title}
              price={item.start_price.toString() + " $"}
              location={item.destination.title}
              imageUrl={item.image.image_url}
              duration={item.duration}
            />
          ))}
           
        </div>
  
  </>
}
