import jwt from 'jsonwebtoken';
import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

export const isAuthenticated = asyncHandler(async (req, res, next) => {
  // 1️⃣ Grab token from cookie or Authorization header
  const token = req.cookies?.accessToken || req.header('Authorization')?.replace('Bearer ', '');

  // 2️⃣ If no token, immediately return 401
  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      status: 'fail',
      message: 'No access token provided',
    });
  }

  let decoded;
  try {
    // 3️⃣ Verify token
    decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    return next(createError(StatusCodes.UNAUTHORIZED, err.message || 'Invalid access token'));
  }

  // 4️⃣ Lookup user and exclude sensitive fields
  const user = await User.findById(decoded._id).select('-password -refreshToken');
  if (!user) {
    return next(createError(StatusCodes.UNAUTHORIZED, 'User no longer exists for this token'));
  }

  // 5️⃣ Attach user to req and proceed
  req.user = user;
  next();
});
