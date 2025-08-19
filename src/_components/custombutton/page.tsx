import Link from "next/link";

type childern = {
  title: string;
  
};

export default function CustomButton({ title }: childern) {
  return (
    <button className=" bg-[#C49A6C] py-4 px-5 text-white border border-[#C49A6C] hover:border-[#C49A6C] rounded-sm hover:bg-white
     hover:text-[#C49A6C] duration-300 uppercase text-[14px] font-[700]"> <Link href="/tripdetails">{title}</Link></button>
  );
}
