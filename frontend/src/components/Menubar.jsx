import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import { useClerk } from "@clerk/clerk-react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";

const Menubar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn, openSignUp } = useClerk();
  const { user, isSignedIn } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);

  const location = useLocation();

  const openRegister = () => {
    openSignUp({});
  };

  const openLogin = () => {
    openSignIn({});
  };

  return (
    <nav className="bg-white px-8 py-4 flex justify-between items-center">
      {/* left side elements */}
      <Link className="flex items-center space-x-1 cursor-pointer" to="/">
        <img
          src={assets.logo}
          className="h-8 w-8 flex flex-wrap items-center"
        />
        <span className="text-2xl font-semibold text-gray-700">
          Remove
          <span className="text-2xl font-semibold text-indigo-600">BG</span>
        </span>
      </Link>
      {/* right side elements */}
      <div className="hidden md:flex items-center space-x-3">
        <SignedOut>
          <button
            className="font-medium hover:text-blue-600"
            onClick={openLogin}
          >
            Login
          </button>
          <button
            className="font-medium bg-gray-100 hover:bg-gray-200 rounded-full py-2 px-4"
            onClick={openRegister}
          >
            Sign Up
          </button>
        </SignedOut>
        <SignedIn>
          <Link
            className="bg-blue-100 rounded-2xl px-4 py-1 flex text-center items-center hover:scale-105 duration-200"
            to="/buycredits"
          >
            <img src={assets.credits} className="h-5 w-5" />
            <p className="text-gray-600 font-medium px-1">
              Credits: {credit === null ? "Loading..." : credit}
            </p>
          </Link>
          <p className="text-gray-700 font-medium"> Hi, {user?.fullName}</p>
          <UserButton />
        </SignedIn>
      </div>
      {/* mobile version */}
      <div className="flex md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {!isMenuOpen ? <Menu size={28} /> : <X size={28} />}
          {isMenuOpen && (
            <div className="flex flex-col absolute top-16 right-8 w-40 space-y-4 py-4 shadow-md bg-white">
              <SignedOut>
                <button
                  className="font-medium hover:text-blue-600"
                  onClick={openLogin}
                >
                  Login
                </button>
                <button
                  className="font-medium bg-gray-100 hover:bg-gray-200 rounded-full py-2 px-4"
                  onClick={openRegister}
                >
                  Sign Up
                </button>
              </SignedOut>
              <SignedIn>
                <Link
                  className="bg-blue-100 rounded-2xl px-4 py-1 flex text-center items-center hover:scale-105 duration-200"
                  to="/buycredits"
                >
                  <img src={assets.credits} className="h-7 w-7" />

                  <p className="text-gray-600"> Credits: {credit} </p>
                </Link>
                <div className="flex gap-2 items-center">
                  <UserButton className="ml-2" />
                  <p>Hi, {user?.firstName}</p>
                </div>
              </SignedIn>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Menubar;
