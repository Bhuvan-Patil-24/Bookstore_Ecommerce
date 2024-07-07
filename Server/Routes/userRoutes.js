import express from "express";
import {
  getAllUsers,
  login,
  signup,
  updateProfileImage,
  resetPassword
} from "../Controllers/userController.js";
import { isAuthenticated } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup); // my users should signup here
router.post("/login", login); // my users should login here
router.post("/updateProfileImage", isAuthenticated, updateProfileImage); // updating Profile Image
router.post("/resetPassword", isAuthenticated, resetPassword); // updating password

export default router;
