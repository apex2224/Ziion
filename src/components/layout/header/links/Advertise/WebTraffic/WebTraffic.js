import React from "react";
import Header from "../../../../header/Header";
import Footer from "../../../../footer/Footer";
import styles from "./WebTraffic.module.css";
import { FaGlobe, FaChartLine, FaBolt, FaUsers, FaDesktop, FaMobileAlt } from "react-icons/fa";

const WebTraffic = () => {
  const benefits = [
    {
      icon: <FaUsers className={styles.benefitIcon} />,
      title: "Targeted Visitors",
      description: "Reach users interested in your content, products, or services."
    },
    {
      icon: <FaChartLine className={styles.benefitIcon} />,
      title: "Performance Tracking",
      description: "Monitor traffic quality and engagement with detailed analytics."
    },
    {
      icon: <FaDesktop className={styles.benefitIcon} />,
      title: "Cross-Platform",
      description: "Drive traffic to your website from desktop and mobile users."
    },
    {
      icon: <FaGlobe className={styles.benefitIcon} />,
      title: "Global Reach",
      description: "Access audiences from around the world in multiple languages."
    }
  ];

  const features = [
    "High-quality web traffic from real users",
    "Advanced fraud prevention technology",
    "Real-time performance analytics",
    "Flexible targeting options",
    "A/B testing capabilities",
    "24/7 customer support"
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Web Traffic</h1>
          <p className={styles.description}>
            Drive high-quality traffic to your website from targeted audiences worldwide
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Quality Web Traffic Solutions</h2>
              <p>
                Our web traffic campaigns connect you with real users who are genuinely interested 
                in your content, products, or services. With precise targeting and advanced fraud 
                prevention, you'll receive high-quality traffic that engages with your website.
              </p>
              <p>
                Whether you're promoting a blog, e-commerce store, or business website, our platform 
                provides the tools and reach you need to attract and convert your target audience.
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
                <circle cx="150" cy="150" r="100" fill="#4285F4" />
                <circle cx="150" cy="100" r="20" fill="#FFFFFF" />
                <circle cx="110" cy="150" r="20" fill="#FFFFFF" />
                <circle cx="190" cy="150" r="20" fill="#FFFFFF" />
                <circle cx="150" cy="200" r="20" fill="#FFFFFF" />
                <path d="M130 130 L170 150 L130 170 Z" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Benefits of Our Web Traffic</h2>
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

        <div className={styles.targetingSection}>
          <h2 className={styles.targetingTitle}>Precise Targeting Options</h2>
          <div className={styles.targetingGrid}>
            <div className={styles.targetingCard}>
              <h3>Geographic Targeting</h3>
              <p>Reach users in specific countries, regions, or cities</p>
            </div>
            <div className={styles.targetingCard}>
              <h3>Demographic Targeting</h3>
              <p>Target by age, gender, income level, and more</p>
            </div>
            <div className={styles.targetingCard}>
              <h3>Interest Targeting</h3>
              <p>Connect with users based on their interests and behaviors</p>
            </div>
            <div className={styles.targetingCard}>
              <h3>Device Targeting</h3>
              <p>Reach users on desktop, mobile, or tablet devices</p>
            </div>
          </div>
        </div>

        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Flexible Pricing Options</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Starter</h3>
              <div className={styles.pricingPrice}>$0.05</div>
              <div className={styles.pricingDescription}>per visit</div>
              <ul className={styles.pricingFeatures}>
                <li>1,000+ daily visits</li>
                <li>Basic targeting</li>
                <li>Email support</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Professional</h3>
              <div className={styles.pricingPrice}>$0.04</div>
              <div className={styles.pricingDescription}>per visit</div>
              <ul className={styles.pricingFeatures}>
                <li>10,000+ daily visits</li>
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
                <li>100,000+ daily visits</li>
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
          <h2 className={styles.ctaTitle}>Ready to Drive More Traffic?</h2>
          <p className={styles.ctaSubtitle}>
            Start attracting high-quality visitors to your website today
          </p>
          <button className={styles.ctaButton}>
            Create Web Traffic Campaign
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WebTraffic;