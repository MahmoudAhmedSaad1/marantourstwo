import React from "react";
import CustomCard from "../../customcard/page";
import Link from "next/link";
import { getData } from "@/utilities/fetchApi";

interface Destination {
  id: number;
  slug: string;
  title: string;
}

interface ImageObj {
  image_url: string;
  image_alt: string;
  image_title: string;
}

interface Pack {
  id: number;
  slug: string;
  destination: Destination;
  duration: string;
  start_price: number;
  title: string;
  image: ImageObj | null;
}

export default async function Completecard() {
  const packedgeData = await getData(
    "packages/?tenant_id=58&language_id=51&viewInHome=1&paginate=6&status=active"
  );

  const packedge: Pack[] = Array.isArray(packedgeData?.rows) ? packedgeData.rows : [];

  // صورة بديلة آمنة لـ next/image
  const PLACEHOLDER = "/images/placeholder.jpg"; // تأكد إن الملف موجود في public/images

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 mt-5 md:mt-4">
        {packedge.map((item) => {
          const imgUrl = item.image?.image_url || PLACEHOLDER;
          const href = `/${item.destination?.slug}/${item.slug}`;
          const price = `${item.start_price ?? 0} $`;

          return (
            <Link key={item.id} href={href}>
              <CustomCard
                slug={item.slug}
                title={item.title}
                price={price}
                location={item.destination?.title ?? ""}
                imageUrl={imgUrl}
                duration={item.duration}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
