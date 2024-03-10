import CommentModal from "@/models/post-comment";
import { db } from "@/utils/MongoDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { postId } = await req.json();
    try {
        await db();
        const comments = await CommentModal.find({ postId: postId });
        return NextResponse.json({ comments });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}