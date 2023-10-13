import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import { getCurrentUser, login, register } from "./Controllers/UserController.js";
import { createBlog, getBlog } from "./Controllers/BlogController.js";


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

app.get("/",(req,res)=>{
    return res.send("working")
})

app.post('/register',register)
app.post('/login',login)
app.post('/get-current-user',getCurrentUser)
// app.post('/create-event',createEvent)
// app.post('/all-events',allEvents)
app.post('/create-blog',createBlog)
app.get('/get-my-blog',getBlog)



mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to MongoDB")
}).catch((error)=>{
    console.log("Error while connecting to MongDB",error)
})

app.listen(8000,()=>{
    console.log("Listening from sever 8000")
})