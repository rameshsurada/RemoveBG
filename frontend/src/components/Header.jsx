import React from "react";
import { assets } from "../assets/assets";
import { Upload } from "lucide-react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { removeBg } = useContext(AppContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-12">
      {/* left side banner */}
      <img className=" order-2 md:order-1 w-full h-full" src={assets.hero} />

      {/* right side text */}
      <div className="order-1 md:order-2 mr-5 ml-5">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">
          {" "}
          The fastest
          <span className="text-indigo-700"> background eraser.</span>{" "}
        </h1>
        <p className="text-gray-700">
          {" "}
          Upload any image and get a transparent background in seconds. Perfect
          for product photos, profile pictures, and graphic design — no design
          skills needed. Let AI do the heavy lifting. Drop your image, and we’ll
          remove the background instantly — 100% automatic, no Photoshop
          required.
        </p>{" "}
        <div className="mt-8  ">
          {" "}
          <input
            onChange={(e) => removeBg(e.target.files[0])}
            type="file"
            accept="image/*"
            id="upload1"
            hidden
          />
          <label
            htmlFor="upload1"
            className="bg-black text-white rounded-2xl px-4 py-2 sm:px-6 sm:py-3 hover:opacity-85 cursor-pointer inline-flex gap-2 items-center"
          >
            {" "}
            <Upload size={18} />
            Upload your image
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
