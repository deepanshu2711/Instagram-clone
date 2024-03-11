
import likeModal from "@/models/post-likes";
import { db } from "@/utils/MongoDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { postId,userId } = await req.json();
    try {
        await db();
        const likes = await likeModal.find({ postId: postId , userId:userId });
        if(likes.length>0){
            return NextResponse.json({ liked: true });
        }
        return NextResponse.json({ liked: false });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}