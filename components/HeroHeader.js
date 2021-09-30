import React from 'react';
import Header from './Header'
import styles from './header.module.css'
import Image from 'next/image';
import slide1 from '../images/hero-slider-dark-1.jpg';

const HeroHeader = () => {
  return (
    <>
      <Image className={styles.heroImg} layout="fill" objectFit="cover" objectPosition="center" src={slide1} alt="Picture of the author" />

      <div className={styles.header}>
        <Header />
      </div>
    </>
  )
};

export default HeroHeader;