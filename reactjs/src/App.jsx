import Navbar from "./component/Header";
import Footer from "./component/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useGetUserQuery } from "./store/auth/authApiSlice";
import { useEffect } from "react";
import { setCredentials } from "./store/auth/authSlice";

const App = () => {
    const navigate = useNavigate();
    //  const { data: user, isLoading, isError } = useGetUserQuery();
     
    //  useEffect(()=>{
    //   setCredentials(user)
    //  },[])

  // To go back:
  const handleGoBack = () => {
    navigate(-1); // Go back one step in history
  };
  return (
    <div className="flex flex-col min-h-screen bg-[#000000]">
      <header>
        <Navbar />
      </header>

      <main className="flex-1 overflow-auto mt-20">
              <button
        onClick={handleGoBack}
        className="flex items-center gap-2 px-3 py-2 text-white bg-gray-800 rounded hover:bg-gray-700 transition"
      >
        <ArrowLeft className="w-5 h-5" />
        Go Back
      </button>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
