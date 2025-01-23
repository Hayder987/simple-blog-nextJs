'use client'
import { LuLogOut } from "react-icons/lu";
const LogoutBtn = () => {
  return (
    <div>
      <button className="border-gray-700 flex items-center gap-2 duration-300 hover:bg-gray-950 hover:text-gray-100 font-semibold border py-1 px-3">
        Logout
        <span className="text-xl"><LuLogOut /></span>
      </button>
    </div>
  );
};

export default LogoutBtn;
