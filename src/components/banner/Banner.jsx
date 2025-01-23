import banner from "@/assets/images/banner.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex px-2 flex-col-reverse container mx-auto lg:flex-row gap-10">
      {/* text */}
      <div className="lg:w-1/2 flex items-center ">
        <div className="">
        <h1 className="text-3xl lg:text-5xl font-bold mb-10">Next.js: Your Gateway to Modern Web Development</h1>
        <p className="text-gray-600 font-medium text-xl">
          Dive deep into the world of Next.jsand unlock the full potential of
          this powerful React framework. Our blog covers everything from
          beginner guides and advanced techniques to performance optimization
          and seamless deployment strategies. Discover the secrets to building
          fast, SEO-friendly, and scalable web applications with Next.js.Join
          our community of developers and stay updated with the latest trends
          and innovations in modern web development. Ready to level up your
          Next.jsskills? 🚀 Let's get started!
        </p>
        </div>
      </div>
      {/* img */}
      <div className="lg:w-1/2">
        <Image src={banner} alt={"banner"}></Image>
      </div>
    </div>
  );
};

export default Banner;
