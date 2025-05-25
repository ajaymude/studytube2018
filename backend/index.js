import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import cookieParser from 'cookie-parser';

import { router } from './src/routes/mainRoute.js';
import { rateLimiter } from './src/configs/rateLimiter.js';
import { corsOptions } from './src/configs/corsOptions.js';
import { morganLogger } from './src/configs/morganLogger.js';
import { cookieOptions } from './src/configs/cookieOptions.js';
import { connectDatabase } from './src/configs/dbConnect.js';
import { NODE_ENV, PORT } from './src/utils/constant.js';
import { errorHandler, notFount } from './src/middlewares/errorHandler.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(morganLogger);
app.use(rateLimiter);
app.use(cors(corsOptions));
app.use(cookieParser(cookieOptions));

// routes
app.use(router);
// app.use(notFount);

// error handler
app.use(errorHandler);

// static file
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}

// server
const server = () => {
  try {
    connectDatabase(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server started on PORT: ${PORT} in ${NODE_ENV} mode.`);
    });
  } catch (error) {
    console.log(error);
  }
};
server();
