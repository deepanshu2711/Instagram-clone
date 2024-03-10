import PostModel from "@/models/post-modal"
import { db } from "@/utils/MongoDb"
import { NextResponse } from "next/server"

export const POST = async(req:Request) =>{
    const {postId} = await req.json();
    try {
        await db();
        const post = await PostModel.findOne({_id:postId})
        return NextResponse.json({post})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error})
    }

}