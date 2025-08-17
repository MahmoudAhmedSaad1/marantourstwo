import Largephoto from "./Largephoto/Largephoto";
import Smallphotos from "./Smallphotos/Smallphotos";

type Img = { src: string; alt?: string; href?: string };

export default function Photos({ images }: { images: Img[] }) {
  return (
   <section className="container py-5 mx-auto px-4 sm:px-6 lg:px-8">

  <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-xl p-3 sm:p-4 lg:p-3">
    <div className="grid gap-3 sm:gap-4 lg:gap-5 md:grid-cols-2">
      <Largephoto images={images} />
      <Smallphotos images={images} />
    </div>
  </div>
</section>

  );
}
