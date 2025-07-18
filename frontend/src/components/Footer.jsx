import React from "react";
import { Facebook, Twitter, Mail } from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="p-4 sm:pl-20 py-4 grid grid-cols-1  sm:flex sm:justify-between  ">
      {/* left side element */}{" "}
      <div className=" grid grid-cols-1 sm:flex items-center space-x-2 ">
        {/* image logo */}
        <div className="flex items-center space-x-1 cursor-pointer" to="/">
          <img
            src={assets.logo}
            className="h-8 w-8 flex flex-wrap items-center"
          />
          <span className="text-2xl font-semibold text-gray-700">
            Remove
            <span className="text-2xl font-semibold text-indigo-600">BG</span>
          </span>
        </div>
        {/* text */}
        <span>
          {" "}
          <span> |</span> All rights reserved. copyright © RemoveBG 2025
        </span>
      </div>
      {/* right side element */}
      <div className="flex pr-25 space-x-3 py-2">
        {" "}
        <Facebook size={20} /> <Twitter size={20} />
        <Mail size={20} />
      </div>
    </div>
  );
};

export default Footer;
