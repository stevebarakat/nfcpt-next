import styles from './footer.module.css'
import { FaTwitterSquare, FaYoutubeSquare, FaFacebookSquare } from 'react-icons/fa';
import { SiGooglemybusiness } from 'react-icons/si';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.upperFooter}>
        <span className={styles.h4}>Get The Settlement You Deserve.</span>
      </div>
      <div className={styles.innerFooter}>
        <div>
          <h4 className={styles.h4}>Office Hours</h4>
          <ul>
            <li>Monday: 9:00AM - 9:00PM</li>
            <li>Tuesday: 9:00AM - 9:00PM</li>
            <li>Wednesday: 9:00AM - 9:00PM</li>
            <li>Thursday: 9:00AM - 9:00PM</li>
            <li>Friday: 9:00AM - 9:00PM</li>
            <li>Saturday: 9:00AM - 9:00PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
        <div>
          <h4 className={styles.h4}>Connect</h4>
          <ul>
            <li>
              <a className={styles.social} href="#google">
                <span className={styles.icon}><SiGooglemybusiness /></span>
                <span>Google</span>
              </a>
            </li>
            <li>
              <a className={styles.social} href="#fb">
                <span className={styles.icon}><FaFacebookSquare /></span>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a className={styles.social} href="#yt">
                <span className={styles.icon}><FaYoutubeSquare /></span>
                <span>YouTube</span>
              </a>
            </li>
            <li>
              <a className={styles.social} href="#tw">
                <span className={styles.icon}><FaTwitterSquare /></span>
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={styles.h4}>Links</h4>
          <ul>
            <li>First Visit</li>
            <li>Pricing Plans</li>
            <li>Chiropractic Services</li>
            <li>Physical Therapy</li>
            <li>Massage Therapy</li>
            <li>Accident Rehabilitation</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className={styles.h4}>Contact Info</h4>
          <ul>
            <li className="bold">North Florida Chiropractic<br />Physical Therapy</li>
            <li>223 Blanding Blvd</li>
            <li>Orange Park, FL 32073</li>
            <li>Tel: (904) 272-4329</li>
            <li>Fax: (904) 375-8852</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;