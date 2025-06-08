const allowedOrigins = ['http://localhost:8000', 'https://example.com', 'http://localhost:5173'];

export const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // if you need to include cookies
  optionsSuccessStatus: 200,
};
