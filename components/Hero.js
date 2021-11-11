import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";
import hero from "../images/hero-1.webp";
import styles from "./hero.module.css";

const Hero = ({ home }) => {
  const urlPixelated = buildUrl(home.featuredImage.node.slug, {
    cloud: {
      cloudName: "stevebarakat",
    },
    transformations: {
      effect: {
        name: "pixelate",
      },
    },
  });

  return (
    <section className="container">
      <div className={styles.hero}>
        <span className={styles.headline}>
          {home.featuredImage.node.title}
        </span>
        <div
          dangerouslySetInnerHTML={{
            __html: home.featuredImage.node.caption,
          }}
          className={styles.description}
        ></div>
      </div>
      <Image
        priority
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        placeholder="blur"
        blurDataURL={urlPixelated}
        src={home.featuredImage.node.sourceUrl}
        alt={home.featuredImage.node.altText}
      />
    </section>
  );
};

export default Hero;
