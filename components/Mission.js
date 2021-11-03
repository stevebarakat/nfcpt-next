import { useEffect, useRef } from "react";
import CountUp, { useCountUp } from "react-countup";

import styles from "./mission.module.css";
import { FaCheckCircle } from "react-icons/fa";

const Mission = () => {
  const countUpRef = useRef(null);
  const { pauseResume } = useCountUp({
    ref: countUpRef,
    start: 0.01,
    end: 20,
    delay: 1000,
    duration: 5,
    suffix: "Y+",
  });

  useEffect(() => {
    pauseResume();
  }, [pauseResume]);

  return (
    <div className={styles.mission}>
      <div className={styles.missionLeftWrap}>
        <div>
          <span className={styles.missionHeader}>
            <h1>Car Accident Chiropractor</h1>
          </span>
          <span className={styles.missionDescription}>
            With over 20 years serving the Orange Park area, North
            Florida Chiropractic Physical Therapy prides itself on
            being the primary chiropractic center for auto accident
            rehabilitation. Not only do we guide you to recovery from
            pain, we work closely with attorneys to ensure you get the
            settlement you deserve.
          </span>
        </div>
      </div>
      <div className={styles.missionRightWrap}>
        <div>
          <span className={styles.missionSubHeader}>
            We&apos;re not a franchise
          </span>
          <ul className={styles.missionList}>
            {/* <li>We're not a franchise</li> */}
            <li>Doctor owned and operated.</li>
            <li>Individualized personal treatment plans.</li>
            <li>No long term contracts.</li>
            <li>Free transportation to and from appointments.</li>
          </ul>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span>
                <i ref={countUpRef}></i>
              </span>
              <span>Serving Orange Park</span>
            </div>
            <div className={styles.stat}>
              <CountUp end={100} duration={5} suffix="K" />
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

export default Mission;
