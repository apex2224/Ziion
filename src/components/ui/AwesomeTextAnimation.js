import React, { useState, useEffect } from "react";
import styles from "./AwesomeTextAnimation.module.css";

const AwesomeTextAnimation = () => {
  const texts = [
    "Global Performance Marketing Company",
    "Boost Your Traffic & Conversions",
    "Increase Your Monthly Earnings",
    "Innovative Digital Solutions"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState(styles.slideIn);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass(styles.slideOut);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setAnimationClass(styles.slideIn);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.text} ${animationClass}`}>
        {texts[currentIndex]}
      </div>
    </div>
  );
};

export default AwesomeTextAnimation;