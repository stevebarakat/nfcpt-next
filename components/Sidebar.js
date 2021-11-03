import { useEffect } from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import coupon from "../images/new-patient-vertical.svg";
import margaret from "../images/margaret.jpg";
import Button from "./Button";
import { gql, useQuery } from "@apollo/client";
import { client } from "../lib/apollo";

// const TESTIMONIALS = gql`
//   query GetTestimonials {
//     pageBy(uri: "settings-page") {
//       pageId
//       pageSettings {
//         testimonials {
//           testimonial {
//             testimonialContent
//             testimonialPhoto {
//               sourceUrl
//             }
//           }
//         }
//       }
//     }
//   }
// `;

const Sidebar = () => {
  // const { loading, error, data } = useQuery(TESTIMONIALS);

  function randomNumber(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const n = randomNumber(0, 1);

  console.log(n);

  // const testimonialPhoto =
  //   data?.pageBy?.pageSettings.testimonials[n].testimonial
  //     .testimonialPhoto.sourceUrl;
  // const testimonialContent =
  //   data?.pageBy?.pageSettings.testimonials[n].testimonial
  //     .testimonialContent;
  return (
    <aside className={styles.sidebar}>
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
          {/* {testimonialPhoto && (
            <Image
              src={testimonialPhoto}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
              alt="Picture of the author"
            />
          )} */}
        </div>
        <blockquote>
          <span className={styles.testimonial}>
            {/* {testimonialContent} */}I Love It!
          </span>
        </blockquote>
      </div>
    </aside>
  );
};

export default Sidebar;
