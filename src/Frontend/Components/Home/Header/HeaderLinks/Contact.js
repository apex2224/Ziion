import React, { useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./Contact.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaUser, FaBuilding, FaPencilAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className={styles.contactIcon} />,
      title: "Email Us",
      content: "support@cpidroid.com",
      description: "For general inquiries and support"
    },
    {
      icon: <FaPhone className={styles.contactIcon} />,
      title: "Call Us",
      content: "+1 (800) 555-1234",
      description: "Monday-Friday, 9AM-5PM EST"
    },
    {
      icon: <FaMapMarkerAlt className={styles.contactIcon} />,
      title: "Visit Us",
      content: "123 Marketing Street",
      description: "San Francisco, CA 94107"
    },
    {
      icon: <FaClock className={styles.contactIcon} />,
      title: "Business Hours",
      content: "9:00 AM - 6:00 PM",
      description: "Monday to Friday"
    }
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Contact CPIDroid</h1>
          <p className={styles.description}>
            Have questions or need assistance? Our team is here to help you succeed with our platform.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <div className={styles.contactFormSection}>
              <h2 className={styles.sectionTitle}>Send Us a Message</h2>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      <FaUser className={styles.labelIcon} /> Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.formInput}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      <FaEnvelope className={styles.labelIcon} /> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.formInput}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.formLabel}>
                      <FaBuilding className={styles.labelIcon} /> Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>
                      <FaPencilAlt className={styles.labelIcon} /> Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={styles.formInput}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.formTextarea}
                    rows="6"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className={styles.submitButton}>
                  <FaPaperPlane className={styles.buttonIcon} /> Send Message
                </button>
              </form>
            </div>

            <div className={styles.mapSection}>
              <h2 className={styles.sectionTitle}>Our Location</h2>
              <div className={styles.mapContainer}>
                <div className={styles.mapPlaceholder}>
                  <FaMapMarkerAlt className={styles.mapIcon} />
                  <p>Interactive Map</p>
                  <p className={styles.mapAddress}>123 Marketing Street, San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.contactInfoSection}>
              <h3 className={styles.sidebarTitle}>Contact Information</h3>
              <div className={styles.contactInfoList}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles.contactInfoItem}>
                    <div className={styles.contactIconWrapper}>{info.icon}</div>
                    <div className={styles.contactDetails}>
                      <h4 className={styles.contactTitle}>{info.title}</h4>
                      <p className={styles.contactContent}>{info.content}</p>
                      <p className={styles.contactDescription}>{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.supportSection}>
              <h3 className={styles.sidebarTitle}>Need Immediate Help?</h3>
              <div className={styles.supportCard}>
                <h4 className={styles.supportTitle}>24/7 Customer Support</h4>
                <p className={styles.supportDescription}>
                  Our support team is available around the clock to assist you with any urgent matters.
                </p>
                <div className={styles.supportContact}>
                  <p className={styles.supportPhone}>
                    <FaPhone className={styles.supportIcon} /> +1 (800) 555-1234
                  </p>
                  <p className={styles.supportEmail}>
                    <FaEnvelope className={styles.supportIcon} /> emergency@cpidroid.com
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.faqSection}>
              <h3 className={styles.sidebarTitle}>Quick Answers</h3>
              <div className={styles.faqList}>
                <div className={styles.faqItem}>
                  <h4 className={styles.faqQuestion}>How quickly do you respond?</h4>
                  <p className={styles.faqAnswer}>We typically respond within 24 hours during business days.</p>
                </div>
                <div className={styles.faqItem}>
                  <h4 className={styles.faqQuestion}>Do you offer account setup help?</h4>
                  <p className={styles.faqAnswer}>Yes, our onboarding specialists can help you get started.</p>
                </div>
                <div className={styles.faqItem}>
                  <h4 className={styles.faqQuestion}>Where can I find technical documentation?</h4>
                  <p className={styles.faqAnswer}>Visit our Support Center for comprehensive guides and API docs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;