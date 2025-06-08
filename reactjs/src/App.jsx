import React, { useEffect } from "react";
import Navbar from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import { useGetUserQuery } from "./store/auth/authApiSlice";
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from "./store/auth/authSlice";

const App = () => {
    const dispatch = useDispatch();
  const { userInfo } = useSelector(s => s.auth);
  const { data: user, isLoading, isError } = useGetUserQuery();

  console.log(user?.data)

  useEffect(() => {
    if (user) dispatch(setCredentials(user?.data));
  }, [user, dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Main content grows to fill */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
