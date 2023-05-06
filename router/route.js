const {Router} = require("express");
const router = Router();

router.get("/question", (req,res)=>{
    res.json("question api get request")
})

module.exports= router;