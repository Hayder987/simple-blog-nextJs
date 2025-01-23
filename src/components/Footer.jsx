import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#000305] px-6 py-16 text-white">
      <footer className="flex container mx-auto flex-col justify-center items-center">
        <div className="flex items-center gap-3 mb-10">
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="rounded-full"
          ></Image>
          <h1 className="text-base md:text-2xl font-bold ">My Blog</h1>
        </div>
        <p className="lg:w-7/12 mx-auto text-center text-xl font-medium text-gray-300">
          Explore the latest trends, tips, and innovations in technology with My
          Blog. Stay updated with expert insights, in-depth guides, and
          practical solutions for all your tech needs.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
