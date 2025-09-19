import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./IOSBooster.module.css";
import { FaApple, FaRocket, FaChartLine, FaUsers, FaBolt, FaTachometerAlt } from "react-icons/fa";

const IOSBooster = () => {
  const benefits = [
    {
      icon: <FaRocket className={styles.benefitIcon} />,
      title: "Rapid Growth",
      description: "Accelerate your app's growth with targeted promotional campaigns."
    },
    {
      icon: <FaChartLine className={styles.benefitIcon} />,
      title: "Performance Tracking",
      description: "Monitor campaign effectiveness with real-time analytics."
    },
    {
      icon: <FaUsers className={styles.benefitIcon} />,
      title: "Quality Users",
      description: "Attract engaged users who are likely to retain and convert."
    },
    {
      icon: <FaTachometerAlt className={styles.benefitIcon} />,
      title: "Optimized Delivery",
      description: "Smart distribution algorithms for maximum campaign efficiency."
    }
  ];

  const features = [
    "Targeted promotional campaigns for iOS apps",
    "Advanced fraud prevention technology",
    "Real-time performance analytics",
    "Flexible budget control",
    "A/B testing capabilities",
    "24/7 customer support"
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>iOS App Booster</h1>
          <p className={styles.description}>
            Supercharge your iOS app's growth with our targeted promotional campaigns
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Boost Your App's Visibility</h2>
              <p>
                Our iOS App Booster campaigns are designed to rapidly increase your app's visibility 
                and downloads in the competitive App Store. With precise targeting and advanced 
                optimization, you'll attract high-quality users who are more likely to engage with your app.
              </p>
              <p>
                Whether you're launching a new app or revitalizing an existing one, our booster campaigns 
                provide the promotional power you need to climb the rankings and reach your target audience.
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
                <path d="M150 100 L180 150 L120 150 Z" fill="#FFFFFF" />
                <circle cx="150" cy="170" r="20" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Benefits of App Booster</h2>
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

        <div className={styles.howItWorksSection}>
          <h2 className={styles.howItWorksTitle}>How App Booster Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Campaign Setup</h3>
              <p>Define your goals and target audience</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Smart Distribution</h3>
              <p>We promote your app to relevant users</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Performance Monitoring</h3>
              <p>Track results with real-time analytics</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Optimization</h3>
              <p>Refine campaigns for better results</p>
            </div>
          </div>
        </div>

        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Flexible Pricing Options</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Starter</h3>
              <div className={styles.pricingPrice}>$199</div>
              <div className={styles.pricingDescription}>per campaign</div>
              <ul className={styles.pricingFeatures}>
                <li>2,500+ impressions</li>
                <li>Basic targeting</li>
                <li>Email support</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Professional</h3>
              <div className={styles.pricingPrice}>$599</div>
              <div className={styles.pricingDescription}>per campaign</div>
              <ul className={styles.pricingFeatures}>
                <li>15,000+ impressions</li>
                <li>Advanced targeting</li>
                <li>Real-time analytics</li>
                <li>Priority support</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Enterprise</h3>
              <div className={styles.pricingPrice}>Custom</div>
              <div className={styles.pricingDescription}>tailored solutions</div>
              <ul className={styles.pricingFeatures}>
                <li>75,000+ impressions</li>
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
          <h2 className={styles.ctaTitle}>Ready to Boost Your App?</h2>
          <p className={styles.ctaSubtitle}>
            Start your iOS App Booster campaign today and accelerate your growth
          </p>
          <button className={styles.ctaButton}>
            Launch App Booster
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IOSBooster;