import express from "express";
const router = express.Router();
import {
  getBloodRequests,
  getBloodTypes,
  requestBloodType,
  authHospital,
  hospitalRegister,
  hospitalLogout,
  getHospitalProfile,
  updateHospitalProfile,
} from "../controllers/hospitalController.js";
import { protect } from "../middleware/authMiddleware.js";

router.get("/blood", getBloodTypes);

router.post("/blood/request", requestBloodType);

router.get("/blood/requests", getBloodRequests);

router.post("/hospital/register", hospitalRegister);

router.post("/hospital/auth", authHospital);

router.post("/hospital/logout", hospitalLogout);

router.get("/hospital/profile", protect, getHospitalProfile);

router.put("/hospital/profile", protect, updateHospitalProfile);

export default router;
