import React from "react";
import Header from "../../../../header/Header";
import Footer from "../../../../footer/Footer";
import styles from "./IOSInstalls.module.css";
import { FaApple, FaDownload, FaMobileAlt, FaChartLine, FaBolt, FaUsers, FaGlobe } from "react-icons/fa";

const IOSInstalls = () => {
  const benefits = [
    {
      icon: <FaDownload className={styles.benefitIcon} />,
      title: "Premium Audience",
      description: "Access high-value iOS users with strong purchasing power and engagement."
    },
    {
      icon: <FaChartLine className={styles.benefitIcon} />,
      title: "Performance Tracking",
      description: "Real-time analytics and detailed reporting on all your campaign metrics."
    },
    {
      icon: <FaUsers className={styles.benefitIcon} />,
      title: "Targeted Reach",
      description: "Precise targeting options to reach your ideal iOS user base."
    },
    {
      icon: <FaMobileAlt className={styles.benefitIcon} />,
      title: "Device Optimization",
      description: "Campaigns optimized for all iOS devices including iPhone and iPad."
    }
  ];

  const features = [
    "Real user installs from genuine iOS devices",
    "Advanced fraud prevention technology",
    "Flexible budget control and bidding options",
    "Comprehensive analytics dashboard",
    "A/B testing capabilities",
    "24/7 customer support"
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>iOS App Installs</h1>
          <p className={styles.description}>
            Drive high-quality installs for your iOS app with our targeted campaign solutions
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Reach iOS Users Worldwide</h2>
              <p>
                Our iOS install campaigns connect you with real users on genuine Apple devices. 
                With precise targeting and advanced fraud prevention, you'll get high-quality installs 
                that drive real value for your app.
              </p>
              <p>
                Whether you're launching a new app or growing an existing one, our platform provides 
                the tools and reach you need to succeed in the competitive iOS marketplace.
              </p>
              
              <div className={styles.featuresList}>
                <h3 className={styles.featuresTitle}>Key Features:</h3>
                <ul className={styles.features}>
                  {features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <FaBolt className={styles.featureIcon} /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.visualContent}>
            <div className={styles.svgContainer}>
              <svg viewBox="0 0 300 300" className={styles.decorativeSvg}>
                <rect x="50" y="50" width="200" height="200" rx="40" fill="#000000" />
                <circle cx="150" cy="150" r="50" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Why Choose Our iOS Installs</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIconWrapper}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Flexible Pricing Options</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Starter</h3>
              <div className={styles.pricingPrice}>$0.75</div>
              <div className={styles.pricingDescription}>per install</div>
              <ul className={styles.pricingFeatures}>
                <li>500+ daily installs</li>
                <li>Basic targeting</li>
                <li>Email support</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Professional</h3>
              <div className={styles.pricingPrice}>$0.65</div>
              <div className={styles.pricingDescription}>per install</div>
              <ul className={styles.pricingFeatures}>
                <li>5,000+ daily installs</li>
                <li>Advanced targeting</li>
                <li>Real-time analytics</li>
                <li>Priority support</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Enterprise</h3>
              <div className={styles.pricingPrice}>Custom</div>
              <div className={styles.pricingDescription}>volume discounts</div>
              <ul className={styles.pricingFeatures}>
                <li>Unlimited installs</li>
                <li>Premium targeting</li>
                <li>Dedicated account manager</li>
                <li>API access</li>
                <li>24/7 phone support</li>
              </ul>
              <button className={styles.pricingButton}>Contact Sales</button>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Grow Your iOS App?</h2>
          <p className={styles.ctaSubtitle}>
            Start driving high-quality installs today with our proven iOS campaign solutions
          </p>
          <button className={styles.ctaButton}>
            Create iOS Campaign
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IOSInstalls;