import { winstonLogger } from '../configs/winstonlogger.js';

// route not fount
export const notFount = (req, res, next) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl,
  });
};

// error class
class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';

    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Errors
const devErrors = (res, error) => {
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
    stackTrace: error.stack,
    error: error,
  });
};

const castErrorHandler = err => {
  const msg = `Invalid value for ${err.path}: ${err.value}!`;
  return new CustomError(msg, 400);
};

const duplicateKeyErrorHandler = err => {
  const name = err.keyValue.name;
  const msg = `There is already a movie with name ${name}. Please use another name!`;

  return new CustomError(msg, 400);
};

const validationErrorHandler = err => {
  const errors = Object.values(err.errors).map(val => val.message);
  const errorMessages = errors.join('. ');
  const msg = `Invalid input data: ${errorMessages}`;

  return new CustomError(msg, 400);
};

const prodErrors = (res, error) => {
  if (error.isOperational) {
    res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong! Please try again later.',
    });
  }
};

// Global error handler
export const errorHandler = (error, req, res, next) => {
  winstonLogger.error(`Error: ${error.message}`, { stack: error.stack });
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';

  if (process.env.NODE_ENV === 'DEV') {
    devErrors(res, error);
  } else if (process.env.NODE_ENV === 'PROD') {
    if (error.name === 'CastError') error = castErrorHandler(error);
    if (error.code === 11000) error = duplicateKeyErrorHandler(error);
    if (error.name === 'ValidationError') error = validationErrorHandler(error);

    prodErrors(res, error);
  }

  res.status(500).json({ error: error.message });
};
