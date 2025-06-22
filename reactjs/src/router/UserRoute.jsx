// UserRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoute = () => {
  // grab the raw user object
  const user = useSelector((state) => state.auth.userInfo);

  // if not logged in at all → send to sign-in
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  // if logged in but role is neither 'user' nor 'admin' → send to sign-in
  if (user.role !== "user" && user.role !== "admin") {
    return <Navigate to="/sign-in" replace />;
  }

  // otherwise, allow access to nested routes
  return <Outlet />;
};

export default UserRoute;
