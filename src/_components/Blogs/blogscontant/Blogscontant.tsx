import Leftsideblogs from "../Leftsideblogs/Leftsideblogs";
import Rightsideblogs from "../Rightsideblogs/Rightsideblogs";
type SidePost = { img: string; title: string; date: string; href?: string };
type BlogsType = { rows: any[] };
type Props = {
  Blogs: BlogsType;
  latestPosts?: SidePost[];
  gallery?: string[];
};
export default function Blogscontant({
 Blogs,
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
        <Leftsideblogs Blogs={Blogs.rows}/>
       <Rightsideblogs Blogs={Blogs.rows} gallery={gallery} />
      </div>
    </section>
  );
}
