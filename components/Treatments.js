import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import hip from '../images/hip.jpg'
import styles from './treatments.module.css';

export default class Treatments extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div style={{ background: `var(--accentColor)`, paddingBottom: `6rem` }}>
        <div className="container">
          <Slider {...settings}>
            <div>
              <div className={styles.card}>
                <span className={styles.cardHeader}>Hip & Joint Pain</span>
                <div>
                  <Image src={hip} alt="Picture of the author" />
                </div>
              </div>
            </div>
            <div>
              <div className={styles.card}>
                <span className={styles.cardHeader}>Hip & Joint Pain</span>
                <div>
                  <Image src={hip} alt="Picture of the author" />
                </div>
              </div>
            </div>
            <div>
              <div className={styles.card}>
                <span className={styles.cardHeader}>Hip & Joint Pain</span>
                <div>
                  <Image src={hip} alt="Picture of the author" />
                </div>
              </div>
            </div>
            <div>
              <div className={styles.card}>
                <span className={styles.cardHeader}>Hip & Joint Pain</span>
                <div>
                  <Image src={hip} alt="Picture of the author" />
                </div>
              </div>
            </div>
            <div>
              <div className={styles.card}>
                <span className={styles.cardHeader}>Hip & Joint Pain</span>
                <div>
                  <Image src={hip} alt="Picture of the author" />
                </div>
              </div>
            </div>
            <div>
              <div className={styles.card}>
                <span className={styles.cardHeader}>Hip & Joint Pain</span>
                <div>
                  <Image src={hip} alt="Picture of the author" />
                </div>
              </div>
            </div>
            <div>
              <div className={styles.card}>
                <span className={styles.cardHeader}>Hip & Joint Pain</span>
                <div>
                  <Image src={hip} alt="Picture of the author" />
                </div>
              </div>
            </div>
            <div>
              <div className={styles.card}>
                <span className={styles.cardHeader}>Hip & Joint Pain</span>
                <div>
                  <Image src={hip} alt="Picture of the author" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}