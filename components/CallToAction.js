import styles from './cta.module.css'
import Image from 'next/image';
import special from '../images/new-patient-horizontal.svg';

const CallToAction = () => (
  <div className={styles.cta}>
    <div className="grid2">
      <div className={styles.ctaLeftWrap}>
        <Image layout="responsive" objectPosition="center" src={special} alt="New Patient Special" />
      </div>
      <div className={styles.ctaRightWrap}>
        <div>
          <span className={styles.ctaHeader}>Begin The New You</span>
          <span className={styles.ctaSubHeader}>Take the first step.</span>
          <form className={styles.ctaForm}>
            <input className="text-input" type="email" placeholder="you@mail.com" required />
            <button className={styles.ctaButton}>Do It!</button>
          </form>
          <span className={styles.ctaDescription}>Sign up to receive our complimentary wellness guide and a free consultation.</span>
        </div>
      </div>
    </div>
  </div>
);

export default CallToAction;