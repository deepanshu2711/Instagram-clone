"use client";
import { CiSquarePlus } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";
import SidebarElement from "./sidebar-element";

const elements = [
  {
    icon: MdHomeFilled,
    lable: "Home",
    path: "/",
  },
  {
    icon: CiSquarePlus,
    lable: "Create",
    path: "/",
  },
];

const SidebarElements = () => {
  return (
    <div className="flex flex-col gap-6">
      {elements.map((element) => (
        <SidebarElement
          key={element.lable}
          icon={element.icon}
          lable={element.lable}
          path={element.path}
        />
      ))}
    </div>
  );
};

export default SidebarElements;
