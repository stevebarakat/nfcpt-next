import Image from "next/image";
import hero from "../images/hero-1.jpg";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className="container">
      <div className={styles.hero}>
        <span className={styles.headline}>Your New Normal</span>
        <p className={styles.description}>
          We guide accident victims to recovery and relief from back
          pain, neck pain, whiplash, headaches and more. Accident
          recovery is what we do.
        </p>
      </div>
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src={hero}
        alt="Picture of the author"
      />
    </section>
  );
};

export default Hero;
