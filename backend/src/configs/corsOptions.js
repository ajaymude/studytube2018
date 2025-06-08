const allowedOrigins = [
  'http://localhost:8000',
  'http://localhost:5173',
  'https://example.com'
];

export const corsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin (e.g. mobile apps, curl)
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  exposedHeaders: ['set-cookie'],   // if you ever need to inspect cookies in JS
  credentials: true,                // required to include cookies
  preflightContinue: false,         // pass the CORS preflight response to next()
  optionsSuccessStatus: 204         // some legacy browsers choke on 200
};
