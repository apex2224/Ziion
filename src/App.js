import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";


// Import ScrollReveal hook
import useScrollReveal from "./hooks/useScrollReveal";

// --- Public Components ---
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
import FraudDetection from "./components/layout/header/links/FraudDetection";
import BoostEngagement from "./components/layout/header/links/BoostEngagement";
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
import ScrollRevealDemo from "./components/pages/ScrollRevealDemo";
import AwesomeTextDemo from "./components/pages/dashboard/AwesomeTextDemo";
import SlideInPanel from "./components/ui/SlideInPanel";
import AuthManager from "./components/auth/AuthManager";
import Backdrop from "./components/ui/Backdrop";

// --- Private (Dashboard) Components ---
import Advertiser from "./components/pages/dashboard/Advertiser";
import Publisher from "./components/pages/dashboard/Publisher";
import ASObooster from "./components/pages/dashboard/ASObooster";
import LetsChat from "./components/pages/dashboard/LetsChat";
import LetsTalk from "./components/pages/dashboard/LetsTalk";
import ProfilePage from './components/pages/dashboard/ProfilePage'; // NEW: Assuming you'll create a profile page here

// Define which routes should NOT have ScrollReveal (already provided)
const DASHBOARD_ROUTES = [
  '/advertiser',
  '/publisher',
  '/aso-booster',
  '/lets-chat',
  '/lets-talk',
];

// Reusable Layout for public-facing routes
const PublicLayout = ({ children, onProfileClick }) => {
  const location = useLocation();
  const shouldReveal = !DASHBOARD_ROUTES.includes(location.pathname);
  useScrollReveal(shouldReveal);

  return (
    <>
      <Header onProfileClick={onProfileClick} />
      <div className="route-container">{children}</div>
      <Footer />
    </>
  );
};

// Layout for authentication pages (no Header, no Footer)
const AuthLayout = ({ children }) => {
  const shouldReveal = false;
  useScrollReveal(shouldReveal);

  return (
    <div className="route-container">{children}</div>
  );
};

// Reusable Layout for dashboard routes
const DashboardLayout = ({ children }) => {
  useScrollReveal(false); // Disable ScrollReveal for all dashboard pages

  // This is where you would place a dedicated DashboardHeader or Sidebar
  // For now, it will be a minimal layout to demonstrate the concept.
  // The logout button would be here, or within the children.
  return (
    <div className="dashboard-container">
      {/* Example of a simple dashboard header. This replaces the main Header. */}
      {/* <DashboardHeader /> */}
      <main>{children}</main>
    </div>
  );
};

const LandingPage = () => (
  <>
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
  </>
);

const App = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleProfilePanel = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <BrowserRouter>
      <Backdrop isOpen={isProfileOpen} onClick={toggleProfilePanel} />
      <Routes>
        {/* Public Routes with Header and Footer */}
        <Route path="/" element={<PublicLayout onProfileClick={toggleProfilePanel}><LandingPage /></PublicLayout>} />
        <Route path="/all-plans" element={<PublicLayout onProfileClick={toggleProfilePanel}><ViewAllPlans /></PublicLayout>} />
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/signup" element={<AuthLayout><SignUp /></AuthLayout>} />
        <Route path="/contact" element={<PublicLayout onProfileClick={toggleProfilePanel}><Contact /></PublicLayout>} />
        <Route path="/fraud-detection" element={<PublicLayout onProfileClick={toggleProfilePanel}><FraudDetection /></PublicLayout>} />
        <Route path="/boost-engagement" element={<PublicLayout onProfileClick={toggleProfilePanel}><BoostEngagement /></PublicLayout>} />
        <Route path="/awesome-text-demo" element={<PublicLayout onProfileClick={toggleProfilePanel}><AwesomeTextDemo /></PublicLayout>} />
        <Route path="/tracking-solutions" element={<PublicLayout onProfileClick={toggleProfilePanel}><TrackingSolutions /></PublicLayout>} />
        <Route path="/android-ios-web" element={<PublicLayout onProfileClick={toggleProfilePanel}><AndroidIOSWeb /></PublicLayout>} />
        <Route path="/incent-non-incent" element={<PublicLayout onProfileClick={toggleProfilePanel}><IncentNonIncent /></PublicLayout>} />
        <Route path="/multiple-pricing-models" element={<PublicLayout onProfileClick={toggleProfilePanel}><MultiplePricingModels /></PublicLayout>} />
        <Route path="/cpidroid-blog" element={<PublicLayout onProfileClick={toggleProfilePanel}><CPIDroidBlog /></PublicLayout>} />
        <Route path="/cpidroid-support" element={<PublicLayout onProfileClick={toggleProfilePanel}><CPIDroidSupport /></PublicLayout>} />
        <Route path="/contact-cpidroid" element={<PublicLayout onProfileClick={toggleProfilePanel}><ContactCPIDroid /></PublicLayout>} />
        <Route path="/android-installs" element={<PublicLayout onProfileClick={toggleProfilePanel}><CPIDroidBlogPage /></PublicLayout>} />
        <Route path="/ios-installs" element={<PublicLayout onProfileClick={toggleProfilePanel}><IOSInstalls /></PublicLayout>} />
        <Route path="/android-keyword-installs" element={<PublicLayout onProfileClick={toggleProfilePanel}><AndroidKeywordInstalls /></PublicLayout>} />
        <Route path="/ios-keyword-installs" element={<PublicLayout onProfileClick={toggleProfilePanel}><IOSKeywordInstalls /></PublicLayout>} />
        <Route path="/android-apk-installs" element={<PublicLayout onProfileClick={toggleProfilePanel}><AndroidAPKInstalls /></PublicLayout>} />
        <Route path="/web-traffic" element={<PublicLayout onProfileClick={toggleProfilePanel}><WebTraffic /></PublicLayout>} />
        <Route path="/android-booster" element={<PublicLayout onProfileClick={toggleProfilePanel}><AndroidBooster /></PublicLayout>} />
        <Route path="/ios-booster" element={<PublicLayout onProfileClick={toggleProfilePanel}><IOSBooster /></PublicLayout>} />
        <Route path="/offerwall-monetization" element={<PublicLayout onProfileClick={toggleProfilePanel}><OfferwallMonetization /></PublicLayout>} />
        <Route path="/become-publisher" element={<PublicLayout onProfileClick={toggleProfilePanel}><BecomePublisher /></PublicLayout>} />
        <Route path="/scroll-reveal-demo" element={<PublicLayout onProfileClick={toggleProfilePanel}><ScrollRevealDemo /></PublicLayout>} />

        {/* Private Dashboard Routes without public Header */}
        <Route path="/advertiser" element={<DashboardLayout><Advertiser /></DashboardLayout>} />
        <Route path="/publisher" element={<DashboardLayout><Publisher /></DashboardLayout>} />
        <Route path="/aso-booster" element={<DashboardLayout><ASObooster /></DashboardLayout>} />
        <Route path="/lets-chat" element={<DashboardLayout><LetsChat /></DashboardLayout>} />
        <Route path="/lets-talk" element={<DashboardLayout><LetsTalk /></DashboardLayout>} />
      </Routes>
      <SlideInPanel isOpen={isProfileOpen} onClose={toggleProfilePanel}>
        <AuthManager onClose={toggleProfilePanel} />
      </SlideInPanel>
    </BrowserRouter>
  );
};

export default App;