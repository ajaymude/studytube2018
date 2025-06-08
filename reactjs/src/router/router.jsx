import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import SignupPage from "../page/auth/Signup";
import Signin from "../page/auth/Signin";
import PrivateRoute from "./PrivateRoute";
import Test from "../page/Test";
import NotFoundPage from "../page/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />

      <Route path="/sign-up" element={<SignupPage />} />
      <Route path="/sign-in" element={<Signin />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Test />} />
      </Route>
        <Route path="*" element={<NotFoundPage/>} />
    </Route>
  )
);

export default router;


// later apply the lazy loading for the routes