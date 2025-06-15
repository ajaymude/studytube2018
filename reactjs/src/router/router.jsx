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
import Exams from "../page/user/Exams";
import Subjects from "../page/user/Subjects";
import Chapters from "../page/user/Chapters";
import Videos from "../page/user/Videos";
import Player from "../page/user/Player";
import UserRoute from "./UserRoute";
import AdminRoute from "./AdminRoute";
import Test from "../page/admin/Test";
import User from "../page/user/User";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public pages */}
      <Route index element={<Home />} />
      <Route path="sign-up" element={<SignupPage />} />
      <Route path="sign-in" element={<Signin />} />
      {/* Browsing (public) */}
      <Route path="exams" element={<Exams />} />
      <Route path="exams/:exam" element={<Subjects />} />
      <Route path="exams/:exam/:subject" element={<Chapters />} />
      <Route path="exams/:exam/:subject/:chapter" element={<Videos />} />
      <Route path="subjects" element={<Subjects />} />
      <Route path="subjects/:chapters" element={<Chapters />} />
      <Route path="subjects/:chapters/:videos" element={<Videos />} />

      {/* Playback (logged-in users only) */}
      <Route element={<UserRoute />}>
        <Route
          path="/exams/:exam/:subject/:chapter/:videoId"
          element={<Player />}
        />
        <Route
          path="/subjects/:chapters/:videos/:videoId"
          element={<Player />}
        />
        <Route path="/user" element={<User />} />
      </Route>
      {/* Admin section (admin only) */}
      <Route element={<AdminRoute />}>
        <Route path="/admin/admin" element={<Test />} />
      </Route>
      {/* Catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
