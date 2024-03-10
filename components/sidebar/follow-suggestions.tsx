import { Avatar } from "@mui/material";
import FollowAvatars from "./follow-avtars";
import { currentUser } from "@/utils/current-user";

const FollowSuggestions = async ({ allUsers }: { allUsers: any }) => {
  const user = await currentUser();
  return (
    <div className="w-[300px] p-4">
      <div className="flex gap-2 items-center">
        <Avatar src={user.imageUrl} />
        <p className="text-gray-300">{user.name}</p>
      </div>
      <p className="text-gray-400 font-medium text-sm mt-3">
        Suggested for you
      </p>
      <div className="mt-4 flex flex-col gap-6">
        {allUsers &&
          allUsers.map((user: any) => (
            <FollowAvatars
              key={user.userId}
              imageUrl={user.imageUrl}
              name={user.name}
            />
          ))}
      </div>
    </div>
  );
};

export default FollowSuggestions;
