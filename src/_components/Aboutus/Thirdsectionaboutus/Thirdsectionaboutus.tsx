import React from "react";
import Thirdsectionaboutuspartone from "./Thirdsectionaboutusparttwo/Thirdsectionaboutuspartone/Thirdsectionaboutuspartone";
import { getData } from "@/utilities/fetchApi";

export default async function Thirdsectionaboutus() {
  const newdestionation = await getData(
      "regions/destinos?tenant_id=58&language_id=51");
       
  return <>
    <Thirdsectionaboutuspartone destionation={newdestionation.row.destinations}/>
  </>
}8
