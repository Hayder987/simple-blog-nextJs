import { getSinglePost } from "@/lib/getSinglePost";
import Link from "next/link";

export default async function allPost({ params }) {
  const { id } = await params;
  const post = await getSinglePost(id);

  return (
    <div className="container py-8 mx-auto mb-10">
      <div className=" lg:max-w-[900px] mx-auto border shadow-lg py-10 p-6">
        <h1 className="text-center text-3xl mb-6">Post ID: {post?.id}</h1>
        <h3 className="lg:text-2xl text-center mb-8">{post?.title}</h3>
        <p className="text-gray-600 text-xl mb-10 text-center">{post?.body}</p>
        <div className="flex justify-center">
          <Link href='/'>
            <button className="border-gray-700 gap-2 duration-300 hover:bg-gray-950 hover:text-gray-100 font-semibold border py-1 px-4">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
