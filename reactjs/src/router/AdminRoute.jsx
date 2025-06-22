// AdminRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const user = useSelector((state) => state.auth.userInfo);

  if (!user) {
    // not logged in
    return <Navigate to="/sign-in" replace />;
  }
  if (user.role !== "admin") {
    // logged in but not an admin
    return <Navigate to="/" replace />;
  }
  // user is an admin
  return <Outlet />;
};

export default AdminRoute;
  