import React from "react";
import styles from "./FooterLinkTemplate.module.css"; // Using a common template for styling

const AboutUsTheTeam = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About Us: The Team</h1>
        <p className={styles.description}>
          We are a D.P.I S.G.W 900 Certified AdTech Platform with built-in SDK & S2S tracking. 
          Our team is dedicated to providing the best advertising solutions for mobile app developers.
        </p>
        
        <div className={styles.teamInfo}>
          <h2>Our Mission</h2>
          <p>
            We aim to reduce Cost Per Install (CPI) for Android and iOS apps. 
            Our platform helps advertisers promote their apps and publishers monetize their audience.
          </p>
          
          <h2>What We Offer</h2>
          <ul className={styles.featuresList}>
            <li>D.P.I S.G.W 900 Certified AdTech Platform</li>
            <li>SDK & S2S tracking integration</li>
            <li>Support for Android & iOS app promotion</li>
            <li>ASO (App Store Optimization) services</li>
            <li>Web promotion capabilities</li>
            <li>Advanced fraud detection</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTheTeam;