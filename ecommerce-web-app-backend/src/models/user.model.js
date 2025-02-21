const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      minlength: [6, 'Firstname name must be at least 5 characters'],
      maxlength: [50, 'Firstname name cannot exceed 20 characters'],
      index: true
    },
    gender: {
      type: String, 
      lowercase: true,
      enum: ["male", "female", "others"]
    },
    password: {
      type: String,
      required: true,
      minlength: [8, 'Password must be at least 8 characters']
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please enter a valid email address'
      ],
      index: true
    },
    phone: {
      type: String,
      unique: true,
      trim: true,
      match: [
        /^\d{10}$/,
        'Phone number must be a valid 10-digit number'
      ],
    },
    userImage: {
      type: String
    },
    userRole: {
      type: String,
      enum: ['admin', 'seller', 'customer'],
      required: true
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function(){
  return jwt.sign(
    {
      _id : this._id,
      email: this.email,
      fullname: this.fullname,
      userRole: this.userRole,
      userImage: this.userImage,
      gender: this.gender,
      phone: this.phone
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}

userSchema.methods.generateRefreshToken = function(){
  return jwt.sign(
    {
      _id : this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

const User = mongoose.model('User', userSchema);
module.exports = User; 
