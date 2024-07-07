import express from "express";
import {
  getAllUsers,
  login,
  signup,
  updateProfileImage,
  resetPassword
} from "../Controllers/userController.js";
import { isAuthenticated, isAdmin } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", isAuthenticated, isAdmin, getAllUsers); // my all users in one place
router.post("/signup", signup); // my users should signup here
router.post("/login", login); // my users should login here

// newly added routers 
router.post("/updateProfileImage", isAuthenticated, updateProfileImage); // updating Profile Image
router.post("/resetPassword", resetPassword); // updating password

export default router;
