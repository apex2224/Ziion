import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./LetsChat.module.css";
import { FaUser, FaEnvelope, FaChevronDown } from "react-icons/fa";

const LetsChat = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Header />
      <div className={styles.contactPage}>
        <div className={styles.formContainer}>
          <header className={styles.formHeader}>
            <h1>Let's Chat</h1>
            <p>
              Have questions about ASO Booster? Want to discuss how we can help your app get more exposure? 
              Fill out the form below and our team will get back to you shortly.
            </p>
          </header>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <FaUser className={styles.inputIcon} />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <FaEnvelope className={styles.inputIcon} />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Choose Subject
                </option>
                <option value="aso_inquiry">ASO Booster Inquiry</option>
                <option value="pricing_question">Pricing Question</option>
                <option value="technical_support">Technical Support</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="other">Other</option>
              </select>
              <FaChevronDown className={styles.inputIcon} />
            </div>

            <div className={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className={styles.formFooter}>
              <Link to="/aso-booster" className={styles.backButton}>
                BACK TO ASO BOOSTER
              </Link>
              <button type="submit" className={styles.submitButton}>
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LetsChat;