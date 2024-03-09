import UserModel from "@/models/user-modal";
import { currentUser, redirectToSignIn } from "@clerk/nextjs"
import { db } from "./MongoDb";

export const initialUser =async() =>{
    await db();
    const user = await currentUser();
    if(!user){
        return redirectToSignIn()
    }

    const userprofile = await UserModel.findOne({userId:user.id})

    if(userprofile){
        return userprofile
    }

    const newProfile = await UserModel.create({
        userId:user.id,
        name:`${user.firstName} ${user.lastName}`,
        email:user.emailAddresses[0].emailAddress,
        imageUrl:user.imageUrl
    })

    return newProfile;
}