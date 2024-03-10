import UserModel from "@/models/user-modal"
import { db } from "./MongoDb"
import { currentUser } from "./current-user"

export const getAllUsers = async() =>{
    const currentuser = await currentUser()
    await db()
    const users = await UserModel.find({userId: { $ne: currentuser?.userId } });
    if(!users){
        console.log("no users found")
    }
    console.log(users)
    return users;
}