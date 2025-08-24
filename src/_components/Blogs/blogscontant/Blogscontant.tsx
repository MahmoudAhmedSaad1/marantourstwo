import Leftsideblogs from "../Leftsideblogs/Leftsideblogs";
import Rightsideblogs from "../Rightsideblogs/Rightsideblogs";
type MainPost = {
  img: string;
  day: string;
  month: string; // "APR"
  title: string;
  excerpt: string;
  href?: string;
};
type SidePost = { img: string; title: string; date: string; href?: string };
type Props = {
  main?: MainPost;
  latestPosts?: SidePost[];
  gallery?: string[];
};
export default function Blogscontant({
  main = {
    img: "/imgs/62c9180d6d0cee0b33567f59bf37954c685263a5.jpg",
    day: "5",
    month: "APR",
    title: "Discover Egypt: A Land of Timeless Wonders",
    excerpt:
      "Egypt is a country where ancient history meets modern charm. From the iconic pyramids of Giza and the majestic Nile River to bustling markets and stunning Red Sea beaches, Egypt offers a unique blend of culture, adventure, and relaxation. Explore the treasures of pharaohs, indulge in authentic cuisine, and experience the warmth of Egyptian hospitality. Every corner of Egypt tells a story waiting to be discovered.",
    href: "#",
  },
  latestPosts = [
    {
      img: "/imgs/078ac07a397f7ab98c025ceea0729f213322b49f.jpg",
      title: "Arctic Circle Trail",
      date: "April 5, 2016",
      href: "#",
    },
    {
      img: "/imgs/ad411ba306f1301468c823d0d6d4e0f471b0bdcd.jpg",
      title: "Gondola Ride in Venice",
      date: "April 5, 2016",
      href: "#",
    },
    {
      img: "/imgs/f8f4c0bcd3197ef3d51449684c7bf3fbb197b916.jpg",
      title: "Central Asia Rally",
      date: "April 5, 2016",
      href: "#",
    },
  ],
  gallery = [
    "/imgs/aacea23bd959baf374bc43d869e37bad53e2dc6b.jpg",
    "/imgs/2c791c6d7bfd28ffa7c471aa9356b11740693c54.jpg",
    "/imgs/09cba6f7a28e94147703dde9a3d7deba362e3ec3.jpg",
    "/imgs/bd2b8c7545bffac577e305a5317bfe78abc31f42.jpg",
    "/imgs/529f53a46c167816556c1d691a6c5d8f3663b724.jpg",
    "/imgs/a0b168663068e14b9731c7bb3b058deac1637a69.jpg",
  ],
}: Props) {
  return (
    <section className="mx-auto max-w-6xl px-3 sm:px-4 py-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        <Leftsideblogs main={main}/>
       <Rightsideblogs latestPosts={latestPosts} gallery={gallery} />
      </div>
    </section>
  );
}
