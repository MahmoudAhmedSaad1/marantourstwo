import React from 'react'
import Leftsideblogsimage from '../Leftsideblogsimage/Leftsideblogsimage';
import Leftsideblogsdate from '../Leftsideblogsdate/Leftsideblogsdate';
import Leftsideblogstitleanddescription from '../Leftsideblogstitleanddescription/Leftsideblogstitleanddescription';

export type MainBlog = {
  image: string;
  title: string;
  body: string;
  day: string | number;
  month: string;
  href?: string;
  excerpt: string;
  id?: string | number;
  modified?: string | Date;
};

interface LeftsideblogsProps {
  Blogs: MainBlog[];
}

export default function Leftsideblogs({ Blogs }: LeftsideblogsProps) {
  if (!Blogs?.length) return null;

  return (
    <>
      {Blogs.map((blog, idx) => (
        <article key={blog.id ?? idx} className="lg:col-span-2">
          <Leftsideblogsimage src={blog?.image} alt={blog?.title} />

          <div className="my-5 flex items-start gap-3 sm:gap-4">
            <Leftsideblogsdate modified={blog.modified}  />
            <Leftsideblogstitleanddescription body={blog.body}  title={blog.title} />
          </div>
        </article>
        
      ))}
    </>
  );
}
