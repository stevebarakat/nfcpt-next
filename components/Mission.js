import styles from './mission.module.css'
import { FaCheckCircle } from 'react-icons/fa';

const Mission = () => {

  return (
    <div className={styles.mission}>
      <div className={styles.missionLeftWrap}>
        <div>
          <span className={styles.missionSubHeader}>Talk to us before an attorney</span>
          <span className={styles.missionHeader}>Get the settlement you deserve.</span>
          <span className={styles.missionDescription}>With over 20 years serving the Orange Park area, North Florida Chiropractic Physical Therapy prides itself on being the primary chiropractic center for auto accident rehabilitation. Not only do we guide you to recovery from pain, we work closely with attorneys to ensure you get the settlement you deserve.</span>
        </div>
      </div>
      <div className={styles.missionRightWrap}>
        <div>
          <span className={styles.missionSubHeader}>We&apos;re not a franchise</span>
          <ul className={styles.missionList}>
            {/* <li>We're not a franchise</li> */}
            <li>Doctor owned and operated.</li>
            <li>Individualized personal treatment plans.</li>
            <li>No long term contracts.</li>
            <li>Free transportation to and from appointments.</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Mission;