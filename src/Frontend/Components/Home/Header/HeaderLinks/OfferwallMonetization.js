import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./OfferwallMonetization.module.css";
import { FaCoins, FaChartLine, FaUsers, FaBolt, FaGift, FaTrophy } from "react-icons/fa";

const OfferwallMonetization = () => {
  const benefits = [
    {
      icon: <FaCoins className={styles.benefitIcon} />,
      title: "Multiple Revenue Streams",
      description: "Generate income through various offer types and reward systems."
    },
    {
      icon: <FaChartLine className={styles.benefitIcon} />,
      title: "Performance Tracking",
      description: "Monitor earnings and engagement with detailed analytics."
    },
    {
      icon: <FaUsers className={styles.benefitIcon} />,
      title: "Engaged Audience",
      description: "Reach users who are motivated by rewards and incentives."
    },
    {
      icon: <FaTrophy className={styles.benefitIcon} />,
      title: "High Conversion",
      description: "Offers typically see higher completion rates than traditional ads."
    }
  ];

  const features = [
    "Diverse offerwall with hundreds of offers",
    "Advanced fraud prevention technology",
    "Real-time performance analytics",
    "Flexible reward systems",
    "A/B testing capabilities",
    "24/7 customer support"
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Offerwall Monetization</h1>
          <p className={styles.description}>
            Maximize your revenue with our comprehensive offerwall monetization solution
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Unlock Revenue Potential</h2>
              <p>
                Our offerwall monetization platform connects you with hundreds of high-quality offers 
                from top advertisers. Users can complete various actions like app installs, surveys, 
                and subscriptions in exchange for rewards, generating revenue for you with every completion.
              </p>
              <p>
                With flexible reward systems and advanced targeting, you can maximize engagement while 
                providing value to your users through meaningful rewards.
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
                <rect x="50" y="50" width="200" height="200" rx="20" fill="#FFD700" />
                <circle cx="120" cy="120" r="20" fill="#FFFFFF" />
                <circle cx="180" cy="120" r="20" fill="#FFFFFF" />
                <circle cx="150" cy="180" r="20" fill="#FFFFFF" />
                <text x="150" y="160" textAnchor="middle" fill="#FFD700" fontSize="40" fontWeight="bold">$</text>
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Benefits of Offerwall Monetization</h2>
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

        <div className={styles.offerTypesSection}>
          <h2 className={styles.offerTypesTitle}>Popular Offer Types</h2>
          <div className={styles.offerTypesGrid}>
            <div className={styles.offerTypeCard}>
              <h3>App Installs</h3>
              <p>Users download and install apps for rewards</p>
            </div>
            <div className={styles.offerTypeCard}>
              <h3>Surveys</h3>
              <p>Complete market research surveys for compensation</p>
            </div>
            <div className={styles.offerTypeCard}>
              <h3>Subscriptions</h3>
              <p>Sign up for services with free trial periods</p>
            </div>
            <div className={styles.offerTypeCard}>
              <h3>Registrations</h3>
              <p>Create accounts on various platforms</p>
            </div>
          </div>
        </div>

        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Revenue Sharing Model</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Standard</h3>
              <div className={styles.pricingPrice}>70%</div>
              <div className={styles.pricingDescription}>revenue share</div>
              <ul className={styles.pricingFeatures}>
                <li>Standard offer selection</li>
                <li>Basic analytics</li>
                <li>Email support</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Premium</h3>
              <div className={styles.pricingPrice}>80%</div>
              <div className={styles.pricingDescription}>revenue share</div>
              <ul className={styles.pricingFeatures}>
                <li>Premium offer selection</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
                <li>A/B testing</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Enterprise</h3>
              <div className={styles.pricingPrice}>85%+</div>
              <div className={styles.pricingDescription}>custom rates</div>
              <ul className={styles.pricingFeatures}>
                <li>Exclusive offers</li>
                <li>Premium analytics</li>
                <li>Dedicated account manager</li>
                <li>API access</li>
                <li>24/7 phone support</li>
              </ul>
              <button className={styles.pricingButton}>Contact Sales</button>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Monetize Your Audience?</h2>
          <p className={styles.ctaSubtitle}>
            Start earning revenue with our offerwall monetization platform today
          </p>
          <button className={styles.ctaButton}>
            Start Monetizing
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfferwallMonetization;