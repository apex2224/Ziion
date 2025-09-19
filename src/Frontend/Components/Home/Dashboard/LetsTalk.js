import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./LetsTalk.module.css";
import { FaUser, FaEnvelope, FaChevronDown } from "react-icons/fa";

const LetsTalk = () => {
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
    alert("Thank you for reaching out! Our sales team will contact you shortly.");
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Header />
      <div className={styles.contactPage}>
        <div className={styles.formContainer}>
          <header className={styles.formHeader}>
            <h1>Let's Talk Business</h1>
            <p>
              Ready to boost your app's visibility? Interested in our bulk packages or custom solutions? 
              Our sales team is ready to discuss how we can help you achieve your ASO goals.
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
                <option value="sales_inquiry">Sales Inquiry</option>
                <option value="bulk_pricing">Bulk Pricing</option>
                <option value="custom_solution">Custom Solution</option>
                <option value="enterprise_plan">Enterprise Plan</option>
                <option value="other">Other</option>
              </select>
              <FaChevronDown className={styles.inputIcon} />
            </div>

            <div className={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="Tell us about your project or requirements"
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
                TALK TO SALES
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LetsTalk;