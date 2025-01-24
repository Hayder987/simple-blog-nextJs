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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allPost.map((blog) => (
          <div key={blog?.id} className="border p-6 flex flex-col">
            <div className="flex-grow">
              <h1 className="text-xl font-bold mb-4">{blog?.title}</h1>
              <p className="mb-4">{blog?.body.slice(0, 50)}...</p>
            </div>
            <div className="">
              <Link href={`/blog/${blog?.id}`}>
                <button className="border-gray-700 flex items-center gap-2 duration-300 hover:bg-gray-950 hover:text-gray-100 font-semibold border py-1 px-4">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
