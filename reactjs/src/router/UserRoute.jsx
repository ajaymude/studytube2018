// UserRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  if (!userInfo?.user) {
    return <Navigate to="/sign-in" replace />;
  }
  if (userInfo?.user?.role !== "user" && userInfo?.user?.role !== "admin" ) {
    return <Navigate to="/sign-in" replace />;
  }
  return <Outlet />;
};
export default UserRoute;

