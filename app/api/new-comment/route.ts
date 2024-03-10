import CommentModal from "@/models/post-comment";
import { db } from "@/utils/MongoDb";
import { NextResponse } from "next/server";

export const POST =async(req:Request) =>{
    const {postId,userId,name,profilePic,comment} = await req.json();
    try {
        await db();
        const newComment = await CommentModal.create({
            postId:postId,
            userId:userId,
            name:name,
            profilePic:profilePic,
            comment:comment
        })
        return NextResponse.json({newComment},{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error},{status:500})
    }
    
}