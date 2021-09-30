import React from 'react';
import MainMenu from './MainMenu'
import styles from '../styles/header.module.css'
import Image from 'next/image';
import logo from '../images/logo.svg';
import slide1 from '../images/hero-slider-dark-1.jpg';

const Header = () => {
  return (
    <>
      <Image className={styles.heroImg} layout="fill" objectFit="cover" objectPosition="center" src={slide1} alt="Picture of the author" />

      <div className={styles.header}>
        <MainMenu />
      </div>
      {/* <Image src={logo} alt="North Florida Chiropractic Physical Therapy" /> */}
    </>
  )
};

export default Header;