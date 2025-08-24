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
export default function Rightsideblogs({ latestPosts, gallery }: RightsideblogsProps) {
  return <>
   <aside className="lg:pt-1">
            <Rightsideblogslatestposts latestPosts={latestPosts}/>
           <Rightsideblogslatestgallery gallery={gallery} />
          </aside>
  
  </>
}
