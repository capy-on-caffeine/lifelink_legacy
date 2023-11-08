import asyncHandler from "express-async-handler";

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

//@desc Registers a new hospital
//@route POST /api/hospital/register
//@access Public
const hospitalRegister = asyncHandler(async (req, res) => {
  res.status(201).json({
    status: "success",
    message: "hospital register success",
  });
});

//@desc Login a new hospital
//@route POST /api/login
//@access Public
const hospitalLogin = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "hospital login success",
  });
});

//@desc Logout hospital
//@route POST /hospital/logout
//@access Private
const hospitalLogout = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "hospital logout success",
  });
});

//@desc Gets the current logged-in profile
//@route GET /hospital/:id
//@access Private
const getHospitalProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "getting current hospital profile",
  });
});

//@desc Updates the current login hospital profile
//@route PUT /hospital/:id
//@access Private
const updateHospitalProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Updating hospital profile",
  });
});

export {
  getBloodRequests,
  getBloodTypes,
  requestBloodType,
  hospitalLogin,
  hospitalRegister,
  hospitalLogout,
  getHospitalProfile,
  updateHospitalProfile,
};
