import React, { useState } from "react";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";
import styles from "./IncentNonIncent.module.css";
import { FaGift, FaStar, FaChartLine, FaUsers, FaBolt, FaDollarSign, FaMedal, FaUserCheck } from "react-icons/fa";

const IncentNonIncent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const incentOptions = [
    {
      icon: <FaGift className={styles.optionIcon} />,
      title: "Rewarded Campaigns",
      description: "Offer rewards to users for completing specific actions within your app."
    },
    {
      icon: <FaDollarSign className={styles.optionIcon} />,
      title: "Monetary Incentives",
      description: "Provide direct financial rewards for user engagement and conversions."
    },
    {
      icon: <FaMedal className={styles.optionIcon} />,
      title: "Achievement-Based",
      description: "Reward users with badges, points, or other recognition for app engagement."
    }
  ];

  const nonIncentOptions = [
    {
      icon: <FaUserCheck className={styles.optionIcon} />,
      title: "Organic Engagement",
      description: "Attract users who are genuinely interested in your app content."
    },
    {
      icon: <FaChartLine className={styles.optionIcon} />,
      title: "Higher Quality",
      description: "Typically see better retention and lifetime value from users."
    },
    {
      icon: <FaUsers className={styles.optionIcon} />,
      title: "Natural Behavior",
      description: "Users engage with your app without external motivators."
    }
  ];

  const handleConsult = (optionName) => {
    setSelectedOption(optionName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOption(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest in the ${selectedOption} option! Our team will contact you shortly.`);
    handleCloseModal();
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Incent vs Non-Incent Campaigns</h1>
          <p className={styles.description}>
            Choose the right campaign type for your goals with our flexible incentivization options
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Understanding Incentivization</h2>
              <p>
                The choice between incent and non-incent campaigns depends on your specific goals and target audience. 
                Both approaches have distinct advantages for different scenarios.
              </p>
              <p>
                Incent campaigns can drive rapid user acquisition and engagement, while non-incent campaigns 
                typically deliver higher quality users with better long-term retention.
              </p>
              
              <div className={styles.featuresList}>
                <h3 className={styles.featuresTitle}>Key Considerations:</h3>
                <ul className={styles.features}>
                  <li className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <FaBolt className={styles.featureIcon} />
                    </div>
                    Incent campaigns for rapid user acquisition
                  </li>
                  <li className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <FaChartLine className={styles.featureIcon} />
                    </div>
                    Non-incent campaigns for higher quality users
                  </li>
                  <li className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <FaUsers className={styles.featureIcon} />
                    </div>
                    Hybrid approaches for balanced results
                  </li>
                  <li className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <FaStar className={styles.featureIcon} />
                    </div>
                    Custom solutions based on your specific goals
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.visualContent}>
            <div className={styles.svgContainer}>
              <svg viewBox="0 0 400 300" className={styles.decorativeSvg}>
                <circle cx="120" cy="150" r="80" fill="rgba(100, 149, 237, 0.2)" stroke="#007bff" strokeWidth="2" />
                <circle cx="280" cy="150" r="80" fill="rgba(40, 167, 69, 0.2)" stroke="#28a745" strokeWidth="2" />
                <text x="120" y="140" textAnchor="middle" fill="#007bff" fontSize="16" fontWeight="bold">INCENT</text>
                <text x="280" y="140" textAnchor="middle" fill="#28a745" fontSize="16" fontWeight="bold">NON-INCENT</text>
                <text x="120" y="170" textAnchor="middle" fill="#007bff" fontSize="12">Rewards</text>
                <text x="280" y="170" textAnchor="middle" fill="#28a745" fontSize="12">Organic</text>
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.optionsSection}>
          <div className={styles.incentSection}>
            <h2 className={styles.optionsTitle}>Incent Campaigns</h2>
            <p className={styles.optionsSubtitle}>
              Drive immediate engagement with reward-based campaigns
            </p>
            <div className={styles.optionsGrid}>
              {incentOptions.map((option, index) => (
                <div key={index} className={styles.optionCard}>
                  <div className={styles.optionIconWrapper}>{option.icon}</div>
                  <h3 className={styles.optionTitle}>{option.title}</h3>
                  <p className={styles.optionDescription}>{option.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.nonIncentSection}>
            <h2 className={styles.optionsTitle}>Non-Incent Campaigns</h2>
            <p className={styles.optionsSubtitle}>
              Attract high-quality users with organic engagement
            </p>
            <div className={styles.optionsGrid}>
              {nonIncentOptions.map((option, index) => (
                <div key={index} className={styles.optionCard}>
                  <div className={styles.optionIconWrapper}>{option.icon}</div>
                  <h3 className={styles.optionTitle}>{option.title}</h3>
                  <p className={styles.optionDescription}>{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.comparisonSection}>
          <h2 className={styles.comparisonTitle}>Campaign Comparison</h2>
          <div className={styles.comparisonTable}>
            <div className={styles.tableHeader}>
              <div className={styles.headerCell}>Metric</div>
              <div className={`${styles.headerCell} ${styles.incentHeader}`}>Incent</div>
              <div className={`${styles.headerCell} ${styles.nonIncentHeader}`}>Non-Incent</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.rowCell}>User Acquisition Speed</div>
              <div className={styles.rowCell}>Fast</div>
              <div className={styles.rowCell}>Moderate</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.rowCell}>User Quality</div>
              <div className={styles.rowCell}>Variable</div>
              <div className={styles.rowCell}>High</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.rowCell}>Retention Rate</div>
              <div className={styles.rowCell}>Moderate</div>
              <div className={styles.rowCell}>High</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.rowCell}>Cost Per Install</div>
              <div className={styles.rowCell}>Lower</div>
              <div className={styles.rowCell}>Higher</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.rowCell}>Lifetime Value</div>
              <div className={styles.rowCell}>Moderate</div>
              <div className={styles.rowCell}>High</div>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Hybrid Approach Benefits</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <FaGift className={styles.benefitIcon} />
              </div>
              <h3 className={styles.benefitTitle}>Balanced Acquisition</h3>
              <p className={styles.benefitDescription}>Combine rapid user acquisition with quality retention</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <FaChartLine className={styles.benefitIcon} />
              </div>
              <h3 className={styles.benefitTitle}>Optimized Performance</h3>
              <p className={styles.benefitDescription}>Fine-tune campaigns for maximum ROI</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <FaUsers className={styles.benefitIcon} />
              </div>
              <h3 className={styles.benefitTitle}>Flexible Strategy</h3>
              <p className={styles.benefitDescription}>Adapt to changing market conditions and goals</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <FaStar className={styles.benefitIcon} />
              </div>
              <h3 className={styles.benefitTitle}>Custom Solutions</h3>
              <p className={styles.benefitDescription}>Tailor campaigns to your specific requirements</p>
            </div>
          </div>
        </div>

        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Flexible Pricing Options</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Incent-Focused</h3>
                <div className={styles.pricingPrice}>$0.30</div>
                <div className={styles.pricingDescription}>per install</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>Reward-based campaigns</li>
                <li>Fast user acquisition</li>
                <li>Basic analytics</li>
              </ul>
              <button 
                className={styles.pricingButton} 
                onClick={() => handleConsult('Incent-Focused')}
              >
                Get Started
              </button>
            </div>
            
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Non-Incent</h3>
                <div className={styles.pricingPrice}>$0.80</div>
                <div className={styles.pricingDescription}>per install</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>Organic engagement</li>
                <li>High-quality users</li>
                <li>Advanced analytics</li>
                <li>A/B testing</li>
              </ul>
              <button 
                className={styles.pricingButton} 
                onClick={() => handleConsult('Non-Incent')}
              >
                Get Started
              </button>
            </div>
            
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Hybrid Solution</h3>
                <div className={styles.pricingPrice}>Custom</div>
                <div className={styles.pricingDescription}>mixed approach</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>Combination campaigns</li>
                <li>Optimized acquisition</li>
                <li>Premium analytics</li>
                <li>Dedicated manager</li>
                <li>API access</li>
              </ul>
              <button 
                className={styles.pricingButton} 
                onClick={() => handleConsult('Hybrid Solution')}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Choose Your Campaign Type?</h2>
          <p className={styles.ctaSubtitle}>
            Our experts can help you determine the best approach for your specific goals
          </p>
          <button 
            className={styles.ctaButton} 
            onClick={() => handleConsult('Custom')}
          >
            Consult With Us
          </button>
        </div>
      </div>
      
      {/* Modal for consultation */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Consultation for {selectedOption} Option</h2>
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
                  <textarea placeholder={`Interested in ${selectedOption} campaign type`} />
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

export default IncentNonIncent;