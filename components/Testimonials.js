import React from 'react'
import styles from './testimonials.module.css';

const Testimonials = () => {
  return (
    <div>
      <div className={styles.testimonials}>
        <div className={styles.leftWrapTop}>
          <figure>
            <blockquote>
              <span className={styles.headline}>Keeping my body aligned and free of pain with regular chiropractic care is essential.</span>
            </blockquote>
            <figcaption>—Alex Rayon, professional diver</figcaption>
          </figure>
        </div>
        <div className={styles.rightWrapTop}>
          <figure>
            <blockquote>
              <span className={styles.headline}>Keeping my body aligned and free of pain with regular chiropractic care is essential.</span>
            </blockquote>
            <figcaption><span>—Alex Ray</span>, professional diver</figcaption>
          </figure>
        </div>
      </div>
      <div className={styles.testimonials}>
        <div className={styles.leftWrapBtm}>
          <figure>
            <blockquote>
              <span className={styles.headline}>Keeping my body aligned and free of pain with regular chiropractic care is essential.</span>
            </blockquote>
            <figcaption>—Alex Ray, professional diver</figcaption>
          </figure>
        </div>
        <div className={styles.rightWrapBtm}>
          <figure>
            <blockquote>
              <span className={styles.headline}>Keeping my body aligned and free of pain with regular chiropractic care is essential.</span>
            </blockquote>
            <figcaption>—Alex Rayon, professional diver</figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
