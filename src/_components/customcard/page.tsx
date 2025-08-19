import { FaArrowRight, FaRegClock } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

type Card = {
  title: string;
  location: string;
  price: string;
  imageUrl: string;
  slug: string;
  duration: string;
};

export default function CustomCard({ title, location, price, imageUrl,duration,slug }: Card) {
  console.log(slug);
  
  return (
   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="bg-white shadow-md hover:shadow-xl  hover:-translate-y-0.5 rounded-xl overflow-hidden card-shadow transition-transform duration-300 hover:scale-[1.02]">
    <div className="relative">
      <Image
        src={imageUrl}
        alt="Vinales Valley"
        priority
        fetchPriority="high"
        width={100}
        height={100}
        className="w-full h-64 object-cover"
      />

      <div className="absolute top-4 left-4 bg-[#79A154] text-white px-3 py-3 rounded-[4px] text-sm flex items-center">
        <FaRegClock className="ms-0 mb-1" />
        <span className="ps-1 font-[600] text-[13px]">{duration}</span>
      </div>
    </div>

    <div className="px-5 py-3">
      <Link href={`/Listtrip/${slug}`}><h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3></Link>

      <div className="flex items-center text-gray-600 mb-6">
        <CiLocationOn className="me-2" />
        <span className="text-sm">{location}</span>
      </div>

      <div className="flex justify-between">
        <span
          
          className="flex items-center  border border-[#C19A6B] text-[#C19A6B] text-[13px] font-[600] px-5 py-2 rounded-md hover:bg-[#C19A6B] hover:text-white transition-colors duration-200"
        >
          Diseña tu ruta
          <span className="text-[10px]">
            <FaArrowRight />
          </span>
        </span>

        <div className="text-right">
          <p className="text-black text-sm">Starting From</p>
          <p className="text-[#C19A6B] font-bold text-xl me-auto">€{price}</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
