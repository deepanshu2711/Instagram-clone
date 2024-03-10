import UserModel from "@/models/user-modal";
import { db } from "@/utils/MongoDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { userId } = await req.json();
    await db()
    const user = await UserModel.findOne({ userId });
    
    return NextResponse.json({ user });
}