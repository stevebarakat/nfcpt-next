import styles from './cta.module.css'
import Image from 'next/image';
import special from '../images/new-patient-horizontal.svg';

const CallToAction = () => (
  <div className={styles.cta}>
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <div>
          <Image layout="responsive" objectPosition="center" src={special} alt="New Patient Special" />
        </div>
        <div>
          <form className={styles.ctaForm}>
            <input type="text" />
            <input type="tel" />
            <input type="email" placeholder="you@mail.com" required />
          </form>
        </div>
      </div>
      <div>
        Auto Accident Rehabilitation Is Our Thing...
        We work closely with attorneys to ensure you get the settlement you deserve.
        Serving the Orange Park area for over twenty years, North Florida Chiropractic Physical Therapy is the primary chiropractic center for auto accident rehabilitation.
      </div>
      <div>
        We're not a franchise.
        Doctor owned and operated.
        Individualized personal treatment plans.
        No long term contracts.
        Free transportation to and from appointments.
      </div>
    </div>
  </div>
);

export default CallToAction;