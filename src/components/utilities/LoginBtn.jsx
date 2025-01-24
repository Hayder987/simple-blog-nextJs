"use client";
import { LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { LuLogIn } from "react-icons/lu";

const LoginBtn = () => {
    
  return (
    <LoginLink className="border-gray-700 flex items-center gap-2 duration-300 hover:bg-gray-950 hover:text-gray-100 font-semibold border py-1 px-4">
      <span className="text-xl"><LuLogIn /></span>
     Login
      </LoginLink>
  );
};

export default LoginBtn;
