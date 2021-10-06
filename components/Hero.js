import React from 'react';
import styles from './hero.module.css'
import Image from 'next/image';
import slide1 from '../images/hero-slider-dark-1.jpg';

const Hero = () => {
  return (
    <section className="section">

      <div className={styles.hero}>
        <span className={styles.headline} style={{ zIndex: "9999" }} >Start your new normal</span>
        <span className={styles.description}>Guiding accident victims to recovery and relief from back pain, neck pain, whiplash, migraines and more.<br />Accident recovery is what we do.</span>
        <div className={styles.heroImg}>
          <Image className={styles.heroImg} layout="fill" objectFit="cover" objectPosition="center" src={slide1} alt="Picture of the author" />
        </div>
      </div>
    </section>
  )
};

export default Hero;