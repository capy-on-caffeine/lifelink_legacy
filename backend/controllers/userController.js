import asyncHandler from "express-async-handler";
//express async handler will allow us to use
// async await and not have everything wrapped
// around in a try catch

//@desc get all users
//@route GET/api/users
//@access SuperUser
const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get users" });
});

//@desc gets single user profile
// @route GET/api/users
//@access SuperUser
const getSingleUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get single user",
  });
});

//@desc updates the user profile
//@route PUT/api/users/:id
//@access Private (user)
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "user updated",
  });
});

//@desc registers a new user
//@route POST/api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(201).json({
    status: "success",
    message: "user registered",
  });
});

//@desc authenticates a user
//@route POST/api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "User login successful",
  });
});

//@desc logs out a user
//@route POST /api/users/logout
//@access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(201).json({
    status: "success",
    message: "user registered",
  });
});

//@desc Get user profile
//@route GET/api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "this route will get the current user profile",
  });
});

export {
  getUsers,
  getSingleUser,
  updateUser,
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
};
