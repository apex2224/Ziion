import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./MultiplePricingModels.module.css";
import { FaChartBar, FaDollarSign, FaPercentage, FaBullseye, FaUsers, FaMedal } from "react-icons/fa";

const MultiplePricingModels = () => {
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

  return (
    <div>
      <Header />
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
              <h3>Goal Alignment</h3>
              <p>Match pricing to your specific campaign objectives</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Budget Control</h3>
              <p>Predictable spending based on your chosen model</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Performance Optimization</h3>
              <p>Focus resources on the metrics that matter most</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Flexibility</h3>
              <p>Switch models as your campaign goals evolve</p>
            </div>
          </div>
        </div>

        <div className={styles.howItWorksSection}>
          <h2 className={styles.howItWorksTitle}>How It Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Choose Your Model</h3>
              <p>Select the pricing model that aligns with your campaign goals</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Set Your Budget</h3>
              <p>Define your spending limits and bid amounts</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Launch Campaign</h3>
              <p>Go live and start tracking your results</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Optimize Performance</h3>
              <p>Adjust based on real-time performance data</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Choose Your Pricing Model?</h2>
          <p className={styles.ctaSubtitle}>
            Start a campaign with the pricing model that fits your goals
          </p>
          <button className={styles.ctaButton}>
            Create Campaign
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MultiplePricingModels;