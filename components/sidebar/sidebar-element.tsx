"use client";
import { IconType } from "react-icons";

interface SidebarElementProps {
  icon: IconType | any;
  lable: string;
  path?: string;
}

const SidebarElement = ({ icon: Icon, lable, path }: SidebarElementProps) => {
  return (
    <div className="cursor-pointer ">
      <div className="flex items-center gap-2">
        <Icon className="w-8 h-8" />
        <div className="text-lg font-normal ml-4">{lable}</div>
      </div>
    </div>
  );
};

export default SidebarElement;
