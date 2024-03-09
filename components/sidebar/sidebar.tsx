import Image from "next/image";
import SidebarElements from "./sidebar-elements";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@/utils/current-user";

export const SideBar = async () => {
  const user = await currentUser();
  if (!user) return;

  return (
    <div className="w-[250px] fixed border-r h-screen border-gray-800">
      <div className="p-6">
        <Image src="/logo.png" alt="logo" width={150} height={100} />
      </div>
      <div className="p-6">
        <SidebarElements />
      </div>
      <div className="p-6 flex items-center cursor-pointer">
        <UserButton />
        <p className="ml-6 text-sm hover:underline">{user.name}</p>
      </div>
    </div>
  );
};
