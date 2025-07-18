import React from "react";
import { plans } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-10 sm:mt-15">
      <h1 className=" text-xl sm:text-3xl font-bold text-gray-800">
        {" "}
        Plans That Work for Everyone
      </h1>
      <p className=" mt-4 sm:mt-6 text-md sm:text-xl mx-auto">
        {" "}
        No hidden fees. Choose the plan that fits your needs and start removing
        backgrounds with ease. Upgrade anytime
      </p>

      {/* plans */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10 mx-auto  ">
        {plans.map((item, index) => (
          <div
            key={item.id}
            className="bg-gray-50 mt-10 w-full max-w-sm mx-auto rounded-xl shadow-sm  pb-10 transition-transform transform hover:scale-105 duration-300
"
          >
            {" "}
            <h3 className="text-xl font-semibold my-10 "> {item.name}</h3>
            <span className="text-indigo-700 font-bold text-2xl">
              {" "}
              ₹ {item.price}
            </span>
            <div>
              <ul>
                <li className="font-bold text-md my-3"> {item.credits}</li>{" "}
                <li className="font-semibold text-md my-3">
                  {" "}
                  {item.description}
                </li>
              </ul>
            </div>
            <button
              onClick={() => navigate("/payment-error")}
              className="mt-6 bg-indigo-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-indigo-600 "
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
