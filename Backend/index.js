import express from "express"
import {MONGO_URL, PORT} from "./config.js"
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());



app.use("/books", booksRoute);

mongoose.
connect(MONGO_URL).then(()=> {
    console.log("Database is connected");
    app.listen(PORT, ()=>{
        console.log(`Server is running on PORT ${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})