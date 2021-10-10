import React from 'react'
import styles from './testimonials.module.css';

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <div className={styles.leftWrap}>
        <figure>
          <blockquote>
            <span className={styles.headline}>Keeping my body aligned and free of pain with regular chiropractic care is essential.</span>
          </blockquote>
          <figcaption>—Alex Rabon, professional swimmer</figcaption>
        </figure>
      </div>
      <div className={styles.rightWrap}>
        <figure>
          <blockquote>
            <span className={styles.headline}>Keeping my body aligned and free of pain with regular chiropractic care is essential.</span>
          </blockquote>
          <figcaption>—Alex Rabon, professional swimmer</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default Testimonials
