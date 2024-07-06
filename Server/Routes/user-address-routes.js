import express from "express";
import {
  addUserAddress,
  updateUserAddress,
  getUserAddresses,
  deleteAddress
} from "../Controller/user-address.js";
import { isAuthenticated, isAuthorized } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/addAddress/:userId", isAuthenticated, isAuthorized, addUserAddress);
router.put("/updateAddress/:userId/:addressId", isAuthenticated, isAuthorized, updateUserAddress);
router.delete("/deleteAddress/:userId/:addressId", isAuthenticated, isAuthorized, deleteAddress);
router.get("/getAddresses/:userId", isAuthenticated, isAuthorized, getUserAddresses);

export default router;
