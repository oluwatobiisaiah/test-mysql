const router = require("express").Router()
const authController =  require("../controllers/user.auth")
const {asyncWrapper} = require("../middlewares/asyncHandler")


router.route("/signup").post(asyncWrapper(authController.signup))

router.route("/signin").post(authController.signin)

module.exports = router