import React, { useState } from "react";
import styles from "./AndroidIOSWeb.module.css";
import { FaAndroid, FaApple, FaDesktop, FaMobileAlt, FaGlobe, FaTabletAlt } from "react-icons/fa";

const AndroidIOSWeb = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const platforms = [
    {
      icon: <FaAndroid className={styles.platformIcon} />,
      title: "Android",
      description: "Reach millions of Android users through our extensive network of publishers and traffic sources."
    },
    {
      icon: <FaApple className={styles.platformIcon} />,
      title: "iOS",
      description: "Target iOS users with precision campaigns designed for Apple's ecosystem."
    },
    {
      icon: <FaGlobe className={styles.platformIcon} />,
      title: "Web",
      description: "Drive traffic to your web applications and services with our global reach."
    }
  ];

  const devices = [
    {
      icon: <FaMobileAlt className={styles.deviceIcon} />,
      title: "Smartphones",
      description: "Target users on mobile devices for maximum engagement and conversions."
    },
    {
      icon: <FaTabletAlt className={styles.deviceIcon} />,
      title: "Tablets",
      description: "Reach tablet users for a premium advertising experience."
    },
    {
      icon: <FaDesktop className={styles.deviceIcon} />,
      title: "Desktop",
      description: "Don't forget desktop users with our cross-platform campaign solutions."
    }
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
          <h1 className={styles.title}>Android, iOS & Web Solutions</h1>
          <p className={styles.description}>
            Reach users across all platforms and devices with our comprehensive multi-platform campaign solutions
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Universal Platform Coverage</h2>
              <p>
                Our advanced platform targeting ensures your app reaches the right users, 
                regardless of their device or operating system. With support for Android, 
                iOS, and web platforms, you can maximize your campaign reach.
              </p>
              <p>
                We provide specialized optimization for each platform to ensure the best 
                possible performance and user experience.
              </p>
              
              <div className={styles.featuresList}>
                <h3 className={styles.featuresTitle}>Key Features:</h3>
                <ul className={styles.features}>
                  <li className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <FaGlobe className={styles.featureIcon} />
                    </div>
                    Global platform coverage
                  </li>
                  <li className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <FaMobileAlt className={styles.featureIcon} />
                    </div>
                    Device-specific optimization
                  </li>
                  <li className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <FaDesktop className={styles.featureIcon} />
                    </div>
                    Cross-platform campaign management
                  </li>
                  <li className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <FaAndroid className={styles.featureIcon} />
                    </div>
                    Android-specific targeting
                  </li>
                  <li className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <FaApple className={styles.featureIcon} />
                    </div>
                    iOS-specific optimization
                  </li>
                  <li className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <FaTabletAlt className={styles.featureIcon} />
                    </div>
                    Tablet and smartphone targeting
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.visualContent}>
            <div className={styles.svgContainer}>
              <svg viewBox="0 0 400 300" className={styles.decorativeSvg}>
                <rect x="50" y="50" width="100" height="200" rx="10" fill="#3DDC84" />
                <rect x="170" y="70" width="70" height="160" rx="35" fill="#000000" />
                <rect x="260" y="90" width="90" height="120" rx="5" fill="#4285F4" />
                <circle cx="100" cy="220" r="5" fill="#FFFFFF" />
                <circle cx="205" cy="200" r="3" fill="#FFFFFF" />
                <rect x="300" y="130" width="20" height="20" rx="2" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.platformsSection}>
          <h2 className={styles.platformsTitle}>Platform-Specific Solutions</h2>
          <div className={styles.platformsGrid}>
            {platforms.map((platform, index) => (
              <div key={index} className={styles.platformCard}>
                <div className={styles.platformIconWrapper}>{platform.icon}</div>
                <h3 className={styles.platformTitle}>{platform.title}</h3>
                <p className={styles.platformDescription}>{platform.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.devicesSection}>
          <h2 className={styles.devicesTitle}>Device Targeting Options</h2>
          <div className={styles.devicesGrid}>
            {devices.map((device, index) => (
              <div key={index} className={styles.deviceCard}>
                <div className={styles.deviceIconWrapper}>{device.icon}</div>
                <h3 className={styles.deviceTitle}>{device.title}</h3>
                <p className={styles.deviceDescription}>{device.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Cross-Platform Advantages</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Unified Dashboard</h3>
              <p className={styles.benefitDescription}>Manage all your campaigns from a single interface</p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Consistent Branding</h3>
              <p className={styles.benefitDescription}>Maintain your brand identity across all platforms</p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Optimized Performance</h3>
              <p className={styles.benefitDescription}>Platform-specific optimization for better results</p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Global Reach</h3>
              <p className={styles.benefitDescription}>Access users worldwide on any device</p>
            </div>
          </div>
        </div>

        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Flexible Pricing Options</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Starter</h3>
                <div className={styles.pricingPrice}>$0.50</div>
                <div className={styles.pricingDescription}>per install</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>1 platform</li>
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
                <div className={styles.pricingPrice}>$0.40</div>
                <div className={styles.pricingDescription}>per install</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>2 platforms</li>
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
                <li>All platforms</li>
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
          <h2 className={styles.ctaTitle}>Ready to Go Cross-Platform?</h2>
          <p className={styles.ctaSubtitle}>
            Launch campaigns across Android, iOS, and Web with a single setup
          </p>
          <button 
            className={styles.ctaButton} 
            onClick={() => handleGetStarted('Custom')}
          >
            Start Campaign Now
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
                  <textarea placeholder={`Interested in ${selectedPlan} plan for Android, iOS & Web`} />
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

export default AndroidIOSWeb;