// UserRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo , 'ssssssss')
  if (!userInfo) {
    // not logged in
    return <Navigate to="/sign-in" replace />;
  }
  // must be at least a regular user
  if (userInfo?.user?.role !== "user" && userInfo?.user?.role !== "admin" ) {
    return <Navigate to="/sign-in" replace />;
  }
  return <Outlet />;
};
export default UserRoute;


// // UserRoute.jsx
// import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

// const UserRoute = () => {
//   const { userInfo } = useSelector(s => s.auth);
//   if (!userInfo) {
//     // not logged in
//     return <Navigate to="/sign-in" replace />;
//   }
//   // must be at least a regular user
//   if (userInfo.role !== "user" && userInfo.role !== "admin") {
//     return <Navigate to="/" replace />;
//   }
//   return <Outlet />;
// };
// export default UserRoute;
