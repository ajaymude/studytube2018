import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSignoutMutation } from "../store/auth/authApiSlice";
import { signOut } from "../store/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signout] = useSignoutMutation();

  const signOutHandler = async () => {
    try {
      await signout().unwrap();
      dispatch(signOut());
      navigate("/sign-in");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">YourAppName</div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/profile" className="text-gray-600 hover:text-gray-900">
            profile
          </Link>
          <Link to="/exams" className="text-gray-600 hover:text-gray-900">
            Exams
          </Link>
          <Link to="/subjects" className="text-gray-600 hover:text-gray-900">
            Subjects
          </Link>
          <Link to="/user" className="text-gray-600 hover:text-gray-900">
            User
          </Link>
          {userInfo ? (
            <button
              onClick={signOutHandler}
              className="block text-gray-600 hover:text-gray-900"
            >
              Sign-out
            </button>
          ) : (
                        <button
              onClick={signOutHandler}
              className="block text-gray-600 hover:text-gray-900"
            >
              Sign-in
            </button>
          )}
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2">
          <Link to="/" className="block text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="block text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link
            to="/services"
            className="block text-gray-600 hover:text-gray-900"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block text-gray-600 hover:text-gray-900"
          >
            Contact
          </Link>
          <Link
            to="/sign-in"
            className="block text-gray-600 hover:text-gray-900"
          >
            Sign-in
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
