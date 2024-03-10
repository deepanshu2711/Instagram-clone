"use client";
import { useUser } from "@clerk/nextjs";
import { Avatar, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const CommentInput = ({ postId }: { postId: string }) => {
  const { user } = useUser();
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    if (!comment) return;
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
  );
};

export default CommentInput;
