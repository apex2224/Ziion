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

// Footer Link Components
import AboutUsTheTeam from "./components/layout/footer/links/AboutUsTheTeam";
import AdvertiserApi from "./components/layout/footer/links/AdvertiserApi";
import BuyWebTraffic from "./components/layout/footer/links/BuyWebTraffic";
import CPIDroidAlternatives from "./components/layout/footer/links/CPIDroidAlternatives";
import CPIDroidBlogFooter from "./components/layout/footer/links/CPIDroidBlog";
import CampaignsPricing from "./components/layout/footer/links/CampaignsPricing";
import CancellationPolicy from "./components/layout/footer/links/CancellationPolicy";
import Careers from "./components/layout/footer/links/Careers";
import ContactFooter from "./components/layout/footer/links/Contact";
import Developer from "./components/layout/footer/links/Developer";
import EULA from "./components/layout/footer/links/EULA";
import FreeCPIMoney from "./components/layout/footer/links/FreeCPIMoney";
import GettingStarted from "./components/layout/footer/links/GettingStarted";
import Glossary from "./components/layout/footer/links/Glossary";
import HelpCenter from "./components/layout/footer/links/HelpCenter";
import HelpCenterZendesk from "./components/layout/footer/links/HelpCenterZendesk";
import InfringementPolicy from "./components/layout/footer/links/InfringementPolicy";
import LiveChat from "./components/layout/footer/links/LiveChat";
import MobileAppMarketing from "./components/layout/footer/links/MobileAppMarketing";
import MonetizationSolutions from "./components/layout/footer/links/MonetizationSolutions";
import OfferwallMonetizationFooter from "./components/layout/footer/links/OfferwallMonetization";
import OurClients from "./components/layout/footer/links/OurClients";
import OverseasRequests from "./components/layout/footer/links/OverseasRequests";
import PitchDeck from "./components/layout/footer/links/PitchDeck";
import PrivacyPolicy from "./components/layout/footer/links/PrivacyPolicy";
import PromoteAndroidApp from "./components/layout/footer/links/PromoteAndroidApp";
import PromoteAsoApp from "./components/layout/footer/links/PromoteAsoApp";
import PromoteIosApp from "./components/layout/footer/links/PromoteIosApp";
import PromoteWebApp from "./components/layout/footer/links/PromoteWebApp";
import PublisherApi from "./components/layout/footer/links/PublisherApi";
import ReferralProgram from "./components/layout/footer/links/ReferralProgram";
import RefundPolicy from "./components/layout/footer/links/RefundPolicy";
import ReportBug from "./components/layout/footer/links/ReportBug";
import RequestFeature from "./components/layout/footer/links/RequestFeature";
import StartupProgram from "./components/layout/footer/links/StartupProgram";
import StatusPage from "./components/layout/footer/links/StatusPage";
import Support from "./components/layout/footer/links/Support";
import TermsOfService from "./components/layout/footer/links/TermsOfService";
import Testimonials from "./components/layout/footer/links/Testimonials";
import TheBrand from "./components/layout/footer/links/TheBrand";
import Voucher from "./components/layout/footer/links/Voucher";

// Define which routes should NOT have ScrollReveal
const DASHBOARD_ROUTES = [
  "/advertiser",
  "/publisher",
  "/aso-booster",
  "/lets-chat",
  "/lets-talk",
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

        {/* Footer Link Routes */}
        <Route
          path="/about-us-the-team"
          element={
            <MainLayout pathname="/about-us-the-team">
              <AboutUsTheTeam />
            </MainLayout>
          }
        />
        <Route
          path="/advertiser-api"
          element={
            <MainLayout pathname="/advertiser-api">
              <AdvertiserApi />
            </MainLayout>
          }
        />
        <Route
          path="/buy-web-traffic"
          element={
            <MainLayout pathname="/buy-web-traffic">
              <BuyWebTraffic />
            </MainLayout>
          }
        />
        <Route
          path="/cpidroid-alternatives"
          element={
            <MainLayout pathname="/cpidroid-alternatives">
              <CPIDroidAlternatives />
            </MainLayout>
          }
        />
        <Route
          path="/cpidroid-blog-footer"
          element={
            <MainLayout pathname="/cpidroid-blog-footer">
              <CPIDroidBlogFooter />
            </MainLayout>
          }
        />
        <Route
          path="/campaigns-pricing"
          element={
            <MainLayout pathname="/campaigns-pricing">
              <CampaignsPricing />
            </MainLayout>
          }
        />
        <Route
          path="/cancellation-policy"
          element={
            <MainLayout pathname="/cancellation-policy">
              <CancellationPolicy />
            </MainLayout>
          }
        />
        <Route
          path="/careers"
          element={
            <MainLayout pathname="/careers">
              <Careers />
            </MainLayout>
          }
        />
        <Route
          path="/contact-footer"
          element={
            <MainLayout pathname="/contact-footer">
              <ContactFooter />
            </MainLayout>
          }
        />
        <Route
          path="/developer"
          element={
            <MainLayout pathname="/developer">
              <Developer />
            </MainLayout>
          }
        />
        <Route
          path="/eula"
          element={
            <MainLayout pathname="/eula">
              <EULA />
            </MainLayout>
          }
        />
        <Route
          path="/free-cpi-money"
          element={
            <MainLayout pathname="/free-cpi-money">
              <FreeCPIMoney />
            </MainLayout>
          }
        />
        <Route
          path="/getting-started"
          element={
            <MainLayout pathname="/getting-started">
              <GettingStarted />
            </MainLayout>
          }
        />
        <Route
          path="/glossary"
          element={
            <MainLayout pathname="/glossary">
              <Glossary />
            </MainLayout>
          }
        />
        <Route
          path="/help-center"
          element={
            <MainLayout pathname="/help-center">
              <HelpCenter />
            </MainLayout>
          }
        />
        <Route
          path="/help-center-zendesk"
          element={
            <MainLayout pathname="/help-center-zendesk">
              <HelpCenterZendesk />
            </MainLayout>
          }
        />
        <Route
          path="/infringement-policy"
          element={
            <MainLayout pathname="/infringement-policy">
              <InfringementPolicy />
            </MainLayout>
          }
        />
        <Route
          path="/live-chat"
          element={
            <MainLayout pathname="/live-chat">
              <LiveChat />
            </MainLayout>
          }
        />
        <Route
          path="/mobile-app-marketing"
          element={
            <MainLayout pathname="/mobile-app-marketing">
              <MobileAppMarketing />
            </MainLayout>
          }
        />
        <Route
          path="/monetization-solutions"
          element={
            <MainLayout pathname="/monetization-solutions">
              <MonetizationSolutions />
            </MainLayout>
          }
        />
        <Route
          path="/offerwall-monetization-footer"
          element={
            <MainLayout pathname="/offerwall-monetization-footer">
              <OfferwallMonetizationFooter />
            </MainLayout>
          }
        />
        <Route
          path="/our-clients"
          element={
            <MainLayout pathname="/our-clients">
              <OurClients />
            </MainLayout>
          }
        />
        <Route
          path="/overseas-requests"
          element={
            <MainLayout pathname="/overseas-requests">
              <OverseasRequests />
            </MainLayout>
          }
        />
        <Route
          path="/pitch-deck"
          element={
            <MainLayout pathname="/pitch-deck">
              <PitchDeck />
            </MainLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <MainLayout pathname="/privacy-policy">
              <PrivacyPolicy />
            </MainLayout>
          }
        />
        <Route
          path="/promote-android-app"
          element={
            <MainLayout pathname="/promote-android-app">
              <PromoteAndroidApp />
            </MainLayout>
          }
        />
        <Route
          path="/promote-aso-app"
          element={
            <MainLayout pathname="/promote-aso-app">
              <PromoteAsoApp />
            </MainLayout>
          }
        />
        <Route
          path="/promote-ios-app"
          element={
            <MainLayout pathname="/promote-ios-app">
              <PromoteIosApp />
            </MainLayout>
          }
        />
        <Route
          path="/promote-web-app"
          element={
            <MainLayout pathname="/promote-web-app">
              <PromoteWebApp />
            </MainLayout>
          }
        />
        <Route
          path="/publisher-api"
          element={
            <MainLayout pathname="/publisher-api">
              <PublisherApi />
            </MainLayout>
          }
        />
        <Route
          path="/referral-program"
          element={
            <MainLayout pathname="/referral-program">
              <ReferralProgram />
            </MainLayout>
          }
        />
        <Route
          path="/refund-policy"
          element={
            <MainLayout pathname="/refund-policy">
              <RefundPolicy />
            </MainLayout>
          }
        />
        <Route
          path="/report-bug"
          element={
            <MainLayout pathname="/report-bug">
              <ReportBug />
            </MainLayout>
          }
        />
        <Route
          path="/request-feature"
          element={
            <MainLayout pathname="/request-feature">
              <RequestFeature />
            </MainLayout>
          }
        />
        <Route
          path="/startup-program"
          element={
            <MainLayout pathname="/startup-program">
              <StartupProgram />
            </MainLayout>
          }
        />
        <Route
          path="/status-page"
          element={
            <MainLayout pathname="/status-page">
              <StatusPage />
            </MainLayout>
          }
        />
        <Route
          path="/support"
          element={
            <MainLayout pathname="/support">
              <Support />
            </MainLayout>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <MainLayout pathname="/terms-of-service">
              <TermsOfService />
            </MainLayout>
          }
        />
        <Route
          path="/testimonials"
          element={
            <MainLayout pathname="/testimonials">
              <Testimonials />
            </MainLayout>
          }
        />
        <Route
          path="/the-brand"
          element={
            <MainLayout pathname="/the-brand">
              <TheBrand />
            </MainLayout>
          }
        />
        <Route
          path="/voucher"
          element={
            <MainLayout pathname="/voucher">
              <Voucher />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
