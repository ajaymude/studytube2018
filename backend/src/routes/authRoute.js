import express from 'express';
import { signUp } from '../controllers/authController.js';

export const authRoute = express.Router();

authRoute.route('/sign-up').get(signUp);
