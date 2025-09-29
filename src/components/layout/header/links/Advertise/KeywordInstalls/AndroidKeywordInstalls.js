import React, { useState } from "react";
import styles from "./AndroidKeywordInstalls.module.css";
import { 
  FaAndroid, 
  FaSearch, 
  FaChartLine, 
  FaBolt, 
  FaTags, 
  FaRocket, 
  FaUsers, 
  FaStar 
} from "react-icons/fa";

const AndroidKeywordInstalls = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      icon: <FaSearch className={styles.benefitIcon} />,
      title: "Precision Targeting",
      description: "Target users actively searching for apps related to specific keywords."
    },
    {
      icon: <FaChartLine className={styles.benefitIcon} />,
      title: "Higher Conversion",
      description: "Reach users with intent, resulting in higher conversion rates."
    },
    {
      icon: <FaUsers className={styles.benefitIcon} />,
      title: "Relevant Audience",
      description: "Connect with users who are genuinely interested in your app category."
    },
    {
      icon: <FaStar className={styles.benefitIcon} />,
      title: "Improved ASO",
      description: "Boost your app's visibility in search results with targeted installs."
    }
  ];

  const features = [
    "Keyword-specific targeting for Android apps",
    "Advanced fraud prevention technology",
    "Real-time performance analytics",
    "Competitive pricing models",
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
          <h1 className={styles.title}>Android Keyword Installs</h1>
          <p className={styles.description}>
            Drive targeted installs for your Android app by reaching users searching for specific keywords
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Reach Users with Intent</h2>
              <p>
                Our Android keyword install campaigns connect you with users who are actively searching 
                for apps related to your chosen keywords. This targeted approach ensures you're reaching 
                users with genuine interest in your app category.
              </p>
              <p>
                By leveraging keyword targeting, you can improve your app's search visibility while 
                acquiring high-quality users who are more likely to engage with and retain your app.
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
          <h2 className={styles.benefitsTitle}>Keyword Targeting Benefits</h2>
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
              <h3 className={styles.stepTitle}>Choose Keywords</h3>
              <p>Select relevant keywords for your app category</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Set Campaign</h3>
              <p>Define your budget and targeting parameters</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Launch</h3>
              <p>Start reaching users searching for your keywords</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Optimize</h3>
              <p>Refine based on performance data</p>
            </div>
          </div>
        </div>

        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Flexible Pricing Options</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Starter</h3>
                <div className={styles.pricingRate}>$0.60</div>
                <div className={styles.pricingDescription}>per install</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>5 keywords</li>
                <li>2,500+ daily installs</li>
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
                <div className={styles.pricingRate}>$0.50</div>
                <div className={styles.pricingDescription}>per install</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>20 keywords</li>
                <li>15,000+ daily installs</li>
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
                <div className={styles.pricingRate}>Custom</div>
                <div className={styles.pricingDescription}>volume discounts</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>Unlimited keywords</li>
                <li>75,000+ daily installs</li>
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
          <h2 className={styles.ctaTitle}>Ready to Target the Right Users?</h2>
          <p className={styles.ctaSubtitle}>
            Start driving keyword-targeted installs for your Android app today
          </p>
          <button 
            className={styles.ctaButton} 
            onClick={() => handleGetStarted('Custom')}
          >
            <FaTags className={styles.ctaIcon} /> Create Keyword Campaign
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
                  <textarea placeholder={`Interested in ${selectedPlan} plan for Android Keyword Installs`} />
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

export default AndroidKeywordInstalls;