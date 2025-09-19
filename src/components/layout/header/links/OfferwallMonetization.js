import React from "react";
import Header from "../Header";
import Footer from "../../footer/Footer";
import styles from "./OfferwallMonetization.module.css";
import { FaGift, FaCoins, FaChartLine, FaMobileAlt, FaUsers, FaTrophy, FaBolt } from "react-icons/fa";

const OfferwallMonetization = () => {
  const features = [
    {
      icon: <FaGift className={styles.featureIcon} />,
      title: "Diverse Offer Types",
      description: "Access to hundreds of high-quality offers including surveys, downloads, and subscriptions"
    },
    {
      icon: <FaCoins className={styles.featureIcon} />,
      title: "Competitive Payouts",
      description: "Industry-leading revenue shares with payouts up to 85% for premium publishers"
    },
    {
      icon: <FaChartLine className={styles.featureIcon} />,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboard with real-time performance tracking and insights"
    },
    {
      icon: <FaMobileAlt className={styles.featureIcon} />,
      title: "Cross-Platform Support",
      description: "Seamless integration across iOS, Android, and web applications"
    }
  ];

  const benefits = [
    "Increased user engagement and retention",
    "Multiple monetization opportunities per user",
    "Flexible integration with minimal development effort",
    "Advanced fraud protection to ensure quality traffic",
    "Dedicated account management and 24/7 support"
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Offerwall Monetization</h1>
            <p className={styles.heroSubtitle}>
              Maximize your revenue with our comprehensive offerwall solution that connects your users with relevant offers
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>Get Started</button>
              <button className={styles.secondaryButton}>View Documentation</button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.visualPlaceholder}></div>
          </div>
        </div>

        <div className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Powerful Offerwall Features</h2>
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
            <h2 className={styles.contentTitle}>Maximize Revenue with Offerwalls</h2>
            <p className={styles.contentText}>
              Our offerwall solution provides a seamless way to monetize your user base by presenting them with relevant 
              offers and rewards. With advanced targeting and optimization algorithms, we ensure maximum engagement 
              and revenue generation for your app.
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

        <div className={styles.integrationSection}>
          <h2 className={styles.integrationTitle}>Simple Integration Process</h2>
          <div className={styles.integrationSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Sign Up</h3>
              <p className={styles.stepDescription}>Create your publisher account and get approved</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Integrate SDK</h3>
              <p className={styles.stepDescription}>Add our lightweight SDK to your app in minutes</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Configure Offerwall</h3>
              <p className={styles.stepDescription}>Customize the offerwall to match your app's design</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Start Earning</h3>
              <p className={styles.stepDescription}>Go live and start generating revenue</p>
            </div>
          </div>
        </div>

        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Competitive Revenue Shares</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Starter</h3>
                <div className={styles.pricingRate}>60%</div>
                <div className={styles.pricingDescription}>Revenue Share</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>Standard offer selection</li>
                <li>Basic analytics</li>
                <li>Email support</li>
                <li>Monthly payments</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Professional</h3>
                <div className={styles.pricingRate}>70%</div>
                <div className={styles.pricingDescription}>Revenue Share</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>Premium offer selection</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
                <li>Bi-weekly payments</li>
                <li>A/B testing tools</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Enterprise</h3>
                <div className={styles.pricingRate}>Up to 85%</div>
                <div className={styles.pricingDescription}>Revenue Share</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>Exclusive offer selection</li>
                <li>Premium analytics dashboard</li>
                <li>24/7 dedicated support</li>
                <li>Weekly payments</li>
                <li>Custom integrations</li>
                <li>Dedicated account manager</li>
              </ul>
              <button className={styles.pricingButton}>Contact Sales</button>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Monetize with Offerwalls?</h2>
          <p className={styles.ctaSubtitle}>
            Join thousands of publishers earning revenue through our offerwall platform
          </p>
          <button className={styles.ctaButton}>
            <FaBolt className={styles.ctaIcon} /> Start Earning Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfferwallMonetization;