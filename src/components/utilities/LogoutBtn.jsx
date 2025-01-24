'use client'
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { LuLogOut } from "react-icons/lu";

const LogoutBtn = () => {
  return (
    <LogoutLink className="border-gray-700 flex items-center gap-2 duration-300 hover:bg-gray-950 hover:text-gray-100 font-semibold border py-1 px-4">
      Log Out 
      <LuLogOut />
      </LogoutLink>
  );
};

export default LogoutBtn;
