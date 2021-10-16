import Image from 'next/image';
import hero from '../images/hero-1.jpg';
import logo from '../images/logo.svg';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className="container">
      <span className={styles.logo}>
        <Image src={logo} quality="100" alt="North Florida Chiropractic Physical Therapy" />
      </span>
      <div className={styles.hero}>
        <span className={styles.headline}>Rest Assured</span>
        <span className={styles.description}>We guide accident victims to recovery and relief from back pain, neck pain, whiplash, headaches and more. <span className="bold">Accident recovery is what we do.</span></span>
      </div>
      <Image layout="fill" objectFit="cover" objectPosition="center" src={hero} alt="Picture of the author" />
    </section>
  )
};

export default Hero;