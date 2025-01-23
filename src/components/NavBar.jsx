import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-slate-100">
      <nav className="container px-2 flex justify-between items-center py-3 mx-auto">
        {/* logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="rounded-full"
          ></Image>
          <h1 className="text-2xl font-bold ">My Blog</h1>
        </div>
        {/* navMenu */}
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-8 cursor-pointer ">
            <li>Home</li>
            <li>Profile</li>
          </ul>
          <div className="">
          <button className="border-gray-700 duration-300 hover:bg-gray-950 hover:text-gray-100 font-semibold border py-1 px-4">Login</button>
          <button className="border-gray-700 duration-300 hover:bg-gray-950 hover:text-gray-100 font-semibold border py-1 px-4">Logout</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
