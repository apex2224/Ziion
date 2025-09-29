import React, { useState } from "react";
import styles from "./BecomePublisher.module.css";
import {
  FaUserPlus,
  FaChartLine,
  FaUsers,
  FaBolt,
  FaHandshake,
  FaGlobe,
} from "react-icons/fa";

const BecomePublisher = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const benefits = [
    {
      icon: <FaChartLine className={styles.benefitIcon} />,
      title: "Revenue Growth",
      description:
        "Unlock new income streams through our comprehensive monetization solutions.",
    },
    {
      icon: <FaUsers className={styles.benefitIcon} />,
      title: "Publisher Network",
      description: "Join a thriving community of publishers and advertisers.",
    },
    {
      icon: <FaHandshake className={styles.benefitIcon} />,
      title: "Partnership Support",
      description: "Dedicated account managers to help you succeed.",
    },
    {
      icon: <FaGlobe className={styles.benefitIcon} />,
      title: "Global Reach",
      description: "Access audiences and advertisers from around the world.",
    },
  ];

  const features = [
    "Multiple monetization options including offerwalls and ads",
    "Advanced fraud prevention technology",
    "Real-time performance analytics",
    "Flexible payment schedules",
    "A/B testing capabilities",
    "24/7 customer support",
  ];

  const handleApplyNow = (planName) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
    // Reset form data when opening modal
    setFormData({
      name: "",
      email: "",
      company: "",
      message: `Interested in ${planName} publisher program`,
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you for your interest in becoming a publisher with the ${selectedPlan} plan! Our team will contact you shortly.`
    );
    console.log("Form Data:", formData);
    handleCloseModal();
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Become a Publisher</h1>
          <p className={styles.description}>
            Join our network of successful publishers and start monetizing your
            audience today
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Partner With Us</h2>
              <p>
                Becoming a publisher with CPIDroid opens up a world of
                opportunities to monetize your audience through our diverse
                range of advertising solutions. Whether you have a mobile app,
                website, or social media following, we have the tools and
                support to help you maximize your revenue.
              </p>
              <p>
                Our platform is designed to be publisher-friendly with
                competitive revenue shares, timely payments, and dedicated
                support to ensure your success.
              </p>

              <div className={styles.featuresList}>
                <h3 className={styles.featuresTitle}>Key Features:</h3>
                <ul className={styles.features}>
                  {features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <div className={styles.iconWrapper}>
                        <FaBolt className={styles.featureIcon} />
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
              <svg viewBox="0 0 300 300" className={styles.decorativeSvg}>
                {/* Main circle representing a network or platform */}
                <circle cx="150" cy="120" r="60" fill="#007bff" />

                {/* Eyes for a more friendly appearance */}
                <circle cx="130" cy="105" r="8" fill="#FFFFFF" />
                <circle cx="170" cy="105" r="8" fill="#FFFFFF" />
                <circle cx="127" cy="103" r="3" fill="#007bff" />
                <circle cx="167" cy="103" r="3" fill="#007bff" />

                {/* Smile to make it more approachable */}
                <path
                  d="M120 140 Q150 170 180 140"
                  stroke="#FFFFFF"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Connecting lines to represent network connections */}
                <line
                  x1="150"
                  y1="60"
                  x2="150"
                  y2="30"
                  stroke="#007bff"
                  strokeWidth="3"
                />
                <line
                  x1="90"
                  y1="90"
                  x2="60"
                  y2="60"
                  stroke="#007bff"
                  strokeWidth="3"
                />
                <line
                  x1="210"
                  y1="90"
                  x2="240"
                  y2="60"
                  stroke="#007bff"
                  strokeWidth="3"
                />
                <line
                  x1="90"
                  y1="150"
                  x2="60"
                  y2="180"
                  stroke="#007bff"
                  strokeWidth="3"
                />
                <line
                  x1="210"
                  y1="150"
                  x2="240"
                  y2="180"
                  stroke="#007bff"
                  strokeWidth="3"
                />

                {/* Connection points */}
                <circle cx="150" cy="30" r="8" fill="#007bff" />
                <circle cx="60" cy="60" r="8" fill="#007bff" />
                <circle cx="240" cy="60" r="8" fill="#007bff" />
                <circle cx="60" cy="180" r="8" fill="#007bff" />
                <circle cx="240" cy="180" r="8" fill="#007bff" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>
            Benefits of Becoming a Publisher
          </h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIconWrapper}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>
                  {benefit.description}
                </p>
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
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>CPM</h3>
                <div className={styles.pricingPrice}>$5-20</div>
                <div className={styles.pricingDescription}>
                  per 1,000 impressions
                </div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>Banner and interstitial ads</li>
                <li>Real-time bidding</li>
                <li>Basic analytics</li>
              </ul>
              <button
                className={styles.pricingButton}
                onClick={() => handleApplyNow("CPM")}
              >
                Learn More
              </button>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>CPC</h3>
                <div className={styles.pricingPrice}>$0.10-1.00</div>
                <div className={styles.pricingDescription}>per click</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>Text and rich media ads</li>
                <li>Advanced targeting</li>
                <li>Detailed analytics</li>
                <li>A/B testing</li>
              </ul>
              <button
                className={styles.pricingButton}
                onClick={() => handleApplyNow("CPC")}
              >
                Learn More
              </button>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>Revenue Share</h3>
                <div className={styles.pricingPrice}>60-85%</div>
                <div className={styles.pricingDescription}>of earnings</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>Offerwalls and incentivized offers</li>
                <li>Premium analytics</li>
                <li>Dedicated support</li>
                <li>Custom integrations</li>
              </ul>
              <button
                className={styles.pricingButton}
                onClick={() => handleApplyNow("Revenue Share")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Become a Publisher?</h2>
          <p className={styles.ctaSubtitle}>
            Join our network of successful publishers and start earning today
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => handleApplyNow("Custom")}
          >
            <FaUserPlus className={styles.ctaIcon} /> Apply Now
          </button>
        </div>
      </div>

      {/* Modal for applying */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Apply for {selectedPlan} Publisher Program</h2>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Company:</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={`Interested in ${selectedPlan} publisher program`}
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default BecomePublisher;
