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
import BoostEngagement from "./Frontend/Components/Home/Header/HeaderLinks/BoostEngagement";
import FallingTextDemo from "./Frontend/Components/Animations/FallingTextDemo";

// Import newly created components
import TrackingSolutions from "./Frontend/Components/Home/Header/HeaderLinks/TrackingSolutions";
import AndroidIOSWeb from "./Frontend/Components/Home/Header/HeaderLinks/AndroidIOSWeb";
import IncentNonIncent from "./Frontend/Components/Home/Header/HeaderLinks/IncentNonIncent";
import MultiplePricingModels from "./Frontend/Components/Home/Header/HeaderLinks/MultiplePricingModels";
import CPIDroidBlog from "./Frontend/Components/Home/Header/HeaderLinks/Blog";
import CPIDroidSupport from "./Frontend/Components/Home/Header/HeaderLinks/Support";
import ContactCPIDroid from "./Frontend/Components/Home/Header/HeaderLinks/Contact";
import AndroidInstalls from "./Frontend/Components/Home/Header/HeaderLinks/AndroidInstalls";
import IOSInstalls from "./Frontend/Components/Home/Header/HeaderLinks/IOSInstalls";
import AndroidKeywordInstalls from "./Frontend/Components/Home/Header/HeaderLinks/AndroidKeywordInstalls";
import IOSKeywordInstalls from "./Frontend/Components/Home/Header/HeaderLinks/IOSKeywordInstalls";
import AndroidAPKInstalls from "./Frontend/Components/Home/Header/HeaderLinks/AndroidAPKInstalls";
import WebTraffic from "./Frontend/Components/Home/Header/HeaderLinks/WebTraffic";
import AndroidBooster from "./Frontend/Components/Home/Header/HeaderLinks/AndroidBooster";
import IOSBooster from "./Frontend/Components/Home/Header/HeaderLinks/IOSBooster";
import OfferwallMonetization from "./Frontend/Components/Home/Header/HeaderLinks/OfferwallMonetization";
import BecomePublisher from "./Frontend/Components/Home/Header/HeaderLinks/BecomePublisher";

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
        <Route path="/aso-booster" element={<ASObooster />} />
        <Route path="/fraud-detection" element={<FraudDetection />} />
        <Route path="/boost-engagement" element={<BoostEngagement />} />
        <Route path="/falling-text-demo" element={<FallingTextDemo />} />
        
        {/* New routes for created components */}
        <Route path="/tracking-solutions" element={<TrackingSolutions />} />
        <Route path="/android-ios-web" element={<AndroidIOSWeb />} />
        <Route path="/incent-non-incent" element={<IncentNonIncent />} />
        <Route path="/multiple-pricing-models" element={<MultiplePricingModels />} />
        <Route path="/cpidroid-blog" element={<CPIDroidBlog />} />
        <Route path="/cpidroid-support" element={<CPIDroidSupport />} />
        <Route path="/contact-cpidroid" element={<ContactCPIDroid />} />
        <Route path="/android-installs" element={<AndroidInstalls />} />
        <Route path="/ios-installs" element={<IOSInstalls />} />
        <Route path="/android-keyword-installs" element={<AndroidKeywordInstalls />} />
        <Route path="/ios-keyword-installs" element={<IOSKeywordInstalls />} />
        <Route path="/android-apk-installs" element={<AndroidAPKInstalls />} />
        <Route path="/web-traffic" element={<WebTraffic />} />
        <Route path="/android-booster" element={<AndroidBooster />} />
        <Route path="/ios-booster" element={<IOSBooster />} />
        <Route path="/offerwall-monetization" element={<OfferwallMonetization />} />
        <Route path="/become-publisher" element={<BecomePublisher />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
