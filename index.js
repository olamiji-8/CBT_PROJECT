const express = require("express");
const app = express();

const router = require("./router/route");


app.use(express.json());


/** routes */
app.use("/api", router) /** Making use of api */


app.get("/", (req, res)=>{
    try{
        res.json("get data");
    }
    catch(error){
        res.json(error)
    }
    
})



