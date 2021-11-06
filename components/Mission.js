import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import styles from "./mission.module.css";
import { FaCheckCircle } from "react-icons/fa";

const Mission = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  // console.log("in view: ", inView);
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
            <li>Doctor owned and operated.</li>
            <li>Individualized personal treatment plans.</li>
            <li>No long term contracts.</li>
            <li>Free transportation to and from appointments.</li>
          </ul>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span>20Y+</span>
              <span>Serving Orange Park</span>
            </div>
            <div className={styles.stat}>
              <CountUp
                start={0}
                end={inView ? target : 220}
                duration={2}
                separator="."
                useEasing={true}
              >
                {({ countUpRef }) => (
                  <span
                    className="text-2xl md:text-4xl font-black leading-none"
                    ref={countUpRef}
                  />
                )}
              </CountUp>
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
