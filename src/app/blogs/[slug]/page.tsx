import Blogdetailsbackgraoundimage from '@/_components/Blogdetails/Blogdetailsbackgraoundimage/Blogdetailsbackgraoundimage';
import Blogdetailsheader from '@/_components/Blogdetails/Blogdetailsheader/Blogdetailsheader';
import Blogdetailssectionfour from '@/_components/Blogdetails/Blogdetailssectionfour/Blogdetailssectionfour';
import Blogdetailssectionthree from '@/_components/Blogdetails/Blogdetailssectionthree/Blogdetailssectionthree';
import Blogdetailssectiontwo from '@/_components/Blogdetails/Blogdetailssectiontwo/Blogdetailssectiontwo';
import { getData } from '@/utilities/fetchApi';
import React from 'react'

export default async function page({params}:{params:{slug:string}}) {
  const {slug}=await params
    const blogdetails = await getData(
      `articles/${slug}?tenant_id=58&language_id=51`
    );
    
  return <>
   <Blogdetailsbackgraoundimage blogdetails={blogdetails.row.image}/>
<Blogdetailsheader blogdetails={blogdetails.row.title} />
<Blogdetailssectiontwo items={blogdetails.row.items} />
<Blogdetailssectionthree blogdetails={blogdetails.row.packages}/>
<Blogdetailssectionfour/>
  </>
}
