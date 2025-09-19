import React from 'react';
import FallingText from './FallingText';
import styles from './FallingTextDemo.module.css';

const FallingTextDemo = () => {
  return (
    <div className={styles.demoPage}>
      <header className={styles.header}>
        <h1>Animation Demo</h1>
        <p>Text Falling and Rising Animation</p>
      </header>
      
      <main className={styles.mainContent}>
        <div className={styles.animationContainer}>
          <FallingText text="Global Performance Marketing Company" />
        </div>
        
        <div className={styles.description}>
          <h2>Animation Features</h2>
          <ul>
            <li>Text falls down into a dark void</li>
            <li>Disappears into the void with a pulsing effect</li>
            <li>Reappears from above with a UFO effect</li>
            <li>Gently lands in its original position</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default FallingTextDemo;