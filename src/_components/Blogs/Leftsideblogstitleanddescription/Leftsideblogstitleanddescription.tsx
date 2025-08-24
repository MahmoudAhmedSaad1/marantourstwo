import React from "react";
import Link from "next/link";
type MainProps = {
  href?: string;
  title: string;
  excerpt: string;
};
interface LeftsideblogstitleanddescriptionProps {
  main: MainProps;
}
export default function Leftsideblogstitleanddescription({
  main,
}: LeftsideblogstitleanddescriptionProps) {
  return (
    <>
      <div className="min-w-0">
        {main.href ? (
          <Link
            href={main.href}
            className="block text-[22px] sm:text-[24px] md:text-[26px] font-semibold text-[#303030] "
          >
            {main.title}
          </Link>
        ) : (
          <h3 className="text-[22px] sm:text-[24px] md:text-[26px] font-semibold text-neutral-900">
            {main.title}
          </h3>
        )}
        <p className="mt-3 text-[16px] md:text-[17px] leading-[30px] text-[#8E8E8E] antialiased">
          {main.excerpt}
        </p>
      </div>
    </>
  );
}
