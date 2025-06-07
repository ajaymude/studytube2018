// Cookie options
export const cookieOptions = {
  httpOnly: true, // Prevents client-side JS access for security
  secure: process.env.NODE_ENV === 'production', // Uses HTTPS in production
  sameSite: 'strict', // Prevents CSRF attacks
  maxAge: 60 * 60 * 1000, // 1 hour expiration
};
