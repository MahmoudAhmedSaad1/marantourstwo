"use client";
import { Html } from "next/document";
import Image from "next/image";
import { useState } from "react";


export default function Frequently({frequantly}) {
  const [openItems, setOpenItems] = useState(Array(10).fill(false));
 
  const toggleItem = (index: Faq) => {
    setOpenItems((prev) => prev.map((item, i) => (i === index   ? !item : item)));
  };

  

  return <>
  
  
   <div className="header text-center my-10">
         <div className="text-center mt-9">
                  <h3 className="font-[600] text-[32px] py-1">Preguntas frecuentes</h3>
                  <Image priority fetchPriority='high' width={100} height={100} src="/imgs/Vector.png" alt="Vector" className="mx-auto" />
                </div>

      <div className="body container mx-auto md:grid lg:grid-cols-2 lg:gap-6 lg:w-[1178px] px-3 lg:px-0 my-7">
        <div className="font-[700] mx-auto text-[18px] w-[398px] md:w-[589px]">
          {frequantly.map((faq, ke) => (
            <div
              key={ke}
              className="rounded-[4px] shadow shadow-[#00000014] my-7 relative z-20"
            >
              <div
                className="flex justify-between items-center py-3 px-6 cursor-pointer rounded-[4px]"
                onClick={() => toggleItem(ke)}
              >
                <div 
                dangerouslySetInnerHTML={{
                  __html: ke === faq.id ? faq.title : faq.title

                }
                }
                className="text-[12.16px] md:text-[18px]">

                </div>
                
                <button className="text-xl font-bold">
                  {openItems[ke] ? "-" : "+"}
                </button>
              </div>
              {openItems[ke] && (
                <>
                <div 
                dangerouslySetInnerHTML={{
                  __html: ke === faq.id ? faq.body : faq.body

                }
                }
                className="conv font-[400] text-[10.14px] md:text-[15px] text-[#4F545A] px-10 py-3">

                </div>
                  
                  <Image
                                    width={50} height={50}
                                        className="absolute bottom-0 right-0"
                                        src="/imgs/Rectangle 11.png"
                                        alt="rectangle"
                                    />
                </>
              )}
            </div>
          ))}
        </div>

        
      </div>
  </div>
  </>
}
