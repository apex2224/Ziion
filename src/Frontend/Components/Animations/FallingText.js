import React, { useState, useEffect } from 'react';
import styles from './FallingText.module.css';

const FallingText = ({ text = "Global Performance Marketing Company" }) => {
  const [animationStage, setAnimationStage] = useState('initial'); // initial, falling, rising, landed

  useEffect(() => {
    // Start the falling animation after a short delay
    const fallTimer = setTimeout(() => {
      setAnimationStage('falling');
    }, 500);

    // After falling, start rising back up
    const riseTimer = setTimeout(() => {
      setAnimationStage('rising');
    }, 2000);

    // After rising, land in position
    const landTimer = setTimeout(() => {
      setAnimationStage('landed');
    }, 4000);

    // Clean up timers
    return () => {
      clearTimeout(fallTimer);
      clearTimeout(riseTimer);
      clearTimeout(landTimer);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.text} ${styles[animationStage]}`}>
        {text}
      </div>
      
      {/* Visual effect for the "void" */}
      {animationStage === 'falling' && (
        <div className={styles.void}>
          <div className={styles.voidEffect}></div>
        </div>
      )}
      
      {/* UFO/Heaven effect when rising */}
      {animationStage === 'rising' && (
        <div className={styles.ufo}>
          <div className={styles.ufoBody}></div>
          <div className={styles.ufoLight}></div>
        </div>
      )}
    </div>
  );
};

export default FallingText;