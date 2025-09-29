import React, { useState } from "react";
import styles from "./AndroidAPKInstalls.module.css";
import { FaAndroid, FaDownload, FaFileAlt, FaChartLine, FaBolt } from "react-icons/fa";

const AndroidAPKInstalls = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      icon: <FaDownload className={styles.benefitIcon} />,
      title: "Direct Distribution",
      description: "Deliver your APK files directly to users without app store restrictions."
    },
    {
      icon: <FaFileAlt className={styles.benefitIcon} />,
      title: "Flexible Deployment",
      description: "Install apps directly from APK files for beta testing or enterprise use."
    },
    {
      icon: <FaChartLine className={styles.benefitIcon} />,
      title: "Performance Tracking",
      description: "Monitor installation rates and user engagement with detailed analytics."
    },
    {
      icon: <FaAndroid className={styles.benefitIcon} />,
      title: "Wide Compatibility",
      description: "Reach users across all Android versions and device types."
    }
  ];

  const features = [
    "Direct APK file distribution",
    "Advanced fraud prevention technology",
    "Real-time performance analytics",
    "Flexible targeting options",
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
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Android APK Installs</h1>
          <p className={styles.description}>
            Distribute your Android apps directly through APK files without app store limitations
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Direct APK Distribution</h2>
              <p>
                Our Android APK install campaigns allow you to distribute your apps directly to users 
                through APK files. This approach bypasses app store restrictions and enables you to 
                reach users who prefer direct installation methods.
              </p>
              <p>
                Whether you're conducting beta tests, distributing enterprise apps, or reaching 
                users in regions with limited app store access, APK installs provide the flexibility 
                you need to grow your user base.
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
                {/* SVG content would go here */}
                <div style={{width: '100%', height: '100%', backgroundColor: '#e9f7fe', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <FaAndroid style={{fontSize: '4rem', color: '#007bff'}} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Benefits of APK Installs</h2>
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
          <h2 className={styles.howItWorksTitle}>How It Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Upload APK</h3>
              <p>Upload your APK file to our secure platform</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Set Campaign</h3>
              <p>Define your targeting and budget parameters</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Distribute</h3>
              <p>Users download and install your APK directly</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Track</h3>
              <p>Monitor performance with real-time analytics</p>
            </div>
          </div>
        </div>

        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Flexible Pricing Options</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Starter</h3>
                <div className={styles.pricingPrice}>$0.40</div>
                <div className={styles.pricingDescription}>per install</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>100MB max APK size</li>
                <li>1,000+ daily installs</li>
                <li>Basic analytics</li>
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
                <div className={styles.pricingPrice}>$0.35</div>
                <div className={styles.pricingDescription}>per install</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>500MB max APK size</li>
                <li>10,000+ daily installs</li>
                <li>Advanced analytics</li>
                <li>A/B testing</li>
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
                <li>Unlimited APK size</li>
                <li>100,000+ daily installs</li>
                <li>Premium analytics</li>
                <li>Dedicated manager</li>
                <li>API access</li>
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
          <h2 className={styles.ctaTitle}>Ready to Distribute Your APK?</h2>
          <p className={styles.ctaSubtitle}>
            Start driving direct APK installs for your Android app today
          </p>
          <button 
            className={styles.ctaButton} 
            onClick={() => handleGetStarted('Custom')}
          >
            Create APK Campaign
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
                  <textarea placeholder={`Interested in ${selectedPlan} plan for APK installs`} />
                </div>
                <button type="submit" className={styles.submitButton}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default AndroidAPKInstalls;