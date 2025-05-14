import { winstonLogger } from "../configs/winstonlogger.js";

export const notFount = (req, res, next) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl,
  });
};

export const errorHandler = (err, req, res, next) => {
  winstonLogger.error(`Error: ${err.message}`, { stack: err.stack });
  console.error('Caught:', err.message);
  res.status(500).json({ error: err.message });
};


