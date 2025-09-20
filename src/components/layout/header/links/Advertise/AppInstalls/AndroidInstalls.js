import React, { useState } from "react";
import Header from "../../../../header/Header";
import Footer from "../../../../footer/Footer";
import styles from "./AndroidInstalls.module.css";
import { FaAndroid, FaDownload, FaMobileAlt, FaChartLine, FaBolt, FaUsers, FaGlobe } from "react-icons/fa";

const AndroidInstalls = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleGetStarted = (planName) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest in the ${selectedPlan} plan! Our team will contact you shortly.`);
    handleCloseModal();
  };

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
              <h2 className={styles.sectionTitle}>Targeted Android Campaigns</h2>
              <p>
                Our Android app install campaigns connect you with millions of genuine users across 
                diverse Android devices and demographics. With advanced targeting capabilities, 
                you can reach your ideal audience and drive meaningful engagement with your app.
              </p>
              <p>
                Whether you're launching a new app or growing an existing user base, our platform 
                provides the tools and reach you need to succeed in the competitive Android marketplace.
              </p>
              
              <div className={styles.featuresList}>
                <h3 className={styles.featuresTitle}>Key Features:</h3>
                <ul className={styles.features}>
                  {features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <div className={styles.iconWrapper}>
                        <FaBolt className={styles.icon} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.visualContent}>
            <div className={styles.svgContainer}>
              <div className={styles.decorativeSvg}>
                <div style={{width: '100%', height: '100%', backgroundColor: '#e9f7fe', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <FaAndroid style={{fontSize: '4rem', color: '#007bff'}} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Why Choose Android Installs</h2>
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
          <h2 className={styles.howItWorksTitle}>Campaign Process</h2>
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
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Starter</h3>
                <div className={styles.pricingRate}>$0.80</div>
                <div className={styles.pricingDescription}>per install</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>1,000+ daily installs</li>
                <li>Basic targeting</li>
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
                <div className={styles.pricingRate}>$0.70</div>
                <div className={styles.pricingDescription}>per install</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>10,000+ daily installs</li>
                <li>Advanced targeting</li>
                <li>Real-time analytics</li>
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
                <div className={styles.pricingRate}>Custom</div>
                <div className={styles.pricingDescription}>volume discounts</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>100,000+ daily installs</li>
                <li>Premium targeting</li>
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
          <h2 className={styles.ctaTitle}>Ready to Drive Android Installs?</h2>
          <p className={styles.ctaSubtitle}>
            Start your Android App Install campaign today and accelerate your growth
          </p>
          <button 
            className={styles.ctaButton} 
            onClick={() => handleGetStarted('Custom')}
          >
            Launch App Install Campaign
          </button>
        </div>
      </div>
      
      {/* Modal for getting started */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Get Started with {selectedPlan} Plan</h2>
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
                  <textarea placeholder={`Interested in ${selectedPlan} plan for Android installs`} />
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

export default AndroidInstalls;