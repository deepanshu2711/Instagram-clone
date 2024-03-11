import mongoose from "mongoose";

const LikesSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    postId:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const likeModal =  mongoose.models.Like || mongoose.model("Like",LikesSchema); 

export default likeModal;