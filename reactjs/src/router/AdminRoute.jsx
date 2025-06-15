// AdminRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { userInfo } = useSelector(s => s.auth);
  if (!userInfo) {
    // not logged in
    return <Navigate to="/sign-in" replace />;
  }
  // only admin may pass
  if (userInfo.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
export default AdminRoute;
