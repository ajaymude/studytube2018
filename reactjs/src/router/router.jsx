import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import SignupPage from "../page/auth/Signup";
import Signin from "../page/auth/Signin";
import NotFoundPage from "../page/NotFoundPage";
import Exams from "../page/study/Exams";
import Subjects from "../page/study/Subjects";
import Chapters from "../page/study/Chapters";
import Videos from "../page/study/Videos";
import Player from "../page/study/Player";
import PrivateRoute from "./PrivateRoute";
import UserRoute from "./UserRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="sign-up" element={<SignupPage />} />
      <Route path="sign-in" element={<Signin />} />

      <Route path="exams" element={<Exams />} />
      <Route path="exams/:exam" element={<Subjects />} />
      <Route path="exams/:exam/:subject" element={<Chapters />} />
      <Route path="exams/:exam/:subject/:chapter" element={<Videos />} />
      <Route element={<UserRoute />}>
        <Route
          path="exams/:exam/:subject/:chapter/:videoId"
          element={<Player />}
        />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
