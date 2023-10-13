import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    date:{
        type:Date,
        default: Date.now 
    },
    userId:{
        type:String
    },
    category:{
        type:String
    }
})

export default mongoose.model("Blog",blogSchema)