import styles from './cta.module.css'
import Image from 'next/image';
import special from '../images/new-patient-horizontal.svg';

const CallToAction = () => (
  <div className={styles.cta}>
    <div>
      <Image layout="responsive" objectPosition="center" src={special} alt="New Patient Special" />
    </div>
    <div>Widget Two</div>
  </div>
);

export default CallToAction;