import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


export default function CustomLinks() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenus = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('https://api.dubaidaytrips.com/v1/menus?tenant_id=58&language_id=51');
        const data = await res.json();
        setMenuItems(data.rows || []);
        
      } catch {
        setError("Failed to fetch menu items");
      } finally {
        setLoading(false);
      }
    };
    fetchMenus();
  }, []);

  if (error) return <div> {error}</div>;
  if (loading) return <div>Loading...</div>;

 
  const firstThree = menuItems.slice(0, 3);
  const remaining = menuItems.slice(3);

  return (
    <div className="md:flex items-center gap-6">
      <ul className="md:flex gap-4 text-[14px] font-[500] text-black">
        {firstThree.map((item) => (
          <li key={item.id} className="hover:text-[#C19A6B] py-2 hover:underline duration-200">
            <Link
              href={item.slug || '/'}
              className="text-[#10221B] hover:text-[#C19A6B] text-[12px] font-bold transition duration-200 tracking-wide px-3"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className=" my-2 md:my-0 ">
        <Image src="/Link.svg" alt="Logo" width={150} height={100} className="w-[150px] md:w-[210px] object-contain mx-auto" />
      </div>

      <ul className="md:flex gap-4 text-[14px] font-[500] text-black">
        {remaining.map((item) => (
          <li key={item.id} className="hover:text-[#C19A6B] py-2 hover:underline duration-200">
            <Link
              href={item.slug || '/'}
              className="text-[#10221B] hover:text-[#C19A6B] text-[12px] font-bold transition duration-200 tracking-wide px-3"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}