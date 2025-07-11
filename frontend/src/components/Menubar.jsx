import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Menubar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className=" bg-white px-8 py-4 flex justify-between items-center ">
      {/* left side elements */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <img
          src="/src/assets/icon.jpg"
          className="h-8 w-8 flex flex-wrap items-center"
        />
        <span className="text-2xl font-semibold text-gray-700">
          Remove
          <span className="text-2xl font-semibold text-yellow-600">BG</span>
        </span>
      </div>
      {/* right side elements */}
      <div className="hidden md:flex items-center space-x-3">
        {" "}
        <button className="font-medium hover:text-blue-600"> Login</button>{" "}
        <button className="font-medium bg-gray-100 hover:bg-gray-200 rounded-full py-2 px-4">
          {" "}
          Sign Up
        </button>{" "}
      </div>
      {/* mobile version */}
      <div className="flex md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {!isMenuOpen ? <Menu size={28} /> : <X size={28} />}
          {isMenuOpen && (
            <div className="flex flex-col absolute top-16 right-8 w-40 space-y-4 py-4 top-16 right-8 shadow-md bg-white ">
              {" "}
              <button className="font-medium hover:text-blue-600 b">
                {" "}
                Login
              </button>{" "}
              <button className="font-medium bg-gray-100 hover:bg-gray-200 rounded-full py-2 px-4">
                {" "}
                Sign Up
              </button>{" "}
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Menubar;
