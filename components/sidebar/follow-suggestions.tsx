import { Avatar } from "@mui/material";
import FollowAvatars from "./follow-avtars";

const FollowSuggestions = () => {
  return (
    <div className="w-[300px] p-4">
      <div className="flex gap-2 items-center">
        <Avatar src="./profile.jpg" />
        <p className="text-gray-300">Deepanshu saini</p>
      </div>
      <p className="text-gray-400 font-medium text-sm mt-3">
        Suggested for you
      </p>
      <div className="mt-4 flex flex-col gap-6">
        <FollowAvatars />
        <FollowAvatars />
        <FollowAvatars />
        <FollowAvatars />
      </div>
    </div>
  );
};

export default FollowSuggestions;
