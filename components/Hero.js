import React, { useState, useEffect } from 'react';
import styles from './hero.module.css'
import Image from 'next/image';
import slide1 from '../images/happy-massage.jpg';

const Hero = () => {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    window.onload = setHeight(window.innerHeight);
    window.onresize = setHeight(window.innerHeight);
  });

  return (
    <section className="container">
      <div style={{ height: height }} className={styles.hero}>
        <span className={styles.headline}>Rest Assured</span>
        <span className={styles.description}>We guide accident victims to recovery and relief from back pain, neck pain, whiplash, headaches and more. <span className="bold">Accident recovery is what we do.</span></span>
        <div className={styles.heroImg}>
          <Image className={styles.heroImg} layout="fill" objectFit="cover" objectPosition="center" src={slide1} alt="Picture of the author" />
        </div>
      </div>
    </section>
  )
};

export default Hero;