import asyncHandler from 'express-async-handler';

export const signUp = asyncHandler(async (req, res) => {
  res.send('ttttff');
});


// import "dotenv/config";
// import bcrypt from "bcryptjs";
// import { User } from "../model/authModel.js";
// import { cookieOptions } from "../config/cookieOptions.js";
// import { generateToken } from "../lib/jwtUtils.js";
// import { validationResult } from "express-validator";

// export const signUp = asyncHandler(async (req, res) => {
//   const { firstName, lastName, email, mobile, password } = req.body;

//   // Check if the user already exists
//   let existingUser = await User.findOne({ $or: [{ email }, { mobile }] });
//   if (existingUser) {
//     return res.status(400).json({
//       message: "User already exists with this email or mobile number",
//     });
//   }

//   // Create a new user
//   const user = new User({
//     firstName,
//     lastName,
//     email,
//     mobile,
//     password,
//   });

//   await user.save();

//   // Generate JWT token
//   const token = generateToken({ user: { id: user.id } });

//   res
//     .cookie("token", token, cookieOptions)
//     .status(201)
//     .json({ message: "User registered successfully" });
// });

// export const signIn = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   // Check if the user exists
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(400).json({ message: "Invalid email or password" });
//   }

//   // Compare passwords
//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     return res.status(400).json({ message: "Invalid email or password" });
//   }

//   // Generate JWT token
//   const token = generateToken({ user: { id: user.id } });

//   res
//     .cookie("token", token, cookieOptions)
//     .status(200)
//     .json({ message: "Sign in successful", user });
// });

// export const signOut = asyncHandler(async (req, res) => {
//   res
//     .clearCookie("token", {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//     })
//     .status(200)
//     .json({ message: "Sign out successful" });
// });

// export const getCurrentUser = asyncHandler(async (req, res) => {
//   const userId = req.id;
//   const user = await User.findById(userId).select("-password");
//   if (!user) {
//     return res.status(404).json({
//       message: "Profile not found",
//       success: false,
//     });
//   }
//   return res.status(200).json({
//     success: true,
//     user,
//   });
// });
