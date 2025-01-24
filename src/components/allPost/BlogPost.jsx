import { getPost } from "@/lib/getPost";
import Link from "next/link";

const BlogPost = async () => {
  const blogData = await getPost();

  return (
    <div className="container mx-auto mb-24">
      <h1 className="text-4xl font-bold text-center mb-10">Recent Post Here</h1>
      <div className="border-b-2 mb-8 lg:w-5/12 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogData.slice(0, 20).map((blog) => (
          <div key={blog?.id} className="border p-6 flex flex-col">
            <div className="flex-grow">
              <h1 className="text-xl font-bold mb-4">{blog?.title}</h1>
              <p className="mb-4">{blog?.body.slice(0, 50)}...</p>
            </div>
            <div className="">
              <Link href={`/blog/${blog?.id}`}>
                <button className="border-gray-700 gap-2 duration-300 hover:bg-gray-950 hover:text-gray-100 font-semibold border py-1 px-4">Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link href={"/blog"}>
          <button className="bg-gray-950 text-white font-semibold py-2 px-8 hover:text-red-600 duration-300">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
