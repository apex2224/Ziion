import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Import ScrollReveal hook
import useScrollReveal from "./hooks/useScrollReveal";

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
import CPIDroidBlogPage from "./components/layout/header/links/Advertise/AppInstalls/CPIDroidBlog";
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

// ScrollReveal Demo
import ScrollRevealDemo from "./components/pages/ScrollRevealDemo";

// Define which routes should NOT have ScrollReveal
const DASHBOARD_ROUTES = [
  '/advertiser',
  '/publisher',
  '/aso-booster',
  '/lets-chat',
  '/lets-talk'
];

const MainLayout = ({ children, pathname }) => {
  // Enable ScrollReveal only if current path is not in dashboard routes
  const shouldReveal = !DASHBOARD_ROUTES.includes(pathname);
  useScrollReveal(shouldReveal);

  return <div className="route-container">{children}</div>;
};

const LandingPage = () => {
  return (
    <MainLayout pathname="/">
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
    </MainLayout>
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
            <MainLayout pathname="/all-plans">
              <ViewAllPlans />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <MainLayout pathname="/login">
              <Login />
            </MainLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <MainLayout pathname="/signup">
              <SignUp />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout pathname="/contact">
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/advertiser"
          element={
            <MainLayout pathname="/advertiser">
              <Advertiser />
            </MainLayout>
          }
        />
        <Route
          path="/publisher"
          element={
            <MainLayout pathname="/publisher">
              <Publisher />
            </MainLayout>
          }
        />
        <Route
          path="/aso-booster"
          element={
            <MainLayout pathname="/aso-booster">
              <ASObooster />
            </MainLayout>
          }
        />
        <Route
          path="/lets-chat"
          element={
            <MainLayout pathname="/lets-chat">
              <LetsChat />
            </MainLayout>
          }
        />
        <Route
          path="/lets-talk"
          element={
            <MainLayout pathname="/lets-talk">
              <LetsTalk />
            </MainLayout>
          }
        />
        <Route
          path="/fraud-detection"
          element={
            <MainLayout pathname="/fraud-detection">
              <FraudDetection />
            </MainLayout>
          }
        />
        <Route
          path="/boost-engagement"
          element={
            <MainLayout pathname="/boost-engagement">
              <BoostEngagement />
            </MainLayout>
          }
        />
        <Route
          path="/awesome-text-demo"
          element={
            <MainLayout pathname="/awesome-text-demo">
              <AwesomeTextDemo />
            </MainLayout>
          }
        />
        <Route
          path="/tracking-solutions"
          element={
            <MainLayout pathname="/tracking-solutions">
              <TrackingSolutions />
            </MainLayout>
          }
        />
        <Route
          path="/android-ios-web"
          element={
            <MainLayout pathname="/android-ios-web">
              <AndroidIOSWeb />
            </MainLayout>
          }
        />
        <Route
          path="/incent-non-incent"
          element={
            <MainLayout pathname="/incent-non-incent">
              <IncentNonIncent />
            </MainLayout>
          }
        />
        <Route
          path="/multiple-pricing-models"
          element={
            <MainLayout pathname="/multiple-pricing-models">
              <MultiplePricingModels />
            </MainLayout>
          }
        />
        <Route
          path="/cpidroid-blog"
          element={
            <MainLayout pathname="/cpidroid-blog">
              <CPIDroidBlog />
            </MainLayout>
          }
        />
        <Route
          path="/cpidroid-support"
          element={
            <MainLayout pathname="/cpidroid-support">
              <CPIDroidSupport />
            </MainLayout>
          }
        />
        <Route
          path="/contact-cpidroid"
          element={
            <MainLayout pathname="/contact-cpidroid">
              <ContactCPIDroid />
            </MainLayout>
          }
        />
        <Route
          path="/android-installs"
          element={
            <MainLayout pathname="/android-installs">
              <CPIDroidBlogPage />
            </MainLayout>
          }
        />
        <Route
          path="/ios-installs"
          element={
            <MainLayout pathname="/ios-installs">
              <IOSInstalls />
            </MainLayout>
          }
        />
        <Route
          path="/android-keyword-installs"
          element={
            <MainLayout pathname="/android-keyword-installs">
              <AndroidKeywordInstalls />
            </MainLayout>
          }
        />
        <Route
          path="/ios-keyword-installs"
          element={
            <MainLayout pathname="/ios-keyword-installs">
              <IOSKeywordInstalls />
            </MainLayout>
          }
        />
        <Route
          path="/android-apk-installs"
          element={
            <MainLayout pathname="/android-apk-installs">
              <AndroidAPKInstalls />
            </MainLayout>
          }
        />
        <Route
          path="/web-traffic"
          element={
            <MainLayout pathname="/web-traffic">
              <WebTraffic />
            </MainLayout>
          }
        />
        <Route
          path="/android-booster"
          element={
            <MainLayout pathname="/android-booster">
              <AndroidBooster />
            </MainLayout>
          }
        />
        <Route
          path="/ios-booster"
          element={
            <MainLayout pathname="/ios-booster">
              <IOSBooster />
            </MainLayout>
          }
        />
        <Route
          path="/offerwall-monetization"
          element={
            <MainLayout pathname="/offerwall-monetization">
              <OfferwallMonetization />
            </MainLayout>
          }
        />

        <Route
          path="/become-publisher"
          element={
            <MainLayout pathname="/become-publisher">
              <BecomePublisher />
            </MainLayout>
          }
        />
        
        {/* ScrollReveal Demo Route */}
        <Route
          path="/scroll-reveal-demo"
          element={
            <MainLayout pathname="/scroll-reveal-demo">
              <ScrollRevealDemo />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
