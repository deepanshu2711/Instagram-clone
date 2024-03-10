"use client";
import { CiSquarePlus } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";
import SidebarElement from "./sidebar-element";
import { useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import supabase from "@/utils/supabase";
import Image from "next/image";

const elements = [
  {
    icon: MdHomeFilled,
    lable: "Home",
    path: "/",
  },
];

const SidebarElements = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [File, setFile] = useState<File | null>(null);
  const [fileurl, setFileurl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    const handleUpload = async () => {
      setUploading(true);
      if (File) {
        const filename = nanoid();
        const { data, error } = await supabase.storage
          .from("nextSupabase")
          .upload(`${filename}.${File.name.split(".").pop()}`, File);

        if (error) {
          console.error("Error uploading file:", error.message);
        } else {
          const { data: file } = await supabase.storage
            .from("nextSupabase")
            .getPublicUrl(data?.path);
          setFileurl(file?.publicUrl);
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
          setFile(null);
        }
      }
      setUploading(false);
    };
    handleUpload();
  }, [File]);

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/new-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postUrl: fileurl,
          description: caption,
        }),
      });
      const data = await res.json();
      setIsOpen(false);
      setCaption("");
      setFileurl("");
      setFile(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {elements.map((element) => (
        <SidebarElement
          key={element.lable}
          icon={element.icon}
          lable={element.lable}
          path={element.path}
        />
      ))}

      <div onClick={() => setIsOpen(true)}>
        <SidebarElement icon={CiSquarePlus} lable="Create" />
      </div>

      <Dialog open={isOpen}>
        <div className="flex items-center justify-between bg-black/85">
          <input
            type="file"
            hidden
            ref={fileInputRef}
            onChange={(e) =>
              setFile(e.target.files && (e.target.files[0] as any))
            }
          />
          <DialogTitle className="font-bold text-white">
            Create New Post
          </DialogTitle>
          <RxCross1
            className="mr-4 cursor-pointer h-5 w-5 text-white"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <DialogContent className=" flex flex-col items-center justify-around w-[500px] h-[700px] bg-black/85">
          {fileurl ? (
            <div>
              <RxCross1
                onClick={() => setFileurl(null as any)}
                className="cursor-pointer text-white border rounded-full h-6 w-6 absolute ml-72 mt-2 bg-black "
              />
              <Image
                src={fileurl}
                className="rounded-lg"
                alt="postimage"
                width={300}
                height={300}
              />
            </div>
          ) : (
            <Button
              variant="contained"
              className=""
              onClick={() => (fileInputRef.current as any)?.click()}
              disabled={uploading}
            >
              Select from computer
            </Button>
          )}
          <div className="w-full">
            <div className="flex gap-2 items-center mb-5">
              <Avatar src="./profile.jpg" />
              <p className="text-white">Deepanshu saini</p>
            </div>
            <form className="">
              <textarea
                placeholder="White a caption..."
                className="bg-transparent w-full h-[100px] text-white focus-within:outline-none"
                onChange={(e) => setCaption(e.target.value)}
              />
              <div className="w-full flex items-end justify-end mt-5">
                <Button variant="contained" onClick={handleSubmit}>
                  Share
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SidebarElements;
