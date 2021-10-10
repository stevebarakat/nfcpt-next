import React from "react";
import Image from 'next/image';
import styles from './treatments.module.css';
import hip from '../images/hip.jpg';
import carpalTunnel from '../images/carpal-tunnel.jpg';
import headache from '../images/headache.jpg';
import pinchedNerve from '../images/pinched-nerve.jpg';
import sportsInjury from '../images/sports-injury.jpg';
import slippedDisk from '../images/slipped-disk.jpg';
import tendonitis from '../images/tendonitis.jpg';
import whiplash from '../images/whiplash.jpg';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Treatments = () => {
  return (
    <div className={styles.treatmentsWrap}>
      <h2 className={styles.h2}>Injuries & Conditions We Treat</h2>
      <div className="container">
        <Swiper
          speed={750}
          spaceBetween={0}
          slidesPerView={4}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          centeredSlides={true}
          autoplay={{
            "delay": 2500,
            "disableOnInteraction": true
          }}
          pagination={{
            "clickable": true
          }}
          navigation={true}
          breakpoints={{
            "300": {
              slidesPerView: 1,
              spaceBetween: 20
            },
            "470": {
              slidesPerView: 2,
              spaceBetween: 40
            },
            "540": {
              slidesPerView: 3,
              spaceBetween: 20
            },
            "768": {
              slidesPerView: 4,
              spaceBetween: 40
            },
            "1024": {
              slidesPerView: 5,
              spaceBetween: 50
            }
          }}
        >
          <SwiperSlide>
            <div className={styles.card}>
              <span className={styles.cardHeader}>Hip & Join Pain</span>
              <div>
                <Image src={hip} alt="Hip & Join Pain" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <span className={styles.cardHeader}>Carpal Tunnel</span>
              <div>
                <Image src={carpalTunnel} alt="Carpal Tunnel" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <span className={styles.cardHeader}>Migrane Headaches</span>
              <div>
                <Image src={headache} alt="Migrane Headaches" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <span className={styles.cardHeader}>Pinched Nerve</span>
              <div>
                <Image src={pinchedNerve} alt="Pinched Nerve" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <span className={styles.cardHeader}>Sports Injuries</span>
              <div>
                <Image src={sportsInjury} alt="Sports Injuries" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <span className={styles.cardHeader}>Sciatica & Herniated Disk</span>
              <div>
                <Image src={slippedDisk} alt="Herniated Disk" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <span className={styles.cardHeader}>Tendonitis & Bursitis</span>
              <div>
                <Image src={tendonitis} alt="Tendonitis & Bursitis" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <span className={styles.cardHeader}>Whiplash</span>
              <div>
                <Image src={whiplash} alt="Whiplash" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Treatments;