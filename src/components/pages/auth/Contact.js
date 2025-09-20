import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/header/Header";
import styles from "./Contact.module.css";
import { FaUser, FaEnvelope, FaChevronDown } from "react-icons/fa";

const Contact = () => {
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
    alert("Thank you for your message!");
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Header />
      <div className={styles.contactPage}>
        <div className={styles.formContainer}>
          <header className={styles.formHeader}>
            <h1>Contact Us</h1>
            <p>
              Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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
                <option value="general_inquiry">General Inquiry</option>
                <option value="technical_support">Technical Support</option>
                <option value="billing_question">Billing Question</option>
                <option value="feedback">Feedback</option>
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
              <Link to="/" className={styles.backButton}>
                BACK TO HOME
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

export default Contact;
