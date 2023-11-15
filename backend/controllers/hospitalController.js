import asyncHandler from "express-async-handler";
import Hospital from "../models/hospitalModel.js";
import generateToken from "../utils/generateToken.js";

//@desc Gets all bloodTypes available in the hospital
//@route GET /api/blood
//@access Private
const getBloodTypes = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: 200,
    message: "getting all blood types",
  });
});

//@desc Makes a request for blood
//@route POST /api/blood/request
//@access private
const requestBloodType = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "request sent successfully",
  });
});

//@desc Gets a list of all blood requests
//@route GET /api/blood/requests
//@access private
const getBloodRequests = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "getting the list of all blood requests",
  });
});

///////////////////AUTHENTICATION FUNCTION///////////////////////////////

//@desc Registers a new hospital
//@route POST /api/hospital/register
//@access Public
const hospitalRegister = asyncHandler(async (req, res) => {
  const { name, address, email, password } = req.body;

  const hospitalExists = await Hospital.findOne({ email });

  if (hospitalExists) {
    res.status(400);
    throw new Error("hospital is already registered");
  }

  const hospital = await Hospital.create({
    name,
    address,
    email,
    password,
  });

  if (hospital) {
    generateToken(res, hospital._id);
    res.status(201).json({
      id: hospital._id,
      name: hospital.name,
      address: hospital.address,
      email: hospital.email,
      password: hospital.password,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc Login a new hospital
//@route POST /api/login
//@access Public
const authHospital = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const hospital = await Hospital.findOne({ email });

  if (hospital && (await hospital.matchPassword(password))) {
    generateToken(res, hospital._id);
    res.status(200).json({
      id: hospital._id,
      name: hospital.name,
      address: hospital.address,
      email: hospital.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@desc Logout hospital
//@route POST /hospital/logout
//@access Private
const hospitalLogout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    status: "success",
    message: "hospital logged out",
  });
});

//@desc Gets the current logged-in profile
//@route GET /hospital/:id
//@access Private
const getHospitalProfile = asyncHandler(async (req, res) => {
  const hospital = {
    _id: req.hospital._id,
    name: req.hospital.name,
    address: req.hospital.address,
    email: req.hospital.email,
  };
  res.status(200).json(hospital);
});

//@desc Updates the current login hospital profile
//@route PUT /hospital/:id
//@access Private
const updateHospitalProfile = asyncHandler(async (req, res) => {
  const hospital = await Hospital.findById(req.hospital._id);

  if (hospital) {
    hospital.name = req.body.name || hospital.name;
    hospital.address = req.body.address || hospital.address;
    hospital.email = req.body.email || hospital.email;

    if (req.body.password) {
      hospital.password = req.body.password;
    }

    const updatedHospital = await hospital.save();

    // Send the success response after successful update
    res.status(200).json({
      _id: updatedHospital._id,
      name: updatedHospital.name,
      address: updatedHospital.address,
      email: updatedHospital.email,
    });
  } else {
    res.status(404);
    throw new Error("Hospital not found");
  }
});

export {
  getBloodRequests,
  getBloodTypes,
  requestBloodType,
  authHospital,
  hospitalRegister,
  hospitalLogout,
  getHospitalProfile,
  updateHospitalProfile,
};
