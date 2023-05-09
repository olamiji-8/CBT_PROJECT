const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const router = require("./router/route");

const port = process.env.PORT;
const cors = require("cors");
app.use(cors());


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


mongoose
  .connect(
    process.env.ATLAS_URL
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
