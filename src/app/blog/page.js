import { getPost } from "@/lib/getPost";
import Link from "next/link";

export const metadata = {
  title: "All Post",
  description: "My Profile Page",
};

export default async function allPost() {
  const allPost = await getPost();

  return (
    <div className="container mx-auto mb-24">
      <h1 className="text-4xl font-bold text-center mb-10">All Post Here</h1>
      <div className="border-b-2 mb-8 lg:w-5/12 mx-auto"></div>
      <div className="">
        <ul className="text-xl text-center flex flex-col gap-3 cursor-pointer font-semibold">
          {allPost.map((blog) => (
            <li key={blog.id} className="hover:text-blue-600 hover:underline">
              <Link href={`/blog/${blog?.id}`}>{blog?.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
