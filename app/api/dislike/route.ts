
import likeModal from "@/models/post-likes";
import { db } from "@/utils/MongoDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { postId,userId } = await req.json();
    try {
        await db();
        const dislike = await likeModal.deleteOne({ postId: postId , userId:userId });
        if(dislike){
            return NextResponse.json({ liked: false });
        }
        return NextResponse.json({ liked: true });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}