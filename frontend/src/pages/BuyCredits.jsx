import React from "react";
import Pricing from "../components/Pricing";

const BuyCredits = () => {
  return (
    <div className="sm:mb-35">
      <Pricing />
      <p className="p-10 text-gray-500">
        {" "}
        Our payments page is currently disabled due to a technical issue on the
        server side. We’re actively working to resolve this as quickly as
        possible. Thank you for your patience and understanding!
      </p>
    </div>
  );
};

export default BuyCredits;
