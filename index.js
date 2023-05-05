const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT 
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    try{
        res.json("get data");
    }
    catch(error){
        res.json(error)
    }
    
})



app.listen(port, ()=>{
    console.log(`You are connected on port ${port}`);
})