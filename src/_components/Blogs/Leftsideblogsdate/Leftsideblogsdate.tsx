import React from 'react'
type LeftsideblogsdateProps = {
  main: {
    day: string | number;
    month: string;
  };
};
export default function Leftsideblogsdate({ main }: LeftsideblogsdateProps) {
  return (
    <>
      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-sm bg-[#E83F53] text-[#FFFFFF] shadow">
        <span className="text-[22px] leading-none font-bold">{main.day}</span>
        <span className="text-[10px] uppercase tracking-[0.08em]">{main.month}</span>
      </div>
    </>
  );
}
