import LogoutBtn from "@/components/utilities/LogoutBtn";
import { getUser } from "@/lib/getUser";
import Link from "next/link";

export const metadata = {
  title: "My Profile",
  description: "My Profile Page",
};

export default async function profilePage() {
  const [user] = await getUser()
  return (
    <div className="container py-10 mx-auto">
       <h1 className="text-center text-2xl md:text-4xl mb-6 font-bold">Welcome Your Profile!</h1>      
       <div className="flex justify-center items-center">
       <Link href={'/api/auth/logout'}>
       <LogoutBtn></LogoutBtn>
       </Link>
       </div>

    </div>
  );
}
