import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./cta.module.css";
import Button from "./Button";
import Image from "next/image";
import special from "../images/new-patient-horizontal.svg";

const CallToAction = () => {
  // const el = useRef();
  // const q = gsap.utils.selector(el);

  // useEffect(() => {
  //   // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
  //   gsap.fromTo(
  //     q(".grid > div"),
  //     { x: "-5000px" },
  //     { x: 0, duration: 1, stagger: 1 }
  //   );
  // }, []);

  return (
    <div className={styles.cta}>
      <div
        // ref={el}
        className="grid"
      >
        <div className={styles.ctaLeftWrap}>
          <Image
            layout="responsive"
            objectPosition="center"
            src={special}
            alt="New Patient Special"
          />
        </div>
        <div className={styles.ctaRightWrap}>
          <div>
            <span className={styles.ctaHeader}>
              Begin The New You
            </span>
            <span className={styles.ctaSubHeader}>
              Take the first step
            </span>
            <form className={styles.ctaForm}>
              <div className="flex">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Button
                    color="white"
                    textColor="var(--accentColor)"
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
              </div>
            </form>
            {/* <span className={styles.ctaDescription}>
            Sign up to receive our complimentary wellness guide and a
            free consultation.
          </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
