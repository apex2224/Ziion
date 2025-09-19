import React from "react";
import styles from "./Features.module.css";
import {
  FaAward,
  FaCube,
  FaBroadcastTower,
  FaFlag,
  FaCalendarCheck,
} from "react-icons/fa";
import FeaturesImg from "../../assets/icons/Featuresimg.svg";

const leftFeatures = [
  { icon: <FaAward />, text: "5+ Years of Experience" },
  { icon: <FaCube />, text: "2 Million Monthly Conversions" },
  {
    icon: <FaBroadcastTower />,
    text: "Monthly Spend of Over $1M For Internal Media Buying",
  },
];

const rightFeatures = [
  {
    icon: <FaFlag />,
    text: "Over 500 Global Advertisers in Different Verticals",
  },
  {
    icon: <FaCalendarCheck />,
    text: "Helping 5000+ publishers Globally to Earn Big",
  },
];

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Interesting Figures About Us</h2>

        <div className={styles.contentGrid}>
          <div className={styles.featureColumn}>
            {leftFeatures.map((item, index) => (
              <div
                key={index}
                className={`${styles.featureItem} ${styles.alignLeft}`}
              >
                <div className={styles.iconWrapper}>{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.illustration}>
            <img
              src={FeaturesImg}
              alt="About Us Illustration"
            />
          </div>

          <div className={styles.featureColumn}>
            {rightFeatures.map((item, index) => (
              <div
                key={index}
                className={`${styles.featureItem} ${styles.alignRight}`}
              >
                <p>{item.text}</p>
                <div className={styles.iconWrapper}>{item.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
