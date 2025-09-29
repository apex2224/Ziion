import React from "react";
import FooterLinkTemplate from "./FooterLinkTemplate";

const AdvertiserApi = () => {
  const features = [
    "Comprehensive API for campaign management",
    "Real-time analytics and reporting",
    "Automated bidding strategies",
    "Fraud detection integration",
    "SDK and S2S tracking support"
  ];

  return (
    <FooterLinkTemplate 
      title="Advertiser API"
      description="Our comprehensive API solution for advertisers to manage campaigns, track performance, and integrate with their existing systems. Built for efficiency and real-time data access."
      features={features}
    />
  );
};

export default AdvertiserApi;