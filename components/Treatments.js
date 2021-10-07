import styles from './treatments.module.css';
import Image from 'next/image';
import massageThearapyImg from '../images/hip.jpg';

const Treatments = () => {

  return (
    <div>
      <div className="flex" style={{ background: "var(--accentColor)" }}>
        <div className={styles.card}>
          <span className={styles.cardHeader}>Hip & Joint Pain</span>
          <div className={styles.cardImg}>
            <Image src={massageThearapyImg} alt="Picture of the author" />
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.cardHeader}>Hip & Joint Pain</span>
          <div className={styles.cardImg}>
            <Image src={massageThearapyImg} alt="Picture of the author" />
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.cardHeader}>Hip & Joint Pain</span>
          <div className={styles.cardImg}>
            <Image src={massageThearapyImg} alt="Picture of the author" />
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.cardHeader}>Hip & Joint Pain</span>
          <div className={styles.cardImg}>
            <Image src={massageThearapyImg} alt="Picture of the author" />
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.cardHeader}>Hip & Joint Pain</span>
          <div className={styles.cardImg}>
            <Image src={massageThearapyImg} alt="Picture of the author" />
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.cardHeader}>Hip & Joint Pain</span>
          <div className={styles.cardImg}>
            <Image src={massageThearapyImg} alt="Picture of the author" />
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.cardHeader}>Hip & Joint Pain</span>
          <div className={styles.cardImg}>
            <Image src={massageThearapyImg} alt="Picture of the author" />
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.cardHeader}>Hip & Joint Pain</span>
          <div className={styles.cardImg}>
            <Image src={massageThearapyImg} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Treatments;