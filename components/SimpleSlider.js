import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import hip from '../images/hip.jpg'
import styles from './treatments.module.css';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div style={{ background: `var(--accentColor)` }}>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
            <div className={styles.card}>
              <span className={styles.cardHeader}>Hip & Joint Pain</span>
              <div className={styles.cardImg}>
                <Image src={hip} alt="Picture of the author" />
              </div>
            </div>
          </div>
          <div>
            <h3>2</h3>
            <Image src={hip} alt="Picture of the author" />
          </div>
          <div>
            <h3>3</h3>
            <Image src={hip} alt="Picture of the author" />
          </div>
          <div>
            <h3>4</h3>
            <Image src={hip} alt="Picture of the author" />
          </div>
          <div>
            <h3>5</h3>
            <Image src={hip} alt="Picture of the author" />
          </div>
          <div>
            <h3>6</h3>
            <Image src={hip} alt="Picture of the author" />
          </div>
          <div>
            <h3>7</h3>
            <Image src={hip} alt="Picture of the author" />
          </div>
          <div>
            <h3>8</h3>
            <Image src={hip} alt="Picture of the author" />
          </div>
        </Slider>
      </div>
    );
  }
}