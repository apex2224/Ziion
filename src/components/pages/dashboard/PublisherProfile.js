import React, { useState } from "react";
import FAQ from "../../sections/rbf-faq/FAQ";
import Footer from "../../layout/footer/Footer";
import styles from "./PublisherProfile.module.css";
import { FaPencilAlt, FaChevronRight, FaShoppingCart, FaSmile, FaUserClock, FaChartLine } from "react-icons/fa";

const PublisherProfile = () => {
  // A single state object to manage all form fields cleanly
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    email: "",
    team: "",
    appLink: "",
    monetization: "",
    dau: "",
    fraudProtection: "",
    userVerification: "",
    userIdentifier: "",
    deviceIdentifier: "",
    sourceCode: "",
    demoAccount: "",
  });

  // A single handler for all input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Publisher Application Submitted:", formData);
    alert("Thank you for your application!");
    // Here you would typically send the formData to your backend API
  };

  // Data for the top 3 integration cards
  const integrationFeatures = [
    {
      image: '/images/integration-api.png', // Replace with your image path
      title: 'Integrate with Offer API',
      description: 'Get direct access to our offers or pull & sync all via our offer API.',
    },
    {
      image: '/images/integration-wall.png', // Replace with your image path
      title: 'Integrate with Offer Wall',
      description: 'Add our web offerwall as iframe on your mobile web with postbacks.',
    },
    {
      image: '/images/integration-link.png', // Replace with your image path
      title: 'Integrate with Smart Link',
      description: 'Just send traffic to our smart link and see revenue generating.',
    },
  ];

  // Data for the 4 benefits at the bottom
  const benefits = [
    { icon: <FaShoppingCart />, text: 'Drive In-App Purchases', theme: 'green' },
    { icon: <FaUserClock />, text: 'Increase Retention', theme: 'yellow' },
    { icon: <FaSmile />, text: 'Improve User Experience', theme: 'blue' },
    { icon: <FaChartLine />, text: 'Boost Ad Revenue', theme: 'orange' },
  ];

  return (
    <div className={styles.publisherPage}>
      {/* Hero section inspired by the Monetization Solutions page */}
      <header className={styles.hero}>
        <h1>Monetization Solutions</h1>
        <p>Monetize Web & Mobile Traffic with Ziion Offerwall Solution.</p>
      </header>

      <main className={styles.mainContent}>
        {/* Monetization Solutions Section - NEW CONTENT */}
        <section className={styles.monetizationSection}>
          <div className={styles.integrationGrid}>
            {integrationFeatures.map((feature, index) => (
              <div key={index} className={styles.integrationCard}>
                <div className={styles.cardImage}>
                  <img src={feature.image} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#BecomePublisher" className={styles.solutionLink}>
                  Get the Solution <FaChevronRight />
                </a>
              </div>
            ))}
          </div>
          
          <div className={styles.demoSection}>
            <h2>Live Ziion Offerwall Example</h2>
            <p className={styles.demoSubtitle}>Feel free to play around.</p>
            <div className={styles.demoGrid}>
              <div className={styles.qrCodeSide}>
                <h3>Try it on Your Mobile Device</h3>
                <p>Scan QR code to view on your mobile device</p>
                <div className={styles.qrCode}>
                  <img src="/images/qr-code.png" alt="QR Code for mobile demo" />
                </div>
              </div>
              <div className={styles.mobilePreviewSide}>
                <p className={styles.previewLabel}>Live Mobile Preview:</p>
                <div className={styles.mobilePreview}>
                  <img src="/images/mobile-preview.png" alt="Live mobile preview of offerwall" />
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.benefitsSection}>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <div className={`${styles.benefitIcon} ${styles[benefit.theme]}`}>
                    {benefit.icon}
                  </div>
                  <h4>{benefit.text}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Profile Application Form */}
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <span className={styles.tag}>JOIN Ziion'S PUBLISHER CLUB</span>
            <h2>Apply to Become Publisher</h2>
            <p>(Profile Application)</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.applicationForm}>
            {/* --- First Row: Name and Type --- */}
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">NAME *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Official Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="type">TYPE *</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    -- Please select publisher type --
                  </option>
                  <option value="individual">Individual</option>
                  <option value="company">Company</option>
                  <option value="network">Ad Network</option>
                </select>
              </div>
            </div>

            {/* --- Second Row: Email and Teams --- */}
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">EMAIL *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Official Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="team">TEAM *</label>
                <input
                  type="text"
                  id="team"
                  name="team"
                  placeholder="Your Official Teams"
                  value={formData.team}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* --- Link --- */}
            <div className={styles.inputGroup}>
              <label htmlFor="appLink">APP / WEB LINK *</label>
              <input
                type="url"
                id="appLink"
                name="appLink"
                placeholder="Enter your primary application or website link where you will integrate Ziion's monetization solutions"
                value={formData.appLink}
                onChange={handleChange}
                required
              />
            </div>

            {/* --- Text Areas --- */}
            {[
              {
                name: "monetization",
                label: "INVENTORY : MONETIZATION *",
                placeholder: "How'd you use Ziion's monetization solutions?",
              },
              {
                name: "dau",
                label: "INVENTORY : DAU *",
                placeholder: "How many DAU (daily active users) you have?",
              },
              {
                name: "fraudProtection",
                label: "INVENTORY : FRAUD PROTECTION *",
                placeholder:
                  "How'd you prevent fraud users like vpn, proxy, bots, emulators?",
              },
              {
                name: "userVerification",
                label: "INVENTORY : USER VERIFICATION *",
                placeholder: "How do you verify your end-user's account?",
              },
              {
                name: "userIdentifier",
                label: "INVENTORY : USER IDENTIFIER *",
                placeholder: "Are you able to pass unique identifier per user?",
              },
              {
                name: "deviceIdentifier",
                label: "INVENTORY : DEVICE IDENTIFIER *",
                placeholder:
                  "Are you able to pass device identifiers like gaid, idfa?",
              },
              {
                name: "sourceCode",
                label: "INVENTORY : SOURCE CODE *",
                placeholder:
                  "Are you using any 3rd party app or web source code? If yes, mention link!",
              },
              {
                name: "demoAccount",
                label: "INVENTORY : DEMO ACCOUNT *",
                placeholder:
                  "Share test login details for review of your app / site.",
              },
            ].map((field) => (
              <div key={field.name} className={styles.inputGroup}>
                <label htmlFor={field.name}>{field.label}</label>
                <div className={styles.textareaWrapper}>
                  <textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    rows="3"
                  ></textarea>
                  <FaPencilAlt className={styles.textareaIcon} />
                </div>
              </div>
            ))}

            <button type="submit" className={styles.submitButton}>
              Submit Application
            </button>
          </form>
        </div>
      </main>
      <FAQ />
      <Footer />
    </div>
  );
};

export default PublisherProfile;
