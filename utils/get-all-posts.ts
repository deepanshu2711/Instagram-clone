import PostModel from "@/models/post-modal"
import { db } from "./MongoDb"

export const getAllPosts =async() =>{
    await db();

    const posts = await PostModel.find({}).sort({createdAt:-1})

    if(!posts){
        return []
    }
    return posts;
}