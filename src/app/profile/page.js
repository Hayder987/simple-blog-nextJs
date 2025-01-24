import LogoutBtn from "@/components/utilities/LogoutBtn";

export const metadata = {
  title: "My Profile",
  description: "My Profile Page",
};

export default async function profilePage() {
  
  return (
    <div className="container py-10 mx-auto">
       <h1 className="text-center text-2xl md:text-4xl mb-6 font-bold">Welcome To Your Profile</h1>
       <div className="flex justify-center items-center">
       <LogoutBtn></LogoutBtn>
       </div>

    </div>
  );
}
