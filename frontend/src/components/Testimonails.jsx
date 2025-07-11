import React from "react";
import { MessageSquareQuote } from "lucide-react";
import { testimonials } from "../assets/assets";

const Testimonails = () => {
  return (
    <div className="mb-10">
      <h1 className=" text-xl sm:text-2xl text-gray-800 font-semibold text-center mb-10">
        {" "}
        What Our Customers Say
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-xl flex flex-col justify-between hover:scale-105 duration-150"
          >
            {/* top */}
            <div>
              {" "}
              <MessageSquareQuote size={50} className="p-2" />{" "}
              <p className="p-2 text-gray-800 font text-xl pb-20">
                {" "}
                {item.quote}
              </p>{" "}
            </div>

            {/* bottom  */}
            <div className="p-2 bg-gray-200 rounded-xl">
              {" "}
              <p className="font-semibold"> {item.author}</p>
              <p> {item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonails;
