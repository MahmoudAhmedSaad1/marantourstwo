

import Img_Countryname from "../img&countryname/page";
import Customdiv from "../customp&h&img/page";


interface destionations {
  id: number;
  title: string;
 
  image: {
    image_url: string;
    image_alt: string;
    image_title: string;
  };
}

export default function Destionations({destionation} : {destionation:destionations[]} ) {
 

  return (
    <>
    
      <div className=" bg-[#F7F2EE] py-5  ">
        <div className="container mx-auto  grid md:grid-cols-2  lg:grid-cols-3 gap-[32px] md:py-5 ">
          <div className="py-8 text-center flex flex-col justify-center">
            <Customdiv pharagraph="Destinations" heading_3="Escoje tu Destino"  />
          </div>
          {  (destionation.slice(0).map((item:destionations, id) => (
              <Img_Countryname
                key={id}
                imageUrl={item.image?.image_url}
                imagealt={item.image?.image_alt}
                
                title={item?.title}
              />
            ))
          )}
        </div>
      </div>
    
    </>
  );
}
