import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./TrackingSolutions.module.css";
import { FaChartLine, FaCrosshairs, FaUsers, FaMobileAlt, FaGlobe, FaShieldAlt } from "react-icons/fa";

const TrackingSolutions = () => {
  const trackingFeatures = [
    {
      icon: <FaChartLine className={styles.featureIcon} />,
      title: "Real-Time Analytics",
      description: "Monitor your campaign performance with live data and insights."
    },
    {
      icon: <FaCrosshairs className={styles.featureIcon} />,
      title: "Precise Targeting",
      description: "Reach your ideal audience with advanced targeting capabilities."
    },
    {
      icon: <FaUsers className={styles.featureIcon} />,
      title: "User Behavior Analysis",
      description: "Understand how users interact with your app for better optimization."
    },
    {
      icon: <FaMobileAlt className={styles.featureIcon} />,
      title: "Multi-Platform Tracking",
      description: "Track performance across all devices and platforms seamlessly."
    },
    {
      icon: <FaGlobe className={styles.featureIcon} />,
      title: "Global Reach",
      description: "Expand your app's visibility to users around the world."
    },
    {
      icon: <FaShieldAlt className={styles.featureIcon} />,
      title: "Fraud Prevention",
      description: "Protect your campaigns with advanced fraud detection technology."
    }
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Advanced Tracking Solutions</h1>
          <p className={styles.description}>
            Gain complete visibility into your campaign performance with our comprehensive tracking technology
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Comprehensive Tracking for Maximum ROI</h2>
              <p>
                Our advanced tracking solutions provide detailed insights into every aspect of your campaigns, 
                allowing you to make data-driven decisions that maximize your return on investment.
              </p>
              <p>
                With real-time analytics, precise targeting, and user behavior analysis, you'll have all the 
                tools needed to optimize your campaigns for success.
              </p>
            </div>
          </div>
          <div className={styles.visualContent}>
            <div className={styles.svgContainer}>
              <svg viewBox="0 0 400 300" className={styles.decorativeSvg}>
                <path 
                  fill="rgb(100, 149, 237)" 
                  fillOpacity="0.8" 
                  d="M50,150 Q100,50 150,150 T250,150 T350,150 L350,200 L50,200 Z"
                />
                <circle cx="100" cy="100" r="5" fill="#007bff" />
                <circle cx="150" cy="150" r="5" fill="#007bff" />
                <circle cx="200" cy="100" r="5" fill="#007bff" />
                <circle cx="250" cy="150" r="5" fill="#007bff" />
                <circle cx="300" cy="100" r="5" fill="#007bff" />
                <line x1="100" y1="100" x2="150" y2="150" stroke="#007bff" strokeWidth="2" />
                <line x1="150" y1="150" x2="200" y2="100" stroke="#007bff" strokeWidth="2" />
                <line x1="200" y1="100" x2="250" y2="150" stroke="#007bff" strokeWidth="2" />
                <line x1="250" y1="150" x2="300" y2="100" stroke="#007bff" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.featuresSection}>
          <h2 className={styles.featuresTitle}>Key Tracking Features</h2>
          <div className={styles.featuresGrid}>
            {trackingFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIconWrapper}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Why Our Tracking Solutions?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3>Accurate Data</h3>
              <p>Get precise tracking data with minimal margin of error</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Easy Integration</h3>
              <p>Seamlessly integrate with your existing systems</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Custom Reporting</h3>
              <p>Create personalized reports for your specific needs</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>24/7 Support</h3>
              <p>Our team is always ready to assist you</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Enhance Your Tracking?</h2>
          <p className={styles.ctaSubtitle}>
            Join thousands of businesses that trust our tracking solutions
          </p>
          <button className={styles.ctaButton}>
            Get Started Today
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrackingSolutions;