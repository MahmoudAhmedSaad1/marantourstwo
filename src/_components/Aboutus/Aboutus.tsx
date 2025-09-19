// app/sobre-maram/page.tsx
import React from "react";
import Firestsectioncontact from "../Contactusfooter/Firestsectioncontact/Firestsectioncontact";
import Secondsectionaboutus from "../Secondsectionaboutus/Secondsectionaboutus";
import Thirdsectionaboutus from "./Thirdsectionaboutus/Thirdsectionaboutus";
import Fourthsectionaboutus from "./fourthsectionaboutus/fourthsectionaboutus";
import Fifthsectionaboutus from "./Fifthsectionaboutus/Fifthsectionaboutus";
import { getData } from "@/utilities/fetchApi";
import type { Metadata } from "next";

// 1) الميتاداتا الديناميكية
export async function generateMetadata(): Promise<Metadata> {
  const aboutUs = await getData(
    `pages/sobre-maram?tenant_id=58&language_id=51`
  );

  const title = aboutUs?.row?.meta?.meta_title ?? "Sobre nosotros";
  const description =
    aboutUs?.row?.meta?.meta_description ?? "Conoce a Maram Tours…";
  const metaKeywords =
    aboutUs?.row?.meta?.meta_keywords ?? "viajes de bienestar";

  return {
    title,
    description,
    keywords: Array.isArray(metaKeywords)
      ? metaKeywords
      : String(metaKeywords)
          .split(",")
          .map((k) => k.trim()),
    alternates: { canonical: "/sobre-maram" },
    openGraph: {
      type: "website",
      url: "/sobre-maram",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Aboutus() {
  const aboutUs = await getData(
    `pages/sobre-maram?tenant_id=58&language_id=51`
  );
  const writers = await getData(
    `writers?tenant_id=58&language_id=51&paginate=100`
  );

  return (
    <>
      <Firestsectioncontact Contactfooter={aboutUs.row} />
      <Secondsectionaboutus aboutUs={aboutUs.row.body} />
      <Thirdsectionaboutus />
      <Fourthsectionaboutus writers={writers.rows} />
      <Fifthsectionaboutus />
    </>
  );
}
