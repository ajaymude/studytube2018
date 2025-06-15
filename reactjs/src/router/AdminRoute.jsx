// AdminRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  if (!userInfo?.user) {
    return <Navigate to="/sign-in" replace />;
  }
  if (userInfo?.user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
export default AdminRoute;
