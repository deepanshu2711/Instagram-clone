import { Avatar } from "@mui/material";

interface EactCommentProps {
  commentText: string;
  profilePic: string;
  name: string;
}

const EachComment = ({ commentText, profilePic, name }: EactCommentProps) => {
  return (
    <div className="flex gap-2 items-center mb-4">
      <Avatar src={profilePic} />
      <p className="font-semibold">{name}</p>
      <p className="text-gray-300">{commentText}</p>
    </div>
  );
};

export default EachComment;
