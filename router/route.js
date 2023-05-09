const {Router} = require("express");
const router = Router();

/** controller */
const controller = require("../controllers/controller")

router.get("/question", controller.getQuestion)
router.post("/question", controller.insertQuestion)


/**You can either use the one at the top or this */
router.route("/question").get(controller.getQuestion).post(controller.insertQuestion).delete(controller.deleteQuestion);
router.route("/result").get(controller.getResult).post(controller.updateResult).delete(controller.deleteResult);

module.exports= router;