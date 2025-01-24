
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginBtn from "./utilities/LoginBtn";
import LogoutBtn from "./utilities/LogoutBtn";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const NavBar = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();

  return (
    <div className="bg-slate-100 sticky z-10 top-0 mb-10">
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
          <h1 className="text-base hidden md:block md:text-2xl font-bold ">
            My Blog
          </h1>
        </div>
        {/* navMenu */}
        <div className="flex items-center gap-6">
          <ul className="flex items-center font-medium gap-4 flex-wrap md:gap-8 cursor-pointer ">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/blog"}>All Post</Link>
            </li>
            <li>
              <Link href={user?"/profile":'/api/auth/login'}>Profile</Link>
            </li>
          </ul>
          <div className="">
            {user && isUserAuthenticated ? (
              <LogoutBtn></LogoutBtn>
              
            ) : (
              <LoginBtn></LoginBtn>  
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
