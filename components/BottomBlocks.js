import React from "react";
import styles from "./bottomBlocks.module.css";
import Button from "./Button";

const BottomBlocks = () => {
  return (
    <div>
      <div className={styles.bottomBlocks}>
        <div className={styles.leftWrapTop}>
          <div>
            <figure className={styles.figure}>
              <blockquote>
                <span className={styles.quote}>
                  Keeping my body aligned and free of pain with
                  regular chiropractic care is essential.
                </span>
              </blockquote>
              <figcaption className={styles.figcaption}>
                <span>—Alex Ray</span>, professional diver
              </figcaption>
            </figure>
          </div>
        </div>
        <div className={styles.rightWrapTop}>
          <div>
            <figure className={styles.figure}>
              <blockquote>
                <span className={styles.quote}>
                  Keeping my body aligned and free of pain with
                  regular chiropractic care is essential.
                </span>
              </blockquote>
              <figcaption className={styles.figcaption}>
                <span>—Alex Ray</span>, professional diver
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className={styles.bottomBlocks}>
        <div className={styles.leftWrapBtm}>
          <figure className={styles.figure}>
            <span className={styles.headline}>Join the club!</span>
            <p>
              The best way to keep your spine healthy is by taking
              care of it. We offer package deals on regular
              chiropractic treatments and massage therapy to club
              members.
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                paddingTop: "2rem",
              }}
            >
              <Button
                color="var(--primaryColor)"
                textColor="var(--grey05)"
              >
                Learn More
              </Button>
              <Button
                color="var(--accentColor)"
                borderColor="var(--grey05)"
                textColor="white"
              >
                Get Started
              </Button>
            </div>
          </figure>
        </div>
        <div className={styles.rightWrapBtm}>
          <figure className={styles.figure}>
            <span className={styles.headline}>Join the club!</span>
            <p>
              The best way to keep your spine healthy is by taking
              care of it. We offer package deals on regular
              chiropractic treatments and massage therapy to club
              members.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
                paddingTop: "2rem",
              }}
            >
              <Button
                color="var(--primaryColor)"
                textColor="var(--grey05)"
              >
                Learn More
              </Button>
              <Button
                color="var(--accentColor)"
                borderColor="var(--grey05)"
                textColor="white"
              >
                Get Started
              </Button>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default BottomBlocks;
