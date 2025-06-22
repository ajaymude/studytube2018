import jwt from 'jsonwebtoken';
import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// export const isAuthenticated = asyncHandler(async (req, res, next) => {

//   // 1️⃣ Grab token from cookie or Authorization header
//   const token =
//     req.cookies?.accessToken ||
//     req.header('Authorization')?.replace('Bearer ', '');

//   // 2️⃣ If no token, immediately return 401
//   if (!token) {
//     return next(
//       createError(StatusCodes.UNAUTHORIZED, 'No access token provided')
//     );
//   }

  

//   let decoded;
//   try {
//     // 3️⃣ Verify token
//     decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//   } catch (err) {
//     return next(
//       createError(
//         StatusCodes.UNAUTHORIZED,
//         err.message || 'Invalid access token'
//       )
//     );
//   }

//   // 4️⃣ Lookup user and exclude sensitive fields
//   const user = await User.findById(decoded._id).select(
//     '-password -refreshToken'
//   );
//   if (!user) {
//     return next(
//       createError(
//         StatusCodes.UNAUTHORIZED,
//         'User no longer exists for this token'
//       )
//     );
//   }

//   // 5️⃣ Attach user to req and proceed
//   req.user = user;
//   next();
// });


export const isAuthenticated = asyncHandler(async (req, res, next) => {
  const accessToken  = req.cookies?.accessToken;
  if (accessToken) {
    // … verify access token as before …
    req.user = userFromAccessToken;
    return next();
  }

  // no accessToken—try refreshToken
  const refreshToken = req.cookies?.refreshToken;
  if (!refreshToken) {
    // neither token present → block
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ status: 'fail', message: 'Not authenticated' });
  }

  // Verify the refresh token
  let payload;
  try {
    payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  } catch {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ status: 'fail', message: 'Invalid refresh token' });
  }

  // Lookup user and make sure the token matches the one in DB
  const user = await User.findById(payload._id);
  if (!user || user.refreshToken !== refreshToken) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ status: 'fail', message: 'Refresh token revoked' });
  }

  // Generate a new access token
  const newAccessToken = user.generateAccessToken();
  // Send it back in a cookie (or in the JSON body)
  res.cookie('accessToken', newAccessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge:"1d" /* your access‐token lifetime */,
  });

  // Attach user and continue
  req.user = user;
  next();
});
