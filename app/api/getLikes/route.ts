
import likeModal from "@/models/post-likes";
import { db } from "@/utils/MongoDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { postId } = await req.json();
    try {
        await db();
        const allLikes = await likeModal.find({ postId: postId});
        if(allLikes.length>0){
            return NextResponse.json({allLikes});
        }
        return NextResponse.json({ allLikes: [] });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}