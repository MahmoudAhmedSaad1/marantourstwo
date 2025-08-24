import Headerforsecondsection from "./Headerforsecondsection/Headerforsecondsection";
import Iconsforsecondsection from "./Iconsforsecondsection/Iconsforsecondsection";
import Heightlight from "./Heightlight/Heightlight";
import IncludedandExcluded from "./IncludedAndExcluded/IncludedandExcluded";
import Formsectiontwo from "./Form/Formsectiontwo";
import Link from "next/link";
export default function Secondsection({ packedges }) {
  
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-0">
      <p className="text-lg text-gray-500 mb-6 cursor-pointer ">
        <Link href={"/"}>
          <span className="hover:text-[#C19A6B]">Inico</span>{" "}
        </Link>
        <span className="hover:text-[#C19A6B]">›</span>{" "}
        <Link href={"/"}>
          <span className="text-gray-700 hover:text-[#C19A6B]">
            {packedges.destination.title}
          </span>
        </Link>{" "}
        <span className="hover:text-[#C19A6B]">/</span>{" "}
        <span className="hover:text-[#C19A6B]">viaje-completo-a-egipto</span>
      </p>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Headerforsecondsection images={packedges} />
          <Iconsforsecondsection />
          <hr className="my-6 border-gray-200" />
          <Heightlight />
          <IncludedandExcluded packedges={packedges} />
        </div>
        <Formsectiontwo />
      </div>
    </section>
  );
}
