import styles from './hero.module.css'
import Image from 'next/image';
import slide1 from '../images/hero-1.jpg';

const Hero = () => {
  return (
    <section className="container">
      <div className={styles.hero}>
        <span className={styles.headline}>Rest Assured</span>
        <span className={styles.description}>We guide accident victims to recovery and relief from back pain, neck pain, whiplash, headaches and more. <span className="bold">Accident recovery is what we do.</span></span>
        <Image layout="fill" objectFit="cover" objectPosition="center" src={slide1} alt="Picture of the author" />
      </div>
    </section>
  )
};

export default Hero;