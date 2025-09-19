import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./AndroidInstalls.module.css";
import { FaAndroid, FaDownload, FaChartLine, FaUsers, FaMobileAlt, FaBolt } from "react-icons/fa";

const AndroidInstalls = () => {
  const benefits = [
    {
      icon: <FaDownload className={styles.benefitIcon} />,
      title: "High Volume",
      description: "Access millions of Android users across diverse demographics and regions."
    },
    {
      icon: <FaChartLine className={styles.benefitIcon} />,
      title: "Performance Tracking",
      description: "Real-time analytics and detailed reporting on all your campaign metrics."
    },
    {
      icon: <FaUsers className={styles.benefitIcon} />,
      title: "Targeted Audience",
      description: "Precise targeting options to reach your ideal Android user base."
    },
    {
      icon: <FaMobileAlt className={styles.benefitIcon} />,
      title: "Device Optimization",
      description: "Campaigns optimized for all Android devices and screen sizes."
    }
  ];

  const features = [
    "Real user installs from genuine Android devices",
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
          <h1 className={styles.title}>Android App Installs</h1>
          <p className={styles.description}>
            Drive high-quality installs for your Android app with our targeted campaign solutions
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Reach Android Users Worldwide</h2>
              <p>
                Our Android install campaigns connect you with real users on genuine Android devices. 
                With precise targeting and advanced fraud prevention, you'll get high-quality installs 
                that drive real value for your app.
              </p>
              <p>
                Whether you're launching a new app or growing an existing one, our platform provides 
                the tools and reach you need to succeed in the competitive Android marketplace.
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
                <rect x="50" y="50" width="200" height="200" rx="20" fill="#3DDC84" />
                <circle cx="150" cy="150" r="50" fill="#FFFFFF" />
                <path d="M130 130 L170 150 L130 170 Z" fill="#3DDC84" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Why Choose Our Android Installs</h2>
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
              <div className={styles.pricingPrice}>$0.50</div>
              <div className={styles.pricingDescription}>per install</div>
              <ul className={styles.pricingFeatures}>
                <li>1,000+ daily installs</li>
                <li>Basic targeting</li>
                <li>Email support</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Professional</h3>
              <div className={styles.pricingPrice}>$0.40</div>
              <div className={styles.pricingDescription}>per install</div>
              <ul className={styles.pricingFeatures}>
                <li>10,000+ daily installs</li>
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
          <h2 className={styles.ctaTitle}>Ready to Grow Your Android App?</h2>
          <p className={styles.ctaSubtitle}>
            Start driving high-quality installs today with our proven Android campaign solutions
          </p>
          <button className={styles.ctaButton}>
            Create Android Campaign
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AndroidInstalls;