"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function CustomLinks() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathname = usePathname();

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

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  const firstThree = menuItems.slice(0, 3);
  const remaining = menuItems.slice(3);

  const withLeadingSlash = (s?: string) => {
    if (!s) return "/";
    return s.startsWith("/") ? s : `/${s}`;
  };

  const LinkItem = ({ item }: { item: any }) => {
    const href = withLeadingSlash(item.slug || "/");
    const isActive = pathname === href || pathname.startsWith(href + "/");

    return (
      <li key={item.id} className="py-2 duration-200">
        <Link
          href={href}
          className={`text-[12px] font-bold tracking-wide px-3 transition-all duration-300 border-b-2
            ${isActive
              ? "text-[#C19A6B] border-[#C19A6B]"
              : "text-[#10221B] border-transparent hover:text-[#C19A6B] hover:border-[#C19A6B]"}
          `}
        >
          {item.title}
        </Link>
      </li>
    );
  };

  return (
    <div className="md:flex items-center gap-6">
      <ul className="md:flex gap-4 text-[14px] font-[500]">
        {firstThree.map((item) => <LinkItem key={item.id} item={item} />)}
      </ul>

      <div className="my-2 md:my-0">
        <Image
          src="/Link.svg"
          alt="Logo"
          width={150}
          height={100}
          className="w-[150px] md:w-[210px] object-contain mx-auto"
        />
      </div>

      <ul className="md:flex gap-4 text-[14px] font-[500]">
        {remaining.map((item) => <LinkItem key={item.id} item={item} />)}
      </ul>
    </div>
  );
}
