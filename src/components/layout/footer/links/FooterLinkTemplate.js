import React from "react";
import styles from "./FooterLinkTemplate.module.css";

const FooterLinkTemplate = ({ title, description, features, additionalContent }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>
          {description}
        </p>
        
        {features && features.length > 0 && (
          <div className={styles.featuresSection}>
            <h2>What We Offer</h2>
            <ul className={styles.featuresList}>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        {additionalContent && <div className={styles.additionalContent}>{additionalContent}</div>}
      </div>
    </div>
  );
};

export default FooterLinkTemplate;