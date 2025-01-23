import { getSinglePost } from "@/lib/getSinglePost";


export default async function allPost({params}) {
    const {id} = await params  
    const post = await getSinglePost(id)
    
  return (
    <div className="container py-8 mx-auto mb-10">
      <div className=" p-6">
        <h1 className="text-center text-3xl mb-6">Post ID: {post?.id}</h1>
        <h3 className="lg:text-2xl text-center mb-8">{post?.title}</h3>
        <p className="text-gray-600 text-xl text-center">{post?.body}</p>

      </div>

    </div>
  );
}
