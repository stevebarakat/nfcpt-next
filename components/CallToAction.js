import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./cta.module.css";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import special from "../images/new-patient-horizontal.svg";

const CallToAction = () => {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#left"),
      {
        opacity: 0,
        x: -2000,
      },
      {
        opacity: 1,
        x: 0,
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#right"),
      {
        opacity: 0,
        x: 2000,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector(".grid"),
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className={styles.cta}>
      <div className="grid">
        <div id="left" className={styles.ctaLeftWrap}>
          <Image
            layout="responsive"
            objectPosition="center"
            src={special}
            alt="New Patient Special"
          />
        </div>
        <div id="right" className={styles.ctaRightWrap}>
          <div>
            <span className={styles.ctaHeader}>
              Begin The New You
            </span>
            <span className={styles.ctaSubHeader}>
              Take the first step
            </span>
            <div className={styles.ctaForm}>
              <div className="flex">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Link passHref href="/about-us">
                    <a>
                      <Button
                        color="white"
                        textColor="var(--accentColor)"
                      >
                        Learn More
                      </Button>
                    </a>
                  </Link>
                  <Link passHref href="/get-started">
                    <a>
                      <Button
                        color="var(--accentColor)"
                        borderColor="var(--grey05)"
                        textColor="white"
                      >
                        Get Started
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
