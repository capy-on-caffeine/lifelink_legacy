import express from "express";
const router = express.Router();
import {
  getBloodRequests,
  getBloodTypes,
  requestBloodType,
  hospitalLogin,
  hospitalRegister,
  hospitalLogout,
  getHospitalProfile,
  updateHospitalProfile,
} from "../controllers/hospitalController.js";

router.get("/blood", getBloodTypes);

router.post("/blood/request", requestBloodType);

router.get("/blood/requests", getBloodRequests);

router.post("/hospital/register", hospitalRegister);

router.post("/hospital/login", hospitalLogin);

router.post("/hospital/logout", hospitalLogout);

router.get("/hospital/:id", getHospitalProfile);

router.put("/hospital/:id", updateHospitalProfile);

export default router;
