import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }

},{
    timestamps:true}
)

const UserModel = mongoose.models.user ||  mongoose.model("user",UserSchema);
export default UserModel;