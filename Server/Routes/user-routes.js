import express from "express";
import {
  getMyUsers,
  login,
  signup,
  updateProfileImage,
  resetPassword
} from "../Controller/user-controller.js";
import { isAuthenticated, isAdmin } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get("/", isAuthenticated, isAdmin, getMyUsers); // my all users in one place
router.post("/signup", signup); // my users should signup here
router.post("/login", login); // my users should login here

// newly added routers 
router.post("/updateProfileImage", isAuthenticated, updateProfileImage); // updating Profile Image
router.post("/resetPassword", resetPassword); // updating password

export default router;
