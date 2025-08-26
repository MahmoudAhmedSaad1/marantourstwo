// components/LatestPosts.tsx
import Image from "next/image";
import Link from "next/link";

type Post = { image?: string; title: string; date: string; href?: string; modified?: string };

export default function Rightsideblogslatestposts({
  Blogs,
}: {
  Blogs: Post[];
}) {
  // console.log(Blogs);
  const FALLBACK = "/imgs/istockphoto-1396814518-612x612.jpg";

  return (
    <aside className="w-full">
      <h4 className="text-[20px] sm:text-[22px] font-semibold text-neutral-900">
        Latest Posts
      </h4>
      <ul className="mt-4 space-y-6">
        {Blogs.map((p, idx) => (
          <li key={idx} className="flex items-center gap-3 sm:gap-4">
            <Link
              href={p.href || "#"}
              className="relative h-15 w-15 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded"
              aria-label={p.title}
            >
              <Image
                src={p.image ?? FALLBACK}
                alt={p.title}
                fill
                className="object-cover"
                sizes="70px"
                unoptimized
              />
            </Link>
            <div className="min-w-0">
              <Link
                href="/"
                className="block font-semibold text-neutral-900 leading-snug text-[18px] sm:text-[18px]"
              >
                <span className="line-clamp-2">{p.title}</span>
              </Link>
              <p className="mt-1 text-[14px] text-[#182731]">
                {p?.modified &&
                  new Intl.DateTimeFormat("en-US", {
                    timeZone: "Africa/Cairo",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(p.modified))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
