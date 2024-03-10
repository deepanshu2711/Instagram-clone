import { Avatar } from "@mui/material";

interface FollowAvatarProps {
  imageUrl: string;
  name: string;
}

const FollowAvatars = ({ imageUrl, name }: FollowAvatarProps) => {
  return (
    <div className="flex items-center  justify-between">
      <div className="flex items-center gap-3">
        <Avatar src={imageUrl} />
        <p>{name}</p>
      </div>
      <p className="text-xs cursor-pointer font-medium text-blue-500 hover:text-white">
        Follow
      </p>
    </div>
  );
};

export default FollowAvatars;
