import { getPost } from "@/lib/getPost";
import Link from "next/link";

const BlogPost = async () => {
  const blogData = await getPost();

  return (
    <div className="container mx-auto mb-24">
      <h1 className="text-4xl font-bold text-center mb-10">Recent Post Here</h1>
      <div className="border-b-2 mb-8 lg:w-5/12 mx-auto"></div>
      <div className="">
        <ul className="text-xl text-center flex flex-col gap-3 cursor-pointer font-semibold">
          {blogData.slice(0, 30).map((blog) => (
            <li key={blog.id} className="hover:text-blue-600 hover:underline">
              <Link href={`/blog/${blog?.id}`}>{blog?.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-12">
          <Link href={'/blog'}>
            <button className="bg-gray-950 text-white font-semibold py-2 px-8 hover:text-red-600 duration-300">
              See All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
