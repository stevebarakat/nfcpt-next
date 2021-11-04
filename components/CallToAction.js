import styles from "./cta.module.css";
import Button from "./Button";
import Image from "next/image";
import special from "../images/new-patient-horizontal.svg";

const CallToAction = () => (
  <div className={styles.cta}>
    <div className="grid">
      <div className={styles.ctaLeftWrap}>
        <Image
          layout="responsive"
          objectPosition="center"
          src={special}
          alt="New Patient Special"
        />
      </div>
      <div className={styles.ctaRightWrap}>
        <div>
          <span className={styles.ctaHeader}>Begin The New You</span>
          <span className={styles.ctaSubHeader}>
            Take the first step
          </span>
          <form className={styles.ctaForm}>
            <div className="flex">
              {/* <input
                style={{
                  borderRadius: "4px 0 0 4px",
                }}
                className="text-input"
                type="email"
                placeholder="you@mail.com"
                required
              /> */}
              {/* <Button
                color="var(--grey80)"
                borderColor="var(--whiteColor)"
                textColor="white"
                style={{ padding: "0.5rem" }}
              >
                Do it!
              </Button> */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <Button color="white" textColor="var(--accentColor)">
                  Learn More
                </Button>
                <Button
                  color="var(--accentColor)"
                  borderColor="var(--whiteColor)"
                  textColor="white"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </form>
          {/* <span className={styles.ctaDescription}>
            Sign up to receive our complimentary wellness guide and a
            free consultation.
          </span> */}
        </div>
      </div>
    </div>
  </div>
);

export default CallToAction;
