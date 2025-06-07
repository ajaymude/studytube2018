import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure logs directory exists
const logDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Create a write stream for file logging
const accessLogStream = fs.createWriteStream(path.join(logDir, 'access.log'), {
  flags: 'a',
});

// Create a middleware that logs to both file and console
export const morganLogger = morgan('dev', {
  stream: {
    write: message => {
      process.stdout.write(message); // log to terminal
      accessLogStream.write(message); // log to file
    },
  },
});
