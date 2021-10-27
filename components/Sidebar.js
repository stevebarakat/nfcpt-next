import styles from "./sidebar.module.css";
import Image from "next/image";
import coupon from "../images/new-patient-vertical.svg";
import margaret from "../images/margaret.jpg";
import Button from "./Button";

const Sidebar = ({ testimonialContent, testimonialImage }) => {
  console.log(testimonialContent);
  return (
    <aside>
      <div
        className={styles.sidebarWidget}
        style={{ background: "var(--accentColor)" }}
      >
        <Image
          quality={100}
          src={coupon}
          alt="Picture of the author"
        />
        <form>
          <div className="inputWrap">
            <label htmlFor="firstName">First Name:</label>
            <input id="firstName" type="text" />
          </div>
          <div className="inputWrap">
            <label htmlFor="firstName">Last Name:</label>
            <input id="firstName" type="text" />
          </div>
          <div className="inputWrap">
            <label htmlFor="firstName">Phone Number:</label>
            <input id="firstName" type="tel" />
          </div>
          <div className="inputWrap">
            <label htmlFor="firstName">Email:</label>
            <input id="firstName" type="email" />
          </div>
          <div className="inputWrap">
            <Button
              color="var(--accentColor)"
              borderColor="white"
              textColor="white"
              width="100%"
            >
              Claim This Offer Now
            </Button>
          </div>
        </form>
      </div>
      <div
        className={styles.sidebarWidget}
        style={{ background: "var(--primaryColor)" }}
      >
        <div className={styles.testimonialImg}>
          <Image
            src={margaret}
            quality={100}
            alt="Picture of the author"
          />
        </div>
        <blockquote>
          <span className={styles.testimonial}>
            {testimonialContent}
          </span>
        </blockquote>
      </div>
    </aside>
  );
};

export default Sidebar;
