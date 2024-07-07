import express from "express";
import { adminLogin, deleteUser } from "../Controllers/adminController.js";
import { getAllUsers } from "../Controllers/userController.js";
import { isAuthenticated, isAdmin } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/allusers", isAuthenticated, isAdmin, getAllUsers);
router.delete("/dltuser/:userId", isAuthenticated, isAdmin, deleteUser);

export default router;
