import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import router from "./router/index.js";

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)

const start = async () => {
  try {
    await mongoose.connect(
       "mongodb+srv://user:user@cluster0.buo8hk5.mongodb.net/?retryWrites=true&w=majority",
       {
         useNewUrlParser: true,
         useUnifiedTopology: true,
       }
     );
    app.listen(5000, () => console.log("server started on 5000"));
  } catch (e) {
    console.log(e);
  }
};
start()