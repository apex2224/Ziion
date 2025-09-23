import React from 'react';
import styles from './ScrollRevealDemo.module.css';

const ScrollRevealDemo = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} reveal`}>ScrollReveal Demo</h1>
      
      <div className={`${styles.section} reveal-left`}>
        <h2>Left Animation</h2>
        <p>This element slides in from the left when it enters the viewport.</p>
      </div>
      
      <div className={`${styles.section} reveal-right`}>
        <h2>Right Animation</h2>
        <p>This element slides in from the right when it enters the viewport.</p>
      </div>
      
      <div className={`${styles.section} reveal-top`}>
        <h2>Top Animation</h2>
        <p>This element slides in from the top when it enters the viewport.</p>
      </div>
      
      <div className={`${styles.section} reveal-bottom`}>
        <h2>Bottom Animation</h2>
        <p>This element slides in from the bottom when it enters the viewport.</p>
      </div>
      
      <div className={`${styles.section} reveal-delay-1`}>
        <h2>Delayed Animation (1)</h2>
        <p>This element has a slight delay before animating.</p>
      </div>
      
      <div className={`${styles.section} reveal-delay-2`}>
        <h2>Delayed Animation (2)</h2>
        <p>This element has a medium delay before animating.</p>
      </div>
      
      <div className={`${styles.section} reveal-delay-3`}>
        <h2>Delayed Animation (3)</h2>
        <p>This element has a longer delay before animating.</p>
      </div>
      
      <div className={`${styles.grid}`}>
        <div className={`${styles.card} reveal`}>
          <h3>Card 1</h3>
          <p>This is a card with ScrollReveal animation.</p>
        </div>
        <div className={`${styles.card} reveal-delay-1`}>
          <h3>Card 2</h3>
          <p>This is a card with ScrollReveal animation and delay.</p>
        </div>
        <div className={`${styles.card} reveal-delay-2`}>
          <h3>Card 3</h3>
          <p>This is a card with ScrollReveal animation and longer delay.</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollRevealDemo;