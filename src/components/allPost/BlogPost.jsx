import { getPost } from "@/lib/getPost";

const BlogPost = async () => {
    const blogData = await getPost()
    
    return (
        <div className="container mx-auto mb-24">
           <h1 className="text-3xl font-bold text-center mb-8">All Post Here</h1>
           <div className="">
            <ul className="text-xl text-center flex flex-col gap-3 cursor-pointer font-semibold">
                {
                    blogData.map(blog=>(
                        <li key={blog.id} className="hover:text-blue-600 hover:underline">{blog?.title}</li>
                    ))
                }
            </ul>
            <div className="">

            </div>
           </div> 
        </div>
    );
};

export default BlogPost;