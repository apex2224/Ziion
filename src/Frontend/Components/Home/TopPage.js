import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopPage.module.css";

const TopPage = () => {
  return (
    <div className={styles.topPageContainer}>
      <h1 className={styles.mainHeading}>
        Global Performance Marketing Company
      </h1>
      <p className={styles.subHeading}>
        Helping Partners Around The World in Their Business Growth Online
      </p>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2>PUBLISHERS</h2>
          <p>Increase Your Monthly Earnings with us</p>
          <Link to="/signup">
            <button className={styles.cardButton}>SIGN UP</button>
          </Link>
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
