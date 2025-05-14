import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import helmet from 'helmet';
import { NODE_ENV, PORT } from './src/utils/constant.js';
import { corsOptions } from './src/configs/corsOptions.js';
import { router } from './src/routes/mainRoute.js';
import { errorHandler, notFount } from './src/middlewares/errorHandler.js';
import { winstonLogger } from './src/configs/winstonlogger.js';
import { morganLogger } from './src/configs/morganLogger.js';

const app = express();

app.use(helmet());
app.use(morganLogger);
app.use(cors(corsOptions));

// routes
app.use(router);

// error handler
app.use(errorHandler);
// app.use(notFount);

app.use((req, res, next) => {
  winstonLogger.info(`${req.method} ${req.url}`);
  next();
});



app.get('/test', (req, res) => {
  winstonLogger.debug('Debug message');
  winstonLogger.warn('Warning message');
  winstonLogger.error('Error message example');
  console.log(chalk.blue('Hello world!'));
  res.send('Logging test');
});


// server
app.listen(PORT, () => {
  console.log(
    `Server started on PORT: ${PORT} in ${NODE_ENV} mode.`
  );
});

