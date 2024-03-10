import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    postUrl:{
        type:String,
        required:true
    },
    likes:{
        type:Array,
        default:[]
    },
    comments:{
        type:Array,
        default:[]
    }
},{timestamps:true})

const PostModel = mongoose.models.post ||  mongoose.model("post",PostSchema);
export default PostModel