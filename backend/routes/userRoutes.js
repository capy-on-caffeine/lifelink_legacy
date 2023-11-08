import express from "express";
const router = express.Router();
import {
  getUsers,
  getSingleUser,
  updateUser,
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
} from "../controllers/userController.js";

router.route("/").get(getUsers);

router.get("/profile", getUserProfile);

router.route("/:id").get(getSingleUser).put(updateUser);

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.get("/profile", getUserProfile);

export default router;
