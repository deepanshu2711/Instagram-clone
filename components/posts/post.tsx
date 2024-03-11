"use client";

import { Avatar } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiMoreHorizontal, FiTrash } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface PostProps {
  postUrl: string;
  description: string;
  userId: string;
  likes: string[];
  comments: string[];
  postId: string;
}

const Post = ({ postUrl, description, userId, postId }: PostProps) => {
  const [userData, setUserData] = useState<any>(null);
  const [conmments, setComments] = useState<any>([]);
  const [liked, setIsLiked] = useState();
  const router = useRouter();
  const [likes, setLikes] = useState<any>([]);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.post(`/api/user`, {
        userId: userId,
      });
      setUserData(res.data.user);
    };
    getUser();
  }, [userId]);

  useEffect(() => {
    const checkLike = async () => {
      const res = await axios.post(`/api/check-like`, {
        postId: postId,
        userId: userId,
      });
      console.log(res.data.liked);
      setIsLiked(res.data.liked);
    };
    checkLike();
  });

  useEffect(() => {
    const getLikes = async () => {
      const res = await axios.post(`/api/getLikes`, {
        postId: postId,
      });
      setLikes(res.data.allLikes);
    };
    getLikes();
  }, [postId]);

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.post(`/api/get-comments`, {
        postId: postId,
      });
      setComments(res.data.comments);
    };
    getComments();
  }, [postId]);

  const handleLikeClick = async (liked: boolean) => {
    const res = await axios.post(`/api/like`, {
      postId: postId,
      userId: userId,
      liked: liked,
    });
    console.log(res.data.liked);
    setIsLiked(res.data.liked);
  };

  const handleDislikeClick = async (liked: boolean) => {
    const res = await axios.post(`/api/dislike`, {
      postId: postId,
      userId: userId,
      liked: liked,
    });
    console.log(res.data.liked);
    setIsLiked(res.data.liked);
  };

  return (
    <div className="flex flex-col border-b border-gray-700 w-full">
      {/* Post Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Avatar alt="Remy Sharp" src={userData?.imageUrl} />
          <p>{userData?.name}</p>
          <p className="text-gray-600"> . 17h</p>
        </div>
        <FiMoreHorizontal className="h-7 w-7 cursor-pointer" />
      </div>

      {/* Post Body */}

      <div className="flex flex-col mt-2">
        <Image src={postUrl} alt="logo" width={700} height={700} />
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-6">
            {liked ? (
              <FaHeart
                className="h-7 w-7 cursor-pointer text-red-600"
                onClick={() => handleDislikeClick(false)}
              />
            ) : (
              <FaRegHeart
                className="h-7 w-7 cursor-pointer"
                onClick={() => handleLikeClick(true)}
              />
            )}
            <FaRegComment className="h-7 w-7 cursor-pointer" />
          </div>
          <div>
            <FiTrash className="h-7 w-7 cursor-pointer" />
          </div>
        </div>
        <p className="pl-2 text-sm font-bold mb-2">{likes.length} likes</p>
      </div>

      {/* Post Footer */}
      <div className="flex flex-col mb-3">
        <div>
          <p className="text-sm font-semibold">{userData?.name}</p>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <div>
          <p
            onClick={() => router.push(`/post/${postId}`)}
            className="text-sm hover:underline text-gray-300 cursor-pointer hover:text-white"
          >
            View all {conmments.length} comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
