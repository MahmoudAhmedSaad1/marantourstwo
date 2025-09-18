import Image from "next/image";
import Link from "next/link";
import Customdiv from "../customp&h&img/page";
import { getData } from "@/utilities/fetchApi";
export default async function Cuaderno() {
  const blogsData = await getData(
    "articles?tenant_id=58&language_id=51&status=active&paginate=3&order=desc"
  );

  const blogs = Array.isArray(blogsData?.rows) ? blogsData.rows : [];
  return (
    <div className="container mx-auto">
      <div className="text-center mb-5">
        <Customdiv
          pharagraph="BLOG DE MARAM"
          heading_3="Últimos artículos que puedes interesar" 
        />
      </div>

      <div className="grid md:grid-cols-2">
        {blogs?.length > 0 &&
          blogs.map((item, id) => (
            <Link key={id} href={`/blogs/${item.slug}`}>
              <div className="my-5">
                <div className="w-full h-[360px] relative">
                  <Image
                    src={
                      item.image?.image_url &&
                      item.image.image_url.trim() !== ""
                        ? item.image.image_url
                        : "/public/imgs/6befc328f9fbf4ceebcdee8cbea378b541bfec21.jpg"
                    }
                    fill
                    quality={60}
                    loading="lazy"
                    sizes="(max-width : 768 px) 70vw , (max-width :1200px ) 50vw , 33vw"
                    alt={item.title ?? "image"}
                    className="w-[400px] object-cover md:w-[588px] h-[300px] mx-auto rounded-[5px]"
                  />
                </div>
                <div className="text-center px-6 md:px-20">
                  <h4 className="text-[14px] font-[400] text-[#5D5D5D] uppercase my-2">
                    {item.destination?.title}
                  </h4>

                  <p className="lora text-[14px] font-[400] italic text-[#5D5D5D]">
                    {item.meta.meta_title}
                  </p>
                  <h5 className="my-2 uppercase font-[700] text-[14px]">
                    <span className="border-b-1">Keep Reading...</span>
                  </h5>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
