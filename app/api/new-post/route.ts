import PostModel from "@/models/post-modal";
import { db } from "@/utils/MongoDb"
import { currentUser } from "@/utils/current-user"
import { NextResponse } from "next/server";

export const POST = async(req:Request) =>{
    const Currentuser = await currentUser()
    const {postUrl,description} = await req.json();
    try {
        await db();
        const user = await PostModel.create({
            userId:Currentuser.userId,
            description:description,
            postUrl:postUrl
        })
        return NextResponse.json({user},{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error},{status:500})
    }
}