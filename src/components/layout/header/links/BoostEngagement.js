import React from "react";
import Header from "../Header";
import Footer from "../../footer/Footer";
import styles from "./BoostEngagement.module.css";
import { FaBolt, FaChartLine, FaUsers, FaMobileAlt, FaTrophy, FaFire } from "react-icons/fa";

const BoostEngagement = () => {
  const features = [
    {
      icon: <FaBolt className={styles.featureIcon} />,
      title: "Instant Activation",
      description: "Activate engagement campaigns within minutes, not days"
    },
    {
      icon: <FaChartLine className={styles.featureIcon} />,
      title: "Real-Time Analytics",
      description: "Monitor engagement metrics with our comprehensive dashboard"
    },
    {
      icon: <FaUsers className={styles.featureIcon} />,
      title: "Targeted Audience",
      description: "Reach specific user segments for maximum engagement"
    },
    {
      icon: <FaMobileAlt className={styles.featureIcon} />,
      title: "Cross-Platform Support",
      description: "Engage users across Android, iOS, and web platforms"
    }
  ];

  const benefits = [
    "Increased user retention rates",
    "Higher lifetime value per user",
    "Improved app store rankings",
    "Enhanced brand loyalty",
    "Reduced churn rates"
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Boost User Engagement</h1>
            <p className={styles.heroSubtitle}>
              Drive meaningful interactions with your app users through our advanced engagement platform
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>Start Free Trial</button>
              <button className={styles.secondaryButton}>Schedule Demo</button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.visualPlaceholder}></div>
          </div>
        </div>

        <div className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Powerful Engagement Features</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIconWrapper}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h2 className={styles.contentTitle}>Maximize User Engagement</h2>
            <p className={styles.contentText}>
              Our engagement platform is designed to help you create meaningful connections with your users, 
              driving long-term retention and increasing lifetime value. With advanced targeting capabilities 
              and real-time analytics, you can optimize your engagement strategies for maximum impact.
            </p>
            <div className={styles.benefitsList}>
              <h3 className={styles.benefitsTitle}>Key Benefits:</h3>
              <ul className={styles.benefits}>
                {benefits.map((benefit, index) => (
                  <li key={index} className={styles.benefitItem}>
                    <FaTrophy className={styles.benefitIcon} /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.visualContent}>
            <div className={styles.chartPlaceholder}></div>
          </div>
        </div>

        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Engagement Pricing Models</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Starter</h3>
                <div className={styles.pricingPrice}>$299<span className={styles.pricingPeriod}>/month</span></div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>Up to 10,000 engaged users</li>
                <li>Basic analytics dashboard</li>
                <li>Email support</li>
                <li>3 engagement campaigns</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Professional</h3>
                <div className={styles.pricingPrice}>$799<span className={styles.pricingPeriod}>/month</span></div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>Up to 50,000 engaged users</li>
                <li>Advanced analytics dashboard</li>
                <li>Priority support</li>
                <li>10 engagement campaigns</li>
                <li>A/B testing capabilities</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Enterprise</h3>
                <div className={styles.pricingPrice}>Custom</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>Unlimited engaged users</li>
                <li>Premium analytics dashboard</li>
                <li>24/7 dedicated support</li>
                <li>Unlimited engagement campaigns</li>
                <li>Custom integrations</li>
                <li>Dedicated account manager</li>
              </ul>
              <button className={styles.pricingButton}>Contact Sales</button>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Boost Engagement?</h2>
          <p className={styles.ctaSubtitle}>
            Join thousands of apps using our platform to drive meaningful user interactions
          </p>
          <button className={styles.ctaButton}>
            <FaFire className={styles.ctaIcon} /> Start Engaging Users Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BoostEngagement;
