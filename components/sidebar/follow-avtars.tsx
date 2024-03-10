import { Avatar } from "@mui/material";

const FollowAvatars = () => {
  return (
    <div className="flex items-center  justify-between">
      <div className="flex items-center gap-3">
        <Avatar src="./profile.jpg" />
        <p>Deepanshu</p>
      </div>
      <p className="text-xs cursor-pointer font-medium text-blue-500 hover:text-white">
        Follow
      </p>
    </div>
  );
};

export default FollowAvatars;
