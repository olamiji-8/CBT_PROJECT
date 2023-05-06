const {Router} = require("express");
const router = Router();

/** controller */
const controller = require("../controllers/controller")

router.get("/question", controller.getQuestion)

module.exports= router;