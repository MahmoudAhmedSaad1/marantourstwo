import React from "react";
import Thirdsectionaboutuspartone from "./Thirdsectionaboutusparttwo/Thirdsectionaboutuspartone/Thirdsectionaboutuspartone";
import { getData } from "@/utilities/fetchApi";

export default async function Thirdsectionaboutus() {
  const destionation = await getData(
      "destinations/?tenant_id=58&language_id=51&paginate=5&status=active");
      
  return <>
    <Thirdsectionaboutuspartone destionation={destionation.rows}/>
  </>
}
