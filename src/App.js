import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

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
import LetsChat from "./Frontend/Components/Home/Dashboard/LetsChat";
import LetsTalk from "./Frontend/Components/Home/Dashboard/LetsTalk";
import FraudDetection from "./Frontend/Components/Home/Header/HeaderLinks/FraudDetection";
import BoostEngagement from "./Frontend/Components/Home/Header/HeaderLinks/BoostEngagement";
import FallingTextDemo from "./Frontend/Components/Animations/FallingTextDemo";

//  Routes Import
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
    <div className="route-container">
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
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/all-plans"
          element={
            <div className="route-container">
              <ViewAllPlans />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="route-container">
              <Login />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="route-container">
              <SignUp />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="route-container">
              <Contact />
            </div>
          }
        />
        <Route
          path="/advertiser"
          element={
            <div className="route-container">
              <Advertiser />
            </div>
          }
        />
        <Route
          path="/publisher"
          element={
            <div className="route-container">
              <Publisher />
            </div>
          }
        />
        <Route
          path="/aso-booster"
          element={
            <div className="route-container">
              <ASObooster />
            </div>
          }
        />
        <Route
          path="/lets-chat"
          element={
            <div className="route-container">
              <LetsChat />
            </div>
          }
        />
        <Route
          path="/lets-talk"
          element={
            <div className="route-container">
              <LetsTalk />
            </div>
          }
        />
        <Route
          path="/fraud-detection"
          element={
            <div className="route-container">
              <FraudDetection />
            </div>
          }
        />
        <Route
          path="/boost-engagement"
          element={
            <div className="route-container">
              <BoostEngagement />
            </div>
          }
        />
        <Route
          path="/falling-text-demo"
          element={
            <div className="route-container">
              <FallingTextDemo />
            </div>
          }
        />

        <Route
          path="/tracking-solutions"
          element={
            <div className="route-container">
              <TrackingSolutions />
            </div>
          }
        />
        <Route
          path="/android-ios-web"
          element={
            <div className="route-container">
              <AndroidIOSWeb />
            </div>
          }
        />
        <Route
          path="/incent-non-incent"
          element={
            <div className="route-container">
              <IncentNonIncent />
            </div>
          }
        />
        <Route
          path="/multiple-pricing-models"
          element={
            <div className="route-container">
              <MultiplePricingModels />
            </div>
          }
        />
        <Route
          path="/cpidroid-blog"
          element={
            <div className="route-container">
              <CPIDroidBlog />
            </div>
          }
        />
        <Route
          path="/cpidroid-support"
          element={
            <div className="route-container">
              <CPIDroidSupport />
            </div>
          }
        />
        <Route
          path="/contact-cpidroid"
          element={
            <div className="route-container">
              <ContactCPIDroid />
            </div>
          }
        />
        <Route
          path="/android-installs"
          element={
            <div className="route-container">
              <AndroidInstalls />
            </div>
          }
        />
        <Route
          path="/ios-installs"
          element={
            <div className="route-container">
              <IOSInstalls />
            </div>
          }
        />
        <Route
          path="/android-keyword-installs"
          element={
            <div className="route-container">
              <AndroidKeywordInstalls />
            </div>
          }
        />
        <Route
          path="/ios-keyword-installs"
          element={
            <div className="route-container">
              <IOSKeywordInstalls />
            </div>
          }
        />
        <Route
          path="/android-apk-installs"
          element={
            <div className="route-container">
              <AndroidAPKInstalls />
            </div>
          }
        />
        <Route
          path="/web-traffic"
          element={
            <div className="route-container">
              <WebTraffic />
            </div>
          }
        />
        <Route
          path="/android-booster"
          element={
            <div className="route-container">
              <AndroidBooster />
            </div>
          }
        />
        <Route
          path="/ios-booster"
          element={
            <div className="route-container">
              <IOSBooster />
            </div>
          }
        />
        <Route
          path="/offerwall-monetization"
          element={
            <div className="route-container">
              <OfferwallMonetization />
            </div>
          }
        />
        <Route
          path="/become-publisher"
          element={
            <div className="route-container">
              <BecomePublisher />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
