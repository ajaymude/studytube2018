// Cookie options (works in both dev and production)
export const cookieOptions = {
  httpOnly: true,                           // no JS access
  secure: process.env.NODE_ENV === 'production', 
  sameSite: process.env.NODE_ENV === 'production' 
    ? 'none'   // allow cross-site in prod (requires secure:true)
    : 'lax',   // more forgiving in dev over HTTP
  maxAge: 60 * 60 * 1000,                   // 1 hour
  path: '/',                                // send on all routes
};
