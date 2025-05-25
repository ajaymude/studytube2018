import express from 'express';
import { signUp } from '../controllers/authController.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import {
  signInValidation,
  signUpValidation,
} from '../middlewares/validator.js';

export const authRoute = express.Router();

authRoute.route('/sign-up').get(signUpValidation, signUp);
authRoute.route('/sign-in').get(signInValidation, signUp);
authRoute.route('/sign-out').get(signUp);
authRoute.route('/current-user').get(isAuthenticated, signUp);
