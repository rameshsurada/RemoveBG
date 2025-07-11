import React from "react";
import Menubar from "../components/Menubar";

import Header from "../components/Header";
import BgRemovalSteps from "../components/BgRemovalSteps";
import Pricing from "../components/Pricing";
import Testimonails from "../components/Testimonails";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Menubar />
      <Header />
      <BgRemovalSteps />
      <Pricing />
      <Testimonails />
    </div>
  );
};

export default Home;
