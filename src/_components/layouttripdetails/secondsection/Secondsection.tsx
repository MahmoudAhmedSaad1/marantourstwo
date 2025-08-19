import Headerforsecondsection from "./Headerforsecondsection/Headerforsecondsection";
import Iconsforsecondsection from "./Iconsforsecondsection/Iconsforsecondsection";
import Heightlight from "./Heightlight/Heightlight";
import IncludedandExcluded from "./IncludedAndExcluded/IncludedandExcluded";
import Formsectiontwo from "./Form/Formsectiontwo";
export default function Secondsection({images}) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <p className="text-sm text-gray-500 mb-6">
        Home › <span className="text-gray-700">Package</span>
      </p>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Headerforsecondsection images={images}  />
          <Iconsforsecondsection />
          <hr className="my-6 border-gray-200" />
          <Heightlight />
          <IncludedandExcluded  />
        </div>
        <Formsectiontwo />
      </div>
    </section>
  );
}
