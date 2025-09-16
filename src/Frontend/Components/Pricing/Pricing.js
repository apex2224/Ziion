import React from "react";
import styles from "./Pricing.module.css";
import { BsArrowRight } from "react-icons/bs";
import {
  FaBullhorn,
  FaChartLine,
  FaTimesCircle,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className={styles.pricingSection}>
      <h2 className={styles.title}>Pricing</h2>
      <p className={styles.subtitle}>
        No additional costs. Pay for what matters to you.
      </p>

      <div className={styles.contentGrid}>
        <div
          className={styles.priceCard}
        >
          <div className={styles.priceHeader}>
            <span className={styles.from}>from</span>
            <div className={styles.price}>
              <span className={styles.currency}>₹</span>
              <span className={styles.amount}>7.05</span>
            </div>
            <span className={styles.perConversion}>
              per successful conversion
            </span>
          </div>
          <p className={styles.description}>
            We have bid, budget system. If your budget is $100 and you willing
            to bid $0.1 per conversion, you will get 1000 conversions.
          </p>
          <div className={styles.buttonGroup}>
            <Link to="/all-plans" className={styles.viewPlansButton}>
              View all Plans <BsArrowRight />
            </Link>
            <Link to="/signup" className={styles.getStartedButton}>
              Get Started <BsArrowRight />
            </Link>
          </div>
          <p className={styles.noCard}>No credit card required.</p>

          <div className={`${styles.wave} ${styles.wave1}`}></div>
          <div className={`${styles.wave} ${styles.wave2}`}></div>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <FaBullhorn className={styles.featureIcon} />
            <h3>Variety of campaigns</h3>
            <p>
              Achieve maximum results with minimum cost with CPIDroid. Create
              CPC | CPI | CPA campaigns as per your goals.
            </p>
          </div>
          <div className={styles.featureItem}>
            <FaChartLine className={styles.featureIcon} />
            <h3>Variety of traffic</h3>
            <p>
              CPIDroid is small bonus that has Incent & Non-Incent both the
              options. Just choose which suites your needs.
            </p>
          </div>
          <div className={styles.featureItem}>
            <FaTimesCircle className={styles.featureIcon} />
            <h3>Terminate anytime</h3>
            <p>
              Don't want to continue the campaign? Just terminate & will be
              refunded back to balance, no hidden costs or fees.
            </p>
          </div>
          <div className={styles.featureItem}>
            <FaCheckCircle className={styles.featureIcon} />
            <h3>Real conversions</h3>
            <p>
              Pay for real installs only, from real users & devices, thanks to
              our anti-fraud measures & fraud detection systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
