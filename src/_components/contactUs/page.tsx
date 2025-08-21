
import CustomButton from "../custombutton/page";
import Customdiv from "../customp&h&img/page";
import Completecard from "../customcard/completecard/Completecard";


export default function Contact_Us() {

 

  return (
    <div className="mt-20">
      <div className="text-center">
        <Customdiv
          pharagraph="Contact us"
          heading_3="Buscas tu Destino"
          imageUrl="imgs/Vector.png"
        />
      </div>

      
      <Completecard />

      
    
      <div className="text-center mb-16">
        <CustomButton title="See more" />
      </div>
    </div>
  );
}
