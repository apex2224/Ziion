import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from "./Frontend/Components/RBFFAQ/Blog";
import Pricing from "./Frontend/Components/Pricing/Pricing";
import FAQ from "./Frontend/Components/RBFFAQ/FAQ";
import Rating from "./Frontend/Components/RBFFAQ/Rating";
import Footer from "./Frontend/Components/Home/Footer/Footer";
import Features from "./Frontend/Components/Home/Features";
import Header from "./Frontend/Components/Home/Header/Header";
import Login from "./Frontend/Components/Home/LoginSignUpContact/Login";
import SignUp from "./Frontend/Components/Home/LoginSignUpContact/SignUp";
import Contact from "./Frontend/Components/Home/LoginSignUpContact/Contact";

import ViewAllPlans from "./Frontend/Components/Pricing/ViewAllPlans";
import TopPage from "./Frontend/Components/Home/TopPage";
import PromotionalBenefits from "./Frontend/Components/Home/PromotionalBenefits";
import Advertiser from "./Frontend/Components/Home/Dashboard/Advertiser";
import Publisher from "./Frontend/Components/Home/Dashboard/Publisher";
import ASObooster from "./Frontend/Components/Home/Dashboard/ASObooster";
import FraudDetection from "./Frontend/Components/Home/Header/HeaderLinks/FraudDetection";

const LandingPage = () => {
  return (
    <>
      <Header />
      <TopPage />
      <PromotionalBenefits />
      <Features />
      <Pricing />
      <hr />
      <Rating />
      <hr />
      <FAQ />
      <hr />
      <Blog />

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/all-plans" element={<ViewAllPlans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advertiser" element={<Advertiser />} />
        <Route path="/publisher" element={<Publisher />} />
        <Route path="/aso-booster" element={<ASObooster />} />"
        <Route path="/fraud-detection" element={<FraudDetection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
