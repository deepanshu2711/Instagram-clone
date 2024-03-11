"use client";
import CommentInput from "@/components/comment/comment-input";
import EachComment from "@/components/comment/each-comment";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useUser } from "@clerk/nextjs";
import { Avatar, Button } from "@mui/material";

const PostCommentPage = () => {
  const pathname = usePathname();
  const postId = pathname?.split("/")[2] as string;
  const [comments, setComments] = useState<any>([]);
  const [socket, setSocket] = useState<any>(undefined);
  const [comment, setComment] = useState("");
  const { user } = useUser();

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.post(`/api/get-comments`, {
        postId: postId,
      });
      setComments(res.data.comments);
    };
    getComments();
  }, [postId]);

  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.on("comment", (data: any) => {
      setComments([...comments, data]);
    });
    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, [comments]);

  const handleSubmit = async () => {
    if (!comment) return;
    socket.emit("comment", {
      postId: postId,
      userId: user?.id,
      name: `${user?.firstName} ${user?.lastName}`,
      profilePic: user?.imageUrl,
      comment: comment,
    });
    try {
      const res = await axios.post("/api/new-comment", {
        postId: postId,
        userId: user?.id,
        name: `${user?.firstName} ${user?.lastName}`,
        profilePic: user?.imageUrl,
        comment: comment,
      });
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-20">
      <div className="flex flex-col gap-4 w-full items-center justify-between min-h-screen/2 ml-40">
        <div className="flex flex-col gap-4 w-full ml-80 mb-4 border-b border-gray-700">
          {comments &&
            comments.map((comment: any) => (
              <EachComment
                key={comment._id}
                commentText={comment.comment}
                profilePic={comment.profilePic}
                name={comment.name}
              />
            ))}
        </div>
        <div className="ml-72">
          <form className="flex items-center">
            <Avatar src={user?.imageUrl} />
            <input
              type="text"
              placeholder="Add a comment..."
              className="p-3 bg-transparent focus-within:outline-none w-full"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
            <Button onClick={handleSubmit}>Post</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostCommentPage;
