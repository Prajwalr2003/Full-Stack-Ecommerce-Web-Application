const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const User = require("../models/user.model");
const uploadOnCloudinary = require("../utils/cloudinary");

const registerUser = asyncHandler ( async (req, res) => {
  // get user details from frontend
  const {firstName, lastName, username, email, phone, password} = req.body;
  // validation - not empty
  if ([firstName, lastName, username, email, phone, password].some((field)=>field?.trim()==="")) {
    throw new ApiError(400, "All fields are required");
  }
  // check if user already exists: username, email
  const existedUser = await User.findOne({
    $or: [{username}, {email}, {phone}]
  });

  if(existedUser){
    throw new ApiError(409, "User with email or username or phone already exists");
  }
  // check for images - unique
  // const userImageLocalPath = req.files?.userImae[0]?.path;
  
  // upload them to cloudinary
  // const userImage = await uploadOnCloudinary(userImageLocalPath);
  // if(!userImage){
  //   throw new ApiError(400, "User Image is required");
  // }

  // create user object - create entry in db
  const user = User.create({
    firstName, 
    lastName, 
    gender,
    username : username.toLowerCase(),
    phone,
    password,
    // userImage : userImage.url || ""
  })

  // remove password and refresh token field from response
  const createdUser = User.findById(user._id).select(
    "-password -refreshToken"
  )
  // check for user creation 
  if(!createdUser){
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  // return res
  res.status(201).json(
    new ApiResponse(200, createdUser, "User registered successfully")
  )
});

module.exports = registerUser;