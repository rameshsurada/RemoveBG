import React from "react";
import { steps } from "../assets/assets";

const BgRemovalSteps = () => {
  return (
    <div className="text-center mt-4 sm:mt-12 ">
      <h2 className="font-semibold md:text-4xl text-xl mb-12">
        {" "}
        How to remove a background in seconds ?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {steps.map((item, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <span className=" bg-gray-200 text-indigo-800 text-sm font-semibold px-2 py-1 rounded-full">
              {" "}
              {item.step}
            </span>{" "}
            <h3 className="mt-10 font-bold text-xl"> {item.title}</h3>
            <p className="text-gray-700 mt-4"> {item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BgRemovalSteps;
