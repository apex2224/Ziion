import React from "react";
import styles from "./PromotionalBenefits.module.css";
import { FaGift, FaTachometerAlt, FaBullseye } from "react-icons/fa";

// Data is stored in an array, making the component cleaner and easier to manage.
const benefitsData = [
  {
    icon: <FaGift />,
    title: "Rewarded or Non-Rewarded",
    description:
      "Acquire users from our high converting offerwalls or creatives based non-incent campaign.",
    theme: "red",
  },
  {
    icon: <FaTachometerAlt />,
    title: "Self Service or Managed",
    description:
      "Setup campaign by yourself on our self-serve platform or contact account manager for help.",
    theme: "blue",
  },
  {
    icon: <FaBullseye />,
    title: "Installs or Action / Leads",
    description:
      "Run cost per install campaign for installs or cost per action campaign for actions & leads.",
    theme: "green",
  },
];

const PromotionalBenefits = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.topText}>
        <p className={styles.eyebrowText}>Our Promotional Benefits</p>
        <h1>ZiionTechnology makes app marketing easy and fast.</h1>
      </div>

      <div className={styles.cardsContainer}>
        {benefitsData.map((benefit) => (
          <div key={benefit.title} className={styles.card}>
            <div className={`${styles.iconContainer} ${styles[benefit.theme]}`}>
              {benefit.icon}
            </div>
            <h2>{benefit.title}</h2>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>

      <p className={styles.footerText}>
        It is fast and easy. Create your first and ongoing campaign with Ziion
        Technology.
      </p>
    </section>
  );
};

export default PromotionalBenefits;
