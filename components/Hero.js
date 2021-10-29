import Image from "next/image";
import hero from "../images/hero-1.jpg";
import styles from "./hero.module.css";

const Hero = ({ headline, description }) => {
  console.log(headline, description);
  return (
    <section className="container">
      <div className={styles.hero}>
        <span className={styles.headline}>{headline}</span>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className={styles.description}
        ></div>
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
