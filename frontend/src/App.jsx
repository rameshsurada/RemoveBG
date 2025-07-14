import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import Result from "./pages/Result";
import BuyCredits from "./pages/BuyCredits";

const App = () => {
  return (
    <>
      <Menubar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buycredits" element={<BuyCredits />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
