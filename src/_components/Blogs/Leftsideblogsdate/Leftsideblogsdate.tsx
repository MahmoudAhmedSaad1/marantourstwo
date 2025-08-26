import React from "react";
interface LeftsideblogsdateProps {
  modified?: string | number | Date;
}

export default function Leftsideblogsdate({ modified }: LeftsideblogsdateProps) {
  console.log(modified);
  
  return (
    <>
      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-sm bg-[#E83F53] text-[#FFFFFF] shadow">
        <span className="text-[22px] leading-none font-bold">
          {modified &&
            new Intl.DateTimeFormat("en-US", {
              timeZone: "Africa/Cairo",
              day: "numeric",
            }).format(new Date(modified))}
        </span>
        <span className="text-[10px] uppercase tracking-[0.08em]">
          {modified &&
            new Intl.DateTimeFormat("en-US", {
              timeZone: "Africa/Cairo",
              month: "short",
            }).format(new Date(modified))}
        </span>
      </div>
    </>
  );
}
