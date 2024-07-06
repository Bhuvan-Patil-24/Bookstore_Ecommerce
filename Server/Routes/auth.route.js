import express from "express"
import { getAllUsers, registerUser, loginUser, isLogin, } from "../Controllers/auth.controller.js"
import { isAuthenticated } from "../Middlewares/auth.middleware.js";

const router = express.Router()

router.route("/getUsers").get(getAllUsers)
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/isLogin").get(isAuthenticated, isLogin)
export default router