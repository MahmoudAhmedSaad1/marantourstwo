// components/LatestPosts.tsx
import Image from "next/image";
import Link from "next/link";

type Post = { img?: string; title: string; date: string; href?: string };

export default function Rightsideblogslatestposts({ latestPosts }: { latestPosts: Post[] }) {
  return (
    <aside className="w-full">
      <h4 className="text-[20px] sm:text-[22px] font-semibold text-neutral-900">
        Latest Posts
      </h4>

      <ul className="mt-4 space-y-6">
        {latestPosts.map((p, i) => (
          <li key={i} className="flex items-center gap-3 sm:gap-4">
            {p.img ? (
              <Link
                href={p.href || "#"}
                className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded"
                aria-label={p.title}
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="56px"
                  unoptimized
                />
              </Link>
            ) : (
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded bg-neutral-100 ring-1 ring-neutral-200 flex items-center justify-center">
                {/* خط مائل بسيط كـ Placeholder */}
                <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full text-neutral-200">
                  <path d="M3 21L21 3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="text-[10px] text-neutral-400">No image</span>
              </div>
            )}

            {/* العنوان + التاريخ */}
            <div className="min-w-0">
              <Link
                href={p.href || "#"}
                className="block font-semibold text-neutral-900 leading-snug hover:underline text-[18px] sm:text-[18px]"
              >
                <span className="line-clamp-2">{p.title}</span>
              </Link>
              <p className="mt-1 text-[14px] text-[#9aa3a9]">{p.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
