import React, { useState } from "react";
import styles from "./MultiplePricingModels.module.css";
import { FaChartBar, FaDollarSign, FaPercentage, FaCoins, FaBolt, FaUsers, FaBullseye, FaMedal } from "react-icons/fa";

const MultiplePricingModels = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pricingModels = [
    {
      icon: <FaChartBar className={styles.modelIcon} />,
      title: "CPA (Cost Per Action)",
      description: "Pay only when users complete a specific action in your app",
      bestFor: "High-value actions like purchases or signups"
    },
    {
      icon: <FaDollarSign className={styles.modelIcon} />,
      title: "CPI (Cost Per Install)",
      description: "Pay for each app installation",
      bestFor: "Building user base and app visibility"
    },
    {
      icon: <FaUsers className={styles.modelIcon} />,
      title: "CPM (Cost Per Mille)",
      description: "Pay per 1,000 impressions",
      bestFor: "Brand awareness campaigns"
    },
    {
      icon: <FaPercentage className={styles.modelIcon} />,
      title: "CPC (Cost Per Click)",
      description: "Pay for each click on your ad",
      bestFor: "Driving traffic to your app or website"
    },
    {
      icon: <FaBullseye className={styles.modelIcon} />,
      title: "CPL (Cost Per Lead)",
      description: "Pay for each qualified lead generated",
      bestFor: "Lead generation campaigns"
    },
    {
      icon: <FaMedal className={styles.modelIcon} />,
      title: "CPV (Cost Per View)",
      description: "Pay for each video view",
      bestFor: "Video content promotion"
    }
  ];

  const handleCreateCampaign = (modelName) => {
    setSelectedModel(modelName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedModel(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest in the ${selectedModel} model! Our team will contact you shortly to set up your campaign.`);
    handleCloseModal();
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Multiple Pricing Models</h1>
          <p className={styles.description}>
            Choose the pricing model that aligns with your campaign goals and budget
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Flexible Pricing for Every Goal</h2>
              <p>
                Our platform supports multiple pricing models to ensure you only pay for the results that matter most to your business. 
                Whether you're focused on installs, engagement, or specific user actions, we have a model that fits your needs.
              </p>
              <p>
                Each pricing model offers unique advantages depending on your campaign objectives, target audience, and budget constraints.
              </p>
              
              <div className={styles.featuresList}>
                <h3 className={styles.featuresTitle}>Key Features:</h3>
                <ul className={styles.features}>
                  <li className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <FaBolt className={styles.featureIcon} />
                    </div>
                    Goal alignment with specific pricing models
                  </li>
                  <li className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <FaChartBar className={styles.featureIcon} />
                    </div>
                    Budget control and predictable spending
                  </li>
                  <li className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <FaUsers className={styles.featureIcon} />
                    </div>
                    Performance optimization based on metrics
                  </li>
                  <li className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <FaBullseye className={styles.featureIcon} />
                    </div>
                    Flexibility to switch models as goals evolve
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.visualContent}>
            <div className={styles.svgContainer}>
              <svg viewBox="0 0 400 300" className={styles.decorativeSvg}>
                <circle cx="200" cy="150" r="100" fill="none" stroke="#007bff" strokeWidth="2" />
                <line x1="200" y1="50" x2="200" y2="250" stroke="#007bff" strokeWidth="1" />
                <line x1="100" y1="150" x2="300" y2="150" stroke="#007bff" strokeWidth="1" />
                <line x1="130" y1="80" x2="270" y2="220" stroke="#007bff" strokeWidth="1" />
                <line x1="270" y1="80" x2="130" y2="220" stroke="#007bff" strokeWidth="1" />
                <circle cx="200" cy="150" r="5" fill="#007bff" />
                <circle cx="200" cy="50" r="5" fill="#28a745" />
                <circle cx="300" cy="150" r="5" fill="#28a745" />
                <circle cx="200" cy="250" r="5" fill="#28a745" />
                <circle cx="100" cy="150" r="5" fill="#28a745" />
                <circle cx="270" cy="80" r="5" fill="#28a745" />
                <circle cx="130" cy="80" r="5" fill="#28a745" />
                <circle cx="270" cy="220" r="5" fill="#28a745" />
                <circle cx="130" cy="220" r="5" fill="#28a745" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.modelsSection}>
          <h2 className={styles.modelsTitle}>Available Pricing Models</h2>
          <div className={styles.modelsGrid}>
            {pricingModels.map((model, index) => (
              <div key={index} className={styles.modelCard}>
                <div className={styles.modelIconWrapper}>{model.icon}</div>
                <h3 className={styles.modelTitle}>{model.title}</h3>
                <p className={styles.modelDescription}>{model.description}</p>
                <div className={styles.modelBestFor}>
                  <span className={styles.bestForLabel}>Best for:</span> {model.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Why Multiple Pricing Models?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Goal Alignment</h3>
              <p className={styles.benefitDescription}>Match pricing to your specific campaign objectives</p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Budget Control</h3>
              <p className={styles.benefitDescription}>Predictable spending based on your chosen model</p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Performance Optimization</h3>
              <p className={styles.benefitDescription}>Focus resources on the metrics that matter most</p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Flexibility</h3>
              <p className={styles.benefitDescription}>Switch models as your campaign goals evolve</p>
            </div>
          </div>
        </div>

        <div className={styles.howItWorksSection}>
          <h2 className={styles.howItWorksTitle}>How It Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Choose Your Model</h3>
              <p className={styles.stepDescription}>Select the pricing model that aligns with your campaign goals</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Set Your Budget</h3>
              <p className={styles.stepDescription}>Define your spending limits and bid amounts</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Launch Campaign</h3>
              <p className={styles.stepDescription}>Go live and start tracking your results</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Optimize Performance</h3>
              <p className={styles.stepDescription}>Adjust based on real-time performance data</p>
            </div>
          </div>
        </div>

        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Flexible Pricing Options</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Starter</h3>
                <div className={styles.pricingPrice}>$0.25</div>
                <div className={styles.pricingDescription}>per action</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>1,000+ daily actions</li>
                <li>Basic targeting</li>
                <li>Email support</li>
              </ul>
              <button 
                className={styles.pricingButton} 
                onClick={() => handleCreateCampaign('Starter')}
              >
                Get Started
              </button>
            </div>
            
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Professional</h3>
                <div className={styles.pricingPrice}>$0.20</div>
                <div className={styles.pricingDescription}>per action</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>10,000+ daily actions</li>
                <li>Advanced targeting</li>
                <li>Real-time analytics</li>
                <li>Priority support</li>
              </ul>
              <button 
                className={styles.pricingButton} 
                onClick={() => handleCreateCampaign('Professional')}
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
                <li>100,000+ daily actions</li>
                <li>Premium targeting</li>
                <li>Dedicated account manager</li>
                <li>API access</li>
                <li>24/7 phone support</li>
              </ul>
              <button 
                className={styles.pricingButton} 
                onClick={() => handleCreateCampaign('Enterprise')}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Choose Your Pricing Model?</h2>
          <p className={styles.ctaSubtitle}>
            Start a campaign with the pricing model that fits your goals
          </p>
          <button 
            className={styles.ctaButton} 
            onClick={() => handleCreateCampaign('Custom')}
          >
            Create Campaign
          </button>
        </div>
      </div>
      
      {/* Modal for creating campaign */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Create Campaign with {selectedModel} Model</h2>
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
                  <textarea placeholder={`Interested in ${selectedModel} pricing model for campaign`} />
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

export default MultiplePricingModels;