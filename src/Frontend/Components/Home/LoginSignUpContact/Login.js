import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import {
  FaQuoteLeft,
  FaGoogle,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaInfoCircle,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("Siddahnat2107");
  const [password, setPassword] = useState("**********");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login process
    // Set authentication status in localStorage
    localStorage.setItem("isAuthenticated", "true");
    // Navigate to Advertiser dashboard on successful login
    navigate("/advertiser");
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.leftPanel}>
        <a href="/" className={styles.logo}>
          CPIDroid
        </a>
        <TestimonialCarousel />
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.loginForm}>
          <h2>Hi {email}, welcome back</h2>
          <p className={styles.subtitle}>
            Login to manage your account. <FaInfoCircle />
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
              <label htmlFor="email">EMAIL / USERNAME</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">PASSWORD</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className={styles.eyeIcon}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className={styles.options}>
              <div className={styles.rememberMe}>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/forgot-password" className={styles.forgotLink}>
                Forgot Password?
              </Link>
            </div>

            <div className={styles.submitGroup}>
              <button type="button" className={styles.otpBtn}>
                Login with OTP
              </button>
              <button type="submit" className={styles.signinBtn}>
                Signin
              </button>
            </div>
          </form>

          <p className={styles.signupLink}>
            Don't have an account?{" "}
            {/* This Link will navigate to your SignUp component */}
            <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

// Helper component to render stars
const StarRating = ({ count }) => (
  <div className={styles.starRating}>
    {[...Array(count)].map((_, i) => (
      <FaStar key={i} className={styles.starIcon} />
    ))}
  </div>
);

// Testimonial carousel component
const TestimonialCarousel = () => {
  // Array of testimonial data from Rating.js
  const testimonials = [
    {
      id: 1,
      title: "You can't find a better company.",
      text: "You can't find a better company. We tried a lot of Install Providers and non of them gave us such service like CPIDroid. We inte tracebility. Also their support works during normal working hours AND out of that, they also support urgent matters. :) Very use thousands here and moving ahead for more!",
      author: "Gustavo De Metrio",
      date: "September 11, 2020"
    },
    {
      id: 2,
      title: "Outstanding service and support",
      text: "The team at CPIDroid went above and beyond to help us with our installation needs. Their attention to detail and quick response times made all the difference in our project timeline.",
      author: "Sarah Johnson",
      date: "August 15, 2020"
    },
    {
      id: 3,
      title: "Reliable and professional",
      text: "We've been working with CPIDroid for over a year now, and their service has been consistently excellent. They're reliable, professional, and always deliver on time.",
      author: "Michael Chen",
      date: "July 3, 2020"
    }
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
              className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
            >
              <FaQuoteLeft size={32} className={styles.quoteIcon} />
              <div className={styles.testimonialStars}>
                <StarRating count={5} />
              </div>
              <h3 className={styles.testimonialTitle}>
                {testimonial.title}
              </h3>
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
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
