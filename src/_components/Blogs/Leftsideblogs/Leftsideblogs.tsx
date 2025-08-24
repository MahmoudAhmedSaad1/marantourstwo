import React from 'react'
import Leftsideblogsimage from '../Leftsideblogsimage/Leftsideblogsimage';
import Leftsideblogsdate from '../Leftsideblogsdate/Leftsideblogsdate';
import Leftsideblogstitleanddescription from '../Leftsideblogstitleanddescription/Leftsideblogstitleanddescription';
type MainBlog = {
  img: string;
  title: string;
  day: string | number;
  month: string;
  href?: string;
  excerpt: string;
};
interface LeftsideblogsProps {
  main: MainBlog;
}
export default function Leftsideblogs({ main }: LeftsideblogsProps) {
  return <>
  <article className="lg:col-span-2">
          <Leftsideblogsimage main={main}/>
          <div className="mt-5 flex items-start gap-3 sm:gap-4">
           <Leftsideblogsdate main={main}/>
           <Leftsideblogstitleanddescription main={main}/>
          </div>
        </article>
  
  </>
}
