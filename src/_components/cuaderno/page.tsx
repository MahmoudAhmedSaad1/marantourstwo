
import Image from 'next/image';

interface blog {
  id: number;
  title: string;
  destination: string;
  slug: string;
  image: {
    image_url: string;
    image_alt: string;
    image_title: string;
  };
}


export default function Cuaderno({blogs}:{blogs:blog[]}) {
 
  return (
    <div className='container mx-auto'>
      <header>
        <div className="text-center mt-9">
          <h3 className="font-[600] text-[32px] py-1">Cuaderno de bitácora</h3>
          <Image priority fetchPriority='high' width={100} height={100} src="/imgs/Vector.png" alt="Vector" className="mx-auto" />
        </div>
      </header>

      <div className='grid md:grid-cols-2'>
        {blogs?.length > 0 && blogs.map((item, id) => (
          <div className='my-5' key={id}>
            
            <div className="w-full h-[360px] relative">
              <Image
                src={item.image?.image_url  }
               fill
                 quality={60}
                        loading="lazy"
                        sizes="(max-width : 768 px) 70vw , (max-width :1200px ) 50vw , 33vw"
                alt={item.title}
                className='w-[400px] object-cover md:w-[588px] h-[300px] mx-auto rounded-[5px]'
              />
            </div>
            <div className='text-center px-6 md:px-20'>
              <h4 className='text-[14px] font-[400] text-[#5D5D5D] uppercase my-2'>{item.destination?.title}</h4>
              
              <p className='lora text-[14px] font-[400] italic text-[#5D5D5D]'>
               {item.meta.meta_title}
              </p>
              <h5 className='my-2 uppercase font-[700] text-[14px]'>
                <span className='border-b-1'>Keep Reading...</span>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
