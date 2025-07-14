import React from "react";

import Header from "../components/Header";
import BgRemovalSteps from "../components/BgRemovalSteps";
import Pricing from "../components/Pricing";
import Testimonails from "../components/Testimonails";
import toast from "react-hot-toast";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Header />

      <BgRemovalSteps />

      <Pricing />
      <Testimonails />
    </div>
  );
};

export default Home;
