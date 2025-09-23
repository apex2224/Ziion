import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./TopPage.module.css";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const TopPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication status on component mount and when localStorage changes
  useEffect(() => {
    const checkAuthStatus = () => {
      const authStatus = localStorage.getItem("isAuthenticated") === "true";
      setIsAuthenticated(authStatus);
    };

    // Check initial status
    checkAuthStatus();

    // Listen for storage changes (in case of login/logout in other tabs)
    const handleStorageChange = (e) => {
      if (e.key === "isAuthenticated") {
        checkAuthStatus();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Also check auth status when component comes into view
  useEffect(() => {
    const checkAuthStatus = () => {
      const authStatus = localStorage.getItem("isAuthenticated") === "true";
      setIsAuthenticated(authStatus);
    };

    // Check when component mounts
    checkAuthStatus();

    // Poll for changes every second (alternative to storage event)
    const interval = setInterval(checkAuthStatus, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDashboardClick = () => {
    navigate("/advertiser");
  };

  return (
    <section className={`${styles.hero} reveal`}>
      <div className={`${styles.heroContent} reveal-left`}>
        <h1 className={`${styles.heroTitle} reveal`}>
          Performance-Based Mobile User <span>Acquisition</span>
        </h1>
        <p className={`${styles.heroSubtitle} reveal-delay-1`}>
          CPIDroid is a global performance marketing platform connecting
          advertisers with quality publishers to drive app installs and in-app
          actions.
        </p>
        <div className={`${styles.heroButtons} reveal-delay-2`}>
          {isAuthenticated ? (
            <button className={styles.primaryButton} onClick={handleDashboardClick}>
              DASHBOARD <FaArrowRight />
            </button>
          ) : (
            <Link to="/signup" className={styles.primaryButton}>
              GET STARTED <FaArrowRight />
            </Link>
          )}
          <Link to="/contact" className={styles.secondaryButton}>
            Contact Sales
          </Link>
        </div>
        <div className={`${styles.heroChecklist} reveal-delay-3`}>
          <div className={styles.checkItem}>
            <FaCheck className={styles.checkIcon} />
            <span>No setup fees</span>
          </div>
          <div className={styles.checkItem}>
            <FaCheck className={styles.checkIcon} />
            <span>Real-time reporting</span>
          </div>
          <div className={styles.checkItem}>
            <FaCheck className={styles.checkIcon} />
            <span>Fraud-free traffic</span>
          </div>
        </div>
      </div>
      <div className={`${styles.heroImage} reveal-right`}>
        <div className={styles.imagePlaceholder}>
          <span>Hero Image</span>
        </div>
      </div>
    </section>
  );
};

export default TopPage;
