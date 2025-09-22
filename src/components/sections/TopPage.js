import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AwesomeTextAnimation from "../ui/AwesomeTextAnimation";
import styles from "./TopPage.module.css";

const TopPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication status on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  const handleDashboardClick = () => {
    navigate("/advertiser");
  };

  return (
    <div className={styles.topPageContainer}>
      <div className={styles.mainHeading}>
        <AwesomeTextAnimation />
      </div>
      <p className={styles.subHeading}>
        Helping Partners Around The World in Their Business Growth Online
      </p>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2>PUBLISHERS</h2>
          <p>Increase Your Monthly Earnings with us</p>
          {isAuthenticated ? (
            <button 
              className={styles.cardButton}
              onClick={handleDashboardClick}
            >
              DASHBOARD
            </button>
          ) : (
            <Link to="/signup">
              <button className={styles.cardButton}>SIGN UP</button>
            </Link>
          )}
        </div>

        <div className={styles.card}>
          <h2>ADVERTISERS</h2>
          <p>Boost Your Traffic & Conversions</p>
          <Link to="/contact">
            <button className={styles.cardButton}>CONTACT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
