import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import createError from 'http-errors';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export const generateAccessAndRefreshTokens = async userId => {
  try {
    // 1️⃣ Fetch the user
    const user = await User.findById(userId);
    if (!user) {
      throw createError(StatusCodes.NOT_FOUND, 'User not found for token generation');
    }

    // 2️⃣ Generate both tokens
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // 3️⃣ Persist the new refresh token
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (err) {
    // 4️⃣ If it’s already an HTTPError, re-throw it
    console.log(err , 'ggg')
    if (err.status) throw err;

    // 5️⃣ Otherwise wrap it in a 500
    throw createError(StatusCodes.INTERNAL_SERVER_ERROR, 'Something went wrong while generating refresh and access tokens');
  }
};

export const signUp = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // 1️⃣ Check if user already exists
  const userExists = await User.exists({ email });
  if (userExists) {
    throw createError(StatusCodes.BAD_REQUEST, 'User already exists with this email');
  }

  // 2️⃣ Create the user
  const user = await User.create({ firstName, lastName, email, password });

  // 3️⃣ Fetch the sanitized user (omit sensitive fields)
  const createdUser = await User.findById(user._id).select('-password -refreshToken');

  // 4️⃣ Guard against unexpected failures
  if (!createdUser) {
    throw createError(StatusCodes.INTERNAL_SERVER_ERROR, 'Something went wrong while registering the user');
  }

  // 5️⃣ Send 201 Created response
  return res.status(StatusCodes.CREATED).json({
    status: 'success',
    message: getReasonPhrase(StatusCodes.CREATED), // "Created"
    data: createdUser,
  });
});

export const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // 1️⃣ Verify user exists
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(StatusCodes.NOT_FOUND, 'User does not exist');
  }

  // 2️⃣ Verify password
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw createError(StatusCodes.UNAUTHORIZED, 'Invalid user credentials');
  }

  // 3️⃣ Generate tokens
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

  // 4️⃣ Fetch sanitized user payload
  const loggedInUser = await User.findById(user._id).select('-password -refreshToken');

  // 5️⃣ Cookie options: secure only in prod, allow cross-site in dev
  const commonOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // only over HTTPS in prod
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  };

  const accessTokenCookieOptions = {
    ...commonOptions,
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  };

  const refreshTokenCookieOptions = {
    ...commonOptions,
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
  };

  // 6️⃣ Send cookies and JSON response
  return res
    .status(StatusCodes.OK)
    .cookie('accessToken', accessToken, accessTokenCookieOptions)
    .cookie('refreshToken', refreshToken, refreshTokenCookieOptions)
    .json({
      status: 'success',
      message: getReasonPhrase(StatusCodes.OK), // "OK"
      data: {
        user: loggedInUser,
      },
    });
});

export const signOut = asyncHandler(async (req, res) => {
  // 1️⃣ Ensure user is authenticated
  if (!req.user) {
    throw createError(StatusCodes.UNAUTHORIZED, 'Not authenticated');
  }

  // 2️⃣ Remove stored refreshToken
  await User.findByIdAndUpdate(req.user._id, { $unset: { refreshToken: 1 } });

  // 3️⃣ Cookie options – secure only in production, allow cross-site
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none',
  };

  // 4️⃣ Clear both tokens and respond
  return res
    .status(StatusCodes.OK)
    .clearCookie('accessToken', cookieOptions)
    .clearCookie('refreshToken', cookieOptions)
    .json({
      status: 'success',
      message: getReasonPhrase(StatusCodes.OK), // "OK"
      data: {},
    });
});

export const getCurrentUser = asyncHandler(async (req, res) => {
  // 1️⃣ Guard against unauthenticated access
  if (!req.user) {
    throw createError(StatusCodes.UNAUTHORIZED, 'Not authenticated');
  }

  // 2️⃣ Return the current user
  return res.status(StatusCodes.OK).json({
    status: 'success',
    // You can leave this as "OK"…
    message: getReasonPhrase(StatusCodes.OK),
    // …or use a custom phrase:
    // message: 'User fetched successfully',
    data: req.user,
  });
});

export const refreshAccessToken = asyncHandler(async (req, res) => {
  // 1️⃣ Grab the incoming token from cookie or body
  const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;
  if (!incomingRefreshToken) {
    throw createError(StatusCodes.UNAUTHORIZED, 'Unauthorized request');
  }

  // 2️⃣ Verify it
  let decoded;
  try {
    decoded = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    throw createError(StatusCodes.UNAUTHORIZED, err.message || 'Invalid refresh token');
  }

  // 3️⃣ Look up the user
  const user = await User.findById(decoded._id);
  if (!user) {
    throw createError(StatusCodes.UNAUTHORIZED, 'Invalid refresh token');
  }

  // 4️⃣ Ensure token hasn’t been rotated/used
  if (incomingRefreshToken !== user.refreshToken) {
    throw createError(StatusCodes.UNAUTHORIZED, 'Refresh token is expired or used');
  }

  // 5️⃣ Generate new tokens
  const { accessToken, refreshToken: newRefreshToken } = await generateAccessAndRefereshTokens(user._id);

  // 6️⃣ Cookie options (secure only in prod, allow cross‐site)
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none',
    maxAge: 1000 * 60 * 15, // 15 minutes
  };

  // 7️⃣ Send cookies + JSON response
  return res
    .status(StatusCodes.OK)
    .cookie('accessToken', accessToken, cookieOptions)
    .cookie('refreshToken', newRefreshToken, cookieOptions)
    .json({
      status: 'success',
      message: getReasonPhrase(StatusCodes.OK),
      data: { accessToken, refreshToken: newRefreshToken },
    });
});
