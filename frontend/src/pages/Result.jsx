import React from "react";
import { assets } from "../assets/assets";

const Result = () => {
  return (
    <div className="mx-10 sm:mx-20 my-8 min-h-[80vh] ">
      {/* image container */}
      <div className="bg-blue-50 rounded-2xl shadow-xl grid gap-6 pt-7 space-x-2 px-10 py-5">
        {/* original image */}{" "}
        <div className="grid sm:flex">
          <div>
            {" "}
            <p className="py-4"> Original</p> <img src={assets.original} />
          </div>
          {/* bg removed image */}
          <div>
            {" "}
            <p className="py-4"> Background Removed</p>
            <img src={assets.bgremove} />
          </div>
        </div>
        {/* buttons */}
        <div className=" grid gap-2 sm:flex justify-end space-x-3 ">
          <button className="px-4 py-2 border  rounded-2xl  border-bg-indigo-400 hover:scale-105 duration-300 ">
            {" "}
            Try another image
          </button>
          <button className="px-4 bg-gradient-to-r text-white py-2 from-indigo-400 to-blue-300 rounded-2xl hover:scale-105 duration-300">
            {" "}
            Download image
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Result;
