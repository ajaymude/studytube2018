import { body, validationResult } from 'express-validator';

export const signUpValidation = [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('mobile')
    .isLength({ min: 7, max: 15 })
    .withMessage('Mobile number must be between 7 and 15 digits'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),

  // Middleware to handle validation result and send response
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array(), 'Validation Errors');
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const signInValidation = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').notEmpty().withMessage('Password is required'),

  // Middleware to handle validation result and send response
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array(), 'Validation Errors');
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
