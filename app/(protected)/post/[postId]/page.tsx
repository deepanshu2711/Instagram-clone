"use client";
import CommentInput from "@/components/comment/comment-input";
import EachComment from "@/components/comment/each-comment";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PostCommentPage = () => {
  const pathname = usePathname();
  const postId = pathname.split("/")[2];
  const [comments, setComments] = useState<any>([]);

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.post(`/api/get-comments`, {
        postId: postId,
      });
      setComments(res.data.comments);
    };
    getComments();
  }, [postId]);

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
        <CommentInput postId={postId} />
      </div>
    </div>
  );
};

export default PostCommentPage;
