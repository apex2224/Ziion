import React from "react";
import Header from "../../layout/header/Header";
import AwesomeTextAnimation from "../../ui/AwesomeTextAnimation";
import styles from "./AwesomeTextDemo.module.css";

const AwesomeTextDemo = () => {
  const demoTexts = [
    "Global Performance Marketing Company",
    "Innovative Digital Solutions",
    "Transform Your Business",
    "Cutting-Edge Technology",
    "Exceptional Results Guaranteed"
  ];

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.animationContainer}>
            <AwesomeTextAnimation texts={demoTexts} />
          </div>
          <p className={styles.description}>
            This is an awesome text animation with smooth transitions, gradient text effects, 
            interactive indicators, and decorative elements. Much more visually appealing than 
            the previous falling text animation!
          </p>
        </div>

        <div className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Animation Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3>Smooth Transitions</h3>
              <p>Elegant slide-in and slide-out animations with cubic-bezier timing functions</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Gradient Text</h3>
              <p>Beautiful gradient text effect that makes your content stand out</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Interactive Indicators</h3>
              <p>Clickable indicators to navigate between different text options</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Decorative Elements</h3>
              <p>Floating elements and pulsing effects for a dynamic background</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwesomeTextDemo;