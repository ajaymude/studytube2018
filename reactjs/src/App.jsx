import React from "react";
import Navbar from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import { useGetUserQuery } from "./store/auth/authApiSlice";

const App = () => {
    const { data: user, isLoading, isError } = useGetUserQuery();
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

