import { useEffect, useRef } from "react";
import styles from "./intro.module.css";
import Button from "./Button";
import Image from "next/image";
import special from "../images/new-patient-horizontal.svg";
import { useCountUp } from "react-countup";

const CallToAction = () => {
  const countUpRef = useRef(null);
  const { pauseResume } = useCountUp({
    ref: countUpRef,
    start: -1000,
    end: 20,
    delay: 1000,
    duration: 5,
  });

  useEffect(() => {
    pauseResume();
  }, [pauseResume]);

  return (
    <div className={styles.cta}>
      <div className="grid2">
        <div className={styles.ctaLeftWrap}>
          <span className={styles.ctaHeader}>
            Car Accident Chiropractor
          </span>
          <span className={styles.ctaSubHeader}>
            Take the first step
          </span>
          <p>
            Whether you’re seeking pain relief or preventative care,
            you can expect our patient-centric approach to be new and
            different from any healthcare experience you’ve had
            before. Perhaps even life-changing.
          </p>
        </div>
        <div className={styles.ctaRightWrap}>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span>
                <i ref={countUpRef}></i>Y+
              </span>
              <span>Serving Orange Park</span>
            </div>
            <div className={styles.stat}>
              <span>3.5K</span>
              <span>Patients Served</span>
            </div>
            <div className={styles.stat}>
              <span>$3M</span>
              <span>Settlement Claims</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
