import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
import express from "express";
const app = express()

dotenv.config({
    path: './env'
})

connectDB().then(()=>{
    app.listen(process.env.PORT|| 5000, ()=>{
        console.log(`Server is running PORT : ${process.env.PORT}`);
        
    })
}).catch((err)=>{
    console.log("MONGO connection failed!! ",err);
    
})

// ( async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log(error);
//             throw error
            
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on PORT ${process.env.PORT}`);
            
//         } )
//     } catch (error) {
//         console.log(error);
//         throw error
//     }
// })()


