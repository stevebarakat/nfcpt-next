import React from 'react';
import styles from '../styles/hero.module.css'

const Hero = () => {
  return (
    <section className="section">
      <div className={styles.hero}>
        <div className={styles.heroImg}>
          <h1>Start your new normal</h1>
          <p>Guiding accident victims to recovery and relief from back pain, neck pain, whiplash, migraines and more.<br />Accident recovery is what we do.</p>
        </div>
      </div>
    </section>
  )
};

export default Hero;