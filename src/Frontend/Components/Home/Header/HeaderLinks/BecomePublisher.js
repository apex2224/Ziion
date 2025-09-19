import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./BecomePublisher.module.css";
import { FaUserPlus, FaChartLine, FaUsers, FaBolt, FaHandshake, FaGlobe } from "react-icons/fa";

const BecomePublisher = () => {
  const benefits = [
    {
      icon: <FaChartLine className={styles.benefitIcon} />,
      title: "Revenue Growth",
      description: "Unlock new income streams through our comprehensive monetization solutions."
    },
    {
      icon: <FaUsers className={styles.benefitIcon} />,
      title: "Publisher Network",
      description: "Join a thriving community of publishers and advertisers."
    },
    {
      icon: <FaHandshake className={styles.benefitIcon} />,
      title: "Partnership Support",
      description: "Dedicated account managers to help you succeed."
    },
    {
      icon: <FaGlobe className={styles.benefitIcon} />,
      title: "Global Reach",
      description: "Access audiences and advertisers from around the world."
    }
  ];

  const features = [
    "Multiple monetization options including offerwalls and ads",
    "Advanced fraud prevention technology",
    "Real-time performance analytics",
    "Flexible payment schedules",
    "A/B testing capabilities",
    "24/7 customer support"
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Become a Publisher</h1>
          <p className={styles.description}>
            Join our network of successful publishers and start monetizing your audience today
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Partner With Us</h2>
              <p>
                Becoming a publisher with CPIDroid opens up a world of opportunities to monetize your 
                audience through our diverse range of advertising solutions. Whether you have a mobile app, 
                website, or social media following, we have the tools and support to help you maximize your revenue.
              </p>
              <p>
                Our platform is designed to be publisher-friendly with competitive revenue shares, 
                timely payments, and dedicated support to ensure your success.
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
                <circle cx="150" cy="120" r="50" fill="#007bff" />
                <path d="M100 200 Q150 250 200 200" stroke="#007bff" strokeWidth="10" fill="none" />
                <circle cx="120" cy="100" r="10" fill="#FFFFFF" />
                <circle cx="180" cy="100" r="10" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Benefits of Becoming a Publisher</h2>
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

        <div className={styles.requirementsSection}>
          <h2 className={styles.requirementsTitle}>Publisher Requirements</h2>
          <div className={styles.requirementsGrid}>
            <div className={styles.requirementCard}>
              <h3>Minimum Traffic</h3>
              <p>1,000+ daily active users or visitors</p>
            </div>
            <div className={styles.requirementCard}>
              <h3>Quality Content</h3>
              <p>Original, engaging content that provides user value</p>
            </div>
            <div className={styles.requirementCard}>
              <h3>Compliance</h3>
              <p>Adherence to our publisher policies and guidelines</p>
            </div>
            <div className={styles.requirementCard}>
              <h3>Technical Setup</h3>
              <p>Ability to integrate our SDK or ad tags</p>
            </div>
          </div>
        </div>

        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Revenue Models</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>CPM</h3>
              <div className={styles.pricingPrice}>$5-20</div>
              <div className={styles.pricingDescription}>per 1,000 impressions</div>
              <ul className={styles.pricingFeatures}>
                <li>Banner and interstitial ads</li>
                <li>Real-time bidding</li>
                <li>Basic analytics</li>
              </ul>
              <button className={styles.pricingButton}>Learn More</button>
            </div>
            
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>CPC</h3>
              <div className={styles.pricingPrice}>$0.10-1.00</div>
              <div className={styles.pricingDescription}>per click</div>
              <ul className={styles.pricingFeatures}>
                <li>Text and rich media ads</li>
                <li>Advanced targeting</li>
                <li>Detailed analytics</li>
                <li>A/B testing</li>
              </ul>
              <button className={styles.pricingButton}>Learn More</button>
            </div>
            
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Revenue Share</h3>
              <div className={styles.pricingPrice}>60-85%</div>
              <div className={styles.pricingDescription}>of earnings</div>
              <ul className={styles.pricingFeatures}>
                <li>Offerwalls and incentivized offers</li>
                <li>Premium analytics</li>
                <li>Dedicated support</li>
                <li>Custom integrations</li>
              </ul>
              <button className={styles.pricingButton}>Learn More</button>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Become a Publisher?</h2>
          <p className={styles.ctaSubtitle}>
            Join our network of successful publishers and start earning today
          </p>
          <button className={styles.ctaButton}>
            Apply Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BecomePublisher;