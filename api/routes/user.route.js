import express from "express";
import {
  deleteUser,
  updateUser,
  userController,
} from "../controller/user.controller.js";
import { verifyToken } from "../utills/verifyUser.js";

const router = express.Router();

router.get("/", userController);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
