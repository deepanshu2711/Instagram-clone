import mongoose from "mongoose"

export const db = async() =>{
    try {
        if(mongoose.connections[0].readyState){
            return;
        }
        const conn = await mongoose.connect(process.env.MONGODB_URL as string);
        if(conn){
            console.log("MongoDb Connected")
        }
        else{
            console.log("MongoDb Not Connected")
        }

    } catch (error) {
        console.log("MongoDb connection error", error)
    }
}