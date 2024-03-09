import { Avatar } from "@mui/material";
import Image from "next/image";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiMoreHorizontal, FiTrash } from "react-icons/fi";

const Post = () => {
  return (
    <div className="flex flex-col border-b border-gray-700 w-full">
      {/* Post Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Avatar alt="Remy Sharp" src="./profile.jpg" />
          <p>Deepanshu saini</p>
          <p className="text-gray-600"> . 17h</p>
        </div>
        <FiMoreHorizontal className="h-7 w-7 cursor-pointer" />
      </div>

      {/* Post Body */}

      <div className="flex flex-col mt-2">
        <Image src={"/profile_bg.jpg"} alt="logo" width={700} height={700} />
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-6">
            <FaRegHeart className="h-7 w-7 cursor-pointer" />
            <FaRegComment className="h-7 w-7 cursor-pointer" />
          </div>
          <div>
            <FiTrash className="h-7 w-7 cursor-pointer" />
          </div>
        </div>
        <p className="pl-2 text-sm font-bold mb-2">200 likes</p>
      </div>

      {/* Post Footer */}
      <div className="flex flex-col mb-3">
        <div>
          <p className="text-sm font-semibold">Deepanshu saini</p>
          <p className="text-gray-400 text-sm">
            Thsi si some description which is long emough for someone to see in
            second line
          </p>
        </div>
        <div>
          <p className="text-sm hover:underline text-gray-300 cursor-pointer">
            View all 3 comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
