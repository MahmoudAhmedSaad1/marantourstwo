import React from 'react'
import Blogsheader from './Blogsheader/Blogsheader'
import Blogscontant from './blogscontant/Blogscontant'
import { getData } from '@/utilities/fetchApi';

export default async function Blogslayout() {
   const Blogs = await getData(
        "articles?tenant_id=58&language_id=51&status=active&paginate=100"
      );
  
  return <>
  
  <Blogsheader/>
  <Blogscontant Blogs={Blogs} />
  </>
}
