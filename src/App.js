import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Blog from "./components/sections/rbf-faq/Blog";
import Pricing from "./components/pages/pricing/Pricing";
import FAQ from "./components/sections/rbf-faq/FAQ";
import Rating from "./components/sections/rbf-faq/Rating";
import Footer from "./components/layout/footer/Footer";
import Features from "./components/sections/Features";
import Header from "./components/layout/header/Header";
import Login from "./components/pages/auth/Login";
import SignUp from "./components/pages/auth/SignUp";
import Contact from "./components/pages/auth/Contact";

import ViewAllPlans from "./components/pages/pricing/ViewAllPlans";
import TopPage from "./components/sections/TopPage";
import PromotionalBenefits from "./components/sections/PromotionalBenefits";
import Advertiser from "./components/pages/dashboard/Advertiser";
import Publisher from "./components/pages/dashboard/Publisher";
import ASObooster from "./components/pages/dashboard/ASObooster";
import LetsChat from "./components/pages/dashboard/LetsChat";
import LetsTalk from "./components/pages/dashboard/LetsTalk";
import FraudDetection from "./components/layout/header/links/FraudDetection";
import BoostEngagement from "./components/layout/header/links/BoostEngagement";

//  Routes Import
import TrackingSolutions from "./components/layout/header/links/Features/TrackingSolutions";
import AndroidIOSWeb from "./components/layout/header/links/Features/AndroidIOSWeb";
import IncentNonIncent from "./components/layout/header/links/Features/IncentNonIncent";
import MultiplePricingModels from "./components/layout/header/links/Features/MultiplePricingModels";
import CPIDroidBlog from "./components/layout/header/links/Blog";
import CPIDroidSupport from "./components/layout/header/links/Support";
import ContactCPIDroid from "./components/layout/header/links/Contact";
import AndroidInstalls from "./components/layout/header/links/Advertise/AppInstalls/AndroidInstalls";
import IOSInstalls from "./components/layout/header/links/Advertise/AppInstalls/IOSInstalls";
import AndroidKeywordInstalls from "./components/layout/header/links/Advertise/KeywordInstalls/AndroidKeywordInstalls";
import IOSKeywordInstalls from "./components/layout/header/links/Advertise/KeywordInstalls/IOSKeywordInstalls";
import AndroidAPKInstalls from "./components/layout/header/links/Advertise/APKInstalls/AndroidAPKInstalls";
import WebTraffic from "./components/layout/header/links/Advertise/WebTraffic/WebTraffic";
import AndroidBooster from "./components/layout/header/links/Advertise/Boosters/AndroidBooster";
import IOSBooster from "./components/layout/header/links/Advertise/Boosters/IOSBooster";
import OfferwallMonetization from "./components/layout/header/links/OfferwallMonetization";
import BecomePublisher from "./components/layout/header/links/BecomePublisher";

// Awesome Text Animation Demo
import AwesomeTextDemo from "./components/pages/dashboard/AwesomeTextDemo";
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
          path="/awesome-text-demo"
          element={
            <div className="route-container">
              <AwesomeTextDemo />
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
