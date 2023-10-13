import jwt from 'jsonwebtoken';
import BlogModel from '../Model/BlogModel.js';

export const createBlog =async(req,res)=>{
   try {
     const {token,title,image,description,category} = req.body;
     if(!token){
        return res.status(401).json({success:false,message:"token not found"})
     }
     const decodedData = jwt.verify(token, process.env.JWT_SECRET)
         
        if(!decodedData){
            return res.status(404).json({success:false,message:"Not a valid json token"})
        }

        const userId = decodedData.userID
        console.log(userId)

        const blog = new BlogModel({title,image,description,category,userId:userId})

        await blog.save();

        return res.status(200).json({success:true,blog})

   } catch (error) {
    console.error("error in create blog",error);
   }
}

export const getBlog = async(req,res)=>{
    try {
        const myBlog = await BlogModel.find({})
        return res.status(200).json({success:true,myBlog})
    } catch (error) {
        console.error("blog not found",error);
    }
}