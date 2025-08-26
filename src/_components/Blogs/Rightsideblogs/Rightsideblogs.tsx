import React from 'react'
import Rightsideblogslatestposts from '../Rightsideblogslatestposts/Rightsideblogslatestposts';
import Rightsideblogslatestgallery from '../Rightsideblogslatestgallery/Rightsideblogslatestgallery';
type LatestPost = {
  img: string;
  title: string;
  href?: string;
  date: string;
};
type RightsideblogsProps = {
  latestPosts: LatestPost[];
  gallery: string[];
};
export default function Rightsideblogs({ Blogs, gallery }: RightsideblogsProps) {
  // console.log(Blogs);
  
  return <>
   <aside className="lg:pt-1">
            <Rightsideblogslatestposts Blogs={Blogs}/>
           <Rightsideblogslatestgallery gallery={gallery} />
          </aside>
  
  </>
}
