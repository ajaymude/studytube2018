// config/logger.js
import { createLogger, transports, format } from 'winston';
import path from 'path';

export const winstonLogger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    // Write all logs with level 'error' and below to error.log
    new transports.File({ filename: path.join('logs', 'error.log'), level: 'error' }),

    // Write all logs with level 'info' and below to combined.log
    new transports.File({ filename: path.join('logs', 'combined.log') }),
  ],
});

// Also log to the console in development
if (process.env.NODE_ENV !== 'production') {
  winstonLogger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}





