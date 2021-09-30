import React from 'react';
import MainMenu from './MainMenu'
import styles from '../styles/header.module.css'
import Image from 'next/image';
import logo from '../images/logo.svg';
import slide1 from '../images/hero-slider-dark-1.jpg';

const Header = () => {
  return (
    <div className={styles.header}>
      <MainMenu />
    </div>
  )
};

export default Header;