import styles from './mission.module.css'

const Mission = () => (
  <div className={styles.mission}>
    <div className="grid2">
      <div className={styles.missionLeftWrap}>
        <div>
          <span className={styles.missionSubHeader}>EFFECTIVE PAIN TREATMENT WITHOUT MEDICATION</span>
          <span className={styles.missionHeader}>Safe non-evasive treatments.</span>
          <span className={styles.missionDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor nam dignissimos, quam accusamus, nihil natus ipsum quibusdam officiis repellendus voluptatum. Molestiae, dolorum ullam officia hic quas perspiciatis. Sed, libero? Sign up to receive our complimentary wellness guide and a free consultation.</span>
        </div>
      </div>
      <div className={styles.missionRightWrap}>
        <div>
          <span className={styles.missionSubHeader}>Talk to us before an attorney</span>
          <span className={styles.missionHeader}>Get the settlement you deserve.</span>
          <span className={styles.missionDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor nam dignissimos, quam accusamus, nihil natus ipsum quibusdam officiis repellendus voluptatum. Molestiae, dolorum ullam officia hic quas perspiciatis. Sed, libero? Sign up to receive our complimentary wellness guide and a free consultation.</span>
        </div>
      </div>
    </div>
  </div>
);

export default Mission;