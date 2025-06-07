import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';

const generateAccessAndRefereshTokens = async userId => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, 'Something went wrong while generating referesh and access token');
  }
};

export const signUp = asyncHandler(async (req, res) => {
  console.log('Sign Up Request:', req.body);

  const { firstName, lastName, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists with this email');
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select('-password -refreshToken');

  if (!createdUser) {
    throw new ApiError(500, 'Something went wrong while registering the user');
  }

  return res.status(201).json(new ApiResponse(200, createdUser, 'User registered Successfully'));
});

export const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, 'User does not exist');
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  console.log('Is password valid:', isPasswordValid);

  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid user credentials');
  }

  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id);

  const loggedInUser = await User.findById(user._id).select('-password -refreshToken');

  const options = {
    httpOnly: true,
    secure: true,
  };

  //   const options = {
  //   httpOnly: true,
  //   secure: true,
  //   sameSite: 'Strict',
  //   maxAge: 1000 * 60 * 15, // 15 minutes
  // };

  return res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        'User logged In Successfully'
      )
    );
});

export const singOut = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1, // this removes the field from document
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie('accessToken', options)
    .clearCookie('refreshToken', options)
    .json(new ApiResponse(200, {}, 'User logged Out'));
});

export const getCurrentUser = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, req.user, 'User fetched successfully'));
});

export const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, 'unauthorized request');
  }

  try {
    const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, 'Invalid refresh token');
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, 'Refresh token is expired or used');
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } = await generateAccessAndRefereshTokens(user._id);

    return res
      .status(200)
      .cookie('accessToken', accessToken, options)
      .cookie('refreshToken', newRefreshToken, options)
      .json(new ApiResponse(200, { accessToken, refreshToken: newRefreshToken }, 'Access token refreshed'));
  } catch (error) {
    throw new ApiError(401, error?.message || 'Invalid refresh token');
  }
});
