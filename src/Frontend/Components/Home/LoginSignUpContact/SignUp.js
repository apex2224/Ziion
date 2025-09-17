import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import {
  FaQuoteLeft,
  FaGoogle,
  FaEnvelope,
  FaInfoCircle,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("India");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate signup process
    setShowSuccessModal(true);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    // Set authentication status in localStorage
    localStorage.setItem("isAuthenticated", "true");
    // Navigate to advertiser dashboard after successful signup
    navigate("/advertiser");
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.leftPanel}>
        <a href="/" className={styles.logo}>
          CPIDroid
        </a>
        <TestimonialCarousel />
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.signupForm}>
          <h2>Welcome to CPIDroid</h2>
          <p className={styles.subtitle}>
            Fill out the form to get started <FaInfoCircle />
          </p>

          <div className={styles.socialLogin}>
            <button className={styles.googleBtn}>
              <FaGoogle /> Google
            </button>
            <button className={styles.emailBtn}>
              <FaEnvelope />{" "}
            </button>
          </div>

          <div className={styles.separator}>
            <span>OR SUBMIT WITH</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="username">USERNAME</label>
              <input
                type="text"
                id="username"
                placeholder="Username (alphanumeric)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="country">COUNTRY</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">EMAIL</label>
              <div className={styles.emailWrapper}>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <a href="#" className={styles.resendLink}>
                  Resend Activation Email?
                </a>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="mobile">MOBILE NUMBER</label>
              <input
                type="tel"
                id="mobile"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="terms" defaultChecked />
              <label htmlFor="terms">
                You agree to CPIDroid's{" "}
                <Link to="/terms">Terms and Policy</Link> by creating this
                account.
              </label>
            </div>

            <div className={styles.checkboxGroup}>
              {/* Placeholder for a reCAPTCHA component */}
              <input type="checkbox" id="recaptcha" />
              <label htmlFor="recaptcha">I'm not a robot</label>
              <div className={styles.recaptchaLogo}></div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Get Started
            </button>
          </form>

          <p className={styles.loginLink}>
            Already have an account?{" "}
            {/* This Link will navigate to your Login component */}
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>

      {/* Signup Success Modal */}
      {showSuccessModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.successModal}>
            <div className={styles.modalContent}>
              <FaCheckCircle className={styles.successIcon} />
              <h2>Signup Successful!</h2>
              <p>Welcome to CPIDroid. Your account has been created successfully.</p>
              <button 
                className={styles.modalButton}
                onClick={handleModalClose}
              >
                Continue to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;

// Helper component to render stars
const StarRating = ({ count }) => (
  <div className={styles.starRating}>
    {[...Array(count)].map((_, i) => (
      <FaStar key={i} className={styles.starIcon} />
    ))}
  </div>
);

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      title: "You can't find a better company.",
      text: "You can't find a better company. We tried a lot of Install Providers and non of them gave us such service like CPIDroid. We inte tracebility. Also their support works during normal working hours AND out of that, they also support urgent matters. :) Very use thousands here and moving ahead for more!",
      author: "Gustavo De Metrio",
      date: "September 11, 2020",
    },
    {
      id: 2,
      title: "Outstanding service and support",
      text: "The team at CPIDroid went above and beyond to help us with our installation needs. Their attention to detail and quick response times made all the difference in our project timeline.",
      author: "Sarah Johnson",
      date: "August 15, 2020",
    },
    {
      id: 3,
      title: "Reliable and professional",
      text: "We've been working with CPIDroid for over a year now, and their service has been consistently excellent. They're reliable, professional, and always deliver on time.",
      author: "Michael Chen",
      date: "July 3, 2020",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.testimonialCarouselContainer}>
      <div className={styles.carouselWrapper}>
        <button className={styles.carouselButtonLeft} onClick={goToPrevious}>
          <FaChevronLeft />
        </button>

        <div className={styles.carouselContent}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.carouselItem} ${
                index === currentIndex ? styles.active : ""
              }`}
            >
              <FaQuoteLeft size={32} className={styles.quoteIcon} />
              <div className={styles.testimonialStars}>
                <StarRating count={5} />
              </div>
              <h3 className={styles.testimonialTitle}>{testimonial.title}</h3>
              <blockquote className={styles.testimonialText}>
                {testimonial.text}
              </blockquote>
              <p className={styles.testimonialAuthor}>{testimonial.author}</p>
              <p className={styles.testimonialDate}>{testimonial.date}</p>
            </div>
          ))}
        </div>

        <button className={styles.carouselButtonRight} onClick={goToNext}>
          <FaChevronRight />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className={styles.carouselIndicators}>
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
