import express from "express";
import { PORT } from "./src/utils/constant.js";

const app = express();

app.get("/",(req, res)=>{
    res.send('ggg')
});


app.listen(PORT,()=>{console.log("server running on port",PORT)})