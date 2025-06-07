import express from 'express';
import { getCurrentUser, refreshAccessToken, signIn, signUp, singOut } from '../controllers/authController.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { signInValidation, signUpValidation } from '../middlewares/validator.js';
import { get } from 'mongoose';

export const authRoute = express.Router();

authRoute.route('/sign-up').post(signUpValidation, signUp);
authRoute.route('/sign-in').post(signInValidation, signIn);
authRoute.route('/sign-out').post(isAuthenticated, singOut);
authRoute.route('/current-user').get(isAuthenticated, getCurrentUser);
authRoute.route('/get-refresh-token').patch(isAuthenticated, refreshAccessToken);
authRoute.route('/test').get((req, res) => {res.status(200).json({ message: 'test' })}); 
