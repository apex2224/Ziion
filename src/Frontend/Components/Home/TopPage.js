import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      <h1 className={styles.mainHeading}>
        <TypingText />
      </h1>
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

const TypingText = () => {
  const fullText = "Global Performance Marketing Company";
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    
    // Type out the text once
    const typeTimer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typeTimer);
        // Keep cursor blinking after typing is complete
        const cursorTimer = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        
        // Clean up cursor timer when component unmounts
        return () => clearInterval(cursorTimer);
      }
    }, 100);

    // Clean up typing timer
    return () => clearInterval(typeTimer);
  }, []);

  return (
    <span>
      {displayText}
      <span className={styles.cursor} style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </span>
  );
};

export default TopPage;
