import React from 'react';
import styles from './hero.module.css'
import Image from 'next/image';
import slide1 from '../images/happy-massage.jpg';

const Hero = () => {
  return (
    <section className="container">
      <div className={styles.hero}>
        <span className={styles.headline}>Rest Assured</span>
        <span className={styles.description}>Guiding accident victims to recovery and relief from back pain, neck pain, whiplash, migraines and more.<br />Accident recovery is what we do.</span>
        <div className={styles.heroImg}>
          <Image className={styles.heroImg} layout="fill" objectFit="cover" objectPosition="center" src={slide1} alt="Picture of the author" />
        </div>
      </div>
    </section>
  )
};

export default Hero;