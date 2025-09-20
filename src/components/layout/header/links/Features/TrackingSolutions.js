import React, { useState } from "react";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";
import styles from "./TrackingSolutions.module.css";
import { FaChartLine, FaEye, FaMapMarkerAlt, FaFingerprint, FaBolt, FaCrosshairs, FaMobileAlt, FaGlobe, FaShieldAlt, FaUsers } from "react-icons/fa";

const TrackingSolutions = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleGetStarted = (optionName) => {
    console.log("Get Started clicked with option:", optionName);
    setSelectedOption(optionName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
    setSelectedOption(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest in the ${selectedOption} tracking solution! Our team will contact you shortly.`);
    handleCloseModal();
  };

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
              
              <div className={styles.featuresList}>
                <h3 className={styles.featuresTitle}>Key Features:</h3>
                <ul className={styles.features}>
                  {trackingFeatures.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <div className={styles.iconWrapper}>
                        {feature.icon}
                      </div>
                      {feature.title}: {feature.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.visualContent}>
            <div className={styles.svgContainer}>
              <div className={styles.decorativeSvg}>
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

        <div className={styles.analyticsSection}>
          <h2 className={styles.analyticsTitle}>Advanced Analytics Capabilities</h2>
          <div className={styles.analyticsGrid}>
            <div className={styles.analyticCard}>
              <div className={styles.analyticIconWrapper}>
                <FaChartLine className={styles.analyticIcon} />
              </div>
              <h3 className={styles.analyticTitle}>Real-Time Dashboard</h3>
              <p className={styles.analyticDescription}>Monitor campaign performance with live data and insights</p>
            </div>
            <div className={styles.analyticCard}>
              <div className={styles.analyticIconWrapper}>
                <FaCrosshairs className={styles.analyticIcon} />
              </div>
              <h3 className={styles.analyticTitle}>Precise Targeting</h3>
              <p className={styles.analyticDescription}>Reach your ideal audience with advanced targeting capabilities</p>
            </div>
            <div className={styles.analyticCard}>
              <div className={styles.analyticIconWrapper}>
                <FaUsers className={styles.analyticIcon} />
              </div>
              <h3 className={styles.analyticTitle}>User Behavior</h3>
              <p className={styles.analyticDescription}>Understand how users interact with your app for better optimization</p>
            </div>
            <div className={styles.analyticCard}>
              <div className={styles.analyticIconWrapper}>
                <FaMobileAlt className={styles.analyticIcon} />
              </div>
              <h3 className={styles.analyticTitle}>Multi-Platform</h3>
              <p className={styles.analyticDescription}>Track performance across all devices and platforms seamlessly</p>
            </div>
            <div className={styles.analyticCard}>
              <div className={styles.analyticIconWrapper}>
                <FaGlobe className={styles.analyticIcon} />
              </div>
              <h3 className={styles.analyticTitle}>Global Reach</h3>
              <p className={styles.analyticDescription}>Expand your app's visibility to users around the world</p>
            </div>
            <div className={styles.analyticCard}>
              <div className={styles.analyticIconWrapper}>
                <FaShieldAlt className={styles.analyticIcon} />
              </div>
              <h3 className={styles.analyticTitle}>Fraud Prevention</h3>
              <p className={styles.analyticDescription}>Protect your campaigns with advanced fraud detection technology</p>
            </div>
          </div>
        </div>

        <div className={styles.visualizationSection}>
          <h2 className={styles.visualizationTitle}>Data Visualization</h2>
          <div className={styles.chartContainer}>
            <div className={styles.chartPlaceholder}>
              <FaChartLine className={styles.chartIcon} />
              <div>Interactive Analytics Dashboard</div>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Why Our Tracking Solutions?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Accurate Data</h3>
              <p className={styles.benefitDescription}>Get precise tracking data with minimal margin of error</p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Easy Integration</h3>
              <p className={styles.benefitDescription}>Seamlessly integrate with your existing systems</p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Custom Reporting</h3>
              <p className={styles.benefitDescription}>Create personalized reports for your specific needs</p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>24/7 Support</h3>
              <p className={styles.benefitDescription}>Our team is always ready to assist you</p>
            </div>
          </div>
        </div>

        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Flexible Pricing Options</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Starter</h3>
                <div className={styles.pricingPrice}>$0.30</div>
                <div className={styles.pricingDescription}>per tracking event</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>10,000+ daily events</li>
                <li>Basic analytics</li>
                <li>Email support</li>
              </ul>
              <button 
                className={styles.pricingButton} 
                onClick={() => handleGetStarted('Starter')}
              >
                Get Started
              </button>
            </div>
            
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Professional</h3>
                <div className={styles.pricingPrice}>$0.25</div>
                <div className={styles.pricingDescription}>per tracking event</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>100,000+ daily events</li>
                <li>Advanced analytics</li>
                <li>Real-time dashboards</li>
                <li>Priority support</li>
              </ul>
              <button 
                className={styles.pricingButton} 
                onClick={() => handleGetStarted('Professional')}
              >
                Get Started
              </button>
            </div>
            
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Enterprise</h3>
                <div className={styles.pricingPrice}>Custom</div>
                <div className={styles.pricingDescription}>volume discounts</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>1,000,000+ daily events</li>
                <li>Premium analytics</li>
                <li>Dedicated account manager</li>
                <li>API access</li>
                <li>24/7 phone support</li>
              </ul>
              <button 
                className={styles.pricingButton} 
                onClick={() => handleGetStarted('Enterprise')}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Enhance Your Tracking?</h2>
          <p className={styles.ctaSubtitle}>
            Join thousands of businesses that trust our tracking solutions
          </p>
          <button 
            className={styles.ctaButton} 
            onClick={() => handleGetStarted('Custom')}
          >
            Get Started Today
          </button>
        </div>
      </div>
      
      {/* Modal for getting started */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Get Started with {selectedOption} Plan</h2>
              <button className={styles.closeButton} onClick={handleCloseModal}>×</button>
            </div>
            <div className={styles.modalBody}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Name:</label>
                  <input type="text" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Email:</label>
                  <input type="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Company:</label>
                  <input type="text" />
                </div>
                <div className={styles.formGroup}>
                  <label>Message:</label>
                  <textarea placeholder={`Interested in ${selectedOption} tracking solution`} />
                </div>
                <button type="submit" className={styles.submitButton}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default TrackingSolutions;