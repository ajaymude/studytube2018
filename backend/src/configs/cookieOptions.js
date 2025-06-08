// Cookie options (updated for cross-site cookies)
export const cookieOptions = {
  httpOnly: true,                              // Prevents client-side JS access
  secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in prod
  sameSite: 'none',                            // Allow cross-site requests
  maxAge: 60 * 60 * 1000,                      // 1 hour expiration
  path: '/',                                   // Ensure cookie is sent on all paths
};
