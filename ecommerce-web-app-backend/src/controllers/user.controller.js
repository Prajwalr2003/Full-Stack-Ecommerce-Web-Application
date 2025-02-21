const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const User = require("../models/user.model");
const uploadOnCloudinary = require("../utils/cloudinary");
const { decode } = require("jsonwebtoken");

const registerUser = asyncHandler ( async (req, res) => {
  // get user details from frontend
  const {fullname, email, password} = req.body;
  // validation - not empty
  if ([fullname, email, password].some((field)=>field?.trim()==="")) {
    throw new ApiError(400, "All fields are required");
  }
  // check if user already exists: username, email
  const existedUser = await User.findOne({
    $or: [{email}]
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
  const user = await User.create({
    fullname: fullname,
    email: email,
    password: password,
    userRole: "customer"
    // userImage : userImage.url || ""
  })

  // remove password and refresh token field from response
  const createdUser = await User.findById(user._id).select(
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

const login = asyncHandler ( async (req, res) => {
  const { email, password } = req.body;
  if([email, password].some((field)=>field?.trim()==="")){
    throw new ApiError(400, "All field are required");
  }

  const user = await User.findOne({email});

  if(!user){
    throw new ApiError(404, "User not Found");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if(!isPasswordValid){
    throw new ApiError(400, "Invalid Email Id or Password");
  }

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  res.status(200).json({
    success:true,
    message: "Login Successful",
    user,
    accessToken,
    refreshToken
  });
});

const verify = asyncHandler(async(req, res)=>{

  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await User.findById(req.user._id);

  res.json({ user: user});
});

const refresh = asyncHandler(async(req, res)=>{
  const {refreshToken} = req.body;
  if(!refreshToken){
    throw new ApiError(400, "Refresh token is required");
  }
  try{
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findById(decoded.userId);
    if(!user){
      throw new ApiError(400, "Invalid refresh token");
    } 
    
    const accessToken = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET, {
      expiredIn: '1d',
    });

    res.status(200).json(
      new ApiResponse(200, accessToken, "Refresh token verified")
    );
  }
  catch(err){
    console.error("Refresh token error : ", err);
    throw new ApiError(400, 'Invalid or expired refresh token');
  }
});

const uploadImage = asyncHandler(async(req, res)=>{
  if(!req.file){
    return res.status(400).json({error: "No file uploaded"});
  }

  try{
    const cloudinaryRes = await uploadOnCloudinary(req.file.path);
    if(!cloudinaryRes){
      return res.status(500).json({error: "Cloudinary upload failed"});
    }

    const fs = require('fs');
    fs.unlinkSync(req.file.path);
    res.json({imageUrl:cloudinaryRes.url})
  }
  catch (error) {
    console.error("Error in /api/upload:", error);
    res.status(500).json({ error: 'Something went wrong' });
  }
})

const updateProfile = asyncHandler(async (req, res)=>{
  const {userId, userImage, gender, phone } = req.body;
  try{
    const user = await User.findById(userId).select("-password");
    if(!user){
      return res.status(404).json({message:"User not found"});
    }

    if(userImage) user.userImage=userImage;
    if(gender) user.gender=gender;
    if(phone) user.phone=phone;

    const updatedUser = await user.save();
    res.status(200).json({message:"Profile updated successfully", user:updatedUser});
  }catch(err){
    console.log(err);
    res.status(500).json({error: err});
  }
})

module.exports = {
  login,
  registerUser,
  verify,
  refresh,
  uploadImage,
  updateProfile
}